// Module ID: 8691
// Function ID: 8692
// Name: useMaybeFetchProfileFrame
// Dependencies: [19, 8692, 8702, 8703, 6894, 2]
// Exports: default

// Module 8691 (useMaybeFetchProfileFrame)
import noop from "noop";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = importDefault(8692)();
  const isProfileFramesEnabled = _require(8702).useIsProfileFramesEnabled(location);
  const tmp3 = importDefault(8703)(arg0);
  importDefault = tmp4;
  const items = [null == tmp && isProfileFramesEnabled && null != arg0 && null == tmp3, arg0];
  const effect = React.useEffect(() => {
    if (closure_1) {
      const result = callback(outer1_2[4]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(outer1_2[4]);
    }
  }, items);
  if (tmp == null) {
    let tmp6;
    if (isProfileFramesEnabled) {
      tmp6 = tmp3;
    }
    tmp = tmp6;
  }
  return tmp;
};
