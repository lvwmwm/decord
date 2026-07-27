// Module ID: 15009
// Function ID: 114419
// Name: useEnsureHydratedUsers
// Dependencies: [31, 4959, 1850, 6018, 2]
// Exports: useEnsureHydratedUsers

// Module 15009 (useEnsureHydratedUsers)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx");

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
      obj[closure_0] = items1;
    }
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const item = items1.forEach((id) => {
      if (null == outer2_4.getUser(id)) {
        const member = outer2_3.requestMember(outer1_0, id);
      }
    });
  }, items1);
  const subscribeGuildMembers = _require(6018).useSubscribeGuildMembers(memo, "useEnsureHydratedUsers");
};
