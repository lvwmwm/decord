// Module ID: 19109
// Function ID: 19110
// Name: ConjureAppPictureInPictures
// Dependencies: [19, 17, 6846, 6847, 21, 5014, 1491, 1625, 19110, 7101, 5095, 19113, 19114, 504, 19115, 19117, 18667, 2]
// Exports: default

// Module 19109 (ConjureAppPictureInPictures)
import react_native from "react-native" /* 17 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18667 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19113 */;
import useFloatConjureAppsOffScreenDefault from "useFloatConjureAppsOffScreen" /* 19117 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function ConjureAppPictureInPictureLayer(frameIds) {
  let avoidance;
  let items2;
  let safeArea;
  let str;
  frameIds = frameIds.frameIds;
  let height;
  const tmp = closure_10();
  size = height(1491)();
  const width = size.width;
  const tmp2 = height;
  height = size.height;
  const tmp4 = height(1625)();
  dependencyMap = tmp4;
  react = height(19110)(tmp4);
  const tmp5 = height(7101)({ includeCustomKeyboard: true });
  let obj = width(5095);
  const sharedValue = obj.useSharedValue(false);
  const obj2 = width(5095);
  const sharedValue1 = obj2.useSharedValue(false);
  const items = [width, height, tmp4];
  const memo = react.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getCloseTargetCenter(width, height, safeArea);
  }, items);
  const items1 = [tmp.layer, ];
  let hidden = tmp5;
  const tmp10 = sharedValue;
  const tmp9 = closure_9;
  if (tmp5) {
    hidden = tmp.hidden;
  }
  const obj3 = { style: items1, pointerEvents: str, children: items2 };
  items1[1] = hidden;
  str = "box-none";
  if (tmp5) {
    str = "none";
  }
  items2 = [
    closure_8(tmp2(19114), { center: memo, shown: sharedValue, hovered: sharedValue1 }),
    frameIds.map((frameId, index) => {
      const obj = { frameId, index, windowWidth: width, windowHeight: height, safeArea, avoidance, closeTargetCenter: memo, closeTargetShown: sharedValue, closeTargetHovered: sharedValue1 };
      return metroImportAll(ConjureAppPictureInPictureWithSize, obj, frameId);
    })
  ];
  return tmp9(tmp10, obj3);
}
function ConjureAppPictureInPictureWithSize(frameId) {
  let stateFromStores;
  frameId = frameId.frameId;
  const windowWidth = frameId.windowWidth;
  let obj = frameId(stateFromStores[13]);
  const items = [FramesStore];
  const items1 = [frameId];
  stateFromStores = obj.useStateFromStores(items, () => metroImportDefault(metroRequire(FramesStore.getFrame(frameId))), items1);
  const items2 = [windowWidth, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getPictureInPictureSize(windowWidth, stateFromStores);
  }, items2);
  const obj2 = { size: memo };
  const tmp3 = windowWidth(stateFromStores[14]);
  const merged = Object.assign(frameId);
  return closure_8(tmp3, obj2);
}
let react = react_mod;
const View = react_native.View;
({ asLaunched: metroRequire, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ layer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, hidden: { opacity: 0 } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictures.tsx");

export default function ConjureAppPictureInPictures() {
  useFloatConjureAppsOffScreenDefault();
  const obj = conjureAppPictureInPictureFrames;
  const conjureAppPictureInPictureFrameIds = obj.useConjureAppPictureInPictureFrameIds();
  let tmp2 = null;
  if (conjureAppPictureInPictureFrameIds.length > 0) {
    const obj2 = { frameIds: conjureAppPictureInPictureFrameIds };
    tmp2 = metroImportAll(ConjureAppPictureInPictureLayer, obj2);
  }
  return tmp2;
};
