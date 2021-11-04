// import { Button } from '@material-ui/core'
import React, { Component } from 'react'

import { Card, Button, Checkbox ,Modal,Paper} from '@material-ui/core'
import "./packing.css";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from '@material-ui/icons/Call';

export class Backpacking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             about:true,
             itenary:false,
             dateCosting:false,
             otherInfo:false,
             callIcon:false,
             requestCall:false
        }
    }
    onClickItenary = ()=>{
this.setState({ about:false,itenary:true,dateCosting:false,otherInfor:false,})
  }
  onClickDateCosting = ()=>{
    this.setState({ about:false,itenary:false,dateCosting:true,otherInfor:false,})
      }
onClickotherInfo = ()=>{
this.setState({ about:false,itenary:false,dateCosting:false,otherInfo:true,})
}
onClickCallIcon = ()=>{
 this.setState({callIcon:true,})
}
onClickRequestCall = ()=>{
this.setState({requestCall:true })
     }                     

    render() {
 return (
            <div style={{width:"100%"}}>
            {/*************FIRST */}
            <div style={{background:"blue",width:window.screen.width > 600 ? "83.7%" :"100%", height: "75vh" ,display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-start",padding:"0vw 8vw 2vw"}}>
            <div style={{height:58,width: 250,overflow: "hidden",fontSize: 18,textAlign: "left",color:" rgb(255, 255, 255)",}}>
            Get Spellbound by the Heavenly Abode of Clouds
            </div>
          <span style={{ fontSize: window.screen.width > 600 ? 70 :60,fontWeight: 600,textTransform: "capitalize",color: "rgb(255, 255, 255)",}}>Meghalay Backpacking</span>
          <div style={{display: "flex", marginTop: "2vw",placeSelf:"flex-end"}}>
          <Button style={{backgroundColor:"white",padding:window.screen.width > 600 ? 10 :6,width:window.screen.width > 600 ? 200 :150,borderRadius:10,marginRight:"3vw"}}>Get Itenanry</Button>
          <Button style={{backgroundColor:"white",padding:window.screen.width > 600 ? 10 :6,width:window.screen.width > 600 ? 200 :150,borderRadius:10}}>Book Now</Button>
        </div>
        </div>
        
          {/*************SECOND */}
<div className="dnbEek">
{/*************LEFT SIDE */}
<div className="kGPKxQ">
{/*************LEFT SIDE ICPON BOX */}
<div className="hOdgKK">
{/*************1 BOX */}
<div className="iRCyfy">
<div className="iUaMPg">
<QueryBuilderIcon style={{fontSize:40}}/>
</div>
<div className="niwpK">Duration</div>
<div  className="gIQPBW">5N-6D</div>
</div>
{/*************2 BOX */}
<div className="iRCyfy">
<div className="iUaMPg" >
<QueryBuilderIcon style={{fontSize:40}}/>
</div>
<div  className="niwpK">Starting Price</div>
<div  className="gIQPBW">₹20,000/-</div>
</div>
{/*************3 BOX */}
<div className="iRCyfy">
<div className="iUaMPg" >
<QueryBuilderIcon style={{fontSize:40}}/>
</div>
<div className="niwpK">Pick-up and Drop</div>
<div  className="gIQPBW">Delhi</div>
</div>
</div>
{/*************itenaru date costting BOX */}
<div className="hjtgcj">
<div className="dFnMVc" onClick={()=>this.onClickItenary()}>Itineary</div>
<div className="dFnMVc" onClick={()=>this.onClickDateCosting()}>Dates and Costing</div>
<div className="dFnMVc" onClick={()=>this.onClickotherInfo()}>Other Info</div>
</div>
{/*********ABOUT */}
{this.state.about === true &&
<div>
    <div className="dmcNqz">about
    <div className="kLKzPK">about</div></div>
    <div className="iKFDAY">
        <span>Meghalaya- A Potpourri of Beauty &amp; Culture
Confused about choosing your next travel destination? Wondering whether to go trekking in forests, or take a dip in blue lagoons or just relax by the beachside? What if we tell you there exists a magical land very much in India that offers all of these activities and many more without burning a hole in your pocket? Sounds dreamy, right? Well, pinch yourself to reality because WanderOn is taking you all the way to the abode of clouds with our Meghalaya tour package!
<br/></span><span>
Charming Landscapes
If there’s one word for Meghalaya, it is exotic. It is one of the gems of Northeast India. Don’t get us wrong if we say it is one of the most beautiful seven sisters! That is because Meghalaya is a potpourri of vivid landscapes. It is indeed God’s own garden with lush green mountains, mysterious caves, sparkling rivers, and some majestic waterfalls. Being the recipient of maximum rainfall, Meghalaya has every hue of green in its forests. It surely is a photographer’s paradise.
<br/></span><span>
Richness of Culture
Home to the Khasi and Garo culture, Meghalaya boasts of its unique cuisines, vibrant clothing, and melodious folk music. Though it has a moderate climate round the year, the best time to visit Meghalaya is during autumn. It is then that the famous Wangala drum festival showcases the best of its culture.
Its capital Shillong, popularly known as ‘The Rock Capital of India’, has a peppy evening vibe. With scrumptious food and jamming sessions, the cafes at Shillong are so charming they would surely leave you wanting for more. Apart from cafes, there are a lot of places to visit in Shillong. The Umiam Lake, Elephant Falls, and evergreen forests are a few major attractions. There is no doubt as to why the British named Shillong as the Scotland of East.
<br/></span><span>
Most Scenic Villages of Asia
Speaking of other places, the true essence of Meghalaya tourism lies in its villages. Here cleanliness is a culture that is practiced so dedicatedly, that the Village Mawlynnong is titled as the cleanest village of Asia!  The Living Roots bridges at Nongriat Village are so mystical they seem to be straight out of some Peter Pan movie! Also, if you have seen those pictures of a slender boat over crystal clear waters then you already know what boating in Umngot River at Dawki Village looks like. But hey, only if looking at a picture was enough, we all would have traveled the world, right?
Since that is far from being possible, you need to pack your bags and get ready to unravel the hidden beauty of NorthEast India with Wanderon’s Meghalaya tour package.
<br/></span><span>
Explore With WanderOn
Whether you are a bunch of friends or you move solo, Wanderon always takes care of your needs while designing the itinerary and Meghalaya Chapter is no different. We’ve curated the best Meghalaya tour itinerary so that you can enjoy every aspect of this beautiful place. All this and more at super affordable prices!
So don’t just sit there thinking because we can already hear the abode of clouds calling! Join WanderOn’s next Meghalaya batch and become a part of India’s coolest travel community!<br/></span>
</div>
</div>
}
{/*********Itenary */}
{this.state.itenary === true &&
<div className="hSKbUM">
    <div className="dmcNqz">itenary
    <div className="kLKzPK">itenary</div>
    </div>
<div className="jLeAff">
<Accordion elevation={0} defaultExpanded={false} style={{backgroundColor:"rgba(58, 58, 58, 0.2)",marginBottom:15,}} >
<AccordionSummary expandIcon={<ExpandMoreIcon />}>
<span className="buTuzU" ><b>Day 1:</b>   Guwahati Arrival | Umiam Lake | Overnight At Shillong </span>
</AccordionSummary>
<AccordionDetails style={{display:"flex",flexDirection:"column",borderRadius:50}}>
<ul>
<li>Arrive at Lokpriya Gopinath Bordoloi International Airport by morning.</li>
<li>Post breakfast, depart for Shillong.</li>
<li>Reach Shillong, check in to the hotel & freshen up.</li>
<li>Post lunch visit Umiam Lake & then head to Shillong market for some shopping.</li>
<li>Come back to the hotel by evening.</li>
<li>Overnight stay at Shillong.</li>

</ul>
</AccordionDetails>
</Accordion>  
<Accordion elevation={0} defaultExpanded={false} style={{backgroundColor:"rgba(58, 58, 58, 0.2)",marginBottom:15}} >
<AccordionSummary expandIcon={<ExpandMoreIcon />}>
<span className="buTuzU" ><b>Day 2:</b>   Guwahati Arrival | Umiam Lake | Overnight At Shillong </span>
</AccordionSummary>
<AccordionDetails style={{display:"flex",flexDirection:"column",borderRadius:50}}>
<ul>
<li>Arrive at Lokpriya Gopinath Bordoloi International Airport by morning.</li>
<li>Post breakfast, depart for Shillong.</li>
<li>Reach Shillong, check in to the hotel & freshen up.</li>
<li>Post lunch visit Umiam Lake & then head to Shillong market for some shopping.</li>
<li>Come back to the hotel by evening.</li>
<li>Overnight stay at Shillong.</li>

</ul>
</AccordionDetails>
</Accordion> 
<Accordion elevation={0} defaultExpanded={false} style={{backgroundColor:"rgba(58, 58, 58, 0.2)",marginBottom:15}} >
<AccordionSummary expandIcon={<ExpandMoreIcon />}>
<span className="buTuzU" ><b>Day 3:</b>   Guwahati Arrival | Umiam Lake | Overnight At Shillong </span>
</AccordionSummary>
<AccordionDetails style={{display:"flex",flexDirection:"column",borderRadius:50}}>
<ul>
<li>Arrive at Lokpriya Gopinath Bordoloi International Airport by morning.</li>
<li>Post breakfast, depart for Shillong.</li>
<li>Reach Shillong, check in to the hotel & freshen up.</li>
<li>Post lunch visit Umiam Lake & then head to Shillong market for some shopping.</li>
<li>Come back to the hotel by evening.</li>
<li>Overnight stay at Shillong.</li>

</ul>
</AccordionDetails>
</Accordion> 
<Accordion elevation={0} defaultExpanded={false} style={{backgroundColor:"rgba(58, 58, 58, 0.2)",marginBottom:15}} >
<AccordionSummary expandIcon={<ExpandMoreIcon />}>
<span className="buTuzU" ><b>Day 4:</b>   Guwahati Arrival | Umiam Lake | Overnight At Shillong </span>
</AccordionSummary>
<AccordionDetails style={{display:"flex",flexDirection:"column",borderRadius:50}}>
<ul>
<li>Arrive at Lokpriya Gopinath Bordoloi International Airport by morning.</li>
<li>Post breakfast, depart for Shillong.</li>
<li>Reach Shillong, check in to the hotel & freshen up.</li>
<li>Post lunch visit Umiam Lake & then head to Shillong market for some shopping.</li>
<li>Come back to the hotel by evening.</li>
<li>Overnight stay at Shillong.</li>

</ul>
</AccordionDetails>
</Accordion> 
<Accordion elevation={0} defaultExpanded={false} style={{backgroundColor:"rgba(58, 58, 58, 0.2)",marginBottom:15}} >
<AccordionSummary expandIcon={<ExpandMoreIcon />}>
<span className="buTuzU" ><b>Day 5:</b>   Guwahati Arrival | Umiam Lake | Overnight At Shillong </span>
</AccordionSummary>
<AccordionDetails style={{display:"flex",flexDirection:"column",borderRadius:50}}>
<ul>
<li>Arrive at Lokpriya Gopinath Bordoloi International Airport by morning.</li>
<li>Post breakfast, depart for Shillong.</li>
<li>Reach Shillong, check in to the hotel & freshen up.</li>
<li>Post lunch visit Umiam Lake & then head to Shillong market for some shopping.</li>
<li>Come back to the hotel by evening.</li>
<li>Overnight stay at Shillong.</li>

</ul>
</AccordionDetails>
</Accordion> 

</div>
<div style={{textAlign:"center"}}>
    <button className="bEA-dbt">Download This Itinerary</button>
     </div>
    <div className="jBguBs">NOTE: As per the local COVID-19 guidelines, a negative RT-PCR test report is mandatory for entering Meghalaya. You are suggested to take up the test 2 days prior to departure dates.</div>
    <br/>
    <div className="jBguBs">NOTE: Numerous factors such as weather, road conditions, the physical ability of participants etc. May cause itinerary change. We reserve the rights to change any schedule in the interest of safety, comfort and general wellbeing.</div>
    </div>
}
{/*********Itenary */}
{this.state.dateCosting === true &&
    <div className="kzWLJe" >
    <div className="dmcNqz">dates
    <div className="kLKzPK">dates</div>
    </div>

<div className="bvOXwO">
<div className="gdiInO">
OCT
</div>
<div className="gdiInO">
OCT
</div>
<div className="gdiInO">
OCT
</div>
<div className="gdiInO">
OCT
</div>
<div className="gdiInO">
OCT
</div>

</div>

<div className="FpQEA">
    <span className="jntrJV">23 Oct 2021 - 28 Oct 2021<br/>(sold out)</span>
</div>

<button className="gOpcYb">Book Now</button>
 <div className="dmcNqz">costing
    <div className="kLKzPK">costing</div>
    </div>
    <table className="kHFSWg">
    <thead>
    <tr>
    <td className="kgItBa">room sharing</td>
    <td className="kgItBa">Selling Cost<br/>(Per Person)</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td className="SBfno">double sharing</td>
    <td className="SBfno">₹ 21,999/-</td>
    </tr>
    <tr>
    <td className="SBfno">triple sharing</td>
    <td className="SBfno">₹ 20,499/-</td>
    </tr>
    </tbody>
    </table>
    <div className="dmcNqz">inclusion
    <div className="kLKzPK">inclusion</div>
    </div>
    <div className="cOpUyF">
    <div className="fpeFUg">
        ✔ Entire travel as per the itinerary by tempo traveler.</div>
        <div className="fpeFUg">✔ 5 nights accommodation – 2 Nights in Hotel at Cherrapunjee, 1 Night in Camps at Shnongpdeng &amp; 2 Nights in Hotel at Shillong on triple sharing basis</div>
        <div className="fpeFUg">✔ 6 meals – Breakfast on Day 2, Day 3, Day 4, Day 5 &amp; Day 6 + Dinner on Day 4</div>
        <div className="fpeFUg">✔ Entry fees to the sightseeing places mentioned in the itinerary.</div>
      </div>
      <div className="dmcNqz">exlusions
      <div className="kLKzPK">exlusions</div>
      </div>
      <div className="cOpUyF">
      <div className="fpeFUg">
          ✘ Entire travel as per the itinerary by tempo traveler.</div>
          <div className="fpeFUg">✘ 5 nights accommodation – 2 Nights in Hotel at Cherrapunjee, 1 Night in Camps at Shnongpdeng &amp; 2 Nights in Hotel at Shillong on triple sharing basis</div>
          <div className="fpeFUg">✘ 6 meals – Breakfast on Day 2, Day 3, Day 4, Day 5 &amp; Day 6 + Dinner on Day 4</div>
          <div className="fpeFUg">✘ Entry fees to the sightseeing places mentioned in the itinerary.</div>
        </div>
</div>
}
{/**OTHER INFO */}
{this.state.otherInfo ===true &&
    <div>
    <div className="dmcNqz">other info
    <div className="kLKzPK">other info</div>
    </div>
    <div className="eOjINF">
    <span className="bxxrdo">Must Carry</span>
    <ul className="TptTy">
        <li>Authentic Government ID Card</li>
        <li>Comfortable warm clothing like woolen socks, cap, fleece jackets or warmers, down jacket, toiletries.</li>
        <li>Sunscreen &amp; lip balm, Good U/V protection sunglasses</li>
        <li>Personal Medicines (if any)</li>
    </ul>
</div>
<div className="eOjINF">
<span className="bxxrdo">Cancellation Policy</span>
<ul className="TptTy">
<li id="can0">No Refund shall be made with respect to the initial booking amount for any cancellations. However,</li>
<li id="can1">If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.</li>
<li id="can2">If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.</li>
<li id="can3">If cancellations are made within 0-15 days before the start date of the trip, 100% of the trip cost will be charged as cancellation fees.</li>
</ul></div>
<div className="gbgxMn">Get ready for 5-star experiences with us</div>
<div className="jcElrP">
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
<span className="bxxrdo">Things to Carry</span>
<div className="bzWkYg">gears</div>
<ul className="eCTaWc"><li>a rucksack bag and a day pack</li><li>
3-litre water bladder or water bottle</li></ul>
<div className="bzWkYg">Clothes</div>
<ul className="eCTaWc"><li>a rucksack bag and a day pack</li><li>
3-litre water bladder or water bottle</li></ul>
<div className="bzWkYg">Footwear</div>
<ul className="eCTaWc"><li>a rucksack bag and a day pack</li><li>
3-litre water bladder or water bottle</li></ul>
<div className="bzWkYg">Meditiation</div>
<ul className="eCTaWc"><li>a rucksack bag and a day pack</li><li>
3-litre water bladder or water bottle</li></ul>
<div className="bzWkYg">Personal Accessories</div>
<ul className="eCTaWc"><li>a rucksack bag and a day pack</li><li>
3-litre water bladder or water bottle</li></ul>
    </div>

}
<div className="iWgYwp">
<div className="kquZKY">
<div className=" dmcNqz">videos
<div className="kLKzPK">videos</div>
</div>
<div className="liMQwr">
<div className="eqBApu">
<iframe title="leh0" width="100%" height="100%" src="https://www.youtube.com/embed/sDP1--HSxzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
<div className="eqBApu">
<iframe title="leh0" width="100%" height="100%" src="https://www.youtube.com/embed/sDP1--HSxzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
<div className="eqBApu">
<iframe title="leh0" width="100%" height="100%" src="https://www.youtube.com/embed/sDP1--HSxzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
</div>
</div>


<div className="kquZKY">
<div className=" dmcNqz">photos
<div className="kLKzPK">photos</div>
</div>
<div className="jhwLvj">
    <img src="/images/wanderon-meghalaya-3.jpg" className="okeiS" />
    <img src="/images/wanderon-meghalaya-4.jpg" className="okeiS" />
    <img src="/images/wanderon-meghalaya-5.jpg" className="okeiS" />
    <img src="/images/wanderon-meghalaya-7.jpg" className="okeiS" />
    <img src="/images/wanderon-meghalaya-6.jpg" className="okeiS" />
    <img src="/images/wanderon-meghalaya-8.jpg" className="okeiS" />
   </div>

   <div className="iWgYwp">
   <div className=" dmcNqz">testimonials
<div className="kLKzPK">testimonials</div>
<div className="kvgMSE">

<div className="hXCKrP">
        <span className="fLDLGy">★★★★★</span>
        <div className="jOzkPU">
            <div className="dGhBnO">vinuthag2016</div>
            <span className="dNOCBk">9 Nov, 2019</span>
            </div>
            <span className="bmwzzl">I had opted Meghalaya package in November 2019. An experience to cherish and remember for ever. They have planned the sights to visit, quite well for 6 days. Went there solo and met amazing people in the group. It was definitely fun with the whole lot.

Place review:
Meghalaya is not yet commercialized at the moment and we see a decent crowd. The nature by itself is soothing and you get to do water activities in crystal clear water during this time. The culture and people are something that you must see and explore.
</span>
</div>

<div className="hXCKrP">
        <span className="fLDLGy">★★★★★</span>
        <div className="jOzkPU">
            <div className="dGhBnO">vinuthag2016</div>
            <span className="dNOCBk">9 Nov, 2019</span>
            </div>
            <span className="bmwzzl">I had opted Meghalaya package in November 2019. An experience to cherish and remember for ever. They have planned the sights to visit, quite well for 6 days. Went there solo and met amazing people in the group. It was definitely fun with the whole lot.

Place review:
Meghalaya is not yet commercialized at the moment and we see a decent crowd. The nature by itself is soothing and you get to do water activities in crystal clear water during this time. The culture and people are something that you must see and explore.
</span>
</div>

<div className="hXCKrP">
        <span className="fLDLGy">★★★★★</span>
        <div className="jOzkPU">
            <div className="dGhBnO">vinuthag2016</div>
            <span className="dNOCBk">9 Nov, 2019</span>
            </div>
            <span className="bmwzzl">I had opted Meghalaya package in November 2019. An experience to cherish and remember for ever. They have planned the sights to visit, quite well for 6 days. Went there solo and met amazing people in the group. It was definitely fun with the whole lot.

Place review:
Meghalaya is not yet commercialized at the moment and we see a decent crowd. The nature by itself is soothing and you get to do water activities in crystal clear water during this time. The culture and people are something that you must see and explore.
</span>
</div>
</div>



<div className="gbgxMn">Get ready for 5-star experiences with us</div>
<div className="jcElrP">
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
</div>
</div>
</div>
</div>{/**LEFT SIDE END DIV */}
{/*************RIGHT SIDE */}
<div className="gnVRSY">
<div style={{position:"sticky",top:20}}>
<div className="hEkqBO">Trips so perfect that Travelers want you to know more about their experiences!</div>
<div className="dMOyCb">
<iframe title="testimonial" width="100%" height="100%" src="https://www.youtube.com/embed/BagUzmZTJ58?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
<div className="iQGDRx">get in touch
<div className=" KRqlw">get in touch</div>
</div>
{/**************FORM SIDE    */}
<div className="jmqgYP">
<div className="xKFK">
<label for="name" className="kYpTQp">Full Name *</label>
<br/>
<input type="text" name="name" required="" className="kRBTWe" value="" />
</div>
<div className="xKFK">
<label for="phone" className="kYpTQp">Contact No. *</label><br/>
<input type="number" name="phone" required="" className="kRBTWe" value="" />
</div>
<div className="xKFK"><label for="email" className="kYpTQp">Email ID *</label><br/>
<input type="text" name="email" required="" className="kRBTWe" value="" />
</div>
<div className="xKFK"><label for="destination" className="kYpTQp">Preferred Destination</label><br/>
<input type="text" name="destination" className="kRBTWe" value=""/>
</div>
<button type="submit" className="gsWSnX">Submit</button>
</div>
</div>
</div>
</div>
{/**********ONLY FOR MOBILE VERSION */}
<div style={{display:window.screen.width > 600 ? "none" : "block"}}>
<div className="koKnCh">
<div className="cjwctw">
<div className="fSaekx">Hand over all your requirements to our travel experts who've curated more than 200 itineraries.</div>
<div className="hLPuqB"  onClick={()=>this.onClickRequestCall()}>Talk to our expert</div>
<div className="btNAHt">P.S.- We love talking about travel 24*7</div>
<img src="/images/cta-images.svg" className="KfEZM" />
</div>
</div>
</div>
{/**********SIMILIAR TRIPS */}
<div className="kGfgtg">
<div className="dqjGzu">similiar trips
<div className="kMQpUx">similiar trips</div>
</div>
<div className="gCLlZk">
<a href="">
<div className="kYLhcm">
<div className="kfJveE">Meghalaya Backpacking NY</div>
<div className="bPcjVM">
<div className="isVrn">₹ 25,499/-
<span className="fsJTZe">onwards</span>
</div>
<div className="drMOnD">
<img src="/images/wanderon-meghalaya-3.jpg"  className="iwLIje" />5N-6D</div>
</div>
</div>
</a>
<a href="">
<div className="kYLhcm">
<div className="kfJveE">Meghalaya Backpacking NY</div>
<div className="bPcjVM">
<div className="isVrn">₹ 25,499/-
<span className="fsJTZe">onwards</span>
</div>
<div className="drMOnD">
<img src="/images/wanderon-meghalaya-3.jpg"  className="iwLIje" />5N-6D</div>
</div>
</div>
</a>
<a href="">
<div className="kYLhcm">
<div className="kfJveE">Meghalaya Backpacking NY</div>
<div className="bPcjVM">
<div className="isVrn">₹ 25,499/-
<span className="fsJTZe">onwards</span>
</div>
<div className="drMOnD">
<img src="/images/wanderon-meghalaya-3.jpg"  className="iwLIje" />5N-6D</div>
</div>
</div>
</a>
</div>
</div>
<a className="ca-dOFo" >
<CallIcon onClick={()=>this.onClickCallIcon()}/>
</a>
{this.state.callIcon === true &&
    <div className="dszVNg">
    <span className="bA-dpjA" onClick={()=>this.onClickRequestCall()}>
    <img src="/svg/call-icon/call-back.svg" alt="request a call back" />
    <span>Request A Call Back</span></span>
    <a target="_blank" href="" className="bA-dpjA">
    <img src="/svg/call-icon/whatsapp.svg" alt="whatsapp" /><span>WhatsApp</span></a>
    <a target="_blank" href="tel:8887756502" className="bA-dpjA">
    <img src="/svg/call-icon/call-now.svg" alt="call now" />
    <span>Call Now</span></a>
    </div>
    }
  
        <Modal open={this.state.requestCall}  style={{ display:"flex",justifyContent:"center"}}>
        <Paper style={{width:"95%",marginTop:"35%",height:"80%",overflow:"hidden",position:"relative",padding:"4%"}}>
        <div className="kWQTdT">
        <span onClick={()=>this.setState({requestCall:false})}>✖</span>
        </div>
        <h2 className="eFTYdn">Not sure what to do? We'll give you a <span>call back</span></h2>
      
        <div className="cVmhoR">
        
        <input placeholder="Name" type="text" required="" name="name" value="" className="NyXXA" />
        <input placeholder="Phone" type="number" required="" name="phone" value="" className="NyXXA" />
        <input placeholder="Email" type="email" required="" name="email" value="" className="NyXXA" />
        <textarea placeholder="Message" name="message" rows="12" className="hXTYoj"></textarea>


        <input type="submit" value="Submit" className="cFwCoH" />
        </div>
   
        </Paper>
        </Modal>  
    

   
            </div>
        )
    }
}

export default Backpacking
