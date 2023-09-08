import "./DetailsWeb.css";
import image from '../../Images/security.jpg'


const DetailsWeb = () => {
  return (
    <>
      <div className="flex-container">
        <div className="flexitems-1">
          <h5>Pick Your Lift Quick</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem possimus fugit nemo autem ad perspiciatis.</p>
        </div>
        <div className="flexitems-2">
          <h5>Trust Who You Travel With</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem possimus fugit nemo autem ad perspiciatis.</p>
        </div>
        <div className="flexitems-3">
          <h5>In affordable Price</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem possimus fugit nemo autem ad perspiciatis.</p>
        </div>
      </div>
      <div className="flex-container-2">
        <div className="flexitems-4">
          <img className="security-image" src={image} alt="hi" />
        </div>
        <div className="flexitems-5">
          <h5>Your Safety Matters to Us</h5>
          <p>At LiftPlease, we understand that safety is paramount when it comes to traveling and connecting with others. We've implemented a range of measures to ensure your peace of mind while using our platform.</p>
        </div>
      </div>
        <h5 className="about" id="about-us">About Us</h5>
      <div className="felx-container-3">
        <div className="flexitems-7">
          <p className="items-7">At LiftPlease, we believe in empowering individuals to travel conveniently, connect with others, and make every journey memorable. Whether you're heading across town or exploring new horizons, our platform brings together people with rides to share and those looking for a comfortable and cost-effective way to travel</p><br/>
          <p className="items-7a">Our vision is to revolutionize the way people travel by providing a platform that fosters community, sustainability, and accessibility. We're here to bridge the gap between those with vehicles and those seeking rides, enabling a seamless and enjoyable travel experience for everyone.
          </p>
        </div>
      </div>
      <div className="flex-container-4">
        <div className="flexitems-8">
          <h5>Ride Sharing</h5>
          <p>Share your rides and make traveling more affordable and eco-friendly.</p>
        </div>
        <div className="flexitems-9">
          <h5>Flexibility</h5>
          <p>Choose your travel companions and set your own schedule.</p>
        </div>
        <div className="flexitems-10">
          <h5>Safety First</h5>
          <p>We prioritize safety and provide features to help you travel with peace of mind.</p>
        </div>
        <div className="flexitems-11">
          <h5>Community</h5>
          <p>Join a vibrant community of travelers and make new connections on every journey.</p>
        </div>
      </div>
    </>
  );
};
export default DetailsWeb;
