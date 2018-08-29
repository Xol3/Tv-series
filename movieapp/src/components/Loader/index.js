import React from 'react';
import loaderSrc from './loading.gif';

const Loader = props =>(
  <div>
    <img
      style={{width: 120}}
      alt="Cargando Imagen"
      src={loaderSrc}/>
  </div>
)

export default Loader;
