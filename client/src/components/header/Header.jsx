import "./header.css";

export default function Header() {
  return (
  <div className='header'>
      <div className="headerTitles">
          <span className="headerTitleSm">Your</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        className="headerImg" 
        src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-844297.jpg&fm=jpg" 
        alt="background" 
        />
  </div>);
}

