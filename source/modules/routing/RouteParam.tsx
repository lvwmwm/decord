// Module ID: 3966
// Function ID: 32829
// Name: paramPattern
// Dependencies: [654, 1355, 484, 3967, 2]

// Module 3966 (paramPattern)
import { PSEUDO_GUILD_IDS } from "APP_WITH_INVITE_AND_GUILD_ONBOARDING";
import { StaticChannelRoutes } from "set";

function paramPattern(arg0, arg1, controlsSpecs) {
  let obj = controlsSpecs;
  if (controlsSpecs === undefined) {
    obj = {};
  }
  let flag = obj.optional;
  if (flag === undefined) {
    flag = false;
  }
  let str = "";
  if (flag) {
    str = "?";
  }
  const unescapedPathParam = new require(484) /* getAuthenticationPath */.UnescapedPathParam(":" + importDefault(3967)(arg0) + "(" + arg1 + ")" + str);
  return unescapedPathParam;
}
const result = require("getAuthenticationPath").fileFinishedImporting("modules/routing/RouteParam.tsx");

export const RouteParam = {
  guildId(onChannelCreated, items) {
    let obj = onChannelCreated;
    if (onChannelCreated === undefined) {
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
    const mapped = PSEUDO_GUILD_IDS.map(importDefault(3967));
    obj = { optional: flag };
    return paramPattern(str, "" + mapped.join("|") + "|\\d+", obj);
  },
  channelId(controlsSpecs, arg1) {
    let obj = controlsSpecs;
    if (controlsSpecs === undefined) {
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
    const mapped = items.map(importDefault(3967));
    obj = { optional: flag };
    return paramPattern(str, "" + mapped.join("|") + "|\\d+", obj);
  }
};
