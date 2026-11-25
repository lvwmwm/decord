// Module ID: 18229
// Function ID: 18230
// Name: useSubscribeToGuildMemberUpdates
// Dependencies: [19, 12051, 2]
// Exports: useSubscribeToGuildMemberUpdates

// Module 18229 (useSubscribeToGuildMemberUpdates)
import GuildSubscriptionsActionCreatorsAll from "GuildSubscriptionsActionCreators" /* 12051 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/useSubscribeToGuildMemberUpdates.tsx");

export function useSubscribeToGuildMemberUpdates(guildId) {
  let closure_0 = guildId;
  const items = [guildId];
  const effect = react.useEffect(() => {
    let obj = GuildSubscriptionsActionCreatorsAll;
    let result = obj.subscribeToMemberUpdates(guildId);
    return () => {
      const obj = closure_0(dependencyMap[1]);
      const result = obj.unsubscribeFromMemberUpdates(closure_1_0);
    };
  }, items);
}
