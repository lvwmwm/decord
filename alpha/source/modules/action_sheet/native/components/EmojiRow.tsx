// Module ID: 12117
// Function ID: 12118
// Name: EmojiRow
// Dependencies: [19, 17, 5052, 21, 4823, 5037, 5039, 8370, 4767, 8162, 8980, 5387, 575, 12118, 12119, 10343, 12120, 7450, 2]
// Exports: default

// Module 12117 (EmojiRow)
import react_native from "react-native" /* 17 */;
import ReactionUtils from "ReactionUtils" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import HapticUtils from "HapticUtils" /* 5039 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5052 */;
import useToken from "useToken" /* 5387 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8370 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 8980 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 10343 */;
import useEmojisForReactionRow from "useEmojisForReactionRow" /* 12118 */;
import EmojiReactionRowButton2 from "EmojiReactionRowButton" /* 12119 */;
import DoubleTapEmojiEditNudge2 from "DoubleTapEmojiEditNudge" /* 12120 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let tmp3;
const MessageActionCreatorsDefault = tmp3(8162);
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
let result = size.fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  let channel;
  let emojiSize;
  let items;
  let items1;
  ({ message: require, channel } = arg0);
  let obj = useToken;
  dependencyMap = obj.useToken(channel(575).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj2 = useToken;
  const emojiFontSize = obj2.useToken(channel(575).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj3 = useToken;
  const emojiLineHeight = obj3.useToken(channel(575).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  let obj4 = useToken;
  const token = obj4.useToken(channel(575).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const obj5 = useToken;
  const token1 = obj5.useToken(channel(575).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  let obj6 = useEmojisForReactionRow;
  const emojisForReactionRow = obj6.useEmojisForReactionRow(channel, emojiLineHeight, token + token1);
  let tmp3 = closure_7();
  const obj7 = { style: tmp3.emojiRowContainer, children: items1 };
  const obj8 = { style: tmp3.emojiRow, children: items };
  items = [
    emojisForReactionRow.map((emoji, index) => {
      require = emoji;
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
            ({ channel_id, id } = require);
            ReactionActionCreators;
            const obj3 = ReactionUtils;
            addReaction(channel_id, id, obj3.toReactionEmoji(emoji));
            const obj4 = { channelId: null, messageId: null };
            ({ channel_id: obj5.channelId, id: obj5.messageId } = require);
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
      return obj.handleAddNewReactions(channel, require.id, ReactionActionCreators.ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(EmojiReactionRowButton2.EmojiPickerRowButton, obj9);
  items1 = [closure_6(emojiFontSize, obj8), ];
  const obj10 = { location: channel(7450).MESSAGE_LONG_PRESS_MENU };
  const DoubleTapEmojiEditNudge = DoubleTapEmojiEditNudge2.DoubleTapEmojiEditNudge;
  items1[1] = token(DoubleTapEmojiEditNudge, obj10);
  return closure_6(emojiFontSize, obj7);
};
