// Module ID: 4952
// Function ID: 4953
// Name: GuildRoomConstants
// Dependencies: [1119, 2386, 4953, 4954, 4955, 4950, 4956, 4957, 4958, 4959, 4960, 4961, 4962, 4963, 4964, 4965, 4966, 4967, 4968, 2]
// Exports: getBlurredBackgroundScale

// Module 4952 (GuildRoomConstants)
import _modDef2386 from "module_2386" /* 2386 */;
import _modDef4954 from "module_4954" /* 4954 */;
import _modDef4955 from "module_4955" /* 4955 */;
import _modDef4957 from "module_4957" /* 4957 */;
import _modDef4958 from "module_4958" /* 4958 */;
import _modDef4959 from "module_4959" /* 4959 */;
import _modDef4960 from "module_4960" /* 4960 */;
import _modDef4961 from "module_4961" /* 4961 */;
import _modDef4962 from "module_4962" /* 4962 */;
import _modDef4963 from "module_4963" /* 4963 */;
import _modDef4964 from "module_4964" /* 4964 */;
import _modDef4965 from "module_4965" /* 4965 */;
import _modDef4966 from "module_4966" /* 4966 */;
import _modDef4967 from "module_4967" /* 4967 */;
import _modDef4968 from "module_4968" /* 4968 */;

