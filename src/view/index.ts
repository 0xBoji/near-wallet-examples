import dynamic from "next/dynamic";

//-------------------------------------------------------------
export { default as Hero } from "./Hero/Hero";
export const Team = dynamic(() => import("./Space/Space"));

