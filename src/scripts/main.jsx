import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.sass';

// import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="app">
                <h2 className="caption">NotesApp</h2>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-container'));
