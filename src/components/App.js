import React from 'react';

import { Provider } from 'react-redux'
import store from './redux/store'

// import Counter from './pages/Counter'
// import Info from './pages/Info'
// import Fruits from './pages/Fruits'
import Todos from './pages/Todos'
// import '../sass/app.sass';
// import { HeaderComponent } from './pages/HeaderComponent';
// import { SectionComponent } from './pages/SectionComponent';
// import { FooterComponent } from './pages/FooterComponent';
// import { AsideComponent } from './pages/AsideComponent';

const App = () => {
  return (
    // <div className="contenedor">
    //   <HeaderComponent />
    //   <SectionComponent />
    //   <AsideComponent />
    //   <FooterComponent />
    // </div>

    <Provider store={store}>
      <div>
        {/* <Info /> */}
        {/* <Counter /> */}
        {/* <Fruits /> */}
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
