import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "We’re thrilled to have Twire, Sri Lanka, as one of our main development centers, and we’re excited to see where it takes us. We believe in collaboration, diverse set of skills and backgrounds for innovative solutions thereof. Therefor, Twire with its Manager and team have the right mindset and expertise for us.",
    author: "JONAS INGHAMMER, EFFECTSOFT",
    image: "https://www.twire.se/wp-content/uploads/2019/06/jonas-2.jpg",
  },
  {
    text: "Our goal at Minkalender has always been to make our products user friendly and efficient for our customers. One of the ways we’re accomplishing this is through our business relationship with Twire.",
    author: "FREDRIC JHONSON",
    image: "https://www.twire.se/wp-content/uploads/2019/06/MinKalenderLogo.png",
  },
  {
    text: " There are many companies out there working within the IT-industry, and then there is Twire, able to offer the support and reliability of a traditional consultancy firm with the low cost of an outsourcing company with the broadness and flexibility of a well-grounded business that also emphasise on integrity and data protection with right expertise. By far one of the best companies I have experienced.",
    author: "SEBASTIAN EIGH, SLIDECTURE",
    image: "https://www.twire.se/wp-content/uploads/2019/06/SlideCatcherLogo-1.png",
  },
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <div className="text">
            <p>{testimonials[index].text}</p>
            <p>--- {testimonials[index].author}</p>
          </div>
          <div className="image">
            <img src={testimonials[index].image} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
