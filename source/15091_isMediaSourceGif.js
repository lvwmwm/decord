// Module ID: 15091
// Function ID: 113812
// Name: isMediaSourceGif
// Dependencies: []
// Exports: default

// Module 15091 (isMediaSourceGif)
function isMediaSourceGif(source) {
  let isGIFV = source.isGIFV;
  if (!isGIFV) {
    isGIFV = arg1(dependencyMap[12]).urlMatchesFileExtension(source.sourceURI, arg1(dependencyMap[13]).GIF_RE_IOS);
    const obj = arg1(dependencyMap[12]);
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
  let obj = arg1(dependencyMap[14]);
  const items = [closure_11];
  let isGIFV = obj.useStateFromStores(items, () => closure_11.videosMuted());
  const rnvHttpEngine = arg1(dependencyMap[15]).useRnvHttpEngine();
  obj = {};
  obj = {};
  let uri = source.videoURI;
  const obj2 = arg1(dependencyMap[15]);
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
  return tmp3(importDefault(dependencyMap[16]), obj);
}
function MediaMosaicImage(source) {
  let dimensions;
  let style;
  source = source.source;
  const arg1 = source;
  ({ dimensions, style } = source);
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  let num = 0;
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  let obj = arg1(closure_2[17]);
  const fn = function c() {
    const obj = {};
    let num = 1;
    if (first) {
      num = 0;
    }
    obj.opacity = source(closure_2[18]).withTiming(num, { duration: 150 });
    return obj;
  };
  obj = { withTiming: arg1(closure_2[18]).withTiming, imageFinishedLoading: first };
  fn.__closure = obj;
  fn.__workletHash = 7803531897566;
  fn.__initData = closure_19;
  const items = [, , ];
  ({ height: arr[0], placeholder: arr[1], width: arr[2] } = source);
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = {};
  const memo = React.useMemo(() => {
    if (null != source.placeholder) {
      const obj = { uri: source(closure_2[19]).createThumbhashImageFromPlaceholder(source.placeholder) };
      ({ width: obj.width, height: obj.height } = source);
      return obj;
    }
  }, items);
  const obj1 = { style: items1 };
  const items1 = [animatedStyle, tmp.thumbhashMedia];
  const items2 = [style, tmp.media, dimensions];
  obj1.children = callback2(importDefault(closure_2[20]), { source: memo, style: items2 });
  const items3 = [callback2(importDefault(closure_2[17]).View, obj1), ];
  const obj2 = {
    source,
    style: items4,
    onLoadEnd() {
      return callback(true);
    }
  };
  const items4 = [tmp.media, style, dimensions];
  if (source.isSpoiler) {
    num = 100;
  }
  obj2.blurRadius = num;
  items3[1] = callback2(importDefault(closure_2[17]).Image, obj2, source.uri);
  obj.children = items3;
  return closure_17(closure_16, obj);
}
function Media(handlePressMedia) {
  let dimensions;
  let initialIndex;
  let source;
  ({ source, dimensions, initialIndex } = handlePressMedia);
  const arg1 = initialIndex;
  handlePressMedia = handlePressMedia.handlePressMedia;
  const importDefault = handlePressMedia;
  const style = handlePressMedia.style;
  let callback;
  let React;
  let stateFromStores;
  const tmp = callback4();
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const spoiler = source.spoiler;
  let tmp4 = null != spoiler;
  if (tmp4) {
    tmp4 = spoiler;
  }
  const tmp5 = callback(React.useState(tmp4), 2);
  const first = tmp5[0];
  callback = first;
  React = tmp5[1];
  const items = [handlePressMedia, initialIndex, first];
  callback = React.useCallback(() => {
    if (first) {
      callback(false);
    } else {
      const obj = { ref, initialIndex };
      handlePressMedia(obj);
    }
  }, items);
  let obj = arg1(dependencyMap[14]);
  const items1 = [closure_11];
  stateFromStores = obj.useStateFromStores(items1, () => closure_11.videosMuted());
  let obj1 = arg1(dependencyMap[14]);
  const items2 = [closure_7];
  obj = { ref, onPress: callback, style: dimensions };
  let tmp12 = first;
  const stateFromStores1 = obj1.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  if (first) {
    obj = { style: tmp.centerContainer };
    obj1 = { style: tmp.spoilerText };
    const obj2 = { position: true, height: true, overflow: true };
    const intl = arg1(dependencyMap[22]).intl;
    obj2.children = intl.string(arg1(dependencyMap[22]).t.F+x38C).toUpperCase();
    obj1.children = callback2(arg1(dependencyMap[21]).Text, obj2);
    obj.children = callback2(closure_6, obj1);
    tmp12 = callback2(closure_6, obj);
    const str = intl.string(arg1(dependencyMap[22]).t.F+x38C);
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
    const obj5 = { color: importDefault(dependencyMap[11]).colors.REDESIGN_BUTTON_TERTIARY_TEXT, size: "lg" };
    obj4.children = callback2(arg1(dependencyMap[23]).PlayIcon, obj5);
    obj3.children = callback2(closure_6, obj4);
    tmp20 = callback2(closure_6, obj3);
  }
  items3[1] = tmp20;
  let obj9 = arg1(dependencyMap[24]);
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
      let VoiceXIcon = arg1;
      if (stateFromStores) {
        VoiceXIcon = VoiceXIcon(tmp38[27]).VoiceXIcon;
        const obj8 = { color: importDefault(tmp38[11]).colors.INTERACTIVE_TEXT_DEFAULT, size: "sm" };
        let tmp37Result = tmp37(VoiceXIcon, obj8);
      } else {
        obj9 = { color: importDefault(tmp38[11]).colors.BLACK, size: "sm" };
        tmp37Result = tmp37(VoiceXIcon(tmp38[28]).VoiceNormalIcon, obj9);
      }
      obj7.children = tmp37Result;
      obj7 = callback2(arg1(dependencyMap[25]).PressableOpacity, obj7);
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
  let obj = { style: items, children: callback2(Media, { handlePressMedia, initialIndex: 0, source, dimensions: obj }) };
  const items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = callback4());
  obj = { width: tmp2, height: tmp2 / 1.5 };
  return callback2(closure_6, obj);
}
function ThreeImagesRow(widthOverride) {
  let end;
  let sources;
  let start;
  ({ sources, start, end, offset: closure_0, handlePressMedia: closure_1 } = widthOverride);
  const tmp = callback4();
  let closure_2 = useMaxWidth(widthOverride.widthOverride);
  const obj = {};
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
    let obj = { handlePressMedia: closure_1, initialIndex: closure_0 + arg1, source, dimensions: obj };
    obj = { width: (closure_2 - 8) / 3, height: (closure_2 - 8) / 3 };
    return callback(closure_23, obj, closure_0 + arg1);
  });
  return closure_15(closure_6, obj);
}
function TwoImagesRow(widthOverride) {
  let end;
  let sources;
  ({ sources, handlePressMedia: closure_0, end } = widthOverride);
  const tmp = callback4();
  const tmp2 = useMaxWidth(widthOverride.widthOverride);
  let obj = { width: (tmp2 - 4) / 2, height: (tmp2 - 4) / 2 / 0.75 };
  const importDefault = obj;
  obj = {};
  const items = [, , ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  if (end) {
    end = tmp.bottomRow;
  }
  items[2] = end;
  obj.style = items;
  obj.children = sources.map((source, initialIndex) => {
    const obj = { handlePressMedia: closure_0, initialIndex, source, dimensions: obj };
    return callback(closure_23, obj, initialIndex);
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
  const items = [, ];
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
  const items = [, ];
  ({ imageRow: arr[0], topRow: arr[1] } = tmp);
  const items1 = [callback2(Media, { handlePressMedia, initialIndex: 0, source: sources[0], dimensions: obj }), callback2(Media, { handlePressMedia, initialIndex: 1, source: sources[1], dimensions: obj })];
  obj.children = items1;
  const items2 = [callback3(closure_6, obj), ];
  const obj3 = { style: items3 };
  const items3 = [, ];
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
  const arg1 = source;
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
        const bound = Math.min(source.width, tmp2);
        let obj = { height: bound / result, width: bound };
        return obj;
      } else {
        const _Math = Math;
        const bound1 = Math.min(source.height, 330);
        const result1 = bound1 * result;
        if (result1 > globalThis) {
          obj = { width: tmp2, height: tmp2 / result };
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
    arg1 = sources;
    handlePressMedia = global.handlePressMedia;
    importDefault = handlePressMedia;
    widthOverride = global.widthOverride;
    dependencyMap = widthOverride;
    length = sources.length;
    items = [, ];
    items[0] = length;
    items[1] = sources;
    tmp = f113838();
    memo = importAll.useMemo(() => {
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
          let tmp3 = closure_0;
          sum = num + 3;
          let arr = items.push(closure_0.slice(num, sum));
          let tmp6 = closure_3;
          num = sum;
        } while (sum < closure_3);
      }
      return items;
    }, items);
    importAll = memo;
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
                return callback(closure_24, obj, arg1);
              } else if (2 === sources.length) {
                obj = { widthOverride, sources, handlePressMedia, end: arg1 === memo.length - 1 };
                return callback(closure_26, obj, arg1);
              } else {
                let num2 = 0;
                if (0 !== arg1) {
                  num2 = memo[0].length + 3 * (arg1 - 1);
                }
                obj = { widthOverride, handlePressMedia, offset: num2, sources, start: 0 === arg1, end: arg1 === memo.length - 1 };
                return callback(closure_25, obj, arg1);
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
  const context = React.useContext(arg1(dependencyMap[29]).ICYMIContext);
  if (null == widthOverride) {
    let width;
    if (null != context) {
      width = context.width;
    }
    diff = width - context.inset - 2 * context.margin;
  }
  return diff;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticsObjectTypes: closure_12, AnalyticsObjects: closure_13, AnalyticsPages: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
let closure_18 = arg1(dependencyMap[10]).createStyles(() => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[11]).radii.xs };
  obj.media = obj;
  obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH };
  obj.video = obj;
  obj.thumbhashMedia = {};
  obj.container = { gap: 4 };
  obj.imagesContainer = { right: "/assets/design/components/Illustration/native/redesign/generated/images", height: 160, add: 160 };
  obj.imageRow = { 0: null, 9223372036854775807: null };
  obj.topRow = { overflow: "hidden", borderTopEndRadius: importDefault(dependencyMap[11]).radii.lg, borderTopStartRadius: importDefault(dependencyMap[11]).radii.lg };
  const obj1 = { overflow: "hidden", borderTopEndRadius: importDefault(dependencyMap[11]).radii.lg, borderTopStartRadius: importDefault(dependencyMap[11]).radii.lg };
  obj.bottomRow = { overflow: "hidden", borderBottomEndRadius: importDefault(dependencyMap[11]).radii.lg, borderBottomStartRadius: importDefault(dependencyMap[11]).radii.lg };
  const obj2 = { overflow: "hidden", borderBottomEndRadius: importDefault(dependencyMap[11]).radii.lg, borderBottomStartRadius: importDefault(dependencyMap[11]).radii.lg };
  obj.videoIcon = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[11]).radii.round, padding: 16 };
  const obj3 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[11]).radii.round, padding: 16 };
  obj.muteIcon = { borderRadius: importDefault(dependencyMap[11]).radii.round, padding: importDefault(dependencyMap[11]).space.PX_4 };
  const obj4 = { borderRadius: importDefault(dependencyMap[11]).radii.round, padding: importDefault(dependencyMap[11]).space.PX_4 };
  obj.spoilerText = { backgroundColor: importDefault(dependencyMap[11]).colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: importDefault(dependencyMap[11]).radii.lg, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_12, paddingVertical: 6 };
  const obj5 = { backgroundColor: importDefault(dependencyMap[11]).colors.SPOILER_HIDDEN_BACKGROUND, borderRadius: importDefault(dependencyMap[11]).radii.lg, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_12, paddingVertical: 6 };
  obj.leftColumn = { overflow: "hidden", borderTopStartRadius: importDefault(dependencyMap[11]).radii.lg, borderBottomStartRadius: importDefault(dependencyMap[11]).radii.lg };
  const obj6 = { overflow: "hidden", borderTopStartRadius: importDefault(dependencyMap[11]).radii.lg, borderBottomStartRadius: importDefault(dependencyMap[11]).radii.lg };
  obj.rightColumn = { overflow: "hidden", borderTopEndRadius: importDefault(dependencyMap[11]).radii.lg, borderBottomEndRadius: importDefault(dependencyMap[11]).radii.lg, gap: 4 };
  const obj7 = { overflow: "hidden", borderTopEndRadius: importDefault(dependencyMap[11]).radii.lg, borderBottomEndRadius: importDefault(dependencyMap[11]).radii.lg, gap: 4 };
  obj.singleImage = { overflow: "hidden", borderRadius: importDefault(dependencyMap[11]).radii.lg };
  obj.centerContainer = { 9223372036854775807: true, 0: false, 0: "", -9223372036854775808: false, 9223372036854775807: false, 9223372036854775807: false };
  obj.absoluteContainer = {};
  const obj8 = { overflow: "hidden", borderRadius: importDefault(dependencyMap[11]).radii.lg };
  obj.iconBg = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER };
  const obj9 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER };
  obj.iconBgSelected = { backgroundColor: importDefault(dependencyMap[11]).colors.WHITE };
  return obj;
});
let closure_19 = { code: "function ICYMIMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}" };
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/icymi/native/media/ICYMIMediaMosaic.tsx");

