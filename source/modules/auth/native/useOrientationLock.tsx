// Module ID: 14660
// Function ID: 110538
// Name: usePortraitOrientationOnly
// Dependencies: []
// Exports: default

// Module 14660 (usePortraitOrientationOnly)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  const tmp = importDefault(dependencyMap[3])();
  const arg1 = tmp;
  const items = [tmp];
  const effect = React.useEffect(() => {
    let tmp = !tmp(closure_2[1]).isIpadOS();
    if (tmp) {
      tmp = !tmp(closure_2[2]).isMetaQuest();
      const obj2 = tmp(closure_2[2]);
    }
    if (tmp) {
      tmp = !tmp;
    }
    if (tmp) {
      tmp(closure_2[4]).lockOrientation("PORTRAIT", false);
      const obj3 = tmp(closure_2[4]);
    }
    return () => {
      if (tmp) {
        let obj = tmp(closure_2[4]);
        obj = { unlockAfterRotatingToPreviousLock: false };
        obj.unlockOrientation(obj);
      }
    };
  }, items);
};
