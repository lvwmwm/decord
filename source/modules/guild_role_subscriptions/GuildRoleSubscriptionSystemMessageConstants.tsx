// Module ID: 7769
// Function ID: 61649
// Name: getJoinButtonLabels
// Dependencies: [1212, 4799, 2]
// Exports: getJoinButtonLabels, getRenewButtonLabels

// Module 7769 (getJoinButtonLabels)
let obj = { id: "781323471249604648", format_type: require("StickerFormat").StickerFormat.APNG, description: "Cheerful Choco jumps out of gift box", name: "Surprise" };
let items = [obj, , , , ];
obj = { id: "781324642736144424", format_type: require("StickerFormat").StickerFormat.APNG, description: "Cheerful Choco preens against window", name: "Affection" };
items[1] = obj;
obj = { id: "781323769960202280", format_type: require("StickerFormat").StickerFormat.APNG, description: "Cheerful Choco sparkles", name: "OMG" };
items[2] = obj;
const obj1 = { id: "781324722394103808", format_type: require("StickerFormat").StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" };
items[3] = obj1;
const obj2 = { id: "813951723822645278", format_type: require("StickerFormat").StickerFormat.APNG, description: "Cheerful Choco gives thumbs up", name: "Nice" };
items[4] = obj2;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageConstants.tsx");

export const getJoinButtonLabels = function getJoinButtonLabels() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t.b6wEe6), ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t.i8o9hX);
  return items;
};
export const getRenewButtonLabels = function getRenewButtonLabels() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t.vqnToc), ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t["9yh+dM"]);
  return items;
};
export const STICKERS = items;
