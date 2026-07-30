// Module ID: 15077
// Function ID: 15078
// Name: useEnsureHydratedUsers
// Dependencies: [19, 5015, 1874, 6068, 2]
// Exports: useEnsureHydratedUsers

// Module 15077 (useEnsureHydratedUsers)
import noop from "noop";
import handleConnectionReset from "handleConnectionReset";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

export const useEnsureHydratedUsers = function useEnsureHydratedUsers(guild_id, items1) {
  const _require = guild_id;
  const dependencyMap = items1;
  const items = [guild_id, items1];
  items1 = [guild_id, items1];
  const memo = React.useMemo(() => {
    if (0 === items1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const item = items1.forEach((id) => {
      if (null == outer1_4.getUser(id)) {
        const member = outer1_3.requestMember(closure_0, id);
      }
    });
  }, items1);
  const subscribeGuildMembers = _require(6068).useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
};
