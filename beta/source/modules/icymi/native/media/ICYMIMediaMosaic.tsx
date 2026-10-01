// Module ID: 16136
// Function ID: 16137
// Name: ICYMIMediaMosaic
// Dependencies: [32, 19, 17, 4825, 2045, 4479, 1372, 7783, 1074, 21, 4836, 576, 4986, 1094, 504, 7755, 4566, 4837, 16137, 5899, 4832, 1115, 7722, 5450, 5435, 7799, 9443, 5415, 16092, 7713, 7796, 1370, 12, 6531, 7707, 4989, 2]
// Exports: default

// Module 16136 (ICYMIMediaMosaic)
import _mod12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import timing from "timing" /* 4837 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7713 */;
import common_VideoDefault from "common/Video" /* 7755 */;
import ICYMITypes from "ICYMITypes" /* 7796 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIContext from "ICYMIContext" /* 16092 */;
import ThumbhashUtils from "ThumbhashUtils" /* 16137 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
function MediaMosaicVideo(source) {
  let autoplay;
  let height;
  let items1;
  let style;
  let width;
  source = source.source;
  ({ height, width, autoplay, style } = source);
  const tmp = closure_18();
  const items = [ICYMIStore];
  const obj = get_initialized;
  let isGIFV = obj.useStateFromStores(items, () => ICYMIStore.videosMuted());
  let uri = source.videoURI;
  const tmp2 = closure_15;
  const tmp3 = common_VideoDefault;
  if (uri == null) {
    uri = source.sourceURI;
  }
  if (uri == null) {
    uri = source.uri;
  }
  size = { src: { videoURI: uri }, height, width, postponeRender: false, paused: !autoplay, muted: isGIFV, resizeMode: "cover", style: items1, videoStyle: tmp.video, disableFocus: isGIFV };
  items1 = [tmp.media, style];
  if (!isGIFV) {
    isGIFV = source.isGIFV;
  }
  return tmp2(tmp3, size);
}
function MediaMosaicImage(source) {
  let closure_2;
  let dimensions;
  let imageFinishedLoading;
  let items1;
  let items2;
  let items4;
  let num;
  let obj4;
  let style;
  source = source.source;
  ({ dimensions, style } = source);
  imageFinishedLoading = undefined;
  dependencyMap = undefined;
  const isSpoiler = source.isSpoiler;
  const tmp = closure_18();
  [imageFinishedLoading, dependencyMap] = react.useState(false);
  let obj = source(4566);
  const fn = function c() {
    let num = 1;
    const withTiming = timing.withTiming;
    timing;
    if (first) {
      num = 0;
    }
    const obj = { opacity: withTiming(num, { duration: 150 }) };
    return obj;
  };
  let obj2 = { withTiming: source(4837).withTiming, imageFinishedLoading };
  fn.__closure = obj2;
  fn.__workletHash = 7803531897566;
  fn.__initData = __initData;
  const items = [, , ];
  ({ height: arr[0], placeholder: arr[1], width: arr[2] } = source);
  const animatedStyle = obj.useAnimatedStyle(fn);
  const memo = react.useMemo(() => {
    let obj2;
    if (null != source.placeholder) {
      size = { uri: obj2.createThumbhashImageFromPlaceholder(source.placeholder), width: null, height: null };
      ({ width: obj.width, height: obj.height } = source);
      obj2 = ThumbhashUtils;
      return size;
    }
  }, items);
  const obj3 = { style: items1, children: closure_15(imageFinishedLoading(5899), obj4) };
  items1 = [animatedStyle, tmp.thumbhashMedia];
  const View = imageFinishedLoading(4566).View;
  obj4 = { source: memo, style: items2 };
  items2 = [style, tmp.media, dimensions];
  const items3 = [closure_15(View, obj3), ];
  const obj5 = {
    source,
    style: items4,
    onLoadEnd() {
      return closure_2(true);
    },
    blurRadius: num
  };
  items4 = [tmp.media, style, dimensions];
  num = 0;
  const Image = imageFinishedLoading(4566).Image;
  const tmp6 = closure_17;
  const tmp7 = closure_16;
  const tmp8 = closure_15;
  if (isSpoiler) {
    num = 100;
  }
  const obj6 = { children: items3 };
  items3[1] = tmp8(Image, obj5, source.uri);
  return tmp6(tmp7, obj6);
}
function Media(handlePressMedia) {
  let PlayIcon;
  let PressableOpacity;
  let Text;
  let closure_4;
  let dimensions;
  let initialIndex;
  let obj10;
  let obj12;
  let obj6;
  let obj7;
  let obj9;
  let source;
  let str;
  let tmp20Result;
  let useReducedMotion;
  ({ source, dimensions, initialIndex } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  const style = handlePressMedia.style;
  let isSpoiler;
  react = undefined;
  let stateFromStores;
  const visible = handlePressMedia.visible;
  let tmp = closure_18();
  let obj = react;
  const ref = react.useRef(null);
  let flag = source.spoiler;
  const useState = react.useState;
  if (flag == null) {
    flag = false;
  }
  const tmp3 = isSpoiler(useState(flag), 2);
  isSpoiler = tmp3[0];
  react = tmp3[1];
  const items = [handlePressMedia, initialIndex, isSpoiler];
  const callback = obj.useCallback(() => {
    const tmp = first;
    if (tmp) {
      closure_4(false);
    } else {
      const obj = { ref, initialIndex };
      handlePressMedia(obj);
    }
  }, items);
  const items1 = [ICYMIStore];
  const obj2 = initialIndex(ref[14]);
  stateFromStores = obj2.useStateFromStores(items1, () => ICYMIStore.videosMuted());
  const items2 = [AccessibilityStore];
  const obj4 = { ref, onPress: callback, style: dimensions, children: null };
  let tmp12 = isSpoiler;
  const obj3 = initialIndex(ref[14]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const tmp10 = closure_17;
  const tmp11 = stateFromStores;
  if (isSpoiler) {
    const obj5 = { style: tmp.centerContainer, children: closure_15(closure_6, obj6) };
    obj6 = { style: tmp.spoilerText, children: closure_15(Text, obj7) };
    obj7 = { maxFontSizeMultiplier: 1, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: str.toUpperCase() };
    Text = tmp6(tmp7[20]).Text;
    const intl = tmp6(tmp7[21]).intl;
    str = intl.string(initialIndex(ref[21]).t["F+x38C"]);
    tmp12 = closure_15(closure_6, obj5);
  }
  const items3 = [tmp12, , , ];
  let tmp15 = null != source.videoURI && !isSpoiler;
  if (tmp15) {
    let isGIFV = source.isGIFV;
    if (!isGIFV) {
      const tmp6Result = initialIndex(ref[12]);
      isGIFV = tmp6Result.urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
    }
    tmp15 = !isGIFV;
  }
  if (tmp15) {
    tmp15 = stateFromStores1;
  }
  if (tmp15) {
    const obj8 = { style: tmp.centerContainer, children: closure_15(closure_6, obj9) };
    obj9 = { style: tmp.videoIcon, children: closure_15(PlayIcon, obj10) };
    obj10 = { color: handlePressMedia(ref[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
    PlayIcon = tmp6(tmp7[22]).PlayIcon;
    tmp15 = closure_15(closure_6, obj8);
  }
  items3[1] = tmp15;
  let tmp20Result2 = null;
  const tmp6Result5 = initialIndex(ref[23]);
  if (tmp6Result5.isVideo(source.uri)) {
    let isGIFV2 = source.isGIFV;
    if (!isGIFV2) {
      const tmp6Result6 = initialIndex(ref[12]);
      isGIFV2 = tmp6Result6.urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
    }
    tmp20Result2 = null;
    if (!isGIFV2) {
      const items4 = [tmp.muteIcon, ];
      const obj11 = { style: tmp.absoluteContainer, children: closure_15(PressableOpacity, obj12) };
      obj12 = {
        style: items4,
        onPress() {
              const obj = ICYMIActionCreatorsDefault;
              return obj.setVideosMuted(!stateFromStores);
            },
        activeOpacity: 0.8,
        children: tmp20Result
      };
      items4[1] = stateFromStores ? tmp.iconBg : tmp.iconBgSelected;
      PressableOpacity = tmp6(tmp7[24]).PressableOpacity;
      const tmp21 = closure_6;
      if (stateFromStores) {
        const obj13 = { color: handlePressMedia(ref[11]).colors.INTERACTIVE_TEXT_DEFAULT, size: "sm" };
        const VoiceXIcon = tmp6(tmp7[26]).VoiceXIcon;
        tmp20Result = tmp20(VoiceXIcon, obj13);
      } else {
        const obj14 = { color: handlePressMedia(ref[11]).colors.BLACK, size: "sm" };
        const VoiceNormalIcon = tmp6(tmp7[27]).VoiceNormalIcon;
        tmp20Result = tmp20(VoiceNormalIcon, obj14);
      }
      tmp20Result2 = tmp20(tmp21, obj11);
    }
  }
  items3[2] = tmp20Result2;
  const tmp6Result7 = initialIndex(ref[23]);
  if (tmp6Result7.isVideo(source.uri)) {
    let tmp25;
    if (null != source.videoURI) {
      size = { source, height: null, width: null, style, autoplay: visible };
      ({ height: obj20.height, width: obj20.width } = dimensions);
      tmp25 = closure_15(MediaMosaicVideo, size);
    }
    items3[3] = tmp25;
    obj4.children = items3;
    return tmp10(tmp11, obj4);
  } else {
    let isGIFV3 = source.isGIFV;
    if (!isGIFV3) {
      const tmp6Result8 = initialIndex(ref[12]);
      isGIFV3 = tmp6Result8.urlMatchesFileExtension(source.sourceURI, tmp6(tmp7[13]).GIF_RE_IOS);
    }
  }
  tmp25 = closure_15(MediaMosaicImage, { source, style, dimensions, isSpoiler });
}
function OneImageRow(widthOverride) {
  let handlePressMedia;
  let items;
  let obj2;
  let source;
  widthOverride = widthOverride.widthOverride;
  ({ source, handlePressMedia } = widthOverride);
  const tmp = closure_18();
  const context = react.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const obj = { style: items, children: closure_15(Media, obj2) };
  items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  obj2 = { handlePressMedia, initialIndex: 0, source, dimensions: size };
  size = { width: widthOverride, height: widthOverride / 1.5 };
  return closure_15(metroRequire, obj);
}
function ThreeImagesRow(arg0) {
  let end;
  let handlePressMedia;
  let sources;
  let start;
  let widthOverride;
  ({ sources, start, end, offset: require, handlePressMedia: importDefault, widthOverride } = arg0);
  widthOverride = undefined;
  const tmp = closure_18();
  const context = react.useContext(require("ICYMIContext").ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const items = [tmp.imageRow, , ];
  const tmp4 = closure_15;
  const tmp5 = closure_6;
  if (start) {
    start = tmp.topRow;
  }
  items[1] = start;
  if (end) {
    end = tmp.bottomRow;
  }
  let obj = {
    style: items,
    children: sources.map((source, index) => {
      const obj = { handlePressMedia: importDefault, initialIndex: require + index, source, dimensions: size };
      size = { width: (widthOverride - 8) / 3, height: (widthOverride - 8) / 3 };
      return closure_15(Media, obj, require + index);
    })
  };
  items[2] = end;
  return tmp4(tmp5, obj);
}
function TwoImagesRow(arg0) {
  let end;
  let handlePressMedia;
  let sources;
  let widthOverride;
  ({ sources, handlePressMedia: require, end, widthOverride } = arg0);
  size = undefined;
  const tmp = closure_18();
  const context = react.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  size = { width: (widthOverride - 4) / 2, height: (widthOverride - 4) / 2 / 0.75 };
  const items = [, , ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  const tmp4 = closure_15;
  const tmp5 = closure_6;
  if (end) {
    end = tmp.bottomRow;
  }
  let obj = {
    style: items,
    children: sources.map((source, initialIndex) => {
      const obj = { handlePressMedia: require, initialIndex, source, dimensions: size };
      return closure_15(Media, obj, initialIndex);
    })
  };
  items[2] = end;
  return tmp4(tmp5, obj);
}
function ThreeImages(arg0) {
  let handlePressMedia;
  let items;
  let items1;
  let items2;
  let obj3;
  let sources;
  let widthOverride;
  ({ sources, handlePressMedia, widthOverride } = arg0);
  const tmp = closure_18();
  const context = react.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const obj = { style: items, children: items1 };
  items = [, ];
  ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp);
  const obj2 = { style: tmp.leftColumn, children: closure_15(Media, obj3) };
  obj3 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: size };
  size = { width: 2 * widthOverride / 3 - 4, height: 2 * widthOverride / 3 };
  items1 = [closure_15(metroRequire, obj2), ];
  const obj4 = { style: tmp.rightColumn, children: items2 };
  items2 = [, ];
  const obj5 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: { width: widthOverride / 3, height: widthOverride / 3 } };
  items2[0] = closure_15(Media, obj5);
  const obj6 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: { width: widthOverride / 3, height: widthOverride / 3 } };
  items2[1] = closure_15(Media, obj6);
  items1[1] = closure_17(metroRequire, obj4);
  return closure_17(metroRequire, obj);
}
function FourImages(arg0) {
  let handlePressMedia;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let sources;
  let widthOverride;
  ({ sources, handlePressMedia, widthOverride } = arg0);
  const tmp = closure_18();
  const context = react.useContext(ICYMIContext.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  size = { width: widthOverride / 2 - 4, height: (widthOverride / 2 - 4) / 1.5 };
  const obj2 = { style: items, children: items1 };
  items = [, ];
  const obj = { style: tmp.imagesContainer, children: items2 };
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  items1 = [, ];
  const obj3 = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: size };
  items1[0] = closure_15(Media, obj3);
  const obj4 = { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: size };
  items1[1] = closure_15(Media, obj4);
  items2 = [closure_17(metroRequire, obj2), ];
  const obj5 = { style: items3, children: items4 };
  items3 = [, ];
  ({ imageRow: arr4[0], bottomRow: arr4[1] } = tmp);
  items4 = [, ];
  const obj6 = { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: size };
  items4[0] = closure_15(Media, obj6);
  const obj7 = { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: size };
  items4[1] = closure_15(Media, obj7);
  items2[1] = closure_17(metroRequire, obj5);
  return closure_17(metroRequire, obj);
}
function SingleImage(source) {
  let handlePressMedia;
  let initialIndex;
  let obj3;
  let visible;
  source = source.source;
  let widthOverride;
  ({ initialIndex, handlePressMedia, visible } = source);
  const tmp = closure_18();
  const context = react.useContext(ICYMIContext.ICYMIContext);
  const obj = react;
  if (null == widthOverride) {
    let width;
    if (context != null) {
      width = context.width;
    }
    widthOverride = width - context.inset - 2 * context.margin;
  }
  const items = [, , ];
  ({ width: arr[0], height: arr[1] } = source);
  items[2] = widthOverride;
  const obj2 = { style: tmp.imagesContainer, children: closure_15(Media, obj3) };
  obj3 = {
    handlePressMedia,
    initialIndex,
    source,
    dimensions: obj.useMemo(() => {
      size = source;
      const result = source.width / source.height;
      if (result >= 1) {
        const _Math2 = Math;
        const bound = Math.min(size.width, widthOverride);
        const size1 = { height: bound / result, width: bound };
        return size1;
      } else {
        let size3;
        const _Math = Math;
        const bound1 = Math.min(size.height, 330);
        const result1 = bound1 * result;
        if (result1 > widthOverride) {
          const size2 = { width: widthOverride, height: widthOverride / result };
          size3 = size2;
        } else {
          size3 = { width: result1, height: bound1 };
        }
        return size3;
      }
    }, items),
    style: tmp.singleImage,
    visible
  };
  return closure_15(metroRequire, obj2);
}
class GravityAttachmentMediaMosaic {
  constructor(sources) {
    sources = sources.sources;
    const handlePressMedia = sources.handlePressMedia;
    const widthOverride = sources.widthOverride;
    let memo;
    const length = sources.length;
    const visible = sources.visible;
    let items = [length, sources];
    let tmp = closure_18();
    memo = memo.useMemo(() => {
      let sum;
      const result = length % 3;
      let num = 3;
      const tmp = length;
      if (0 !== result) {
        num = result;
      }
      const items = [];
      items.push(sources.slice(0, num));
      if (num < tmp) {
        do {
          sum = num + 3;
          let arr3 = items.push(sources.slice(num, sum));
          num = sum;
        } while (sum < length);
      }
      return items;
    }, items);
    let tmp2 = null;
    if (0 !== length) {
      let tmp5;
      if (1 === length) {
        let obj2 = { widthOverride, initialIndex: 0, handlePressMedia, source: sources[0], visible };
        tmp5 = closure_15(SingleImage, obj2);
      } else if (3 === length) {
        let obj3 = { widthOverride, handlePressMedia, sources };
        tmp5 = closure_15(ThreeImages, obj3);
      } else {
        let num = 4;
        if (4 === length) {
          let tmp7 = FourImages;
          const obj4 = { widthOverride, handlePressMedia, sources };
          tmp5 = closure_15(FourImages, obj4);
        } else {
          let tmp4 = closure_6;
          let obj = {
            style: tmp.imagesContainer,
            children: memo.map((sources, index) => {
                    if (1 === sources.length) {
                      const obj2 = { handlePressMedia, source: sources[0] };
                      return closure_15(OneImageRow, obj2, index);
                    } else if (2 === sources.length) {
                      const obj3 = { widthOverride, sources, handlePressMedia, end: index === memo.length - 1 };
                      return closure_15(TwoImagesRow, obj3, index);
                    } else {
                      let num = 0;
                      if (0 !== index) {
                        num = memo[0].length + 3 * (index - 1);
                      }
                      const obj = { widthOverride, handlePressMedia, offset: num, sources, start: 0 === index, end: index === memo.length - 1 };
                      return closure_15(ThreeImagesRow, obj, index);
                    }
                  })
          };
          tmp5 = closure_15(closure_6, obj);
        }
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }
}
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: map1, AnalyticsPages: closure_14 } = Constants);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
const authStore4 = createStyles.createStyles(() => {
  let rect;
  const obj = { media: { borderRadius: nativeDefault.radii.xs }, video: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, thumbhashMedia: { position: "absolute", top: 0, left: 0, zIndex: 1 }, container: { gap: 4 }, imagesContainer: { justifyContent: "center", gap: 4, width: "100%" }, imageRow: { flexDirection: "row", gap: 4 }, topRow: { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderTopStartRadius: nativeDefault.radii.lg }, bottomRow: { overflow: "hidden", borderBottomEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg }, videoIcon: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, padding: 16 }, muteIcon: rect, spoilerText: { backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: 6 }, leftColumn: { overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg }, rightColumn: { overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, gap: 4 }, singleImage: { overflow: "hidden", borderRadius: nativeDefault.radii.lg }, centerContainer: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 2 }, absoluteContainer: { position: "absolute", width: "100%", height: "100%", zIndex: 2 }, iconBg: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE } };
  ({ borderRadius: nativeDefault.radii.xs });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderTopStartRadius: nativeDefault.radii.lg });
  ({ overflow: "hidden", borderBottomEndRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, padding: 16 });
  rect = { position: "absolute", borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, bottom: 8, right: 8 };
  ({ backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: 6 });
  ({ overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderBottomStartRadius: nativeDefault.radii.lg });
  ({ overflow: "hidden", borderTopEndRadius: nativeDefault.radii.lg, borderBottomEndRadius: nativeDefault.radii.lg, gap: 4 });
  ({ overflow: "hidden", borderRadius: nativeDefault.radii.lg });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  ({ backgroundColor: nativeDefault.colors.WHITE });
  return obj;
});
const __initData = { code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default function ICYMIMediaMosaic(message) {
  let _undefined;
  let c4;
  let constants2;
  let constants3;
  let items3;
  let tmp4;
  let tmp9Result;
  message = message.message;
  const widthOverride = message.widthOverride;
  const itemType = message.itemType;
  react = undefined;
  let handlePressMedia;
  let tmp = closure_18();
  let obj = message(itemType[14]);
  let items = [handlePressMedia];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  let obj2 = react;
  [tmp4, c4] = stateFromStores(react.useState(false), 2);
  const visible = tmp5;
  const items1 = [message];
  stateFromStores(react.useState(false), 2);
  const memo = obj2.useMemo(() => {
    let obj = MediaSourceUtil;
    const result = obj.extractMediaSourcesFromMessage(message, message, undefined, ICYMITypes.GRAVITY_VALID_EMBED_TYPES);
    const mapped = result.map((item) => {
      const obj = message(itemType[29]);
      return obj.flattenSource(item);
    });
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const obj2 = _mod12;
    const tmp2 = _slicedToArray(obj2.partition(found, (accessoryType) => "embed" === accessoryType.accessoryType), 2);
    return { allMediaSources: found, nonEmbedSources: tmp2[1], embedSources: tmp2[0] };
  }, items1);
  const allMediaSources = memo.allMediaSources;
  const nonEmbedSources = memo.nonEmbedSources;
  const embedSources = memo.embedSources;
  const items2 = [, , , , ];
  ({ channel_id: arr5[0], id: arr5[1] } = message);
  items2[2] = allMediaSources;
  items2[3] = stateFromStores;
  items2[4] = itemType;
  handlePressMedia = obj2.useCallback((arg0) => {
    let initialIndex;
    let ref;
    let str;
    let items;
    ({ ref, initialIndex } = arg0);
    let obj = widthOverride(itemType[25]);
    obj.itemInteracted(items.id, "message", "press_media");
    const obj2 = widthOverride(itemType[25]);
    const obj3 = { itemId: items.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "media_mosaic", actionIntentType: "open", actionDestinationType: null } };
    obj2.feedItemActioned(obj3);
    const obj4 = message(itemType[33]);
    const obj5 = { page: constants3.ICYMI, object: constants2.ACK_MEDIA_VIEWED, objectType: constants.ACK_SEMI_AUTOMATIC };
    obj4.ack(items.channel_id, obj5, true, true, items.id);
    items = [];
    const item = allMediaSources.forEach((item) => {
      const push = items.push;
      const obj = { embedURI: undefined };
      const merged = Object.assign(item);
      push(obj);
    });
    _undefined(true);
    const obj6 = {
      disableDownload: false,
      initialSources: items,
      initialIndex,
      analyticsSource: "Channel",
      channelId: items.channel_id,
      contextName: str,
      contextIcon: "r",
      originViewOrOriginLayout: ref.current,
      onClose() {
        return _undefined(false);
      }
    };
    str = "";
    const openMediaModal = message(itemType[34]).openMediaModal;
    message(itemType[34]);
    const tmp = itemType;
    const tmp4 = message;
    if (null != stateFromStores) {
      const tmp4Result = tmp4(tmp[35]);
      str = tmp4Result.computeChannelName(tmp9, UserStore, RelationshipStore);
    }
    openMediaModal(obj6);
  }, items2);
  if (0 !== nonEmbedSources.length) {
    let obj3 = { style: tmp.container, children: items3 };
    let obj4 = { widthOverride, sources: nonEmbedSources, handlePressMedia, visible: !tmp4 && visible };
    const tmp9 = closure_17;
    items3 = [closure_15(GravityAttachmentMediaMosaic, obj4), ];
    let mapped;
    const tmp10 = allMediaSources;
    if (embedSources != null) {
      mapped = embedSources.map((source, index) => {
        const obj = { widthOverride, handlePressMedia, initialIndex: index + nonEmbedSources.length, source, visible };
        return closure_15(SingleImage, obj, "gif-" + index);
      });
    }
    items3[1] = mapped;
    const _HermesInternal = HermesInternal;
    let str = "message-image-";
    tmp9Result = tmp9(tmp10, obj3, "message-image-" + message.id);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};
export { GravityAttachmentMediaMosaic };
