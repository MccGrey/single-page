import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Subheader from "./components/subheader/Subheader";
import SubSubHeader from "./components/subsubheader/SubSubHeader";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Subheader />
      <SubSubHeader />
      <Testimonial />
    </div>
  );
}

export default App;
