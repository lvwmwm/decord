// Module ID: 9682
// Function ID: 75337
// Name: useTileEntranceAnimatedStyle
// Dependencies: [31, 27, 4468, 4467, 9683, 33, 4130, 689, 3991, 4131, 1273, 4542, 44, 4665, 566, 9684, 9868, 9886, 8556, 4126, 1212, 8330, 8777, 4660, 9042, 1450, 8025, 9686, 2]

// Module 9682 (useTileEntranceAnimatedStyle)
import importAllResult from "result";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import IMAGE_CAROUSEL_TILE_HEIGHT from "IMAGE_CAROUSEL_TILE_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
const require = arg1;
function useTileEntranceAnimatedStyle(arg0) {
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue, arg0];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const fn = function l() {
    let obj = {};
    obj = { duration: 300 };
    const value = sharedValue.get();
    obj.easing = sharedValue(outer1_2[10]).STANDARD_EASING;
    obj.opacity = sharedValue(outer1_2[9]).withTiming(value, obj, "respect-motion-settings");
    obj = {};
    const obj2 = sharedValue(outer1_2[9]);
    obj.scale = sharedValue(outer1_2[11]).withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withTiming: sharedValue(4131).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1273).STANDARD_EASING, withSpring: sharedValue(4542).withSpring };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = closure_14;
  return sharedValue(3991).useAnimatedStyle(fn);
}
function Tile(onEdit) {
  onEdit = onEdit.onEdit;
  const onRemove = onEdit.onRemove;
  const channelId = onEdit.channelId;
  let flag = onEdit.highlightThumbnails;
  if (flag === undefined) {
    flag = false;
  }
  let upload = onEdit.upload;
  let c4;
  let description;
  let id;
  let item;
  let isVideo;
  let isImage;
  let isThumbnail;
  flag = undefined;
  let stateFromStores;
  let callback;
  let callback1;
  let c15;
  let tmp = callback();
  c4 = tmp;
  description = upload.description;
  id = upload.id;
  item = upload.item;
  isVideo = upload.isVideo;
  isImage = upload.isImage;
  isThumbnail = upload.isThumbnail;
  onRemove(channelId[12])(item.platform === onEdit(channelId[13]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (flag) {
    flag = true === isThumbnail;
  }
  let obj = onEdit(channelId[14]);
  let items = [item];
  stateFromStores = obj.useStateFromStores(items, () => {
    const upload = item.getUpload(channelId, id, id.ChannelMessage);
    let spoiler;
    if (null != upload) {
      spoiler = upload.spoiler;
    }
    return null != spoiler && spoiler;
  });
  let items1 = [isVideo, isImage, flag];
  callback = upload.useCallback(() => {
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
  let items2 = [onRemove, id];
  callback1 = upload.useCallback(() => {
    let tmp;
    if (null != onRemove) {
      tmp = onRemove(id);
    }
    return tmp;
  }, items2);
  let items3 = [channelId, onRemove, onEdit, upload, id];
  const items4 = [callback1];
  const callback2 = upload.useCallback(() => {
    onRemove(channelId[15])({
      channelId,
      onRemove,
      onEdit(arg0) {
        let tmp;
        if (null != outer1_0) {
          tmp = outer1_0(outer1_6, arg0);
        }
        return tmp;
      },
      upload
    });
  }, items3);
  let uri = item.id;
  const callback3 = upload.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      callback1();
    }
  }, items4);
  if (null == uri) {
    uri = item.uri;
  }
  const tmp9Result = c15(uri);
  c15 = tmp9Result;
  const items5 = [callback, tmp9Result, description, , , , , , , ];
  ({ uri: arr6[3], filename: arr6[4] } = item);
  items5[5] = isImage;
  items5[6] = isThumbnail;
  items5[7] = isVideo;
  items5[8] = stateFromStores;
  items5[9] = tmp;
  obj = { name: "remove" };
  const callback4 = upload.useCallback(() => {
    let height;
    let width;
    const tmp = callback();
    ({ width, height } = tmp);
    let obj = { style: items };
    items = [_undefined.tileContainer, { width, height }, c15];
    obj = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: tmp.maxWidth, fileName: item.filename, borderRadius: onRemove(channelId[7]).radii.md };
    const items1 = [flag(onRemove(channelId[16]), obj), , ];
    let tmp4 = null;
    if (isThumbnail) {
      obj = { style: _undefined.footerRightContainer };
      const obj1 = { source: onRemove(channelId[17]), size: onEdit(channelId[10]).Icon.Sizes.SMALL_14 };
      obj.children = flag(onEdit(channelId[10]).Icon, obj1);
      tmp4 = flag(_undefined, obj);
    }
    items1[1] = tmp4;
    const obj2 = { style: _undefined.decorationsContainer };
    let tmp14 = null;
    if (stateFromStores) {
      const obj3 = { style: _undefined.spoilerOverlay };
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
        const obj5 = { variant: "text-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: _undefined.altTagText };
        const intl = onEdit(channelId[20]).intl;
        obj5.children = intl.string(onEdit(channelId[20]).t.QEW81z);
        tmp21 = flag(onEdit(channelId[19]).Text, obj5);
      }
    }
    const items3 = [tmp21, ];
    let tmp29 = null;
    if (isVideo) {
      const obj6 = { style: _undefined.iconContainer, children: flag(onEdit(channelId[21]).PlayIcon, { size: "xxs", color: "white" }) };
      tmp29 = flag(_undefined, obj6);
    }
    items3[1] = tmp29;
    obj4.children = items3;
    items2[1] = stateFromStores(_undefined, obj4);
    let tmp36 = null;
    if (stateFromStores) {
      const obj7 = { style: _undefined.iconContainer, children: flag(onEdit(channelId[22]).EyeIcon, { size: "xxs", color: "white" }) };
      tmp36 = flag(_undefined, obj7);
    }
    items2[2] = tmp36;
    obj2.children = items2;
    items1[2] = stateFromStores(_undefined, obj2);
    obj.children = items1;
    return stateFromStores(onRemove(channelId[8]).View, obj);
  }, items5);
  let intl = onEdit(channelId[20]).intl;
  obj.label = intl.string(onEdit(channelId[20]).t.kFwAsa);
  const items6 = [obj];
  obj = {};
  let obj1 = { accessibilityRole: "button" };
  const intl2 = onEdit(channelId[20]).intl;
  let obj2 = {};
  const filename = item.filename;
  let str = "";
  let str2 = "";
  if (null != filename) {
    str2 = filename;
  }
  obj2.name = str2;
  obj1.accessibilityLabel = intl2.formatToPlainString(onEdit(channelId[20]).t.MJHFt9, obj2);
  const intl3 = onEdit(channelId[20]).intl;
  obj1.accessibilityHint = intl3.string(onEdit(channelId[20]).t.QtJ1c5);
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
  const items8 = [flag(onEdit(channelId[23]).PressableOpacity, obj1), ];
  let obj3 = { accessibilityRole: "button" };
  const intl4 = onEdit(channelId[20]).intl;
  let obj4 = {};
  const filename2 = item.filename;
  if (null != filename2) {
    str = filename2;
  }
  obj4.name = str;
  obj3.accessibilityLabel = intl4.formatToPlainString(onEdit(channelId[20]).t.FxKgb3, obj4);
  obj3.style = tmp.closeButton;
  obj3.onPress = callback1;
  obj3.hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };
  let obj5 = { style: items9 };
  items9 = [tmp.closeContainer, tmp9Result];
  let obj6 = { source: onRemove(channelId[24]), size: onEdit(channelId[10]).Icon.Sizes.MEDIUM, color: onRemove(channelId[7]).unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon };
  obj5.children = flag(onEdit(channelId[10]).Icon, obj6);
  obj3.children = flag(onRemove(channelId[8]).View, obj5);
  items8[1] = flag(onEdit(channelId[23]).PressableOpacity, obj3);
  obj.children = items8;
  return stateFromStores(c4, obj);
}
function CustomScrollView(arg0) {
  let closure_0 = importAllResult.useRef(0);
  let closure_1 = importAllResult.useRef(0);
  const ref = importAllResult.useRef(null);
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
  let obj = {};
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
({ View: closure_4, StyleSheet, ScrollView: closure_5 } = get_ActivityIndicator);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = IMAGE_CAROUSEL_TILE_HEIGHT.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = IMAGE_CAROUSEL_TILE_HEIGHT.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = IMAGE_CAROUSEL_TILE_HEIGHT.IMAGE_CAROUSEL_TILE_HEIGHT;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { container: { width: "100%" }, pressableContainer: { marginHorizontal: 4 } };
obj = { position: "relative", minWidth: 60, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.md - 1 };
obj.tileContainer = obj;
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["flex"] = 1;
_createForOfIteratorHelperLoose["flexDirection"] = "row";
_createForOfIteratorHelperLoose["justifyContent"] = "space-between";
_createForOfIteratorHelperLoose["alignItems"] = "flex-end";
_createForOfIteratorHelperLoose["padding"] = 4;
obj.decorationsContainer = _createForOfIteratorHelperLoose;
let obj2 = { borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, borderStyle: "solid", borderWidth: 2, borderRadius: 10 };
obj.highlightedTileContainer = obj2;
let obj3 = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
obj.closeButton = obj3;
obj.scrollview = { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING };
let obj4 = { height: 20, width: 20, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM_LIGHTBOX };
obj.closeContainer = obj4;
obj.closeButtonIcon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj5 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.altTagText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, lineHeight: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, textTransform: "uppercase" };
let obj6 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, lineHeight: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, textTransform: "uppercase" };
obj.iconContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.spoilerOverlay = {};
const obj9 = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "center", alignContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 4, borderRadius: 20, opacity: 0.85 };
obj.footerRightContainer = obj9;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_4 };
const obj8 = {};
const memoResult = importAllResult.memo((arg0) => {
  let attachments;
  let channelId;
  let headerElement;
  let highlightThumbnails;
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  let callback;
  let importAllResult;
  let tmp2 = null != attachments;
  if (tmp2) {
    tmp2 = attachments.length > 0;
  }
  if (!tmp2) {
    tmp2 = null != headerElement;
  }
  let items = [channelId];
  callback = importAllResult.useCallback((arg0) => {
    highlightThumbnails(callback[26]).remove(channelId, arg0, outer1_6.ChannelMessage);
  }, items);
  const items1 = [channelId, callback];
  importAllResult = importAllResult.useCallback((arg0, arg1) => {
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
  obj = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list" };
  const intl = channelId(callback[20]).intl;
  obj.accessibilityLabel = intl.string(channelId(callback[20]).t.RhtzFe);
  const items3 = [headerElement, ];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((uniqueId) => outer1_11(outer1_16, { channelId, highlightThumbnails, onEdit: closure_3, onRemove: callback, upload: uniqueId }, uniqueId.uniqueId));
  }
  items3[1] = mapped;
  obj.children = items3;
  obj.children = closure_12(CustomScrollView, obj);
  return closure_11(closure_4, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export { useTileEntranceAnimatedStyle };
