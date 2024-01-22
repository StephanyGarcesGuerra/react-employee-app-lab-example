
const styles = {
    border:{
        borderColor: 'blue',
        borderStyle: "double",
        textAlign: "center",
        width: "90%",

    }
}

function Header() {
    return(
        <div> 
            <h2 style={styles.border}> Employee Directory </h2>
        
        </div>
    );
}


export default Header