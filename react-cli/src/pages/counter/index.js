import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from 'actions/counter';

class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let count = this.props.counter.count;
        return (
            <div>
                <div>当前计数为{count}</div>
                <button onClick={() => this.props.increment()}>自增</button>
                <button onClick={() => this.props.decrement()}>自减</button>
                <button onClick={() => this.props.reset()}>重置</button>
            </div>
        );
    }
}

export default connect((counter) => counter,dispatch => ({
    increment:() => {
        dispatch(increment())
},
    decrement:() => {
        dispatch(decrement())
},
    reset:() => {
        dispatch(reset())
},
}))(Counter);