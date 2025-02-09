import React from 'react';

export const Header = ({ title, searchBar }) => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">{title}</a>
                {searchBar &&
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" />
                    </form>
                }
            </div>
        </nav>
    )
}