/* 
    [IMPORTS] React.js
    Import modules to generate component
*/
import React, { Component } from 'react';
//

/* 
    [CMP] Definition
    Set component class
*/
    class BaseCallToAction extends Component{
        /* 
            [INTI] Constructor
            Inject 'props" from 'Component'
        */
            constructor(props){
                // Use super() to inject properties from extend class
                super(props);

                /* 
                    [STATE] Component
                    Define compoenent property value
                */
                    // Bind property value from parent component
                    this.cmpItem = this.props.item;
                //

                // Bind 'this' whitin class methods
                this.onClick = this.onClick.bind(this)
            }
        //

        /* 
            [CMP] Methods
            Define compoenent finctionalities
        */
            // Bind 'click' event on button
            onClick(){
                this.props.handleClick( this.cmpItem.action )
            }
        //

        /* 
            [CMP] Render
            Display component DOM
        */
            render(){
                return(
                    <button 
                        className='base-call-to-action-component button'
                        type={ this.cmpItem.type }
                        onClick={ this.onClick }
                    >
                        { this.cmpItem.content }
                    </button>
                )
            }
        //
    }
//

/* 
    [CMP] Export
    Export component class to use it in the App router
*/
    export default BaseCallToAction;
//