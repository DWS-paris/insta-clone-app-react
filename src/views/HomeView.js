/* 
    [IMPORTS] React.js
    Import modules to generate component
*/
    // Main react modules
    import React, { Component } from 'react';

    // Import chaild components
    import BaseFrom from '../components/base/BaseFrom';
//

/* 
    [CMP] Definition
    Set component class
*/
    class HomeView extends Component{
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
                    <section className='home-view-component'>
                        <p>home-view-component</p>

                        {/* Define login form */}
                        <BaseFrom />

                        {/* Define register form */}
                        <BaseFrom />
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
    export default HomeView;
//