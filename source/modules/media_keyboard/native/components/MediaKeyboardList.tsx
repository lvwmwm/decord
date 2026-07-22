// Module ID: 9655
// Function ID: 75205
// Name: NativeModules
// Dependencies: []

// Module 9655 (NativeModules)
let NativeEventEmitter;
let NativeModules;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ NativeEventEmitter, NativeModules } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).InAppCameraUsedCameraPreviewTypes;
let closure_8 = arg1(dependencyMap[5]).ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = arg1(dependencyMap[6]).NativePermissionStatus;
const jsx = arg1(dependencyMap[7]).jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.listContainer = obj;
let closure_12 = arg1(dependencyMap[8]).createStyles(obj);
let closure_13 = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
let closure_14 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let closure_15 = { code: "function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_16 = { code: "function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function MediaKeyboardList(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const draftType = channel.draftType;
  const importDefault = draftType;
  const onPressCamera = channel.onPressCamera;
  const dependencyMap = onPressCamera;
  const onAttachPress = channel.onAttachPress;
  let callback = onAttachPress;
  const onPressItem = channel.onPressItem;
  const onLongPressItem = channel.onLongPressItem;
  const NativeModules = onLongPressItem;
  const onViewAll = channel.onViewAll;
  let closure_6 = onViewAll;
  const onManageLimited = channel.onManageLimited;
  let closure_7 = onManageLimited;
  const includedUploadIds = channel.includedUploadIds;
  let closure_8 = includedUploadIds;
  const extensions = channel.extensions;
  const NativePermissionStatus = extensions;
  let flag = channel.allowCamera;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.uploadDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const jsx = flag2;
  const uploadLimit = channel.uploadLimit;
  const nativeEventEmitter = uploadLimit;
  const disableWhenReachedLimit = channel.disableWhenReachedLimit;
  let callback2 = disableWhenReachedLimit;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let itemsPerRow;
  let itemsPageSizeRef;
  let closure_19;
  let height;
  let result;
  let diff;
  let animatedSnapPoints;
  let tmp14;
  flag = undefined;
  let sum;
  let memo;
  let callback1;
  let width;
  let maximum;
  let closure_31;
  const ref = onPressItem.useRef(true);
  closure_13 = ref;
  const items = [ref];
  callback = importAllResult.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp3 = callback(onPressItem.useState(null), 2);
  const first = tmp3[0];
  closure_14 = first;
  closure_15 = tmp3[1];
  let obj = importDefault(dependencyMap[11]);
  const assets = obj.useAssets();
  closure_16 = assets;
  let obj1 = arg1(dependencyMap[12]);
  const mediaKeyboardItemsPerRow = obj1.useMediaKeyboardItemsPerRow();
  itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = importAllResult.useEffect(() => {
    const NativePermissionManager = onLongPressItem.NativePermissionManager;
    const photoAuthorization = NativePermissionManager.requestPhotoAuthorization();
    photoAuthorization.then((arg0) => {
      callback(arg0);
    });
  }, []);
  const items1 = [first, itemsPageSizeRef, extensions];
  const effect1 = importAllResult.useEffect(() => {
    let addListenerResult;
    let obj = draftType(onPressCamera[11]);
    obj = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj);
    if (null != uploadLimit) {
      addListenerResult = uploadLimit.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          let obj = callback(closure_2[11]);
          obj = { batchSize: ref2.current, extensions: closure_9 };
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
  closure_19 = arg1(dependencyMap[13]).useAppEntryKey();
  height = importDefault(dependencyMap[15])({ ignoreKeyboard: true }).height;
  result = height * closure_8;
  diff = height - arg1(dependencyMap[16]).NAV_BAR_HEIGHT_MULTILINE - importDefault(dependencyMap[14])().top;
  const obj3 = arg1(dependencyMap[13]);
  const bottomSheetInternal = arg1(dependencyMap[17]).useBottomSheetInternal();
  animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const tmp12 = callback(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp12[0];
  maximum = first1.minimum;
  tmp14 = tmp12[1];
  const obj4 = arg1(dependencyMap[17]);
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
        tmp4 = closure_24;
        obj = {};
        num2 = 0;
        first = channel[0];
        runOnJSResult = obj2.runOnJS(closure_24);
        tmp6 = height;
        if (null == first) {
          first = closure_21;
        }
        obj.minimum = tmp6 - first;
        num3 = 1;
        tmp9 = channel[channel.length - 1];
        tmp8 = height;
        if (null == tmp9) {
          tmp9 = closure_22;
        }
        obj.maximum = tmp8 - tmp9;
        tmp5Result = runOnJSResult(obj);
      }
      return;
    }
  }
  obj = { cheapWorkletArrayShallowEqual: arg1(dependencyMap[18]).cheapWorkletArrayShallowEqual, runOnJS: arg1(dependencyMap[10]).runOnJS, setBottomSheetState: tmp14, windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  G.__closure = obj;
  G.__workletHash = 4619753074319;
  G.__initData = closure_16;
  const animatedReaction = arg1(dependencyMap[10]).useAnimatedReaction(V, G);
  const tmp16 = function useHasMediaKeyboardBottomSheetExpanded(animatedIndex) {
    const channel = animatedIndex;
    const tmp = onAttachPress(onPressItem.useState(false), 2);
    const draftType = tmp2;
    let obj = channel(onPressCamera[10]);
    const sharedValue = obj.useSharedValue(false);
    const onPressCamera = sharedValue;
    const fn = function s() {
      return arg0.get();
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
        arg0(sharedValue[10]).runOnJS(tmp2)(true);
        const obj = arg0(sharedValue[10]);
      }
    };
    obj = { latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp2 };
    fn2.__closure = obj;
    fn2.__workletHash = 7990574449734;
    fn2.__initData = first;
    const animatedReaction = channel(onPressCamera[10]).useAnimatedReaction(fn, fn2);
    return tmp[0];
  }(bottomSheetInternal.animatedIndex);
  const obj5 = arg1(dependencyMap[10]);
  if (flag) {
    flag = arg1(dependencyMap[19]).isImageCaptureIntentSupported();
    const obj7 = arg1(dependencyMap[19]);
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
  sum = num2 + num3;
  const items2 = [assets, itemsPerRow, flag];
  memo = importAllResult.useMemo(() => {
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
  const items3 = [onPressCamera];
  callback1 = importAllResult.useCallback(() => {
    onPressCamera(onManageLimited.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  callback2 = importAllResult.useCallback(() => {
    let obj = draftType(onPressCamera[11]);
    obj = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj);
  }, items4);
  const callback3 = importAllResult.useCallback((arg0, rowIndex) => flag2(draftType(onPressCamera[21]), { draftType, rowIndex, totalNumItems: sum, channel, numPerRow: itemsPerRow, items: memo[rowIndex], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: callback1, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: flag2 }, function keyExtractor(arr, rowIndex) {
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
            const obj2 = callback(closure_2[21]);
          }
          const obj = callback(closure_2[21]);
        }
        const obj3 = callback(closure_2[21]);
      }
    }, rowIndex.toString());
  }(memo[rowIndex], rowIndex)), items5);
  width = importDefault(dependencyMap[15])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = importAllResult.useMemo(() => {
    const result = (width - (channel(onPressCamera[21]).PARENT_PADDING + channel(onPressCamera[21]).CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + channel(onPressCamera[21]).SEPARATOR_SIZE;
  }, items6);
  const callback4 = importAllResult.useCallback(() => flag2(draftType(onPressCamera[22]), { disabled: flag2, onViewAll }), items7);
  if (tmp16) {
    maximum = first1.maximum;
  }
  const items8 = [maximum];
  const memo2 = importAllResult.useMemo(() => ({ height: maximum }), items8);
  const tmp29 = callback(onPressItem.useState(() => 32 + 36 * onViewAll.getState().byAppEntry[closure_19].fontScale), 2);
  closure_31 = tmp29[1];
  const items9 = [onManageLimited];
  const callback5 = importAllResult.useCallback(() => flag2(draftType(onPressCamera[23]), { onPress: onManageLimited, onHeightChange: closure_31 }), items9);
  const tmp17 = callback2();
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
  obj.onPressPrivacySettings = importDefault(dependencyMap[25]);
  let mediaEmptyStateComponentOrNull = arg1(dependencyMap[24]).getMediaEmptyStateComponentOrNull(obj);
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
    const intl = arg1(dependencyMap[27]).intl;
    obj1.accessibilityLabel = intl.string(arg1(dependencyMap[27]).t.XONG6A);
    obj1.showsVerticalScrollIndicator = false;
    obj1.footerSize = arg1(dependencyMap[22]).FOOTER_HEIGHT;
    obj1.renderFooter = callback4;
    obj1.chunkBase = maximum;
    let prop;
    if (!tmp16) {
      prop = arg1(dependencyMap[26]).MINIMUM_BATCHES_TO_RENDER;
    }
    obj1.batchesToRender = prop;
    mediaEmptyStateComponentOrNull = jsx(importDefault(dependencyMap[26]), obj1);
    const tmp39 = jsx;
    const tmp42 = importDefault(dependencyMap[26]);
  }
  return mediaEmptyStateComponentOrNull;
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;
