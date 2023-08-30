import "./Story.css";

function Story({profilePic, username}){
  return (
    <div className="story">
      <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmTWiq4hLhWqSuzboLCNO0sMMKO2gxXvm1w&usqp=CAU"
      alt="user"
      className="story-image"
      />
      <p>Instagram User</p>
    </div>
  );
}

export default Story;