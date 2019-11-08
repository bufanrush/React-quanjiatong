import React, { Component } from 'react';
import style from './index.css';
import pic from '../../../images/a.jpeg';

class Page extends Component {

    render() { 
        return ( 
            <div className ={style["page-box"]}>
                this is Page~
                <img src={pic} />
            </div>
         );
    }
}
 
export default Page;