let obj = {};
const obj2 = {
  background: _modDef4954,
  backgroundBlurred: _modDef4955,
  aspectRatio: 1.366583541147132,
  getName() {
    const intl = ytIYuY(1119).intl;
    return intl.formatToPlainString(number(2386)["3xb4VY"], { number: 1 });
  },
  seats: null,
  plants: null,
  duck: null,
  notePad: null,
  screen: null
};
const obj3 = {};
const obj4 = { name: "PC_SEAT_1", getLabel: null, position: null };
obj4.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj4.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][0];
obj3[fn(4950).GuildRoomSeats.SEAT_1] = obj4;
const obj5 = { name: "PC_SEAT_2", getLabel: null, position: null };
obj5.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj5.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][1];
obj3[fn(4950).GuildRoomSeats.SEAT_2] = obj5;
const obj6 = { name: "PC_SEAT_3", getLabel: null, position: null };
obj6.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj6.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][2];
obj3[fn(4950).GuildRoomSeats.SEAT_3] = obj6;
const obj7 = { name: "DUO_SEAT_1", getLabel: null, position: null };
obj7.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj7.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][3];
obj3[fn(4950).GuildRoomSeats.SEAT_4] = obj7;
const obj8 = { name: "DUO_SEAT_2", getLabel: null, position: null };
obj8.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj8.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][4];
obj3[fn(4950).GuildRoomSeats.SEAT_5] = obj8;
const obj9 = { name: "DUO_SEAT_STANDING_1", getLabel: null, position: null };
obj9.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj9.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][5];
obj3[fn(4950).GuildRoomSeats.SEAT_6] = obj9;
const obj10 = { name: "MAIN_COUCH_SEAT_1", getLabel: null, position: null };
obj10.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj10.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][6];
obj3[fn(4950).GuildRoomSeats.SEAT_7] = obj10;
const obj11 = { name: "MAIN_COUCH_SEAT_2", getLabel: null, position: null };
obj11.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj11.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][7];
obj3[fn(4950).GuildRoomSeats.SEAT_8] = obj11;
const obj12 = { name: "MAIN_COUCH_SEAT_3", getLabel: null, position: null };
obj12.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj12.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][8];
obj3[fn(4950).GuildRoomSeats.SEAT_9] = obj12;
const obj13 = { name: "MAIN_COUCH_SEAT_4", getLabel: null, position: null };
obj13.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj13.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][9];
obj3[fn(4950).GuildRoomSeats.SEAT_10] = obj13;
const obj14 = { name: "MAIN_COUCH_SEAT_5", getLabel: null, position: null };
obj14.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj14.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][10];
obj3[fn(4950).GuildRoomSeats.SEAT_11] = obj14;
const obj15 = { name: "SIDE_GROUP_SEAT_1", getLabel: null, position: null };
obj15.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj15.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][11];
obj3[fn(4950).GuildRoomSeats.SEAT_12] = obj15;
const obj16 = { name: "SIDE_GROUP_SEAT_2", getLabel: null, position: null };
obj16.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj16.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][12];
obj3[fn(4950).GuildRoomSeats.SEAT_13] = obj16;
const obj17 = { name: "SIDE_GROUP_SEAT_3", getLabel: null, position: null };
obj17.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj17.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][13];
obj3[fn(4950).GuildRoomSeats.SEAT_14] = obj17;
const obj18 = { name: "SIDE_GROUP_SEAT_STANDING_1", getLabel: null, position: null };
obj18.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj18.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][14];
obj3[fn(4950).GuildRoomSeats.SEAT_15] = obj18;
const obj19 = { name: "BACKROOM_SEAT_1", getLabel: null, position: null, dim: true };
obj19.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj19.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][15];
obj3[fn(4950).GuildRoomSeats.SEAT_16] = obj19;
const obj20 = { name: "BACKROOM_SEAT_2", getLabel: null, position: null, dim: true };
obj20.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj20.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][16];
obj3[fn(4950).GuildRoomSeats.SEAT_17] = obj20;
const obj21 = { name: "BACKROOM_SEAT_3", getLabel: null, position: null, dim: true };
obj21.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj21.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][17];
obj3[fn(4950).GuildRoomSeats.SEAT_18] = obj21;
const obj22 = { name: "RAFTERS_SEAT_1", getLabel: null, position: null };
obj22.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj22.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][18];
obj3[fn(4950).GuildRoomSeats.SEAT_19] = obj22;
const obj23 = { name: "RAFTERS_SEAT_2", getLabel: null, position: null };
obj23.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj23.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][19];
obj3[fn(4950).GuildRoomSeats.SEAT_20] = obj23;
const obj24 = { name: "RAFTERS_SEAT_3", getLabel: null, position: null };
obj24.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj24.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][20];
obj3[fn(4950).GuildRoomSeats.SEAT_21] = obj24;
const obj25 = { name: "PC_SEAT_4", getLabel: null, position: null };
obj25.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj25.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.DEFAULT][21];
obj3[fn(4950).GuildRoomSeats.SEAT_22] = obj25;
obj2.seats = obj3;
const point = { plantDeadAsset: _modDef4957, plantDyingAsset: _modDef4958, plantLiveAsset: _modDef4959, plantVaseAsset: _modDef4960, x: 45.57, y: 50.62 };
const items = [point];
obj2.plants = items;
obj2.duck = { asset: _modDef4961, position: { x: 67.3, y: 45 }, width: 4.8 };
const obj26 = { asset: _modDef4961, position: { x: 67.3, y: 45 }, width: 4.8 };
obj2.notePad = { asset: _modDef4962, position: { x: 81.5, y: 84.5 }, width: 4 };
obj2.screen = { topLeft: { x: 56.8, y: 16.15 }, topRight: { x: 75.85, y: 23 }, bottomRight: { x: 75.3, y: 41.3 }, bottomLeft: { x: 56.95, y: 33.75 } };
obj[fn(4953).GuildRoomBackgrounds.DEFAULT] = obj2;
const obj28 = {
  background: _modDef4963,
  backgroundBlurred: _modDef4955,
  aspectRatio: 1.2894117647058823,
  getName() {
    const intl = ytIYuY(1119).intl;
    return intl.formatToPlainString(number(2386)["3xb4VY"], { number: 2 });
  },
  seats: null,
  plants: null,
  duck: null,
  notePad: null,
  screen: null
};
const obj29 = {};
const obj30 = { name: "PC_SEAT_1", getLabel: null, position: null };
obj30.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj30.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][0];
obj29[fn(4950).GuildRoomSeats.SEAT_1] = obj30;
const obj31 = { name: "PC_SEAT_2", getLabel: null, position: null };
obj31.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj31.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][1];
obj29[fn(4950).GuildRoomSeats.SEAT_2] = obj31;
const obj32 = { name: "PC_SEAT_3", getLabel: null, position: null };
obj32.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj32.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][2];
obj29[fn(4950).GuildRoomSeats.SEAT_3] = obj32;
const obj33 = { name: "DUO_SEAT_1", getLabel: null, position: null };
obj33.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj33.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][3];
obj29[fn(4950).GuildRoomSeats.SEAT_4] = obj33;
const obj34 = { name: "DUO_SEAT_2", getLabel: null, position: null };
obj34.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj34.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][4];
obj29[fn(4950).GuildRoomSeats.SEAT_5] = obj34;
const obj35 = { name: "DUO_SEAT_STANDING_1", getLabel: null, position: null };
obj35.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj35.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][5];
obj29[fn(4950).GuildRoomSeats.SEAT_6] = obj35;
const obj36 = { name: "MAIN_COUCH_SEAT_1", getLabel: null, position: null };
obj36.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj36.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][6];
obj29[fn(4950).GuildRoomSeats.SEAT_7] = obj36;
const obj37 = { name: "MAIN_COUCH_SEAT_2", getLabel: null, position: null };
obj37.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj37.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][7];
obj29[fn(4950).GuildRoomSeats.SEAT_8] = obj37;
const obj38 = { name: "MAIN_COUCH_SEAT_3", getLabel: null, position: null };
obj38.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj38.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][8];
obj29[fn(4950).GuildRoomSeats.SEAT_9] = obj38;
const obj39 = { name: "MAIN_COUCH_SEAT_4", getLabel: null, position: null };
obj39.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj39.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][9];
obj29[fn(4950).GuildRoomSeats.SEAT_10] = obj39;
const obj40 = { name: "MAIN_COUCH_SEAT_5", getLabel: null, position: null };
obj40.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj40.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][10];
obj29[fn(4950).GuildRoomSeats.SEAT_11] = obj40;
const obj41 = { name: "SIDE_GROUP_SEAT_1", getLabel: null, position: null };
obj41.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj41.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][11];
obj29[fn(4950).GuildRoomSeats.SEAT_12] = obj41;
const obj42 = { name: "SIDE_GROUP_SEAT_2", getLabel: null, position: null };
obj42.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj42.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][12];
obj29[fn(4950).GuildRoomSeats.SEAT_13] = obj42;
const obj43 = { name: "SIDE_GROUP_SEAT_3", getLabel: null, position: null };
obj43.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj43.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][13];
obj29[fn(4950).GuildRoomSeats.SEAT_14] = obj43;
const obj44 = { name: "SIDE_GROUP_SEAT_STANDING_1", getLabel: null, position: null };
obj44.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, position: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  const intl3 = ytIYuY(1119).intl;
  obj.position = intl3.string(c1);
  return intl.formatToPlainString(number(2386).LFdLjz, obj);
};
obj44.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][14];
obj29[fn(4950).GuildRoomSeats.SEAT_15] = obj44;
const obj45 = { name: "BACKROOM_SEAT_1", getLabel: null, position: null };
obj45.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj45.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][15];
obj29[fn(4950).GuildRoomSeats.SEAT_16] = obj45;
const obj46 = { name: "BACKROOM_SEAT_2", getLabel: null, position: null, dim: true };
obj46.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj46.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][16];
obj29[fn(4950).GuildRoomSeats.SEAT_17] = obj46;
const obj47 = { name: "BACKROOM_SEAT_3", getLabel: null, position: null };
obj47.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj47.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][17];
obj29[fn(4950).GuildRoomSeats.SEAT_18] = obj47;
const obj48 = { name: "RAFTERS_SEAT_1", getLabel: null, position: null };
obj48.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj48.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][18];
obj29[fn(4950).GuildRoomSeats.SEAT_19] = obj48;
const obj49 = { name: "RAFTERS_SEAT_2", getLabel: null, position: null };
obj49.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj49.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][19];
obj29[fn(4950).GuildRoomSeats.SEAT_20] = obj49;
const obj50 = { name: "RAFTERS_SEAT_3", getLabel: null, position: null };
obj50.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj50.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][20];
obj29[fn(4950).GuildRoomSeats.SEAT_21] = obj50;
const obj51 = { name: "PC_SEAT_4", getLabel: null, position: null };
const ytIYuY = _modDef2386.ytIYuY;
const YpJ7QS = 4;
obj51.getLabel = () => {
  const intl = ytIYuY(1119).intl;
  const obj = { seatType: null, number: null };
  const intl2 = ytIYuY(1119).intl;
  obj.seatType = intl2.string(ytIYuY);
  obj.number = number;
  return intl.formatToPlainString(number(2386).crFI7e, obj);
};
obj51.position = fn(4956).GUILD_ROOM_BACKGROUND_POSITIONS[fn(undefined, 4953).GuildRoomBackgrounds.LIVING_ROOM_2][21];
obj29[fn(4950).GuildRoomSeats.SEAT_22] = obj51;
obj28.seats = obj29;
const point1 = { plantDeadAsset: _modDef4964, plantDyingAsset: _modDef4965, plantLiveAsset: _modDef4966, plantVaseAsset: _modDef4967, x: 41, y: 46 };
const items1 = [point1];
obj28.plants = items1;
const obj27 = { asset: _modDef4962, position: { x: 81.5, y: 84.5 }, width: 4 };
obj28.duck = { asset: _modDef4968, position: { x: 64.6, y: 58.5 }, width: 4.8 };
const obj52 = { asset: _modDef4968, position: { x: 64.6, y: 58.5 }, width: 4.8 };
obj28.notePad = { asset: _modDef4962, position: { x: 69, y: 78.5 }, width: 4 };
obj28.screen = { topLeft: { x: 51.85, y: 33.5 }, topRight: { x: 69.15, y: 40.5 }, bottomRight: { x: 69.3, y: 57.3 }, bottomLeft: { x: 51.95, y: 49.1 } };
obj[fn(4953).GuildRoomBackgrounds.LIVING_ROOM_2] = obj28;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomConstants.tsx");

export const GUILD_ROOM_SPATIAL_AUDIO_MODE = "guild-room";
export const DEFAULT_BACKGROUND_POSITION = { imageOffsetX: 0, imageOffsetY: 0, imageWidth: 0, imageHeight: 0 };
export const BACKGROUND_BLUR_WIDTH_FACTOR = 0.0228310502283105;
export const getBlurredBackgroundScale = function getBlurredBackgroundScale(arg0, arg1) {
  let num = 0.045662100456621;
  if (arg1) {
    num = 0.045662100456621 * arg0;
  }
  return 1 + num;
};
export const GUILD_ROOM_BACKGROUND_CONFIG = obj;
