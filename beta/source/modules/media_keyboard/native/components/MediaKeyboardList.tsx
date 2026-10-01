// Module ID: 10106
// Function ID: 10107
// Name: MediaKeyboardList
// Dependencies: [32, 19, 17, 1480, 1609, 6572, 5045, 21, 4836, 576, 4566, 10107, 10110, 1482, 1613, 1479, 5994, 6045, 8853, 5463, 12, 10111, 10118, 10120, 9782, 10121, 5459, 6493, 1115, 2]

// Module 10106 (MediaKeyboardList)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 8853 */;
import DeviceMediaDefault from "DeviceMedia" /* 10107 */;
import MediaKeyboardItem from "MediaKeyboardItem" /* 10111 */;
import MediaKeyboardFooterDefault from "MediaKeyboardFooter" /* 10118 */;
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice" /* 10120 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DimensionsStore from "DimensionsStore" /* 1480 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const MediaKeyboardItemDefault = MediaKeyboardItem;
let first;

let obj2;
let tmp2;
const ReanimatedRexport = tmp2(4566);
const NativeModules = react_native.NativeModules;
const NativeEventEmitter = react_native.NativeEventEmitter;
let closure_7 = MediaKeyboardConstants.InAppCameraUsedCameraPreviewTypes;
let closure_8 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
const jsx = Fragment.jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
let obj = { listContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
let closure_14 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let __initData = { code: "function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_16 = { code: "function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
const memoResult = react.memo(function MediaKeyboardList(channel) {
  let closure_15;
  let intl;
  let items10;
  let items11;
  let num3;
  let prop;
  let tmp21;
  let tmp22;
  let tmp38;
  let totalNumItems;
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
  __initData = tmp4[1];
  let obj2 = draftType(onPressCamera[11]);
  const assets = obj2.useAssets();
  let tmp9 = channel;
  let obj3 = channel(onPressCamera[12]);
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
    let obj = draftType(onPressCamera[11]);
    let obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj2);
    let addListenerResult;
    const obj3 = uploadLimit;
    if (uploadLimit != null) {
      addListenerResult = obj3.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          const obj = draftType(onPressCamera[11]);
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
  const obj4 = channel(onPressCamera[13]);
  let closure_19 = obj4.useAppEntryKey();
  const top = draftType(onPressCamera[14])().top;
  const height = draftType(onPressCamera[15])({ ignoreKeyboard: true }).height;
  let result = height * includedUploadIds;
  let c21 = result;
  const diff = height - channel(onPressCamera[16]).NAV_BAR_HEIGHT_MULTILINE - top;
  let c22 = diff;
  const obj5 = channel(onPressCamera[17]);
  const bottomSheetInternal = obj5.useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedIndex = bottomSheetInternal.animatedIndex;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  let minimum = first1.minimum;
  let closure_24 = tmp18;
  const maximum = first1.maximum;
  const obj6 = channel(onPressCamera[10]);
  class G {
    constructor() {
      return animatedSnapPoints.get();
    }
  }
  G.__closure = { animatedSnapPoints };
  G.__workletHash = 7279123713809;
  G.__initData = __initData;
  const fn = function $(arg0, arg1) {
    let tmp9;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual;
    const tmp = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
      first = arg0[0];
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
  };
  fn.__closure = { cheapWorkletArrayShallowEqual: channel(onPressCamera[18]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[10]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  fn.__workletHash = 4619753074319;
  fn.__initData = assets;
  ({ cheapWorkletArrayShallowEqual: channel(onPressCamera[18]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[10]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff });
  const animatedReaction = obj6.useAnimatedReaction(G, fn);
  [tmp21, tmp22] = onAttachPress(onPressItem.useState(false), 2);
  let c1 = tmp22;
  const tmp20 = onAttachPress(onPressItem.useState(false), 2);
  const obj8 = channel(onPressCamera[10]);
  const sharedValue = obj8.useSharedValue(false);
  const fn2 = function i() {
    return animatedIndex.get();
  };
  fn2.__closure = { animatedIndex };
  fn2.__workletHash = 8982138292467;
  fn2.__initData = ref;
  const fn3 = function s(arg0) {
    const tmp = arg0 > 0.1 && !sharedValue.get();
    if (tmp) {
      const result = sharedValue.set(true);
      const obj = channel(onPressCamera[10]);
      obj.runOnJS(c1)(true);
    }
  };
  const obj9 = channel(onPressCamera[10]);
  fn3.__closure = { latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp22 };
  fn3.__workletHash = 7990574449734;
  fn3.__initData = photoPermissionStatus;
  ({ latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp22 });
  const animatedReaction1 = obj9.useAnimatedReaction(fn2, fn3);
  const tmp25 = disableWhenReachedLimit();
  if (flag) {
    const tmp9Result = tmp9(onPressCamera[19]);
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
        const obj3 = channel(onPressCamera[21]);
        if (obj3.isMediaCameraNode(node)) {
          const _HermesInternal4 = HermesInternal;
          combined = "" + acc + "-camera";
        } else {
          const tmp6Result = channel(onPressCamera[21]);
          if (tmp6Result.isAttachFilesNode(node)) {
            const _HermesInternal3 = HermesInternal;
            combined = "" + acc + "-attach";
          } else {
            const tmp6Result2 = channel(onPressCamera[21]);
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
  width = tmp6(tmp7[15])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items7);
  if (tmp21) {
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
  const tmp9Result3 = tmp9(onPressCamera[24]);
  const modalDismissGuardRefreshControl = tmp9Result3.useModalDismissGuardRefreshControl();
  const obj11 = {
    photoPermissionStatus,
    photosEmpty: tmp38,
    showCameraButton: flag,
    onPressCamera() {
      return onPressCamera(onManageLimited.TAKE_A_PHOTO_BUTTON);
    },
    onManageLimited,
    onPressPrivacySettings: draftType(onPressCamera[26])
  };
  tmp38 = null != assets;
  const getMediaEmptyStateComponentOrNull = tmp9(tmp7[25]).getMediaEmptyStateComponentOrNull;
  tmp9(onPressCamera[25]);
  if (tmp38) {
    tmp38 = 0 === assets.edges.length;
  }
  let mediaEmptyStateComponentOrNull = getMediaEmptyStateComponentOrNull(obj11);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp40;
    let tmp6Result = tmp6(tmp7[27]);
    const tmp43 = flag2;
    if (photoPermissionStatus === LIMITED) {
      tmp40 = callback5;
    }
    const obj12 = { renderHeader: tmp40, headerSize: num3, style: items10, renderItem: callback3, sections: items11, itemSize: memo1, inActionSheet: true, refreshControl: modalDismissGuardRefreshControl, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: callback2, onScroll: callback, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: intl.string(tmp9(onPressCamera[28]).t.XONG6A), showsVerticalScrollIndicator: false, footerSize: tmp9(onPressCamera[22]).FOOTER_HEIGHT, renderFooter: callback4, chunkBase: minimum, batchesToRender: prop };
    num3 = 0;
    if (photoPermissionStatus === LIMITED) {
      num3 = first2;
    }
    items10 = [memo2, tmp25.listContainer];
    items11 = [memo.length];
    intl = tmp9(tmp7[28]).intl;
    prop = undefined;
    if (!tmp21) {
      prop = tmp9(tmp7[27]).MINIMUM_BATCHES_TO_RENDER;
    }
    mediaEmptyStateComponentOrNull = tmp43(tmp6Result, obj12);
  }
  return mediaEmptyStateComponentOrNull;
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;
