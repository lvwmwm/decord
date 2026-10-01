// Module ID: 11216
// Function ID: 11217
// Name: PollVotesActionSheet
// Dependencies: [32, 5, 19, 17, 4825, 5771, 2045, 5056, 1372, 21, 4836, 576, 504, 1397, 6551, 1115, 5435, 4832, 7180, 6073, 11217, 6583, 11223, 10826, 7182, 4988, 4678, 5917, 1177, 9094, 7624, 4566, 4837, 8179, 4767, 4685, 11224, 11225, 6603, 4800, 6571, 2]
// Exports: default

// Module 11216 (PollVotesActionSheet)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import timing from "timing" /* 4837 */;
import Pressables from "Pressables" /* 5435 */;
import EmojiDefault from "Emoji" /* 6551 */;
import PollsUtils from "PollsUtils" /* 7180 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import formatPollMessageChatData from "formatPollMessageChatData" /* 11217 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, answer, c2, item, ref2, set, user;

let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function PollEmoji(emoji) {
  emoji = emoji.emoji;
  const style = emoji.style;
  const tmp = closure_16();
  let obj = emoji(504);
  const items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != emoji.id) {
      let animated = tmp.animated;
      if (!animated) {
        const customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        let flag;
        if (customEmojiById != null) {
          flag = customEmojiById.animated;
        }
        if (flag == null) {
          flag = false;
        }
        animated = flag;
      }
      const obj2 = { id: emoji.id, animated, size: 16 };
      const obj = AvatarUtilsDefault;
      return obj.getEmojiURL(obj2);
    }
  });
  let obj2 = { style, src: stateFromStores, name: emoji.name, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emojiImage };
  return closure_14(EmojiDefault, obj2);
}
function PollVotesHeader(message) {
  let answers;
  let closure_5;
  let intl;
  let intl2;
  let items2;
  let obj11;
  let obj4;
  message = message.message;
  const selectedAnswerId = message.selectedAnswerId;
  const setSelectedAnswerId = message.setSelectedAnswerId;
  react = undefined;
  let tmp = closure_16();
  let items = [message.reactions];
  const memo = react.useMemo(() => {
    const obj = PollsUtils;
    return obj.getTotalVotes(message.reactions);
  }, items);
  let ref = react.useRef(null);
  let closure_4 = react.useRef(null);
  react = react.useRef(false);
  const items1 = [selectedAnswerId];
  const effect = react.useEffect(() => {
    const timerId = setTimeout(_asyncToGenerator(async function(arg0, value) {
      let c3;
      if (ref === 2) {
        ref = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_2;
          let scrollWidth;
          let scrollPageX;
          let styles;
          let width;
          let pageX;
          let x;
          let animated;
          ref = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              ref = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              let closure_1 = tmp4;
              let closure_0 = tmp;
              closure_2 = undefined;
              ref = undefined;
              ref2 = undefined;
              scrollWidth = undefined;
              scrollPageX = undefined;
              styles = undefined;
              width = undefined;
              pageX = undefined;
              x = undefined;
              animated = undefined;
              const current4 = ref.current;
              const current5 = ref2.current;
              if (null != current4) {
                if (null != current5) {
                  const self = this;
                  const self2 = this;
                  const promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) => {
                      const obj = { scrollWidth, scrollPageX };
                      return closure_0(obj);
                    });
                  });
                  const self3 = this;
                  const self4 = this;
                  const promise3 = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_1.measure((arg0, arg1, width, arg3, pageX) => {
                      const obj = { width, pageX };
                      return closure_0(obj);
                    });
                  });
                  const self5 = this;
                  const self6 = this;
                  const promise4 = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_1.measureLayout(closure_1_0, (x) => {
                      const obj = { x };
                      return closure_0(obj);
                    });
                  });
                  const items = [promise, promise3, promise4];
                  c2 = 1;
                  ref = 1;
                  const obj3 = { value: Promise.all(items), done: false };
                  return obj3;
                }
              }
            }
          } else if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = value;
            ref = ref(closure_2, 3);
            ref2 = ref[0];
            scrollWidth = ref2.scrollWidth;
            scrollPageX = ref2.scrollPageX;
            styles = ref[1];
            width = styles.width;
            pageX = styles.pageX;
            x = ref[2].x;
            animated = !useReducedMotion.useReducedMotion;
            if (ref2.current) {
              if (pageX < scrollPageX) {
                const current2 = ref.current;
                if (current2 != null) {
                  const point = { x: x - 16, y: 0, animated };
                  current2.scrollTo(point);
                }
              } else if (pageX + width > scrollPageX + scrollWidth) {
                const current3 = ref.current;
                if (current3 != null) {
                  const point1 = { x: x + width - scrollWidth + 16, y: 0, animated };
                  current3.scrollTo(point1);
                }
              }
            } else {
              const current = ref.current;
              if (current != null) {
                const point2 = { x: x + width / 2 - scrollWidth / 2, y: 0, animated };
                current.scrollTo(point2);
              }
              ref2.current = true;
              ref = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          ref = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp29) {
          ref = 3;
          throw tmp29;
        }
      }
    }), 0);
  }, items1);
  message(setSelectedAnswerId[19]);
  let tmp9 = null;
  if (null != message.poll) {
    let obj = { children: items2 };
    let obj2 = { style: tmp.headerText, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: message.poll.question.text };
    items2 = [closure_14(tmp5(tmp6[17]).Text, obj2), , ];
    let obj3 = { style: tmp.subheaderText, variant: "text-md/medium", color: "text-default", children: intl.format(tmp5(tmp6[15]).t.XRkuof, obj4) };
    const Text = tmp5(tmp6[17]).Text;
    intl = tmp5(tmp6[15]).intl;
    obj4 = { count: memo };
    items2[1] = closure_14(Text, obj3);
    const obj5 = { gesture: tmp8, children: closure_14(closure_8, obj11) };
    ({ answerScroll: obj6.style, answerScrollContainer: obj6.contentContainerStyle } = tmp);
    obj11 = {
      ref,
      style: null,
      contentContainerStyle: null,
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      accessibilityRole: "tablist",
      accessibilityLabel: intl2.string(message(setSelectedAnswerId[15]).t["qbir+4"]),
      children: answers.map((answer) => {
          let obj2;
          const tmp = selectedAnswerId === String(answer.answer_id);
          let tmp4;
          const tmp2 = authStore2;
          const tmp3 = closure_18;
          if (tmp) {
            tmp4 = closure_4;
          }
          const obj = { ref: tmp4, answer, selected: tmp, reaction: obj2.reactionForId(message.reactions, String(answer.answer_id)), setSelectedAnswerId };
          obj2 = formatPollMessageChatData;
          return tmp2(tmp3, obj, answer.answer_id);
        })
    };
    const GestureDetector = tmp5(tmp6[19]).GestureDetector;
    intl2 = tmp5(tmp6[15]).intl;
    answers = message.poll.answers;
    items2[2] = closure_14(GestureDetector, obj5);
    tmp9 = closure_15(closure_7, obj);
  }
  return tmp9;
}
function VotersList(channelId) {
  let obj6;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let sharedValue;
  const tmp3 = analyticsLocations;
  const tmp = closure_16();
  const tmp2 = messageId;
  analyticsLocations = messageId(analyticsLocations[21])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[22])({ channelId, messageId, reaction });
  const reactors = tmp4.reactors;
  const hasMore = tmp4.hasMore;
  let obj = channelId(analyticsLocations[23]);
  let obj2 = { channelId, messageId, reactionSelected: reaction, reactors, reactorsHasMore: hasMore, reactionType: channelId(analyticsLocations[24]).ReactionTypes.VOTE };
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative(obj2);
  let obj3 = channelId(analyticsLocations[12]);
  const items = [ChannelStore];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores, reactors.length, channelId, messageId, analyticsLocations];
  const callback = sharedValue.useCallback((item) => {
    let Avatar;
    let obj2;
    let tmp10Result;
    let tmp14;
    item = item.item;
    const index = item.index;
    let guild_id;
    const getNickname = messageId(analyticsLocations[25]).getNickname;
    messageId(analyticsLocations[25]);
    if (stateFromStores != null) {
      guild_id = tmp4.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = tmp4.id;
    }
    let nickname = getNickname(guild_id, id, item);
    if (nickname == null) {
      const tmpResult = messageId(analyticsLocations[26]);
      nickname = tmpResult.getGlobalName(item);
    }
    const tmpResult2 = messageId(analyticsLocations[26]);
    const userTag = tmpResult2.getUserTag(item);
    user = user.getUser(item.id);
    let obj = {
      start: 0 === index,
      end: reactors.length - 1 === index,
      icon: closure_1_14(Avatar, obj2),
      label: tmp10Result,
      subLabel: tmp14,
      onPress() {
        const obj = { userId: item.id, localUser: item, sourceAnalyticsLocations: analyticsLocations, channelId, messageId };
        return showUserProfileActionSheetDefault(obj);
      }
    };
    const TableRow = channelId(tmp2[27]).TableRow;
    let guild_id1;
    Avatar = channelId(tmp2[28]).Avatar;
    const tmp11 = channelId;
    if (stateFromStores != null) {
      guild_id1 = tmp4.guild_id;
    }
    obj2 = { guildId: guild_id1, user, size: tmp11(analyticsLocations[28]).AvatarSizes.SMALL };
    if (user == null) {
      user = item;
    }
    tmp10Result = nickname;
    if (nickname == null) {
      const obj3 = { user: item };
      tmp10Result = tmp10(tmp(tmp2[29]), obj3);
    }
    tmp14 = null;
    if (null != nickname) {
      tmp14 = userTag;
    }
    return closure_1_14(TableRow, obj);
  }, items1);
  let num = 1;
  const useSharedValue = channelId(analyticsLocations[31]).useSharedValue;
  channelId(analyticsLocations[31]);
  const obj4 = sharedValue;
  if (0 === reactors.length) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items2 = [sharedValue, reactors.length];
  const effect = obj4.useEffect(() => {
    if (0 !== reactors.length) {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(1, { duration: 200 }));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const tmp5Result = channelId(tmp3[31]);
  class I {
    constructor() {
      const obj = { flex: 1, opacity: sharedValue.get(), marginBottom: 32 };
      return obj;
    }
  }
  I.__closure = { opacity: sharedValue };
  I.__workletHash = 8593850252158;
  I.__initData = __initData;
  const animatedStyle = tmp5Result.useAnimatedStyle(I);
  const obj5 = { style: animatedStyle, children: closure_14(channelId(tmp3[33]).BottomSheetFlashList, obj6) };
  const View = tmp2(tmp3[31]).View;
  obj6 = { contentContainerStyle: tmp.list, data: reactors, renderItem: callback, onScroll: reactorsOnScrollNative };
  return closure_14(View, obj5);
}
function NoResults() {
  let intl;
  let intl2;
  let items;
  let tmp2Result;
  const tmp = closure_16();
  const obj = { style: tmp.noResultsContainer, children: items };
  const obj2 = { style: tmp.noResultsImage, source: tmp2Result };
  const tmp4 = useThemeDefault();
  const obj3 = shared;
  const tmp5 = closure_15;
  const tmp6 = metroImportDefault;
  const tmp8 = metroRequire;
  if (obj3.isThemeDark(tmp4)) {
    tmp2Result = tmp2(11224);
  } else {
    tmp2Result = tmp2(11225);
  }
  items = [authStore2(tmp8, obj2), , ];
  const obj4 = { style: tmp.noResultsTitle, variant: "heading-md/bold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.vhQK3o) };
  const Text = tmp9(4832).Text;
  intl = tmp9(1115).intl;
  items[1] = authStore2(Text, obj4);
  const obj5 = { style: tmp.noResultsSubtitle, variant: "text-sm/semibold", color: "text-default", children: intl2.string(intl3.t.bwytdh) };
  const Text2 = tmp9(4832).Text;
  intl2 = tmp9(1115).intl;
  items[2] = authStore2(Text2, obj5);
  return tmp5(tmp6, obj);
}
let react = react_mod;
({ Image: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: { textAlign: "center", paddingHorizontal: 16 }, subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 }, answerScroll: { marginTop: 24 }, answerScrollContainer: { gap: 4, paddingHorizontal: 16 }, answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 }, list: { paddingHorizontal: 16 }, answerButton: obj2, answerSelected: obj3, answerEmoji: { marginRight: 8 }, answerText: { flexShrink: 1 }, emojiText: { fontSize: 16 }, emojiImage: { height: 16, width: 16, flexShrink: 0 }, noResultsContainer: { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 }, noResultsImage: { marginTop: 32, width: 138 }, noResultsTitle: { marginTop: 16, textAlign: "center" }, noResultsSubtitle: { marginTop: 4, textAlign: "center" } };
obj2 = { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xs, maxWidth: 200 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_16 = createStyles(obj);
let closure_18 = react.forwardRef((answer, ref) => {
  let formatToPlainStringResult;
  let items1;
  let items2;
  let items3;
  let reaction;
  let selected;
  let setSelectedAnswerId;
  answer = answer.answer;
  ({ reaction, selected, setSelectedAnswerId } = answer);
  const tmp = closure_16();
  let num;
  if (reaction != null) {
    const count_details = reaction.count_details;
    if (count_details != null) {
      num = count_details.vote;
    }
  }
  if (num == null) {
    num = 0;
  }
  const items = [setSelectedAnswerId, answer.answer_id];
  let str = "text-default";
  const callback = react.useCallback(() => {
    setSelectedAnswerId(String(answer.answer_id));
  }, items);
  if (selected) {
    str = "interactive-text-active";
  }
  const intl = intl3.intl;
  const obj2 = { ref, onPress: callback, style: items1, accessibilityRole: "tab", accessibilityState: { selected }, accessibilityLabel: formatToPlainStringResult, children: items2 };
  items1 = [tmp.answerButton, ];
  let answerSelected;
  const obj = { numVotes: num, option: answer.poll_media.text };
  formatToPlainStringResult = intl.formatToPlainString(intl3.t.wqBc7A, obj);
  const PressableHighlight = Pressables.PressableHighlight;
  if (selected) {
    answerSelected = tmp.answerSelected;
  }
  items1[1] = answerSelected;
  let tmp8 = null;
  if (null != answer.poll_media.emoji) {
    const obj3 = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
    tmp8 = authStore2(PollEmoji, obj3);
  }
  items2 = [tmp8, , ];
  let tmp11 = null;
  if (null != answer.poll_media.text) {
    const obj4 = { style: tmp.answerText, variant: "text-sm/semibold", color: str, lineClamp: 1, children: answer.poll_media.text };
    tmp11 = authStore2(tmp3(4832).Text, obj4);
  }
  items2[1] = tmp11;
  const obj5 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: items3 };
  const Text = tmp3(4832).Text;
  items3 = [" ", "(", num.toLocaleString(), ")"];
  items2[2] = closure_15(Text, obj5);
  return closure_15(PressableHighlight, obj2);
});
const __initData = { code: "function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}" };
let result = size.fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  let items3;
  let obj5;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let selectedAnswerId;
  let stateFromStores;
  const initialAnswerId = channelId.initialAnswerId;
  let tmp = closure_16();
  let obj = react;
  const tmp3 = messageId(selectedAnswerId[21]);
  const analyticsLocations = tmp3(messageId(selectedAnswerId[38]).POLL_VOTES).analyticsLocations;
  const tmp4 = stateFromStores(react.useState(initialAnswerId), 2);
  selectedAnswerId = tmp4[0];
  const items = [MessageStore];
  const tmp6 = tmp4[1];
  const obj2 = channelId(selectedAnswerId[12]);
  stateFromStores = obj2.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  let closure_4 = tmp9;
  const items1 = [null != stateFromStores && null != stateFromStores.poll];
  const effect = obj.useEffect(() => {
    const tmp = closure_4;
    if (!tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("PollVotesActionSheet");
    }
  }, items1);
  let reactions;
  const useMemo = obj.useMemo;
  if (stateFromStores != null) {
    reactions = stateFromStores.reactions;
  }
  const items2 = [reactions, selectedAnswerId];
  const memo = useMemo(() => {
    let reactions;
    if (stateFromStores != null) {
      reactions = tmp.reactions;
    }
    if (null != reactions) {
      const obj = formatPollMessageChatData;
      return obj.reactionForId(stateFromStores.reactions, first);
    }
  }, items2);
  if (null != stateFromStores && null != stateFromStores.poll) {
    let found;
    if (stateFromStores != null) {
      const poll = stateFromStores.poll;
      if (poll != null) {
        const answers = poll.answers;
        found = answers.find((answer_id) => String(answer_id.answer_id) === first);
      }
    }
    let num;
    if (memo != null) {
      const count_details = memo.count_details;
      if (count_details != null) {
        num = count_details.vote;
      }
    }
    if (num == null) {
      num = 0;
    }
    const obj3 = { value: analyticsLocations, children: null };
    const AnalyticsLocationProvider = tmp7(tmp2[21]).AnalyticsLocationProvider;
    const obj4 = { scrollable: true, header: closure_14(PollVotesHeader, obj5), children: null };
    obj5 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp6 };
    BottomSheet = tmp7(tmp2[40]).BottomSheet;
    let text;
    const obj6 = { style: tmp.answerName, variant: "text-sm/semibold", color: "text-default", children: items3 };
    const Text = tmp7(tmp2[17]).Text;
    if (found != null) {
      text = found.poll_media.text;
    }
    items3 = [text, , ];
    items3[1] = " - ";
    const intl = tmp7(tmp2[15]).intl;
    const obj7 = { count: num };
    items3[2] = intl.format(channelId(selectedAnswerId[15]).t["SG/Cyy"], obj7);
    const items4 = [closure_15(Text, obj6), ];
    if (null != memo) {
      let tmp14Result;
      if (num > 0) {
        const obj8 = { channelId, messageId, reaction: memo };
        tmp14Result = tmp14(VotersList, obj8);
      }
      items4[1] = tmp14Result;
      obj4.children = items4;
      obj3.children = closure_15(BottomSheet, obj4);
      return closure_14(AnalyticsLocationProvider, obj3);
    }
    tmp14Result = tmp14(NoResults, {});
  } else {
    return null;
  }
};
