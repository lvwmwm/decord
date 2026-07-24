// Module ID: 15405
// Function ID: 117554
// Dependencies: [31, 27, 1348, 9141, 33, 4130, 689, 566, 3991, 4131, 4134, 15406, 5167, 1273, 2]

// Module 15405
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SearchMediaTypes } from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_4, Pressable: closure_5, useWindowDimensions: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.container = obj;
obj.avatar = { position: "absolute", top: 8, right: 8 };
obj.card = { padding: 0 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_13 = { code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const memoResult = importAllResult.memo(function MediaGridItem(media) {
  let animate;
  let containerStyle;
  media = media.media;
  const size = media.size;
  const onPress = media.onPress;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = callback3();
  const scale = callback().scale;
  ref = ref.useRef(null);
  let obj = media(onPress[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(media.channelId));
  const items1 = [media.author, ];
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = ref.useMemo(() => {
    const author = media.author;
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const items2 = [media, onPress];
  callback = ref.useCallback(() => {
    onPress({ media, originView: ref.current });
  }, items2);
  let obj1 = media(onPress[8]);
  sharedValue = obj1.useSharedValue(animate ? tmp8.HIDDEN : tmp8.VISIBLE);
  let obj2 = media(onPress[8]);
  const fn = function _() {
    const obj = {};
    const value = sharedValue.get();
    obj.opacity = media(onPress[9]).withTiming(value, media(onPress[10]).timingStandard);
    return obj;
  };
  obj = { withTiming: media(onPress[9]).withTiming, opacity: sharedValue, timingStandard: media(onPress[10]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 9644750191833;
  fn.__initData = closure_13;
  const items3 = [sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect = ref.useEffect(() => {
    const result = sharedValue.set(outer1_12.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = ref.useMemo(() => ({ width: size, height: size }), items4);
  obj = { style: items5 };
  items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  obj1 = { ref, style: memo1, accessibilityRole: "button", onPress: callback };
  let tmp16 = media.type === SearchMediaTypes.EMBED;
  if (tmp16) {
    obj2 = {};
    ({ sources: obj7.sources, embed: obj7.embed, messageId: obj7.messageId, channelId: obj7.channelId } = media);
    obj2.authorId = media.author.id;
    obj2.scale = scale;
    obj2.containerHeight = size;
    obj2.containerWidth = size;
    tmp16 = callback2(media(onPress[11]).SearchEmbedMediaImage, obj2);
  }
  const items6 = [tmp16, , , , ];
  let tmp20 = media.type === SearchMediaTypes.ATTACHMENT;
  if (tmp20) {
    const obj3 = {};
    ({ attachment: obj8.attachment, channelId: obj8.channelId } = media);
    obj3.authorId = media.author.id;
    obj3.scale = scale;
    obj3.containerHeight = size;
    obj3.containerWidth = size;
    tmp20 = callback2(media(onPress[11]).SearchAttachmentMediaImage, obj3);
  }
  items6[1] = tmp20;
  let tmp24 = media.type === SearchMediaTypes.AUDIO;
  if (tmp24) {
    const obj4 = { height: size, width: size };
    tmp24 = callback2(media(onPress[11]).SearchSoundMediaImage, obj4);
  }
  items6[2] = tmp24;
  let tmp28 = media.type === SearchMediaTypes.COMPONENT;
  if (tmp28) {
    const obj5 = {};
    ({ unfurledMediaItem: obj10.unfurledMediaItem, sources: obj10.sources, channelId: obj10.channelId } = media);
    obj5.authorId = media.author.id;
    obj5.isBot = media.author.bot;
    obj5.scale = scale;
    obj5.containerHeight = size;
    obj5.containerWidth = size;
    tmp28 = callback2(media(onPress[11]).SearchComponentMediaImage, obj5);
  }
  items6[3] = tmp28;
  let tmp32 = null != memo;
  if (tmp32) {
    const obj6 = { style: tmp.avatar };
    const obj7 = { shadow: "low", style: tmp.card };
    const obj8 = { source: memo, size: media(onPress[13]).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    obj7.children = callback2(media(onPress[13]).Avatar, obj8);
    obj6.children = callback2(media(onPress[12]).Card, obj7);
    tmp32 = callback2(stateFromStores, obj6);
  }
  items6[4] = tmp32;
  obj1.children = items6;
  obj.children = closure_10(sharedValue, obj1);
  return callback2(size(onPress[8]).View, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default memoResult;
