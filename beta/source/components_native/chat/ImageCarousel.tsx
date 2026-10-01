// Module ID: 10094
// Function ID: 10095
// Name: ImageCarousel
// Dependencies: [19, 17, 5200, 5199, 10095, 21, 4836, 576, 4566, 4837, 1177, 5280, 38, 5440, 504, 10096, 9657, 10815, 7691, 4832, 1115, 7722, 6389, 5435, 6359, 1479, 8608, 10098, 2]
// Exports: useTileEntranceAnimatedStyle

// Module 10094 (ImageCarousel)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useWindowDimensions from "useWindowDimensions" /* 1479 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import DraftStore from "DraftStore" /* 5200 */;
import Upload from "Upload" /* 5440 */;
import EyeIcon from "EyeIcon" /* 6389 */;
import PlayIcon from "PlayIcon" /* 7722 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8608 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 9657 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10096 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10098 */;
import AssetRegistryDefault from "AssetRegistry" /* 10815 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import ImageCarouselConstants from "ImageCarouselConstants" /* 10095 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let Icon;
  let View;
  let intl;
  let intl3;
  let items10;
  let items8;
  let obj7;
  let obj8;
  onEdit = onEdit.onEdit;
  const onRemove = onEdit.onRemove;
  const channelId = onEdit.channelId;
  let flag = onEdit.highlightThumbnails;
  if (flag === undefined) {
    flag = false;
  }
  let upload = onEdit.upload;
  flag = undefined;
  let stateFromStores;
  let callback;
  let callback1;
  let animatedStyle;
  let tmp = callback();
  const tileContainer = tmp;
  const description = upload.description;
  const id = upload.id;
  const item = upload.item;
  const isVideo = upload.isVideo;
  const isImage = upload.isImage;
  const isThumbnail = upload.isThumbnail;
  let tmp3 = channelId;
  const tmp4 = onRemove(channelId[12]);
  tmp4(item.platform === onEdit(channelId[13]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (flag) {
    flag = true === isThumbnail;
  }
  let items = [item];
  const tmp5Result = onEdit(tmp3[14]);
  stateFromStores = tmp5Result.useStateFromStores(items, () => {
    upload = UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage);
    flag = undefined;
    if (upload != null) {
      flag = upload.spoiler;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj2 = upload;
  let items1 = [isVideo, isImage, flag];
  callback = upload.useCallback(() => {
    const width = IMAGE_CAROUSEL_TILE_HEIGHT;
    let height = IMAGE_CAROUSEL_TILE_HEIGHT;
    if (flag) {
      height = width - 4;
    }
    let maxWidth;
    const tmp3 = isVideo || isImage;
    if (!tmp3) {
      maxWidth = 192;
    }
    return { width, height, maxWidth };
  }, items1);
  let items2 = [onRemove, id];
  callback1 = upload.useCallback(() => {
    let tmpResult;
    if (onRemove != null) {
      tmpResult = tmp(id);
    }
    return tmpResult;
  }, items2);
  let items3 = [channelId, onRemove, onEdit, upload, id];
  const items4 = [callback1];
  const callback2 = upload.useCallback(() => {
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
  }, items3);
  let uri = item.id;
  const callback3 = upload.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      callback1();
    }
  }, items4);
  if (uri == null) {
    uri = item.uri;
  }
  const tmp5Result3 = onEdit(tmp3[8]);
  const sharedValue = tmp5Result3.useSharedValue(0);
  const items5 = [sharedValue, uri];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(1);
  }, items5);
  const fn = function o() {
    let items;
    let obj2;
    let obj4;
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, obj2, "respect-motion-settings"), transform: items };
    withTiming = onEdit(channelId[9]).withTiming;
    obj2 = { duration: 300, easing: onEdit(channelId[10]).STANDARD_EASING };
    onEdit(channelId[9]);
    value = sharedValue.get();
    const obj3 = { scale: obj4.withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings") };
    items = [obj3];
    obj4 = onEdit(channelId[11]);
    return obj;
  };
  const tmp5Result4 = onEdit(tmp3[8]);
  let obj = { withTiming: tmp5(tmp3[9]).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: tmp5(tmp3[10]).STANDARD_EASING, withSpring: tmp5(tmp3[11]).withSpring };
  fn.__closure = obj;
  fn.__workletHash = 14458898683767;
  fn.__initData = callback1;
  animatedStyle = tmp5Result4.useAnimatedStyle(fn);
  const items6 = [callback, animatedStyle, description, , , , , , , ];
  ({ uri: arr7[3], filename: arr7[4] } = item);
  items6[5] = isImage;
  items6[6] = isThumbnail;
  items6[7] = isVideo;
  items6[8] = stateFromStores;
  items6[9] = tmp;
  let obj3 = { name: "remove", label: intl.string(tmp5(tmp3[20]).t.kFwAsa) };
  const callback4 = obj2.useCallback(() => {
    let Icon;
    let height;
    let intl;
    let items;
    let items1;
    let items2;
    let obj3;
    let width;
    const tmp = callback();
    ({ width, height } = tmp);
    const maxWidth = tmp.maxWidth;
    const obj = { style: items, children: items1 };
    items = [tileContainer.tileContainer, { width, height }, animatedStyle];
    const View = ReanimatedRexportDefault.View;
    size = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: maxWidth, fileName: item.filename, borderRadius: nativeDefault.radii.md };
    const tmp7 = AttachmentPreviewDefault;
    items1 = [unpackModuleId(tmp7, size), , ];
    let tmp6Result = null;
    const tmp8 = isVideo;
    if (isThumbnail) {
      const obj2 = { style: tileContainer.footerRightContainer, children: unpackModuleId(Icon, obj3) };
      obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL_14 };
      Icon = native.Icon;
      tmp6Result = tmp6(React3, obj2);
    }
    items1[1] = tmp6Result;
    let tmp6Result5 = null;
    const obj4 = { style: tileContainer.decorationsContainer, children: items2 };
    if (stateFromStores) {
      const obj5 = { style: tileContainer.spoilerOverlay };
      tmp6Result5 = tmp6(tmp3(7691), obj5);
    }
    items2 = [tmp6Result5, , ];
    let tmp6Result6 = null;
    if (null != description) {
      let length;
      if (description != null) {
        length = arr4.length;
      }
      tmp6Result6 = null;
      if (length > 0) {
        const obj6 = { variant: "text-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: tileContainer.altTagText, children: intl.string(intl5.t.QEW81z) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        tmp6Result6 = tmp6(Text, obj6);
      }
    }
    const items3 = [tmp6Result6, ];
    let tmp6Result7 = null;
    if (tmp8) {
      const obj7 = { style: tileContainer.iconContainer, children: unpackModuleId(PlayIcon.PlayIcon, { size: "xxs", color: "white" }) };
      tmp6Result7 = tmp6(tmp12, obj7);
    }
    items3[1] = tmp6Result7;
    items2[1] = stateFromStores(React3, { children: items3 });
    let tmp6Result8 = null;
    if (stateFromStores) {
      const obj8 = { style: tileContainer.iconContainer, children: unpackModuleId(EyeIcon.EyeIcon, { size: "xxs", color: "white" }) };
      tmp6Result8 = tmp6(tmp12, obj8);
    }
    items2[2] = tmp6Result8;
    items1[2] = stateFromStores(React3, obj4);
    return stateFromStores(View, obj);
  }, items6);
  intl = tmp5(tmp3[20]).intl;
  const items7 = [obj3];
  const PressableOpacity = tmp5(tmp3[23]).PressableOpacity;
  const intl2 = tmp5(tmp3[20]).intl;
  const formatToPlainString = intl2.formatToPlainString;
  let str = item.filename;
  const MJHFt9 = tmp5(tmp3[20]).t.MJHFt9;
  const tmp16 = stateFromStores;
  const tmp17 = tileContainer;
  if (str == null) {
    str = "";
  }
  let obj4 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(MJHFt9, { name: str }), accessibilityHint: intl3.string(tmp5(tmp3[20]).t.QtJ1c5), accessibilityActions: items7, onAccessibilityAction: callback3, disabled: !isImage && !isVideo, onPress: callback2, style: items8, children: callback4() };
  intl3 = tmp5(tmp3[20]).intl;
  items8 = [tmp.pressableContainer, ];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items8[1] = flag;
  const items9 = [flag(PressableOpacity, obj4), ];
  const PressableOpacity2 = tmp5(tmp3[23]).PressableOpacity;
  const intl4 = tmp5(tmp3[20]).intl;
  const formatToPlainString2 = intl4.formatToPlainString;
  let str2 = item.filename;
  const FxKgb3 = tmp5(tmp3[20]).t.FxKgb3;
  if (str2 == null) {
    str2 = "";
  }
  let obj5 = { children: items9 };
  let obj6 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString2(FxKgb3, { name: str2 }), style: tmp.closeButton, onPress: callback1, hitSlop: { top: 4, bottom: 4, left: 4, right: 4 }, children: flag(View, obj7) };
  obj7 = { style: items10, children: flag(Icon, obj8) };
  items10 = [tmp.closeContainer, animatedStyle];
  View = tmp2(tmp3[8]).View;
  obj8 = { source: tmp2(tmp3[24]), size: tmp5(tmp3[10]).Icon.Sizes.MEDIUM, color: tmp2(tmp3[7]).unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon };
  Icon = tmp5(tmp3[10]).Icon;
  items9[1] = flag(PressableOpacity2, obj6);
  return tmp16(tmp17, obj5);
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
let closure_13 = createStyles(obj);
const __initData = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
const memoResult = react.memo((arg0) => {
  let attachments;
  let channelId;
  let headerElement;
  let highlightThumbnails;
  let intl;
  let items3;
  let num3;
  let num5;
  let obj3;
  let onEdit;
  let tmp11;
  let tmp12;
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  let onRemove;
  react = undefined;
  let tmp2 = null != attachments;
  const tmp = closure_13();
  if (tmp2) {
    tmp2 = attachments.length > 0;
  }
  if (!tmp2) {
    tmp2 = null != headerElement;
  }
  let items = [channelId];
  onRemove = react.useCallback((arg0) => {
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
  const items2 = [tmp.container, ];
  let num2 = 0;
  const tmp4 = closure_11;
  const tmp5 = closure_4;
  if (tmp2) {
    num2 = IMAGE_CAROUSEL_TILE_HEIGHT + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
  }
  let obj = { height: num2, marginTop: num3, marginBottom: num5 };
  num3 = 0;
  if (tmp2) {
    num3 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
  }
  num5 = 0;
  if (tmp2) {
    num5 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  }
  items2[1] = obj;
  const obj2 = { style: items2, children: tmp11(tmp12, obj3) };
  obj3 = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: intl.string(channelId(onRemove[20]).t.RhtzFe), children: items3 };
  intl = channelId(onRemove[20]).intl;
  items3 = [headerElement, ];
  let mapped = null;
  tmp11 = closure_12;
  tmp12 = CustomScrollView;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((upload) => {
      const obj = { channelId, highlightThumbnails, onEdit, onRemove, upload };
      return unpackModuleId(Tile, obj, upload.uniqueId);
    });
  }
  items3[1] = mapped;
  return tmp4(tmp5, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export const useTileEntranceAnimatedStyle = function useTileEntranceAnimatedStyle(arg0) {
  let sharedValue;
  const obj = sharedValue(4566);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue, arg0];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const fn = function o() {
    let items;
    let obj2;
    let obj4;
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, obj2, "respect-motion-settings"), transform: items };
    withTiming = onEdit(channelId[9]).withTiming;
    obj2 = { duration: 300, easing: onEdit(channelId[10]).STANDARD_EASING };
    onEdit(channelId[9]);
    value = sharedValue.get();
    const obj3 = { scale: obj4.withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings") };
    items = [obj3];
    obj4 = onEdit(channelId[11]);
    return obj;
  };
  const obj2 = sharedValue(4566);
  fn.__closure = { withTiming: sharedValue(4837).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1177).STANDARD_EASING, withSpring: sharedValue(5280).withSpring };
  fn.__workletHash = 14458898683767;
  fn.__initData = __initData;
  ({ withTiming: sharedValue(4837).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1177).STANDARD_EASING, withSpring: sharedValue(5280).withSpring });
  return obj2.useAnimatedStyle(fn);
};
