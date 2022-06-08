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

                /* 
                    [STATE] Component
                    Define compoenent property value
                */
                    // Bind property value from parent component
                    this.cmpFormvalue = this.props.formvalue;

                    this.state = {
                        cmpButton: {
                            type: 'submit',
                            content: this.cmpFormvalue.submit,
                            isfull: true,
                            isprimary: true,
                        },
                    }
                //
            }
        //

        /* 
            [CMP] Render
            Display component DOM
        */
            render(){
                return(
                    /* Bind 'submit' event to emit 'onSubmit' event */
                    <form className='base-form-component'>
                        <h2 className="title is-size-4">{ this.cmpFormvalue.title }</h2>

                        {/* Display DOM loop: map */}
                        {
                            this.cmpFormvalue.fieldsets.map( (item, idx) => {
                                return(
                                    <fieldset 
                                        className='mb-4'
                                        key={ `item-${idx}` }
                                    >
                                        <label 
                                            className='label'
                                            htmlFor={ `item-${idx}` }
                                        >
                                            { item.label }
                                        </label>

                                        <input 
                                            className='input'
                                            type={ item.type }
                                            id={ `item-${idx}` }
                                            name={ `item-${idx}` }
                                            required={ item.required }
                                            min={ item.min }
                                        />
                                    </fieldset>
                                )
                            })
                        }

                        <BaseCallToAction 
                            item={ this.state.cmpButton }
                        />
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

/* 
<!-- Bind 'submit' event to emit 'onSubmit' event -->
  <form action="*" class="base-form-component">
    <h2 class="title is-size-4">{{cmpFormvalue.title}}</h2>

    <!-- Display DOM loop: v-for -->
    <fieldset 
      class="mb-4"
      v-for="(item, idx) in cmpFormvalue.fieldsets" 
      :key="`item-${idx}`"
    >
      <label 
        class="label"
        :for="`item-${idx}`" 
        v-text="item.label"
      />

      <input 
        class="input"
        :type="item.type" 
        :id="`item-${idx}`" 
        :name="`item-${idx}`"
        :required="item.required"
        :min="item.min"
      >
    </fieldset>

    <BaseCallToAction 
      :item="{
        type: `submit`,
        content: cmpFormvalue.submit,
        isfull: true,
        isprimary: true,
      }"
    />
  </form>
*/