function MsgBox(props) {
    let styles = {
        color : "yellow",
        }
    return (
        <h1 style={styles} >Hello {props.username}</h1>
    )
}


export default MsgBox;
