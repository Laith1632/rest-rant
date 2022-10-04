const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
                <div>
                  <img src="/images/cheesecake-ras.jpg" alt="raspberry cheesecake"width="40%"/>
                </div>
                <div>
                 <h3> Photo by </h3><a href="AUTHOR_LINK">Anna Tukhfatullina</a> <a href="UNSPLASH_LINK">Food Photographer/Stylist</a>
                
                </div>
                <a href="/places">
                  <button className="btn btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
  }
 
module.exports = home
