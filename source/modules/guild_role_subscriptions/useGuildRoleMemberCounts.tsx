// Module ID: 5415
// Function ID: 46445
// Name: useGuildRoleMemberCounts
// Dependencies: []
// Exports: default

// Module 5415 (useGuildRoleMemberCounts)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = {};
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
  let num = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    num = 0;
  }
  const importAll = num;
  const items = [closure_4];
  const items1 = [arg0, num];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => roleMemberCount.getRoleMemberCount(arg0));
  const effect = React.useEffect(() => {
    if (null != arg0) {
      let tmp2 = null != tmp13;
      if (tmp2) {
        tmp2 = num > 0;
      }
      if (tmp2) {
        const _Date = Date;
        tmp2 = Date.now() - tmp13 < num;
      }
      if (!tmp2) {
        const _Date2 = Date;
        closure_5[arg0] = Date.now();
        const memberCounts = num(closure_2[3]).fetchMemberCounts(arg0);
        const obj = num(closure_2[3]);
      }
    }
  }, items1);
  return stateFromStores;
};
