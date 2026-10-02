// Module ID: 10131
// Function ID: 10132
// Name: ImageCarousel
// Dependencies: [19, 17, 5201, 5200, 10132, 21, 4837, 588, 558, 576, 4570, 4838, 1189, 5281, 38, 5441, 504, 10133, 10797, 10812, 7695, 4833, 1127, 7726, 6386, 5436, 6356, 1485, 8605, 10135, 2]

// Module 10131 (ImageCarousel)
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import native from "native" /* 1189 */;
import useWindowDimensions from "useWindowDimensions" /* 1485 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4570 */;
import Text_Text from "Text/Text" /* 4833 */;
import timing from "timing" /* 4838 */;
import DraftStore from "DraftStore" /* 5201 */;
import spring from "spring" /* 5281 */;
import Upload from "Upload" /* 5441 */;
import EyeIcon from "EyeIcon" /* 6386 */;
import PlayIcon from "PlayIcon" /* 7726 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8605 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10133 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10135 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 10797 */;
import AssetRegistryDefault from "AssetRegistry" /* 10812 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5200 */;
import ImageCarouselConstants from "ImageCarouselConstants" /* 10132 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr4, dependencyMap, diff, num, obj1, obj10, obj11, obj12, obj13, obj14, obj15, tileContainer, tmp6Result1, tmp6Result2, tmp6Result3, tmp6Result4;

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
let __initData = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},\"respect-motion-settings\"),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},\"respect-motion-settings\")}]};}" };
const __initData2 = { code: "function ImageCarouselTsx2(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let sharedValue;
  let tmp5;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(5);
  let obj2 = sharedValue(4570);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function o() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === sharedValue) {
    let tmp6;
    if (cResult[3] === arg0) {
      tmp6 = cResult[4];
    }
    const effect = react.useEffect(tmp5, tmp6);
    const fn2 = function s() {
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
    let obj3 = { withTiming: tmp(4838).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: tmp(1189).STANDARD_EASING, withSpring: tmp(5281).withSpring };
    const useAnimatedStyle = tmp(4570).useAnimatedStyle;
    tmp(4570);
    fn2.__closure = obj3;
    fn2.__workletHash = 14689938623095;
    fn2.__initData = __initData;
    return useAnimatedStyle(fn2);
  }
  let items = [sharedValue, arg0];
  cResult[2] = sharedValue;
  cResult[3] = arg0;
  cResult[4] = items;
  tmp6 = items;
}) : ((arg0) => {
  let sharedValue;
  let obj = sharedValue(4570);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue, arg0];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj2 = sharedValue(4570);
  const fn = function o() {
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
  let obj3 = { withTiming: sharedValue(4838).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1189).STANDARD_EASING, withSpring: sharedValue(5281).withSpring };
  fn.__closure = obj3;
  fn.__workletHash = 1893609222612;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});
let closure_16 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((onEdit) => {
  let channelId;
  let closure_14;
  let first;
  let highlightThumbnails;
  let upload;
  let tmp = onEdit;
  let obj = onEdit(channelId[9]);
  const cResult = obj.c(70);
  onEdit = onEdit.onEdit;
  const onRemove = onEdit.onRemove;
  channelId = onEdit.channelId;
  ({ highlightThumbnails, upload } = onEdit);
  let tmp4 = undefined !== highlightThumbnails && highlightThumbnails;
  const tmp5 = closure_13();
  tileContainer = tmp5;
  const description = upload.description;
  const id = upload.id;
  const item = upload.item;
  const isVideo = upload.isVideo;
  const isImage = upload.isImage;
  const isThumbnail = upload.isThumbnail;
  const tmp6 = onRemove(tmp2[14]);
  let tmp6Result = tmp6(item.platform === tmp(tmp2[15]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (tmp4) {
    let flag = true;
    tmp4 = true === isThumbnail;
  }
  let closure_11 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [item];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp10;
    if (cResult[2] === id) {
      tmp10 = cResult[3];
    }
    let tmpResult = tmp(tmp2[16]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
    if (cResult[4] === tmp4) {
      if (cResult[5] === isImage) {
        let tmp12;
        if (cResult[6] === isVideo) {
          tmp12 = cResult[7];
        }
        closure_13 = tmp12;
        if (cResult[8] === id) {
          let tmp13;
          if (cResult[9] === onRemove) {
            tmp13 = cResult[10];
          }
          __initData = tmp13;
          if (cResult[11] === channelId) {
            if (cResult[12] === id) {
              if (cResult[13] === onEdit) {
                if (cResult[14] === onRemove) {
                  if (cResult[17] !== tmp13) {
                    class B {
                      constructor(arg0) {
                        if ("remove" === onEdit.nativeEvent.actionName) {
                          tmp = closure_14;
                          tmp2 = closure_14();
                        }
                        return;
                      }
                    }
                    cResult[17] = tmp13;
                    class M {
                      constructor() {
                        tmpResult = undefined;
                        if (onRemove != null) {
                          tmp3 = id;
                          tmpResult = tmp(id);
                        }
                        return tmpResult;
                      }
                    }
                    cResult[18] = B;
                    class P {
                      constructor() {
                        width = closure_10;
                        diff = closure_10;
                        if (closure_11) {
                          num = 4;
                          diff = width - 4;
                        }
                        tmp3 = isVideo || isImage;
                        maxWidth = undefined;
                        if (!tmp3) {
                          maxWidth = 192;
                        }
                        return { width, height: diff, maxWidth };
                      }
                    }
                  } else {
                    class B {
                      constructor(arg0) {
                        if ("remove" === onEdit.nativeEvent.actionName) {
                          tmp = closure_14;
                          tmp2 = closure_14();
                        }
                        return;
                      }
                    }
                  }
                  const id2 = item.id;
                  class M {
                    constructor() {
                      tmpResult = undefined;
                      if (onRemove != null) {
                        tmp3 = id;
                        tmpResult = tmp(id);
                      }
                      return tmpResult;
                    }
                  }
                  const tmp16 = closure_16;
                  class P {
                    constructor() {
                      width = closure_10;
                      diff = closure_10;
                      if (closure_11) {
                        num = 4;
                        diff = width - 4;
                      }
                      tmp3 = isVideo || isImage;
                      maxWidth = undefined;
                      if (!tmp3) {
                        maxWidth = 192;
                      }
                      return { width, height: diff, maxWidth };
                    }
                  }
                  const tmp16Result = tmp16(id2);
                  let closure_15 = tmp16Result;
                  if (cResult[19] === tmp12) {
                    class B {
                      constructor(arg0) {
                        if ("remove" === onEdit.nativeEvent.actionName) {
                          tmp = closure_14;
                          tmp2 = closure_14();
                        }
                        return;
                      }
                    }
                  }
                  class F {
                    constructor() {
                      tmp = closure_13();
                      ({ width, height } = tmp);
                      tmp2 = jsxs;
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      maxWidth = tmp.maxWidth;
                      obj = { style: null, children: null };
                      tmp5 = closure_4;
                      items = [, , ];
                      items[0] = closure_4.tileContainer;
                      items[1] = { width, height };
                      items[2] = closure_15;
                      obj.style = items;
                      tmp6 = jsx;
                      View = closure_1(closure_2[10]).View;
                      size = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: maxWidth, fileName: item.filename, borderRadius: null };
                      tmp7 = closure_1(closure_2[18]);
                      tmp8 = isVideo;
                      size.borderRadius = closure_1(closure_2[7]).radii.md;
                      items1 = [, , ];
                      items1[0] = jsx(tmp7, size);
                      tmp6Result = null;
                      if (isThumbnail) {
                        tmp10 = View;
                        obj1 = { style: null, children: null };
                        obj1.style = tmp5.footerRightContainer;
                        tmp11 = closure_0;
                        obj10 = { source: null, size: null };
                        Icon = closure_0(tmp4[12]).Icon;
                        obj10.source = tmp3(tmp4[19]);
                        obj10.size = closure_0(tmp4[12]).Icon.Sizes.SMALL_14;
                        obj1.children = tmp6(Icon, obj10);
                        tmp6Result = tmp6(View, obj1);
                      }
                      items1[1] = tmp6Result;
                      tmp12 = View;
                      obj11 = { style: tmp5.decorationsContainer, children: null };
                      tmp6Result1 = null;
                      tmp13 = closure_12;
                      if (tmp13) {
                        obj12 = { style: null };
                        obj12.style = tmp5.spoilerOverlay;
                        tmp6Result1 = tmp6(tmp3(tmp4[20]), obj12);
                      }
                      items2 = [, , ];
                      items2[0] = tmp6Result1;
                      arr4 = description;
                      tmp6Result2 = null;
                      if (null != description) {
                        length = undefined;
                        if (arr4 != null) {
                          length = arr4.length;
                        }
                        num = 0;
                        tmp6Result2 = null;
                        if (length > 0) {
                          tmp17 = closure_0;
                          obj13 = { variant: "text-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: null, children: null };
                          obj13.style = tmp5.altTagText;
                          Text = closure_0(tmp4[21]).Text;
                          intl = closure_0(tmp4[22]).intl;
                          obj13.children = intl.string(closure_0(tmp4[22]).t.QEW81z);
                          tmp6Result2 = tmp6(Text, obj13);
                        }
                      }
                      items3 = [, ];
                      items3[0] = tmp6Result2;
                      tmp6Result3 = null;
                      if (tmp8) {
                        obj14 = { style: null, children: null };
                        obj14.style = tmp5.iconContainer;
                        tmp19 = closure_0;
                        obj14.children = tmp6(closure_0(tmp4[23]).PlayIcon, { size: "xxs", color: "white" });
                        tmp6Result3 = tmp6(tmp12, obj14);
                      }
                      items3[1] = tmp6Result3;
                      items2[1] = tmp2(tmp12, { children: items3 });
                      tmp6Result4 = null;
                      if (tmp13) {
                        obj15 = { style: null, children: null };
                        obj15.style = tmp5.iconContainer;
                        tmp21 = closure_0;
                        obj15.children = tmp6(closure_0(tmp4[24]).EyeIcon, { size: "xxs", color: "white" });
                        tmp6Result4 = tmp6(tmp12, obj15);
                      }
                      items2[2] = tmp6Result4;
                      obj11.children = items2;
                      items1[2] = tmp2(tmp12, obj11);
                      obj.children = items1;
                      return tmp2(View, obj);
                    }
                  }
                  cResult[19] = tmp12;
                  cResult[20] = description;
                  cResult[21] = stateFromStores;
                  cResult[22] = isImage;
                  cResult[23] = isThumbnail;
                  cResult[24] = isVideo;
                  cResult[25] = item.filename;
                  cResult[26] = item.uri;
                  cResult[27] = tmp5.altTagText;
                  cResult[28] = tmp5.decorationsContainer;
                  cResult[29] = tmp5.footerRightContainer;
                  cResult[30] = tmp5.iconContainer;
                  cResult[31] = tmp5.spoilerOverlay;
                  cResult[32] = tmp5.tileContainer;
                  cResult[33] = tmp16Result;
                  cResult[34] = F;
                }
              }
            }
          }
          class M {
            constructor() {
              tmpResult = undefined;
              if (onRemove != null) {
                tmp3 = id;
                tmpResult = tmp(id);
              }
              return tmpResult;
            }
          }
          class P {
            constructor() {
              width = closure_10;
              diff = closure_10;
              if (closure_11) {
                num = 4;
                diff = width - 4;
              }
              tmp3 = isVideo || isImage;
              maxWidth = undefined;
              if (!tmp3) {
                maxWidth = 192;
              }
              return { width, height: diff, maxWidth };
            }
          }
          cResult[12] = id;
          cResult[14] = onRemove;
          cResult[15] = upload;
          cResult[16] = tmp15;
        }
        class M {
          constructor() {
            tmpResult = undefined;
            if (onRemove != null) {
              tmp3 = id;
              tmpResult = tmp(id);
            }
            return tmpResult;
          }
        }
        class P {
          constructor() {
            width = closure_10;
            diff = closure_10;
            if (closure_11) {
              num = 4;
              diff = width - 4;
            }
            tmp3 = isVideo || isImage;
            maxWidth = undefined;
            if (!tmp3) {
              maxWidth = 192;
            }
            return { width, height: diff, maxWidth };
          }
        }
        cResult[9] = onRemove;
        tmp13 = M;
      }
    }
    class P {
      constructor() {
        width = closure_10;
        diff = closure_10;
        if (closure_11) {
          num = 4;
          diff = width - 4;
        }
        tmp3 = isVideo || isImage;
        maxWidth = undefined;
        if (!tmp3) {
          maxWidth = 192;
        }
        return { width, height: diff, maxWidth };
      }
    }
    cResult[4] = tmp4;
    cResult[6] = isVideo;
    cResult[7] = P;
    tmp12 = P;
  }
  class D {
    constructor() {
      upload = closure_7.getUpload(channelId, id, DraftType.ChannelMessage);
      flag = undefined;
      if (upload != null) {
        flag = upload.spoiler;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }
  cResult[1] = channelId;
  cResult[2] = id;
  cResult[3] = D;
  tmp10 = D;
}) : ((onEdit) => {
  let Icon;
  let View;
  let intl;
  let intl3;
  let items7;
  let items9;
  let obj6;
  let obj7;
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
  let closure_15;
  let tmp = callback();
  tileContainer = tmp;
  const description = upload.description;
  const id = upload.id;
  const item = upload.item;
  const isVideo = upload.isVideo;
  const isImage = upload.isImage;
  const isThumbnail = upload.isThumbnail;
  let tmp3 = channelId;
  const tmp4 = onRemove(channelId[14]);
  tmp4(item.platform === onEdit(channelId[15]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (flag) {
    flag = true === isThumbnail;
  }
  let items = [item];
  const tmp5Result = onEdit(tmp3[16]);
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
  const tmp12 = closure_16;
  if (uri == null) {
    uri = item.uri;
  }
  const tmp12Result = tmp12(uri);
  closure_15 = tmp12Result;
  const items5 = [callback, tmp12Result, description, , , , , , , ];
  ({ uri: arr6[3], filename: arr6[4] } = item);
  items5[5] = isImage;
  items5[6] = isThumbnail;
  items5[7] = isVideo;
  items5[8] = stateFromStores;
  items5[9] = tmp;
  let obj = { name: "remove", label: intl.string(tmp5(tmp3[22]).t.kFwAsa) };
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
    items = [tileContainer.tileContainer, { width, height }, closure_15];
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
      tmp6Result = tmp6(closure_4, obj2);
    }
    items1[1] = tmp6Result;
    let tmp6Result5 = null;
    const obj4 = { style: tileContainer.decorationsContainer, children: items2 };
    if (stateFromStores) {
      const obj5 = { style: tileContainer.spoilerOverlay };
      tmp6Result5 = tmp6(tmp3(7695), obj5);
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
    items2[1] = stateFromStores(closure_4, { children: items3 });
    let tmp6Result8 = null;
    if (stateFromStores) {
      const obj8 = { style: tileContainer.iconContainer, children: unpackModuleId(EyeIcon.EyeIcon, { size: "xxs", color: "white" }) };
      tmp6Result8 = tmp6(tmp12, obj8);
    }
    items2[2] = tmp6Result8;
    items1[2] = stateFromStores(closure_4, obj4);
    return stateFromStores(View, obj);
  }, items5);
  intl = tmp5(tmp3[22]).intl;
  const items6 = [obj];
  const PressableOpacity = tmp5(tmp3[25]).PressableOpacity;
  const intl2 = tmp5(tmp3[22]).intl;
  const formatToPlainString = intl2.formatToPlainString;
  let str = item.filename;
  const MJHFt9 = tmp5(tmp3[22]).t.MJHFt9;
  const tmp15 = stateFromStores;
  const tmp16 = tileContainer;
  if (str == null) {
    str = "";
  }
  let obj3 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString(MJHFt9, { name: str }), accessibilityHint: intl3.string(tmp5(tmp3[22]).t.QtJ1c5), accessibilityActions: items6, onAccessibilityAction: callback3, disabled: !isImage && !isVideo, onPress: callback2, style: items7, children: callback4() };
  intl3 = tmp5(tmp3[22]).intl;
  items7 = [tmp.pressableContainer, ];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items7[1] = flag;
  const items8 = [tmp17(PressableOpacity, obj3), ];
  const PressableOpacity2 = tmp5(tmp3[25]).PressableOpacity;
  const intl4 = tmp5(tmp3[22]).intl;
  const formatToPlainString2 = intl4.formatToPlainString;
  let str2 = item.filename;
  const FxKgb3 = tmp5(tmp3[22]).t.FxKgb3;
  if (str2 == null) {
    str2 = "";
  }
  let obj4 = { children: items8 };
  let obj5 = { accessibilityRole: "button", accessibilityLabel: formatToPlainString2(FxKgb3, { name: str2 }), style: tmp.closeButton, onPress: callback1, hitSlop: { top: 4, bottom: 4, left: 4, right: 4 }, children: tmp17(View, obj6) };
  obj6 = { style: items9, children: tmp17(Icon, obj7) };
  items9 = [tmp.closeContainer, tmp12Result];
  View = tmp2(tmp3[10]).View;
  obj7 = { source: tmp2(tmp3[26]), size: tmp5(tmp3[12]).Icon.Sizes.MEDIUM, color: tmp2(tmp3[7]).unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon };
  Icon = tmp5(tmp3[12]).Icon;
  items8[1] = flag(PressableOpacity2, obj5);
  return tmp15(tmp16, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let ref;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(5);
  let tmp2 = closure_13();
  _require = react.useRef(0);
  const ref2 = react.useRef(0);
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(current) {
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
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.contentOffset.x;
    };
    cResult[1] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp6;
    if (cResult[3] === tmp2.scrollview) {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const obj2 = { ref, onContentSizeChange: first, onScroll: tmp5, scrollEventThrottle: 16, contentContainerStyle: tmp2.scrollview };
  const merged = Object.assign(arg0);
  const tmp8 = closure_11(closure_5, obj2);
  cResult[2] = arg0;
  cResult[3] = tmp2.scrollview;
  cResult[4] = tmp8;
  tmp6 = tmp8;
}) : ((arg0) => {
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
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let attachments;
  let channelId;
  let headerElement;
  let highlightThumbnails;
  let items;
  let onRemove;
  let tmp7;
  const tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(25);
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  highlightThumbnails = tmp4;
  const tmp5 = closure_13();
  if (cResult[0] !== channelId) {
    const fn = function n(arg0) {
      const obj = UploadAttachmentActionCreatorsDefault;
      obj.remove(channelId, arg0, DraftType.ChannelMessage);
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] === channelId) {
    let tmp8;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    const onEdit = tmp8;
    let num4 = 0;
    if (null != attachments && attachments.length > 0 || null != headerElement) {
      num4 = IMAGE_CAROUSEL_TILE_HEIGHT + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    }
    let num5 = 0;
    if (null != attachments && attachments.length > 0 || null != headerElement) {
      num5 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
    }
    let num7 = 0;
    if (null != attachments && attachments.length > 0 || null != headerElement) {
      num7 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    }
    if (cResult[5] === num4) {
      if (cResult[6] === num5) {
        let tmp14;
        if (cResult[7] === num7) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp5.container) {
          let tmp15;
          let tmp17;
          if (cResult[10] === tmp14) {
            tmp15 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1127).intl;
            const stringResult = intl.string(tmp(1127).t.RhtzFe);
            cResult[12] = stringResult;
            tmp17 = stringResult;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === attachments) {
            if (cResult[14] === channelId) {
              if (cResult[15] === (undefined !== highlightThumbnails && highlightThumbnails)) {
                if (cResult[16] === tmp8) {
                  let tmp19;
                  if (cResult[17] === tmp7) {
                    tmp19 = cResult[18];
                  }
                  if (cResult[19] === headerElement) {
                    let tmp21;
                    if (cResult[20] === tmp19) {
                      tmp21 = cResult[21];
                    }
                    if (cResult[22] === tmp21) {
                      let tmp25;
                      if (cResult[23] === tmp15) {
                        tmp25 = cResult[24];
                      }
                      return tmp25;
                    }
                    const obj2 = { style: tmp15, children: tmp21 };
                    const tmp28 = closure_11(closure_4, obj2);
                    cResult[22] = tmp21;
                    cResult[23] = tmp15;
                    cResult[24] = tmp28;
                    tmp25 = tmp28;
                  }
                  const obj3 = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: tmp17, children: items };
                  items = [headerElement, tmp19];
                  const tmp24 = closure_12(closure_18, obj3);
                  cResult[19] = headerElement;
                  cResult[20] = tmp19;
                  cResult[21] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
          }
          let mapped = null;
          if (null != attachments) {
            const _Object = Object;
            const values = Object.values(attachments);
            mapped = values.map((upload) => {
              const obj = { channelId, highlightThumbnails, onEdit, onRemove, upload };
              return unpackModuleId(closure_17, obj, upload.uniqueId);
            });
          }
          cResult[13] = attachments;
          cResult[14] = channelId;
          cResult[15] = undefined !== highlightThumbnails && highlightThumbnails;
          cResult[16] = tmp8;
          cResult[17] = tmp7;
          cResult[18] = mapped;
          tmp19 = mapped;
        }
        const items1 = [tmp5.container, tmp14];
        cResult[9] = tmp5.container;
        cResult[10] = tmp14;
        cResult[11] = items1;
        tmp15 = items1;
      }
    }
    const obj4 = { height: num4, marginTop: num5, marginBottom: num7 };
    cResult[5] = num4;
    cResult[6] = num5;
    cResult[7] = num7;
    cResult[8] = obj4;
    tmp14 = obj4;
  }
  class A {
    constructor(arg0, arg1) {
      if (onRemove != null) {
        tmp(arg0);
      }
      const items = [arg1];
      const obj = MediaKeyboardUtils;
      obj.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
    }
  }
  cResult[2] = channelId;
  cResult[3] = tmp7;
  cResult[4] = A;
  tmp8 = A;
}) : ((arg0) => {
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
  obj3 = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: intl.string(channelId(onRemove[22]).t.RhtzFe), children: items3 };
  intl = channelId(onRemove[22]).intl;
  items3 = [headerElement, ];
  let mapped = null;
  tmp11 = closure_12;
  tmp12 = closure_18;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((upload) => {
      const obj = { channelId, highlightThumbnails, onEdit, onRemove, upload };
      return unpackModuleId(closure_17, obj, upload.uniqueId);
    });
  }
  items3[1] = mapped;
  return tmp4(tmp5, obj2);
}));
size = size_mod;
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default memoResult;
export const useTileEntranceAnimatedStyle = tmp9;
