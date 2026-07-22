// Module ID: 16328
// Function ID: 125985
// Name: items
// Dependencies: []
// Exports: default

// Module 16328 (items)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const items = [];
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => guildEmoji.getGuildEmoji(arg0), items1);
  const dependencyMap = stateFromStores;
  const items2 = [stateFromStores, arg0];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      let found = closure_4;
    } else {
      found = stateFromStores.filter((roles) => callback(closure_1[3]).isRoleSubscriptionEmoji(roles, callback));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;
