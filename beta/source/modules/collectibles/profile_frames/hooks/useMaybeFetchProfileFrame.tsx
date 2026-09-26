// Module ID: 8502
// Function ID: 8503
// Name: useMaybeFetchProfileFrame
// Dependencies: [19, 8503, 8513, 7815, 2]
// Exports: default

// Module 8502 (useMaybeFetchProfileFrame)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7815 */;
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame" /* 8503 */;
import useProfileFrameDefault from "useProfileFrame" /* 8513 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0) {
  closure_0 = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const tmp2 = useProfileFrameDefault(arg0);
  importDefault = tmp3;
  const items = [null == tmp && null != arg0 && null == tmp2, arg0];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items);
  if (tmp == null) {
    tmp = tmp2;
  }
  return tmp;
};
