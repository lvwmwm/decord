// Module ID: 7887
// Function ID: 62780
// Name: useDisplayProfile
// Dependencies: [31, 1849, 6856, 566, 7888, 1916, 7891, 2]
// Exports: useDisplayProfileWithFetchEffect

// Module 7887 (useDisplayProfile)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";

const require = arg1;
function useDisplayProfile(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [_isNativeReflectConstruct, closure_5];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null != closure_0) {
      const items = [outer1_4, outer1_5];
      tmp = outer1_8(closure_0, closure_1, items);
    }
    return tmp;
  });
}
function getDisplayProfile(id, arg1) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [_isNativeReflectConstruct, closure_5];
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
        tmp8 = callback(userProfile, tmp7);
      }
    }
    return tmp8;
  }
}
let closure_6 = areArraysShallowlyEqual.cachedFunction((arg0, arg1) => {
  let tmp = importDefault(7891);
  tmp = new tmp(arg0, arg1);
  return tmp;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default useDisplayProfile;
export const useDisplayProfileWithFetchEffect = function useDisplayProfileWithFetchEffect(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg1, arg0];
  const effect = React.useEffect(() => {
    const obj = {};
    let tmp3;
    if (null != callback) {
      tmp3 = callback;
    }
    obj.guildId = tmp3;
    callback(outer1_2[4])(closure_0, undefined, obj);
  }, items);
  return useDisplayProfile(arg0, arg1);
};
export { getDisplayProfile };
