/* 
    [IMPORTS] React.js
    Import modules to generate component
*/
    // Main react modules
    import React, { Component } from 'react';

    // Import chaild components
    import BaseImage from '../components/base/BaseImage';
//

/* 
    [CMP] Definition
    Set component class
*/
    class DashboardView extends Component{
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
                    <section className='dashboard-view-component'>
                        <p>dashboard-view-component</p>

                        {/* Display list of 'BaseImage' child component */}
                        <BaseImage />
                    </section>
                )
            }
        //
    }
//

/* 
    [CMP] Export
    Export component class to use it in the App router
*/
    export default DashboardView;
//