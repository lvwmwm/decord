// Module ID: 9923
// Function ID: 76786
// Name: PollEmoji
// Dependencies: []
// Exports: default

// Module 9923 (PollEmoji)
function PollEmoji(emoji) {
  emoji = emoji.emoji;
  const arg1 = emoji;
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != emoji.id) {
      let animated = emoji.animated;
      if (!animated) {
        const customEmojiById = customEmojiById.getCustomEmojiById(emoji.id);
        animated = undefined;
        if (null != customEmojiById) {
          animated = customEmojiById.animated;
        }
        animated = null != animated && animated;
        const tmp6 = null != animated && animated;
      }
      let obj = callback(closure_2[13]);
      obj = { id: emoji.id, animated, size: 16 };
      return obj.getEmojiURL(obj);
    }
  });
  obj = { style: emoji.style, src: stateFromStores, name: emoji.name, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emojiImage };
  return callback2(importDefault(dependencyMap[14]), obj);
}
function PollVotesHeader(message) {
  message = message.message;
  const arg1 = message;
  const selectedAnswerId = message.selectedAnswerId;
  const importDefault = selectedAnswerId;
  const dependencyMap = message.setSelectedAnswerId;
  const tmp = callback4();
  const items = [message.reactions];
  let tmp3 = null;
  const memo = React.useMemo(() => message(setSelectedAnswerId[18]).getTotalVotes(message.reactions), items);
  const ref = React.useRef(null);
  let closure_3 = ref;
  let closure_4 = React.useRef(null);
  const React = React.useRef(false);
  const items1 = [selectedAnswerId];
  const effect = React.useEffect(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    const timerId = setTimeout(callback(tmp), 0);
  }, items1);
  if (null != message.poll) {
    let obj = {};
    obj = { style: tmp.headerText, children: message.poll.question.text };
    const items2 = [callback2(arg1(dependencyMap[17]).Text, obj), , ];
    obj = { style: tmp.subheaderText };
    const intl = arg1(dependencyMap[15]).intl;
    const obj1 = { count: memo };
    obj.children = intl.format(arg1(dependencyMap[15]).t.XRkuof, obj1);
    items2[1] = callback2(arg1(dependencyMap[17]).Text, obj);
    const obj2 = { gesture: tmp6 };
    const obj3 = { GuildBadgeGem: "fullGradientContent", markComponentPassiveEffectMountStopped: "SU", strRepeat: "AutomodMentionRaidLimit", FLOATING_DEFAULT: "$$baseObject", PROFILE_PREMIUM_FEATURES: "chart", ITEM_WIDTH: "toString", ref };
    ({ answerScroll: obj6.style, answerScrollContainer: obj6.contentContainerStyle } = tmp);
    const intl2 = arg1(dependencyMap[15]).intl;
    obj3.accessibilityLabel = intl2.string(arg1(dependencyMap[15]).t.qbir+4);
    const answers = message.poll.answers;
    obj3.children = answers.map((answer_id) => {
      const tmp = selectedAnswerId === String(answer_id.answer_id);
      const obj = {};
      let tmp4;
      if (tmp) {
        tmp4 = closure_4;
      }
      obj.ref = tmp4;
      obj.answer = answer_id;
      obj.selected = tmp;
      obj.reaction = message(setSelectedAnswerId[20]).reactionForId(message.reactions, String(answer_id.answer_id));
      obj.setSelectedAnswerId = setSelectedAnswerId;
      return closure_14(closure_17, obj, answer_id.answer_id);
    });
    obj2.children = callback2(closure_8, obj3);
    items2[2] = callback2(arg1(dependencyMap[19]).GestureDetector, obj2);
    obj.children = items2;
    tmp3 = callback3(closure_7, obj);
  }
  return tmp3;
}
function VotersList(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  const reaction = channelId.reaction;
  let importAllResult;
  const analyticsLocations = importDefault(dependencyMap[21])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  const tmp2 = importDefault(dependencyMap[22])({ channelId, messageId, reaction });
  const reactors = tmp2.reactors;
  let closure_3 = reactors;
  let obj = arg1(dependencyMap[23]);
  obj = { channelId, messageId, reactionSelected: reaction, reactors, reactorsHasMore: tmp2.hasMore, reactionType: arg1(dependencyMap[24]).ReactionTypes.VOTE };
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative(obj);
  const tmp = callback4();
  const items = [closure_11];
  const stateFromStores = arg1(dependencyMap[12]).useStateFromStores(items, () => channel.getChannel(channelId));
  let closure_4 = stateFromStores;
  const items1 = [stateFromStores, reactors.length, channelId, messageId, analyticsLocations];
  const callback = importAllResult.useCallback((item) => {
    item = item.item;
    const channelId = item;
    const index = item.index;
    let obj = messageId(analyticsLocations[25]);
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    let nickname = obj.getNickname(guild_id, id, item);
    if (null == nickname) {
      let obj1 = messageId(analyticsLocations[26]);
      nickname = obj1.getGlobalName(item);
    }
    const userTag = messageId(analyticsLocations[26]).getUserTag(item);
    const user = user.getUser(item.id);
    obj = { start: 0 === index, end: reactors.length - 1 === index };
    obj = {};
    let guild_id1;
    if (null != stateFromStores) {
      guild_id1 = stateFromStores.guild_id;
    }
    obj.guildId = guild_id1;
    let tmp14 = item;
    if (null != user) {
      tmp14 = user;
    }
    obj.user = tmp14;
    obj.size = channelId(analyticsLocations[28]).AvatarSizes.SMALL;
    obj.icon = callback(channelId(analyticsLocations[28]).Avatar, obj);
    let tmp15 = nickname;
    if (null == nickname) {
      obj1 = { user: item };
      tmp15 = callback(messageId(analyticsLocations[29]), obj1);
    }
    obj.label = tmp15;
    let tmp19 = null;
    if (null != nickname) {
      tmp19 = userTag;
    }
    obj.subLabel = tmp19;
    obj.onPress = function onPress() {
      return callback(closure_2[30])({ userId: item.id, localUser: item, sourceAnalyticsLocations: closure_2, channelId: item, messageId: callback });
    };
    return callback(channelId(analyticsLocations[27]).TableRow, obj);
  }, items1);
  const obj3 = arg1(dependencyMap[12]);
  let num = 1;
  if (0 === reactors.length) {
    num = 0;
  }
  const sharedValue = arg1(dependencyMap[31]).useSharedValue(num);
  importAllResult = sharedValue;
  const items2 = [sharedValue, reactors.length];
  const effect = importAllResult.useEffect(() => {
    if (0 !== reactors.length) {
      let obj = channelId(analyticsLocations[32]);
      obj = { duration: 200 };
      const result = sharedValue.set(obj.withTiming(1, obj));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const obj4 = arg1(dependencyMap[31]);
  class I {
    constructor() {
      obj = { lineClamp: "PREMIUM_STANDARD", zoom: "apply", REVERSE_TRIAL_EMOJI_PICKER: "description" };
      obj.opacity = channelId.get();
      return obj;
    }
  }
  I.__closure = { opacity: sharedValue };
  I.__workletHash = 8593850252158;
  I.__initData = closure_18;
  const animatedStyle = arg1(dependencyMap[31]).useAnimatedStyle(I);
  obj = { style: animatedStyle, children: callback2(arg1(dependencyMap[33]).BottomSheetFlashList, { contentContainerStyle: tmp.list, data: reactors, renderItem: callback, onScroll: reactorsOnScrollNative }) };
  return callback2(importDefault(dependencyMap[31]).View, obj);
}
function NoResults() {
  const tmp = callback4();
  let obj = { style: tmp.noResultsContainer };
  obj = { style: tmp.noResultsImage };
  const tmp2 = importDefault(dependencyMap[34])();
  const tmp3 = closure_15;
  const tmp4 = closure_7;
  const tmp5 = callback2;
  const tmp6 = closure_6;
  if (obj3.isThemeDark(tmp2)) {
    let tmp7Result = tmp7(tmp8[36]);
  } else {
    tmp7Result = tmp7(tmp8[37]);
  }
  obj.source = tmp7Result;
  const items = [tmp5(tmp6, obj), , ];
  obj = { style: tmp.noResultsTitle };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.vhQK3o);
  items[1] = callback2(arg1(dependencyMap[17]).Text, obj);
  const obj1 = { Promise: 10, marginTop: null, flags: "flex-start", style: tmp.noResultsSubtitle };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[15]).t.bwytdh);
  items[2] = callback2(arg1(dependencyMap[17]).Text, obj1);
  obj.children = items;
  return tmp3(tmp4, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ Image: closure_6, View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = { headerText: { standardDeviation: 52881784.83212474, color: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 }, subheaderText: {}, answerScroll: { marginTop: 24 }, answerScrollContainer: { skuId: "space-between", c: null }, answerName: {}, list: { paddingHorizontal: 16 } };
obj = { Icon: false, opacity: false, flex: false, assign: false, __workletHash: false, borderRadius: importDefault(dependencyMap[11]).radii.xs };
obj.answerButton = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
obj.answerSelected = obj1;
obj.answerEmoji = { marginRight: 8 };
obj.answerText = { flexShrink: 1 };
obj.emojiText = { fontSize: 16 };
obj.emojiImage = { "Null": null, "Null": "6adfcc7a553215ee3085ec15a5a3e3a4", "Null": "ClockXIcon" };
obj.noResultsContainer = {};
obj.noResultsImage = { "Null": false, "Null": false };
obj.noResultsTitle = { accessible: "center", id: "center" };
obj.noResultsSubtitle = { accessible: "audio", id: "architecture" };
let closure_16 = obj1.createStyles(obj);
let closure_17 = importAllResult.forwardRef((answer, ref) => {
  let reaction;
  let selected;
  let setSelectedAnswerId;
  answer = answer.answer;
  ref = answer;
  ({ reaction, selected, setSelectedAnswerId } = answer);
  const importDefault = setSelectedAnswerId;
  const tmp = callback4();
  let vote;
  if (null != reaction) {
    const count_details = reaction.count_details;
    if (null != count_details) {
      vote = count_details.vote;
    }
  }
  let num = 0;
  if (null != vote) {
    num = vote;
  }
  const items = [setSelectedAnswerId, answer.answer_id];
  let str = "text-default";
  const callback = importAllResult.useCallback(() => {
    setSelectedAnswerId(String(answer.answer_id));
  }, items);
  if (selected) {
    str = "interactive-text-active";
  }
  const intl = ref(dependencyMap[15]).intl;
  let obj = { numVotes: num, option: answer.poll_media.text };
  obj = { ref, onPress: callback };
  const items1 = [tmp.answerButton, ];
  let answerSelected;
  if (selected) {
    answerSelected = tmp.answerSelected;
  }
  items1[1] = answerSelected;
  obj.style = items1;
  obj.accessibilityRole = "tab";
  obj.accessibilityState = { selected };
  obj.accessibilityLabel = intl.formatToPlainString(ref(dependencyMap[15]).t.wqBc7A, obj);
  let tmp7 = null;
  if (null != answer.poll_media.emoji) {
    obj = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
    tmp7 = callback2(PollEmoji, obj);
  }
  const items2 = [tmp7, , ];
  let tmp10 = null;
  if (null != answer.poll_media.text) {
    const obj1 = { style: tmp.answerText, variant: "text-sm/semibold", color: str, lineClamp: 1, children: answer.poll_media.text };
    tmp10 = callback2(ref(dependencyMap[17]).Text, obj1);
  }
  items2[1] = tmp10;
  const obj2 = { 9223372036854775807: "Layer 1", 9223372036854775807: 1, 9223372036854775807: null, color: str };
  const items3 = [true, true, num.toLocaleString(), ")"];
  obj2.children = items3;
  items2[2] = callback3(ref(dependencyMap[17]).Text, obj2);
  obj.children = items2;
  return callback3(ref(dependencyMap[16]).PressableHighlight, obj);
});
let closure_18 = { code: "function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}" };
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const messageId = channelId.messageId;
  const importDefault = messageId;
  let closure_4;
  const tmp = callback4();
  const tmp3 = callback(importAllResult.useState(channelId.initialAnswerId), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => message.getMessage(channelId, messageId));
  const callback = stateFromStores;
  closure_4 = tmp6;
  const items1 = [null != stateFromStores && null != stateFromStores.poll];
  const effect = importAllResult.useEffect(() => {
    if (!tmp6) {
      messageId(first[39]).hideActionSheet("PollVotesActionSheet");
      const obj = messageId(first[39]);
    }
  }, items1);
  let reactions;
  if (null != stateFromStores) {
    reactions = stateFromStores.reactions;
  }
  const items2 = [reactions, first];
  const memo = importAllResult.useMemo(() => {
    let reactions;
    if (null != stateFromStores) {
      reactions = stateFromStores.reactions;
    }
    if (null != reactions) {
      return channelId(first[20]).reactionForId(stateFromStores.reactions, first);
    }
  }, items2);
  if (null != stateFromStores && null != stateFromStores.poll) {
    let found;
    if (null != stateFromStores) {
      const poll = stateFromStores.poll;
      if (null != poll) {
        const answers = poll.answers;
        found = answers.find((answer_id) => String(answer_id.answer_id) === first);
      }
    }
    let vote;
    if (null != memo) {
      const count_details = memo.count_details;
      if (null != count_details) {
        vote = count_details.vote;
      }
    }
    let num = 0;
    if (null != vote) {
      num = vote;
    }
    obj = { value: tmp2(importDefault(dependencyMap[38]).POLL_VOTES).analyticsLocations };
    obj = { scrollable: true };
    const obj1 = { message: stateFromStores, selectedAnswerId: first, setSelectedAnswerId: tmp3[1] };
    obj.header = callback2(PollVotesHeader, obj1);
    const obj2 = { Promise: 10, marginTop: null, flags: "flex-start", style: tmp.answerName };
    let text;
    if (null != found) {
      text = found.poll_media.text;
    }
    const items3 = [text, " - ", ];
    const intl = arg1(dependencyMap[15]).intl;
    const obj3 = { count: num };
    items3[2] = intl.format(arg1(dependencyMap[15]).t.SG/Cyy, obj3);
    obj2.children = items3;
    const items4 = [closure_15(arg1(dependencyMap[17]).Text, obj2), ];
    if (null != memo) {
      if (num > 0) {
        const obj4 = { channelId, messageId, reaction: memo };
        let tmp25 = callback2(VotersList, obj4);
      }
      items4[1] = tmp25;
      obj.children = items4;
      obj.children = tmp16(arg1(dependencyMap[40]).BottomSheet, obj);
      return tmp13(arg1(dependencyMap[21]).AnalyticsLocationProvider, obj);
    }
    tmp25 = callback2(NoResults, {});
    const tmp13 = callback2;
    const tmp16 = closure_15;
    const tmp19 = closure_15;
  } else {
    return null;
  }
};
