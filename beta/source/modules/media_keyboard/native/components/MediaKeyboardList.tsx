// Module ID: 10977
// Function ID: 10978
// Name: MediaKeyboardList
// Dependencies: [32, 19, 17, 1483, 1612, 7430, 4999, 21, 4790, 580, 558, 4529, 568, 10978, 10981, 1485, 1616, 1482, 5929, 6895, 9692, 5401, 12, 10982, 10989, 10991, 10533, 10992, 5397, 1119, 7351, 2]

// Module 10977 (MediaKeyboardList)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 580 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import DeviceMediaDefault from "DeviceMedia" /* 10978 */;
import MediaKeyboardItem from "MediaKeyboardItem" /* 10982 */;
import MediaKeyboardFooterDefault from "MediaKeyboardFooter" /* 10989 */;
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice" /* 10991 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1483 */;

const MediaKeyboardItemDefault = MediaKeyboardItem;

require = fn;
get_ActivityIndicator = fn(17);
const NativeModules = get_ActivityIndicator.NativeModules;
const constants = fn(1612).InAppCameraUsedCameraPreviewTypes;
let closure_8 = fn(7430).ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = fn(4999).NativePermissionStatus;
const jsx = fn(21).jsx;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const photoLibraryChanged = "photoLibraryChanged";
const createStyles = fn(4790);
let obj = { listContainer: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 } };
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
const __initData2 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
const __initData3 = { code: "function MediaKeyboardListTsx3(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
const __initData4 = { code: "function MediaKeyboardListTsx4(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedIndex) => {
  _require = animatedIndex;
  let tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2;
  sharedValue = require("ReanimatedRexport").useSharedValue(false);
  let obj = require("ReanimatedRexport");
  const fn = function i() {
    return animatedIndex.get();
  };
  fn.__closure = { animatedIndex };
  fn.__workletHash = 8982138292467;
  fn.__initData = __initData;
  const fn2 = function s(arg0) {
    let tmp = arg0 > 0.1;
    if (tmp) {
      tmp = !sharedValue.get();
    }
    if (tmp) {
      const result = sharedValue.set(true);
      ReanimatedRexport.runOnJS(closure_1)(true);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] };
  fn2.__workletHash = 7990574449734;
  fn2.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return tmp[0];
}) : ((animatedIndex) => {
  _require = animatedIndex;
  let tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2;
  sharedValue = require("ReanimatedRexport").useSharedValue(false);
  let obj = require("ReanimatedRexport");
  const fn = function i() {
    return animatedIndex.get();
  };
  fn.__closure = { animatedIndex };
  fn.__workletHash = 9020222056753;
  fn.__initData = __initData3;
  const fn2 = function s(arg0) {
    let tmp = arg0 > 0.1;
    if (tmp) {
      tmp = !sharedValue.get();
    }
    if (tmp) {
      const result = sharedValue.set(true);
      ReanimatedRexport.runOnJS(closure_1)(true);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] };
  fn2.__workletHash = 7776330836992;
  fn2.__initData = __initData4;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return tmp[0];
});
let closure_19 = { code: "function MediaKeyboardListTsx5(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_20 = { code: "function MediaKeyboardListTsx6(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined)){return;}runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
let __initData5 = { code: "function MediaKeyboardListTsx7(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let __initData6 = { code: "function MediaKeyboardListTsx8(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(onPressCamera[12]).c(74);
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
  const disabled = tmp5;
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
  let tmp8 = onAttachPress(onPressItem.useState(null), 2);
  const first1 = tmp8[0];
  closure_15 = tmp8[1];
  let obj = channel(onPressCamera[12]);
  const tmp7 = onAttachPress;
  const assets = draftType(onPressCamera[13]).useAssets();
  let obj3 = draftType(onPressCamera[13]);
  const mediaKeyboardItemsPerRow = channel(onPressCamera[14]).useMediaKeyboardItemsPerRow();
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
    let tmp14 = items;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[1];
    tmp14 = cResult[2];
  }
  const effect = obj2.useEffect(tmp13, tmp14);
  if (cResult[3] === extensions) {
    if (cResult[4] === itemsPageSizeRef) {
      if (cResult[5] === first1) {
        let tmp16 = cResult[6];
        let tmp17 = cResult[7];
      }
      const effect1 = obj2.useEffect(tmp16, tmp17);
      const appEntryKey = tmp(tmp2[15]).useAppEntryKey();
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { ignoreKeyboard: true };
        cResult[8] = obj4;
        let tmp20 = obj4;
      } else {
        tmp20 = cResult[8];
      }
      const height = tmp10(tmp2[17])(tmp20).height;
      const result = height * includedUploadIds;
      const diff = height - tmp(tmp2[18]).NAV_BAR_HEIGHT_MULTILINE - tmp10(tmp2[16])().top;
      const tmpResult5 = tmp(tmp2[15]);
      const bottomSheetInternal = tmp(tmp2[19]).useBottomSheetInternal();
      const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
      if (cResult[9] === result) {
        if (cResult[10] === diff) {
          let tmp26 = cResult[11];
        }
        [tmp28, tmp29] = tmp7(obj2.useState(tmp26), 2);
        closure_23 = tmp29;
        ({ minimum, maximum } = tmp28);
        const tmp7Result = tmp7(obj2.useState(tmp26), 2);
        function de() {
          return animatedSnapPoints.get();
        }
        const obj5 = { animatedSnapPoints };
        de.__closure = obj5;
        de.__workletHash = 12360214096727;
        de.__initData = height;
        function le(arg0, arg1) {
          if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
            let first = arg0[0];
            const tmp2Result = ReanimatedRexport;
            if (first == null) {
              first = result;
            }
            const obj2 = { minimum: height - first, maximum: null };
            let tmp8 = arg0[arg0.length - 1];
            if (tmp8 == null) {
              tmp8 = diff;
            }
            obj2.maximum = height - tmp8;
            ReanimatedRexport.runOnJS(closure_23)(obj2);
            const runOnJSResult = ReanimatedRexport.runOnJS(closure_23);
          }
        }
        const obj6 = { cheapWorkletArrayShallowEqual: tmp(tmp2[20]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[11]).runOnJS, setBottomSheetState: tmp29, windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
        le.__closure = obj6;
        le.__workletHash = 1362980852395;
        le.__initData = result;
        const animatedReaction = tmp(tmp2[11]).useAnimatedReaction(de, le);
        appEntryKey(tmp25);
        closure_13();
        if (cResult[12] !== tmp4) {
          let result1 = tmp4;
          if (tmp4) {
            result1 = tmp(tmp2[21]).isImageCaptureIntentSupported();
            const tmpResult8 = tmp(tmp2[21]);
          }
          cResult[12] = tmp4;
          cResult[13] = result1;
          let tmp37 = result1;
        } else {
          tmp37 = cResult[13];
        }
        let num11;
        if (assets != null) {
          num11 = assets.edges.length;
        }
        if (num11 == null) {
          num11 = 0;
        }
        let num13 = 0;
        if (tmp37) {
          num13 = 1;
        }
        const sum = num11 + num13;
        if (cResult[14] === assets) {
          if (cResult[15] === itemsPerRow) {
            if (cResult[16] === tmp37) {
              dependencyMap2 = tmp40;
              if (cResult[18] !== onPressCamera) {
                class Te {
                  constructor() {
                    tmp = onPressCamera(closure_7.CAMERA_BUTTON);
                    return;
                  }
                }
                cResult[18] = onPressCamera;
                cResult[19] = Te;
                class Ce {
                  constructor() {
                    obj = closure_1(closure_2[13]);
                    obj1 = { batchSize: itemsPageSizeRef.current, extensions };
                    nextAssetPage = obj.getNextAssetPage(obj1);
                    return;
                  }
                }
              } else {
                class Te {
                  constructor() {
                    tmp = onPressCamera(closure_7.CAMERA_BUTTON);
                    return;
                  }
                }
              }
              handleCameraPress = tmp55;
              if (cResult[20] === extensions) {
                class Te {
                  constructor() {
                    tmp = onPressCamera(closure_7.CAMERA_BUTTON);
                    return;
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  class Oe {
                    constructor(arg0, arg1) {
                      return channel.reduce((acc, node) => {
                        if (null == node) {
                          return acc;
                        } else {
                          if (obj3.isMediaCameraNode(node)) {
                            const _HermesInternal4 = HermesInternal;
                            let combined = "" + acc + "-camera";
                          } else {
                            if (tmp6Result.isAttachFilesNode(node)) {
                              const _HermesInternal3 = HermesInternal;
                              combined = "" + acc + "-attach";
                            } else {
                              if (tmp6Result2.isViewAllPhotosNode(node)) {
                                const _HermesInternal2 = HermesInternal;
                                combined = "" + acc + "-view-all";
                              } else {
                                const _HermesInternal = HermesInternal;
                                combined = "" + acc + "-" + node.node.image.uri;
                              }
                              tmp6Result2 = tmp6(tmp7[23]);
                            }
                            tmp6Result = tmp6(tmp7[23]);
                          }
                          obj3 = channel(onPressCamera[23]);
                        }
                      }, arg1.toString());
                    }
                  }
                  cResult[23] = Oe;
                  const tmp57 = Oe;
                } else {
                  class Oe {
                    constructor(arg0, arg1) {
                      return channel.reduce((acc, node) => {
                        if (null == node) {
                          return acc;
                        } else {
                          if (obj3.isMediaCameraNode(node)) {
                            const _HermesInternal4 = HermesInternal;
                            let combined = "" + acc + "-camera";
                          } else {
                            if (tmp6Result.isAttachFilesNode(node)) {
                              const _HermesInternal3 = HermesInternal;
                              combined = "" + acc + "-attach";
                            } else {
                              if (tmp6Result2.isViewAllPhotosNode(node)) {
                                const _HermesInternal2 = HermesInternal;
                                combined = "" + acc + "-view-all";
                              } else {
                                const _HermesInternal = HermesInternal;
                                combined = "" + acc + "-" + node.node.image.uri;
                              }
                              tmp6Result2 = tmp6(tmp7[23]);
                            }
                            tmp6Result = tmp6(tmp7[23]);
                          }
                          obj3 = channel(onPressCamera[23]);
                        }
                      }, arg1.toString());
                    }
                  }
                }
                Oe = tmp57;
                class Ce {
                  constructor() {
                    obj = closure_1(closure_2[13]);
                    obj1 = { batchSize: itemsPageSizeRef.current, extensions };
                    nextAssetPage = obj.getNextAssetPage(obj1);
                    return;
                  }
                }
                class He {
                  constructor(arg0, arg1) {
                    obj = { draftType, rowIndex: arg1, totalNumItems: closure_24, channel, numPerRow: itemsPerRow, items: closure_25[arg1], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: closure_26, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: uploadDisabled };
                    tmp = closure_1(closure_2[23]);
                    return jsx(tmp, obj, closure_27(closure_25[arg1], arg1));
                  }
                }
                cResult[24] = channel;
                cResult[25] = disableWhenReachedLimit;
                cResult[26] = draftType;
                cResult[27] = tmp55;
                cResult[28] = includedUploadIds;
                cResult[29] = itemsPerRow;
                cResult[30] = onAttachPress;
                cResult[31] = onLongPressItem;
                cResult[32] = onPressItem;
                cResult[33] = onViewAll;
                cResult[34] = tmp40;
                cResult[35] = sum;
                cResult[36] = tmp5;
                cResult[37] = uploadLimit;
                cResult[38] = He;
              }
              class Ce {
                constructor() {
                  obj = closure_1(closure_2[13]);
                  obj1 = { batchSize: itemsPageSizeRef.current, extensions };
                  nextAssetPage = obj.getNextAssetPage(obj1);
                  return;
                }
              }
              cResult[20] = extensions;
              cResult[21] = itemsPageSizeRef;
              cResult[22] = Ce;
            }
          }
        }
        if (tmp37) {
          class Oe {
            constructor(arg0, arg1) {
              return channel.reduce((acc, node) => {
                if (null == node) {
                  return acc;
                } else {
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    let combined = "" + acc + "-camera";
                  } else {
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                      tmp6Result2 = tmp6(tmp7[23]);
                    }
                    tmp6Result = tmp6(tmp7[23]);
                  }
                  obj3 = channel(onPressCamera[23]);
                }
              }, arg1.toString());
            }
          }
          tmp41[0] = { type: "camera" };
          let tmp10Result = tmp41;
        } else {
          class Oe {
            constructor(arg0, arg1) {
              return channel.reduce((acc, node) => {
                if (null == node) {
                  return acc;
                } else {
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    let combined = "" + acc + "-camera";
                  } else {
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                      tmp6Result2 = tmp6(tmp7[23]);
                    }
                    tmp6Result = tmp6(tmp7[23]);
                  }
                  obj3 = channel(onPressCamera[23]);
                }
              }, arg1.toString());
            }
          }
        }
        if (null != assets) {
          class Oe {
            constructor(arg0, arg1) {
              return channel.reduce((acc, node) => {
                if (null == node) {
                  return acc;
                } else {
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    let combined = "" + acc + "-camera";
                  } else {
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                      tmp6Result2 = tmp6(tmp7[23]);
                    }
                    tmp6Result = tmp6(tmp7[23]);
                  }
                  obj3 = channel(onPressCamera[23]);
                }
              }, arg1.toString());
            }
          }
          if (assets != null) {
            class Oe {
              constructor(arg0, arg1) {
                return channel.reduce((acc, node) => {
                  if (null == node) {
                    return acc;
                  } else {
                    if (obj3.isMediaCameraNode(node)) {
                      const _HermesInternal4 = HermesInternal;
                      let combined = "" + acc + "-camera";
                    } else {
                      if (tmp6Result.isAttachFilesNode(node)) {
                        const _HermesInternal3 = HermesInternal;
                        combined = "" + acc + "-attach";
                      } else {
                        if (tmp6Result2.isViewAllPhotosNode(node)) {
                          const _HermesInternal2 = HermesInternal;
                          combined = "" + acc + "-view-all";
                        } else {
                          const _HermesInternal = HermesInternal;
                          combined = "" + acc + "-" + node.node.image.uri;
                        }
                        tmp6Result2 = tmp6(tmp7[23]);
                      }
                      tmp6Result = tmp6(tmp7[23]);
                    }
                    obj3 = channel(onPressCamera[23]);
                  }
                }, arg1.toString());
              }
            }
          }
          if (tmp49 == null) {
            class Oe {
              constructor(arg0, arg1) {
                return channel.reduce((acc, node) => {
                  if (null == node) {
                    return acc;
                  } else {
                    if (obj3.isMediaCameraNode(node)) {
                      const _HermesInternal4 = HermesInternal;
                      let combined = "" + acc + "-camera";
                    } else {
                      if (tmp6Result.isAttachFilesNode(node)) {
                        const _HermesInternal3 = HermesInternal;
                        combined = "" + acc + "-attach";
                      } else {
                        if (tmp6Result2.isViewAllPhotosNode(node)) {
                          const _HermesInternal2 = HermesInternal;
                          combined = "" + acc + "-view-all";
                        } else {
                          const _HermesInternal = HermesInternal;
                          combined = "" + acc + "-" + node.node.image.uri;
                        }
                        tmp6Result2 = tmp6(tmp7[23]);
                      }
                      tmp6Result = tmp6(tmp7[23]);
                    }
                    obj3 = channel(onPressCamera[23]);
                  }
                }, arg1.toString());
              }
            }
          }
          const items1 = [];
          class Ce {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { batchSize: itemsPageSizeRef.current, extensions };
              nextAssetPage = obj.getNextAssetPage(obj1);
              return;
            }
          }
          class He {
            constructor(arg0, arg1) {
              obj = { draftType, rowIndex: arg1, totalNumItems: closure_24, channel, numPerRow: itemsPerRow, items: closure_25[arg1], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: closure_26, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: uploadDisabled };
              tmp = closure_1(closure_2[23]);
              return jsx(tmp, obj, closure_27(closure_25[arg1], arg1));
            }
          }
          HermesBuiltin.arraySpread(tmp49, HermesBuiltin.arraySpread(tmp10Result, 0));
          tmp10Result = tmp10(tmp2[22]);
          let chunkResult = tmp10Result.chunk(items1, itemsPerRow);
        } else {
          class Oe {
            constructor(arg0, arg1) {
              return channel.reduce((acc, node) => {
                if (null == node) {
                  return acc;
                } else {
                  if (obj3.isMediaCameraNode(node)) {
                    const _HermesInternal4 = HermesInternal;
                    let combined = "" + acc + "-camera";
                  } else {
                    if (tmp6Result.isAttachFilesNode(node)) {
                      const _HermesInternal3 = HermesInternal;
                      combined = "" + acc + "-attach";
                    } else {
                      if (tmp6Result2.isViewAllPhotosNode(node)) {
                        const _HermesInternal2 = HermesInternal;
                        combined = "" + acc + "-view-all";
                      } else {
                        const _HermesInternal = HermesInternal;
                        combined = "" + acc + "-" + node.node.image.uri;
                      }
                      tmp6Result2 = tmp6(tmp7[23]);
                    }
                    tmp6Result = tmp6(tmp7[23]);
                  }
                  obj3 = channel(onPressCamera[23]);
                }
              }, arg1.toString());
            }
          }
          const _Array = Array;
          class Ce {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { batchSize: itemsPageSizeRef.current, extensions };
              nextAssetPage = obj.getNextAssetPage(obj1);
              return;
            }
          }
          class He {
            constructor(arg0, arg1) {
              obj = { draftType, rowIndex: arg1, totalNumItems: closure_24, channel, numPerRow: itemsPerRow, items: closure_25[arg1], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: closure_26, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: uploadDisabled };
              tmp = closure_1(closure_2[23]);
              return jsx(tmp, obj, closure_27(closure_25[arg1], arg1));
            }
          }
          HermesBuiltin.arraySpread(Array(3 * itemsPerRow - tmp10Result.length).fill(null), tmp45);
          const ArrayResult = Array(3 * itemsPerRow - tmp10Result.length);
          chunkResult = tmp10(tmp2[22]).chunk(tmp42, itemsPerRow);
          const tmp10Result2 = tmp10(tmp2[22]);
        }
        cResult[14] = assets;
        cResult[15] = itemsPerRow;
        cResult[16] = tmp37;
        cResult[17] = chunkResult;
        const tmpResult7 = tmp(tmp2[11]);
      }
      const obj7 = { minimum: result, maximum: diff };
      cResult[9] = result;
      cResult[10] = diff;
      cResult[11] = obj7;
      tmp26 = obj7;
      const tmpResult6 = tmp(tmp2[19]);
    }
  }
  class K {
    constructor() {
      if (closure_14 !== extensions.AUTHORIZED) {
        if (tmp !== extensions.LIMITED) {
          return;
        }
      }
      obj = draftType(onPressCamera[13]);
      obj1 = { batchSize: itemsPageSizeRef.current, extensions };
      refreshAssetsResult = obj.refreshAssets(obj1);
      obj3 = disableWhenReachedLimit;
      addListenerResult = undefined;
      if (disableWhenReachedLimit != null) {
        tmp4 = uploadDisabled;
        addListenerResult = obj3.addListener(uploadDisabled, () => {
          if (ref.current) {
            const obj2 = { batchSize: ref2.current, extensions };
            draftType(onPressCamera[13]).refreshAssets(obj2);
            const obj = draftType(onPressCamera[13]);
          }
        });
      }
      closure_0 = addListenerResult;
      return () => {
        if (addListenerResult != null) {
          addListenerResult.remove();
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
  tmp17 = items2;
  tmp16 = K;
}) : ((channel) => {
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
  c26 = undefined;
  let memo;
  let callback1;
  let width;
  let onHeightChange;
  const ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp4 = onAttachPress(onPressItem.useState(null), 2);
  const photoPermissionStatus = tmp4[0];
  closure_15 = tmp4[1];
  const assets = draftType(onPressCamera[13]).useAssets();
  let obj2 = draftType(onPressCamera[13]);
  const tmp3 = onAttachPress;
  const mediaKeyboardItemsPerRow = channel(onPressCamera[14]).useMediaKeyboardItemsPerRow();
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
    draftType(onPressCamera[13]).refreshAssets({ batchSize: itemsPageSizeRef.current, extensions });
    let addListenerResult;
    if (uploadLimit != null) {
      addListenerResult = uploadLimit.addListener(disableWhenReachedLimit, () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          draftType(onPressCamera[13]).refreshAssets(obj2);
          const obj = draftType(onPressCamera[13]);
        }
      });
    }
    channel = addListenerResult;
    return () => {
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items1);
  let obj3 = channel(onPressCamera[14]);
  closure_19 = channel(onPressCamera[15]).useAppEntryKey();
  const height = draftType(onPressCamera[17])({ ignoreKeyboard: true }).height;
  let result = height * includedUploadIds;
  __initData5 = result;
  const diff = height - channel(onPressCamera[18]).NAV_BAR_HEIGHT_MULTILINE - draftType(onPressCamera[16])().top;
  __initData6 = diff;
  const obj4 = channel(onPressCamera[15]);
  const bottomSheetInternal = channel(onPressCamera[19]).useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  let maximum = first1.minimum;
  closure_24 = tmp18;
  const obj5 = channel(onPressCamera[19]);
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
      tmp = arg1;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[20]);
      if (!obj.cheapWorkletArrayShallowEqual(channel, tmp)) {
        tmp2Result = tmp2(tmp3[11]);
        tmp4 = closure_24;
        tmp6 = height;
        first = channel[0];
        runOnJSResult = tmp2Result.runOnJS(closure_24);
        if (first == null) {
          first = closure_21;
        }
        obj1 = { minimum: null, maximum: null };
        obj1.minimum = tmp6 - first;
        num = 1;
        tmp8 = channel[channel.length - 1];
        if (tmp8 == null) {
          tmp8 = closure_22;
        }
        obj1.maximum = tmp6 - tmp8;
        tmp5Result = runOnJSResult(obj1);
      }
      return;
    }
  }
  const obj6 = channel(onPressCamera[11]);
  U.__closure = { cheapWorkletArrayShallowEqual: channel(onPressCamera[20]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[11]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  U.__workletHash = 1615707814147;
  U.__initData = __initData6;
  const animatedReaction = obj6.useAnimatedReaction(G, U);
  const tmp20 = itemsPageSizeRef(bottomSheetInternal.animatedIndex);
  const obj7 = { cheapWorkletArrayShallowEqual: channel(onPressCamera[20]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[11]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  if (flag) {
    flag = tmp9(tmp7[21]).isImageCaptureIntentSupported();
    const tmp9Result = tmp9(tmp7[21]);
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
    if (flag) {
      const items = [{ type: "camera" }];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (null == assets) {
      const items2 = [];
      const _Array = Array;
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      HermesBuiltin.arraySpread(Array(3 * itemsPerRow - items1.length).fill(null), arraySpreadResult);
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      return _modDef12.chunk(items2, itemsPerRow);
    } else {
      let edges;
      if (tmp != null) {
        edges = tmp.edges;
      }
      if (edges == null) {
        edges = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(edges, HermesBuiltin.arraySpread(items1, 0));
      return _modDef12.chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    onPressCamera(onManageLimited.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = obj.useCallback(() => {
    const nextAssetPage = DeviceMediaDefault.getNextAssetPage({ batchSize: itemsPageSizeRef.current, extensions });
  }, items4);
  const callback3 = obj.useCallback((arg0, rowIndex) => jsx(MediaKeyboardItemDefault, { draftType, rowIndex, totalNumItems, channel, numPerRow: itemsPerRow, items: memo[rowIndex], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: callback1, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: flag2 }, memo[rowIndex].reduce((acc, node) => {
    if (null == node) {
      return acc;
    } else {
      if (obj3.isMediaCameraNode(node)) {
        const _HermesInternal4 = HermesInternal;
        let combined = "" + acc + "-camera";
      } else {
        if (tmp6Result.isAttachFilesNode(node)) {
          const _HermesInternal3 = HermesInternal;
          combined = "" + acc + "-attach";
        } else {
          if (tmp6Result2.isViewAllPhotosNode(node)) {
            const _HermesInternal2 = HermesInternal;
            combined = "" + acc + "-view-all";
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + acc + "-" + node.node.image.uri;
          }
          tmp6Result2 = tmp6(tmp7[23]);
        }
        tmp6Result = tmp6(tmp7[23]);
      }
      obj3 = channel(onPressCamera[23]);
    }
  }, rowIndex.toString())), items5);
  width = tmp6(tmp7[17])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items7);
  if (tmp20) {
    maximum = first1.maximum;
  }
  const items8 = [maximum];
  const memo2 = obj.useMemo(() => ({ height: maximum }), items8);
  const tmp3Result = tmp3(onPressItem.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale), 2);
  onHeightChange = tmp3Result[1];
  const items9 = [onManageLimited];
  const callback5 = obj.useCallback(() => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }), items9);
  const tmp21 = ref();
  const modalDismissGuardRefreshControl = channel(onPressCamera[26]).useModalDismissGuardRefreshControl();
  const tmp9Result3 = channel(onPressCamera[26]);
  const obj8 = { photoPermissionStatus, photosEmpty: null, showCameraButton: null, onPressCamera: null, onManageLimited: null, onPressPrivacySettings: null };
  let tmp32 = null != assets;
  if (tmp32) {
    tmp32 = 0 === assets.edges.length;
  }
  obj8.photosEmpty = tmp32;
  obj8.showCameraButton = flag;
  obj8.onPressCamera = function onPressCamera() {
    return onPressCamera(onManageLimited.TAKE_A_PHOTO_BUTTON);
  };
  obj8.onManageLimited = onManageLimited;
  obj8.onPressPrivacySettings = draftType(onPressCamera[28]);
  let mediaEmptyStateComponentOrNull = channel(onPressCamera[27]).getMediaEmptyStateComponentOrNull(obj8);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp34;
    if (photoPermissionStatus === extensions.LIMITED) {
      tmp34 = callback5;
    }
    const obj9 = { renderHeader: tmp34, headerSize: null, style: null, renderItem: null, sections: null, itemSize: null, inActionSheet: true, refreshControl: null, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: null, onScroll: null, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: null, showsVerticalScrollIndicator: false, footerSize: null, renderFooter: null, chunkBase: null, batchesToRender: null };
    let num3 = 0;
    if (photoPermissionStatus === extensions.LIMITED) {
      num3 = tmp3Result[0];
    }
    obj9.headerSize = num3;
    const items10 = [memo2, tmp21.listContainer];
    obj9.style = items10;
    obj9.renderItem = callback3;
    const items11 = [memo.length];
    obj9.sections = items11;
    obj9.itemSize = memo1;
    obj9.refreshControl = modalDismissGuardRefreshControl;
    obj9.onEndReached = callback2;
    obj9.onScroll = callback;
    const intl = tmp9(tmp7[29]).intl;
    obj9.accessibilityLabel = intl.string(tmp9(tmp7[29]).t.XONG6A);
    obj9.footerSize = tmp9(tmp7[24]).FOOTER_HEIGHT;
    obj9.renderFooter = callback4;
    obj9.chunkBase = maximum;
    let prop;
    if (!tmp20) {
      prop = tmp9(tmp7[30]).MINIMUM_BATCHES_TO_RENDER;
    }
    obj9.batchesToRender = prop;
    mediaEmptyStateComponentOrNull = flag2(tmp6(tmp7[30]), obj9);
    let tmp6Result = tmp6(tmp7[30]);
  }
  return mediaEmptyStateComponentOrNull;
}));
