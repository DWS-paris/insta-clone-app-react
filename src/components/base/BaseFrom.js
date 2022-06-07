/* 
    [IMPORTS] React.js
    Import modules to generate component
*/
    // Main React modules
    import React, { Component } from 'react';

    // Import child components
    import BaseCallToAction from './BaseCallToAction';
//

/* 
    [CMP] Definition
    Set component class
*/
    class BaseFrom extends Component{
        /* 
            [INTI] Constructor
            Inject 'props" from 'Component'
        */
            constructor(props){
                // Use super() to inject properties from extend class
                super(props);
            }
        //

        /* 
            [CMP] Render
            Display component DOM
        */
            render(){
                return(
                    <form className='base-form-component'>
                        <p>base-form-component</p>

                        <BaseCallToAction />
                    </form>
                )
            }
        //
    }
//

/* 
    [CMP] Export
    Export component class to use it in the App router
*/
    export default BaseFrom;
//