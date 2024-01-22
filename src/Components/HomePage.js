import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

const styles = {
    body: {
        paddingLeft: "50px"
    }
}

function HomePage() {
    return(
        <div style={styles.body}> 
            <Header/>
            <SearchBar />
            <EmployeeList />
        
        </div>
    );
}


export default HomePage