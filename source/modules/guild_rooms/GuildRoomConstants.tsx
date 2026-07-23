// Module ID: 16054
// Function ID: 124411
// Name: items
// Dependencies: [16055, 16056, 16057, 2]
// Exports: getSeatName

// Module 16054 (items)
const require = arg1;
let obj = {};
obj = { background: require("metadata"), aspectRatio: 1.375514403292181 };
obj = { name: "PC_SEAT_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][0] };
const items = [obj, , , , , , , , , , , , , , , , , , , , ];
const obj1 = { name: "PC_SEAT_2", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][1] };
items[1] = obj1;
const obj2 = { name: "PC_SEAT_3", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][2] };
items[2] = obj2;
const obj3 = { name: "DUO_SEAT_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][3] };
items[3] = obj3;
const obj4 = { name: "DUO_SEAT_2", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][4] };
items[4] = obj4;
const obj5 = { name: "DUO_SEAT_STANDING_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][5] };
items[5] = obj5;
const obj6 = { name: "MAIN_COUCH_SEAT_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][6] };
items[6] = obj6;
const obj7 = { name: "MAIN_COUCH_SEAT_2", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][7] };
items[7] = obj7;
const obj8 = { name: "MAIN_COUCH_SEAT_3", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][8] };
items[8] = obj8;
const obj9 = { name: "MAIN_COUCH_SEAT_4", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][9] };
items[9] = obj9;
const obj10 = { name: "MAIN_COUCH_SEAT_5", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][10] };
items[10] = obj10;
const obj11 = { name: "SIDE_GROUP_SEAT_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][11] };
items[11] = obj11;
const obj12 = { name: "SIDE_GROUP_SEAT_2", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][12] };
items[12] = obj12;
const obj13 = { name: "SIDE_GROUP_SEAT_3", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][13] };
items[13] = obj13;
const obj14 = { name: "SIDE_GROUP_SEAT_STANDING_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][14] };
items[14] = obj14;
const obj15 = { name: "BACKROOM_SEAT_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][15], dim: true };
items[15] = obj15;
const obj16 = { name: "BACKROOM_SEAT_2", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][16], dim: true };
items[16] = obj16;
const obj17 = { name: "BACKROOM_SEAT_3", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][17], dim: true };
items[17] = obj17;
const obj18 = { name: "RAFTERS_SEAT_1", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][18] };
items[18] = obj18;
const obj19 = { name: "RAFTERS_SEAT_2", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][19] };
items[19] = obj19;
const obj20 = { name: "RAFTERS_SEAT_3", position: require("GUILD_ROOM_BACKGROUND_POSITIONS").GUILD_ROOM_BACKGROUND_POSITIONS[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT][20] };
items[20] = obj20;
obj.seats = items;
const items1 = [{ x: 45.57, y: 50.62 }];
obj.plants = items1;
obj[require("GuildRoomBackgrounds").GuildRoomBackgrounds.DEFAULT] = obj;
const result = require("GUILD_ROOM_BACKGROUND_POSITIONS").fileFinishedImporting("modules/guild_rooms/GuildRoomConstants.tsx");

export const GUILD_ROOM_SPATIAL_AUDIO_MODE = "guild-room";
export const DEFAULT_BACKGROUND_POSITION = { imageOffsetX: 0, imageOffsetY: 0, imageWidth: 0, imageHeight: 0 };
export const getSeatName = function getSeatName(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let name;
  const seats = obj[_require(undefined, 16055).GuildRoomBackgrounds.DEFAULT].seats;
  const found = seats.find((position) => {
    let tmp = position.position.x === closure_0;
    if (tmp) {
      tmp = position.position.y === closure_1;
    }
    return tmp;
  });
  if (null != found) {
    name = found.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  return str;
};
export const GUILD_ROOM_BACKGROUND_CONFIG = obj;
