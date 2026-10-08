// Module ID: 12811
// Function ID: 12812
// Name: EmojiRow
// Dependencies: [19, 17, 6830, 21, 5090, 5054, 5055, 7872, 4719, 7167, 9371, 558, 576, 4778, 587, 12812, 12813, 9319, 12814, 6865, 2]

// Module 12811 (EmojiRow)
import react_native from "react-native" /* 17 */;
import ReactionUtils from "ReactionUtils" /* 4719 */;
import useToken from "useToken" /* 4778 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7872 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 9319 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 9371 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 12812 */;
import EmojiReactionRowButton2 from "EmojiReactionRowButton" /* 12813 */;
import DoubleTapEmojiEditNudge2 from "DoubleTapEmojiEditNudge" /* 12814 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let tmp3;
const MessageActionCreatorsDefault = tmp3(7167);
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiRow(message) {
  let items;
  let items1;
  let tmp13;
  let token;
  const tmp2 = token;
  let obj = message(token[12]);
  const cResult = obj.c(27);
  const tmp = message;
  message = message.message;
  const channel = message.channel;
  let obj2 = message(token[13]);
  token = obj2.useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj3 = message(token[13]);
  const token1 = obj3.useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj4 = message(token[13]);
  const token2 = obj4.useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const obj5 = message(token[13]);
  const token3 = obj5.useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  let obj6 = message(token[13]);
  const token4 = obj6.useToken(channel(token[14]).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const obj7 = message(token[15]);
  const emojisForReactionRow = obj7.useEmojisForReactionRow(channel, token2, token3 + token4);
  const tmp10 = closure_7();
  const tmp4 = channel;
  if (cResult[0] === token3) {
    if (cResult[1] === token1) {
      if (cResult[2] === token2) {
        if (cResult[3] === token) {
          if (cResult[4] === emojisForReactionRow) {
            if (cResult[5] === message) {
              tmp13 = cResult[6];
            }
            if (cResult[13] === channel) {
              let tmp16;
              if (cResult[14] === message.id) {
                tmp16 = cResult[15];
              }
              if (cResult[16] === token3) {
                let tmp17;
                if (cResult[17] === tmp16) {
                  tmp17 = cResult[18];
                }
                if (cResult[19] === tmp10.emojiRow) {
                  if (cResult[20] === tmp13) {
                    let tmp19;
                    let tmp23;
                    if (cResult[21] === tmp17) {
                      tmp19 = cResult[22];
                    }
                    class R {
                      constructor() {
                        const obj = reactions_ReactionUtils;
                        return obj.handleAddNewReactions(channel, message.id, ReactionActionCreators.ReactionLocations.MESSAGE);
                      }
                    }
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj8 = { location: tmp4(tmp2[19]).MESSAGE_LONG_PRESS_MENU };
                      class R {
                        constructor() {
                          const obj = reactions_ReactionUtils;
                          return obj.handleAddNewReactions(channel, message.id, ReactionActionCreators.ReactionLocations.MESSAGE);
                        }
                      }
                      const tmp26 = token3(tmp25, obj8);
                      cResult[23] = tmp26;
                      tmp23 = tmp26;
                    } else {
                      tmp23 = cResult[23];
                    }
                    if (cResult[24] === tmp10.emojiRowContainer) {
                      let tmp27;
                      if (cResult[25] === tmp19) {
                        tmp27 = cResult[26];
                      }
                      return tmp27;
                    }
                    const obj9 = { style: tmp11, children: items };
                    items = [tmp19, tmp23];
                    const tmp30 = closure_6(token1, obj9);
                    cResult[24] = tmp10.emojiRowContainer;
                    cResult[25] = tmp19;
                    cResult[26] = tmp30;
                    tmp27 = tmp30;
                  }
                }
                class R {
                  constructor() {
                    const obj = reactions_ReactionUtils;
                    return obj.handleAddNewReactions(channel, message.id, ReactionActionCreators.ReactionLocations.MESSAGE);
                  }
                }
                const obj10 = { style: tmp12, children: items1 };
                items1 = [tmp13, tmp17];
                const tmp21 = closure_6(token1, obj10);
                cResult[19] = tmp10.emojiRow;
                cResult[20] = tmp13;
                cResult[21] = tmp17;
                cResult[22] = tmp21;
                tmp19 = tmp21;
              }
              class R {
                constructor() {
                  const obj = reactions_ReactionUtils;
                  return obj.handleAddNewReactions(channel, message.id, ReactionActionCreators.ReactionLocations.MESSAGE);
                }
              }
              const obj11 = { emojiContainerSize: token3, onPress: tmp16 };
              const tmp18 = token3(tmp(tmp2[16]).EmojiPickerRowButton, obj11);
              cResult[16] = token3;
              cResult[17] = tmp16;
              cResult[18] = tmp18;
              tmp17 = tmp18;
            }
            class R {
              constructor() {
                const obj = reactions_ReactionUtils;
                return obj.handleAddNewReactions(channel, message.id, ReactionActionCreators.ReactionLocations.MESSAGE);
              }
            }
            cResult[13] = channel;
            cResult[14] = message.id;
            cResult[15] = R;
            tmp16 = R;
          }
        }
      }
    }
  }
  if (cResult[7] === token3) {
    if (cResult[8] === token1) {
      if (cResult[9] === token2) {
        if (cResult[10] === token) {
          let tmp14;
          if (cResult[11] === message) {
            tmp14 = cResult[12];
          }
          const mapped = emojisForReactionRow.map(tmp14);
          class R {
            constructor() {
              const obj = reactions_ReactionUtils;
              return obj.handleAddNewReactions(channel, message.id, ReactionActionCreators.ReactionLocations.MESSAGE);
            }
          }
          cResult[0] = token3;
          cResult[1] = token1;
          cResult[2] = token2;
          cResult[3] = token;
          cResult[4] = emojisForReactionRow;
          cResult[5] = message;
          cResult[6] = mapped;
          tmp13 = mapped;
        }
      }
    }
  }
  const fn = function c(emoji, index) {
    let closure_0 = emoji;
    let obj = {
      emoji,
      onPress() {
        let channel_id;
        let id;
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (null != emoji) {
          const obj2 = HapticUtils;
          const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const addReaction = ReactionActionCreators.addReaction;
          ({ channel_id, id } = message);
          ReactionActionCreators;
          const obj3 = ReactionUtils;
          addReaction(channel_id, id, obj3.toReactionEmoji(emoji));
          const obj4 = { channelId: null, messageId: null };
          ({ channel_id: obj5.channelId, id: obj5.messageId } = message);
          const tmp3Result = MessageActionCreatorsDefault;
          tmp3Result.focusMessage(obj4);
          const obj6 = DoubleTapReminderToast;
          const result1 = obj6.maybeShowDoubleTapReminderToast(tmp2);
        }
      },
      emojiSize: token,
      emojiFontSize: token1,
      emojiLineHeight: token2,
      emojiContainerSize: token3
    };
    const EmojiReactionRowButton = message(token[16]).EmojiReactionRowButton;
    let obj2 = message(token[16]);
    return token3(EmojiReactionRowButton, obj, obj2.getEmojiKey(emoji, index));
  };
  cResult[7] = token3;
  cResult[8] = token1;
  cResult[9] = token2;
  cResult[10] = token;
  cResult[11] = message;
  cResult[12] = fn;
  tmp14 = fn;
}) : (function EmojiRow(arg0) {
  let channel;
  let emojiSize;
  let items;
  let items1;
  let require;
  ({ message: require, channel } = arg0);
  let obj = useToken;
  dependencyMap = obj.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj2 = useToken;
  const emojiFontSize = obj2.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj3 = useToken;
  const emojiLineHeight = obj3.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  let obj4 = useToken;
  const token = obj4.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const obj5 = useToken;
  const token1 = obj5.useToken(channel(587).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  let obj6 = useEmojisForReactionRow;
  const emojisForReactionRow = obj6.useEmojisForReactionRow(channel, emojiLineHeight, token + token1);
  let tmp3 = closure_7();
  const obj7 = { style: tmp3.emojiRowContainer, children: items1 };
  const obj8 = { style: tmp3.emojiRow, children: items };
  items = [
    emojisForReactionRow.map((emoji, index) => {
      const require = emoji;
      let obj = {
        emoji,
        onPress() {
          let channel_id;
          let id;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (null != emoji) {
            const obj2 = HapticUtils;
            const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            const addReaction = ReactionActionCreators.addReaction;
            ({ channel_id, id } = _require);
            ReactionActionCreators;
            const obj3 = ReactionUtils;
            addReaction(channel_id, id, obj3.toReactionEmoji(emoji));
            const obj4 = { channelId: null, messageId: null };
            ({ channel_id: obj5.channelId, id: obj5.messageId } = _require);
            const tmp3Result = MessageActionCreatorsDefault;
            tmp3Result.focusMessage(obj4);
            const obj6 = DoubleTapReminderToast;
            const result1 = obj6.maybeShowDoubleTapReminderToast(tmp2);
          }
        },
        emojiSize,
        emojiFontSize,
        emojiLineHeight,
        emojiContainerSize: token
      };
      const EmojiReactionRowButton = require("EmojiReactionRowButton").EmojiReactionRowButton;
      let obj2 = require("EmojiReactionRowButton");
      return token(EmojiReactionRowButton, obj, obj2.getEmojiKey(emoji, index));
    }),

  ];
  const obj9 = {
    emojiContainerSize: token,
    onPress() {
      const obj = reactions_ReactionUtils;
      return obj.handleAddNewReactions(channel, _require.id, ReactionActionCreators.ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(EmojiReactionRowButton2.EmojiPickerRowButton, obj9);
  items1 = [closure_6(emojiFontSize, obj8), ];
  const obj10 = { location: channel(6865).MESSAGE_LONG_PRESS_MENU };
  const DoubleTapEmojiEditNudge = DoubleTapEmojiEditNudge2.DoubleTapEmojiEditNudge;
  items1[1] = token(DoubleTapEmojiEditNudge, obj10);
  return closure_6(emojiFontSize, obj7);
});
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default tmp4;
