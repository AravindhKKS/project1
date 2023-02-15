import { ProfileCard } from "../profile/ProfileCard";
import AlexaImage from "../images/alexa.png";
import CortanaImage from "../images/cortana.png";
import SiriImgage from "../images/siri.png";

export default function Card() {
  return (
    <div>
      {" "}
      <div className="hero is-primary">
        <div className="hero-body   ">
          <p className="title"> Personal Digital Assistants</p>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                discription="Alexa was created by Amazon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana"
                image={CortanaImage}
                discription="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImgage}
                discription="Siri was made by Apple and is being phased out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
