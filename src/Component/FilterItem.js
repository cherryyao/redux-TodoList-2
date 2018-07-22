import React, {Component} from 'react';

export default class FilterItem extends React.Component {
    render(){
        let status = this.props.status;
        let {changeStatusHandler} = this.props;

        return(
            <div>
            <ul id="filters">
                <li onClick={ event => changeStatusHandler('all')}>
                    <a href="#" data-filter="all" className={status === 'all' ? 'selected' : ''} >ALL</a>
                </li>
                <li onClick={ event => changeStatusHandler('active')}>
                    <a href="#" data-filter="active" className={status === 'active' ? 'selected' : ''}>Active</a>
                </li>
                <li onClick={ event => changeStatusHandler('complete')}>
                    <a href="#" data-filter="complete" className={status === 'complete' ? 'selected' : ''}>Complete</a>
                </li>
            </ul>
        </div>
        )
    }

}
