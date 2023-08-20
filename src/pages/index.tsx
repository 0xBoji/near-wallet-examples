import type { NextPage } from "next";

// @component
import { Hero, Team } from "view";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
  
      <Team />
    </div>
  );
};

export default Home;
