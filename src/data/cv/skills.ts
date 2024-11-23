import { JOBS } from "./jobs";

import { TbBrandNextjs as IconNext } from "react-icons/tb";
import {
  SiReactquery as IconReactQuery,
  SiChakraui as IconChakra,
  SiFoodpanda as IconPanda,
} from "react-icons/si";

import {
  PiAngularLogoBold as IconAngular,
  PiFigmaLogoDuotone as IconFigma,
} from "react-icons/pi";
import { IconType } from "react-icons";
import { SIDES } from "./side";
import { SKILL } from "./skill";

export const SKILLS = () => [
  ...new Set([...SIDES, ...JOBS].map((job) => job.skills).flat()),
];

export const SKILL_MAP: [string, IconType][] = [
  [SKILL.NEXTJS, IconNext],
  [SKILL.REACTQUERY, IconReactQuery],
  [SKILL.ANGULAR, IconAngular],
  [SKILL.PANDA, IconPanda],
  [SKILL.CHAKRA, IconChakra],
  [SKILL.FIGMA, IconFigma],
];