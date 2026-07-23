// Module ID: 11886
// Function ID: 91979
// Name: useGetGuildJoinRequest
// Dependencies: [31, 3948, 566, 9160, 2]
// Exports: default

// Module 11886 (useGetGuildJoinRequest)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let request = null;
    if (null != closure_0) {
      request = outer1_4.getRequest(closure_0);
    }
    return request;
  });
  let obj = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_4.hasFetchedRequestToJoinGuilds);
  const items2 = [stateFromStores1];
  const effect = React.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = stateFromStores1(outer1_2[3]).fetchRequestToJoinGuilds();
      const obj = stateFromStores1(outer1_2[3]);
    }
  }, items2);
  return stateFromStores;
};
