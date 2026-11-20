// Module ID: 7952
// Function ID: 7953
// Name: useDisplayProfile
// Dependencies: [19, 1386, 6837, 504, 7953, 2159, 8010, 2]
// Exports: default, getDisplayProfile, useDisplayProfileWithFetchEffect

// Module 7952 (useDisplayProfile)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7953 */;
import DisplayProfileDefault from "DisplayProfile" /* 8010 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
import FunctionUtils from "FunctionUtils" /* 2159 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f91740 = () => {
  let obj;
  let obj2;
  let tmp2 = null;
  if (null != closure_0) {
    const items = [UserStore, UserProfileStore];
    [obj, obj2] = items;
    let tmp6 = null;
    if (null !== closure_0) {
      const user = obj.getUser(tmp);
      const userProfile = obj2.getUserProfile(tmp);
      let tmp10 = null;
      if (null != user) {
        tmp10 = null;
        if (null != userProfile) {
          tmp10 = closure_2_6(userProfile, tmp9);
        }
      }
      tmp6 = tmp10;
    }
    tmp2 = tmp6;
  }
  return tmp2;
};
let closure_6 = FunctionUtils.cachedFunction((arg0, arg1) => {
  const tmp = new DisplayProfileDefault(arg0, arg1);
  return tmp;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default function useDisplayProfile(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [UserStore, UserProfileStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f91740);
};
export function useDisplayProfileWithFetchEffect(arg0, guildId) {
  let closure_0;
  let items = [guildId, arg0];
  const effect = react.useEffect(() => {
    const tmp = maybeFetchUserProfileDefault;
    tmp(closure_0, undefined, { guildId });
  }, items);
  _require = arg0;
  const obj = require("get initialized");
  const items1 = [UserStore, UserProfileStore];
  return obj.useStateFromStores(items1, f91740);
}
export function getDisplayProfile(id, guildId) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [UserStore, UserProfileStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null === id) {
    return null;
  } else {
    const user = obj.getUser(id);
    const userProfile = obj2.getUserProfile(id);
    let tmp8 = null;
    if (null != user) {
      tmp8 = null;
      if (null != userProfile) {
        tmp8 = closure_6(userProfile, tmp7);
      }
    }
    return tmp8;
  }
}
