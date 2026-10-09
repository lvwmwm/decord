// Module ID: 11122
// Function ID: 11123
// Name: useIsGuestOrLurker
// Dependencies: [2124, 2086, 1085, 558, 576, 504, 2]
// Exports: isGuestOrLurkerInGuild

// Module 11122 (useIsGuestOrLurker)
import Constants from "Constants" /* 1085 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp5;

const GuildFeatures = Constants.GuildFeatures;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsGuestOrLurker(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, ];
    let tmp6 = GuildMemberStore;
    items[1] = GuildMemberStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7, tmp8);
  }
  class G {
    constructor() {
      obj = closure_2;
      tmp = closure_0;
      tmp2 = closure_1;
      guild = closure_3.getGuild(closure_0);
      hasItem = undefined;
      if (guild != null) {
        features = guild.features;
        tmp5 = GuildFeatures;
        hasItem = features.has(GuildFeatures.CONFERENCE);
      }
      tmp6 = true !== hasItem && obj.isGuestOrLurker(tmp, tmp2);
      return tmp6;
    }
  }
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = G;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = G;
}) : (function useIsGuestOrLurker(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [GuildStore, GuildMemberStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    const obj = GuildMemberStore;
    const tmp = closure_0;
    const tmp2 = closure_1;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.CONFERENCE);
    }
    const tmp6 = true !== hasItem && obj.isGuestOrLurker(tmp, tmp2);
    return tmp6;
  }, items1);
});
const result = size.fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default tmp2;
export const isGuestOrLurkerInGuild = function isGuestOrLurkerInGuild(guild_id, id) {
  const guild = GuildStore.getGuild(guild_id);
  let hasItem;
  const obj = GuildMemberStore;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.CONFERENCE);
  }
  const isGuestOrLurkerResult = true !== hasItem && obj.isGuestOrLurker(guild_id, id);
  return isGuestOrLurkerResult;
};
