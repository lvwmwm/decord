// Module ID: 16485
// Function ID: 16486
// Name: MediaGridItem
// Dependencies: [19, 17, 2045, 7303, 21, 4836, 576, 504, 4566, 4837, 4840, 16486, 5919, 1177, 2]

// Module 16485 (MediaGridItem)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: closure_4, Pressable: hasOwnProperty, useWindowDimensions: metroRequire } = react_native);
const SearchMediaTypes = SearchConstants.SearchMediaTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2, avatar: { position: "absolute", top: 8, right: 8 }, card: { padding: 0 } };
obj2 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function MediaGridItemTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const memoResult = react.memo(function MediaGridItem(media) {
  let Avatar;
  let Card;
  let animate;
  let containerStyle;
  let items5;
  let items6;
  let obj13;
  let obj14;
  let obj5;
  let tmp15;
  let tmp16;
  media = media.media;
  size = media.size;
  const onPress = media.onPress;
  let ref;
  let sharedValue;
  ({ containerStyle, animate } = media);
  const tmp = closure_11();
  const scale = closure_6().scale;
  let obj = ref;
  ref = ref.useRef(null);
  const items = [ChannelStore];
  const obj2 = media(onPress[7]);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(media.channelId));
  const items1 = [media.author, ];
  let guild_id;
  const useMemo = ref.useMemo;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items1[1] = guild_id;
  const memo = useMemo(() => {
    const author = media.author;
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items1);
  const items2 = [media, onPress];
  const callback = obj.useCallback(() => {
    const obj = { media, originView: ref.current };
    onPress(obj);
  }, items2);
  const tmp3Result = media(onPress[8]);
  sharedValue = tmp3Result.useSharedValue(animate ? tmp9.HIDDEN : tmp9.VISIBLE);
  const fn = function f() {
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
    withTiming = timing.withTiming;
    timing;
    value = sharedValue.get();
    return obj;
  };
  const tmp3Result2 = media(onPress[8]);
  fn.__closure = { withTiming: media(onPress[9]).withTiming, opacity: sharedValue, timingStandard: media(onPress[10]).timingStandard };
  fn.__workletHash = 9644750191833;
  fn.__initData = __initData;
  const items3 = [sharedValue];
  ({ withTiming: media(onPress[9]).withTiming, opacity: sharedValue, timingStandard: media(onPress[10]).timingStandard });
  const animatedStyle = tmp3Result2.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items3);
  const items4 = [size];
  const memo1 = obj.useMemo(() => {
    size = { width: size, height: size };
    return size;
  }, items4);
  const obj4 = { style: items5, children: tmp15(tmp16, obj5) };
  items5 = [tmp.container, containerStyle, memo1, animatedStyle];
  let tmp14Result = media.type === SearchMediaTypes.EMBED;
  obj5 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: items6 };
  const View = size(tmp4[8]).View;
  tmp15 = closure_10;
  tmp16 = sharedValue;
  if (tmp14Result) {
    const obj6 = { sources: null, embed: null, messageId: null, channelId: null, authorId: media.author.id, scale, containerHeight: size, containerWidth: size };
    ({ sources: obj8.sources, embed: obj8.embed, messageId: obj8.messageId, channelId: obj8.channelId } = media);
    tmp14Result = tmp14(tmp3(tmp4[11]).SearchEmbedMediaImage, obj6);
  }
  items6 = [tmp14Result, , , , ];
  let tmp14Result5 = media.type === tmp17.ATTACHMENT;
  if (tmp14Result5) {
    const obj7 = { attachment: null, channelId: null, authorId: media.author.id, scale, containerHeight: size, containerWidth: size };
    ({ attachment: obj9.attachment, channelId: obj9.channelId } = media);
    tmp14Result5 = tmp14(tmp3(tmp4[11]).SearchAttachmentMediaImage, obj7);
  }
  items6[1] = tmp14Result5;
  let tmp14Result6 = media.type === tmp17.AUDIO;
  if (tmp14Result6) {
    const size1 = { height: size, width: size };
    tmp14Result6 = tmp14(tmp3(tmp4[11]).SearchSoundMediaImage, size1);
  }
  items6[2] = tmp14Result6;
  let tmp14Result7 = media.type === tmp17.COMPONENT;
  if (tmp14Result7) {
    const obj10 = { unfurledMediaItem: null, sources: null, channelId: null, authorId: media.author.id, isBot: media.author.bot, scale, containerHeight: size, containerWidth: size };
    ({ unfurledMediaItem: obj11.unfurledMediaItem, sources: obj11.sources, channelId: obj11.channelId } = media);
    tmp14Result7 = tmp14(tmp3(tmp4[11]).SearchComponentMediaImage, obj10);
  }
  items6[3] = tmp14Result7;
  let tmp14Result8 = null != memo;
  if (tmp14Result8) {
    const obj12 = { style: tmp.avatar, children: closure_9(Card, obj13) };
    obj13 = { shadow: "low", style: tmp.card, children: closure_9(Avatar, obj14) };
    Card = tmp3(tmp4[12]).Card;
    obj14 = { source: memo, size: media(onPress[13]).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    Avatar = tmp3(tmp4[13]).Avatar;
    tmp14Result8 = tmp14(stateFromStores, obj12);
  }
  items6[4] = tmp14Result8;
  return closure_9(View, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default memoResult;
