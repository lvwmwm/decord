// Module ID: 11631
// Function ID: 11632
// Name: ImageCarousel
// Dependencies: [19, 17, 8725, 8872, 11632, 21, 5306, 575, 1655, 5548, 1187, 5939, 38, 8850, 504, 11633, 1113, 11857, 8611, 5929, 7606, 7635, 7428, 11124, 7648, 1496, 11153, 11635, 8874, 2]

// Module 11631 (ImageCarousel)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import spring_spring from "spring/spring" /* 5939 */;
import Pressables from "Pressables" /* 7428 */;
import AssetRegistryDefault from "AssetRegistry" /* 7648 */;
import DraftStore from "DraftStore" /* 8725 */;
import Upload from "Upload" /* 8874 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 11124 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 11153 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 11633 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 11635 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8872 */;
import ImageCarouselConstants from "ImageCarouselConstants" /* 11632 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
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
function useTileEntranceAnimatedStyle(itemKey) {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = _mod1655;
  const sharedValue = obj.useSharedValue(0);
  let items = [sharedValue, itemKey];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [closure_14, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items1[1] = timing_timing.withTiming;
  items1[2] = sharedValue;
  items1[3] = native.STANDARD_EASING;
  items1[4] = spring_spring.withSpring;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items1;
  class ImageCarouselTsx1 {
    constructor() {
      let items;
      let obj2;
      const obj = { opacity: _undefined(_undefined2.get(), obj2, "respect-motion-settings"), transform: items };
      obj2 = { duration: 300, easing };
      items = [{ scale: _undefined3(_undefined2.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings") }];
      ({ scale: _undefined3(_undefined2.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings") });
      return obj;
    }
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8];
  ImageCarouselTsx1.__closure = items2;
  ImageCarouselTsx1.__workletHash = 15302288183822;
  ImageCarouselTsx1.__initData = tmp4;
  return useAnimatedStyle(ImageCarouselTsx1);
}
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
      const obj7 = { variant: "body-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: tmp.altTagText, children: intl4.string(onEdit(channelId[16]).t.QEW81z) };
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
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let obj4;
    let obj6;
    let obj7;
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
    const items = [onRemove];
    const callback = react.useCallback((nativeEvent) => {
      if ("remove" === nativeEvent.nativeEvent.actionName) {
        onRemove();
      }
    }, items);
    const tmp8 = useTileEntranceAnimatedStyle(itemKey);
    const obj = { name: "remove", label: intl.string(intl5.t.kFwAsa) };
    intl = intl5.intl;
    const items1 = [obj];
    const obj2 = { accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityActions: items1, onAccessibilityAction: callback, disabled: null == onPress, onPress, style: items2, children: authStore2(View, obj4) };
    items2 = [tmp.pressableContainer, ];
    const PressableOpacity = Pressables.PressableOpacity;
    const tmp12 = React3;
    if (isHighlighted) {
      isHighlighted = tmp.highlightedTileContainer;
    }
    const obj3 = { children: items5 };
    items2[1] = isHighlighted;
    obj4 = { style: items3, children: items4 };
    items3 = [tmp.tileContainer, { width: tmp6, height: diff }, tmp8];
    View = _modDef1655.View;
    size = { uri, isImage, isVideo, width: tmp6, height: diff, maxFileWidth: num2, fileName, borderRadius: nativeDefault.radii.md };
    const tmp14 = AttachmentPreviewDefault;
    items4 = [unpackModuleId(tmp14, size), children];
    items5 = [unpackModuleId(PressableOpacity, obj2), ];
    const obj5 = { accessibilityRole: "button", accessibilityLabel: removeAccessibilityLabel, style: tmp.closeButton, onPress: onRemove, hitSlop: { top: 4, bottom: 4, left: 4, right: 4 }, children: unpackModuleId(View2, obj6) };
    const PressableOpacity2 = tmp9(7428).PressableOpacity;
    obj6 = { style: items6, children: unpackModuleId(Icon, obj7) };
    items6 = [tmp.closeContainer, tmp8];
    View2 = _modDef1655.View;
    obj7 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, color: nativeDefault.unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon };
    Icon = tmp9(1187).Icon;
    items5[1] = unpackModuleId(PressableOpacity2, obj5);
    return authStore2(tmp12, obj3);
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
let closure_14 = { code: "(function ImageCarouselTsx1(){let[withTiming,animatedStylePropValue,STANDARD_EASING,withSpring]=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};})" };
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
export { useTileEntranceAnimatedStyle };
export { ImageCarouselTile };
export { ImageCarouselRow };
