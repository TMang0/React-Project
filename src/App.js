import React, { Component} from 'react'
import './App.css';
import Header from './Header';
import './Modules/ProductData'
import ProductData from './Modules/ProductData';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';

class App extends Component {
  state = {
   productData: ProductData,
   currentPreviewImagePos: 0,
   showHeartBeatSection: false,
  }
  onColorOptionClick = (pos) =>{ 
this.setState({currentPreviewImagePos: pos});
  }
  onFeatureItemClick = (pos) => {
    let updatedState = false
    if(pos === 1) {
      updatedState = true
    }
    this.setState({showHeartBeatSection: updatedState});}

  render()
  {
    return (
      <div>
        <Header />
        <body>
          <div className="leftbox">
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            showHeartBeatSection={this.state.showHeartBeatSection}/>
            </div>
          <div className="rightbox">
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection} />
            </div>
  
        </body>
        </div>
    );
  }
}

export default App;
