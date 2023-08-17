import React from "react";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Space.styled";

// @component
import { TeamItem } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { GrAdd, CiCircleRemove } from "react-icons";
import Image1 from "assets/png/skeleton-1.png";
import Image2 from "assets/png/skeleton-2.png";
import Image3 from "assets/png/skeleton-3.png";
import Image4 from "assets/png/skeleton-4.png";
import Image5 from "assets/png/skeleton-5.png";
import Image6 from "assets/png/skeleton-6.png";

const TeamInfo = [
  {
    image: Image1,
    space: "Product Manager",
    follower: "USA",
    name: "Austin",
    connect: [{ icon: GrAdd, link: "" }],
  },
  {
    image: Image3,
    role: "Marketing & Team Lead",
    description: "Nigeria",
    name: "Joyce",
    connect: [{ icon: GrAdd, link: "" }],
  },
  {
    image: Image2,
    role: "Marketing & Digital Content",
    description: "Nigeria",
    name: "Jay",
    connect: [{ icon: GrAdd, link: "" }],
  },
  {
    image: Image6,
    role: "Senior Developer",
    description: "Netherlands",
    name: "Jordy",
    connect: [
      {
        icon: CiCircleRemove,
        link: "",
      },
    ],
  },
  {
    image: Image4,
    role: "Music Producer",
    description: "USA",
    name: "Bodi",
    connect: [{ icon: GrAdd, link: "" }],
  },
  {
    image: Image5,
    role: "Graphic Designer & Artist",
    description: "Philippines",
    name: "Alech",
    connect: [{ icon: GrAdd, link: "" }],
  },
];
// ----------------------------------------------------------

export default function index() {
  return (
    <Layout id="space">
      <Container>
        <Title>Space</Title>

        <MainLayout>
          {TeamInfo.map((item, index) => (
            <ItemLayout key={index}>
              <TeamItem data={item} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
    </Layout>
  );
}
