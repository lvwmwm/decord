// Module ID: 8286
// Function ID: 65295
// Name: useFramePreviewOverrideFrame
// Dependencies: [31, 6781, 8287, 1876, 2]
// Exports: default

// Module 8286 (useFramePreviewOverrideFrame)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useFramePreviewOverrideStore as closure_4 } from "_createForOfIteratorHelperLoose";

let require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx");

export default function useFramePreviewOverrideFrame() {
  let tmp = callback((override) => override.override);
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let tmp = null;
    if (null != tmp) {
      const obj = { type: tmp(outer1_1[3]).CollectiblesItemType.PROFILE_FRAME, skuId: "frame-preview-override" };
      ({ frameKey: obj.label, layers: obj.layers, innerWidth: obj.innerWidth, overflowTop: obj.overflowTop, overflowBottom: obj.overflowBottom, overflowHorizontal: obj.overflowHorizontal } = tmp);
      const prototype = outer1_3.prototype;
      tmp = new outer1_3(obj);
    }
    return tmp;
  }, items);
};
