// Module ID: 3826
// Function ID: 31798
// Name: LINKING_WHITELIST
// Dependencies: []

// Module 3826 (LINKING_WHITELIST)
let obj = { discordConnect: obj, facebook: obj, instagram: obj1, snapchat: obj2, spotify: obj3, tiktok: obj4, twitch: obj5, telegram: obj6, twitter: obj7, whatsapp: obj8, youtube: obj9, zoom: obj10 };
obj = { regex: /(?:^discordconnect:\/\/)/i, protocol: "discordconnect://" };
obj = { regex: /(?:^https?:\/\/)(?:www\.)?(facebook\.com)(?:$|\/)/i, protocol: "fb://" };
const values = Object.values(obj);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/links/native/LinkingWhitelist.tsx");

export const LINKING_WHITELIST = obj;
export const LINKING_WHITELIST_VALUES = values;
