// Module ID: 19116
// Function ID: 19117
// Name: ConjureAppPictureInPictures
// Dependencies: [19, 17, 6846, 6847, 21, 5014, 1491, 1625, 19117, 7101, 5095, 19120, 504, 16371, 19121, 19123, 19124, 2]
// Exports: default

// Module 19116 (ConjureAppPictureInPictures)
import react_native from "react-native" /* 17 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 16371 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 19120 */;
import useFloatConjureAppsOffScreenDefault from "useFloatConjureAppsOffScreen" /* 19124 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function ConjureAppPictureInPictureLayer(frameIds) {
  let items5;
  let safeArea;
  let str;
  frameIds = frameIds.frameIds;
  let width;
  let height;
  let tmp = closure_10();
  let tmp2 = width;
  const tmp3 = height;
  size = width(height[6])();
  width = size.width;
  height = size.height;
  const tmp4 = width(height[7])();
  react = tmp4;
  const avoidance = width(height[8])(tmp4);
  const tmp5 = width(height[9])({ includeCustomKeyboard: true });
  let obj = frameIds(height[10]);
  const sharedValue = obj.useSharedValue(false);
  let obj2 = frameIds(height[10]);
  const sharedValue1 = obj2.useSharedValue(false);
  const items = [width, height, tmp4];
  const memo = react.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getCloseTargetCenter(width, height, safeArea);
  }, items);
  const items1 = [sharedValue];
  const items2 = [frameIds, width];
  const obj3 = frameIds(height[12]);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => frameIds.map((item) => {
    const tmp = sharedValue1(sharedValue.getFrame(item));
    const obj = frameIds(height[11]);
    const pictureInPictureSize = obj.getPictureInPictureSize(width, memo(tmp));
    const getPictureInPictureWindowSize = frameIds(height[11]).getPictureInPictureWindowSize;
    frameIds(height[11]);
    const obj2 = frameIds(height[13]);
    return getPictureInPictureWindowSize(pictureInPictureSize, obj2.isConjureAppPictureInPictureInteractive(tmp, frameIds(height[14]).SHOWS_STATIC_CARD)).height;
  }), items2);
  const items3 = [stateFromStoresArray];
  let closure_9 = react.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getStackOffsets(stateFromStoresArray);
  }, items3);
  const items4 = [tmp.layer, ];
  let hidden = tmp5;
  const tmp10 = closure_9;
  const tmp11 = avoidance;
  if (tmp5) {
    hidden = tmp.hidden;
  }
  const obj4 = { style: items4, pointerEvents: str, children: items5 };
  items4[1] = hidden;
  str = "box-none";
  if (tmp5) {
    str = "none";
  }
  items5 = [
    stateFromStoresArray(tmp2(tmp3[15]), { center: memo, shown: sharedValue, hovered: sharedValue1 }),
    frameIds.map((frameId, index) => {
      let num;
      const obj = { frameId, stackOffset: num, windowWidth: width, windowHeight: height, safeArea, avoidance, closeTargetCenter: memo, closeTargetShown: sharedValue, closeTargetHovered: sharedValue1 };
      num = closure_9[index];
      const tmp = metroImportAll;
      const tmp2 = ConjureAppPictureInPictureWithSize;
      if (num == null) {
        num = 0;
      }
      return tmp(tmp2, obj, frameId);
    })
  ];
  return tmp10(tmp11, obj4);
}
function ConjureAppPictureInPictureWithSize(frameId) {
  let stateFromStores;
  frameId = frameId.frameId;
  const windowWidth = frameId.windowWidth;
  let obj = frameId(stateFromStores[12]);
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
