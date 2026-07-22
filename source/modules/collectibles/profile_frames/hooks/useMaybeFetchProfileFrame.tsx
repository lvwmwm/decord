// Module ID: 8235
// Function ID: 65027
// Name: useMaybeFetchProfileFrame
// Dependencies: []
// Exports: default

// Module 8235 (useMaybeFetchProfileFrame)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  location = arg0;
  let tmp = importDefault(dependencyMap[1])();
  const isProfileFramesEnabled = location(dependencyMap[2]).useIsProfileFramesEnabled(location);
  const tmp3 = importDefault(dependencyMap[3])(arg0);
  const importDefault = tmp4;
  const items = [null == tmp && isProfileFramesEnabled && null != arg0 && null == tmp3, arg0];
  const effect = React.useEffect(() => {
    if (tmp4) {
      const result = arg0(closure_2[4]).maybeFetchCollectiblesProduct(arg0);
      const obj = arg0(closure_2[4]);
    }
  }, items);
  if (null == tmp) {
    let tmp6;
    if (isProfileFramesEnabled) {
      tmp6 = tmp3;
    }
    tmp = tmp6;
  }
  return tmp;
};
