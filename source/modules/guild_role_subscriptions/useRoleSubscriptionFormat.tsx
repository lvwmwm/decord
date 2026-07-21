// Module ID: 16290
// Function ID: 125732
// Name: useRoleSubscriptionFormat
// Dependencies: []
// Exports: default

// Module 16290 (useRoleSubscriptionFormat)
let closure_2 = importAll(dependencyMap[0]);
const hasPermission = arg1(dependencyMap[1]).hasPermission;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).GuildRoleSubscriptionFormat;
const Permissions = arg1(dependencyMap[5]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx");

export default function useRoleSubscriptionFormat(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5, closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let everyoneRole;
    if (null != guild) {
      everyoneRole = everyoneRole.getEveryoneRole(guild);
    }
    return everyoneRole;
  });
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (!callback(stateFromStores, constants2.VIEW_CHANNEL)) {
        let SOME_CHANNELS = constants.ALL_CHANNELS;
      }
      return SOME_CHANNELS;
    }
    SOME_CHANNELS = constants.SOME_CHANNELS;
  }, items1);
  obj = { format: memo, isFullServerGating: memo === constants.ALL_CHANNELS };
  return obj;
};
