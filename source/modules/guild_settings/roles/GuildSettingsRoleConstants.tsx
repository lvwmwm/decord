// Module ID: 16304
// Function ID: 127091
// Name: title
// Dependencies: [16305, 653, 16307, 483, 3763, 688, 1212, 2]

// Module 16304 (title)
import { RoleColorsStyle } from "_isNativeReflectConstruct";
import ME from "ME";
import HOLOGRAPHIC_ROLE_COLORS from "HOLOGRAPHIC_ROLE_COLORS";
import importAllResult from "fromHexReverseArray";
import importAllResult1 from "fromHexReverseArray";
import importAllResult2 from "fromHexReverseArray";
import importAllResult3 from "fromHexReverseArray";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";
import unsafe_getRawColor from "unsafe_getRawColor";

let DEFAULT_GRADIENT_ROLE_COLORS;
let HOLOGRAPHIC_ROLE_COLORS;
const Permissions = ME.Permissions;
let obj = { COSMETIC: 0, [0]: "COSMETIC", MEMBER: 1, [1]: "MEMBER", MODERATOR: 2, [2]: "MODERATOR", MANAGER: 3, [3]: "MANAGER" };
({ DEFAULT_GRADIENT_ROLE_COLORS, HOLOGRAPHIC_ROLE_COLORS } = HOLOGRAPHIC_ROLE_COLORS);
const removeResult = require("fromHexReverseArray").remove(require("calculateElevatedPermissions").DEFAULT, Permissions.MENTION_EVERYONE);
const combineResult = require("fromHexReverseArray").combine(require("calculateElevatedPermissions").DEFAULT, Permissions.VIEW_AUDIT_LOG, Permissions.MANAGE_NICKNAMES, Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.MANAGE_MESSAGES, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS, Permissions.MOVE_MEMBERS, Permissions.PRIORITY_SPEAKER, Permissions.MODERATE_MEMBERS);
const combineResult1 = require("fromHexReverseArray").combine(combineResult, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_THREADS, Permissions.MANAGE_ROLES, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MANAGE_GUILD, Permissions.MANAGE_WEBHOOKS, Permissions.SEND_TTS_MESSAGES);
obj = {};
obj = { key: "template_cosmetic" };
obj.color = unsafe_getRawColor.unsafe_getRawColor("BRAND_500");
obj.permissions = require("calculateElevatedPermissions").NONE;
obj.title = function title() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.M8jQyg);
};
obj.description = function description() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["7nF/S/"]);
};
obj.contents = function contents() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t.uwLDAb), ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t.gqngN7);
  return items;
};
obj.contentPreface = function contentPreface() {
  return "";
};
obj[obj.COSMETIC] = obj;
const obj1 = { key: "template_member" };
obj1.color = unsafe_getRawColor.unsafe_getRawColor("GREEN_360");
obj1.permissions = require("calculateElevatedPermissions").DEFAULT;
obj1.communityPermissions = removeResult;
obj1.title = function title() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["9BsHzh"]);
};
obj1.description = function description() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.ywKYtw);
};
obj1.contents = function contents() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t["9Vhbnl"]), , ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t["0xn+w1"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  items[2] = intl3.string(require(1212) /* getSystemLocale */.t.ieWVpB);
  return items;
};
obj1.contentPreface = function contentPreface() {
  return "";
};
obj[obj.MEMBER] = obj1;
const obj2 = { key: "template_moderator" };
obj2.color = unsafe_getRawColor.unsafe_getRawColor("YELLOW_300");
obj2.permissions = combineResult;
obj2.title = function title() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["m/GC8z"]);
};
obj2.description = function description() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.ERrMJZ);
};
obj2.contents = function contents() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t.YOSxcd), , , ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t.q9H4Fm);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  items[2] = intl3.string(require(1212) /* getSystemLocale */.t["9nHnCj"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  items[3] = intl4.string(require(1212) /* getSystemLocale */.t.iqwXvc);
  return items;
};
obj2.contentPreface = function contentPreface() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.amGM7K);
};
obj[obj.MODERATOR] = obj2;
const obj3 = { key: "template_manager" };
obj3.color = unsafe_getRawColor.unsafe_getRawColor("RED_400");
obj3.permissions = combineResult1;
obj3.communityPermissions = require("fromHexReverseArray").add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
obj3.title = function title() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.qKmu3w);
};
obj3.description = function description() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.WxWPYV);
};
obj3.contents = function contents() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t.Hx1Vox), , , ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t["aUZ/zD"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  items[2] = intl3.string(require(1212) /* getSystemLocale */.t["8lQujv"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  items[3] = intl4.string(require(1212) /* getSystemLocale */.t.cUP4pl);
  return items;
};
obj3.contentPreface = function contentPreface() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t["7Dkb62"]);
};
obj[obj.MANAGER] = obj3;
const addResult = require("fromHexReverseArray").add(combineResult1, Permissions.VIEW_GUILD_ANALYTICS);
const obj5 = { primary_color: ME.DEFAULT_ROLE_COLOR, secondary_color: null, tertiary_color: null };
let items = [{ id: RoleColorsStyle.SOLID, colors: obj5, labelString: require("getSystemLocale").t["8Qyahn"] }, , ];
const obj4 = { id: RoleColorsStyle.SOLID, colors: obj5, labelString: require("getSystemLocale").t["8Qyahn"] };
items[1] = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: require("getSystemLocale").t.XpWmJz };
const obj6 = { id: RoleColorsStyle.GRADIENT, colors: DEFAULT_GRADIENT_ROLE_COLORS, labelString: require("getSystemLocale").t.XpWmJz };
items[2] = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: require("getSystemLocale").t.QTKppe };
const obj7 = { id: RoleColorsStyle.HOLOGRAPHIC, colors: HOLOGRAPHIC_ROLE_COLORS, labelString: require("getSystemLocale").t.QTKppe };
const result = require("HOLOGRAPHIC_ROLE_COLORS").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRoleConstants.tsx");

export const CREATE_ROLE_DESKTOP_MODAL_WIDTH = 440;
export const DEFAULT_HEADER_HEIGHT_PX = 371;
export const MAX_BULK_ROLE_MEMBERS_ADD = 30;
export const PermissionTemplateTypes = obj;
export const DEFAULT_TEMPLATE_TYPE = obj.COSMETIC;
export const PermissionTemplates = obj;
export const STYLE_CONFIGS = items;
