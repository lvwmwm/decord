// Module ID: 10526
// Function ID: 10527
// Name: ImageCarousel
// Dependencies: [19, 17, 7701, 8208, 10527, 21, 5014, 575, 5095, 5254, 1187, 5637, 38, 8211, 504, 10528, 1113, 13756, 8818, 5624, 8848, 7137, 6980, 11111, 7106, 1491, 9778, 10530, 8210, 2]
// Exports: useTileEntranceAnimatedStyle

// Module 10526 (ImageCarousel)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useWindowDimensions from "useWindowDimensions" /* 1491 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import AssetRegistryDefault from "AssetRegistry" /* 7106 */;
import DraftStore from "DraftStore" /* 7701 */;
import Upload from "Upload" /* 8210 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9778 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10528 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10530 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 11111 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8208 */;
import ImageCarouselConstants from "ImageCarouselConstants" /* 10527 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let current;

let StyleSheet;
let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let rect;
let rect1;
let size;
let unpackModuleId;
function Tile(onEdit) {
  let FxKgb3;
  let Icon;
  let MJHFt9;
  let description;
  let formatToPlainString;
  let formatToPlainString2;
  let id;
  let intl2;
  let intl4;
  let isImage;
  let isThumbnail;
  let isVideo;
  let item;
  let items3;
  let items4;
  let obj4;
  let str;
  let str2;
  let tmp12;
  onEdit = onEdit.onEdit;
  const onRemove = onEdit.onRemove;
  const channelId = onEdit.channelId;
  let flag = onEdit.highlightThumbnails;
  if (flag === undefined) {
    flag = false;
  }
  let upload = onEdit.upload;
  id = undefined;
  let tmp = closure_13();
  ({ description, id } = upload);
  ({ item, isVideo, isImage, isThumbnail } = upload);
  const tmp4 = onRemove(channelId[12]);
  tmp4(item.platform === onEdit(channelId[13]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  let obj = onEdit(channelId[14]);
  const items = [UploadAttachmentStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    upload = UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
    let flag;
    if (upload != null) {
      flag = upload.spoiler;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [onRemove, id];
  const items2 = [channelId, onRemove, onEdit, upload, id];
  const callback = upload.useCallback(() => {
    let tmpResult;
    if (onRemove != null) {
      tmpResult = tmp(id);
    }
    return tmpResult;
  }, items1);
  let uri = item.id;
  const callback1 = upload.useCallback(() => {
    const obj = {
      channelId,
      onRemove,
      onEdit(arg0) {
        let tmpResult;
        if (onEdit != null) {
          tmpResult = tmp(id, arg0);
        }
        return tmpResult;
      },
      upload
    };
    const tmp = showUploadPreviewActionSheetDefault(obj);
  }, items2);
  const tmp11 = ImageCarouselTile;
  if (uri == null) {
    uri = item.uri;
  }
  const obj2 = { itemKey: uri, uri: item.uri, fileName: item.filename, isImage, isVideo, isHighlighted: flag, accessibilityLabel: formatToPlainString(MJHFt9, { name: str }), accessibilityHint: intl2.string(onEdit(channelId[16]).t.QtJ1c5), removeAccessibilityLabel: formatToPlainString2(FxKgb3, { name: str2 }), onPress: tmp12, onRemove: callback, children: items3 };
  if (flag) {
    flag = true === isThumbnail;
  }
  const intl = tmp5(tmp3[16]).intl;
  formatToPlainString = intl.formatToPlainString;
  str = item.filename;
  MJHFt9 = tmp5(tmp3[16]).t.MJHFt9;
  if (str == null) {
    str = "";
  }
  intl2 = tmp5(tmp3[16]).intl;
  const intl3 = tmp5(tmp3[16]).intl;
  formatToPlainString2 = intl3.formatToPlainString;
  str2 = item.filename;
  FxKgb3 = tmp5(tmp3[16]).t.FxKgb3;
  if (str2 == null) {
    str2 = "";
  }
  if (isImage) {
    tmp12 = callback1;
  }
  let tmp13 = null;
  if (isThumbnail) {
    const obj3 = { style: tmp.footerRightContainer, children: closure_11(Icon, obj4) };
    obj4 = { source: onRemove(channelId[17]), size: onEdit(channelId[10]).Icon.Sizes.SMALL_14 };
    Icon = tmp5(tmp3[10]).Icon;
    tmp13 = closure_11(id, obj3);
  }
  items3 = [tmp13, ];
  let tmp17 = null;
  const obj5 = { style: tmp.decorationsContainer, children: items4 };
  if (stateFromStores) {
    const obj6 = { style: tmp.spoilerOverlay };
    tmp17 = closure_11(tmp2(tmp3[18]), obj6);
  }
  items4 = [tmp17, , ];
  let tmp19 = null;
  if (null != description) {
    let length;
    if (description != null) {
      length = description.length;
    }
    tmp19 = null;
    if (length > 0) {
      const obj7 = { variant: "text-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: tmp.altTagText, children: intl4.string(onEdit(channelId[16]).t.QEW81z) };
      const Text = tmp5(tmp3[19]).Text;
      intl4 = tmp5(tmp3[16]).intl;
      tmp19 = closure_11(Text, obj7);
    }
  }
  const items5 = [tmp19, ];
  let tmp22 = null;
  if (isVideo) {
    const obj8 = { style: tmp.iconContainer, children: closure_11(onEdit(channelId[20]).PlayIcon, { size: "xxs", color: "white" }) };
    tmp22 = closure_11(tmp16, obj8);
  }
  items5[1] = tmp22;
  items4[1] = closure_12(id, { children: items5 });
  let tmp24 = null;
  if (stateFromStores) {
    const obj9 = { style: tmp.iconContainer, children: closure_11(onEdit(channelId[21]).EyeIcon, { size: "xxs", color: "white" }) };
    tmp24 = closure_11(tmp16, obj9);
  }
  items4[2] = tmp24;
  items3[1] = closure_12(id, obj5);
  return closure_12(tmp11, obj2);
}
class ImageCarouselTile {
  constructor(arg0) {
    let Icon;
    let View;
    let View2;
    let accessibilityHint;
    let accessibilityLabel;
    let children;
    let diff;
    let fileName;
    let intl;
    let isHighlighted;
    let isImage;
    let isVideo;
    let itemKey;
    let items3;
    let items4;
    let items5;
    let items6;
    let items7;
    let obj10;
    let obj7;
    let obj9;
    let onPress;
    let onRemove;
    let removeAccessibilityLabel;
    let tmp4;
    let uri;
    ({ isImage, isVideo, isHighlighted } = arg0);
    ({ itemKey, uri, fileName } = arg0);
    if (isHighlighted === undefined) {
      isHighlighted = false;
    }
    ({ onPress, onRemove } = arg0);
    ({ accessibilityLabel, accessibilityHint, removeAccessibilityLabel, children } = arg0);
    const tmp = closure_13();
    const tmp2 = isImage || isVideo;
    if (isHighlighted) {
      diff = tmp3 - 4;
      tmp4 = tmp3;
    } else {
      tmp4 = tmp3;
      diff = tmp3;
    }
    let tmp6;
    if (tmp2) {
      tmp6 = tmp4;
    }
    let items = [onRemove];
    let sharedValue;
    const callback = react.useCallback((nativeEvent) => {
      if ("remove" === nativeEvent.nativeEvent.actionName) {
        onRemove();
      }
    }, items);
    let obj = sharedValue(5095);
    sharedValue = obj.useSharedValue(0);
    const items1 = [sharedValue, itemKey];
    const effect = react.useEffect(() => {
      const result = sharedValue.set(1);
    }, items1);
    let obj2 = sharedValue(5095);
    const fn = function l() {
      let items;
      let obj2;
      let obj4;
      let value;
      let withTiming;
      const obj = { opacity: withTiming(value, obj2, "respect-motion-settings"), transform: items };
      withTiming = timing.withTiming;
      obj2 = { duration: 300, easing: native.STANDARD_EASING };
      timing;
      value = sharedValue.get();
      const obj3 = { scale: obj4.withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings") };
      items = [obj3];
      obj4 = spring;
      return obj;
    };
    let obj3 = { withTiming: sharedValue(5254).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1187).STANDARD_EASING, withSpring: sharedValue(5637).withSpring };
    fn.__closure = obj3;
    fn.__workletHash = 14458898683767;
    fn.__initData = __initData;
    const animatedStyle = obj2.useAnimatedStyle(fn);
    let obj4 = { name: "remove", label: intl.string(sharedValue(1113).t.kFwAsa) };
    intl = sharedValue(1113).intl;
    const items2 = [obj4];
    const obj5 = { accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityActions: items2, onAccessibilityAction: callback, disabled: null == onPress, onPress, style: items3, children: closure_12(View, obj7) };
    items3 = [tmp.pressableContainer, ];
    const PressableOpacity = sharedValue(6980).PressableOpacity;
    const tmp14 = closure_4;
    if (isHighlighted) {
      isHighlighted = tmp.highlightedTileContainer;
    }
    const obj6 = { children: items6 };
    items3[1] = isHighlighted;
    obj7 = { style: items4, children: items5 };
    items4 = [tmp.tileContainer, { width: tmp6, height: diff }, animatedStyle];
    View = ReanimatedRexportDefault.View;
    size = { uri, isImage, isVideo, width: tmp6, height: diff, maxFileWidth: num2, fileName, borderRadius: nativeDefault.radii.md };
    const tmp16 = AttachmentPreviewDefault;
    items5 = [closure_11(tmp16, size), children];
    items6 = [closure_11(PressableOpacity, obj5), ];
    const obj8 = { accessibilityRole: "button", accessibilityLabel: removeAccessibilityLabel, style: tmp.closeButton, onPress: onRemove, hitSlop: { top: 4, bottom: 4, left: 4, right: 4 }, children: closure_11(View2, obj9) };
    const PressableOpacity2 = tmp8(6980).PressableOpacity;
    obj9 = { style: items7, children: closure_11(Icon, obj10) };
    items7 = [tmp.closeContainer, animatedStyle];
    View2 = ReanimatedRexportDefault.View;
    obj10 = { source: AssetRegistryDefault, size: sharedValue(1187).Icon.Sizes.MEDIUM, color: nativeDefault.unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon };
    Icon = tmp8(1187).Icon;
    items6[1] = closure_11(PressableOpacity2, obj8);
    return closure_12(tmp14, obj6);
  }
}
function CustomScrollView(arg0) {
  let callback1;
  let tmp = closure_13();
  react.useRef(0);
  const ref2 = react.useRef(0);
  const ref = react.useRef(null);
  const callback = react.useCallback((current) => {
    current = ref.current;
    const current2 = ref2.current;
    const obj = useWindowDimensions;
    const tmp = ref;
    const tmp2 = current > current || current2 + obj.getWindowDimensions().width > current;
    if (tmp2) {
      const current3 = ref.current;
      if (current3 != null) {
        current3.scrollToEnd();
      }
    }
    tmp.current = current;
  }, []);
  let obj = { ref, onContentSizeChange: callback, onScroll: callback1, scrollEventThrottle: 16, contentContainerStyle: tmp.scrollview };
  callback1 = react.useCallback((nativeEvent) => {
    ref2.current = nativeEvent.nativeEvent.contentOffset.x;
  }, []);
  const merged = Object.assign(arg0);
  return closure_11(closure_5, obj);
}
class ImageCarouselRow {
  constructor(visible) {
    let children;
    let intl;
    let num2;
    let num4;
    let obj3;
    let style;
    visible = visible.visible;
    ({ style, children } = visible);
    const items = [closure_13().container, , ];
    let num = 0;
    const tmp2 = React3;
    if (visible) {
      num = IMAGE_CAROUSEL_TILE_HEIGHT + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    }
    const obj = { height: num, marginTop: num2, marginBottom: num4 };
    num2 = 0;
    if (visible) {
      num2 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
    }
    num4 = 0;
    if (visible) {
      num4 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    }
    items[1] = obj;
    items[2] = style;
    const obj2 = { style: items, children: unpackModuleId(CustomScrollView, obj3) };
    obj3 = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: intl.string(intl5.t.RhtzFe), children };
    intl = intl5.intl;
    return unpackModuleId(tmp2, obj2);
  }
}
let react = react_mod;
({ View: closure_4, StyleSheet, ScrollView: hasOwnProperty } = react_native);
const DraftType = DraftStore.DraftType;
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
const IMAGE_CAROUSEL_TILE_HEIGHT = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%" }, pressableContainer: { marginHorizontal: 4 }, tileContainer: obj2, decorationsContainer: obj3, highlightedTileContainer: obj4, closeButton: rect, scrollview: { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING }, closeContainer: size, closeButtonIcon: obj5, altTagText: obj6, iconContainer: obj7, spoilerOverlay: obj8, footerRightContainer: rect1 };
obj2 = { position: "relative", minWidth: 60, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: nativeDefault.radii.md - 1 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", padding: 4 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, borderStyle: "solid", borderWidth: 2, borderRadius: 10 };
rect = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
size = { height: 20, width: 20, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX };
obj5 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj6 = { paddingHorizontal: nativeDefault.space.PX_4, lineHeight: 20, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: nativeDefault.radii.xs, textTransform: "uppercase" };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_4 };
obj8 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
rect1 = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "center", alignContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 4, borderRadius: 20, opacity: 0.85 };
createStyles(obj);
const authStore3 = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
const memoResult = react.memo(function ImageCarousel(arg0) {
  let attachments;
  let channelId;
  let headerElement;
  let highlightThumbnails;
  let items2;
  let onEdit;
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  react = undefined;
  let tmp = null != attachments && attachments.length > 0;
  let items = [channelId];
  const onRemove = react.useCallback((arg0) => {
    const obj = UploadAttachmentActionCreatorsDefault;
    obj.remove(channelId, arg0, DraftType.ChannelMessage);
  }, items);
  const items1 = [channelId, onRemove];
  react = react.useCallback((arg0, arg1) => {
    if (callback != null) {
      tmp(arg0);
    }
    const items = [arg1];
    const obj = MediaKeyboardUtils;
    obj.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
  }, items1);
  const tmp3 = closure_12;
  const tmp4 = ImageCarouselRow;
  if (!tmp) {
    tmp = null != headerElement;
  }
  let obj = { visible: tmp, children: items2 };
  items2 = [headerElement, ];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((upload) => {
      const obj = { channelId, highlightThumbnails, onEdit, onRemove, upload };
      return unpackModuleId(Tile, obj, upload.uniqueId);
    });
  }
  items2[1] = mapped;
  return tmp3(tmp4, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export function useTileEntranceAnimatedStyle(arg0) {
  let sharedValue;
  const obj = sharedValue(5095);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue, arg0];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const fn = function l() {
    let items;
    let obj2;
    let obj4;
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, obj2, "respect-motion-settings"), transform: items };
    withTiming = timing.withTiming;
    obj2 = { duration: 300, easing: native.STANDARD_EASING };
    timing;
    value = sharedValue.get();
    const obj3 = { scale: obj4.withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings") };
    items = [obj3];
    obj4 = spring;
    return obj;
  };
  const obj2 = sharedValue(5095);
  fn.__closure = { withTiming: sharedValue(5254).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1187).STANDARD_EASING, withSpring: sharedValue(5637).withSpring };
  fn.__workletHash = 14458898683767;
  fn.__initData = __initData;
  ({ withTiming: sharedValue(5254).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1187).STANDARD_EASING, withSpring: sharedValue(5637).withSpring });
  return obj2.useAnimatedStyle(fn);
}
export { ImageCarouselTile };
export { ImageCarouselRow };
