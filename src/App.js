import React, { useState } from "react";

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is front end JavaScript library'
    },
    {
        title: 'Why use React?',
        content: 'React is famous JS library among web developers'
    },
    {
        title: 'How do you use react?',
        content: 'You use React by creatinf components'
    },
];

const options = [
    {
        label: 'The Color is Red',
        value: 'red'
    },
    {
        label: 'The Color is Green',
        value: 'green'
    },
    {
        label: 'The Color is Blue',
        value: 'blue'
    }
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;
