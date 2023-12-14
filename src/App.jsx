import React from 'react';

import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';


export default function App(props){
    return (
        <div id="app">
            <h1>React fundaments 2</h1>
                <WithParameter 
                    title="Student situation"
                    aluno="Suijin"
                    nota = {9}/>
                <First></First>
        </div>
    );
}