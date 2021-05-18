import React from 'react'
import classes from './ProductData.module.css'

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.Photoselect]
    if(pos === props.currentPreviewImagePos){
      classArr.push(classes.Coloredselected);
    }
    return(
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}/>
    );
  })
  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.Featureditem2];
    if(pos === 1 && props.showHeartBeatSection){
      classArr.push(classes.Featureditem);
    } else if (pos === 0 && !props.showHeartBeatSection){
      classArr.push(classes.Featureditem);
    }   return(
      <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
    )
  })
  return (
    <div>
      <p className={classes.paragtitle}>{props.data.title}</p>
      <p className={classes.paragdesc}>{props.data.description}</p>
      <p className={classes.selector}>Select Color</p>
      <div>
        {colorOptions}
        <p className="selector">Features</p>
        <div className="Featureditemcontainer">
          {featureList}
        </div>
        <div>
          <button className="Buyitem">Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails