/* 
    [IMPORTS] React.js
    Import modules to generate component
*/
    // Main react modules
    import React, { Component } from 'react';

    // Import chaild components
    import BaseFrom from '../components/base/BaseFrom';
    import BaseCallToAction from '../components/base/BaseCallToAction';
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
                
                /* 
                    [STATE] Component
                    Define compoenent property value
                */
                    // Bind property value from parent component
                    this.cmpLoginButton = {
                        type: 'button',
                        content: `Don't have an account? Create one now.`,
                        isfull: false,
                        isprimary: false,
                        action: 'register'
                    }

                    this.cmpRegisterButton = {
                        type: 'button',
                        content: `Got an account? Go to login.`,
                        isfull: false,
                        isprimary: false,
                        action: 'login'
                    }

                    this.state = {
                        cmpStep: 'login',

                        // Form values
                        cmpLoginForm: {
                            title: `Connect to your account`,
                            submit: `Login`,
                            fieldsets: [
                              {
                                label: `Email`,
                                type: `email`,
                                required: true,
                                min: 5,
                              },
                              {
                                label: `Password`,
                                type: `password`,
                                required: true,
                                min: 5,
                              }
                            ]
                        },

                        cmpRegisterForm: {
                        title: `Create your account`,
                        submit: `Register`,
                        fieldsets: [
                            {
                            label: `Name`,
                            type: `text`,
                            required: true,
                            min: 2,
                            },
                            {
                            label: `Email`,
                            type: `email`,
                            required: true,
                            min: 5,
                            },
                            {
                            label: `Password`,
                            type: `password`,
                            required: true,
                            min: 5,
                            },
                            {
                            label: `Repeate password`,
                            type: `password`,
                            required: true,
                            min: 5,
                            }
                        ]
                        },
                    }
                //

                // Bind 'this' whitin class methods
                this.defineStep = this.defineStep.bind(this)
            }
        //

        /* 
            [CMP] Methods
            Define compoenent finctionalities
        */
            // Bind 'click' event on button
            defineStep(event){
                this.setState({ cmpStep: event })
                console.log('defineStep', event, this.state.cmpStep)
            }
        //


        /* 
            [CMP] Render
            Display component DOM
        */
            render(){
                if( this.state.cmpStep === 'login' ){
                    return(
                        <section className='home-view-component section'>
                            <article className="box">
                                {/* Define login form */}
                                <BaseFrom 
                                    formvalue={ this.state.cmpLoginForm }
                                />
                            </article>

                            <BaseCallToAction 
                                item={ this.cmpLoginButton }
                                handleClick={ this.defineStep }
                            />
                        </section>
                    )
                }
                else{
                    return(
                        <section className='home-view-component section'>
                            <article className="box">
                                {/* Define login form */}
                                <BaseFrom 
                                    formvalue={ this.state.cmpRegisterForm }
                                />
                            </article>

                            <BaseCallToAction 
                                item={ this.cmpRegisterButton }
                                handleClick={ this.defineStep }
                            />
                        </section>
                    )
                }
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