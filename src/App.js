function App() {
  return (
    <div className='wrapper clear'>
      <div className='overlay'>
        <div className='drawer'>
          <h2>Cart</h2>
        </div>
      </div>

      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' alt='logo' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Best sneakers shop</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src='/img/cart.svg' alt='cart' />
            <span>10.00 EUR</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/user.svg' alt='user' />
          </li>
        </ul>
      </header>

      <div className='content p-40'>
        <div className='d-flex mb-40 align-center justify-between'>
          <h1>All sneakers</h1>
          <div>
            <div className='search-block d-flex'>
              <img src='/img/search.svg' alt='Search' />
              <input placeholder='Search...' />
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='card'>
            <div className='favorite'>
              <img src='img/heart-liked.svg' alt='liked' />
            </div>

            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='sneakers' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>150.00 EUR</b>
              </div>
              <img width={35} height={35} src='/img/plus.svg' alt='plus' />
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/2.jpg' alt='sneakers' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>150.00 EUR</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/3.jpg' alt='sneakers' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>150.00 EUR</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={112} src='/img/sneakers/4.jpg' alt='sneakers' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>150.00 EUR</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
