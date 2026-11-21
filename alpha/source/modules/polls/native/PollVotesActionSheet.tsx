// Module ID: 12145
// Function ID: 12146
// Name: PollVotesActionSheet
// Dependencies: [32, 5, 19, 17, 4914, 6573, 4762, 5964, 1386, 21, 4913, 575, 504, 1412, 7496, 8790, 5637, 1112, 7030, 5504, 8456, 5173, 12146, 7520, 12152, 10385, 5495, 5943, 4969, 7045, 1186, 10386, 8067, 1653, 5123, 7490, 5122, 5600, 4920, 12153, 12154, 7539, 5127, 5141, 2]
// Exports: default

// Module 12145 (PollVotesActionSheet)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import shared from "shared" /* 4920 */;
import useThemeDefault from "useTheme" /* 5122 */;
import timing_timing from "timing/timing" /* 5123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import FastImageDefault from "FastImage" /* 5600 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5637 */;
import EmojiDefault from "Emoji" /* 7496 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8067 */;
import PollsUtils from "PollsUtils" /* 8456 */;
import PollTextUtils from "PollTextUtils" /* 8790 */;
import formatPollMessageChatData from "formatPollMessageChatData" /* 12146 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import EmojiStore from "EmojiStore" /* 6573 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import MessageStore from "MessageStore" /* 5964 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c2, item, set, user;

let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function PollEmoji(emoji) {
  emoji = emoji.emoji;
  const style = emoji.style;
  const tmp = closure_15();
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
  return closure_13(EmojiDefault, obj2);
}
function PollAnswerButton(answer) {
  let formatToPlainStringResult;
  let items3;
  let items4;
  let items5;
  let reaction;
  let selected;
  let setSelectedAnswerId;
  answer = answer.answer;
  ({ reaction, selected, setSelectedAnswerId } = answer);
  let str;
  let c3;
  const ref = answer.ref;
  const tmp = closure_15();
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
  let obj = react;
  const items = [setSelectedAnswerId, answer.answer_id];
  str = "text-default";
  const callback = react.useCallback(() => {
    setSelectedAnswerId(String(answer.answer_id));
  }, items);
  if (selected) {
    str = "interactive-text-active";
  }
  const text = answer.poll_media.text;
  c3 = text;
  const items1 = [text];
  const items2 = [text, str];
  const memo = obj.useMemo(() => {
    let pollPlainText;
    if (null != c3) {
      const obj = PollTextUtils;
      pollPlainText = obj.getPollPlainText(tmp);
    }
    return pollPlainText;
  }, items1);
  const memo1 = obj.useMemo(() => {
    const obj = MarkupUtilsDefault;
    const obj2 = { textVariant: "body-sm/semibold", textColor: str, noStyleAndInteraction: true };
    return obj.parsePoll(c3, true, obj2);
  }, items2);
  const intl = answer(str[17]).intl;
  let obj2 = { ref, onPress: callback, style: items3, accessibilityRole: "tab", accessibilityState: { selected }, accessibilityLabel: formatToPlainStringResult, children: items4 };
  items3 = [tmp.answerButton, ];
  let answerSelected;
  formatToPlainStringResult = intl.formatToPlainString(answer(str[17]).t.wqBc7A, { numVotes: num, option: memo });
  const PressableHighlight = answer(str[18]).PressableHighlight;
  if (selected) {
    answerSelected = tmp.answerSelected;
  }
  items3[1] = answerSelected;
  let tmp10 = null;
  if (null != answer.poll_media.emoji) {
    const obj3 = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
    tmp10 = closure_13(PollEmoji, obj3);
  }
  items4 = [tmp10, , ];
  let tmp13 = null;
  if (null != answer.poll_media.text) {
    const obj4 = { style: tmp.answerText, variant: "body-sm/semibold", color: str, lineClamp: 1, children: memo1 };
    tmp13 = closure_13(tmp5(tmp6[19]).Text, obj4);
  }
  items4[1] = tmp13;
  const obj5 = { variant: "body-sm/semibold", color: str, lineClamp: 1, children: items5 };
  const Text = tmp5(tmp6[19]).Text;
  items5 = [" ", "(", num.toLocaleString(), ")"];
  items4[2] = closure_14(Text, obj5);
  return closure_14(PressableHighlight, obj2);
}
function PollVotesHeader(message) {
  let answers;
  let closure_5;
  let intl;
  let intl2;
  let items3;
  let obj11;
  let obj4;
  message = message.message;
  const selectedAnswerId = message.selectedAnswerId;
  const setSelectedAnswerId = message.setSelectedAnswerId;
  let c3;
  let ref;
  react = undefined;
  let closure_6;
  let tmp = closure_15();
  const poll = message.poll;
  let text;
  if (poll != null) {
    text = poll.question.text;
  }
  c3 = text;
  let items = [text];
  const items1 = [message.reactions];
  const memo = react.useMemo(() => {
    const obj = MarkupUtilsDefault;
    return obj.parsePoll(c3, true, { textVariant: "heading-md/semibold", textColor: "mobile-text-heading-primary" });
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = PollsUtils;
    return obj.getTotalVotes(message.reactions);
  }, items1);
  ref = react.useRef(null);
  react = react.useRef(null);
  closure_6 = react.useRef(false);
  const items2 = [selectedAnswerId];
  const effect = react.useEffect(() => {
    let ref2;
    const timerId = setTimeout(_asyncToGenerator(async function(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
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
          let closure_3;
          let scrollWidth;
          let scrollPageX;
          let styles;
          let width;
          let pageX;
          let x;
          let animated;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              let closure_1 = tmp4;
              let closure_0 = tmp;
              closure_2 = undefined;
              closure_3 = undefined;
              ref = undefined;
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
                  c3 = 1;
                  const obj3 = { value: Promise.all(items), done: false };
                  return obj3;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = value;
            closure_3 = c3(closure_2, 3);
            ref = closure_3[0];
            scrollWidth = ref.scrollWidth;
            scrollPageX = ref.scrollPageX;
            styles = closure_3[1];
            width = styles.width;
            pageX = styles.pageX;
            x = closure_3[2].x;
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
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp29) {
          c3 = 3;
          throw tmp29;
        }
      }
    }), 0);
  }, items2);
  message(setSelectedAnswerId[21]);
  let tmp11 = null;
  if (null != message.poll) {
    let obj = { children: items3 };
    let obj2 = { style: tmp.headerText, variant: "heading-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: memo };
    items3 = [closure_13(tmp7(tmp8[19]).Text, obj2), , ];
    let obj3 = { style: tmp.subheaderText, variant: "body-md/medium", color: "text-default", children: intl.format(tmp7(tmp8[17]).t.XRkuof, obj4) };
    const Text = tmp7(tmp8[19]).Text;
    intl = tmp7(tmp8[17]).intl;
    obj4 = { count: memo1 };
    items3[1] = closure_13(Text, obj3);
    const obj5 = { gesture: tmp10, children: closure_13(closure_7, obj11) };
    ({ answerScroll: obj6.style, answerScrollContainer: obj6.contentContainerStyle } = tmp);
    obj11 = {
      ref,
      style: null,
      contentContainerStyle: null,
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      accessibilityRole: "tablist",
      accessibilityLabel: intl2.string(message(setSelectedAnswerId[17]).t["qbir+4"]),
      children: answers.map((answer) => {
          let obj2;
          const tmp = selectedAnswerId === String(answer.answer_id);
          let tmp4;
          const tmp2 = map1;
          const tmp3 = PollAnswerButton;
          if (tmp) {
            tmp4 = closure_5;
          }
          const obj = { ref: tmp4, answer, selected: tmp, reaction: obj2.reactionForId(message.reactions, String(answer.answer_id)), setSelectedAnswerId };
          obj2 = formatPollMessageChatData;
          return tmp2(tmp3, obj, answer.answer_id);
        })
    };
    const GestureDetector = tmp7(tmp8[21]).GestureDetector;
    intl2 = tmp7(tmp8[17]).intl;
    answers = message.poll.answers;
    items3[2] = closure_13(GestureDetector, obj5);
    tmp11 = closure_14(closure_6, obj);
  }
  return tmp11;
}
function VotersList(channelId) {
  let obj6;
  let tmp12;
  let tmp13;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let sharedValue;
  const tmp3 = analyticsLocations;
  const tmp = closure_15();
  const tmp2 = messageId;
  analyticsLocations = messageId(analyticsLocations[23])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[24])({ channelId, messageId, reaction });
  const reactors = tmp4.reactors;
  const hasMore = tmp4.hasMore;
  let obj = channelId(analyticsLocations[25]);
  let obj2 = { channelId, messageId, reactionSelected: reaction, reactors, reactorsHasMore: hasMore, reactionType: channelId(analyticsLocations[26]).ReactionTypes.VOTE };
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
    const getNickname = messageId(analyticsLocations[27]).getNickname;
    messageId(analyticsLocations[27]);
    if (stateFromStores != null) {
      guild_id = tmp4.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = tmp4.id;
    }
    let nickname = getNickname(guild_id, id, item);
    if (nickname == null) {
      const tmpResult = messageId(analyticsLocations[28]);
      nickname = tmpResult.getGlobalName(item);
    }
    const tmpResult2 = messageId(analyticsLocations[28]);
    const userTag = tmpResult2.getUserTag(item);
    user = user.getUser(item.id);
    let obj = {
      start: 0 === index,
      end: reactors.length - 1 === index,
      icon: closure_1_13(Avatar, obj2),
      label: tmp10Result,
      subLabel: tmp14,
      onPress() {
        const obj = { userId: item.id, localUser: item, sourceAnalyticsLocations: analyticsLocations, channelId, messageId };
        return showUserProfileActionSheetDefault(obj);
      }
    };
    const TableRow = channelId(tmp2[29]).TableRow;
    let guild_id1;
    Avatar = channelId(tmp2[30]).Avatar;
    const tmp11 = channelId;
    if (stateFromStores != null) {
      guild_id1 = tmp4.guild_id;
    }
    obj2 = { guildId: guild_id1, user, size: tmp11(analyticsLocations[30]).AvatarSizes.SMALL };
    if (user == null) {
      user = item;
    }
    tmp10Result = nickname;
    if (nickname == null) {
      const obj3 = { user: item };
      tmp10Result = tmp10(tmp(tmp2[31]), obj3);
    }
    tmp14 = null;
    if (null != nickname) {
      tmp14 = userTag;
    }
    return closure_1_13(TableRow, obj);
  }, items1);
  let num = 1;
  const useSharedValue = channelId(analyticsLocations[33]).useSharedValue;
  channelId(analyticsLocations[33]);
  const obj4 = sharedValue;
  if (0 === reactors.length) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items2 = [sharedValue, reactors.length];
  const effect = obj4.useEffect(() => {
    if (0 !== reactors.length) {
      set = sharedValue.set;
      const obj = timing_timing;
      const result = set(obj.withTiming(1, { duration: 200 }));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const items3 = [closure_19, sharedValue];
  let c0;
  [tmp12, tmp13] = items3;
  const tmp5Result = channelId(tmp3[33]);
  class PollVotesActionSheetTsx1 {
    constructor() {
      const obj = { flex: 1, opacity: _undefined.get(), marginBottom: 32 };
      return obj;
    }
  }
  const items4 = [tmp13];
  PollVotesActionSheetTsx1.__closure = items4;
  PollVotesActionSheetTsx1.__workletHash = 11579760846087;
  PollVotesActionSheetTsx1.__initData = tmp12;
  const animatedStyle = tmp5Result.useAnimatedStyle(PollVotesActionSheetTsx1);
  const obj5 = { style: animatedStyle, children: closure_13(channelId(tmp3[35]).BottomSheetFlashList, obj6) };
  const View = tmp2(tmp3[33]).View;
  obj6 = { contentContainerStyle: tmp.list, data: reactors, renderItem: callback, onScroll: reactorsOnScrollNative };
  return closure_13(View, obj5);
}
function NoResults() {
  let intl;
  let intl2;
  let items;
  let tmp2Result;
  const tmp = closure_15();
  const obj = { style: tmp.noResultsContainer, children: items };
  const obj2 = { style: tmp.noResultsImage, source: tmp2Result };
  const tmp4 = useThemeDefault();
  const tmp8 = FastImageDefault;
  const obj3 = shared;
  const tmp5 = gesture;
  const tmp6 = metroRequire;
  if (obj3.isThemeDark(tmp4)) {
    tmp2Result = tmp2(12153);
  } else {
    tmp2Result = tmp2(12154);
  }
  items = [map1(tmp8, obj2), , ];
  const obj4 = { style: tmp.noResultsTitle, variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t.vhQK3o) };
  const Text = tmp9(5504).Text;
  intl = tmp9(1112).intl;
  items[1] = map1(Text, obj4);
  const obj5 = { style: tmp.noResultsSubtitle, variant: "body-sm/semibold", color: "text-default", children: intl2.string(intl3.t.bwytdh) };
  const Text2 = tmp9(5504).Text;
  intl2 = tmp9(1112).intl;
  items[2] = map1(Text2, obj5);
  return tmp5(tmp6, obj);
}
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: { textAlign: "center", paddingHorizontal: 16 }, subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 }, answerScroll: { marginTop: 24 }, answerScrollContainer: { gap: 4, paddingHorizontal: 16 }, answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 }, list: { paddingHorizontal: 16 }, answerButton: obj2, answerSelected: obj3, answerEmoji: { marginRight: 8 }, answerText: { flexShrink: 1 }, emojiText: { fontSize: 16 }, emojiImage: { height: 16, width: 16, flexShrink: 0 }, noResultsContainer: { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 }, noResultsImage: { marginTop: 32, width: 138 }, noResultsTitle: { marginTop: 16, textAlign: "center" }, noResultsSubtitle: { marginTop: 4, textAlign: "center" } };
obj2 = { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xs, maxWidth: 200 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_15 = createStyles(obj);
let closure_19 = { code: "(function PollVotesActionSheetTsx1(){let[opacity]=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};})" };
let result = size.fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  let c5;
  let items3;
  let obj5;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let selectedAnswerId;
  let stateFromStores;
  react = undefined;
  const initialAnswerId = channelId.initialAnswerId;
  let tmp = closure_15();
  let obj = react;
  const tmp3 = messageId(selectedAnswerId[23]);
  const analyticsLocations = tmp3(messageId(selectedAnswerId[41]).POLL_VOTES).analyticsLocations;
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
  let found;
  if (stateFromStores != null) {
    const poll = stateFromStores.poll;
    if (poll != null) {
      const answers = poll.answers;
      found = answers.find((answer_id) => String(answer_id.answer_id) === first);
    }
  }
  let text;
  if (found != null) {
    text = found.poll_media.text;
  }
  react = text;
  [][0] = text;
  if (null != stateFromStores && null != stateFromStores.poll) {
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
    const AnalyticsLocationProvider = tmp7(tmp2[23]).AnalyticsLocationProvider;
    const obj4 = { scrollable: true, header: closure_13(PollVotesHeader, obj5), children: null };
    obj5 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp6 };
    const BottomSheet = tmp7(tmp2[43]).BottomSheet;
    const obj6 = { style: tmp.answerName, variant: "body-sm/semibold", color: "text-default", children: items3 };
    items3 = [tmp15, , ];
    items3[1] = " - ";
    const Text = tmp7(tmp2[19]).Text;
    const intl = tmp7(tmp2[17]).intl;
    const obj7 = { count: num };
    items3[2] = intl.format(channelId(selectedAnswerId[17]).t["SG/Cyy"], obj7);
    const items4 = [closure_14(Text, obj6), ];
    const tmp17 = closure_14;
    if (null != memo) {
      let tmp16Result;
      if (num > 0) {
        const obj8 = { channelId, messageId, reaction: memo };
        tmp16Result = tmp16(VotersList, obj8);
      }
      items4[1] = tmp16Result;
      obj4.children = items4;
      obj3.children = tmp17(BottomSheet, obj4);
      return closure_13(AnalyticsLocationProvider, obj3);
    }
    tmp16Result = tmp16(NoResults, {});
  } else {
    return null;
  }
};
