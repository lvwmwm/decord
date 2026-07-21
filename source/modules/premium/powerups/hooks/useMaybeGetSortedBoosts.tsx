// Module ID: 11602
// Function ID: 90150
// Name: useMaybeGetSortedBoosts
// Dependencies: []
// Exports: default, useGetBoostUserConfig

// Module 11602 (useMaybeGetSortedBoosts)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default function useMaybeGetSortedBoosts(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const expiringBoostsEnabled = arg1(dependencyMap[6]).useExpiringBoostsEnabled("GuildPowerupsRecentActivity");
  const dependencyMap = expiringBoostsEnabled;
  const obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const items1 = [arg0];
  const stateFromStoresArray = arg1(dependencyMap[7]).useStateFromStoresArray(items, () => {
    let appliedGuildBoostsForGuild = memo.getAppliedGuildBoostsForGuild(arg0);
    if (null == appliedGuildBoostsForGuild) {
      appliedGuildBoostsForGuild = [];
    }
    return appliedGuildBoostsForGuild;
  }, items1);
  const callback = stateFromStoresArray;
  const first = callback(React.useState(() => Date.now()), 1)[0];
  const React = first;
  const items2 = [stateFromStoresArray, arg1, first, expiringBoostsEnabled];
  const memo = React.useMemo(() => {
    const mapped = stateFromStoresArray.map((boost) => {
      if (closure_2) {
        let boostLifecycleInfo = callback(closure_2[8]).getBoostLifecycleInfo(boost, closure_4);
        const obj2 = callback(closure_2[8]);
      } else {
        boostLifecycleInfo = { phase: "gave" };
      }
      const boostLifecycleTimestamp = callback(closure_2[8]).getBoostLifecycleTimestamp(boost, boostLifecycleInfo);
      if ("expiring" === boostLifecycleInfo.phase) {
        let obj = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
      } else {
        obj = { boost, phase: boostLifecycleInfo.phase, sortKey: boostLifecycleTimestamp };
      }
      return obj;
    });
    const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
    return sorted.slice(0, arg1);
  }, items2);
  closure_5 = memo;
  const obj2 = arg1(dependencyMap[7]);
  const items3 = [closure_7];
  const items4 = [arg0, memo];
  const stateFromStoresArray1 = arg1(dependencyMap[7]).useStateFromStoresArray(items3, () => {
    const set = new Set();
    const arg0 = set;
    const item = memo.forEach((boost) => {
      boost = boost.boost;
      if (null == member.getMember(set, boost.userId)) {
        set.add(boost.userId);
      }
    });
    return Array.from(set);
  }, items4);
  let closure_6 = stateFromStoresArray1;
  const items5 = [arg0, stateFromStoresArray1];
  const effect = React.useEffect(() => {
    if (stateFromStoresArray1.length > 0) {
      const item = stateFromStoresArray1.forEach((id) => closure_6.requestMember(closure_0, id));
    }
  }, items5);
  const obj3 = arg1(dependencyMap[7]);
  const items6 = [closure_8];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items6, () => {
    const guild = memo1.getGuild(arg0);
    let prop;
    if (null != guild) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  closure_7 = stateFromStores;
  const items7 = [stateFromStoresArray];
  const memo1 = React.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  closure_8 = memo1;
  const obj4 = arg1(dependencyMap[7]);
  const items8 = [closure_5];
  const items9 = [arg0];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items8, () => null != memo.getLastFetchedAtForGuild(arg0), items9);
  const items10 = [arg0, stateFromStores, memo1, expiringBoostsEnabled, stateFromStores1];
  const effect1 = React.useEffect(() => {
    let tmp = stateFromStores !== memo1;
    if (!tmp) {
      let tmp2 = expiringBoostsEnabled;
      if (expiringBoostsEnabled) {
        tmp2 = !stateFromStores1;
      }
      tmp = tmp2;
    }
    if (tmp) {
      let obj = arg0(expiringBoostsEnabled[9]);
      obj = { includeEnded: expiringBoostsEnabled };
      const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(arg0, obj);
    }
  }, items10);
  return memo;
};
export const useGetBoostUserConfig = function useGetBoostUserConfig(boost) {
  const arg1 = boost;
  let obj = importDefault(dependencyMap[10]);
  const date = new Date(obj.extractTimestamp(boost.id));
  const items = [closure_7];
  const items1 = [boost];
  const stateFromStoresObject = arg1(dependencyMap[7]).useStateFromStoresObject(items, (self) => {
    const member = store.getMember(self.guildId, self.userId);
    const obj = {};
    let nick = store.getNick(self.guildId, self.userId);
    if (null == nick) {
      const user = self.user;
      let username;
      if (null != user) {
        username = user.username;
      }
      nick = username;
    }
    if (null == nick) {
      const intl = self(closure_2[11]).intl;
      nick = intl.string(self(closure_2[11]).t.30mdIx);
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
