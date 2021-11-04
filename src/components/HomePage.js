import React, { Component } from "react";
import { Button,Card } from "@material-ui/core";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrow from './CustomLeftArrow'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import EventIcon from '@material-ui/icons/Event';
import { LaptopWindowsSharp } from "@material-ui/icons";
class HomePage extends Component {
   render() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    const responsive1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
    // **************Header Of Page************************
    <div>

    <div style={{ textAlign: "center", paddingTop: 130 ,background:"blue",width: "100%", height: window.screen.width >600 ?580:420}}>
        <div>
            <span className="kcsEwi">India's Coolest Travel Community</span>
        </div>
      <div className="hsdTJV">
        <input type="input" autocomplete="off" name="search" placeholder="Where do you wanna go?" className="iKkSQM" />
        <img src="/svg/search.svg" className="HomePage__SearchIcon-sc-1g6u3d3-3 jnyCxP"/>
        </div>
        <div className="dSzmHU">
<div className="bYcfgU">
    <img src="/svg/cover-travellers.svg" className="fPDzlf" />
    <div className="jOEsJF">50000+<br/>Happy Travellers</div>
</div>
<a href="#reviews"><div className="bYcfgU">
    <img src="/svg/cover-star.svg" className="fPDzlf" />
    <div className="jOEsJF">2500+<br/> 5 Star Reviews</div>
</div>
</a>
<div className="bYcfgU">
    <img src="/svg/cover-destination.svg" className="fPDzlf" />
    <div className="jOEsJF">300+ <br/>Itineraries</div>
</div>
</div>   
    </div>


<div style={{paddingTop:45,textAlign:"center"}}>
<span style={{fontSize:30, color:"green" }}>Explore Travel-A-Bud</span>
</div>

<div className="jIrqlt">
<div className="bzZOne">
            <img src="/images/weekend-trips.svg" className="eggPEP" />
            <div className="dmKLMu">Weekend Trips</div>
        </div>
        <div className="bzZOne">
        <img src="/images/weekend-trips.svg" className="eggPEP" />
        <div className="dmKLMu">Weekend Trips</div>
    </div>
    <div className="bzZOne">
            <img src="/images/weekend-trips.svg" className="eggPEP" />
            <div className="dmKLMu">Weekend Trips</div>
        </div>
        <div className="bzZOne">
            <img src="/images/weekend-trips.svg" className="eggPEP" />
            <div className="dmKLMu">Weekend Trips</div>
        </div>
        <div className="bzZOne">
            <img src="/images/weekend-trips.svg" className="eggPEP" />
            <div className="dmKLMu">Weekend Trips</div>
        </div>
        <div className="bzZOne">
            <img src="/images/weekend-trips.svg" className="eggPEP" />
            <div className="dmKLMu">Weekend Trips</div>
        </div>
</div>









<div style={{ width: "80%", marginLeft: "10%" ,marginTop:10}}>
<div style={{marginBottom:20}}>
<span style={{ fontSize:30}}>Upcoming Trips</span>
</div>
<Carousel
additionalTransfrom={0}
arrows
autoPlaySpeed={3000}
centerMode={false}
className=""
containerClass="container"
// customLeftArrow={<CustomLeftArrow />}
// customRightArrow={<CustomRightArrow />}
dotListClass=""
focusOnSelect={false}
itemClass=""
keyBoardControl
minimumTouchDrag={80}
renderButtonGroupOutside={false}
renderDotsOutside={false}
showDots={false}
sliderClass=""
slidesToSlide={1}
 swipeable={true} 
 draggable={false} 
 responsive={responsive} 
 ssr={true}
  infinite={false} 
  customTransition="all 1s"
     transitionDuration={500}
      containerClass="carousel-container" 
      deviceType={this.props.deviceType} 
      itemClass="carousel-item-padding-40-px"
       removeArrowOnDeviceType={["tablet", "mobile"]}
       >
       <div style={{width:350,height:400}}>
       <div>
       <img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
       </div>
       <div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
       <div>
       <QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
       </div>
       <div style={{marginLeft:8}}>
       <LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
       </div>
      </div>
        <div style={{width:350,padding:3}}>
       <span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
       </div>
       <div style={{width:350,padding:3}}>
       <span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
       </div>
       <div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
       <EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
       </div>
       </div>
       <div style={{width:350,height:400}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>

</div>
 <div style={{width:350,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:350,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:350,height:400}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>

</div>
 <div style={{width:350,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:350,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:350,height:400}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>

</div>
 <div style={{width:350,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:350,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
</Carousel>


<div style={{marginBottom:20}}>
<span style={{ fontSize:30}}>Xmas Special</span>
</div>

<Carousel
additionalTransfrom={0}
arrows
autoPlaySpeed={3000}
centerMode={false}
className=""
containerClass="container"
// customLeftArrow={<CustomLeftArrow />}
// customRightArrow={<CustomRightArrow />}
dotListClass=""
focusOnSelect={false}
itemClass=""
keyBoardControl
minimumTouchDrag={80}
renderButtonGroupOutside={false}
renderDotsOutside={false}
showDots={false}
sliderClass=""
slidesToSlide={1}
 swipeable={true} 
 draggable={false} 
 responsive={responsive} 
 ssr={true}
  infinite={false} 
  customTransition="all 1s"
     transitionDuration={500}
      containerClass="carousel-container" 
      deviceType={this.props.deviceType} 
      itemClass="carousel-item-padding-40-px"
       removeArrowOnDeviceType={["tablet", "mobile"]}
       >
       <div style={{width:350,height:400}}>
       <div>
       <img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
       </div>
       <div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
       <div>
       <QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
       </div>
       <div style={{marginLeft:8}}>
       <LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
       </div>
       
       </div>
        <div style={{width:350,padding:3}}>
       <span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
       </div>
       <div style={{width:350,padding:3}}>
       <span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
       </div>
       <div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
       <EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
       </div>
       </div>
       <div style={{width:350,height:400}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>

</div>
 <div style={{width:350,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:350,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:350,height:400}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>

</div>
 <div style={{width:350,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:350,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:350,height:400}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:350,height:260,borderRadius:10}} />
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>

</div>
 <div style={{width:350,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:350,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:350,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
</Carousel>

</div>

<div style={{marginTop:30}}>
<div className="gcUmZn">Travel-A-Bud's Secret Sauce</div>

<div style={{display:"flex",width:"90vw",margin:"20px auto",flexWrap:"wrap"}}>
<div className="tonAm">
<img src="/images/third-party.svg"  style={{height:70,width:70}}/>
<div className="kMEuoo">No Third Party Mess</div>
<div className="iFqeFK">All the trips at WanderOn are managed end to end by our in-house operations team. There are no third parties involved and hence no fishy claims. So when we say your travel plan is 100% our responsibility, we mean it.</div>
</div>
<div className="tonAm">
<img src="/images/third-party.svg"  style={{height:70,width:70}}/>
<div className="kMEuoo">No Third Party Mess</div>
<div className="iFqeFK">All the trips at WanderOn are managed end to end by our in-house operations team. There are no third parties involved and hence no fishy claims. So when we say your travel plan is 100% our responsibility, we mean it.</div>
</div>
<div className="tonAm">
<img src="/images/third-party.svg"  style={{height:70,width:70}}/>
<div className="kMEuoo">No Third Party Mess</div>
<div className="iFqeFK">All the trips at WanderOn are managed end to end by our in-house operations team. There are no third parties involved and hence no fishy claims. So when we say your travel plan is 100% our responsibility, we mean it.</div>
</div>
<div className="tonAm">
<img src="/images/third-party.svg"  style={{height:70,width:70}}/>
<div className="kMEuoo">No Third Party Mess</div>
<div className="iFqeFK">All the trips at WanderOn are managed end to end by our in-house operations team. There are no third parties involved and hence no fishy claims. So when we say your travel plan is 100% our responsibility, we mean it.</div>
</div>
</div>
</div>
<div style={{marginTop:30}}>
<div className="gcUmZn">TESTIMONIALS</div>
<div className="gcUmZ">Awesome experiences! Happy Customers!</div>
<div style={{width:window.screen.width > 600 ?"50%" : "85%",height:400,marginTop:15,paddingLeft:window.screen.width > 600 ?"25%" : "8%"}}>
<Carousel 
additionalTransfrom={0}
arrows
autoPlaySpeed={3000}
centerMode={false}
className=""
containerClass="container"
// customLeftArrow={<CustomLeftArrow />}
// customRightArrow={<CustomRightArrow />}
dotListClass=""
focusOnSelect={false}
// itemClass=""
keyBoardControl
minimumTouchDrag={80}
renderButtonGroupOutside={false}
renderDotsOutside={false}
showDots={true}
// sliderClass=""
slidesToSlide={1}
 swipeable={true} 
 draggable={false} 
 responsive={responsive1} 
 ssr={true}
  infinite={false} 
  customTransition="all 1s"
     transitionDuration={500}
      containerClass="carousel-container" 
      deviceType={this.props.deviceType} 
    //   itemClass="carousel-item-padding-40-px"
       removeArrowOnDeviceType={["tablet", "mobile"]}
       >
       <div style={{height:400,width:"100%"}}>
       <iframe title="testimonial" width="100%" height="100%" src="https://www.youtube.com/embed/BagUzmZTJ58?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
       </div>
     <div style={{height:400,width:700}}>
       <iframe title="testimonial" width="100%" height="100%" src="https://www.youtube.com/embed/BagUzmZTJ58?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
       </div>
     <div style={{height:400,width:700}}>
       <iframe title="testimonial" width="100%" height="100%" src="https://www.youtube.com/embed/BagUzmZTJ58?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
       </div>
       </Carousel>
       </div>
       </div>
       <div style={{textAlign:"center",fontSize:22,marginTop:20}}>Get ready for 5-star experiences with us</div>
<div className="jcE">
<a href="">
    <div className="koiNLf">
        <img src="/images/google-review.svg" className="cJjNcB" />
        <div className="cwLKnt">
           <div className="gytuKo">*4.9</div>
        </div>
        <div className="fKuuSk">(2422 reviews)</div>
    </div>
</a>
<a href="">
    <div className="koiNLf">
        <img src="/images/tripadvisor-review.svg" className="cJjNcB" />
        <div className="cwLKnt">
      <div className="gytuKo">*5.0</div>
        </div>
        <div className="fKuuSk">(582 reviews)</div>
    </div>
</a>
<a href="">
    <div className="koiNLf">
        <img src="/images/facebook-review.svg" className="cJjNcB" />
        <div className="cwLKnt">
           <div className="gytuKo">*4.9</div>
        </div><div className="fKuuSk">(645 reviews)</div>
    </div>
</a>
</div>
    </div>

        );
    }
}

export default HomePage






