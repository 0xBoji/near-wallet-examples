import React from "react";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Space.styled";

// @component
import { TeamItem } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { FaPlus } from "react-icons/fa";
import Image1 from "assets/png/img1.webp";
import Image2 from "assets/png/uniswap.webp";
import Image3 from "assets/png/pancakeswap.png";
import Image4 from "assets/png/theopendao.webp";
import Image5 from "assets/png/Edu.png";
import Image6 from "assets/png/op.png";

const initialItemsToShow = 6; // Initial number of items to show
const itemsToAdd = 6; // Number of items to add when "Load More" is clicked

const Spaceinfo = [
  {
    image: Image1,
    title: "DAO",
    description: "DAO Arbitrum",
    follower: "100,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image3,
    title: "Pancake Swap",
    description: "Pancake Swap Community",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image2,
    title: "Uni Swap",
    description: "Uni Swap Community",
    follower: "70,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image6,
    title: "Optimism",
    description: "Layer2",
    follower: "20,000 Followers",
    connect: [{ icon: FaPlus, link: "#"}],
  },
  {
    image: Image4,
    title: "OpenSea",
    description: "OpenSea marketplace",
    follower: "50,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "#" }],
  },
];
// ----------------------------------------------------------

export default function index() {
  return (
    <Layout id="space">
      <Container>
        <Title>Spaces</Title>

        <MainLayout>
          {Spaceinfo.map((item, index) => (
            <ItemLayout key={index}>
              <TeamItem data={item} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
    </Layout>
  );
}
