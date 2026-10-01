// Module ID: 13515
// Function ID: 13516
// Name: useGuildHeaderCounts
// Dependencies: [19, 4754, 13516, 12, 573, 504, 2]
// Exports: useGuildHeaderCounts

// Module 13515 (useGuildHeaderCounts)
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildHeaderCountsStore from "GuildHeaderCountsStore" /* 13516 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_action_sheet/native/useGuildHeaderCounts.tsx");

export const useGuildHeaderCounts = function useGuildHeaderCounts(id) {
  let items10;
  let obj6;
  const f98111 = () => {
    let guildId;
    let type;
    let obj = GUILD_HEADER_ONLINE_COUNT(dependencyMap[3]);
    return obj.throttle((count) => {
      const obj = guildId(stateFromStores2[4]);
      const obj2 = { type, count, guildId };
      obj.dispatch(obj2);
    }, 3000);
  };
  const f98112 = () => () => memo1.cancel();
  const f98113 = () => {
    if (stateFromStores2 > 0) {
      memo1(tmp);
    }
  };
  _require = id;
  let obj = require("get initialized");
  const items = [GuildMemberCountStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = GuildMemberCountStore.getMemberCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const GUILD_HEADER_MEMBER_COUNT = "GUILD_HEADER_MEMBER_COUNT";
  const items1 = ["GUILD_HEADER_MEMBER_COUNT", id];
  const memo = react.useMemo(f98111, items1);
  const items2 = [memo];
  const effect = react.useEffect(f98112, items2);
  const items3 = [memo, stateFromStores];
  const effect1 = react.useEffect(f98113, items3);
  let obj2 = require("get initialized");
  const items4 = [GuildHeaderCountsStore];
  _require = id;
  const stateFromStores1 = obj2.useStateFromStores(items4, () => GuildHeaderCountsStore.getMemberCount(closure_0));
  const items5 = [GuildMemberCountStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items5, () => {
    let num = GuildMemberCountStore.getOnlineCount(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const GUILD_HEADER_ONLINE_COUNT = "GUILD_HEADER_ONLINE_COUNT";
  let closure_1 = id;
  const items6 = ["GUILD_HEADER_ONLINE_COUNT", id];
  const memo1 = react.useMemo(f98111, items6);
  const items7 = [memo1];
  const effect2 = react.useEffect(f98112, items7);
  const items8 = [memo1, stateFromStores2];
  const effect3 = react.useEffect(f98113, items8);
  const items9 = [GuildHeaderCountsStore];
  const obj4 = require("get initialized");
  const obj5 = { memberCount: stateFromStores1, onlineCount: obj4.useStateFromStores(items9, () => GuildHeaderCountsStore.getOnlineCount(closure_0)), activeChannelsCount: obj6.useStateFromStores(items10, () => GuildHeaderCountsStore.getActiveChannelsCount(id)) };
  items10 = [GuildHeaderCountsStore];
  obj6 = require("get initialized");
  return obj5;
};
