import React from "react";
import Image from "next/image";

// @styled-components
import {
  Layout,
  ImageLayout,
  Title,
  Des,
  Detail,
  TP,
  Follower,
  Icons,
  Icon,
} from "./SpaceItem.styled";

// @type
type Props = {
  image: any;
  title: string;
  description: string;
  trustpoint: string;
  follower: string;
  connect: { icon: any; link: string }[];
};

//----------------------------------------------------------------

const Container: React.FC<{ data: Props }> = ({ data }) => {
  return (
    <Layout>
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" style={{ borderRadius: '12px' }} />
      </ImageLayout>
      <Title>{data.title}</Title>
      <Des>{data.description}</Des>
      <TP>{data.trustpoint} TP</TP>
      <Detail>
        <Follower>{data.follower}</Follower>
        <Icons>
          {data.connect.map((item, index) => (
            <Icon key={index} href={item.link}>
              <a target="_blank">
                <item.icon />
              </a>
            </Icon>
          ))}
        </Icons>
      </Detail>
    </Layout>
  );
};
export default Container;
