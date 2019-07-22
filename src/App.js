import React, {Component} from 'react';

    class App extends Component {
        showText(){
            return ("Hello World")
            
        }
     
      render () {
      
        return (
            <div>
           <p> {this.showText()}</p>
           </div>
        )
      }
    }

export default App 

