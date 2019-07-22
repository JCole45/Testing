import React, {Component} from 'react';

    class App extends Component {
       constructor(props){
           super(props) 
           this.state= {
               message: "hello World!",
               show: ''
           }
           this.showText = this.showText.bind(this)
       }
        showText(){
            this.setState({show: this.props.page});
            
        }
     
      render () {
      
        return (
            <div>
           <button onClick={()=> this.showText() }>click</button>
           <p> {this.state.show}</p>
           </div>
        )
      }
    }

export default App 

