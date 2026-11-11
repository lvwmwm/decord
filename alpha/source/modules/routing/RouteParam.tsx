// Module ID: 5305
// Function ID: 5306
// Name: RouteParam
// Dependencies: [1073, 5099, 1081, 5306, 2]

// Module 5305 (RouteParam)
import RouteConstants from "RouteConstants" /* 1073 */;
import utils_PathUtils from "utils/PathUtils" /* 1081 */;
import ChannelConstants from "ChannelConstants" /* 5099 */;
import escapeRegExpDefault from "escapeRegExp" /* 5306 */;
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
