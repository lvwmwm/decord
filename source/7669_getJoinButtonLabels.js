// Module ID: 7669
// Function ID: 61292
// Name: getJoinButtonLabels
// Dependencies: []
// Exports: getJoinButtonLabels, getRenewButtonLabels

// Module 7669 (getJoinButtonLabels)
let obj = { format_type: require(dependencyMap[1]).StickerFormat.APNG };
const items = [obj, , , , ];
obj = { format_type: require(dependencyMap[1]).StickerFormat.APNG };
items[1] = obj;
obj = { -9223372036854775808: null, -9223372036854775808: null, 0: null, -9223372036854775808: null, format_type: require(dependencyMap[1]).StickerFormat.APNG };
items[2] = obj;
const obj1 = { -9223372036854775808: null, -9223372036854775808: null, 0: null, -9223372036854775808: null, format_type: require(dependencyMap[1]).StickerFormat.APNG };
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
