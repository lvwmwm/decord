// Module ID: 10691
// Function ID: 10692
// Name: MediaKeyboardList
// Dependencies: [32, 19, 17, 1494, 1623, 5421, 8042, 21, 5170, 575, 1652, 1705, 10692, 10695, 8065, 1496, 1627, 1493, 5746, 5424, 10242, 8325, 12, 10696, 10703, 10705, 10192, 10706, 8066, 7337, 1113, 2]

// Module 10691 (MediaKeyboardList)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1623 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5421 */;
import NativePermissionConstants from "NativePermissionConstants" /* 8042 */;
import react_nativeDefault from "react-native" /* 8065 */;
import DeviceMediaDefault from "DeviceMedia" /* 10692 */;
import MediaKeyboardItem from "MediaKeyboardItem" /* 10696 */;
import MediaKeyboardFooterDefault from "MediaKeyboardFooter" /* 10703 */;
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice" /* 10705 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DimensionsStore from "DimensionsStore" /* 1494 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const MediaKeyboardItemDefault = MediaKeyboardItem;

let NativeEventEmitter;
let NativeModules;
let obj2;
({ NativeEventEmitter, NativeModules } = react_native);
let closure_6 = MediaKeyboardConstants.InAppCameraUsedCameraPreviewTypes;
let closure_7 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
const jsx = Fragment.jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
let obj = { listContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { code: "(function MediaKeyboardListTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get();})" };
let closure_13 = { code: "(function MediaKeyboardListTsx2(currentIndex){let[latch,scheduleOnRN,setIsExpanded]=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);scheduleOnRN(setIsExpanded,true);}})" };
let closure_14 = { code: "(function MediaKeyboardListTsx3(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.get();})" };
let closure_15 = { code: "(function MediaKeyboardListTsx4(snapPoints,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize]=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(setBottomSheetState,{minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});})" };
const memoResult = react.memo(function MediaKeyboardList(channel) {
  let animatedIndex;
  let animatedSnapPoints;
  let intl;
  let items18;
  let items19;
  let maximum;
  let minimum;
  let num3;
  let prop;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp30;
  let tmp31;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp54;
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
  let c21;
  let memo;
  let callback1;
  let width;
  minimum = undefined;
  let onHeightChange;
  let obj = onPressItem;
  const ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  let tmp3 = onAttachPress;
  let tmp4 = onAttachPress(onPressItem.useState(null), 2);
  const photoPermissionStatus = tmp4[0];
  closure_15 = tmp4[1];
  let tmp7 = onPressCamera;
  let obj2 = draftType(onPressCamera[12]);
  const assets = obj2.useAssets();
  let obj3 = channel(onPressCamera[13]);
  const mediaKeyboardItemsPerRow = obj3.useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const obj = react_nativeDefault;
    const photoAuthorization = obj.requestPhotoAuthorization();
    photoAuthorization.then((result) => {
      closure_1_15(result);
    });
  }, []);
  let items1 = [photoPermissionStatus, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    let ref2;
    let obj = draftType(onPressCamera[12]);
    let obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj2);
    let addListenerResult;
    const obj3 = flag2;
    if (flag2 != null) {
      addListenerResult = obj3.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          const obj = draftType(onPressCamera[12]);
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
  let closure_19 = obj4.useAppEntryKey();
  const top = draftType(onPressCamera[16])().top;
  const height = draftType(onPressCamera[17])({ ignoreKeyboard: true }).height;
  let result = height * onManageLimited;
  const diff = height - channel(onPressCamera[18]).NAV_BAR_HEIGHT_MULTILINE - top;
  const obj5 = channel(onPressCamera[19]);
  const bottomSheetInternal = obj5.useBottomSheetInternal();
  ({ animatedSnapPoints, animatedIndex } = bottomSheetInternal);
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  ({ minimum, maximum } = tmp16[0]);
  let items2 = [photoPermissionStatus, animatedSnapPoints];
  let c0;
  const tmp17 = tmp16[1];
  [tmp19, tmp20] = items2;
  const tmp18 = channel(onPressCamera[10]);
  class MediaKeyboardListTsx3 {
    constructor() {
      return _undefined.get();
    }
  }
  let items3 = [tmp20];
  MediaKeyboardListTsx3.__closure = items3;
  MediaKeyboardListTsx3.__workletHash = 3126759631912;
  MediaKeyboardListTsx3.__initData = tmp19;
  const items4 = [closure_15, , , , , , ];
  const useAnimatedReaction = tmp18.useAnimatedReaction;
  items4[1] = channel(tmp7[20]).cheapWorkletArrayShallowEqual;
  items4[2] = channel(tmp7[11]).scheduleOnRN;
  items4[3] = tmp17;
  items4[4] = height;
  items4[5] = result;
  items4[6] = diff;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items4;
  class MediaKeyboardListTsx4 {
    constructor(arg0, arg1) {
      let tmp7;
      const tmp = arg1;
      const tmp2 = c0;
      if (!tmp2(arg0, tmp)) {
        let first = arg0[0];
        const tmp3 = c1;
        const tmp4 = c2;
        if (first == null) {
          first = c4;
        }
        const obj = { minimum: c3 - first, maximum: c3 - tmp7 };
        tmp7 = arg0[arg0.length - 1];
        if (tmp7 == null) {
          tmp7 = c5;
        }
        tmp3(tmp4, obj);
      }
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  MediaKeyboardListTsx4.__closure = items5;
  MediaKeyboardListTsx4.__workletHash = 5873312059707;
  MediaKeyboardListTsx4.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(MediaKeyboardListTsx3, MediaKeyboardListTsx4);
  [tmp30, tmp31] = tmp3(obj.useState(false), 2);
  const tmp3Result = tmp3(obj.useState(false), 2);
  const tmp9Result = channel(tmp7[10]);
  const sharedValue = tmp9Result.useSharedValue(false);
  const items6 = [disableWhenReachedLimit, animatedIndex];
  c0 = undefined;
  [tmp34, tmp35] = items6;
  const tmp9Result5 = channel(tmp7[10]);
  class MediaKeyboardListTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items7 = [tmp35];
  MediaKeyboardListTsx1.__closure = items7;
  MediaKeyboardListTsx1.__workletHash = 906652326218;
  MediaKeyboardListTsx1.__initData = tmp34;
  const items8 = [ref, sharedValue, , ];
  const useAnimatedReaction2 = tmp9Result5.useAnimatedReaction;
  items8[2] = channel(tmp7[11]).scheduleOnRN;
  items8[3] = tmp31;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp36, tmp37, tmp38, tmp39] = items8;
  class MediaKeyboardListTsx2 {
    constructor(arg0) {
      const tmp = arg0 > 0.1 && !_undefined.get();
      if (tmp) {
        const result = _undefined.set(true);
        _undefined2(c2, true);
      }
    }
  }
  const items9 = [tmp37, tmp38, tmp39];
  MediaKeyboardListTsx2.__closure = items9;
  MediaKeyboardListTsx2.__workletHash = 8642745285010;
  MediaKeyboardListTsx2.__initData = tmp36;
  const animatedReaction2 = useAnimatedReaction2(MediaKeyboardListTsx1, MediaKeyboardListTsx2);
  const tmp41 = uploadLimit();
  if (flag) {
    const tmp9Result6 = channel(tmp7[21]);
    flag = tmp9Result6.isImageCaptureIntentSupported();
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
  c21 = sum;
  const items10 = [assets, itemsPerRow, flag];
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
  }, items10);
  const items11 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    onPressCamera(onViewAll.CAMERA_BUTTON);
  }, items11);
  const items12 = [itemsPageSizeRef, extensions];
  const items13 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = obj.useCallback(() => {
    const obj = DeviceMediaDefault;
    const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj2);
  }, items12);
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
    }, arg1.toString())} draftType={draftType} rowIndex={arg1} totalNumItems={c21} channel={channel} numPerRow={itemsPerRow} items={memo[arg1]} onPressItem={onPressItem} onLongPressItem={onLongPressItem} includedUploadIds={includedUploadIds} uploadLimit={uploadLimit} disableWhenReachedLimit={disableWhenReachedLimit} handleCameraPress={callback1} handleAttachPress={onAttachPress} handleViewAllPhotosPress={onViewAll} disabled={flag2} />;
  }, items13);
  width = tmp6(tmp7[17])().width;
  const items14 = [width, itemsPerRow];
  const items15 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items14);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items15);
  if (tmp30) {
    minimum = maximum;
  }
  const items16 = [minimum];
  const memo2 = obj.useMemo(() => ({ height: minimum }), items16);
  const LIMITED = includedUploadIds.LIMITED;
  const tmp3Result2 = tmp3(obj.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale), 2);
  onHeightChange = tmp3Result2[1];
  const items17 = [onManageLimited];
  const first1 = tmp3Result2[0];
  const callback5 = obj.useCallback(() => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }), items17);
  const tmp9Result7 = channel(tmp7[26]);
  const modalDismissGuardRefreshControl = tmp9Result7.useModalDismissGuardRefreshControl();
  const obj6 = {
    photoPermissionStatus,
    photosEmpty: tmp54,
    showCameraButton: flag,
    onPressCamera() {
      return onPressCamera(onViewAll.TAKE_A_PHOTO_BUTTON);
    },
    onManageLimited,
    onPressPrivacySettings: draftType(tmp7[28])
  };
  tmp54 = null != assets;
  const getMediaEmptyStateComponentOrNull = tmp9(tmp7[27]).getMediaEmptyStateComponentOrNull;
  channel(tmp7[27]);
  if (tmp54) {
    tmp54 = 0 === assets.edges.length;
  }
  let mediaEmptyStateComponentOrNull = getMediaEmptyStateComponentOrNull(obj6);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp56;
    let tmp6Result = tmp6(tmp7[29]);
    const tmp59 = extensions;
    if (photoPermissionStatus === LIMITED) {
      tmp56 = callback5;
    }
    const obj7 = { renderHeader: tmp56, headerSize: num3, style: items18, renderItem: callback3, sections: items19, itemSize: memo1, inActionSheet: true, refreshControl: modalDismissGuardRefreshControl, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: callback2, onScroll: callback, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: intl.string(channel(tmp7[30]).t.XONG6A), showsVerticalScrollIndicator: false, footerSize: channel(tmp7[24]).FOOTER_HEIGHT, renderFooter: callback4, chunkBase: minimum, batchesToRender: prop };
    num3 = 0;
    if (photoPermissionStatus === LIMITED) {
      num3 = first1;
    }
    items18 = [memo2, tmp41.listContainer];
    items19 = [memo.length];
    intl = tmp9(tmp7[30]).intl;
    prop = undefined;
    if (!tmp30) {
      prop = tmp9(tmp7[29]).MINIMUM_BATCHES_TO_RENDER;
    }
    mediaEmptyStateComponentOrNull = tmp59(tmp6Result, obj7);
  }
  return mediaEmptyStateComponentOrNull;
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;
