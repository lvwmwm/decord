// Module ID: 5054
// Function ID: 5055
// Name: RouteParam
// Dependencies: [1085, 4863, 1093, 5055, 2]

// Module 5054 (RouteParam)
import RouteConstants from "RouteConstants" /* 1085 */;
import utils_PathUtils from "utils/PathUtils" /* 1093 */;
import ChannelConstants from "ChannelConstants" /* 4863 */;
import escapeRegExpDefault from "escapeRegExp" /* 5055 */;
import size from "module_2" /* 2 */;

const PSEUDO_GUILD_IDS = RouteConstants.PSEUDO_GUILD_IDS;
const StaticChannelRoutes = ChannelConstants.StaticChannelRoutes;
let obj = {
  guildId() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let str = obj.name;
    if (str === undefined) {
      str = "guildId";
    }
    let flag = obj.optional;
    if (flag === undefined) {
      flag = false;
    }
    const mapped = PSEUDO_GUILD_IDS.map(escapeRegExpDefault);
    const combined = "" + mapped.join("|") + "|\\d+";
    let flag2 = { optional: flag }.optional;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const UnescapedPathParam = utils_PathUtils.UnescapedPathParam;
    let str2 = "";
    const tmp4 = escapeRegExpDefault(str);
    if (flag2) {
      str2 = "?";
    }
    const unescapedPathParam = new UnescapedPathParam(":" + tmp4 + "(" + combined + ")" + str2);
    return unescapedPathParam;
  },
  channelId() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let str = obj.name;
    if (str === undefined) {
      str = "channelId";
    }
    let flag = obj.optional;
    if (flag === undefined) {
      flag = false;
    }
    const items = [...StaticChannelRoutes];
    const mapped = items.map(escapeRegExpDefault);
    const combined = "" + mapped.join("|") + "|\\d+";
    let flag2 = { optional: flag }.optional;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const UnescapedPathParam = utils_PathUtils.UnescapedPathParam;
    let str2 = "";
    const tmp4 = escapeRegExpDefault(str);
    if (flag2) {
      str2 = "?";
    }
    const unescapedPathParam = new UnescapedPathParam(":" + tmp4 + "(" + combined + ")" + str2);
    return unescapedPathParam;
  }
};
const result = size.fileFinishedImporting("modules/routing/RouteParam.tsx");

export const RouteParam = obj;
