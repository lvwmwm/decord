// Module ID: 10668
// Function ID: 83185
// Name: useHasVideoPermission
// Dependencies: []
// Exports: default, getVideoPermission

// Module 10668 (useHasVideoPermission)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video_calls/useHasVideoPermission.tsx");

export default function useHasVideoPermission(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      let isPrivateResult = arg0.isPrivate();
      if (!isPrivateResult) {
        const obj = arg0(closure_1[3]);
        isPrivateResult = obj.canStreamInChannel(arg0, closure_2, closure_3, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  }, items1);
};
export const getVideoPermission = function getVideoPermission(channel) {
  let isPrivateResult = channel.isPrivate();
  if (!isPrivateResult) {
    const obj = arg1(dependencyMap[3]);
    isPrivateResult = obj.canStreamInChannel(channel, closure_2, closure_3, false);
  }
  return isPrivateResult;
};
