
import React, { Suspense } from 'react';

const Header = React.lazy(() => import('headerApp/Header'));
const ProductList = React.lazy(() => import('productsApp/ProductList'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <ProductList />
      </Suspense>
    </div>
  );
}

export default App;
