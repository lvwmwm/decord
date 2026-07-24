// Module ID: 13029
// Function ID: 100770
// Name: useThrottledDispatch
// Dependencies: [31, 4051, 13030, 22, 686, 566, 2]
// Exports: useGuildHeaderCounts

// Module 13029 (useThrottledDispatch)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function useThrottledDispatch(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const items = [arg0, arg1];
  memo = memo.useMemo(() => callback(table[3]).throttle((count) => {
    let obj = callback(table[4]);
    obj = { type: outer1_0, count, guildId: outer1_1 };
    obj.dispatch(obj);
  }, 3000), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => () => outer1_3.cancel(), items1);
  const items2 = [memo, arg2];
  const effect1 = memo.useEffect(() => {
    if (closure_2 > 0) {
      memo(closure_2);
    }
  }, items2);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = function useGuildHeaderCounts(id) {
  const _require = id;
  let obj = {
    memberCount: (function useMemberCount(id) {
      const items = [outer1_4];
      outer1_6("GUILD_HEADER_MEMBER_COUNT", id, id(outer1_2[5]).useStateFromStores(items, () => {
        const memberCount = outer2_4.getMemberCount(closure_0);
        let num = 0;
        if (null != memberCount) {
          num = memberCount;
        }
        return num;
      }));
      const obj = id(outer1_2[5]);
      const items1 = [outer1_5];
      return id(outer1_2[5]).useStateFromStores(items1, () => outer2_5.getMemberCount(closure_0));
    })(id),
    onlineCount: (function useOnlineCount(id) {
      const items = [outer1_4];
      outer1_6("GUILD_HEADER_ONLINE_COUNT", id, id(outer1_2[5]).useStateFromStores(items, () => {
        const onlineCount = outer2_4.getOnlineCount(closure_0);
        let num = 0;
        if (null != onlineCount) {
          num = onlineCount;
        }
        return num;
      }));
      const obj = id(outer1_2[5]);
      const items1 = [outer1_5];
      return id(outer1_2[5]).useStateFromStores(items1, () => outer2_5.getOnlineCount(closure_0));
    })(id)
  };
  const tmp = (function useMemberCount(id) {
    const items = [outer1_4];
    outer1_6("GUILD_HEADER_MEMBER_COUNT", id, id(outer1_2[5]).useStateFromStores(items, () => {
      const memberCount = outer2_4.getMemberCount(closure_0);
      let num = 0;
      if (null != memberCount) {
        num = memberCount;
      }
      return num;
    }));
    const obj = id(outer1_2[5]);
    const items1 = [outer1_5];
    return id(outer1_2[5]).useStateFromStores(items1, () => outer2_5.getMemberCount(closure_0));
  })(id);
  let items = [closure_5];
  obj.activeChannelsCount = _require(566).useStateFromStores(items, () => outer1_5.getActiveChannelsCount(closure_0));
  return obj;
};
