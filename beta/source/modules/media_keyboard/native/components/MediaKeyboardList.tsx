// Module ID: 10145
// Function ID: 10146
// Name: MediaKeyboardList
// Dependencies: [32, 19, 17, 1486, 1615, 6573, 5046, 21, 4837, 588, 558, 4570, 576, 10146, 10149, 1488, 1619, 1485, 5991, 6038, 8848, 5464, 12, 10150, 10157, 10159, 9698, 10160, 5460, 1127, 6494, 2]

// Module 10145 (MediaKeyboardList)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1615 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5046 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 8848 */;
import DeviceMediaDefault from "DeviceMedia" /* 10146 */;
import MediaKeyboardItem from "MediaKeyboardItem" /* 10150 */;
import MediaKeyboardFooterDefault from "MediaKeyboardFooter" /* 10157 */;
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice" /* 10159 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DimensionsStore from "DimensionsStore" /* 1486 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const MediaKeyboardItemDefault = MediaKeyboardItem;
let _require, channel, handleCameraPress;

let obj2;
let tmp2;
const ReanimatedRexport = tmp2(4570);
const NativeModules = react_native.NativeModules;
const NativeEventEmitter = react_native.NativeEventEmitter;
const constants = MediaKeyboardConstants.InAppCameraUsedCameraPreviewTypes;
let closure_8 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
const jsx = Fragment.jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const photoLibraryChanged = "photoLibraryChanged";
let obj = { listContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
const __initData2 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
const __initData3 = { code: "function MediaKeyboardListTsx3(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
const __initData4 = { code: "function MediaKeyboardListTsx4(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedIndex) => {
  let first;
  let sharedValue;
  let tmp3;
  _require = animatedIndex;
  [first, tmp3] = react.useState(false);
  let closure_1 = tmp3;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(false);
  const fn = function i() {
    return animatedIndex.get();
  };
  fn.__closure = { animatedIndex };
  fn.__workletHash = 8982138292467;
  fn.__initData = __initData;
  const fn2 = function s(arg0) {
    const tmp = arg0 > 0.1 && !sharedValue.get();
    if (tmp) {
      const result = sharedValue.set(true);
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_1)(true);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp3 };
  fn2.__workletHash = 7990574449734;
  fn2.__initData = __initData2;
  ({ latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp3 });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return first;
}) : ((animatedIndex) => {
  let first;
  let sharedValue;
  let tmp3;
  _require = animatedIndex;
  [first, tmp3] = react.useState(false);
  let closure_1 = tmp3;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(false);
  const fn = function i() {
    return animatedIndex.get();
  };
  fn.__closure = { animatedIndex };
  fn.__workletHash = 9020222056753;
  fn.__initData = __initData3;
  const fn2 = function s(arg0) {
    const tmp = arg0 > 0.1 && !sharedValue.get();
    if (tmp) {
      const result = sharedValue.set(true);
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_1)(true);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp3 };
  fn2.__workletHash = 7776330836992;
  fn2.__initData = __initData4;
  ({ latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp3 });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return first;
});
let closure_19 = { code: "function MediaKeyboardListTsx5(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_20 = { code: "function MediaKeyboardListTsx6(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined)){return;}runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
let __initData5 = { code: "function MediaKeyboardListTsx7(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let __initData6 = { code: "function MediaKeyboardListTsx8(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let allowCamera;
  let maximum;
  let minimum;
  let onHeightChange;
  let onPressCamera;
  let tmp14;
  let tmp15;
  let tmp29;
  let tmp30;
  let uploadDisabled;
  let uploadLimit;
  let tmp2 = channel;
  let obj = channel(onPressCamera[12]);
  const cResult = obj.c(74);
  channel = channel.channel;
  const draftType = channel.draftType;
  onPressCamera = channel.onPressCamera;
  const onAttachPress = channel.onAttachPress;
  const onPressItem = channel.onPressItem;
  const onLongPressItem = channel.onLongPressItem;
  const onViewAll = channel.onViewAll;
  const onManageLimited = channel.onManageLimited;
  const includedUploadIds = channel.includedUploadIds;
  const extensions = channel.extensions;
  ({ allowCamera, uploadDisabled, uploadLimit } = channel);
  const disableWhenReachedLimit = channel.disableWhenReachedLimit;
  const disabled = tmp6;
  let obj2 = onPressItem;
  closure_13 = onPressItem.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(nativeEvent) {
      closure_13.current = nativeEvent.nativeEvent.contentOffset.y < 100;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let tmp9 = onAttachPress(obj2.useState(null), 2);
  const first1 = tmp9[0];
  let closure_15 = tmp9[1];
  let obj3 = draftType(tmp3[13]);
  const assets = obj3.useAssets();
  let tmp2Result = tmp2(tmp3[14]);
  const mediaKeyboardItemsPerRow = tmp2Result.useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function z() {
      const NativePermissionManager = NativeModules.NativePermissionManager;
      const photoAuthorization = NativePermissionManager.requestPhotoAuthorization();
      photoAuthorization.then((result) => {
        closure_1_15(result);
      });
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    tmp15 = items;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[1];
    tmp15 = cResult[2];
  }
  const effect = obj2.useEffect(tmp14, tmp15);
  if (cResult[3] === extensions) {
    if (cResult[4] === itemsPageSizeRef) {
      let tmp17;
      let tmp18;
      let tmp21;
      if (cResult[5] === first1) {
        tmp17 = cResult[6];
        tmp18 = cResult[7];
      }
      const effect1 = obj2.useEffect(tmp17, tmp18);
      const tmp2Result5 = tmp2(onPressCamera[15]);
      const appEntryKey = tmp2Result5.useAppEntryKey();
      const _Symbol = Symbol;
      const top = tmp11(tmp3[16])().top;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { ignoreKeyboard: true };
        cResult[8] = obj4;
        tmp21 = obj4;
      } else {
        tmp21 = cResult[8];
      }
      const height = tmp11(tmp3[17])(tmp21).height;
      const result = height * includedUploadIds;
      const diff = height - tmp2(tmp3[18]).NAV_BAR_HEIGHT_MULTILINE - top;
      const tmp2Result6 = tmp2(onPressCamera[19]);
      const bottomSheetInternal = tmp2Result6.useBottomSheetInternal();
      const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
      if (cResult[9] === result) {
        let tmp27;
        let tmp39;
        let chunkResult;
        if (cResult[10] === diff) {
          tmp27 = cResult[11];
        }
        [tmp29, tmp30] = onAttachPress(obj2.useState(tmp27), 2);
        let closure_23 = tmp30;
        ({ minimum, maximum } = tmp29);
        onAttachPress(obj2.useState(tmp27), 2);
        function de() {
          return animatedSnapPoints.get();
        }
        const obj5 = { animatedSnapPoints };
        de.__closure = obj5;
        de.__workletHash = 12360214096727;
        de.__initData = height;
        function le(arg0, arg1) {
          let tmp9;
          const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
          cheapWorkletShallowEqual;
          const tmp = arg1;
          if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
            let first = arg0[0];
            const tmp2Result = ReanimatedRexport;
            const runOnJSResult = tmp2Result.runOnJS(closure_23);
            if (first == null) {
              first = result;
            }
            const obj = { minimum: height - first, maximum: height - tmp9 };
            tmp9 = arg0[arg0.length - 1];
            if (tmp9 == null) {
              tmp9 = diff;
            }
            runOnJSResult(obj);
          }
        }
        const obj6 = { cheapWorkletArrayShallowEqual: tmp2(onPressCamera[20]).cheapWorkletArrayShallowEqual, runOnJS: tmp2(onPressCamera[11]).runOnJS, setBottomSheetState: tmp30, windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
        const useAnimatedReaction = tmp2(tmp3[11]).useAnimatedReaction;
        tmp2(onPressCamera[11]);
        le.__closure = obj6;
        le.__workletHash = 1362980852395;
        le.__initData = result;
        const animatedReaction = useAnimatedReaction(de, le);
        appEntryKey(tmp26);
        closure_13();
        if (cResult[12] !== (undefined === allowCamera || allowCamera)) {
          let result1 = tmp5;
          if (result1) {
            const tmp2Result8 = tmp2(onPressCamera[21]);
            result1 = tmp2Result8.isImageCaptureIntentSupported();
          }
          cResult[12] = undefined === allowCamera || allowCamera;
          cResult[13] = result1;
          tmp39 = result1;
        } else {
          tmp39 = cResult[13];
        }
        let num11;
        if (assets != null) {
          num11 = assets.edges.length;
        }
        if (num11 == null) {
          num11 = 0;
        }
        let num13 = 0;
        if (tmp39) {
          num13 = 1;
        }
        const sum = num11 + num13;
        if (cResult[14] === assets) {
          if (cResult[15] === itemsPerRow) {
            let tmp42;
            if (cResult[16] === tmp39) {
              tmp42 = cResult[17];
            }
            let closure_25 = tmp42;
            if (cResult[18] !== onPressCamera) {
              class Te {
                constructor() {
                  onPressCamera(onManageLimited.CAMERA_BUTTON);
                }
              }
              cResult[18] = onPressCamera;
              cResult[19] = Te;
              class Ce {
                constructor() {
                  const obj = DeviceMediaDefault;
                  const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
                  const nextAssetPage = obj.getNextAssetPage(obj2);
                }
              }
            } else {
              class Te {
                constructor() {
                  onPressCamera(onManageLimited.CAMERA_BUTTON);
                }
              }
            }
            handleCameraPress = tmp56;
            if (cResult[20] === extensions) {
              let tmp58;
              class Te {
                constructor() {
                  onPressCamera(onManageLimited.CAMERA_BUTTON);
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                class Oe {
                  constructor(arr, arg1) {
                    return arr.reduce((acc, node) => {
                      let tmp = acc;
                      if (null != node) {
                        let combined;
                        const obj3 = channel(onPressCamera[23]);
                        if (obj3.isMediaCameraNode(node)) {
                          const _HermesInternal4 = HermesInternal;
                          combined = "" + acc + "-camera";
                        } else {
                          const tmp6Result = channel(onPressCamera[23]);
                          if (tmp6Result.isAttachFilesNode(node)) {
                            const _HermesInternal3 = HermesInternal;
                            combined = "" + acc + "-attach";
                          } else {
                            const tmp6Result2 = channel(onPressCamera[23]);
                            if (tmp6Result2.isViewAllPhotosNode(node)) {
                              const _HermesInternal2 = HermesInternal;
                              combined = "" + acc + "-view-all";
                            } else {
                              const _HermesInternal = HermesInternal;
                              combined = "" + acc + "-" + node.node.image.uri;
                            }
                          }
                        }
                        tmp = combined;
                      }
                      return tmp;
                    }, arg1.toString());
                  }
                }
                cResult[23] = Oe;
                tmp58 = Oe;
              } else {
                class Oe {
                  constructor(arr, arg1) {
                    return arr.reduce((acc, node) => {
                      let tmp = acc;
                      if (null != node) {
                        let combined;
                        const obj3 = channel(onPressCamera[23]);
                        if (obj3.isMediaCameraNode(node)) {
                          const _HermesInternal4 = HermesInternal;
                          combined = "" + acc + "-camera";
                        } else {
                          const tmp6Result = channel(onPressCamera[23]);
                          if (tmp6Result.isAttachFilesNode(node)) {
                            const _HermesInternal3 = HermesInternal;
                            combined = "" + acc + "-attach";
                          } else {
                            const tmp6Result2 = channel(onPressCamera[23]);
                            if (tmp6Result2.isViewAllPhotosNode(node)) {
                              const _HermesInternal2 = HermesInternal;
                              combined = "" + acc + "-view-all";
                            } else {
                              const _HermesInternal = HermesInternal;
                              combined = "" + acc + "-" + node.node.image.uri;
                            }
                          }
                        }
                        tmp = combined;
                      }
                      return tmp;
                    }, arg1.toString());
                  }
                }
              }
              Oe = tmp58;
              class Ce {
                constructor() {
                  const obj = DeviceMediaDefault;
                  const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
                  const nextAssetPage = obj.getNextAssetPage(obj2);
                }
              }
              class He {
                constructor(arg0, rowIndex) {
                  MediaKeyboardItemDefault;
                  return <tmp key={Oe(closure_25[arg1], arg1)} draftType={draftType} rowIndex={arg1} totalNumItems={sum} channel={channel} numPerRow={itemsPerRow} items={closure_25[arg1]} onPressItem={onPressItem} onLongPressItem={onLongPressItem} includedUploadIds={includedUploadIds} uploadLimit={uploadLimit} disableWhenReachedLimit={disableWhenReachedLimit} handleCameraPress={handleCameraPress} handleAttachPress={onAttachPress} handleViewAllPhotosPress={onViewAll} disabled={disabled} />;
                }
              }
              cResult[24] = channel;
              cResult[25] = disableWhenReachedLimit;
              cResult[26] = draftType;
              cResult[27] = tmp56;
              cResult[28] = includedUploadIds;
              cResult[29] = itemsPerRow;
              cResult[30] = onAttachPress;
              cResult[31] = onLongPressItem;
              cResult[32] = onPressItem;
              cResult[33] = onViewAll;
              cResult[34] = tmp42;
              cResult[35] = sum;
              cResult[36] = undefined !== uploadDisabled && uploadDisabled;
              cResult[37] = uploadLimit;
              cResult[38] = He;
            }
            class Ce {
              constructor() {
                const obj = DeviceMediaDefault;
                const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
                const nextAssetPage = obj.getNextAssetPage(obj2);
              }
            }
            cResult[20] = extensions;
            cResult[21] = itemsPageSizeRef;
            cResult[22] = Ce;
          }
        }
        if (tmp39) {
          class Oe {
            constructor(arr, arg1) {
              return arr.reduce((acc, node) => {
                let tmp = acc;
                if (null != node) {
                  let combined;
                  const obj3 = channel(onPressCamera[23]);
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    combined = "" + acc + "-camera";
                  } else {
                    const tmp6Result = channel(onPressCamera[23]);
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      const tmp6Result2 = channel(onPressCamera[23]);
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                    }
                  }
                  tmp = combined;
                }
                return tmp;
              }, arg1.toString());
            }
          }
          tmp43[0] = { type: "camera" };
        } else {
          class Oe {
            constructor(arr, arg1) {
              return arr.reduce((acc, node) => {
                let tmp = acc;
                if (null != node) {
                  let combined;
                  const obj3 = channel(onPressCamera[23]);
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    combined = "" + acc + "-camera";
                  } else {
                    const tmp6Result = channel(onPressCamera[23]);
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      const tmp6Result2 = channel(onPressCamera[23]);
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                    }
                  }
                  tmp = combined;
                }
                return tmp;
              }, arg1.toString());
            }
          }
        }
        if (null != assets) {
          class Oe {
            constructor(arr, arg1) {
              return arr.reduce((acc, node) => {
                let tmp = acc;
                if (null != node) {
                  let combined;
                  const obj3 = channel(onPressCamera[23]);
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    combined = "" + acc + "-camera";
                  } else {
                    const tmp6Result = channel(onPressCamera[23]);
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      const tmp6Result2 = channel(onPressCamera[23]);
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                    }
                  }
                  tmp = combined;
                }
                return tmp;
              }, arg1.toString());
            }
          }
          if (assets != null) {
            class Oe {
              constructor(arr, arg1) {
                return arr.reduce((acc, node) => {
                  let tmp = acc;
                  if (null != node) {
                    let combined;
                    const obj3 = channel(onPressCamera[23]);
                    if (obj3.isMediaCameraNode(node)) {
                      const _HermesInternal4 = HermesInternal;
                      combined = "" + acc + "-camera";
                    } else {
                      const tmp6Result = channel(onPressCamera[23]);
                      if (tmp6Result.isAttachFilesNode(node)) {
                        const _HermesInternal3 = HermesInternal;
                        combined = "" + acc + "-attach";
                      } else {
                        const tmp6Result2 = channel(onPressCamera[23]);
                        if (tmp6Result2.isViewAllPhotosNode(node)) {
                          const _HermesInternal2 = HermesInternal;
                          combined = "" + acc + "-view-all";
                        } else {
                          const _HermesInternal = HermesInternal;
                          combined = "" + acc + "-" + node.node.image.uri;
                        }
                      }
                    }
                    tmp = combined;
                  }
                  return tmp;
                }, arg1.toString());
              }
            }
          }
          if (tmp51 == null) {
            class Oe {
              constructor(arr, arg1) {
                return arr.reduce((acc, node) => {
                  let tmp = acc;
                  if (null != node) {
                    let combined;
                    const obj3 = channel(onPressCamera[23]);
                    if (obj3.isMediaCameraNode(node)) {
                      const _HermesInternal4 = HermesInternal;
                      combined = "" + acc + "-camera";
                    } else {
                      const tmp6Result = channel(onPressCamera[23]);
                      if (tmp6Result.isAttachFilesNode(node)) {
                        const _HermesInternal3 = HermesInternal;
                        combined = "" + acc + "-attach";
                      } else {
                        const tmp6Result2 = channel(onPressCamera[23]);
                        if (tmp6Result2.isViewAllPhotosNode(node)) {
                          const _HermesInternal2 = HermesInternal;
                          combined = "" + acc + "-view-all";
                        } else {
                          const _HermesInternal = HermesInternal;
                          combined = "" + acc + "-" + node.node.image.uri;
                        }
                      }
                    }
                    tmp = combined;
                  }
                  return tmp;
                }, arg1.toString());
              }
            }
          }
          const items1 = [];
          class Ce {
            constructor() {
              const obj = DeviceMediaDefault;
              const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
              const nextAssetPage = obj.getNextAssetPage(obj2);
            }
          }
          class He {
            constructor(arg0, rowIndex) {
              MediaKeyboardItemDefault;
              return <tmp key={Oe(closure_25[arg1], arg1)} draftType={draftType} rowIndex={arg1} totalNumItems={sum} channel={channel} numPerRow={itemsPerRow} items={closure_25[arg1]} onPressItem={onPressItem} onLongPressItem={onLongPressItem} includedUploadIds={includedUploadIds} uploadLimit={uploadLimit} disableWhenReachedLimit={disableWhenReachedLimit} handleCameraPress={handleCameraPress} handleAttachPress={onAttachPress} handleViewAllPhotosPress={onViewAll} disabled={disabled} />;
            }
          }
          HermesBuiltin.arraySpread(items1, tmp51, HermesBuiltin.arraySpread(items1, arr3, 0));
          const tmp11Result = draftType(onPressCamera[22]);
          chunkResult = tmp11Result.chunk(items1, itemsPerRow);
        } else {
          class Oe {
            constructor(arr, arg1) {
              return arr.reduce((acc, node) => {
                let tmp = acc;
                if (null != node) {
                  let combined;
                  const obj3 = channel(onPressCamera[23]);
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    combined = "" + acc + "-camera";
                  } else {
                    const tmp6Result = channel(onPressCamera[23]);
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      const tmp6Result2 = channel(onPressCamera[23]);
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                    }
                  }
                  tmp = combined;
                }
                return tmp;
              }, arg1.toString());
            }
          }
          const _Array = Array;
          class Ce {
            constructor() {
              const obj = DeviceMediaDefault;
              const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
              const nextAssetPage = obj.getNextAssetPage(obj2);
            }
          }
          class He {
            constructor(arg0, rowIndex) {
              MediaKeyboardItemDefault;
              return <tmp key={Oe(closure_25[arg1], arg1)} draftType={draftType} rowIndex={arg1} totalNumItems={sum} channel={channel} numPerRow={itemsPerRow} items={closure_25[arg1]} onPressItem={onPressItem} onLongPressItem={onLongPressItem} includedUploadIds={includedUploadIds} uploadLimit={uploadLimit} disableWhenReachedLimit={disableWhenReachedLimit} handleCameraPress={handleCameraPress} handleAttachPress={onAttachPress} handleViewAllPhotosPress={onViewAll} disabled={disabled} />;
            }
          }
          const ArrayResult = Array(3 * itemsPerRow - arr3.length);
          HermesBuiltin.arraySpread(tmp44, ArrayResult.fill(null), tmp47);
          const tmp11Result2 = draftType(onPressCamera[22]);
          chunkResult = tmp11Result2.chunk(tmp44, itemsPerRow);
        }
        cResult[14] = assets;
        cResult[15] = itemsPerRow;
        cResult[16] = tmp39;
        cResult[17] = chunkResult;
        tmp42 = chunkResult;
      }
      const obj7 = { minimum: result, maximum: diff };
      cResult[9] = result;
      cResult[10] = diff;
      cResult[11] = obj7;
      tmp27 = obj7;
    }
  }
  class K {
    constructor() {
      let ref;
      let ref2;
      let obj = draftType(onPressCamera[13]);
      let obj2 = { batchSize: itemsPageSizeRef.current, extensions };
      obj.refreshAssets(obj2);
      let addListenerResult;
      const obj3 = disableWhenReachedLimit;
      if (disableWhenReachedLimit != null) {
        addListenerResult = obj3.addListener(disabled, () => {
          if (ref.current) {
            const obj2 = { batchSize: ref2.current, extensions };
            const obj = draftType(onPressCamera[13]);
            obj.refreshAssets(obj2);
          }
        });
      }
      channel = addListenerResult;
      return () => {
        const obj = channel;
        if (channel != null) {
          obj.remove();
        }
      };
    }
  }
  const items2 = [first1, itemsPageSizeRef, extensions];
  cResult[3] = extensions;
  cResult[4] = itemsPageSizeRef;
  cResult[5] = first1;
  cResult[6] = K;
  cResult[7] = items2;
  tmp18 = items2;
  tmp17 = K;
}) : ((channel) => {
  let c21;
  let c22;
  let intl;
  let items10;
  let items11;
  let num3;
  let prop;
  let tmp34;
  channel = channel.channel;
  const draftType = channel.draftType;
  const onPressCamera = channel.onPressCamera;
  const onAttachPress = channel.onAttachPress;
  const onPressItem = channel.onPressItem;
  const onLongPressItem = channel.onLongPressItem;
  const onViewAll = channel.onViewAll;
  const onManageLimited = channel.onManageLimited;
  const includedUploadIds = channel.includedUploadIds;
  const extensions = channel.extensions;
  let flag = channel.allowCamera;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.uploadDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const uploadLimit = channel.uploadLimit;
  const disableWhenReachedLimit = channel.disableWhenReachedLimit;
  flag = undefined;
  let c26;
  let memo;
  let callback1;
  let width;
  let onHeightChange;
  let obj = onPressItem;
  const ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp3 = onAttachPress;
  const tmp4 = onAttachPress(onPressItem.useState(null), 2);
  const photoPermissionStatus = tmp4[0];
  let closure_15 = tmp4[1];
  let obj2 = draftType(onPressCamera[13]);
  const assets = obj2.useAssets();
  let tmp9 = channel;
  let obj3 = channel(onPressCamera[14]);
  const mediaKeyboardItemsPerRow = obj3.useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const photoAuthorization = NativePermissionManager.requestPhotoAuthorization();
    photoAuthorization.then((result) => {
      closure_1_15(result);
    });
  }, []);
  let items1 = [photoPermissionStatus, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    let ref2;
    let obj = draftType(onPressCamera[13]);
    let obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj2);
    let addListenerResult;
    const obj3 = uploadLimit;
    if (uploadLimit != null) {
      addListenerResult = obj3.addListener(disableWhenReachedLimit, () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          const obj = draftType(onPressCamera[13]);
          obj.refreshAssets(obj2);
        }
      });
    }
    channel = addListenerResult;
    return () => {
      const obj = channel;
      if (channel != null) {
        obj.remove();
      }
    };
  }, items1);
  const obj4 = channel(onPressCamera[15]);
  closure_19 = obj4.useAppEntryKey();
  const top = draftType(onPressCamera[16])().top;
  const height = draftType(onPressCamera[17])({ ignoreKeyboard: true }).height;
  let result = height * includedUploadIds;
  __initData5 = result;
  const diff = height - channel(onPressCamera[18]).NAV_BAR_HEIGHT_MULTILINE - top;
  __initData6 = diff;
  const obj5 = channel(onPressCamera[19]);
  const bottomSheetInternal = obj5.useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedIndex = bottomSheetInternal.animatedIndex;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  let minimum = first1.minimum;
  let closure_24 = tmp18;
  const maximum = first1.maximum;
  const obj6 = channel(onPressCamera[11]);
  class G {
    constructor() {
      return animatedSnapPoints.get();
    }
  }
  G.__closure = { animatedSnapPoints };
  G.__workletHash = 8374269528981;
  G.__initData = __initData5;
  class U {
    constructor(arg0, arg1) {
      let tmp9;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual;
      const tmp = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        let first = arg0[0];
        const tmp2Result = ReanimatedRexport;
        const runOnJSResult = tmp2Result.runOnJS(closure_24);
        if (first == null) {
          first = c21;
        }
        const obj = { minimum: height - first, maximum: height - tmp9 };
        tmp9 = arg0[arg0.length - 1];
        if (tmp9 == null) {
          tmp9 = c22;
        }
        runOnJSResult(obj);
      }
    }
  }
  U.__closure = { cheapWorkletArrayShallowEqual: channel(onPressCamera[20]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[11]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  U.__workletHash = 1615707814147;
  U.__initData = __initData6;
  ({ cheapWorkletArrayShallowEqual: channel(onPressCamera[20]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[11]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff });
  const animatedReaction = obj6.useAnimatedReaction(G, U);
  const tmp20 = itemsPageSizeRef(animatedIndex);
  const tmp21 = ref();
  if (flag) {
    const tmp9Result = tmp9(onPressCamera[21]);
    flag = tmp9Result.isImageCaptureIntentSupported();
  }
  let num;
  if (assets != null) {
    num = assets.edges.length;
  }
  if (num == null) {
    num = 0;
  }
  let num2 = 0;
  if (flag) {
    num2 = 1;
  }
  const sum = num + num2;
  c26 = sum;
  let items2 = [assets, itemsPerRow, flag];
  memo = obj.useMemo(() => {
    let items1;
    const tmp2 = flag;
    if (tmp2) {
      const items = [{ type: "camera" }];
      items1 = items;
    } else {
      items1 = [];
    }
    if (null == assets) {
      const items2 = [];
      const _Array = Array;
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, items1, 0);
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      HermesBuiltin.arraySpread(items2, ArrayResult.fill(null), arraySpreadResult);
      const obj3 = _modDef12;
      return obj3.chunk(items2, itemsPerRow);
    } else {
      let edges;
      if (assets != null) {
        edges = tmp3.edges;
      }
      if (edges == null) {
        edges = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(items3, edges, HermesBuiltin.arraySpread(items3, items1, 0));
      const obj = _modDef12;
      return obj.chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    onPressCamera(onManageLimited.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = obj.useCallback(() => {
    const obj = DeviceMediaDefault;
    const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj2);
  }, items4);
  const callback3 = obj.useCallback((arg0, rowIndex) => {
    const arr = memo[rowIndex];
    let tmp = MediaKeyboardItemDefault;
    return <tmp key={arr.reduce((acc, node) => {
      let tmp = acc;
      if (null != node) {
        let combined;
        const obj3 = channel(onPressCamera[23]);
        if (obj3.isMediaCameraNode(node)) {
          const _HermesInternal4 = HermesInternal;
          combined = "" + acc + "-camera";
        } else {
          const tmp6Result = channel(onPressCamera[23]);
          if (tmp6Result.isAttachFilesNode(node)) {
            const _HermesInternal3 = HermesInternal;
            combined = "" + acc + "-attach";
          } else {
            const tmp6Result2 = channel(onPressCamera[23]);
            if (tmp6Result2.isViewAllPhotosNode(node)) {
              const _HermesInternal2 = HermesInternal;
              combined = "" + acc + "-view-all";
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + acc + "-" + node.node.image.uri;
            }
          }
        }
        tmp = combined;
      }
      return tmp;
    }, arg1.toString())} draftType={draftType} rowIndex={arg1} totalNumItems={c26} channel={channel} numPerRow={itemsPerRow} items={memo[arg1]} onPressItem={onPressItem} onLongPressItem={onLongPressItem} includedUploadIds={includedUploadIds} uploadLimit={uploadLimit} disableWhenReachedLimit={disableWhenReachedLimit} handleCameraPress={callback1} handleAttachPress={onAttachPress} handleViewAllPhotosPress={onViewAll} disabled={flag2} />;
  }, items5);
  width = tmp6(tmp7[17])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items7);
  if (tmp20) {
    minimum = maximum;
  }
  const items8 = [minimum];
  const memo2 = obj.useMemo(() => ({ height: minimum }), items8);
  const LIMITED = extensions.LIMITED;
  const tmp3Result = tmp3(obj.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale), 2);
  onHeightChange = tmp3Result[1];
  const items9 = [onManageLimited];
  const first2 = tmp3Result[0];
  const callback5 = obj.useCallback(() => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }), items9);
  const tmp9Result3 = tmp9(onPressCamera[26]);
  const modalDismissGuardRefreshControl = tmp9Result3.useModalDismissGuardRefreshControl();
  const obj8 = {
    photoPermissionStatus,
    photosEmpty: tmp34,
    showCameraButton: flag,
    onPressCamera() {
      return onPressCamera(onManageLimited.TAKE_A_PHOTO_BUTTON);
    },
    onManageLimited,
    onPressPrivacySettings: draftType(onPressCamera[28])
  };
  tmp34 = null != assets;
  const getMediaEmptyStateComponentOrNull = tmp9(tmp7[27]).getMediaEmptyStateComponentOrNull;
  tmp9(onPressCamera[27]);
  if (tmp34) {
    tmp34 = 0 === assets.edges.length;
  }
  let mediaEmptyStateComponentOrNull = getMediaEmptyStateComponentOrNull(obj8);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp36;
    let tmp6Result = tmp6(tmp7[30]);
    const tmp39 = flag2;
    if (photoPermissionStatus === LIMITED) {
      tmp36 = callback5;
    }
    const obj9 = { renderHeader: tmp36, headerSize: num3, style: items10, renderItem: callback3, sections: items11, itemSize: memo1, inActionSheet: true, refreshControl: modalDismissGuardRefreshControl, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: callback2, onScroll: callback, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: intl.string(tmp9(onPressCamera[29]).t.XONG6A), showsVerticalScrollIndicator: false, footerSize: tmp9(onPressCamera[24]).FOOTER_HEIGHT, renderFooter: callback4, chunkBase: minimum, batchesToRender: prop };
    num3 = 0;
    if (photoPermissionStatus === LIMITED) {
      num3 = first2;
    }
    items10 = [memo2, tmp21.listContainer];
    items11 = [memo.length];
    intl = tmp9(tmp7[29]).intl;
    prop = undefined;
    if (!tmp20) {
      prop = tmp9(tmp7[30]).MINIMUM_BATCHES_TO_RENDER;
    }
    mediaEmptyStateComponentOrNull = tmp39(tmp6Result, obj9);
  }
  return mediaEmptyStateComponentOrNull;
}));
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;
