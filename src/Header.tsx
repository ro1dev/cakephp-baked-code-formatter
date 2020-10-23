import React from 'react';
import Tool from './Tool';

const Header = () => {
    return <React.Fragment>
        <header className="text-center mb-2">
            <h1 className="text-center">
                <Tool />
                CakePHPでbakeしたコードを形成するやつ
                <Tool />
            </h1>
        </header>
    </React.Fragment>
}

export default Header;