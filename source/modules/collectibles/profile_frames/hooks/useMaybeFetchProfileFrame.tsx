// Module ID: 8285
// Function ID: 65292
// Name: useMaybeFetchProfileFrame
// Dependencies: [31, 8286, 8296, 8297, 6773, 2]
// Exports: default

// Module 8285 (useMaybeFetchProfileFrame)
import result from "result";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = importDefault(8286)();
  const isProfileFramesEnabled = _require(8296).useIsProfileFramesEnabled(location);
  const tmp3 = importDefault(8297)(arg0);
  importDefault = tmp4;
  const items = [null == tmp && isProfileFramesEnabled && null != arg0 && null == tmp3, arg0];
  const effect = React.useEffect(() => {
    if (closure_1) {
      const result = callback(outer1_2[4]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(outer1_2[4]);
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
