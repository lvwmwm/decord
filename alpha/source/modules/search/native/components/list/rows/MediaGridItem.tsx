// Module ID: 19494
// Function ID: 19495
// Name: MediaGridItem
// Dependencies: [19, 17, 5155, 9066, 21, 5306, 575, 504, 1655, 5548, 5551, 19495, 7445, 1187, 2]

// Module 19494 (MediaGridItem)
import nativeDefault from "native" /* 575 */;
import SearchConstants from "SearchConstants" /* 9066 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
let closure_13 = { code: "(function MediaGridItemTsx1(){let[withTiming,opacity,timingStandard]=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};})" };
const memoResult = react.memo(function MediaGridItem(media) {
  let Avatar;
  let Card;
  let animate;
  let containerStyle;
  let items7;
  let items8;
  let obj12;
  let obj20;
  let obj4;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp21;
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
  const items3 = [closure_13, , , ];
  const useAnimatedStyle = media(onPress[8]).useAnimatedStyle;
  media(onPress[8]);
  items3[1] = media(onPress[9]).withTiming;
  items3[2] = sharedValue;
  items3[3] = media(onPress[10]).timingStandard;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items3;
  class MediaGridItemTsx1 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), c2) };
      return obj;
    }
  }
  const items4 = [tmp13, tmp14, tmp15];
  MediaGridItemTsx1.__closure = items4;
  MediaGridItemTsx1.__workletHash = 6522710444704;
  MediaGridItemTsx1.__initData = tmp12;
  const items5 = [sharedValue];
  const animatedStyle = useAnimatedStyle(MediaGridItemTsx1);
  const effect = obj.useEffect(() => {
    const result = sharedValue.set(constants.VISIBLE);
  }, items5);
  const items6 = [size];
  const memo1 = obj.useMemo(() => {
    size = { width: size, height: size };
    return size;
  }, items6);
  const obj3 = { style: items7, children: tmp20(tmp21, obj4) };
  items7 = [tmp.container, containerStyle, memo1, animatedStyle];
  let tmp19Result = media.type === SearchMediaTypes.EMBED;
  obj4 = { ref, style: memo1, accessibilityRole: "button", onPress: callback, children: items8 };
  const View = size(tmp4[8]).View;
  tmp20 = closure_10;
  tmp21 = sharedValue;
  if (tmp19Result) {
    const obj5 = { sources: null, embed: null, messageId: null, channelId: null, authorId: media.author.id, scale, containerHeight: size, containerWidth: size };
    ({ sources: obj6.sources, embed: obj6.embed, messageId: obj6.messageId, channelId: obj6.channelId } = media);
    tmp19Result = tmp19(tmp3(tmp4[11]).SearchEmbedMediaImage, obj5);
  }
  items8 = [tmp19Result, , , , ];
  let tmp19Result5 = media.type === tmp22.ATTACHMENT;
  if (tmp19Result5) {
    const obj8 = { attachment: null, channelId: null, authorId: media.author.id, scale, containerHeight: size, containerWidth: size };
    ({ attachment: obj7.attachment, channelId: obj7.channelId } = media);
    tmp19Result5 = tmp19(tmp3(tmp4[11]).SearchAttachmentMediaImage, obj8);
  }
  items8[1] = tmp19Result5;
  let tmp19Result6 = media.type === tmp22.AUDIO;
  if (tmp19Result6) {
    const size1 = { height: size, width: size };
    tmp19Result6 = tmp19(tmp3(tmp4[11]).SearchSoundMediaImage, size1);
  }
  items8[2] = tmp19Result6;
  let tmp19Result7 = media.type === tmp22.COMPONENT;
  if (tmp19Result7) {
    const obj10 = { unfurledMediaItem: null, sources: null, channelId: null, authorId: media.author.id, isBot: media.author.bot, scale, containerHeight: size, containerWidth: size };
    ({ unfurledMediaItem: obj9.unfurledMediaItem, sources: obj9.sources, channelId: obj9.channelId } = media);
    tmp19Result7 = tmp19(tmp3(tmp4[11]).SearchComponentMediaImage, obj10);
  }
  items8[3] = tmp19Result7;
  let tmp19Result8 = null != memo;
  if (tmp19Result8) {
    const obj11 = { style: tmp.avatar, children: closure_9(Card, obj12) };
    obj12 = { shadow: "low", style: tmp.card, children: closure_9(Avatar, obj20) };
    Card = tmp3(tmp4[12]).Card;
    obj20 = { source: memo, size: media(onPress[13]).AvatarSizes.XSMALL, avatarDecoration: media.author.avatarDecoration };
    Avatar = tmp3(tmp4[13]).Avatar;
    tmp19Result8 = tmp19(stateFromStores, obj11);
  }
  items8[4] = tmp19Result8;
  return closure_9(View, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/MediaGridItem.tsx");

export default memoResult;
