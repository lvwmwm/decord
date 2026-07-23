// Module ID: 8241
// Function ID: 65064
// Name: useMaybeFetchProfileFrame
// Dependencies: [31, 8242, 8252, 8253, 6773, 2]
// Exports: default

// Module 8241 (useMaybeFetchProfileFrame)
import result from "result";

const require = arg1;
let result = require("apexExperiment").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = importDefault(8242)();
  const isProfileFramesEnabled = _require(8252).useIsProfileFramesEnabled(location);
  const tmp3 = importDefault(8253)(arg0);
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
