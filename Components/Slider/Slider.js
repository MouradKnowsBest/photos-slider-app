import {useState} from "react"
import imgsData from './imgsData'
import BtnSlider from './BtnSlider'
import "./Slider.css"


export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const timeOut = 500;

   const nextSlide = () => {
        if(slideAnim.index !== imgsData.length && !slideAnim.inProgress) {
            setSlideAnim({index : slideAnim.index+1, inProgress: true})
            // pour prevenir le spam
            setTimeout(() => {setSlideAnim({index : slideAnim.index+1, inProgress: false})}, timeOut)
        }

        else if (slideAnim.index === imgsData.length && !slideAnim.inProgress) {
            setSlideAnim({index : 1, inProgress: true})
            // pour prevenir le spam
            setTimeout(() => {setSlideAnim({index : 1, inProgress: false})}, timeOut)


        }
        console.log("NEXT");
    }

    const prevSlide = () => {

        if(slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({index : slideAnim.index-1, inProgress: true})
            // pour prevenir le spam
            setTimeout(() => {setSlideAnim({index : slideAnim.index-1, inProgress: false})}, timeOut)
        }

        else if (slideAnim.index === 1 && !slideAnim.inProgress) {
            setSlideAnim({index : 5, inProgress: true})
            // pour prevenir le spam
            setTimeout(() => {setSlideAnim({index : 5, inProgress: false})}, timeOut)


        }        
        console.log("PREV");
    }

    const moveDot = index => {
        setSlideAnim({index : index, inProgress: false})

    }

    return (
        <div className="container-slider">

            {imgsData.map((imgObj, index) => {
                return(
                    <div key={imgObj.id}  
                        className={slideAnim.index === index+1 ?  "slide active-anim":"slide"} >

                        <h1> {imgObj.title} </h1>
                        <h5> {imgObj.subTitle} </h5>

                        <img src={`/Imgs/img${index+1}.jpg`} alt="" />
                    </div>
                )
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({length:5}).map((item, index) => {
                    return (
                        <div 
                        className={slideAnim.index === index+1 ? "dot active" : "dot" }
                        onClick={() => moveDot(index+1)}
                        > 
                        </div>
                    )
                })}
            </div>

        </div>
    )
}