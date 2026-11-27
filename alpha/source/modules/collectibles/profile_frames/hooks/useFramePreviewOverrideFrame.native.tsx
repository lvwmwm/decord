// Module ID: 9492
// Function ID: 9493
// Name: useFramePreviewOverrideFrame
// Dependencies: [19, 6318, 9493, 2113, 2]
// Exports: default

// Module 9492 (useFramePreviewOverrideFrame)
import CollectiblesItemType from "CollectiblesItemType" /* 2113 */;
import FramePreviewOverrideStore from "FramePreviewOverrideStore" /* 9493 */;
import react from "react" /* 19 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 6318 */;
import size from "module_2" /* 2 */;

let closure_4 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx");

export default function useFramePreviewOverrideFrame() {
  let tmp = closure_4((override) => override.override);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(function() {
    let tmp2 = null;
    const tmp = closure_0;
    if (null != closure_0) {
      const obj = { type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME, skuId: "frame-preview-override", label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
      ({ frameKey: obj.label, layers: obj.layers, innerWidth: obj.innerWidth, overflowTop: obj.overflowTop, overflowBottom: obj.overflowBottom, overflowHorizontal: obj.overflowHorizontal } = tmp);
      const self = this;
      const self2 = this;
      tmp2 = new ProfileFrameRecord(obj);
    }
    return tmp2;
  }, items);
};
