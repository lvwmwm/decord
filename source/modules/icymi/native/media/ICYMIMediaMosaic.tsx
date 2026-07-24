// Module ID: 15271
// Function ID: 116404
// Name: isMediaSourceGif
// Dependencies: [57, 31, 27, 4122, 1348, 3767, 1849, 8350, 653, 33, 4130, 689, 4317, 668, 566, 8342, 8346, 3991, 4131, 15272, 5085, 4126, 1212, 8330, 4674, 4660, 8365, 10746, 4658, 15227, 8320, 7086, 1327, 22, 5069, 8318, 4320, 2]
// Exports: default

// Module 15271 (isMediaSourceGif)
import _slicedToArray from "_slicedToArray";
import MessageEmbedTypes from "MessageEmbedTypes";
import get_ActivityIndicator from "VoiceXIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "apply";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
const require = arg1;
function isMediaSourceGif(source) {
  let isGIFV = source.isGIFV;
  if (!isGIFV) {
    isGIFV = require(4317) /* urlMatchesFileExtension */.urlMatchesFileExtension(source.sourceURI, require(668) /* keys */.GIF_RE_IOS);
    const obj = require(4317) /* urlMatchesFileExtension */;
  }
  return isGIFV;
}
function MediaMosaicVideo(source) {
  let autoplay;
  let height;
  let style;
  let width;
  source = source.source;
  ({ height, width, autoplay, style } = source);
  const tmp = callback4();
  let obj = require(566) /* initialize */;
  const items = [closure_11];
  let isGIFV = obj.useStateFromStores(items, () => outer1_11.videosMuted());
  const rnvHttpEngine = require(8342) /* apexExperiment */.useRnvHttpEngine();
  obj = {};
  obj = {};
  let uri = source.videoURI;
  const obj2 = require(8342) /* apexExperiment */;
  const tmp3 = closure_15;
  if (null == uri) {
    uri = source.sourceURI;
  }
  if (null == uri) {
    uri = source.uri;
  }
  obj.videoURI = uri;
  obj.src = obj;
  obj.height = height;
  obj.width = width;
  obj.postponeRender = false;
  obj.paused = !autoplay;
  obj.muted = isGIFV;
  obj.resizeMode = "cover";
  const items1 = [tmp.media, style];
  obj.style = items1;
  obj.videoStyle = tmp.video;
  if (!isGIFV) {
    isGIFV = source.isGIFV;
  }
  obj.disableFocus = isGIFV;
  obj.httpEngine = rnvHttpEngine;
  return tmp3(importDefault(8346), obj);
}
function MediaMosaicImage(source) {
  let dimensions;
  let style;
  source = source.source;
  ({ dimensions, style } = source);
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  let num = 0;
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = source(3991);
  const fn = function c() {
    const obj = {};
    let num = 1;
    if (first) {
      num = 0;
    }
    obj.opacity = source(4131).withTiming(num, { duration: 150 });
    return obj;
  };
  obj = { withTiming: source(4131).withTiming, imageFinishedLoading: first };
  fn.__closure = obj;
  fn.__workletHash = 7803531897566;
  fn.__initData = closure_19;
  const items = [, , ];
  ({ height: arr[0], placeholder: arr[1], width: arr[2] } = source);
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = {};
  const memo = React.useMemo(() => {
    if (null != source.placeholder) {
      const obj = { uri: source(15272).createThumbhashImageFromPlaceholder(source.placeholder) };
      ({ width: obj.width, height: obj.height } = source);
      return obj;
    }
  }, items);
  const obj1 = { style: items1 };
  items1 = [animatedStyle, tmp.thumbhashMedia];
  const items2 = [style, tmp.media, dimensions];
  obj1.children = callback2(first(5085), { source: memo, style: items2 });
  const items3 = [callback2(first(3991).View, obj1), ];
  const obj2 = {
    source,
    style: items4,
    onLoadEnd() {
      return dependencyMap(true);
    }
  };
  items4 = [tmp.media, style, dimensions];
  if (source.isSpoiler) {
    num = 100;
  }
  obj2.blurRadius = num;
  items3[1] = callback2(first(3991).Image, obj2, source.uri);
  obj.children = items3;
  return closure_17(closure_16, obj);
}
function Media(handlePressMedia) {
  let dimensions;
  let initialIndex;
  let source;
  ({ source, dimensions, initialIndex } = handlePressMedia);
  handlePressMedia = handlePressMedia.handlePressMedia;
  const style = handlePressMedia.style;
  let first;
  let React;
  let stateFromStores;
  const tmp = callback4();
  const ref = React.useRef(null);
  const spoiler = source.spoiler;
  let tmp4 = null != spoiler;
  if (tmp4) {
    tmp4 = spoiler;
  }
  const tmp5 = first(React.useState(tmp4), 2);
  first = tmp5[0];
  React = tmp5[1];
  const items = [handlePressMedia, initialIndex, first];
  const callback = React.useCallback(() => {
    if (first) {
      callback(false);
    } else {
      const obj = { ref, initialIndex };
      handlePressMedia(obj);
    }
  }, items);
  let obj = initialIndex(ref[14]);
  const items1 = [closure_11];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_11.videosMuted());
  let obj1 = initialIndex(ref[14]);
  const items2 = [_isNativeReflectConstruct];
  obj = { ref, onPress: callback, style: dimensions };
  let tmp12 = first;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_7.useReducedMotion);
  if (first) {
    obj = { style: tmp.centerContainer };
    obj1 = { style: tmp.spoilerText };
    const obj2 = { maxFontSizeMultiplier: 1, variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
    const intl = initialIndex(ref[22]).intl;
    obj2.children = intl.string(initialIndex(ref[22]).t["F+x38C"]).toUpperCase();
    obj1.children = callback2(initialIndex(ref[21]).Text, obj2);
    obj.children = callback2(closure_6, obj1);
    tmp12 = callback2(closure_6, obj);
    const str = intl.string(initialIndex(ref[22]).t["F+x38C"]);
  }
  const items3 = [tmp12, , , ];
  let tmp20 = null != source.videoURI && !first;
  if (tmp20) {
    tmp20 = !isMediaSourceGif(source);
  }
  if (tmp20) {
    tmp20 = stateFromStores1;
  }
  if (tmp20) {
    const obj3 = { style: tmp.centerContainer };
    const obj4 = { style: tmp.videoIcon };
    const obj5 = { color: handlePressMedia(ref[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
    obj4.children = callback2(initialIndex(ref[23]).PlayIcon, obj5);
    obj3.children = callback2(closure_6, obj4);
    tmp20 = callback2(closure_6, obj3);
  }
  items3[1] = tmp20;
  let obj9 = initialIndex(ref[24]);
  let tmp30 = null;
  if (obj9.isVideo(source.uri)) {
    tmp30 = null;
    if (!isMediaSourceGif(source)) {
      const obj6 = { style: tmp.absoluteContainer };
      let obj7 = {};
      const items4 = [tmp.muteIcon, stateFromStores ? tmp.iconBg : tmp.iconBgSelected];
      obj7.style = items4;
      obj7.onPress = function onPress() {
        return handlePressMedia(ref[26]).setVideosMuted(!stateFromStores);
      };
      obj7.activeOpacity = 0.8;
      let VoiceXIcon = initialIndex;
      if (stateFromStores) {
        VoiceXIcon = VoiceXIcon(tmp38[27]).VoiceXIcon;
        const obj8 = { color: handlePressMedia(tmp38[11]).colors.INTERACTIVE_TEXT_DEFAULT, size: "sm" };
        let tmp37Result = tmp37(VoiceXIcon, obj8);
      } else {
        obj9 = { color: handlePressMedia(tmp38[11]).colors.BLACK, size: "sm" };
        tmp37Result = tmp37(VoiceXIcon(tmp38[28]).VoiceNormalIcon, obj9);
      }
      obj7.children = tmp37Result;
      obj7 = callback2(initialIndex(ref[25]).PressableOpacity, obj7);
      obj6.children = obj7;
      callback2(closure_6, obj6);
      const tmp32 = callback2;
      const tmp33 = closure_6;
      const tmp34 = callback2;
    }
  }
  items3[2] = tmp30;
  if (obj15.isVideo(source.uri)) {
    if (null != source.videoURI) {
      const obj10 = { source };
      ({ height: obj16.height, width: obj16.width } = dimensions);
      obj10.style = style;
      obj10.autoplay = handlePressMedia.visible;
      let tmp44 = callback2(MediaMosaicVideo, obj10);
    }
    items3[3] = tmp44;
    obj.children = items3;
    return closure_17(stateFromStores, obj);
  }
  tmp44 = callback2(MediaMosaicImage, { source, style, dimensions, isSpoiler: first });
}
function OneImageRow(arg0) {
  let handlePressMedia;
  let source;
  let widthOverride;
  ({ source, handlePressMedia, widthOverride } = arg0);
  const tmp2 = useMaxWidth(widthOverride);
  obj = { style: items, children: callback2(Media, { handlePressMedia, initialIndex: 0, source, dimensions: obj }) };
  items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = callback4());
  obj = { width: tmp2, height: tmp2 / 1.5 };
  return callback2(closure_6, obj);
}
function ThreeImagesRow(widthOverride) {
  let end;
  let importDefault;
  let require;
  let sources;
  let start;
  ({ sources, start, end, offset: require, handlePressMedia: importDefault } = widthOverride);
  const tmp = callback4();
  let closure_2 = useMaxWidth(widthOverride.widthOverride);
  let obj = {};
  const items = [tmp.imageRow, , ];
  if (start) {
    start = tmp.topRow;
  }
  items[1] = start;
  if (end) {
    end = tmp.bottomRow;
  }
  items[2] = end;
  obj.style = items;
  obj.children = sources.map((source) => {
    obj = { handlePressMedia: closure_1, initialIndex: closure_0 + arg1, source, dimensions: obj };
    obj = { width: (closure_2 - 8) / 3, height: (closure_2 - 8) / 3 };
    return outer1_15(outer1_23, obj, closure_0 + arg1);
  });
  return closure_15(closure_6, obj);
}
function TwoImagesRow(widthOverride) {
  let end;
  let require;
  let sources;
  ({ sources, handlePressMedia: require, end } = widthOverride);
  const tmp = callback4();
  const tmp2 = useMaxWidth(widthOverride.widthOverride);
  let obj = { width: (tmp2 - 4) / 2, height: (tmp2 - 4) / 2 / 0.75 };
  obj = {};
  const items = [, , ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  if (end) {
    end = tmp.bottomRow;
  }
  items[2] = end;
  obj.style = items;
  obj.children = sources.map((source, initialIndex) => {
    obj = { handlePressMedia: closure_0, initialIndex, source, dimensions: obj };
    return outer1_15(outer1_23, obj, initialIndex);
  });
  return closure_15(closure_6, obj);
}
function ThreeImages(widthOverride) {
  let handlePressMedia;
  let sources;
  ({ sources, handlePressMedia } = widthOverride);
  const tmp = callback4();
  const tmp2 = useMaxWidth(widthOverride.widthOverride);
  let obj = { style: items };
  items = [, ];
  ({ imagesContainer: arr[0], imageRow: arr[1] } = tmp);
  obj = { style: tmp.leftColumn, children: callback2(Media, obj) };
  obj = { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: obj1 };
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = { style: tmp.rightColumn };
  const items2 = [callback2(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: obj4 }), callback2(Media, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: obj6 })];
  obj2.children = items2;
  items1[1] = callback3(closure_6, obj2);
  obj.children = items1;
  return callback3(closure_6, obj);
}
function FourImages(widthOverride) {
  let handlePressMedia;
  let sources;
  ({ sources, handlePressMedia } = widthOverride);
  const tmp = callback4();
  const tmp2 = useMaxWidth(widthOverride.widthOverride);
  let obj = { width: tmp2 / 2 - 4, height: (tmp2 / 2 - 4) / 1.5 };
  obj = { style: tmp.imagesContainer };
  obj = { style: items };
  items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  const items1 = [callback2(Media, { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: obj }), callback2(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: obj })];
  obj.children = items1;
  const items2 = [callback3(closure_6, obj), ];
  const obj3 = { style: items3 };
  items3 = [, ];
  ({ imageRow: arr4[0], bottomRow: arr4[1] } = tmp);
  const items4 = [callback2(Media, { handlePressMedia, initialIndex: 2, source: sources[2], dimensions: obj }), callback2(Media, { handlePressMedia, initialIndex: 3, source: sources[3], dimensions: obj })];
  obj3.children = items4;
  items2[1] = callback3(closure_6, obj3);
  obj.children = items2;
  return callback3(closure_6, obj);
}
function SingleImage(source) {
  let handlePressMedia;
  let initialIndex;
  let visible;
  let widthOverride;
  source = source.source;
  ({ initialIndex, handlePressMedia, visible, widthOverride } = source);
  const tmp = callback4();
  const tmp2 = useMaxWidth(widthOverride);
  const importDefault = tmp2;
  const items = [, , ];
  ({ width: arr[0], height: arr[1] } = source);
  items[2] = tmp2;
  let obj = { style: tmp.imagesContainer };
  obj = {
    handlePressMedia,
    initialIndex,
    source,
    dimensions: React.useMemo(() => {
      const result = source.width / source.height;
      if (result >= 1) {
        const _Math2 = Math;
        const bound = Math.min(source.width, closure_1);
        let obj = { height: bound / result, width: bound };
        return obj;
      } else {
        const _Math = Math;
        const bound1 = Math.min(source.height, 330);
        const result1 = bound1 * result;
        if (result1 > closure_1) {
          obj = { width: closure_1, height: closure_1 / result };
        } else {
          obj = { width: result1, height: bound1 };
        }
        return obj;
      }
    }, items),
    style: tmp.singleImage,
    visible
  };
  obj.children = callback2(Media, obj);
  return callback2(closure_6, obj);
}
class GravityAttachmentMediaMosaic {
  constructor(arg0) {
    sources = global.sources;
    handlePressMedia = global.handlePressMedia;
    widthOverride = global.widthOverride;
    length = sources.length;
    items = [, ];
    items[0] = length;
    items[1] = sources;
    tmp = f116430();
    memo = MessageEmbedTypes.useMemo(() => {
      let sum;
      const items = [];
      const result = length % 3;
      let num = 3;
      if (0 !== result) {
        num = result;
      }
      items.push(sources.slice(0, num));
      if (num < length) {
        do {
          let tmp3 = sources;
          sum = num + 3;
          let arr = items.push(sources.slice(num, sum));
          let tmp6 = length;
          num = sum;
        } while (sum < length);
      }
      return items;
    }, items);
    MessageEmbedTypes = memo;
    num = 0;
    if (0 === length) {
      return null;
    } else {
      num3 = 1;
      if (1 === length) {
        tmp9 = jsx;
        tmp10 = SingleImage;
        obj = {};
        obj.widthOverride = widthOverride;
        obj.initialIndex = num;
        obj.handlePressMedia = handlePressMedia;
        num = sources[num];
        obj.source = num;
        obj.visible = global.visible;
        tmp4 = jsx(SingleImage, obj);
      } else {
        num4 = 3;
        if (3 === length) {
          tmp7 = jsx;
          tmp8 = ThreeImages;
          obj1 = {};
          obj1.widthOverride = widthOverride;
          obj1.handlePressMedia = handlePressMedia;
          obj1.sources = sources;
          tmp4 = jsx(ThreeImages, obj1);
        } else {
          num2 = 4;
          if (4 === length) {
            tmp5 = jsx;
            tmp6 = FourImages;
            obj2 = {};
            obj2.widthOverride = widthOverride;
            obj2.handlePressMedia = handlePressMedia;
            obj2.sources = sources;
            tmp4 = jsx(FourImages, obj2);
          } else {
            tmp2 = jsx;
            tmp3 = View;
            obj = {};
            obj.style = tmp.imagesContainer;
            obj.children = memo.map((sources) => {
              if (1 === sources.length) {
                let obj = { handlePressMedia, source: sources[0] };
                return outer1_15(outer1_24, obj, arg1);
              } else if (2 === sources.length) {
                obj = { widthOverride, sources, handlePressMedia, end: arg1 === memo.length - 1 };
                return outer1_15(outer1_26, obj, arg1);
              } else {
                let num2 = 0;
                if (0 !== arg1) {
                  num2 = memo[0].length + 3 * (arg1 - 1);
                }
                obj = { widthOverride, handlePressMedia, offset: num2, sources, start: 0 === arg1, end: arg1 === memo.length - 1 };
                return outer1_15(outer1_25, obj, arg1);
              }
            });
            tmp4 = jsx(View, obj);
          }
        }
      }
      tmp11 = tmp4;
    }
    return;
  }
}
function useMaxWidth(widthOverride) {
  let diff = widthOverride;
  const context = React.useContext(require(15227) /* useICYMIContextConstructor */.ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (null != context) {
      width = context.width;
    }
    diff = width - context.inset - 2 * context.margin;
  }
  return diff;
}
({ Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: closure_13, AnalyticsPages: closure_14 } = ME);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { borderRadius: importDefault(689).radii.xs };
  obj.media = obj;
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH };
  obj.video = obj;
  obj.thumbhashMedia = { position: "absolute", top: 0, left: 0, zIndex: 1 };
  obj.container = { gap: 4 };
  obj.imagesContainer = { justifyContent: "center", gap: 4, width: "100%" };
  obj.imageRow = { flexDirection: "row", gap: 4 };
  obj.topRow = { overflow: "hidden", borderTopEndRadius: importDefault(689).radii.lg, borderTopStartRadius: importDefault(689).radii.lg };
  const obj1 = { overflow: "hidden", borderTopEndRadius: importDefault(689).radii.lg, borderTopStartRadius: importDefault(689).radii.lg };
  obj.bottomRow = { overflow: "hidden", borderBottomEndRadius: importDefault(689).radii.lg, borderBottomStartRadius: importDefault(689).radii.lg };
  const obj2 = { overflow: "hidden", borderBottomEndRadius: importDefault(689).radii.lg, borderBottomStartRadius: importDefault(689).radii.lg };
  obj.videoIcon = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(689).radii.round, padding: 16 };
  const obj4 = { position: "absolute", borderRadius: importDefault(689).radii.round, padding: importDefault(689).space.PX_4, bottom: 8, right: 8 };
  obj.muteIcon = obj4;
  const obj3 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(689).radii.round, padding: 16 };
  obj.spoilerText = { backgroundColor: importDefault(689).colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: importDefault(689).radii.lg, paddingHorizontal: importDefault(689).space.PX_12, paddingVertical: 6 };
  const obj5 = { backgroundColor: importDefault(689).colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: importDefault(689).radii.lg, paddingHorizontal: importDefault(689).space.PX_12, paddingVertical: 6 };
  obj.leftColumn = { overflow: "hidden", borderTopStartRadius: importDefault(689).radii.lg, borderBottomStartRadius: importDefault(689).radii.lg };
  const obj6 = { overflow: "hidden", borderTopStartRadius: importDefault(689).radii.lg, borderBottomStartRadius: importDefault(689).radii.lg };
  obj.rightColumn = { overflow: "hidden", borderTopEndRadius: importDefault(689).radii.lg, borderBottomEndRadius: importDefault(689).radii.lg, gap: 4 };
  const obj7 = { overflow: "hidden", borderTopEndRadius: importDefault(689).radii.lg, borderBottomEndRadius: importDefault(689).radii.lg, gap: 4 };
  obj.singleImage = { overflow: "hidden", borderRadius: importDefault(689).radii.lg };
  obj.centerContainer = { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 2 };
  obj.absoluteContainer = { position: "absolute", width: "100%", height: "100%", zIndex: 2 };
  const obj8 = { overflow: "hidden", borderRadius: importDefault(689).radii.lg };
  obj.iconBg = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER };
  const obj9 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER };
  obj.iconBgSelected = { backgroundColor: importDefault(689).colors.WHITE };
  return obj;
});
let closure_19 = { code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default function ICYMIMediaMosaic(message) {
  message = message.message;
  const widthOverride = message.widthOverride;
  const itemType = message.itemType;
  let c5;
  let allMediaSources;
  let nonEmbedSources;
  let callback;
  let obj = message(itemType[14]);
  let items = [callback];
  const stateFromStores = obj.useStateFromStores(items, () => callback.getChannel(message.getChannelId()));
  const tmp3 = stateFromStores(React.useState(false), 2);
  React = tmp3[1];
  c5 = tmp4;
  const items1 = [message];
  const memo = React.useMemo(() => {
    let obj = message(itemType[30]);
    const result = obj.extractMediaSourcesFromMessage(message, message, undefined, message(itemType[31]).GRAVITY_VALID_EMBED_TYPES);
    const mapped = result.map((closure_1) => message(itemType[30]).flattenSource(closure_1));
    const found = mapped.filter(message(itemType[32]).isNotNullish);
    const tmp2 = stateFromStores(message(itemType[33]).partition(found, (accessoryType) => "embed" === accessoryType.accessoryType), 2);
    obj = { allMediaSources: found, nonEmbedSources: tmp2[1], embedSources: tmp2[0] };
    return obj;
  }, items1);
  allMediaSources = memo.allMediaSources;
  nonEmbedSources = memo.nonEmbedSources;
  const embedSources = memo.embedSources;
  const items2 = [, , , , ];
  ({ channel_id: arr5[0], id: arr5[1] } = message);
  items2[2] = allMediaSources;
  items2[3] = stateFromStores;
  items2[4] = itemType;
  callback = React.useCallback((arg0) => {
    let initialIndex;
    let ref;
    ({ ref, initialIndex } = arg0);
    let obj = widthOverride(itemType[26]);
    obj.itemInteracted(items.id, "message", "press_media");
    let obj1 = widthOverride(itemType[26]);
    obj = { itemId: items.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "media_mosaic", actionIntentType: "open", actionDestinationType: null } };
    obj1.feedItemActioned(obj);
    obj = { page: outer1_14.ICYMI, object: outer1_13.ACK_MEDIA_VIEWED, objectType: outer1_12.ACK_SEMI_AUTOMATIC };
    message(itemType[34]).ack(items.channel_id, obj, true, true, items.id);
    items = [];
    const item = allMediaSources.forEach((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["embedURI"] = undefined;
      items.push(obj);
    });
    callback(true);
    const obj4 = message(itemType[34]);
    obj1 = { disableDownload: false, initialSources: items, initialIndex, analyticsSource: "Channel", channelId: items.channel_id };
    let str = "";
    if (null != stateFromStores) {
      str = message(itemType[36]).computeChannelName(stateFromStores, outer1_10, outer1_9);
      const obj8 = message(itemType[36]);
    }
    obj1.contextName = str;
    obj1.contextIcon = undefined;
    obj1.originViewOrOriginLayout = ref.current;
    obj1.onClose = function onClose() {
      return outer1_4(false);
    };
    message(itemType[35]).openMediaModal(obj1);
  }, items2);
  if (0 !== nonEmbedSources.length) {
    obj = { style: tmp.container };
    obj = { widthOverride, sources: nonEmbedSources, handlePressMedia: callback, visible: tmp4 };
    const items3 = [callback2(GravityAttachmentMediaMosaic, obj), ];
    let mapped;
    if (null != embedSources) {
      mapped = embedSources.map((source) => outer1_15(outer1_29, { widthOverride, handlePressMedia: callback, initialIndex: arg1 + nonEmbedSources.length, source, visible: c5 }, "gif-" + arg1));
    }
    items3[1] = mapped;
    obj.children = items3;
    const _HermesInternal = HermesInternal;
    let tmp8Result = closure_17(allMediaSources, obj, "message-image-" + message.id);
    const tmp8 = closure_17;
    const tmp9 = allMediaSources;
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
export { GravityAttachmentMediaMosaic };
