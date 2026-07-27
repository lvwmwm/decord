// Module ID: 9905
// Function ID: 76734
// Name: EmojiRow
// Dependencies: [31, 27, 5188, 33, 4131, 4099, 4100, 6022, 3770, 5685, 9280, 3835, 689, 9906, 9907, 9244, 9908, 5482, 2]
// Exports: default

// Module 9905 (EmojiRow)
import "result";
import { View } from "get ActivityIndicator";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ emojiRowContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, emojiRow: { height: 52, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 0, marginBottom: 0 } });
let result = require("ACTION_SHEET_START_HEIGHT_RATIO").fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  let channel;
  let require;
  ({ message: require, channel } = arg0);
  let obj = require(3835) /* map */;
  const dependencyMap = obj.useToken(channel(689).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj1 = require(3835) /* map */;
  let closure_3 = obj1.useToken(channel(689).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj2 = require(3835) /* map */;
  let closure_4 = obj2.useToken(channel(689).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = require(3835) /* map */.useToken(channel(689).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  let obj4 = require(3835) /* map */;
  const token1 = require(3835) /* map */.useToken(channel(689).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  let obj5 = require(3835) /* map */;
  const emojisForReactionRow = require(9906) /* useEmojisForReactionRow */.useEmojisForReactionRow(channel, closure_4, token + token1);
  const tmp3 = callback2();
  obj = { style: tmp3.emojiRowContainer };
  obj = { style: tmp3.emojiRow };
  const items = [
    emojisForReactionRow.map((emoji) => {
      let closure_0 = emoji;
      return token(outer1_0(9907).EmojiReactionRowButton, {
        emoji,
        onPress() {
          let channel_id;
          let id;
          let obj = channel(4099);
          obj.hideActionSheet();
          if (null != closure_0) {
            const result = outer2_0(4100).triggerHapticFeedback(outer2_0(4100).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = outer2_0(4100);
            ({ channel_id, id } = tmp);
            const obj3 = outer2_0(6022);
            obj3.addReaction(channel_id, id, outer2_0(3770).toReactionEmoji(tmp2));
            const obj4 = outer2_0(3770);
            obj = {};
            ({ channel_id: obj6.channelId, id: obj6.messageId } = tmp);
            channel(5685).focusMessage(obj);
            const obj5 = channel(5685);
            const result1 = outer2_0(9280).maybeShowDoubleTapReminderToast(tmp2);
            const obj7 = outer2_0(9280);
          }
        },
        emojiSize: dependencyMap,
        emojiFontSize: closure_3,
        emojiLineHeight: closure_4,
        emojiContainerSize: token
      }, outer1_0(9907).getEmojiKey(emoji, arg1));
    }),

  ];
  obj1 = {
    emojiContainerSize: token,
    onPress() {
      return outer1_0(9244).handleAddNewReactions(channel, id.id, outer1_0(6022).ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(require(9907) /* EmojiPickerRowButton */.EmojiPickerRowButton, obj1);
  obj.children = items;
  const items1 = [callback(closure_3, obj), ];
  obj2 = { location: channel(5482).MESSAGE_LONG_PRESS_MENU };
  items1[1] = token(require(9908) /* DoubleTapEmojiEditNudgeInner */.DoubleTapEmojiEditNudge, obj2);
  obj.children = items1;
  return callback(closure_3, obj);
};
