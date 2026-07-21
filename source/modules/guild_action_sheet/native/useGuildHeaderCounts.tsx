// Module ID: 12856
// Function ID: 98258
// Name: useThrottledDispatch
// Dependencies: []
// Exports: useGuildHeaderCounts

// Module 12856 (useThrottledDispatch)
function useThrottledDispatch(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [arg0, arg1];
  const memo = React.useMemo(() => arg0(arg2[3]).throttle((count) => {
    let obj = callback(closure_2[4]);
    obj = { type: closure_0, count, guildId: callback };
    obj.dispatch(obj);
  }, 3000), items);
  const React = memo;
  const items1 = [memo];
  const effect = React.useEffect(() => () => closure_3.cancel(), items1);
  const items2 = [memo, arg2];
  const effect1 = React.useEffect(() => {
    if (arg2 > 0) {
      memo(arg2);
    }
  }, items2);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = function useGuildHeaderCounts(id) {
  const arg1 = id;
  const obj = {
    memberCount: function useMemberCount(id) {
      const items = [closure_4];
      callback("GUILD_HEADER_MEMBER_COUNT", id, id(closure_2[5]).useStateFromStores(items, () => {
        const memberCount = memberCount.getMemberCount(arg0);
        let num = 0;
        if (null != memberCount) {
          num = memberCount;
        }
        return num;
      }));
      const obj = id(closure_2[5]);
      const items1 = [closure_5];
      return id(closure_2[5]).useStateFromStores(items1, () => memberCount2.getMemberCount(arg0));
    }(id),
    onlineCount: function useOnlineCount(id) {
      const items = [closure_4];
      callback("GUILD_HEADER_ONLINE_COUNT", id, id(closure_2[5]).useStateFromStores(items, () => {
        const onlineCount = onlineCount.getOnlineCount(arg0);
        let num = 0;
        if (null != onlineCount) {
          num = onlineCount;
        }
        return num;
      }));
      const obj = id(closure_2[5]);
      const items1 = [closure_5];
      return id(closure_2[5]).useStateFromStores(items1, () => onlineCount2.getOnlineCount(arg0));
    }(id)
  };
  const tmp = function useMemberCount(id) {
    const items = [closure_4];
    callback("GUILD_HEADER_MEMBER_COUNT", id, id(closure_2[5]).useStateFromStores(items, () => {
      const memberCount = memberCount.getMemberCount(arg0);
      let num = 0;
      if (null != memberCount) {
        num = memberCount;
      }
      return num;
    }));
    const obj = id(closure_2[5]);
    const items1 = [closure_5];
    return id(closure_2[5]).useStateFromStores(items1, () => memberCount2.getMemberCount(arg0));
  }(id);
  const items = [closure_5];
  obj.activeChannelsCount = arg1(dependencyMap[5]).useStateFromStores(items, () => activeChannelsCount.getActiveChannelsCount(arg0));
  return obj;
};
