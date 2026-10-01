// Module ID: 12076
// Function ID: 12077
// Name: useMaybeGetSortedBoosts
// Dependencies: [32, 19, 12058, 5738, 2108, 2067, 504, 12077, 4732, 11, 1115, 2]
// Exports: default, useGetBoostUserConfig

// Module 12076 (useMaybeGetSortedBoosts)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl2 from "intl" /* 1115 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4732 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12058 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5738 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default function useMaybeGetSortedBoosts(arg0, arg1) {
  let closure_0;
  let first;
  let memo;
  let memo1;
  let stateFromStores1;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [stateFromStoresArray1];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
    if (appliedGuildBoostsForGuild == null) {
      appliedGuildBoostsForGuild = [];
    }
    return appliedGuildBoostsForGuild;
  }, items1);
  first = first(memo.useState(() => Date.now()), 1)[0];
  const items2 = [stateFromStoresArray, arg1, first];
  memo = memo.useMemo(() => {
    const mapped = stateFromStoresArray.map((boost) => {
      let obj4;
      const obj = closure_0(stateFromStoresArray[7]);
      const boostLifecycleInfo = obj.getBoostLifecycleInfo(boost, first);
      const obj2 = closure_0(stateFromStoresArray[7]);
      const boostLifecycleTimestamp = obj2.getBoostLifecycleTimestamp(boost, boostLifecycleInfo);
      if ("expiring" === boostLifecycleInfo.phase) {
        obj4 = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
        const obj3 = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
      } else {
        obj4 = { boost, phase: boostLifecycleInfo.phase, sortKey: boostLifecycleTimestamp };
      }
      return obj4;
    });
    const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
    return sorted.slice(0, closure_1);
  }, items2);
  let obj2 = require("get initialized");
  const items3 = [memo1];
  const items4 = [arg0, memo];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items3, () => {
    set = new Set();
    const item = memo.forEach((boost) => {
      boost = boost.boost;
      if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
        set.add(boost.userId);
      }
    });
    return Array.from(set);
  }, items4);
  const items5 = [arg0, stateFromStoresArray1];
  const effect = memo.useEffect(() => {
    const arr = stateFromStoresArray1;
    if (stateFromStoresArray1.length > 0) {
      const item = arr.forEach((item) => stateFromStores.requestMember(closure_1_0, item));
    }
  }, items5);
  let obj3 = require("get initialized");
  const items6 = [stateFromStores1];
  const stateFromStores = obj3.useStateFromStores(items6, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  const items7 = [stateFromStoresArray];
  memo1 = memo.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  let obj4 = require("get initialized");
  const items8 = [stateFromStoresArray1];
  const items9 = [arg0];
  stateFromStores1 = obj4.useStateFromStores(items8, () => null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0), items9);
  const items10 = [arg0, stateFromStores, memo1, stateFromStores1];
  const effect1 = memo.useEffect(() => {
    const tmp = stateFromStores === memo1 && stateFromStores1;
    if (!tmp) {
      const obj = BoostingActionCreators;
      const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_0, { includeEnded: true });
    }
  }, items10);
  return memo;
};
export const useGetBoostUserConfig = function useGetBoostUserConfig(boost) {
  _require = boost;
  let obj = SnowflakeUtilsDefault;
  const items = [GuildMemberStore];
  const items1 = [boost];
  const date = new Date(obj.extractTimestamp(boost.id));
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let colorString;
    let colorStrings;
    const member = GuildMemberStore.getMember(boost.guildId, boost.userId);
    let nick = GuildMemberStore.getNick(boost.guildId, boost.userId);
    const tmp = boost;
    if (nick == null) {
      const user = tmp.user;
      let username;
      if (user != null) {
        username = user.username;
      }
      nick = username;
    }
    if (nick == null) {
      const intl = intl2.intl;
      nick = intl.string(intl2.t["30mdIx"]);
    }
    const obj = { username: nick, roleColor: colorString, roleColorStrings: colorStrings };
    colorString = undefined;
    if (member != null) {
      colorString = member.colorString;
    }
    if (colorString == null) {
      colorString = null;
    }
    colorStrings = undefined;
    if (member != null) {
      colorStrings = member.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    return obj;
  }, items1);
  return { timestamp: date, username: stateFromStoresObject.username, roleColor: stateFromStoresObject.roleColor, roleColorStrings: stateFromStoresObject.roleColorStrings };
};
