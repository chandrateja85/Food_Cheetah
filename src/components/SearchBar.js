const SearchBar = (props) => {
    // Destructuring props

    
    return (
        <div className="search">
            <form action="#">
                <input className="searchbar" name="search" placeholder="Search for restaurants" />
            </form>
            <button>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
