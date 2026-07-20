// Module ID: 14817
// Function ID: 111697
// Name: useEnsureHydratedUsers
// Dependencies: [0, 0, 0, 0, 0]
// Exports: useEnsureHydratedUsers

// Module 14817 (useEnsureHydratedUsers)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

export const useEnsureHydratedUsers = function useEnsureHydratedUsers(guild_id, items1) {
  items1 = guild_id;
  const dependencyMap = items1;
  const items = [guild_id, items1];
  items1 = [guild_id, items1];
  const memo = React.useMemo(() => {
    if (0 === arg1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[arg0] = arg1;
    }
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const item = arg1.forEach((id) => {
      if (null == user.getUser(id)) {
        const member = closure_3.requestMember(closure_0, id);
      }
    });
  }, items1);
  const subscribeGuildMembers = items1(dependencyMap[3]).useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
};
