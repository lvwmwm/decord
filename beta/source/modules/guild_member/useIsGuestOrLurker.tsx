// Module ID: 9509
// Function ID: 9510
// Name: useIsGuestOrLurker
// Dependencies: [2108, 2067, 1074, 504, 2]
// Exports: default, isGuestOrLurkerInGuild

// Module 9509 (useIsGuestOrLurker)
import Constants from "Constants" /* 1074 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
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
};
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
