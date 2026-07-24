// Module ID: 12740
// Function ID: 99225
// Name: HavenGenres
// Dependencies: [2]

// Module 12740 (HavenGenres)
let obj = { NONE: "none", GOLDFISH: "goldfish", GOLDFISH_BLUE: "goldfishBlue", GOLDFISH_PINK: "goldfishPink", POPCORN: "popcorn", POPCORN_PURPLE: "popcornPurple", POPCORN_BLUE: "popcornBlue", IMP: "imp", IMP_BLUE: "impBlue", IMP_PINK: "impPink" };
const items = [, , , , , , , , , ];
({ NONE: arr[0], GOLDFISH: arr[1], GOLDFISH_BLUE: arr[2], GOLDFISH_PINK: arr[3], POPCORN: arr[4], POPCORN_PURPLE: arr[5], POPCORN_BLUE: arr[6], IMP: arr[7], IMP_BLUE: arr[8], IMP_PINK: arr[9] } = obj);
obj = { name: "none", width: 0, height: 0, offset: { top: 0, left: 0 } };
obj = { name: "goldfish", width: 136, height: 236, offset: { top: 100, left: -6 } };
const obj1 = { name: "goldfishBlue", width: 136, height: 236, offset: { top: 100, left: -6 } };
const obj2 = { name: "goldfishPink", width: 136, height: 236, offset: { top: 100, left: -6 } };
const obj3 = { name: "popcorn", width: 128, height: 124, offset: { top: 24, left: -60 } };
const obj4 = { name: "popcornPurple", width: 128, height: 124, offset: { top: 24, left: -60 } };
const obj5 = { name: "popcornBlue", width: 128, height: 124, offset: { top: 24, left: -60 } };
const obj6 = { name: "imp", width: 160, height: 176, offset: { top: 72, left: -28 } };
const obj7 = { name: "impBlue", width: 160, height: 176, offset: { top: 72, left: -28 } };
const obj8 = { name: "impPink", width: 160, height: 176, offset: { top: 72, left: -28 } };
const result = require("set").fileFinishedImporting("modules/haven/constants.tsx");
const obj9 = { id: 1, x: 722, y: 1203, dimensions: { width: 123, height: 102 }, player: { x: 54, y: 12 }, assetKey: "cooler", shadowPosition: { x: -79, y: 102 } };
const items1 = [obj9, , , , , ];
const obj10 = { id: 2, x: 894, y: 1100, dimensions: { width: 123, height: 157 }, player: { x: 62, y: 72 }, assetKey: "chair", shadowPosition: { x: -28, y: 161 } };
items1[1] = obj10;
const obj11 = { id: 3, x: 1024, y: 1156, dimensions: { width: 122, height: 58 }, player: { x: 48, y: 10 }, assetKey: "leftRock" };
items1[2] = obj11;
const obj12 = { id: 4, x: 1173, y: 1175, dimensions: { width: 144, height: 64 }, player: { x: 0, y: 0 }, assetKey: "logLeft" };
items1[3] = obj12;
const obj13 = { id: 5, x: 1312, y: 1184, dimensions: { width: 156, height: 74 }, player: { x: 0, y: 12 }, assetKey: "logRight" };
items1[4] = obj13;
const obj14 = { id: 6, x: 1398, y: 1254, dimensions: { width: 116, height: 60 }, player: { x: -24, y: 0 }, assetKey: "rightRock" };
items1[5] = obj14;

export const HavenGenres = { SLEEPY: "sleepy", CHILL: "chill", JAZZY: "jazzy" };
export const HavenAmbientSound = { ENVIRONMENT: "environment", CAMPFIRE: "campfire" };
export const Characters = obj;
export const CharacterMap = items;
export const CharacterData = { [obj.NONE]: obj, [obj.GOLDFISH]: obj, [obj.GOLDFISH_BLUE]: obj1, [obj.GOLDFISH_PINK]: obj2, [obj.POPCORN]: obj3, [obj.POPCORN_PURPLE]: obj4, [obj.POPCORN_BLUE]: obj5, [obj.IMP]: obj6, [obj.IMP_BLUE]: obj7, [obj.IMP_PINK]: obj8 };
export const SEATS = items1;
export const HavenSoundKeys = { RADIO: "radio", ENVIRONMENT: "environment", CAMPFIRE: "campfire" };
