// Module ID: 5095
// Function ID: 5096
// Name: RouteParam
// Dependencies: [1072, 4899, 1080, 5096, 2]

// Module 5095 (RouteParam)
import RouteConstants from "RouteConstants" /* 1072 */;
import utils_PathUtils from "utils/PathUtils" /* 1080 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import escapeRegExpDefault from "escapeRegExp" /* 5096 */;
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
