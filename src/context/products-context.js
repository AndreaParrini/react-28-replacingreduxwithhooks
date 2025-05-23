import { createContext, useState } from "react";

export const ProductsContext = createContext({
    products: [],
    toggleFavorite: (id) => {}
})

export default function ProductsContextProvider({children}){
    const [productList, setProductList] = useState([
        {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
        },
        {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
        },
        {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
        },
        {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
        }
    ]);

    function toggleFavorite(productId){
        setProductList(currentProdList => {
            const prodIndex = currentProdList.findIndex(p => p.id === productId);
            const newFavStatus = !currentProdList[prodIndex].isFavorite;
            const updatedProducts = [...currentProdList];

            updatedProducts[prodIndex] = {
                ...currentProdList[prodIndex],
                isFavorite: newFavStatus
            };

            return updatedProducts;
            
        })
    }

    const ctxValue= {
        products: productList,
        toggleFavorite
    }
    return (
        <ProductsContext.Provider value={ctxValue}>
            {children}
        </ProductsContext.Provider>
    )
}