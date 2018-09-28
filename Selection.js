import React from 'react';
import Slider from "react-slick";

class Selection extends React.Component {

  constructor(props){
    super(props);
    this.slide = this.slide.bind(this);
}
slide(y){
    y > 0 ? (
       this.slider.slickNext()
    ) : (
       this.slider.slickPrev()
    )
}
  componentWillMount(){
    window.addEventListener('wheel', (e) => {
        this.slide(e.wheelDelta);
    })
}
componentDidMount(){
  let slickListDiv = document.getElementsByClassName('slick-list')[0]
  slickListDiv.addEventListener('wheel', event => {
    event.preventDefault()
    event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
  })
}
  render() {
    var settings = {
     // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
     return (
      <Slider {...settings}  ref={slider => this.slider = slider.innerSlider}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    
     );
  }
}

export default Selection;
