// Module ID: 10963
// Function ID: 10964
// Name: ImageCarousel
// Dependencies: [19, 17, 5139, 5138, 10964, 21, 4790, 580, 558, 568, 4529, 4791, 1181, 5219, 38, 5378, 504, 10965, 11553, 11568, 8551, 4786, 1119, 8582, 7243, 5373, 7213, 1482, 9451, 10967, 2]

// Module 10963 (ImageCarousel)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import useWindowDimensions from "useWindowDimensions" /* 1482 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4529 */;
import Text_Text from "Text/Text" /* 4786 */;
import timing from "timing" /* 4791 */;
import spring from "spring" /* 5219 */;
import Upload from "Upload" /* 5378 */;
import EyeIcon from "EyeIcon" /* 7243 */;
import PlayIcon from "PlayIcon" /* 8582 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9451 */;
import showUploadPreviewActionSheetDefault from "showUploadPreviewActionSheet" /* 10965 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10967 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 11553 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5138 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const DraftType = fn(5139).DraftType;
const ImageCarouselConstants = fn(10964);
const IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN = ImageCarouselConstants.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
const IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
let closure_10 = ImageCarouselConstants.IMAGE_CAROUSEL_TILE_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4790);
let obj = { container: { width: "100%" }, pressableContainer: { marginHorizontal: 4 }, tileContainer: { position: "relative", minWidth: 60, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: nativeDefault.radii.md - 1 }, decorationsContainer: null, highlightedTileContainer: null, closeButton: null, scrollview: null, closeContainer: null, closeButtonIcon: null, altTagText: null, iconContainer: null, spoilerOverlay: null, footerRightContainer: null };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.flex = 1;
obj4.flexDirection = "row";
obj4.justifyContent = "space-between";
obj4.alignItems = "flex-end";
obj4.padding = 4;
obj.decorationsContainer = obj4;
let obj3 = { position: "relative", minWidth: 60, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: nativeDefault.radii.md - 1 };
obj.highlightedTileContainer = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, borderStyle: "solid", borderWidth: 2, borderRadius: 10 };
const rect = { position: "absolute", top: -1 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN, right: 2 };
obj.closeButton = rect;
obj.scrollview = { paddingTop: IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING };
let size = { height: 20, width: 20, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX };
obj.closeContainer = size;
let obj5 = { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, borderStyle: "solid", borderWidth: 2, borderRadius: 10 };
obj.closeButtonIcon = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj6 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.altTagText = { paddingHorizontal: nativeDefault.space.PX_4, lineHeight: 20, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: nativeDefault.radii.xs, textTransform: "uppercase" };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_4, lineHeight: 20, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: nativeDefault.radii.xs, textTransform: "uppercase" };
obj.iconContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.spoilerOverlay = {};
const rect1 = { position: "absolute", bottom: 4, right: 4, alignItems: "center", justifyContent: "center", alignContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 4, borderRadius: 20, opacity: 0.85 };
obj.footerRightContainer = rect1;
let closure_13 = createStyles.createStyles(obj);
let __initData = { code: "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},\"respect-motion-settings\"),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},\"respect-motion-settings\")}]};}" };
const __initData2 = { code: "function ImageCarouselTsx2(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'respect-motion-settings'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'respect-motion-settings')}]};}" };
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(568).c(5);
  let obj = sharedValue(568);
  sharedValue = sharedValue(4529).useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function o() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === sharedValue) {
    if (cResult[3] === arg0) {
      let tmp6 = cResult[4];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    const fn2 = function s() {
      const obj = { opacity: null, transform: null };
      const obj3 = { duration: 300, easing: null };
      value = sharedValue.get();
      obj3.easing = native.STANDARD_EASING;
      obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
      const obj4 = { scale: null };
      obj4.scale = spring.withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
      const items = [obj4];
      obj.transform = items;
      return obj;
    };
    let obj3 = { withTiming: tmp(4791).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: tmp(1181).STANDARD_EASING, withSpring: tmp(5219).withSpring };
    fn2.__closure = obj3;
    fn2.__workletHash = 14689938623095;
    fn2.__initData = __initData;
    return tmp(4529).useAnimatedStyle(fn2);
  }
  let items = [sharedValue, arg0];
  cResult[2] = sharedValue;
  cResult[3] = arg0;
  cResult[4] = items;
  tmp6 = items;
}) : ((arg0) => {
  sharedValue = sharedValue(4529).useSharedValue(0);
  let items = [sharedValue, arg0];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj = sharedValue(4529);
  const fn = function o() {
    const obj = { opacity: null, transform: null };
    const obj3 = { duration: 300, easing: null };
    value = sharedValue.get();
    obj3.easing = native.STANDARD_EASING;
    obj.opacity = timing.withTiming(value, obj3, "respect-motion-settings");
    const obj4 = { scale: null };
    obj4.scale = spring.withSpring(sharedValue.get(), { stiffness: 80, damping: 6, mass: 0.3 }, "respect-motion-settings");
    const items = [obj4];
    obj.transform = items;
    return obj;
  };
  let obj2 = sharedValue(4529);
  fn.__closure = { withTiming: sharedValue(4791).withTiming, animatedStylePropValue: sharedValue, STANDARD_EASING: sharedValue(1181).STANDARD_EASING, withSpring: sharedValue(5219).withSpring };
  fn.__workletHash = 1893609222612;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});
let closure_16 = tmp7;
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((onEdit) => {
  const cResult = onEdit(channelId[9]).c(70);
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
  let obj = onEdit(channelId[9]);
  onRemove(channelId[14])(item.platform === onEdit(channelId[15]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (tmp4) {
    tmp4 = true === isThumbnail;
  }
  closure_11 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [item];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === id) {
      let tmp10 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[16]).useStateFromStores(first, tmp10);
    if (cResult[4] === tmp4) {
      if (cResult[5] === isImage) {
        if (cResult[6] === isVideo) {
          let tmp12 = cResult[7];
        }
        closure_13 = tmp12;
        if (cResult[8] === id) {
          if (cResult[9] === onRemove) {
            let tmp13 = cResult[10];
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
                        tmp3 = isVideo;
                        if (!isVideo) {
                          tmp3 = isImage;
                        }
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
                      tmp3 = isVideo;
                      if (!isVideo) {
                        tmp3 = isImage;
                      }
                      maxWidth = undefined;
                      if (!tmp3) {
                        maxWidth = 192;
                      }
                      return { width, height: diff, maxWidth };
                    }
                  }
                  const tmp16Result = closure_16(item.id);
                  closure_15 = tmp16Result;
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
                      obj = { style: null, children: null };
                      tmp5 = closure_4;
                      items = [, , ];
                      items[0] = closure_4.tileContainer;
                      items[1] = { width, height };
                      items[2] = closure_15;
                      obj.style = items;
                      tmp6 = jsx;
                      size = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: tmp.maxWidth, fileName: item.filename, borderRadius: null };
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
                        obj10.source = tmp3(tmp4[19]);
                        obj10.size = closure_0(tmp4[12]).Icon.Sizes.SMALL_14;
                        obj1.children = tmp6(closure_0(tmp4[12]).Icon, obj10);
                        tmp6Result = tmp6(View, obj1);
                      }
                      items1[1] = tmp6Result;
                      tmp12 = View;
                      obj11 = { style: tmp5.decorationsContainer, children: null };
                      tmp6Result1 = null;
                      tmp13 = closure_12;
                      if (closure_12) {
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
                          intl = closure_0(tmp4[22]).intl;
                          obj13.children = intl.string(closure_0(tmp4[22]).t.QEW81z);
                          tmp6Result2 = tmp6(closure_0(tmp4[21]).Text, obj13);
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
                      return tmp2(closure_1(closure_2[10]).View, obj);
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
              tmp3 = isVideo;
              if (!isVideo) {
                tmp3 = isImage;
              }
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
            tmp3 = isVideo;
            if (!isVideo) {
              tmp3 = isImage;
            }
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
        tmp3 = isVideo;
        if (!isVideo) {
          tmp3 = isImage;
        }
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
    let tmpResult = tmp(tmp2[16]);
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
  closure_15 = undefined;
  let tmp = callback();
  tileContainer = tmp;
  const description = upload.description;
  const id = upload.id;
  const item = upload.item;
  const isVideo = upload.isVideo;
  const isImage = upload.isImage;
  const isThumbnail = upload.isThumbnail;
  onRemove(channelId[14])(item.platform === onEdit(channelId[15]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  if (flag) {
    flag = true === isThumbnail;
  }
  const tmp4 = onRemove(channelId[14]);
  let items = [item];
  stateFromStores = onEdit(channelId[16]).useStateFromStores(items, () => {
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
  let items1 = [isVideo, isImage, flag];
  callback = upload.useCallback(() => {
    const width = closure_10;
    let height = closure_10;
    if (flag) {
      height = width - 4;
    }
    let tmp3 = isVideo;
    if (!isVideo) {
      tmp3 = isImage;
    }
    let maxWidth;
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
    showUploadPreviewActionSheetDefault({
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
    });
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
  const tmp12Result = closure_16(uri);
  closure_15 = tmp12Result;
  const items5 = [callback, tmp12Result, description, , , , , , , ];
  ({ uri: arr6[3], filename: arr6[4] } = item);
  items5[5] = isImage;
  items5[6] = isThumbnail;
  items5[7] = isVideo;
  items5[8] = stateFromStores;
  items5[9] = tmp;
  let obj = { name: "remove", label: null };
  const callback4 = upload.useCallback(() => {
    const tmp = callback();
    ({ width, height } = tmp);
    const obj = { style: null, children: null };
    const items = [tileContainer.tileContainer, { width, height }, closure_15];
    obj.style = items;
    const size = { uri: item.uri, isImage, isVideo, width, height, maxFileWidth: tmp.maxWidth, fileName: item.filename, borderRadius: nativeDefault.radii.md };
    const items1 = [closure_2_11(AttachmentPreviewDefault, size), , ];
    let tmp6Result = null;
    if (isThumbnail) {
      const obj2 = { style: tmp5.footerRightContainer, children: null };
      const obj3 = { source: tmp3(11568), size: native.Icon.Sizes.SMALL_14 };
      obj2.children = tmp6(native.Icon, obj3);
      tmp6Result = tmp6(closure_2_4, obj2);
    }
    items1[1] = tmp6Result;
    const obj4 = { style: tileContainer.decorationsContainer, children: null };
    let tmp6Result5 = null;
    if (stateFromStores) {
      const obj5 = { style: tmp5.spoilerOverlay };
      tmp6Result5 = tmp6(tmp3(8551), obj5);
    }
    const items2 = [tmp6Result5, , ];
    let tmp6Result6 = null;
    if (null != description) {
      let length;
      if (arr4 != null) {
        length = arr4.length;
      }
      tmp6Result6 = null;
      if (length > 0) {
        const obj6 = { variant: "text-xs/medium", color: "text-overlay-light", allowFontScaling: false, style: tmp5.altTagText, children: null };
        const intl = util.intl;
        obj6.children = intl.string(util.t.QEW81z);
        tmp6Result6 = tmp6(Text_Text.Text, obj6);
      }
    }
    const items3 = [tmp6Result6, ];
    let tmp6Result7 = null;
    if (isVideo) {
      const obj7 = { style: tmp5.iconContainer, children: tmp6(PlayIcon.PlayIcon, { size: "xxs", color: "white" }) };
      tmp6Result7 = tmp6(tmp12, obj7);
    }
    items3[1] = tmp6Result7;
    items2[1] = __initData(closure_2_4, { children: items3 });
    let tmp6Result8 = null;
    if (stateFromStores) {
      const obj8 = { style: tmp5.iconContainer, children: tmp6(EyeIcon.EyeIcon, { size: "xxs", color: "white" }) };
      tmp6Result8 = tmp6(tmp12, obj8);
    }
    items2[2] = tmp6Result8;
    obj4.children = items2;
    items1[2] = __initData(closure_2_4, obj4);
    obj.children = items1;
    return __initData(ReanimatedRexportDefault.View, obj);
  }, items5);
  let intl = tmp5(tmp3[22]).intl;
  obj.label = intl.string(onEdit(channelId[22]).t.kFwAsa);
  const items6 = [obj];
  const intl2 = tmp5(tmp3[22]).intl;
  let str = item.filename;
  if (str == null) {
    str = "";
  }
  let obj3 = { accessibilityRole: "button", accessibilityLabel: intl2.formatToPlainString(onEdit(channelId[22]).t.MJHFt9, { name: str }), accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, disabled: null, onPress: null, style: null, children: null };
  const intl3 = tmp5(tmp3[22]).intl;
  obj3.accessibilityHint = intl3.string(onEdit(channelId[22]).t.QtJ1c5);
  obj3.accessibilityActions = items6;
  obj3.onAccessibilityAction = callback3;
  let tmp18 = !isImage;
  if (!isImage) {
    tmp18 = !isVideo;
  }
  obj3.disabled = tmp18;
  obj3.onPress = callback2;
  const items7 = [tmp.pressableContainer, ];
  if (flag) {
    flag = tmp.highlightedTileContainer;
  }
  items7[1] = flag;
  obj3.style = items7;
  obj3.children = callback4();
  const items8 = [flag(onEdit(channelId[25]).PressableOpacity, obj3), ];
  const intl4 = tmp5(tmp3[22]).intl;
  let str2 = item.filename;
  if (str2 == null) {
    str2 = "";
  }
  let obj4 = { children: null };
  let obj5 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(onEdit(channelId[22]).t.FxKgb3, { name: str2 }), style: tmp.closeButton, onPress: callback1, hitSlop: { top: 4, bottom: 4, left: 4, right: 4 }, children: null };
  let obj6 = { style: null, children: null };
  const items9 = [tmp.closeContainer, tmp12Result];
  obj6.style = items9;
  const tmp15 = stateFromStores;
  const tmp16 = tileContainer;
  const tmp5Result = onEdit(channelId[16]);
  obj6.children = flag(onEdit(channelId[12]).Icon, { source: onRemove(channelId[26]), size: onEdit(channelId[12]).Icon.Sizes.MEDIUM, color: onRemove(channelId[7]).unsafe_rawColors.PRIMARY_500, style: tmp.closeButtonIcon });
  obj5.children = flag(onRemove(channelId[10]).View, obj6);
  items8[1] = flag(onEdit(channelId[25]).PressableOpacity, obj5);
  obj4.children = items8;
  return tmp15(tmp16, obj4);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(5);
  const tmp2 = closure_13();
  _require = noop.useRef(0);
  noop.useRef(0);
  ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(current) {
      const tmp = ref;
      if (tmp2) {
        current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }
      tmp.current = current;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
    };
    cResult[1] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp2.scrollview) {
      let tmp6 = cResult[4];
    }
    return tmp6;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.ref = ref;
  obj2.onContentSizeChange = first;
  obj2.onScroll = tmp5;
  obj2.scrollEventThrottle = 16;
  obj2.contentContainerStyle = tmp2.scrollview;
  const tmp8 = closure_11(closure_5, obj2);
  cResult[2] = arg0;
  cResult[3] = tmp2.scrollview;
  cResult[4] = tmp8;
  tmp6 = tmp8;
}) : ((arg0) => {
  noop.useRef(0);
  noop.useRef(0);
  const ref = noop.useRef(null);
  const callback = noop.useCallback((current) => {
    const tmp = ref;
    if (tmp2) {
      current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }
    tmp.current = current;
  }, []);
  let obj = {};
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.x;
  }, []);
  const merged = Object.assign(arg0);
  obj.ref = ref;
  obj.onContentSizeChange = callback;
  obj.onScroll = callback1;
  obj.scrollEventThrottle = 16;
  obj.contentContainerStyle = closure_13().scrollview;
  return closure_11(closure_5, obj);
});
ReactCompilerGating = fn(558);
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_4 };
const obj9 = {};
size = fn(2);
let result = size.fileFinishedImporting("components_native/chat/ImageCarousel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channelId(568).c(25);
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  highlightThumbnails = tmp4;
  const tmp5 = closure_13();
  let tmp6 = null != attachments;
  if (tmp6) {
    tmp6 = attachments.length > 0;
  }
  if (!tmp6) {
    tmp6 = null != headerElement;
  }
  if (cResult[0] !== channelId) {
    const fn = function n(arg0) {
      UploadAttachmentActionCreatorsDefault.remove(channelId, arg0, DraftType.ChannelMessage);
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp7) {
      let tmp8 = cResult[4];
    }
    const onEdit = tmp8;
    let num4 = 0;
    if (tmp6) {
      num4 = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    }
    let num5 = 0;
    if (tmp6) {
      num5 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
    }
    let num7 = 0;
    if (tmp6) {
      num7 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    }
    if (cResult[5] === num4) {
      if (cResult[6] === num5) {
        if (cResult[7] === num7) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] === tmp5.container) {
          if (cResult[10] === tmp14) {
            let tmp15 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1119).intl;
            const stringResult = intl.string(tmp(1119).t.RhtzFe);
            cResult[12] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === attachments) {
            if (cResult[14] === channelId) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === tmp8) {
                  if (cResult[17] === tmp7) {
                    let tmp19 = cResult[18];
                  }
                  if (cResult[19] === headerElement) {
                    if (cResult[20] === tmp19) {
                      let tmp21 = cResult[21];
                    }
                    if (cResult[22] === tmp21) {
                      if (cResult[23] === tmp15) {
                        let tmp25 = cResult[24];
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
                  const obj3 = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: tmp17, children: null };
                  let items = [headerElement, tmp19];
                  obj3.children = items;
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
            mapped = values.map((upload) => closure_2_11(closure_17, { channelId, highlightThumbnails, onEdit, onRemove, upload }, upload.uniqueId));
          }
          cResult[13] = attachments;
          cResult[14] = channelId;
          cResult[15] = tmp4;
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
      if (closure_2 != null) {
        tmp2 = arg0;
        tmpResult = tmp(arg0);
      }
      obj = closure_0(closure_2[29]);
      items = [];
      items[0] = arg1;
      addImagesFromPickerResult = obj.addImagesFromPicker(channelId, items, closure_0(closure_2[15]).UploadOrigin.IMAGE_EDITOR);
      return;
    }
  }
  cResult[2] = channelId;
  cResult[3] = tmp7;
  cResult[4] = A;
  tmp8 = A;
}) : ((arg0) => {
  ({ attachments, channelId } = arg0);
  ({ headerElement, highlightThumbnails } = arg0);
  if (highlightThumbnails === undefined) {
    highlightThumbnails = false;
  }
  let onRemove;
  noop = undefined;
  let tmp2 = null != attachments;
  if (tmp2) {
    tmp2 = attachments.length > 0;
  }
  if (!tmp2) {
    tmp2 = null != headerElement;
  }
  let items = [channelId];
  onRemove = noop.useCallback((arg0) => {
    UploadAttachmentActionCreatorsDefault.remove(channelId, arg0, DraftType.ChannelMessage);
  }, items);
  const items1 = [channelId, onRemove];
  noop = noop.useCallback((arg0, arg1) => {
    if (callback != null) {
      tmp(arg0);
    }
    const items = [arg1];
    MediaKeyboardUtils.addImagesFromPicker(channelId, items, Upload.UploadOrigin.IMAGE_EDITOR);
  }, items1);
  const items2 = [closure_13().container, ];
  let num2 = 0;
  if (tmp2) {
    num2 = closure_10 + IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
  }
  const obj = { height: num2, marginTop: null, marginBottom: null };
  let num3 = 0;
  if (tmp2) {
    num3 = -1 * (IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING - IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN);
  }
  obj.marginTop = num3;
  let num5 = 0;
  if (tmp2) {
    num5 = 2 * IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
  }
  const obj2 = { style: items2, children: null };
  obj.marginBottom = num5;
  items2[1] = obj;
  const obj3 = { horizontal: true, keyboardShouldPersistTaps: "always", showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: null, children: null };
  const intl = channelId(onRemove[22]).intl;
  obj3.accessibilityLabel = intl.string(channelId(onRemove[22]).t.RhtzFe);
  const items3 = [headerElement, ];
  let mapped = null;
  if (null != attachments) {
    const _Object = Object;
    const values = Object.values(attachments);
    mapped = values.map((upload) => closure_2_11(closure_17, { channelId, highlightThumbnails, onEdit, onRemove, upload }, upload.uniqueId));
  }
  items3[1] = mapped;
  obj3.children = items3;
  obj2.children = closure_12(closure_18, obj3);
  return closure_11(closure_4, obj2);
}));
export const useTileEntranceAnimatedStyle = tmp7;
