// Module ID: 11613
// Function ID: 90212
// Name: useMaybeGetSortedBoosts
// Dependencies: [57, 31, 11595, 4958, 1917, 1838, 11614, 566, 11615, 4026, 21, 1212, 2]
// Exports: default, useGetBoostUserConfig

// Module 11613 (useMaybeGetSortedBoosts)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default function useMaybeGetSortedBoosts(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  expiringBoostsEnabled = _require(expiringBoostsEnabled[6]).useExpiringBoostsEnabled("GuildPowerupsRecentActivity");
  let obj = _require(expiringBoostsEnabled[6]);
  const items = [memo];
  const items1 = [arg0];
  const stateFromStoresArray = _require(expiringBoostsEnabled[7]).useStateFromStoresArray(items, () => {
    let appliedGuildBoostsForGuild = memo.getAppliedGuildBoostsForGuild(closure_0);
    if (null == appliedGuildBoostsForGuild) {
      appliedGuildBoostsForGuild = [];
    }
    return appliedGuildBoostsForGuild;
  }, items1);
  first = stateFromStoresArray(first.useState(() => Date.now()), 1)[0];
  const items2 = [stateFromStoresArray, arg1, first, expiringBoostsEnabled];
  memo = first.useMemo(() => {
    const mapped = stateFromStoresArray.map((boost) => {
      if (outer1_2) {
        let boostLifecycleInfo = callback(expiringBoostsEnabled[8]).getBoostLifecycleInfo(boost, outer1_4);
        const obj2 = callback(expiringBoostsEnabled[8]);
      } else {
        boostLifecycleInfo = { phase: "gave" };
      }
      const boostLifecycleTimestamp = callback(expiringBoostsEnabled[8]).getBoostLifecycleTimestamp(boost, boostLifecycleInfo);
      if ("expiring" === boostLifecycleInfo.phase) {
        let obj = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
      } else {
        obj = { boost, phase: boostLifecycleInfo.phase, sortKey: boostLifecycleTimestamp };
      }
      return obj;
    });
    const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
    return sorted.slice(0, closure_1);
  }, items2);
  let obj2 = _require(expiringBoostsEnabled[7]);
  const items3 = [stateFromStores];
  const items4 = [arg0, memo];
  const stateFromStoresArray1 = _require(expiringBoostsEnabled[7]).useStateFromStoresArray(items3, () => {
    const set = new Set();
    const item = memo.forEach((boost) => {
      boost = boost.boost;
      if (null == stateFromStores.getMember(set, boost.userId)) {
        set.add(boost.userId);
      }
    });
    return Array.from(set);
  }, items4);
  const items5 = [arg0, stateFromStoresArray1];
  const effect = first.useEffect(() => {
    if (stateFromStoresArray1.length > 0) {
      const item = stateFromStoresArray1.forEach((id) => stateFromStoresArray1.requestMember(outer1_0, id));
    }
  }, items5);
  const obj3 = _require(expiringBoostsEnabled[7]);
  const items6 = [memo1];
  stateFromStores = _require(expiringBoostsEnabled[7]).useStateFromStores(items6, () => {
    const guild = memo1.getGuild(closure_0);
    let prop;
    if (null != guild) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  const items7 = [stateFromStoresArray];
  memo1 = first.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  const obj4 = _require(expiringBoostsEnabled[7]);
  const items8 = [memo];
  const items9 = [arg0];
  const stateFromStores1 = _require(expiringBoostsEnabled[7]).useStateFromStores(items8, () => null != memo.getLastFetchedAtForGuild(closure_0), items9);
  const items10 = [arg0, stateFromStores, memo1, expiringBoostsEnabled, stateFromStores1];
  const effect1 = first.useEffect(() => {
    let tmp = stateFromStores !== memo1;
    if (!tmp) {
      let tmp2 = expiringBoostsEnabled;
      if (expiringBoostsEnabled) {
        tmp2 = !stateFromStores1;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let obj = callback(expiringBoostsEnabled[9]);
      obj = { includeEnded: expiringBoostsEnabled };
      const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(callback, obj);
    }
  }, items10);
  return memo;
};
export const useGetBoostUserConfig = function useGetBoostUserConfig(boost) {
  const _require = boost;
  let obj = importDefault(21);
  const date = new Date(obj.extractTimestamp(boost.id));
  const items = [closure_7];
  const items1 = [boost];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items, () => {
    const member = outer1_7.getMember(boost.guildId, boost.userId);
    const obj = {};
    let nick = outer1_7.getNick(boost.guildId, boost.userId);
    if (null == nick) {
      const user = boost.user;
      let username;
      if (null != user) {
        username = user.username;
      }
      nick = username;
    }
    if (null == nick) {
      const intl = boost(outer1_2[11]).intl;
      nick = intl.string(boost(outer1_2[11]).t["30mdIx"]);
    }
    obj.username = nick;
    let colorString;
    if (null != member) {
      colorString = member.colorString;
    }
    let tmp8 = null;
    if (null != colorString) {
      tmp8 = colorString;
    }
    obj.roleColor = tmp8;
    let colorStrings;
    if (null != member) {
      colorStrings = member.colorStrings;
    }
    let tmp10 = null;
    if (null != colorStrings) {
      tmp10 = colorStrings;
    }
    obj.roleColorStrings = tmp10;
    return obj;
  }, items1);
  obj = { timestamp: date, username: stateFromStoresObject.username, roleColor: stateFromStoresObject.roleColor, roleColorStrings: stateFromStoresObject.roleColorStrings };
  return obj;
};
