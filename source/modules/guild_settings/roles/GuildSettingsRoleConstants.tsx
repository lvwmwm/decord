// Module ID: 16179
// Function ID: 124876
// Name: title
// Dependencies: []

// Module 16179 (title)
let DEFAULT_GRADIENT_ROLE_COLORS;
let HOLOGRAPHIC_ROLE_COLORS;
const RoleColorsStyle = require(dependencyMap[0]).RoleColorsStyle;
const _module = require(dependencyMap[1]);
const Permissions = _module.Permissions;
const _module1 = require(dependencyMap[2]);
let obj = { COSMETIC: 0, [0]: "COSMETIC", MEMBER: 1, [1]: "MEMBER", MODERATOR: 2, [2]: "MODERATOR", MANAGER: 3, [3]: "MANAGER" };
({ DEFAULT_GRADIENT_ROLE_COLORS, HOLOGRAPHIC_ROLE_COLORS } = _module1);
const importAllResult = importAll(dependencyMap[3]);
const removeResult = importAll(dependencyMap[3]).remove(importAll(dependencyMap[4]).DEFAULT, Permissions.MENTION_EVERYONE);
const combineResult = importAll(dependencyMap[3]).combine(importAll(dependencyMap[4]).DEFAULT, Permissions.VIEW_AUDIT_LOG, Permissions.MANAGE_NICKNAMES, Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.MANAGE_MESSAGES, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.PRIORITY_SPEAKER, Permissions.MODERATE_MEMBERS);
const importAllResult1 = importAll(dependencyMap[3]);
const combineResult1 = importAll(dependencyMap[3]).combine(combineResult, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_THREADS, Permissions.MANAGE_ROLES, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD, Permissions.MANAGE_WEBHOOKS, Permissions.SEND_TTS_MESSAGES);
const importAllResult2 = importAll(dependencyMap[3]);
obj = {};
obj = { key: "template_cosmetic" };
const importAllResult3 = importAll(dependencyMap[3]);
const _module2 = require(dependencyMap[5]);
obj.color = _module2.unsafe_getRawColor("BRAND_500");
obj.permissions = importAll(dependencyMap[4]).NONE;
obj.title = function title() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.M8jQyg);
};
obj.description = function description() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.7nF/S/);
};
obj.contents = function contents() {
  const intl = require(dependencyMap[6]).intl;
  const items = [intl.string(require(dependencyMap[6]).t.uwLDAb), ];
  const intl2 = require(dependencyMap[6]).intl;
  items[1] = intl2.string(require(dependencyMap[6]).t.gqngN7);
  return items;
};
obj.contentPreface = function contentPreface() {
  return "";
};
obj[obj.COSMETIC] = obj;
const obj1 = { key: "template_member" };
const _module3 = require(dependencyMap[5]);
obj1.color = _module3.unsafe_getRawColor("GREEN_360");
obj1.permissions = importAll(dependencyMap[4]).DEFAULT;
obj1.communityPermissions = removeResult;
obj1.title = function title() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.9BsHzh);
};
obj1.description = function description() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.ywKYtw);
};
obj1.contents = function contents() {
  const intl = require(dependencyMap[6]).intl;
  const items = [intl.string(require(dependencyMap[6]).t.9Vhbnl), , ];
  const intl2 = require(dependencyMap[6]).intl;
  items[1] = intl2.string(require(dependencyMap[6]).t.0xn+w1);
  const intl3 = require(dependencyMap[6]).intl;
  items[2] = intl3.string(require(dependencyMap[6]).t.ieWVpB);
  return items;
};
obj1.contentPreface = function contentPreface() {
  return "";
};
obj[obj.MEMBER] = obj1;
const obj2 = { key: "template_moderator" };
const _module4 = require(dependencyMap[5]);
obj2.color = _module4.unsafe_getRawColor("YELLOW_300");
obj2.permissions = combineResult;
obj2.title = function title() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.m/GC8z);
};
obj2.description = function description() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.ERrMJZ);
};
obj2.contents = function contents() {
  const intl = require(dependencyMap[6]).intl;
  const items = [intl.string(require(dependencyMap[6]).t.YOSxcd), , , ];
  const intl2 = require(dependencyMap[6]).intl;
  items[1] = intl2.string(require(dependencyMap[6]).t.q9H4Fm);
  const intl3 = require(dependencyMap[6]).intl;
  items[2] = intl3.string(require(dependencyMap[6]).t.9nHnCj);
  const intl4 = require(dependencyMap[6]).intl;
  items[3] = intl4.string(require(dependencyMap[6]).t.iqwXvc);
  return items;
};
obj2.contentPreface = function contentPreface() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.amGM7K);
};
obj[obj.MODERATOR] = obj2;
const obj3 = { key: "template_manager" };
const _module5 = require(dependencyMap[5]);
obj3.color = _module5.unsafe_getRawColor("RED_400");
obj3.permissions = combineResult1;
obj3.communityPermissions = importAll(dependencyMap[3]).add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
obj3.title = function title() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.qKmu3w);
};
obj3.description = function description() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.WxWPYV);
};
obj3.contents = function contents() {
  const intl = require(dependencyMap[6]).intl;
  const items = [intl.string(require(dependencyMap[6]).t.Hx1Vox), , , ];
  const intl2 = require(dependencyMap[6]).intl;
  items[1] = intl2.string(require(dependencyMap[6]).t.aUZ/zD);
  const intl3 = require(dependencyMap[6]).intl;
  items[2] = intl3.string(require(dependencyMap[6]).t.8lQujv);
  const intl4 = require(dependencyMap[6]).intl;
  items[3] = intl4.string(require(dependencyMap[6]).t.cUP4pl);
  return items;
};
obj3.contentPreface = function contentPreface() {
  const intl = require(dependencyMap[6]).intl;
  return intl.string(require(dependencyMap[6]).t.7Dkb62);
};
obj[obj.MANAGER] = obj3;
const addResult = importAll(dependencyMap[3]).add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
const obj5 = { <string:996344831>: false, <string:4132547158>: false, <string:1375429038>: null, primary_color: _module.DEFAULT_ROLE_COLOR };
const items = [{ id: RoleColorsStyle.SOLID, colors: obj5, labelString: require(dependencyMap[6]).t.8Qyahn }, , ];
const obj4 = { id: RoleColorsStyle.SOLID, colors: obj5, labelString: require(dependencyMap[6]).t.8Qyahn };
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: require(dependencyMap[6]).t.XpWmJz };
const obj6 = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: require(dependencyMap[6]).t.XpWmJz };
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: require(dependencyMap[6]).t.QTKppe };
const _module6 = require(dependencyMap[7]);
const result = _module6.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = obj.COSMETIC;
export const PermissionTemplates = obj;
export const STYLE_CONFIGS = items;
