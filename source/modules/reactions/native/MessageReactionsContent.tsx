// Module ID: 9420
// Function ID: 73304
// Name: useReactors
// Dependencies: []
// Exports: MessageReactionsContent, MessageReactionsEmpty

// Module 9420 (useReactors)
let Platform;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  const reaction = channelId.reaction;
  const importAll = reaction;
  const reactionType = channelId.reactionType;
  const dependencyMap = reactionType;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = reactions.getReactions(channelId, messageId, reaction.emoji, closure_14, reactionType);
    let items;
    if (null != reactions) {
      items = reactions.values();
    }
    if (null == items) {
      items = [];
    }
    return Array.from(items);
  }, items1, importDefault(dependencyMap[16]));
  obj = { reactors: stateFromStores };
  if (reactionType === arg1(dependencyMap[17]).ReactionTypes.VOTE) {
    const count_details = reaction.count_details;
    let vote;
    if (null != count_details) {
      vote = count_details.vote;
    }
    let num = 0;
    if (null != vote) {
      num = vote;
    }
    let tmp3 = num;
  } else {
    tmp3 = reactionType === arg1(dependencyMap[17]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  obj.reactorsHasMore = tmp3 > stateFromStores.length;
  return obj;
}
function useReactorsOnScrollNative(channelId) {
  let reactors;
  let reactorsHasMore;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  const reactionSelected = channelId.reactionSelected;
  const importAll = reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const dependencyMap = reactorsHasMore;
  const reactionType = channelId.reactionType;
  let closure_4 = reactionType;
  let id;
  let callback;
  let closure_8;
  let closure_9;
  const React = React.useRef(false);
  id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  callback = React.useCallback((arg0, arg1) => {
    let tmp = arg0 / arg1 > 0.75 && reactorsHasMore;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      let obj = reactionSelected(reactorsHasMore[18]);
      obj = { channelId, messageId, emoji: reactionSelected.emoji, limit: closure_14, after: id, type: reactionType };
      const reactors = obj.getReactors(obj);
      reactors.then(() => {
        closure_5.current = false;
      });
    }
  }, items);
  closure_8 = React.useRef(callback);
  const items1 = [callback];
  const effect = React.useEffect(() => {
    closure_8.current = callback;
  }, items1);
  closure_9 = importDefault(dependencyMap[19])(() => messageId(reactorsHasMore[20]).debounce((arg0, arg1) => ref.current(arg0, arg1), 16));
  return importDefault(dependencyMap[19])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return callback(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function useRenderFooter(reactors, reactorsHasMore) {
  reactorsHasMore = reactors;
  const importDefault = reactorsHasMore;
  const tmp = callback4();
  const importAll = tmp;
  const items = [reactors, reactorsHasMore, tmp];
  return React.useCallback(() => {
    if (arg1) {
      const obj = { style: tmp.loadingSpinner, size: "large" };
      let tmp2 = callback(closure_6, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items);
}
function useRenderItem(reactors, messageId, channelId, reactionSelected, arg4) {
  messageId = reactors;
  const importDefault = messageId;
  const importAll = channelId;
  const dependencyMap = reactionSelected;
  let closure_4 = arg4;
  const tmp = callback4();
  const React = tmp;
  const analyticsLocations = importDefault(dependencyMap[21])().analyticsLocations;
  const items = [reactors, channelId, arg4, messageId, reactionSelected, tmp, analyticsLocations];
  return React.useCallback((arg0, arg1) => {
    let obj = arg0[arg1];
    arg0 = obj;
    const id = obj.id;
    arg1 = id;
    const diff = arg0.length - 1;
    const channel = channel.getChannel(arg2);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let obj2 = arg1(arg3[22]);
    let nickname = obj2.getNickname(guildId, arg2, obj);
    if (null == nickname) {
      let obj3 = arg1(arg3[23]);
      nickname = obj3.getGlobalName(obj);
    }
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id);
    }
    if (arg3.burst_count > 0) {
      let NORMAL = arg0(arg3[17]).ReactionTypes.BURST;
    } else {
      NORMAL = arg0(arg3[17]).ReactionTypes.NORMAL;
    }
    const arg2 = NORMAL;
    obj = { style: tmp.listRow };
    obj = {};
    const obj1 = { style: tmp.avatar, size: arg0(arg3[25]).AvatarSizes.SMALL };
    const avatarSource = obj.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (null != member) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = arg1(arg3[26]).getGuildMemberAvatarSource(member, obj);
        const obj8 = arg1(arg3[26]);
      }
    }
    obj1.source = guildMemberAvatarSource;
    obj.leading = callback(arg0(arg3[25]).Avatar, obj1);
    obj2 = { user: obj, nick: nickname };
    obj.label = callback(arg1(arg3[27]), obj2);
    let tmp22 = null;
    if (arg4) {
      tmp22 = null;
      if (obj10.isAndroid()) {
        obj3 = {
          onPress() {
                let obj = obj(emoji[18]);
                obj = { channelId: NORMAL, messageId: id, emoji: emoji.emoji, location: obj(emoji[18]).ReactionLocations.MESSAGE, userId: obj.id };
                obj = { burst: NORMAL === obj(emoji[17]).ReactionTypes.BURST };
                obj.options = obj;
                return obj.removeReaction(obj);
              },
          children: callback(arg0(arg3[29]).XSmallIcon, {})
        };
        tmp22 = callback(closure_7, obj3);
      }
      const obj10 = arg0(arg3[28]);
    }
    obj.trailing = tmp22;
    obj.onLongPress = function onLongPress() {
      const obj = { userId: id, channelId: NORMAL, messageId: id, localUser: obj, sourceAnalyticsLocations: closure_6 };
      id(closure_3[30])(obj);
    };
    const items = [callback(arg1(arg3[24]), obj), ];
    let tmp30 = null;
    if (arg1 !== diff) {
      tmp30 = callback(arg1(arg3[31]), {});
    }
    items[1] = tmp30;
    obj.children = items;
    return closure_17(closure_8, obj);
  }, items);
}
function useRenderQuickActions(channelId, messageId, reactionSelected, reactors) {
  messageId = channelId;
  const importDefault = messageId;
  const importAll = reactionSelected;
  const dependencyMap = reactors;
  const tmp = callback4();
  let closure_4 = tmp;
  const items = [reactors, channelId, messageId, reactionSelected, tmp];
  return React.useCallback((arg0, arg1) => {
    const channelId = arg3[arg1];
    if (arg2.burst_count > 0) {
      let NORMAL = channelId(arg3[17]).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(arg3[17]).ReactionTypes.NORMAL;
      const tmp = channelId;
    }
    arg1 = NORMAL;
    let obj = { style: tmp.buttonRow };
    obj = {};
    const intl = channelId(arg3[33]).intl;
    obj.title = intl.string(channelId(arg3[33]).t.N86XcP);
    obj.IconComponent = channelId(arg3[29]).XSmallIcon;
    obj.color = arg1(arg3[13]).unsafe_rawColors.RED_400;
    obj.onPress = function onPress() {
      let obj = lib(closure_3[18]);
      obj = { channelId: lib, messageId: NORMAL, emoji: emoji.emoji, location: lib(closure_3[18]).ReactionLocations.MESSAGE, userId: lib.id };
      obj = { burst: NORMAL === lib(closure_3[17]).ReactionTypes.BURST };
      obj.options = obj;
      return obj.removeReaction(obj);
    };
    obj.height = 48;
    obj.children = callback(arg1(arg3[32]), obj);
    return callback(closure_8, obj);
  }, items);
}
function ReactionTab(arg0) {
  let animated;
  let reaction;
  let selected;
  ({ reaction, selected } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[34]);
  let burst_colors = reaction.burst_colors;
  if (null == burst_colors) {
    burst_colors = [];
  }
  const emojiColorPalette = obj.useEmojiColorPalette(burst_colors);
  let accentColor;
  if (null != emojiColorPalette) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp5 = null;
  if (null != accentColor) {
    obj = { color: emojiColorPalette.accentColor };
    tmp5 = obj;
  }
  let tmp6 = null;
  if (null != emojiColorPalette) {
    obj = {};
    let obj3 = arg1(dependencyMap[35]);
    obj.backgroundColor = obj3.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity);
    tmp6 = obj;
  }
  const emoji = reaction.emoji;
  let obj4 = arg1(dependencyMap[14]);
  const items = [closure_9];
  const stateFromStores = obj4.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = arg1(dependencyMap[36]).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj1 = {};
    ({ id: obj7.id, animated } = emoji);
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp10;
    }
    obj1.animated = animated;
    obj1.size = 48;
    emojiURL = importDefault(dependencyMap[26]).getEmojiURL(obj1);
    const obj6 = importDefault(dependencyMap[26]);
  }
  const obj2 = {};
  const items1 = [tmp.tabContainer, , ];
  let tabContainerSelected = null;
  if (selected) {
    tabContainerSelected = tmp.tabContainerSelected;
  }
  items1[1] = tabContainerSelected;
  let tmp17 = null;
  if (selected) {
    tmp17 = null;
    if (tmp2) {
      tmp17 = tmp6;
    }
  }
  items1[2] = tmp17;
  obj2.style = items1;
  obj2.accessible = true;
  obj2.accessibilityLabel = emoji.name;
  obj2.accessibilityState = { selected };
  obj3 = { src: emojiURL, name: emoji.name };
  const items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  obj3.textEmojiStyle = items2;
  const items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  obj3.fastImageStyle = items3;
  const items4 = [callback2(importDefault(dependencyMap[37]), obj3), ];
  obj4 = { variant: "text-md/bold" };
  const items5 = [tmp.reactionCountText, , ];
  let prop = null;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp20 = null;
  if (reaction.burst_count > 0) {
    tmp20 = tmp5;
  }
  items5[2] = tmp20;
  obj4.style = items5;
  obj4.children = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
  items4[1] = callback2(arg1(dependencyMap[11]).Text, obj4);
  obj2.children = items4;
  let name = emoji.id;
  if (null == name) {
    name = emoji.name;
  }
  return closure_17(closure_8, obj2, name);
}
function RemoveAllButton(channelId) {
  let reactionSelectedIndex;
  ({ reactions: closure_0, reactionSelectedIndex } = channelId);
  const importDefault = reactionSelectedIndex;
  channelId = channelId.channelId;
  const importAll = channelId;
  const dependencyMap = channelId.messageId;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_10];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  let useReducedMotion = useReducedMotion.useReducedMotion;
  let callback = useReducedMotion;
  const tmp = callback4();
  const tmp4 = callback(React.useState(true), 2);
  const React = tmp4[0];
  let closure_6 = tmp4[1];
  let obj1 = arg1(dependencyMap[10]);
  const sharedValue = obj1.useSharedValue(64);
  let obj2 = arg1(dependencyMap[10]);
  class S {
    constructor() {
      obj = {};
      if (useReducedMotion) {
        tmp5 = closure_7;
        value = closure_7.get();
      } else {
        tmp = reactions;
        tmp2 = messageId;
        num = 39;
        obj2 = reactions(messageId[39]);
        tmp3 = closure_7;
        obj = {};
        num2 = 200;
        obj.duration = 200;
        value = obj2.withTiming(closure_7.get(), obj);
      }
      obj.maxWidth = value;
      return obj;
    }
  }
  obj = { useReducedMotion, buttonWidth: sharedValue, withTiming: arg1(dependencyMap[39]).withTiming };
  S.__closure = obj;
  S.__workletHash = 16499689496895;
  S.__initData = closure_20;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj4 = arg1(dependencyMap[10]);
  const sharedValue1 = obj4.useSharedValue(0);
  const tmp3 = importDefault(dependencyMap[38])(stateFromStores);
  class T {
    constructor() {
      obj = {};
      if (useReducedMotion) {
        tmp5 = useSharedValue;
        value = useSharedValue.get();
      } else {
        tmp = reactions;
        tmp2 = messageId;
        num = 39;
        obj2 = reactions(messageId[39]);
        tmp3 = useSharedValue;
        obj = {};
        num2 = 125;
        obj.duration = 125;
        value = obj2.withTiming(useSharedValue.get(), obj);
      }
      obj.opacity = value;
      return obj;
    }
  }
  obj = { useReducedMotion, textOpacity: sharedValue1, withTiming: arg1(dependencyMap[39]).withTiming };
  T.__closure = obj;
  T.__workletHash = 8698187840986;
  T.__initData = closure_21;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = arg1(dependencyMap[10]).useAnimatedStyle(T);
  callback = React.useCallback(() => {
    callback2(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  useReducedMotion = callback;
  const items3 = [reactionSelectedIndex, callback];
  const effect = React.useEffect(() => {
    callback();
  }, items3);
  let tmp11 = null;
  if (tmp3) {
    obj1 = {
      onPress() {
          if (closure_5) {
            callback2(false);
            const result = sharedValue.set(callback(messageId[40]).getWindowDimensions().width);
            const result1 = sharedValue1.set(1);
            const obj2 = callback(messageId[40]);
          } else {
            channelId(messageId[18]).removeEmojiReactions(channelId, messageId, callback[closure_1].emoji);
            callback();
            const obj = channelId(messageId[18]);
          }
        }
    };
    obj2 = {};
    const items4 = [tmp.removeAllButton, animatedStyle];
    obj2.style = items4;
    const obj3 = { color: importDefault(dependencyMap[13]).unsafe_rawColors.WHITE, size: "sm" };
    const items5 = [callback2(arg1(dependencyMap[41]).TrashIcon, obj3), ];
    obj4 = { delete: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011750085073657767, dispatch: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073859025267, raw: 172541955090112670000000, style: animatedStyle1 };
    const intl = arg1(dependencyMap[33]).intl;
    obj4.children = intl.string(arg1(dependencyMap[33]).t.zx/e4P);
    items5[1] = callback2(closure_18, obj4);
    obj2.children = items5;
    obj1.children = callback3(importDefault(dependencyMap[10]).View, obj2);
    tmp11 = callback2(sharedValue, obj1);
  }
  return tmp11;
}
function EmojiOptionsButton(channelId) {
  let reactionSelectedIndex;
  let reactions;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  let obj = arg1(dependencyMap[14]);
  const items = [closure_10];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  const tmp3 = importDefault(dependencyMap[38])(stateFromStores);
  const importAll = tmp3;
  const dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  obj = {
    onPress: React.useCallback(() => {
      let obj = messageId(tmp4[42]);
      obj = { channelId, messageId, reaction: tmp4, canRemoveReactions: tmp3 };
      obj.openLazy(channelId(tmp4[44])(tmp4[43], tmp4.paths), "ReactionEmojiOptionsActionSheet", obj, "replaceTopSheet");
    }, items2),
    style: callback4().emojiOptionsButton
  };
  obj = { hasMaxConnections: "<string:1864193>", isBoostOnlySubscription: "<string:2621440>" };
  const intl = arg1(dependencyMap[33]).intl;
  obj.children = intl.string(arg1(dependencyMap[33]).t.pCaYID);
  const items3 = [callback2(arg1(dependencyMap[11]).Text, obj), ];
  const obj1 = { color: importDefault(dependencyMap[13]).colors.ICON_SUBTLE, size: "xs" };
  items3[1] = callback2(arg1(dependencyMap[45]).ChevronSmallRightIcon, obj1);
  obj.children = items3;
  return callback3(closure_7, obj);
}
function ReactionTabs(setReactionSelectedIndex) {
  let reactionSelectedIndex;
  let reactions;
  const tmp = callback4();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  const arg1 = reactionSelectedIndex;
  const importDefault = setReactionSelectedIndex.setReactionSelectedIndex;
  let obj = importDefault(dependencyMap[46]);
  obj = { style: tmp.reactionTab };
  obj = {
    tabs: reactions.map((emoji) => {
      const id = emoji.emoji.id;
      let str = "";
      if (null != id) {
        str = id;
      }
      return closure_16(closure_28, { reaction: emoji, selected: arg1 === reactionSelectedIndex }, "" + str + ":" + emoji.emoji.name);
    })
  };
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  obj.tabIndexSelected = reactionSelectedIndex;
  obj.onSelect = function onSelect(arg0) {
    const result = reactionSelectedIndex(closure_3[48]).triggerHapticFeedback(setReactionSelectedIndex(closure_3[49]).IMPACT_LIGHT);
    setReactionSelectedIndex(arg0);
  };
  obj.initialNumTabsToRender = arg1(dependencyMap[15]).MAX_REACTIONS;
  const items = [callback2(importDefault(dependencyMap[47]), obj), callback2(importDefault(dependencyMap[31]), { outer: true }), ];
  const obj1 = { style: tmp.removeButtonContainer };
  const obj2 = { style: tmp.emojiTextIdentifier };
  const tmp2 = closure_17;
  const tmp3 = closure_8;
  const tmp4 = importDefault(dependencyMap[47]);
  const tmp5 = closure_17;
  const tmp6 = closure_8;
  obj2.children = arg1(dependencyMap[15]).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [callback2(arg1(dependencyMap[11]).Text, obj2), ];
  const obj3 = {};
  const obj6 = arg1(dependencyMap[15]);
  const tmp7 = callback2;
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = tmp7(obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton, obj3);
  obj1.children = items1;
  items[2] = tmp5(tmp6, obj1);
  obj.children = items;
  return tmp2(tmp3, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_6, Platform, Pressable: closure_7, View: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
let closure_13 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[2]);
({ DEFAULT_NUM_REACTION_USERS: closure_14, Permissions: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
let closure_18 = importDefault(dependencyMap[10]).createAnimatedComponent(arg1(dependencyMap[11]).Text);
let obj1 = arg1(dependencyMap[12]);
let obj = { container: { flex: 1 } };
obj = { padding: 32, borderTopLeftRadius: importDefault(dependencyMap[13]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[13]).radii.sm };
obj.containerEmpty = obj;
obj1 = { height: 48, backgroundColor: importDefault(dependencyMap[13]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.listRow = obj1;
const obj2 = { 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000003742054533171631, 0: 0.975, 0: 190359829595963920000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: "channelId", 0: "transform", borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.tabContainer = obj2;
const importDefaultResult = importDefault(dependencyMap[10]);
obj.tabContainerSelected = { backgroundColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tab = {};
obj.tabSelected = { borderBottomColor: "transparent" };
const obj3 = { backgroundColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tabActive = { borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.reactionTab = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945 };
obj.removeButtonContainer = {};
const obj4 = { borderRadius: importDefault(dependencyMap[13]).radii.sm };
obj.emojiOptionsButton = { marginRight: importDefault(dependencyMap[13]).space.PX_16 };
const obj6 = { "Null": 1361182719, "Null": 49907522, "Null": 50170624, "Null": 1506361856, "Null": 1665728515, "Null": 843186179, "Null": -1174404278, "Null": 16777979, "Null": 82326337, "Null": 1895895296, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[13]).radii.xxl };
obj.removeAllButton = obj6;
const obj5 = { marginRight: importDefault(dependencyMap[13]).space.PX_16 };
obj.reactionCountText = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj7 = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.reactionCountTextSelected = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.emoji = { marginRight: 8 };
const obj9 = { paddingVertical: 0, paddingHorizontal: 53.614, flexGrow: 3, color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.emojiText = obj9;
obj.emojiImage = {};
obj.emojiTextIdentifier = { padding: 16 };
obj.avatar = { marginRight: 10 };
obj.buttonRow = { top: true, bottom: true, left: true };
obj.loadingSpinner = { "Null": "<string:2118254593>", "Null": "<string:3192979458>" };
let closure_19 = obj1.createStyles(obj);
let closure_20 = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
let closure_21 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
const Storage = arg1(dependencyMap[54]).Storage;
let closure_22 = Storage.get("MessageReactionsContent_SwipableBounced", false);
const obj8 = { color: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_ACTIVE };
const result = arg1(dependencyMap[60]).fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export const MessageReactionsEmpty = function MessageReactionsEmpty() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[51]);
  const tmp2 = importDefault(dependencyMap[50])();
  obj = { scrollable: true, startHeight: 338 + tmp2.bottom };
  obj = { style: tmp.containerEmpty };
  const obj1 = { source: obj.useNoResultsSource() };
  const intl = arg1(dependencyMap[33]).intl;
  obj1.title = intl.string(arg1(dependencyMap[33]).t.HmPOrp);
  const intl2 = arg1(dependencyMap[33]).intl;
  obj1.body = intl2.string(arg1(dependencyMap[33]).t.pTJ5J/);
  obj.children = callback2(arg1(dependencyMap[25]).RefreshEmptyState, obj1);
  obj.children = callback2(arg1(dependencyMap[53]).BottomSheetView, obj);
  return callback2(arg1(dependencyMap[52]).BottomSheet, obj);
};
export const MessageReactionsContent = function MessageReactionsContent(channelId) {
  let disableManage;
  let emoji;
  let isSelectedBurst;
  let messageId;
  let reactionSelectedIndex;
  let reactions;
  let reactors;
  let reactorsHasMore;
  let setReactionSelectedIndex;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ messageId, reactions, disableManage } = channelId);
  ({ emoji, isSelectedBurst } = channelId);
  if (disableManage === undefined) {
    disableManage = false;
  }
  let flag = channelId.disableTabs;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = function useReactionSelected(reactions) {
    let isSelectedBurst;
    reactions = reactions.reactions;
    const channelId = reactions;
    ({ emoji: closure_1, isSelectedBurst } = reactions);
    if (isSelectedBurst === undefined) {
      isSelectedBurst = false;
    }
    const tmp = callback(React.useState(() => {
      if (null == closure_1) {
        return 0;
      } else {
        const findIndexResult = reactions.findIndex((emoji) => {
          const emojiEqualsResult = callback(closure_3[15]).emojiEquals(emoji.emoji, closure_1);
          const burst_count = emoji.burst_count;
          let num = 0;
          if (null != burst_count) {
            num = burst_count;
          }
          let tmp2 = num > 0;
          if (closure_2) {
            if (tmp2) {
              tmp2 = emojiEqualsResult;
            }
            let tmp3 = tmp2;
          } else {
            tmp3 = !tmp2;
            if (!tmp2) {
              tmp3 = emojiEqualsResult;
            }
          }
          return tmp3;
        });
        let num = 0;
        if (findIndexResult >= 0) {
          num = findIndexResult;
        }
        return num;
      }
    }), 2);
    const bound = Math.min(tmp[0], reactions.length - 1);
    return { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp[1] };
  }({ reactions, emoji, isSelectedBurst });
  const reactionSelected = tmp2.reactionSelected;
  ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp2);
  if (null != reactionSelected.me_vote) {
    let NORMAL = arg1(dependencyMap[17]).ReactionTypes.VOTE;
  } else if (reactionSelected.burst_count > 0) {
    NORMAL = arg1(dependencyMap[17]).ReactionTypes.BURST;
  } else {
    NORMAL = arg1(dependencyMap[17]).ReactionTypes.NORMAL;
  }
  let obj = { channelId, messageId, reaction: reactionSelected, reactionType: NORMAL };
  const tmp = callback4();
  ({ reactors, reactorsHasMore } = useReactors(obj));
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_10];
  const items1 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  let obj2 = arg1(dependencyMap[55]);
  const isActiveChannelOrUnarchivableThread = obj2.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const tmp9 = useReactors(obj);
  const tmp13 = function useCanManageMessages(channelId) {
    const items = [closure_13];
    const items1 = [channelId];
    return channelId(closure_3[14]).useStateFromStores(items, () => closure_13.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId: arg0 }), items1);
  }(channelId) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = reactionSelected.emoji.id;
  if (null == name) {
    name = reactionSelected.emoji.name;
  }
  obj = {};
  const intl = arg1(dependencyMap[33]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[33]).t.gHp0C4);
  obj.footerSize = 48;
  obj.insetBottom = importDefault(dependencyMap[50])().bottom;
  obj = { channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL };
  obj.onScroll = useReactorsOnScrollNative(obj);
  obj.renderFooter = useRenderFooter(reactors, reactorsHasMore);
  obj.renderItem = useRenderItem(reactors, messageId, channelId, reactionSelected, tmp13);
  obj.renderQuickActions = useRenderQuickActions(channelId, messageId, reactionSelected, reactors);
  obj.itemSize = 48;
  const items2 = [reactors.length];
  obj.sections = items2;
  obj.style = tmp.container;
  const callback = React.useCallback(() => {
    let closure_22 = true;
    const Storage = channelId(closure_3[54]).Storage;
    const result = Storage.set("MessageReactionsContent_SwipableBounced", true);
  }, []);
  let obj5 = arg1(dependencyMap[28]);
  const tmp12 = importDefault(dependencyMap[50])();
  obj1 = { scrollable: true, backdropOpacity: arg1(dependencyMap[56]).BACKDROP_OPACITY };
  let tmp17 = null;
  if (NORMAL === arg1(dependencyMap[17]).ReactionTypes.BURST) {
    obj2 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
    tmp17 = callback2(importDefault(dependencyMap[57]), obj2);
  }
  obj1.backdropChildren = tmp17;
  let tmp21 = null;
  if (true !== flag) {
    const obj3 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
    tmp21 = callback2(ReactionTabs, obj3);
  }
  obj1.header = tmp21;
  if (tmp15) {
    const obj4 = { inActionSheet: true, bounceFirstRowOnMount: !closure_22, onBounceSwipable: callback };
    let tmp25Result = tmp25(tmp26[58]);
    const merged = Object.assign(obj);
    let tmp24Result = tmp24(tmp25Result, obj4, name);
  } else {
    obj5 = { inActionSheet: true };
    tmp25Result = tmp25(tmp26[59]);
    const merged1 = Object.assign(obj);
    tmp24Result = tmp24(tmp25Result, obj5, name);
  }
  obj1.children = tmp24Result;
  return callback2(arg1(dependencyMap[52]).BottomSheet, obj1);
};
