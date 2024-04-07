const SearchBar = () => {
    return (
        <div className="search">
            <form action="#">
                <input className="searchbar" name="search" placeholder="Search for restaurants" />
                
            </form>
            <button>
                    <i className="fa fa-search" id="searchicon" style={{}}></i>
                </button>
        </div>
    );
};

export default SearchBar;
