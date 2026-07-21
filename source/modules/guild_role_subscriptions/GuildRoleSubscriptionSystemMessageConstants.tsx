// Module ID: 7674
// Function ID: 61316
// Name: getJoinButtonLabels
// Dependencies: []
// Exports: getJoinButtonLabels, getRenewButtonLabels

// Module 7674 (getJoinButtonLabels)
let obj = { format_type: require(dependencyMap[1]).StickerFormat.APNG };
const items = [obj, , , , ];
obj = { format_type: require(dependencyMap[1]).StickerFormat.APNG };
items[1] = obj;
obj = { 0: null, 9223372036854775807: null, 0: null, 9223372036854775807: null, format_type: require(dependencyMap[1]).StickerFormat.APNG };
items[2] = obj;
const obj1 = { 0: null, 9223372036854775807: null, 0: null, 9223372036854775807: null, format_type: require(dependencyMap[1]).StickerFormat.APNG };
items[3] = obj1;
items[4] = { format_type: require(dependencyMap[1]).StickerFormat.APNG };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageConstants.tsx");

export const getJoinButtonLabels = function getJoinButtonLabels() {
  const intl = require(dependencyMap[0]).intl;
  const items = [intl.string(require(dependencyMap[0]).t.b6wEe6), ];
  const intl2 = require(dependencyMap[0]).intl;
  items[1] = intl2.string(require(dependencyMap[0]).t.i8o9hX);
  return items;
};
export const getRenewButtonLabels = function getRenewButtonLabels() {
  const intl = require(dependencyMap[0]).intl;
  const items = [intl.string(require(dependencyMap[0]).t.vqnToc), ];
  const intl2 = require(dependencyMap[0]).intl;
  items[1] = intl2.string(require(dependencyMap[0]).t.9yh+dM);
  return items;
};
export const STICKERS = items;
