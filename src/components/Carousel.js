import React, {useState} from 'react'
import {CarouselContainer, Slider, InfoTitle, InfoContainer, ReadMoreButton, ReadMoreContainer, Empty, InfoDiv} from './StyledComponents'
import SimpleImageSlider from "react-simple-image-slider";


const Carousel = () => {
  
  const images = [
            { url: "carousel_image.jpg" },
            { url: "carousel_image1.jpg" }
        ];
  const names = ["Sample Title 1", "Sample Title 2"];
  const availability = ["Now", "20th Sept"]
  const locations = ["Soho", "Exeter"]
  const sizes = ["4200", "5000"]
  const descriptions = ["Quam eos premqui tem cupta il inimet as rerum rent volum sitibus idunt la consenis ea nos doluptur, ipsapernates praeperrunte nobist peditaquis eum audaecto quam, susa consecae isto eum fugit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ligula vel enim ullamcorper volutpat. Cras et orci convallis, blandit nisi ac, aliquam erat. Pellentesque eget mollis odio. Donec eleifend orci a felis aliquet, in tincidunt ligula semper."]

  const slideDur = 1 
  
  const [imgNameIndex, setImgNameIndex] = useState(0)
  const [availIndex, setAvailIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [locationIndex, setLocationIndex] = useState(0)
  const [sizeIndex, setSizeIndex] = useState(0)
  const [descriptionIndex, setDescriptionIndex] = useState(0)

  function handleInfoOn() {
    setShowInfo(true)
  }
  function handleInfoOff() {
    setShowInfo(false)
  }

  function handleChange(toRight) {
    if(toRight) {
      setImgNameIndex(imgNameIndex+1)
      setAvailIndex(availIndex+1)
      setLocationIndex(locationIndex+1)
      setSizeIndex(sizeIndex+1)
      setDescriptionIndex(descriptionIndex+1)
    } else {
      setImgNameIndex(imgNameIndex-1)
      setAvailIndex(availIndex-1)
      setLocationIndex(locationIndex-1)
      setSizeIndex(sizeIndex-1)
      setDescriptionIndex(descriptionIndex-1)
    }
  }

  let slideWidth = 0
  let slideHeight = 0
  if(window.innerWidth > 769) {
    slideWidth = "1300px"
    slideHeight = "700px"
  } else if(window.innerWidth > 540 && window.innerWidth < 769) {
    slideWidth = "600px"
    slideHeight = "400px" 
  } else {
    slideWidth = "340px"
    slideHeight = "240px"
  }

  console.log(window.innerWidth)

  return (
    <Slider>
      <CarouselContainer>
        <SimpleImageSlider width={slideWidth} height={slideHeight} images={images} slideDuration={slideDur} onClickNav={handleChange} />
      </CarouselContainer>
      <InfoContainer>
        <InfoTitle>Name: {names[imgNameIndex]}</InfoTitle>
        <InfoTitle>Availability: [{availability[availIndex]}]</InfoTitle>
      </InfoContainer>
      <ReadMoreContainer>
        {showInfo && (
          <div>
            <InfoContainer>
              <InfoTitle>Location: [{locations[locationIndex]}]</InfoTitle>
              <InfoTitle>Size: [{sizes[sizeIndex]}]sqft</InfoTitle>
            </InfoContainer>
            <InfoContainer>
              <Empty></Empty>
              <InfoDiv>{descriptions[descriptionIndex]}</InfoDiv>
            </InfoContainer>
          </div>
        )}
      {!showInfo ? (<ReadMoreButton onClick={handleInfoOn}>Read More</ReadMoreButton>) : (<ReadMoreButton onClick={handleInfoOff}>Hide Text</ReadMoreButton>)}
      </ReadMoreContainer>
    </Slider>
  )
}

export default Carousel