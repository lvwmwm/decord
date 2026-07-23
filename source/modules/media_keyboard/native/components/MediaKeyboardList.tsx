// Module ID: 9662
// Function ID: 75246
// Name: NativeModules
// Dependencies: [57, 31, 27, 1451, 1552, 5188, 4344, 33, 4130, 689, 3991, 9663, 9666, 1453, 1557, 1450, 5084, 5189, 9423, 4687, 22, 9667, 9673, 9675, 9676, 4683, 7588, 1212, 2]

// Module 9662 (NativeModules)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "getSystemLocale";
import closure_6 from "_createForOfIteratorHelperLoose";
import { InAppCameraUsedCameraPreviewTypes as closure_7 } from "DRAG_HANDLE";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_8 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { NativePermissionStatus } from "NativePermissionStatus";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let NativeEventEmitter;
let NativeModules;
const require = arg1;
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
obj.listContainer = obj;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
let closure_14 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let closure_15 = { code: "function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_16 = { code: "function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
const memoResult = importAllResult.memo(function MediaKeyboardList(channel) {
  channel = channel.channel;
  let draftType = channel.draftType;
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
  let ref;
  let first;
  let closure_15;
  let assets;
  let itemsPerRow;
  let itemsPageSizeRef;
  let closure_19;
  let height;
  let c21;
  let c22;
  let animatedSnapPoints;
  let c24;
  flag = undefined;
  let c26;
  let memo;
  let callback1;
  let width;
  let maximum;
  let closure_31;
  ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp3 = onAttachPress(onPressItem.useState(null), 2);
  first = tmp3[0];
  closure_15 = tmp3[1];
  let obj = draftType(onPressCamera[11]);
  assets = obj.useAssets();
  let obj1 = channel(onPressCamera[12]);
  const mediaKeyboardItemsPerRow = obj1.useMediaKeyboardItemsPerRow();
  itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const NativePermissionManager = onLongPressItem.NativePermissionManager;
    const photoAuthorization = NativePermissionManager.requestPhotoAuthorization();
    photoAuthorization.then((arg0) => {
      outer1_15(arg0);
    });
  }, []);
  let items1 = [first, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    let addListenerResult;
    let obj = draftType(onPressCamera[11]);
    obj = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj);
    if (null != uploadLimit) {
      addListenerResult = uploadLimit.addListener("photoLibraryChanged", () => {
        if (outer1_13.current) {
          let obj = draftType(onPressCamera[11]);
          obj = { batchSize: outer1_18.current, extensions: outer1_9 };
          obj.refreshAssets(obj);
        }
      });
    }
    const channel = addListenerResult;
    return () => {
      if (null != addListenerResult) {
        addListenerResult.remove();
      }
    };
  }, items1);
  closure_19 = channel(onPressCamera[13]).useAppEntryKey();
  height = draftType(onPressCamera[15])({ ignoreKeyboard: true }).height;
  let result = height * includedUploadIds;
  c21 = result;
  const diff = height - channel(onPressCamera[16]).NAV_BAR_HEIGHT_MULTILINE - draftType(onPressCamera[14])().top;
  c22 = diff;
  let obj3 = channel(onPressCamera[13]);
  const bottomSheetInternal = channel(onPressCamera[17]).useBottomSheetInternal();
  animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const tmp12 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp12[0];
  maximum = first1.minimum;
  c24 = tmp14;
  const obj4 = channel(onPressCamera[17]);
  class V {
    constructor() {
      return animatedSnapPoints.get();
    }
  }
  V.__closure = { animatedSnapPoints };
  V.__workletHash = 7279123713809;
  V.__initData = closure_15;
  class G {
    constructor(arg0, arg1) {
      obj = channel(onPressCamera[18]);
      tmp = undefined;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(channel, tmp)) {
        tmp2 = channel;
        tmp3 = onPressCamera;
        num = 10;
        obj2 = channel(onPressCamera[10]);
        tmp4 = c24;
        obj = {};
        num2 = 0;
        first = channel[0];
        runOnJSResult = obj2.runOnJS(c24);
        tmp6 = height;
        if (null == first) {
          first = c21;
        }
        obj.minimum = tmp6 - first;
        num3 = 1;
        tmp9 = channel[channel.length - 1];
        tmp8 = height;
        if (null == tmp9) {
          tmp9 = c22;
        }
        obj.maximum = tmp8 - tmp9;
        tmp5Result = runOnJSResult(obj);
      }
      return;
    }
  }
  obj = { cheapWorkletArrayShallowEqual: channel(onPressCamera[18]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[10]).runOnJS, setBottomSheetState: tmp14, windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  G.__closure = obj;
  G.__workletHash = 4619753074319;
  G.__initData = assets;
  let animatedReaction = channel(onPressCamera[10]).useAnimatedReaction(V, G);
  const tmp16 = (function useHasMediaKeyboardBottomSheetExpanded(animatedIndex) {
    let closure_0 = animatedIndex;
    let tmp = onAttachPress(onPressItem.useState(false), 2);
    const draftType = tmp2;
    let obj = channel(onPressCamera[10]);
    const sharedValue = obj.useSharedValue(false);
    const fn = function s() {
      return animatedIndex.get();
    };
    fn.__closure = { animatedIndex };
    fn.__workletHash = 8982138292467;
    fn.__initData = ref;
    const fn2 = function i(arg0) {
      let tmp = arg0 > 0.1;
      if (tmp) {
        tmp = !sharedValue.get();
      }
      if (tmp) {
        const result = sharedValue.set(true);
        channel(onPressCamera[10]).runOnJS(closure_1)(true);
        const obj = channel(onPressCamera[10]);
      }
    };
    obj = { latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp2 };
    fn2.__closure = obj;
    fn2.__workletHash = 7990574449734;
    fn2.__initData = first;
    const animatedReaction = channel(onPressCamera[10]).useAnimatedReaction(fn, fn2);
    return tmp[0];
  })(bottomSheetInternal.animatedIndex);
  const obj5 = channel(onPressCamera[10]);
  if (flag) {
    flag = channel(onPressCamera[19]).isImageCaptureIntentSupported();
    const obj7 = channel(onPressCamera[19]);
  }
  let length;
  if (null != assets) {
    length = assets.edges.length;
  }
  let num2 = 0;
  if (null != length) {
    num2 = length;
  }
  let num3 = 0;
  if (flag) {
    num3 = 1;
  }
  const sum = num2 + num3;
  c26 = sum;
  let items2 = [assets, itemsPerRow, flag];
  memo = onPressItem.useMemo(() => {
    if (flag) {
      const obj = { type: "camera" };
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (null == assets) {
      const items2 = [];
      const _Array = Array;
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(Array(3 * itemsPerRow - items1.length).fill(null), arraySpreadResult);
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      return draftType(onPressCamera[20]).chunk(items2, itemsPerRow);
    } else {
      let edges;
      if (null != assets) {
        edges = assets.edges;
      }
      if (null == edges) {
        edges = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(edges, HermesBuiltin.arraySpread(items1, 0));
      return draftType(onPressCamera[20]).chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = onPressItem.useCallback(() => {
    onPressCamera(onManageLimited.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = onPressItem.useCallback(() => {
    let obj = draftType(onPressCamera[11]);
    obj = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj);
  }, items4);
  const callback3 = onPressItem.useCallback((arg0, rowIndex) => flag2(draftType(onPressCamera[21]), { draftType, rowIndex, totalNumItems: c26, channel, numPerRow: itemsPerRow, items: memo[rowIndex], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: callback1, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: flag2 }, (function keyExtractor(arr, rowIndex) {
    return arr.reduce((arg0, node) => {
      if (null == node) {
        return arg0;
      } else {
        if (obj3.isMediaCameraNode(node)) {
          const _HermesInternal4 = HermesInternal;
          let combined = "" + arg0 + "-camera";
        } else {
          if (obj.isAttachFilesNode(node)) {
            const _HermesInternal3 = HermesInternal;
            combined = "" + arg0 + "-attach";
          } else {
            if (obj2.isViewAllPhotosNode(node)) {
              const _HermesInternal2 = HermesInternal;
              combined = "" + arg0 + "-view-all";
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + arg0 + "-" + node.node.image.uri;
            }
            obj2 = channel(onPressCamera[21]);
          }
          obj = channel(onPressCamera[21]);
        }
        obj3 = channel(onPressCamera[21]);
      }
    }, rowIndex.toString());
  })(memo[rowIndex], rowIndex)), items5);
  width = draftType(onPressCamera[15])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = onPressItem.useMemo(() => {
    const result = (width - (channel(onPressCamera[21]).PARENT_PADDING + channel(onPressCamera[21]).CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + channel(onPressCamera[21]).SEPARATOR_SIZE;
  }, items6);
  const callback4 = onPressItem.useCallback(() => flag2(draftType(onPressCamera[22]), { disabled: flag2, onViewAll }), items7);
  if (tmp16) {
    maximum = first1.maximum;
  }
  const items8 = [maximum];
  const memo2 = onPressItem.useMemo(() => ({ height: maximum }), items8);
  const tmp29 = onAttachPress(onPressItem.useState(() => 32 + 36 * onViewAll.getState().byAppEntry[closure_19].fontScale), 2);
  closure_31 = tmp29[1];
  const items9 = [onManageLimited];
  const callback5 = onPressItem.useCallback(() => flag2(draftType(onPressCamera[23]), { onPress: onManageLimited, onHeightChange: closure_31 }), items9);
  const tmp17 = disableWhenReachedLimit();
  obj = { photoPermissionStatus: first };
  let tmp31 = null != assets;
  if (tmp31) {
    tmp31 = 0 === assets.edges.length;
  }
  obj.photosEmpty = tmp31;
  obj.showCameraButton = flag;
  obj.onPressCamera = function onPressCamera() {
    return onPressCamera(onManageLimited.TAKE_A_PHOTO_BUTTON);
  };
  obj.onManageLimited = onManageLimited;
  obj.onPressPrivacySettings = draftType(onPressCamera[25]);
  let mediaEmptyStateComponentOrNull = channel(onPressCamera[24]).getMediaEmptyStateComponentOrNull(obj);
  if (null == mediaEmptyStateComponentOrNull) {
    obj1 = {};
    let tmp33;
    if (tmp28) {
      tmp33 = callback5;
    }
    obj1.renderHeader = tmp33;
    let num4 = 0;
    if (tmp28) {
      num4 = tmp29[0];
    }
    obj1.headerSize = num4;
    const items10 = [memo2, tmp17.listContainer];
    obj1.style = items10;
    obj1.renderItem = callback3;
    const items11 = [memo.length];
    obj1.sections = items11;
    obj1.itemSize = memo1;
    obj1.inActionSheet = true;
    obj1.preserveScrollMomentum = true;
    obj1.automaticallyAdjustsScrollIndicatorInsets = false;
    obj1.keyboardDismissMode = "none";
    obj1.onEndReached = callback2;
    obj1.onScroll = callback;
    obj1.endReachedThreshold = 400;
    obj1.accessibilityRole = "list";
    const intl = channel(onPressCamera[27]).intl;
    obj1.accessibilityLabel = intl.string(channel(onPressCamera[27]).t.XONG6A);
    obj1.showsVerticalScrollIndicator = false;
    obj1.footerSize = channel(onPressCamera[22]).FOOTER_HEIGHT;
    obj1.renderFooter = callback4;
    obj1.chunkBase = maximum;
    let prop;
    if (!tmp16) {
      prop = channel(onPressCamera[26]).MINIMUM_BATCHES_TO_RENDER;
    }
    obj1.batchesToRender = prop;
    mediaEmptyStateComponentOrNull = flag2(draftType(onPressCamera[26]), obj1);
    const tmp39 = flag2;
    const tmp42 = draftType(onPressCamera[26]);
  }
  return mediaEmptyStateComponentOrNull;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;
