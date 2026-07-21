// Module ID: 7881
// Function ID: 62733
// Name: useDisplayProfile
// Dependencies: []
// Exports: useDisplayProfileWithFetchEffect

// Module 7881 (useDisplayProfile)
function useDisplayProfile(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_4, closure_5];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != arg0) {
      const items = [closure_4, closure_5];
      tmp = callback(arg0, arg1, items);
    }
    return tmp;
  });
}
function getDisplayProfile(id, arg1) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_4, closure_5];
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[5]).cachedFunction((arg0, arg1) => {
  let tmp = importDefault(dependencyMap[6]);
  tmp = new tmp(arg0, arg1);
  return tmp;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/hooks/useDisplayProfile.tsx");

export default useDisplayProfile;
export const useDisplayProfileWithFetchEffect = function useDisplayProfileWithFetchEffect(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [arg1, arg0];
  const effect = React.useEffect(() => {
    const obj = {};
    let tmp3;
    if (null != arg1) {
      tmp3 = arg1;
    }
    obj.guildId = tmp3;
    arg1(closure_2[4])(arg0, undefined, obj);
  }, items);
  return useDisplayProfile(arg0, arg1);
};
export { getDisplayProfile };
