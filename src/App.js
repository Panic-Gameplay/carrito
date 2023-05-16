import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'

class App extends Component {
   state ={
    productos: [
     { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
     { name: 'Lechuga', price: 2000, img: '/productos/lechuga.jpg'},
     { name: 'Arveja', price: 800, img: '/productos/arveja.jpg'},
    ]
   }
   render(){
    return(
      <div>
        <Layout>
              <Productos
         agregarAlCarro={()=> console.log('no hace nada')}
         productos={this.state.productos}
        />
        </Layout>
      </div>
    )
   }
}

export default App;