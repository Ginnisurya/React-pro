import Product from "./product.jsx";
function ProductTab() {
    let styles ={
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        

    }
    return (
        
        <div style={styles}>
            <Product name="Laptop"  idx={0}/>
            <Product name="Ipad"  idx={1}/>
            <Product name="Mobile"  idx={2}/>

        </div> 
    ) 

}


export default ProductTab;