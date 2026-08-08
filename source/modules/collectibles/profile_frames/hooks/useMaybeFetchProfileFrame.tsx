// Module ID: 8797
// Function ID: 8798
// Name: useMaybeFetchProfileFrame
// Dependencies: [19, 8798, 8808, 8809, 7000, 2]
// Exports: default

// Module 8797 (useMaybeFetchProfileFrame)
import noop from "noop";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = importDefault(8798)();
  const isProfileFramesEnabled = _require(8808).useIsProfileFramesEnabled(location);
  const tmp3 = importDefault(8809)(arg0);
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
