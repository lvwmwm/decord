// Module ID: 8533
// Function ID: 8534
// Name: useMaybeFetchProfileFrame
// Dependencies: [19, 8534, 8544, 8545, 7286, 2]
// Exports: default

// Module 8533 (useMaybeFetchProfileFrame)
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame" /* 8534 */;
import useProfileFrameDefault from "useProfileFrame" /* 8545 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const isProfileFramesEnabled = _require(8544).useIsProfileFramesEnabled(location);
  const tmp3 = useProfileFrameDefault(arg0);
  importDefault = tmp4;
  const items = [null == tmp && isProfileFramesEnabled && null != arg0 && null == tmp3, arg0];
  const effect = React.useEffect(() => {
    if (closure_1) {
      const result = callback(closure_1_2[4]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(closure_1_2[4]);
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
