// Module ID: 8846
// Function ID: 8847
// Name: useMaybeFetchProfileFrame
// Dependencies: [19, 8847, 8857, 8858, 7048, 2]
// Exports: default

// Module 8846 (useMaybeFetchProfileFrame)
import noop from "noop";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = importDefault(8847)();
  const isProfileFramesEnabled = _require(8857).useIsProfileFramesEnabled(location);
  const tmp3 = importDefault(8858)(arg0);
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
