
const styles ={
    img: {
        borderRadius: "70px",
        borderColor: "black",
        borderStyle: "double",
        width: "100px"

    },
    body:{
        textAlign: "center"
    }

};

function EmployeeItem() {
    return(
        <div style={styles.body}> 
            <img style={styles.img} src ="https://img.freepik.com/free-vector/business-man-cartoon-character_1308-134316.jpg" alt = "James King" />
            <h2> James King </h2>
                <p> President and CEO</p>
            <img style={styles.img} src = "https://image.similarpng.com/very-thumbnail/2021/04/Pop-art-fashion-and-beautiful-woman-cartoon-premium-vector-PNG.png" alt="Julie Taylor"/>
            <h2> Julie Taylor </h2>
                <p> VP of Marketing</p>
            <img style={styles.img} src = "https://upload.wikimedia.org/wikipedia/commons/5/50/Happy_Cartoon_Man_Using_A_Smartphone.svg" alt="Eugene Lee"/>
            <h2> Eugene Lee </h2>
                <p> CFO</p>
            <img style={styles.img} src = "https://static.vecteezy.com/system/resources/thumbnails/002/406/611/small_2x/business-man-cartoon-character-vector.jpg" alt="John Williams"/>
            <h2> John Williams </h2>
                <p> VP of Engineering</p>
            <img style={styles.img} src = "https://as2.ftcdn.net/v2/jpg/05/22/07/13/1000_F_522071372_lWqRGG73xzJ70SZIZn3B6hsOAZBLMBqs.jpg" alt="Ray Moore"/>
            <h2> Ray Moore </h2>
                <p> VP of Sales</p>
            <img style={styles.img} src = "https://c8.alamy.com/zooms/9/9d75d3fcb40441a39876692eed1f0c21/tc2fpe.jpg" alt="Paul Jones"/>
            <h2> Paul Jones </h2>
                <p> QA Manager</p>
        
        </div>
    );
}


export default EmployeeItem