import React from 'react';

class Form extends React.Component {

    state = {
        amount: 0
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMoney(this.state.amount)
    }

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add More Money!</h4>
                <input type="text" placeholder="$$" name="amount" onChange={(e) => {this.setState({amount: e.target.value})}}/>
                <br/><br/>
                <input type="submit" value="Cha Ching"/>
            </form>
        </div>
    );
}
}

export default Form;
