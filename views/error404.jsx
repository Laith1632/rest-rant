const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
  <img src="/images/ghost.jpg" alt="ghost cookie"width="40%"/>
</div>
<div>
  Photo by <a href="AUTHOR_LINK">Anna Tukhfatullina</a> on<a href="UNSPLASH_LINK">Food Photographer/Stylist</a>
</div>
          
          </main>
      </Def>
    )
  }
  

module.exports = error404
