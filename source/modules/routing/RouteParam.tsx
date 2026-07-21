// Module ID: 3964
// Function ID: 32821
// Name: paramPattern
// Dependencies: []

// Module 3964 (paramPattern)
function paramPattern(arg0, arg1, Button) {
  let obj = Button;
  if (Button === undefined) {
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
  const unescapedPathParam = new require(dependencyMap[2]).UnescapedPathParam(":" + importDefault(dependencyMap[3])(arg0) + "(" + arg1 + ")" + str);
  return unescapedPathParam;
}
const PSEUDO_GUILD_IDS = require(dependencyMap[0]).PSEUDO_GUILD_IDS;
const StaticChannelRoutes = require(dependencyMap[1]).StaticChannelRoutes;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/routing/RouteParam.tsx");

export const RouteParam = {
  guildId(guildId, items) {
    let obj = guildId;
    if (guildId === undefined) {
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
    const mapped = PSEUDO_GUILD_IDS.map(importDefault(dependencyMap[3]));
    obj = { optional: flag };
    return paramPattern(str, "" + mapped.join("|") + "|\\d+", obj);
  },
  channelId(Button, arg1) {
    let obj = Button;
    if (Button === undefined) {
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
    const items = [...closure_4];
    const mapped = items.map(importDefault(dependencyMap[3]));
    obj = { optional: flag };
    return paramPattern(str, "" + mapped.join("|") + "|\\d+", obj);
  }
};
