import React from 'react'
import classes from './ProductPreview.module.css'

const ProductPreview = (props) => {
  const CurrentHour = new Date().getHours() > 9 ? new Date().getHours() : 0 + new Date().getHours();
    const CurrentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : 0 + new Date().getMinutes();
  
return(
  <div>
              <img className={classes.Preview} name="preview" src={props.currentPreviewImage} alt="Product Preview" />
           {
            props.showHeartBeatSection ?
            <div className={classes.HeartBeatSection}>
            <i className="fas fa-heartbeat"></i>
              <p>78</p>
              </div> 
              :
              <div className={classes.datetime}>
              <p>{`${CurrentHour}:${CurrentMinute}`}</p>
              </div>

          }
  </div>
)
}
export default ProductPreview