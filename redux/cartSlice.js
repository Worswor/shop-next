import {createSlice} from "@reduxjs/toolkit";

// Starttilstand for cartSlice/kurven (den starter tom)
const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        //Adds items
        addToCart: (state, action) => {
            const product = action.payload;

            // Check if the product already exists in the cart
            const existingItem = state.items.find(
                (item) => item.id === product.id
            );
            // If it exists, increase the quantity, otherwise add it to the cart with quantity 1
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        // Removes items
        removeFromCart: (state, action) => {
            const id = typeof action.payload === "object"
             ? action.payload.id
             : action.payload;

            const existingItem = state.items.find(
                (item) => item.id === id
            );

            if (!existingItem) return; // If the item doesn't exist, do nothing

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item) => item.id !== id
                );
            } else {
                existingItem.quantity -= 1;
            }
        },

        // Clears the cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;