export default function ICYMIMediaMosaic(message) {
  message = message.message;
  const arg1 = message;
  const widthOverride = message.widthOverride;
  const importDefault = widthOverride;
  const itemType = message.itemType;
  const dependencyMap = itemType;
  let tmp4;
  let allMediaSources;
  let closure_7;
  let closure_8;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => callback.getChannel(message.getChannelId()));
  let callback = stateFromStores;
  const tmp3 = callback(React.useState(false), 2);
  const React = tmp3[1];
  tmp4 = !tmp3[0] && message.visible;
  const items1 = [message];
  const memo = React.useMemo(() => {
    let obj = message(itemType[30]);
    const result = obj.extractMediaSourcesFromMessage(message, message, undefined, message(itemType[31]).GRAVITY_VALID_EMBED_TYPES);
    const mapped = result.map((closure_1) => callback(closure_2[30]).flattenSource(closure_1));
    const found = mapped.filter(message(itemType[32]).isNotNullish);
    const tmp2 = stateFromStores(message(itemType[33]).partition(found, (accessoryType) => "embed" === accessoryType.accessoryType), 2);
    obj = { allMediaSources: found, nonEmbedSources: tmp2[1], embedSources: tmp2[0] };
    return obj;
  }, items1);
  allMediaSources = memo.allMediaSources;
  const nonEmbedSources = memo.nonEmbedSources;
  closure_7 = nonEmbedSources;
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
    obj.itemInteracted(message.id, "message", "press_media");
    let obj1 = widthOverride(itemType[26]);
    obj = { itemId: message.id, itemType, actionParameters: { "Bool(false)": -1556020959, "Bool(false)": 1912603872, "Bool(false)": 7, "Bool(false)": 370 } };
    obj1.feedItemActioned(obj);
    obj = { page: constants3.ICYMI, object: constants2.ACK_MEDIA_VIEWED, objectType: constants.ACK_SEMI_AUTOMATIC };
    message(itemType[34]).ack(message.channel_id, obj, true, true, message.id);
    const items = [];
    const message = items;
    const item = allMediaSources.forEach((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["embedURI"] = undefined;
      items.push(obj);
    });
    callback(true);
    const obj4 = message(itemType[34]);
    obj1 = { disableDownload: false, initialSources: items, initialIndex, analyticsSource: "Channel", channelId: message.channel_id };
    let str = "";
    if (null != stateFromStores) {
      str = message(itemType[36]).computeChannelName(stateFromStores, closure_10, closure_9);
      const obj8 = message(itemType[36]);
    }
    obj1.contextName = str;
    obj1.contextIcon = undefined;
    obj1.originViewOrOriginLayout = ref.current;
    obj1.onClose = function onClose() {
      return callback(false);
    };
    message(itemType[35]).openMediaModal(obj1);
  }, items2);
  closure_8 = callback;
  if (0 !== nonEmbedSources.length) {
    obj = { style: tmp.container };
    obj = { widthOverride, sources: nonEmbedSources, handlePressMedia: callback, visible: tmp4 };
    const items3 = [callback2(GravityAttachmentMediaMosaic, obj), ];
    let mapped;
    if (null != embedSources) {
      mapped = embedSources.map((source) => callback2(closure_29, { widthOverride, handlePressMedia: callback, initialIndex: arg1 + nonEmbedSources.length, source, visible: tmp4 }, "gif-" + arg1));
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
