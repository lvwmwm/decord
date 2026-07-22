// Module ID: 8236
// Function ID: 65030
// Name: useFramePreviewOverrideFrame
// Dependencies: []
// Exports: default

// Module 8236 (useFramePreviewOverrideFrame)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).useFramePreviewOverrideStore;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/profile_frames/hooks/useFramePreviewOverrideFrame.native.tsx");

export default function useFramePreviewOverrideFrame() {
  const tmp = callback((override) => override.override);
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => {
    let tmp = null;
    if (null != tmp) {
      const obj = { type: tmp(closure_1[3]).CollectiblesItemType.PROFILE_FRAME, skuId: "frame-preview-override" };
      ({ frameKey: obj.label, layers: obj.layers, innerWidth: obj.innerWidth, overflowTop: obj.overflowTop, overflowBottom: obj.overflowBottom, overflowHorizontal: obj.overflowHorizontal } = tmp);
      const prototype = ctor.prototype;
      tmp = new ctor(obj);
    }
    return tmp;
  }, items);
};
