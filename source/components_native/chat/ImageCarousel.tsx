// Module ID: 9641
// Function ID: 75084
// Name: useTileEntranceAnimatedStyle
// Dependencies: []

// Module 9641 (useTileEntranceAnimatedStyle)
let StyleSheet;
function useTileEntranceAnimatedStyle(arg0) {
  let obj = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  const items = [sharedValue, arg0];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const fn = function l() {
    let obj = {};
    obj = { duration: 300 };
    const value = sharedValue.get();
    obj.easing = sharedValue(closure_2[10]).STANDARD_EASING;
    obj.opacity = sharedValue(closure_2[9]).withTiming(value, obj, "respect-motion-settings");
    obj = {};
    const obj2 = sharedValue(closure_2[9]);
    obj.scale = sharedValue(closure_2[11]).withSpring(sharedValue.get(), { "Null": -6513120128233750000000000000000000000000000000000000000, "Null": 36507222016.22072, "Null": 1962934870 }, "respect-motion-settings");
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[9]).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: arg1(dependencyMap[10]).STANDARD_EASING, withSpring: arg1(dependencyMap[11]).withSpring };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = closure_14;
  return arg1(dependencyMap[8]).useAnimatedStyle(fn);
}
function Tile(onEdit) {
  onEdit = onEdit.onEdit;
  const arg1 = onEdit;
  const onRemove = onEdit.onRemove;
  const importDefault = onRemove;
  const channelId = onEdit.channelId;
  const dependencyMap = channelId;
  let flag = onEdit.highlightThumbnails;
  if (flag === undefined) {
    flag = false;
  }
  const upload = onEdit.upload;
  let tmp;
  let description;
  let DraftType;
  let closure_7;
  let IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  let IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
  let closure_10;
  flag = undefined;
  let stateFromStores;
  let callback2;
  let closure_14;
  let useTileEntranceAnimatedStyle;
  tmp = callback2();
  description = upload.description;
  const id = upload.id;
  DraftType = id;
  const item = upload.item;
  closure_7 = item;
  const isVideo = upload.isVideo;
  IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = isVideo;
  const isImage = upload.isImage;
  IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = isImage;
  const isThumbnail = upload.isThumbnail;
  closure_10 = isThumbnail;
  importDefault(dependencyMap[12])(item.platform === arg1(dependencyMap[13]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (flag) {
    flag = true === isThumbnail;
  }
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => {
    const upload = item.getUpload(channelId, id, id.ChannelMessage);
    let spoiler;
    if (null != upload) {
      spoiler = upload.spoiler;
    }
    return null != spoiler && spoiler;
  });
  const items1 = [isVideo, isImage, flag];
  const callback = importAllResult.useCallback(() => {
    let diff = isThumbnail;
    if (flag) {
      diff = tmp - 4;
    }
    let tmp3 = isVideo;
    if (!isVideo) {
      tmp3 = isImage;
    }
    let num2;
    if (!tmp3) {
      num2 = 192;
    }
    const obj = { width: isThumbnail, height: diff, maxWidth: num2 };
    return obj;
  }, items1);
  callback2 = callback;
  const items2 = [onRemove, id];
  const callback1 = importAllResult.useCallback(() => {
    let tmp;
    if (null != onRemove) {
      tmp = onRemove(id);
    }
    return tmp;
  }, items2);
  closure_14 = callback1;
  const items3 = [channelId, onRemove, onEdit, upload, id];
  const items4 = [callback1];
  callback2 = importAllResult.useCallback(() => {
    onRemove(channelId[15])({
      channelId,
      onRemove,
      onEdit(arg0) {
        let tmp;
        if (null != callback) {
          tmp = callback(closure_6, arg0);
        }
        return tmp;
      },
      upload
    });
  }, items3);
  let uri = item.id;
  const callback3 = importAllResult.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      callback1();
    }
  }, items4);
  if (null == uri) {
    uri = item.uri;
  }
  const tmp9Result = useTileEntranceAnimatedStyle(uri);
  useTileEntranceAnimatedStyle = tmp9Result;
  const items5 = [callback, tmp9Result, description, , , , , , , ];
  ({ uri: arr6[3], filename: arr6[4] } = item);
  items5[5] = isImage;
  items5[6] = isThumbnail;
  items5[7] = isVideo;
  items5[8] = stateFromStores;
  items5[9] = tmp;
  obj = { name: "remove" };
  const callback4 = importAllResult.useCallback(() => {
    let height;
    let width;
    const tmp = callback();
    ({ width, height } = tmp);
    let obj = { style: items };
    const items = [tmp.tileContainer, { width, height }, tmp9Result];
    obj = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: tmp.maxWidth, fileName: item.filename, borderRadius: onRemove(channelId[7]).radii.md };
    const items1 = [flag(onRemove(channelId[16]), obj), , ];
    let tmp4 = null;
    if (isThumbnail) {
      obj = { style: tmp.footerRightContainer };
      const obj1 = { source: onRemove(channelId[17]), size: onEdit(channelId[10]).Icon.Sizes.SMALL_14 };
      obj.children = flag(onEdit(channelId[10]).Icon, obj1);
      tmp4 = flag(tmp, obj);
    }
    items1[1] = tmp4;
    const obj2 = { style: tmp.decorationsContainer };
    let tmp14 = null;
    if (stateFromStores) {
      const obj3 = { style: tmp.spoilerOverlay };
      tmp14 = flag(onRemove(channelId[18]), obj3);
    }
    const items2 = [tmp14, , ];
    const obj4 = {};
    let tmp21 = null;
    if (null != description) {
      let length;
      if (null != description) {
        length = description.length;
      }
      tmp21 = null;
      if (length > 0) {
        const obj5 = { style: tmp.altTagText };
        const intl = onEdit(channelId[20]).intl;
        obj5.children = intl.string(onEdit(channelId[20]).t.QEW81z);
        tmp21 = flag(onEdit(channelId[19]).Text, obj5);
      }
    }
    const items3 = [tmp21, ];
    let tmp29 = null;
    if (isVideo) {
      const obj6 = { style: tmp.iconContainer, children: flag(onEdit(channelId[21]).PlayIcon, { "Bool(false)": "text-overlay-light", "Bool(false)": "text-xs/bold" }) };
      tmp29 = flag(tmp, obj6);
    }
    items3[1] = tmp29;
    obj4.children = items3;
    items2[1] = stateFromStores(tmp, obj4);
    let tmp36 = null;
    if (stateFromStores) {
      const obj7 = { style: tmp.iconContainer, children: flag(onEdit(channelId[22]).EyeIcon, { "Bool(false)": "text-overlay-light", "Bool(false)": "text-xs/bold" }) };
      tmp36 = flag(tmp, obj7);
    }
    items2[2] = tmp36;
    obj2.children = items2;
    items1[2] = stateFromStores(tmp, obj2);
    obj.children = items1;
    return stateFromStores(onRemove(channelId[8]).View, obj);
  }, items5);
  const intl = arg1(dependencyMap[20]).intl;
  obj.label = intl.string(arg1(dependencyMap[20]).t.kFwAsa);
  const items6 = [obj];
  obj = {};
  const obj1 = { accessibilityRole: "button" };
  const intl2 = arg1(dependencyMap[20]).intl;
  const obj2 = {};
  const filename = item.filename;
  let str = "";
  let str2 = "";
  if (null != filename) {
    str2 = filename;
  }
  obj2.name = str2;
  obj1.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[20]).t.MJHFt9, obj2);
  const intl3 = arg1(dependencyMap[20]).intl;
  obj1.accessibilityHint = intl3.string(arg1(dependencyMap[20]).t.QtJ1c5);
  obj1.accessibilityActions = items6;
  obj1.onAccessibilityAction = callback3;
  obj1.disabled = !isImage && !isVideo;
  obj1.onPress = callback2;
  const items7 = [tmp.pressableContainer, ];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items7[1] = flag;
  obj1.style = items7;
  obj1.children = callback4();
  const items8 = [flag(arg1(dependencyMap[23]).PressableOpacity, obj1), ];
  const obj3 = { accessibilityRole: "button" };
  const intl4 = arg1(dependencyMap[20]).intl;
  const obj4 = {};
  const filename2 = item.filename;
  if (null != filename2) {
    str = filename2;
  }
  obj4.name = str;
  obj3.accessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[20]).t.FxKgb3, obj4);
  obj3.style = tmp.closeButton;
  obj3.onPress = callback1;
  obj3.hitSlop = { wideBannerAnimatedUrl: "<string:5259856>", SPACE_32: "<string:3935895705>", np: "flags", linkedUsers: "ti" };
  const obj5 = { style: items9 };
  const items9 = [tmp.closeContainer, tmp9Result];
  const obj6 = { source: importDefault(dependencyMap[24]), size: arg1(dependencyMap[10]).Icon.Sizes.MEDIUM, color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon };
  obj5.children = flag(arg1(dependencyMap[10]).Icon, obj6);
  obj3.children = flag(importDefault(dependencyMap[8]).View, obj5);
  items8[1] = flag(arg1(dependencyMap[23]).PressableOpacity, obj3);
  obj.children = items8;
  return stateFromStores(tmp, obj);
}
function CustomScrollView(arg0) {
  let closure_0 = importAllResult.useRef(0);
  let closure_1 = importAllResult.useRef(0);
  const ref = importAllResult.useRef(null);
  const dependencyMap = ref;
  const callback = importAllResult.useCallback((current) => {
    const obj = ref(ref[25]);
    if (tmp) {
      current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }
    ref.current = current;
  }, []);
  const obj = {};
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
  }, []);
  const merged = Object.assign(arg0);
  obj["ref"] = ref;
  obj["onContentSizeChange"] = callback;
  obj["onScroll"] = callback1;
  obj["scrollEventThrottle"] = 16;
  obj["contentContainerStyle"] = callback2().scrollview;
  return callback(closure_5, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const DraftType = arg1(dependencyMap[2]).DraftType;
let closure_7 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = tmp3.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = tmp3.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = tmp3.IMAGE_CAROUSEL_TILE_HEIGHT;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { container: { width: "100%" }, pressableContainer: { marginHorizontal: 4 } };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[7]).radii.md - 1 };
obj.tileContainer = obj;
obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["flex"] = 1;
obj1["flexDirection"] = "row";
obj1["justifyContent"] = "space-between";
obj1["alignItems"] = "flex-end";
obj1["padding"] = 4;
obj.decorationsContainer = obj1;
const obj2 = { 0: "absolute", 0: 8, 0: 8, 0: null, borderColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.highlightedTileContainer = obj2;
obj.closeButton = { top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN };
obj.scrollview = { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING };
const obj3 = { top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN };
const tmp4 = arg1(dependencyMap[5]);
obj.closeContainer = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SCRIM_LIGHTBOX };
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SCRIM_LIGHTBOX };
obj.closeButtonIcon = { borderRadius: importDefault(dependencyMap[7]).radii.lg, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj5 = { borderRadius: importDefault(dependencyMap[7]).radii.lg, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.altTagText = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_4, lineHeight: 20, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: importDefault(dependencyMap[7]).radii.xs, textTransform: "uppercase" };
const obj6 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_4, lineHeight: 20, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: importDefault(dependencyMap[7]).radii.xs, textTransform: "uppercase" };
obj.iconContainer = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: importDefault(dependencyMap[7]).radii.sm, padding: importDefault(dependencyMap[7]).space.PX_4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.spoilerOverlay = {};
const obj7 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: importDefault(dependencyMap[7]).radii.sm, padding: importDefault(dependencyMap[7]).space.PX_4 };
const obj8 = {};
obj.footerRightContainer = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
let closure_13 = obj1.createStyles(obj);
let closure_14 = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
const obj9 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
const memoResult = importAllResult.memo((arg0) => {
  let attachments;
  let channelId;
  let headerElement;
  let highlightThumbnails;
  ({ attachments, channelId } = arg0);
  const arg1 = channelId;
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  const importDefault = highlightThumbnails;
  let dependencyMap;
  let React;
  let tmp2 = null != attachments;
  if (tmp2) {
    tmp2 = attachments.length > 0;
  }
  if (!tmp2) {
    tmp2 = null != headerElement;
  }
  const items = [channelId];
  const callback = React.useCallback((arg0) => {
    highlightThumbnails(callback[26]).remove(channelId, arg0, ChannelMessage.ChannelMessage);
  }, items);
  dependencyMap = callback;
  const items1 = [channelId, callback];
  React = React.useCallback((arg0, arg1) => {
    if (null != callback) {
      callback(arg0);
    }
    const items = [arg1];
    channelId(callback[27]).addImagesFromPicker(channelId, items, channelId(callback[13]).UploadOrigin.IMAGE_EDITOR);
  }, items1);
  let obj = {};
  const items2 = [callback2().container, ];
  obj = {};
  let num2 = 0;
  if (tmp2) {
    num2 = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
  }
  obj.height = num2;
  let num3 = 0;
  if (tmp2) {
    num3 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
  }
  obj.marginTop = num3;
  let num5 = 0;
  if (tmp2) {
    num5 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  }
  obj.marginBottom = num5;
  items2[1] = obj;
  obj.style = items2;
  obj = {};
  const intl = arg1(dependencyMap[20]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[20]).t.RhtzFe);
  const items3 = [headerElement, ];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((uniqueId) => callback(closure_16, { channelId, highlightThumbnails, onEdit: closure_3, onRemove: callback, upload: uniqueId }, uniqueId.uniqueId));
  }
  items3[1] = mapped;
  obj.children = items3;
  obj.children = closure_12(CustomScrollView, obj);
  return closure_11(closure_4, obj);
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export { useTileEntranceAnimatedStyle };
