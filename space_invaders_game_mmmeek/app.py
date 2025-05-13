import streamlit as st
from PIL import Image

# Initialize session state for cart
if 'cart' not in st.session_state:
    st.session_state.cart = {
        'items': [],
        'total': 0.0
    }

# Menu items
menu_items = [
    {
        'id': '1',
        'image': 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
        'title': 'Big Mac® Meal',
        'price': 8.99
    },
    {
        'id': '2',
        'image': 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
        'title': 'Quarter Pounder®',
        'price': 7.49
    },
    {
        'id': '3',
        'image': 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
        'title': 'Chicken McNuggets®',
        'price': 5.99
    },
    {
        'id': '4',
        'image': 'https://images.unsplash.com/photo-1606755456206-b25206bfa433',
        'title': 'French Fries',
        'price': 2.99
    }
]

# Header
st.image('https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg', width=100)
st.title("McDonald's Clone")

# Cart functions
def add_to_cart(item):
    existing_item = next((i for i in st.session_state.cart['items'] if i['id'] == item['id']), None)
    if existing_item:
        existing_item['quantity'] += 1
    else:
        st.session_state.cart['items'].append({**item, 'quantity': 1})
    st.session_state.cart['total'] += item['price']

def remove_from_cart(item_id):
    item = next((i for i in st.session_state.cart['items'] if i['id'] == item_id), None)
    if item:
        st.session_state.cart['total'] -= item['price'] * item['quantity']
        st.session_state.cart['items'] = [i for i in st.session_state.cart['items'] if i['id'] != item_id]

def clear_cart():
    st.session_state.cart = {'items': [], 'total': 0.0}

# Cart sidebar
with st.sidebar:
    st.header("Your Order")
    if st.session_state.cart['items']:
        for item in st.session_state.cart['items']:
            col1, col2 = st.columns([4, 1])
            col1.write(f"{item['title']} (${item['price']} x {item['quantity']})")
            if col2.button("❌", key=f"remove_{item['id']}"):
                remove_from_cart(item['id'])
                st.rerun()
        st.write(f"**Total:** ${st.session_state.cart['total']:.2f}")
        if st.button("Clear Cart"):
            clear_cart()
            st.rerun()
    else:
        st.write("Your cart is empty")

# Main content
st.header("Our Menu")
cols = st.columns(4)

for i, item in enumerate(menu_items):
    with cols[i % 4]:
        st.image(item['image'], use_column_width=True)
        st.subheader(item['title'])
        st.write(f"${item['price']}")
        if st.button(f"Add to Order - {item['title']}", key=f"add_{item['id']}"):
            add_to_cart(item)
            st.rerun()

# Footer
st.markdown("---")
st.write("© 2023 McDonald's Clone")
