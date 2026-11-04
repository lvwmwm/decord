// Module ID: 7482
// Function ID: 7483
// Name: subscribeGuildMembers
// Dependencies: [19, 6760, 12, 1242, 7451, 2]
// Exports: useEnsureHydratedGuildUsers, useSubscribeGuildMembers

// Module 7482 (subscribeGuildMembers)
import react from "react" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6760 */;
import size from "module_2" /* 2 */;

let c5 = false;
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export function useSubscribeGuildMembers(memo, AddMembersActionSheet) {
  let closure_0 = memo;
  let closure_1 = AddMembersActionSheet;
  const items = [memo, AddMembersActionSheet];
  const effect = react.useEffect(() => {
    let reason;
    let arr = useEnsureHydratedGuildUsers(dependencyMap[2]);
    let item = arr.forEach(memo, (userIds, guildId) => {
      let obj3;
      const tmp = !c5 && userIds.length > 50;
      if (tmp) {
        c5 = true;
        const obj2 = { extra: obj3 };
        obj3 = { count: userIds.length, guildId, reason };
        const obj = useEnsureHydratedGuildUsers(closure_2_2[3]);
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
      }
      const obj4 = memo(closure_2_2[4]);
      obj4.subscribeMembers(guildId, userIds);
    });
    return () => {
      const arr = useEnsureHydratedGuildUsers(closure_2_2[2]);
      const item = arr.forEach(memo, (userIds, guildId) => {
        const obj = closure_1_0(closure_1_2[4]);
        return obj.unsubscribeMembers(guildId, userIds);
      });
    };
  }, items);
}
export function useEnsureHydratedGuildUsers(guild_id, items1) {
  let closure_0 = guild_id;
  const items = [guild_id, items1];
  const memo = react.useMemo(() => {
    let obj;
    if (0 === items1.length) {
      obj = {};
    } else {
      obj = {};
      obj[guild_id] = tmp;
    }
    return obj;
  }, items);
  items1 = [guild_id, items1];
  const effect = react.useEffect(() => {
    const item = items1.forEach((item) => GuildMemberRequesterStore.requestMember(guild_id, item));
  }, items1);
  const useEnsureHydratedGuildUsers = "useEnsureHydratedGuildUsers";
  const items2 = [memo, "useEnsureHydratedGuildUsers"];
  const effect1 = react.useEffect(() => {
    let reason;
    let arr = useEnsureHydratedGuildUsers(dependencyMap[2]);
    let item = arr.forEach(memo, (userIds, guildId) => {
      let obj3;
      const tmp = !c5 && userIds.length > 50;
      if (tmp) {
        c5 = true;
        const obj2 = { extra: obj3 };
        obj3 = { count: userIds.length, guildId, reason };
        const obj = useEnsureHydratedGuildUsers(closure_2_2[3]);
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
      }
      const obj4 = memo(closure_2_2[4]);
      obj4.subscribeMembers(guildId, userIds);
    });
    return () => {
      const arr = useEnsureHydratedGuildUsers(closure_2_2[2]);
      const item = arr.forEach(memo, (userIds, guildId) => {
        const obj = closure_1_0(closure_1_2[4]);
        return obj.unsubscribeMembers(guildId, userIds);
      });
    };
  }, items2);
}
