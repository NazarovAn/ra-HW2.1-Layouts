import React, { useState } from 'react'
import './Store.css'
import products from '../products'
import IconSwitch from './utils/IconSwitch'
import CardsView from './cards/CardsView'
import ListView from './lists/ListView'


function App() {
  const [productsView, setProductsView] = useState('view_list');

  return (
    <div className="App">
      <IconSwitch 
        icon={ productsView } 
        onSwitch={(view) => {
          setProductsView(view);
          console.log(view);
        }}
      />
      { productsView === 'view_list' ? <ListView items ={ products } /> : <CardsView cards ={ products } /> }
    </div>
  );
}

export default App;
