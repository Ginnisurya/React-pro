import "./product.css";

function Product({ name, idx }) {
    let oldPrice = [100, 200, 300];
    let newPrice = [80, 150, 250];
    let styles = {
        textDecoration: "line-through",
    }

    let des = [["High-performance laptop", "laptop"], ["High-performance Ipad", "High-ipad"], ["High-performance MObile", "High-mobile"]];
    return (

        <div className="product">
            <h2>{name}</h2>
            <p>{des[idx][0]}</p>
            <p>{des[idx][1]}</p>
            {/* <span style={styles}>{oldPrice[idx]}</span>
                <span>{newPrice[idx]}</span> */}
            <h4 style={styles} >{oldPrice[idx]}   {newPrice[idx]}</h4>
        </div>
    );
}

export default Product;

