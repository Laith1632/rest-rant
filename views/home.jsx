const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
<div>
  <img src="/images/cheesecake-ras.jpg" alt="raspberry cheesecake"></img>
</div>
<div>
  Photo by <a href="AUTHOR_LINK">Anna Tukhfatullina</a> on<a href="UNSPLASH_LINK">Food Photographer/Stylist</a>
</div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
  </a>
          </main>
      </Def>
    )
  }
  
<a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

module.exports = home
