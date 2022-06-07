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
    class BaseImage extends Component{
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
                    <figure className='base-image-component'>
                        <p>base-image-component</p>
                    </figure>
                )
            }
        //
    }
//

/* 
    [CMP] Export
    Export component class to use it in the App router
*/
    export default BaseImage;
//