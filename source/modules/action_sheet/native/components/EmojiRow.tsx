// Module ID: 9936
// Function ID: 76871
// Name: EmojiRow
// Dependencies: []
// Exports: default

// Module 9936 (EmojiRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[2]).ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ emojiRowContainer: { top: null, bottom: "center", left: "flex-start" }, emojiRow: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/action_sheet/native/components/EmojiRow.tsx");

export default function EmojiRow(arg0) {
  let channel;
  ({ message: closure_0, channel } = arg0);
  const importDefault = channel;
  let obj = arg1(closure_2[11]);
  closure_2 = obj.useToken(importDefault(closure_2[12]).modules.mobile.EMOJI_ROW_EMOJI_SIZE);
  let obj1 = arg1(closure_2[11]);
  let closure_3 = obj1.useToken(importDefault(closure_2[12]).modules.mobile.EMOJI_ROW_EMOJI_FONT_SIZE);
  let obj2 = arg1(closure_2[11]);
  let closure_4 = obj2.useToken(importDefault(closure_2[12]).modules.mobile.EMOJI_ROW_EMOJI_LINE_HEIGHT);
  const token = arg1(closure_2[11]).useToken(importDefault(closure_2[12]).modules.mobile.EMOJI_ROW_EMOJI_CONTAINER_SIZE);
  const obj4 = arg1(closure_2[11]);
  const token1 = arg1(closure_2[11]).useToken(importDefault(closure_2[12]).modules.mobile.EMOJI_ROW_EMOJI_MIN_SPACING);
  const obj5 = arg1(closure_2[11]);
  const emojisForReactionRow = arg1(closure_2[13]).useEmojisForReactionRow(channel, closure_4, token + token1);
  const tmp3 = callback2();
  obj = { style: tmp3.emojiRowContainer };
  obj = { style: tmp3.emojiRow };
  const items = [
    emojisForReactionRow.map((emoji) => token(emoji(closure_2[14]).EmojiReactionRowButton, {
      emoji,
      onPress() {
        let channel_id;
        let id;
        let obj = callback(closure_2[5]);
        obj.hideActionSheet();
        if (null != arg0) {
          const result = arg0(closure_2[6]).triggerHapticFeedback(arg0(closure_2[6]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = arg0(closure_2[6]);
          ({ channel_id, id } = tmp);
          const obj3 = arg0(closure_2[7]);
          obj3.addReaction(channel_id, id, arg0(closure_2[8]).toReactionEmoji(tmp2));
          const obj4 = arg0(closure_2[8]);
          obj = {};
          ({ channel_id: obj6.channelId, id: obj6.messageId } = tmp);
          callback(closure_2[9]).focusMessage(obj);
          const obj5 = callback(closure_2[9]);
          const result1 = arg0(closure_2[10]).maybeShowDoubleTapReminderToast(tmp2);
          const obj7 = arg0(closure_2[10]);
        }
      },
      emojiSize: closure_2,
      emojiFontSize: closure_3,
      emojiLineHeight: closure_4,
      emojiContainerSize: token
    }, emoji(closure_2[14]).getEmojiKey(emoji, arg1))),

  ];
  obj1 = {
    emojiContainerSize: token,
    onPress() {
      return lib(closure_2[15]).handleAddNewReactions(channel, lib.id, lib(closure_2[7]).ReactionLocations.MESSAGE);
    }
  };
  items[1] = token(arg1(closure_2[14]).EmojiPickerRowButton, obj1);
  obj.children = items;
  const items1 = [callback(closure_3, obj), ];
  obj2 = { location: importDefault(closure_2[17]).MESSAGE_LONG_PRESS_MENU };
  items1[1] = token(arg1(closure_2[16]).DoubleTapEmojiEditNudge, obj2);
  obj.children = items1;
  return callback(closure_3, obj);
};
