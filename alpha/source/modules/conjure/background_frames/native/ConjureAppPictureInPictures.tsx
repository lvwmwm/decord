// Module ID: 18966
// Function ID: 18967
// Name: ConjureAppPictureInPictures
// Dependencies: [19, 17, 6833, 6834, 21, 5005, 558, 576, 1497, 1631, 18967, 7087, 5086, 18970, 18971, 504, 18972, 18974, 18566, 2]

// Module 18966 (ConjureAppPictureInPictures)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import conjureAppPictureInPictureFrames from "conjureAppPictureInPictureFrames" /* 18566 */;
import conjureAppPictureInPictureLayout from "conjureAppPictureInPictureLayout" /* 18970 */;
import ConjureAppPictureInPictureDefault from "ConjureAppPictureInPicture" /* 18972 */;
import useFloatConjureAppsOffScreenDefault from "useFloatConjureAppsOffScreen" /* 18974 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6833 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ asLaunched: metroRequire, getPipOrientationLockStateForFrame: metroImportDefault } = FramesConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ layer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, hidden: { opacity: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPictureLayer(frameIds) {
  let closeTargetCenter;
  let first;
  let height;
  let items;
  let safeArea;
  let width;
  let obj = width(576);
  const cResult = obj.c(34);
  frameIds = frameIds.frameIds;
  const tmp4 = closure_10();
  size = height(1497)();
  width = size.width;
  height = size.height;
  const tmp6 = height(1631)();
  dependencyMap = tmp6;
  const tmp7 = height(18967)(tmp6);
  const avoidance = tmp7;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeCustomKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp9 = height(7087)(first);
  const tmpResult = width(5086);
  const sharedValue = tmpResult.useSharedValue(false);
  const tmpResult3 = width(5086);
  const sharedValue1 = tmpResult3.useSharedValue(false);
  if (cResult[1] === tmp6) {
    if (cResult[2] === height) {
      let tmp12;
      if (cResult[3] === width) {
        tmp12 = cResult[4];
      }
      closeTargetCenter = tmp12;
      if (cResult[5] === tmp4.layer) {
        let tmp15;
        if (cResult[6] === (tmp9 && tmp4.hidden)) {
          tmp15 = cResult[7];
        }
        let str = "box-none";
        if (tmp9) {
          str = "none";
        }
        if (cResult[8] === tmp12) {
          if (cResult[9] === sharedValue1) {
            let tmp16;
            let tmp19;
            if (cResult[10] === sharedValue) {
              tmp16 = cResult[11];
            }
            if (cResult[12] === tmp7) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === sharedValue1) {
                  if (cResult[15] === sharedValue) {
                    if (cResult[16] === frameIds) {
                      if (cResult[17] === tmp6) {
                        if (cResult[18] === height) {
                          if (cResult[19] === width) {
                            tmp19 = cResult[20];
                          }
                          if (cResult[29] === tmp15) {
                            if (cResult[30] === str) {
                              if (cResult[31] === tmp16) {
                                let tmp22;
                                if (cResult[32] === tmp19) {
                                  tmp22 = cResult[33];
                                }
                                return tmp22;
                              }
                            }
                          }
                          const obj3 = { style: tmp15, pointerEvents: str, children: items };
                          items = [tmp16, tmp19];
                          const tmp25 = closure_9(sharedValue, obj3);
                          cResult[29] = tmp15;
                          cResult[30] = str;
                          cResult[31] = tmp16;
                          cResult[32] = tmp19;
                          cResult[33] = tmp25;
                          tmp22 = tmp25;
                        }
                      }
                    }
                  }
                }
              }
            }
            if (cResult[21] === tmp7) {
              if (cResult[22] === tmp12) {
                if (cResult[23] === sharedValue1) {
                  if (cResult[24] === sharedValue) {
                    if (cResult[25] === tmp6) {
                      if (cResult[26] === height) {
                        let tmp20;
                        if (cResult[27] === width) {
                          tmp20 = cResult[28];
                        }
                        const mapped = frameIds.map(tmp20);
                        cResult[12] = tmp7;
                        cResult[13] = tmp12;
                        cResult[14] = sharedValue1;
                        cResult[15] = sharedValue;
                        cResult[16] = frameIds;
                        cResult[17] = tmp6;
                        cResult[18] = height;
                        cResult[19] = width;
                        cResult[20] = mapped;
                        tmp19 = mapped;
                      }
                    }
                  }
                }
              }
            }
            const fn = function z(frameId, index) {
              const obj = { frameId, index, windowWidth: width, windowHeight: height, safeArea, avoidance, closeTargetCenter, closeTargetShown: sharedValue, closeTargetHovered: sharedValue1 };
              return metroImportAll(closure_12, obj, frameId);
            };
            cResult[21] = tmp7;
            cResult[22] = tmp12;
            cResult[23] = sharedValue1;
            cResult[24] = sharedValue;
            cResult[25] = tmp6;
            cResult[26] = height;
            cResult[27] = width;
            cResult[28] = fn;
            tmp20 = fn;
          }
        }
        const obj4 = { center: tmp12, shown: sharedValue, hovered: sharedValue1 };
        const tmp18 = closure_8(height(18971), obj4);
        cResult[8] = tmp12;
        cResult[9] = sharedValue1;
        cResult[10] = sharedValue;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const items1 = [tmp4.layer, tmp9 && tmp4.hidden];
      cResult[5] = tmp4.layer;
      cResult[6] = tmp9 && tmp4.hidden;
      cResult[7] = items1;
      tmp15 = items1;
    }
  }
  const tmpResult4 = width(18970);
  closeTargetCenter = tmpResult4.getCloseTargetCenter(width, height, tmp6);
  cResult[1] = tmp6;
  cResult[2] = height;
  cResult[3] = width;
  cResult[4] = closeTargetCenter;
  tmp12 = closeTargetCenter;
}) : (function ConjureAppPictureInPictureLayer(frameIds) {
  let avoidance;
  let items2;
  let safeArea;
  let str;
  frameIds = frameIds.frameIds;
  let height;
  const tmp = closure_10();
  size = height(1497)();
  const width = size.width;
  const tmp2 = height;
  height = size.height;
  const tmp4 = height(1631)();
  dependencyMap = tmp4;
  react = height(18967)(tmp4);
  const tmp5 = height(7087)({ includeCustomKeyboard: true });
  let obj = width(5086);
  const sharedValue = obj.useSharedValue(false);
  const obj2 = width(5086);
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
    closure_8(tmp2(18971), { center: memo, shown: sharedValue, hovered: sharedValue1 }),
    frameIds.map((frameId, index) => {
      const obj = { frameId, index, windowWidth: width, windowHeight: height, safeArea, avoidance, closeTargetCenter: memo, closeTargetShown: sharedValue, closeTargetHovered: sharedValue1 };
      return metroImportAll(closure_12, obj, frameId);
    })
  ];
  return tmp9(tmp10, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPictureWithSize(frameId) {
  let first;
  let tmp6;
  let tmp7;
  const obj = frameId(576);
  const cResult = obj.c(10);
  frameId = frameId.frameId;
  const windowWidth = frameId.windowWidth;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frameId) {
    const fn = function u() {
      return metroImportDefault(metroRequire(FramesStore.getFrame(frameId)));
    };
    const items1 = [frameId];
    cResult[1] = frameId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = frameId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    let tmp9;
    if (cResult[5] === windowWidth) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === frameId) {
      let tmp11;
      if (cResult[8] === tmp9) {
        tmp11 = cResult[9];
      }
      return tmp11;
    }
    const obj2 = { size: tmp9 };
    const tmp14 = ConjureAppPictureInPictureDefault;
    const merged = Object.assign(frameId);
    const tmp18 = closure_8(tmp14, obj2);
    cResult[7] = frameId;
    cResult[8] = tmp9;
    cResult[9] = tmp18;
    tmp11 = tmp18;
  }
  const tmpResult2 = frameId(18970);
  const pictureInPictureSize = tmpResult2.getPictureInPictureSize(windowWidth, stateFromStores);
  cResult[4] = stateFromStores;
  cResult[5] = windowWidth;
  cResult[6] = pictureInPictureSize;
  tmp9 = pictureInPictureSize;
}) : (function ConjureAppPictureInPictureWithSize(frameId) {
  let stateFromStores;
  frameId = frameId.frameId;
  const windowWidth = frameId.windowWidth;
  let obj = frameId(stateFromStores[15]);
  const items = [FramesStore];
  const items1 = [frameId];
  stateFromStores = obj.useStateFromStores(items, () => metroImportDefault(metroRequire(FramesStore.getFrame(frameId))), items1);
  const items2 = [windowWidth, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = conjureAppPictureInPictureLayout;
    return obj.getPictureInPictureSize(windowWidth, stateFromStores);
  }, items2);
  const obj2 = { size: memo };
  const tmp3 = windowWidth(stateFromStores[16]);
  const merged = Object.assign(frameId);
  return closure_8(tmp3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPictureInPictures() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  useFloatConjureAppsOffScreenDefault();
  const obj2 = conjureAppPictureInPictureFrames;
  const conjureAppPictureInPictureFrameIds = obj2.useConjureAppPictureInPictureFrameIds();
  if (cResult[0] !== conjureAppPictureInPictureFrameIds) {
    let tmp4 = null;
    if (conjureAppPictureInPictureFrameIds.length > 0) {
      const obj3 = { frameIds: conjureAppPictureInPictureFrameIds };
      tmp4 = metroImportAll(closure_11, obj3);
    }
    cResult[0] = conjureAppPictureInPictureFrameIds;
    cResult[1] = tmp4;
    tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ConjureAppPictureInPictures() {
  useFloatConjureAppsOffScreenDefault();
  const obj = conjureAppPictureInPictureFrames;
  const conjureAppPictureInPictureFrameIds = obj.useConjureAppPictureInPictureFrameIds();
  let tmp2 = null;
  if (conjureAppPictureInPictureFrameIds.length > 0) {
    const obj2 = { frameIds: conjureAppPictureInPictureFrameIds };
    tmp2 = metroImportAll(closure_11, obj2);
  }
  return tmp2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/background_frames/native/ConjureAppPictureInPictures.tsx");

export default tmp4;
