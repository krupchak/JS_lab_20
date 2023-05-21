import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
    constructor() {
		super();
		this.state = {value: ''};
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
        let info = (<h1>1</h1>);
		return <div>
            { info }
			<p>Текст: {this.state.value}</p>
	<textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
		</div>;
	}

}

class Task2 extends React.Component {
    constructor() {
		super();
		this.state = {checked: true};
	}

	handleCheckboxChange(event) {
		this.setState({checked: !this.state.checked});
	}

	render() {
        let info = (<h1>2</h1>);
		return <div>
           { info }
			<input
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>
		</div>;
	}

}

class Task3 extends React.Component {
    constructor() {
		super();
		this.state = {checked: true};
	}

	handleCheckboxChange(event) {
		this.setState({checked: !this.state.checked});
	}

	render() {
        let info = (<h1>3</h1>);
		return <div>
            { info }
		<p>{this.state.checked ? 'відмічено' : 'не відмічено' }</p>
			<input
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>
		</div>;
	}
}

class Task4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: [ "Kyiv" ]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        this.setState({
            city: [...this.state.city, event.target.value]
        });
    }

    render() {
        let info = (<h1>4</h1>);
        return (
            <div>
                { info }
                <select onChange={ this.handleChange }  defaultValue={ this.state.city[0] }>
                    <option value="Kyiv">Kyiv</option>
                    <option value="Odesa">Odesa</option>
                    <option value="Dnipro">Dnipro</option>
                    <option value="Lviv">Lviv</option>
                    <option value="Mykolaiv">Mykolaiv</option>
                    <option value="Poltava">Poltava</option>
                    <option value="Kherson">Kherson</option>
                    <option value="Chernivtsi">Chernivtsi</option>
                </select>
                <p>
                    { this.state.city.join(', ') }
                </p>
            </div>
        );
    }
}

class Task5 extends React.Component {
    constructor() {
		super();
		this.state = {option: '1'};
	}

	handleRadioChange(event) {
		this.setState({option: event.target.value});
	}

	render() {
        let info = (<h1>5</h1>);
		return <div>
            { info }
			<p>Ваш вибір: {this.state.option}</p>

			<input
				name="lang"
				type="radio"
				value="1"
				checked={this.state.option == '1'}
				onChange={this.handleRadioChange.bind(this)}
			/>1
			<input
				name="lang"
				type="radio"
				value="2"
				checked={this.state.option == '2'}
				onChange={this.handleRadioChange.bind(this)}
			/>2
            <input
				name="lang"
				type="radio"
				value="3"
				checked={this.state.option == '3'}
				onChange={this.handleRadioChange.bind(this)}
			/>3
		</div>;
	}

}

class Task6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrString: [  ]
        };

        this.addNewString = this.addNewString.bind(this);
    }

    addNewString(event) {
        let newStr = document.getElementById("textareaId").value;

        this.setState({
            arrString: [...this.state.arrString, newStr]
        });
        
        document.getElementById("textareaId").value = '';
    }

    render() {
        let info = (<h1>6</h1>);
        return(
            <div>
                { info }
                <textarea id="textareaId" rows="5" cols="40">
                </textarea><br />
                <button onClick={ this.addNewString }>Додати новий текст</button>
                <div id="result">
                    {
                        this.state.arrString.map(element => 
                            document.getElementById("result").value = <p>{ element }</p>
                        )
                    }
                </div>
            </div>
        );
    }
}

class Task7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'white'
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(event) {
        this.setState({color: event.target.value});
    }

    render() {
        let info = (<h1>7</h1>);
        return(
            <div>
                { info }
                <select onChange={ this.changeColor }>
                <option disabled selected></option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Brown">Brown</option>
                    <option value="Gray">Gray</option>
                </select>
                <p style={{backgroundColor: this.state.color}}>
                    CSS колір
                </p>
            </div>
        );
    }
}

class Task8 extends React.Component {
    constructor(props) {
        super(props);

        this.changeCheckBox = this.changeCheckBox.bind(this);
    }

    changeCheckBox(event) {
        document.getElementById("checkboxID").checked = 
            event.target.value === "Checked" ? true : false;
    }

    render() {
        let info = (<h1>8</h1>);
        return(
            <div>
                { info }
                <select onChange={ this.changeCheckBox }>
                    <option value="Checked">позначено</option>
                    <option value="NotChecked" selected>не позначено</option>
                </select>
                <label>
                    <input id="checkboxID" type="checkbox" value="CheckBox" />
                </label>
            </div>
        );
    }
}

class Task9 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paragraph: "1"
        };
        this.changeParagraph = this.changeParagraph.bind(this);
    }

    changeParagraph(event) {
        this.setState({
            paragraph: event.target.value
        });
    }

    render() {
        let info = (<h1>9</h1>);
        return(
            <div>
                { info }
                <select onChange={ this.changeParagraph }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <div>
                    <p style={{display: this.state.paragraph === "1" ? "block" : "none"}}>
                        Абзац 1
                    </p>
                    <p style={{display: this.state.paragraph === "2" ? "block" : "none"}}>
                        Абзац 2
                    </p>
                    <p style={{display: this.state.paragraph === "3" ? "block" : "none"}}>
                        Абзац 3
                    </p>
                </div>
            </div>
        );
    }
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
            <Task7 />
            <Task8 />
            <Task9 />
        </div>
    );