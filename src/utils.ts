import projects from "./data/projects.json";
import mainSkills from "./data/mainSkills.json";
import familiarSkills from "./data/familiarSkills.json";

export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  repo: string;
  url: string;
  stack: {
    name: string;
    icon: string;
    description: string;
  }[];
  thumbnail: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

// export const getProjects = async () => {
//   const response = await fetch(
//     `${import.meta.env.PUBLIC_FIREBASE_DATABASE_URL}/projects.json`,
//   );
//   const data = await response.json();

//   return data as Project[];
// };

export const getProjects = () => {
  return projects as Project[];
};

export const getMainSkills = () => {
  return mainSkills as Skill[];
};

export const getFamiliarSkills = () => {
  return familiarSkills as Skill[];
};
