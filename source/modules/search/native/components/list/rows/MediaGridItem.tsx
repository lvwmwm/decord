// Module ID: 15234
// Function ID: 115019
// Dependencies: []

// Module 15234
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Pressable: closure_5, useWindowDimensions: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
const SearchMediaTypes = arg1(dependencyMap[3]).SearchMediaTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[6]).radii.xs, overflow: "hidden", backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.container = obj;
obj.avatar = { "Bool(false)": "isArray", "Bool(false)": "Text", "Bool(false)": "marginTop" };
obj.card = { padding: 0 };
let closure_11 = arg1(dependencyMap[5]).createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_13 = { code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function MediaGridItem(media) {
  let animate;
  let containerStyle;
  media = media.media;
  const arg1 = media;
  const size = media.size;
  const importDefault = size;
  const onPress = media.onPress;
  const dependencyMap = onPress;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = callback3();
  const scale = callback().scale;
  const ref = importAllResult.useRef(null);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(media.channelId));
  const items1 = [media.author, ];
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = importAllResult.useMemo(() => {
    const author = media.author;
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items1);
  const items2 = [media, onPress];
  const callback = importAllResult.useCallback(() => {
    onPress({ media, originView: ref.current });
  }, items2);
  let obj1 = arg1(dependencyMap[8]);
  sharedValue = obj1.useSharedValue(animate ? tmp8.HIDDEN : tmp8.VISIBLE);
  let obj2 = arg1(dependencyMap[8]);
  const fn = function _() {
    const obj = {};
    const value = sharedValue.get();
    obj.opacity = media(onPress[9]).withTiming(value, media(onPress[10]).timingStandard);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[9]).withTiming, opacity: sharedValue, timingStandard: arg1(dependencyMap[10]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 9644750191833;
  fn.__initData = closure_13;
  const items3 = [sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = importAllResult.useMemo(() => ({ width: size, height: size }), items4);
  obj = { style: items5 };
  const items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  obj1 = { ref, style: memo1, accessibilityRole: "button", onPress: callback };
  let tmp16 = media.type === SearchMediaTypes.EMBED;
  if (tmp16) {
    obj2 = {};
    ({ sources: obj7.sources, embed: obj7.embed, messageId: obj7.messageId, channelId: obj7.channelId } = media);
    obj2.authorId = media.author.id;
    obj2.scale = scale;
    obj2.containerHeight = size;
    obj2.containerWidth = size;
    tmp16 = callback2(arg1(dependencyMap[11]).SearchEmbedMediaImage, obj2);
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
    tmp20 = callback2(arg1(dependencyMap[11]).SearchAttachmentMediaImage, obj3);
  }
  items6[1] = tmp20;
  let tmp24 = media.type === SearchMediaTypes.AUDIO;
  if (tmp24) {
    const obj4 = { height: size, width: size };
    tmp24 = callback2(arg1(dependencyMap[11]).SearchSoundMediaImage, obj4);
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
    tmp28 = callback2(arg1(dependencyMap[11]).SearchComponentMediaImage, obj5);
  }
  items6[3] = tmp28;
  let tmp32 = null != memo;
  if (tmp32) {
    const obj6 = { style: tmp.avatar };
    const obj7 = { shadow: "low", style: tmp.card };
    const obj8 = { source: memo, size: arg1(dependencyMap[13]).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    obj7.children = callback2(arg1(dependencyMap[13]).Avatar, obj8);
    obj6.children = callback2(arg1(dependencyMap[12]).Card, obj7);
    tmp32 = callback2(stateFromStores, obj6);
  }
  items6[4] = tmp32;
  obj1.children = items6;
  obj.children = closure_10(sharedValue, obj1);
  return callback2(importDefault(dependencyMap[8]).View, obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default memoResult;
