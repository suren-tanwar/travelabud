import React, { Component } from 'react'
import "./Trip.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import EventIcon from '@material-ui/icons/Event';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class Trip extends Component {
    
    render() {
        const responsive = {
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
            <div>
           
    <div style={{ textAlign: "center", paddingTop: 100 ,background:"blue",width: "100%", height: window.screen.width >600 ?380:250}}>
    <div>
        <span className="kcsE">Backpacking Trips 2021</span>
        
    </div>
  <div >
  <span  style={{fontSize:window.screen.width > 600 ? 40 :20}}>Expeditions To Ladakh, Spiti Valley And North East India</span>
    </div>
    <div className="dSzmH">
<div className="bYcfg">
<img src="/svg/cover-travellers.svg" className="fPDzl" />
<div className="jOEsJ">50000+<br/>Happy Travellers</div>
</div>
<a href="#reviews">
<div className="bYcfg">
<img src="/svg/cover-star.svg" className="fPDzl" />
<div className="jOEsJ">2500+<br/> 5 Star Reviews</div>
</div>
</a>
<div className="bYcfg">
<img src="/svg/cover-destination.svg" className="fPDzl" />
<div className="jOEsJ">300+ <br/>Itineraries</div>
</div>
</div>   
</div>   
<div style={{textAlign:"center",padding:20,marginBottom:10}}>
<span style={{fontSize:30,fontWeight:600}}>Backpacking Trips</span>
</div>  
<div style={{paddingLeft:"8%",paddingRight:"8%"}}>
<span>With a plethora of destinations to choose from, we leave it to you to decide where you want to spend your holiday. Be it the adventurous roads of Himalayas or the soothing landscapes of North East India, we’ve curated the best itineraries for you that are laced with cherry-picked activities, comfortable accommodations and easy conveyance. What’s more? You get well-experienced team captains who ensure that all your trips are 100 percent safe and hassle-free. Have a look at our upcoming trips and plan your next vacation with WanderOn!</span>
</div>




<div style={{display:"flex",flexWrap:"wrap",paddingLeft:"8%",paddingRight:"8%",marginTop:25}}>
<div style={{width:280,height:380,marginBottom:20,marginRight:10}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:280,height:260,borderRadius:10}} />
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>
</div>
 <div style={{width:280,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:280,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:280,height:380,marginBottom:20,marginRight:10}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:280,height:260,borderRadius:10}} />
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>
</div>
 <div style={{width:280,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:280,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:280,height:380,marginBottom:20,marginRight:10}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:280,height:260,borderRadius:10}} />
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>
</div>
 <div style={{width:280,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:280,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:280,height:380,marginBottom:20,marginRight:10}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:280,height:260,borderRadius:10}} />
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>
</div>
 <div style={{width:280,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:280,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
<div style={{width:280,height:380,marginBottom:20,marginRight:10}}>
<div>
<img src="/images/unnamed.jpg" alt="travel-a-bud" style={{width:280,height:260,borderRadius:10}} />
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<div>
<QueryBuilderIcon style={{fontSize:18,color:"green",}}/><span style={{ fontSize:16,color:"green",fontWeight:600}}> 5D-6N</span>
</div>
<div style={{marginLeft:8}}>
<LocationOnIcon style={{fontSize:18,color:"green",}}/> <span style={{ fontSize:16,color:"green",fontWeight:600}}>Jaipur</span>
</div>
</div>
 <div style={{width:280,padding:3}}>
<span style={{ fontSize:22,fontWeight:600}}>Jaipur Backpacking</span>
</div>
<div style={{width:280,padding:3}}>
<span style={{ fontSize:16}}>Starts at <span style={{ fontSize:20}}><b>₹24,000/-</b></span></span>
</div>
<div style={{width:280,padding:3,display:"flex",alignItems:"center",alignContent:"center"}}>
<EventIcon style={{fontSize:18}}/> <span style={{ fontSize:18,marginLeft:5}}>23 Oct</span>
</div>
</div>
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
 responsive={responsive} 
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
        )
    }
}

export default Trip
