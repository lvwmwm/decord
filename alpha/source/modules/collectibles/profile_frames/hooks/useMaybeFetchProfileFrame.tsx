// Module ID: 9491
// Function ID: 9492
// Name: useMaybeFetchProfileFrame
// Dependencies: [19, 9492, 9502, 6310, 2]
// Exports: default

// Module 9491 (useMaybeFetchProfileFrame)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6310 */;
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame" /* 9492 */;
import useProfileFrameDefault from "useProfileFrame" /* 9502 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0) {
  let closure_1;
  let closure_0 = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const tmp2 = useProfileFrameDefault(arg0);
  importDefault = tmp3;
  const items = [tmp3, arg0];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      const obj = CollectiblesActionCreators;
      const result = obj.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items);
  if (tmp == null) {
    tmp = tmp2;
  }
  return tmp;
};
