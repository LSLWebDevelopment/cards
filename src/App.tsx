import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import alexa from "./assets/images/alexa.png";
import siri from "./assets/images/siri.png";
import cortana from "./assets/images/cortana.png";

const items = [
  {
    img: alexa,
    title: "Alexa",
    handle: "@alexa99",
    text: "I'll help you buy stuff off Amazon",
  },
  {
    img: cortana,
    title: "Cortana",
    handle: "@cortana12",
    text: "Personal assistant by Microsoft",
  },
  {
    img: siri,
    title: "Siri",
    handle: "@siri44",
    text: "I don't get a lof of updates anymore",
  },
];

export function App() {
  return (
    <div className="w-5/6 mx-auto">
      <Header header="Personal Digital Assistants" />
      <CardList items={items} />
    </div>
  );
}

export default App;
