// Module ID: 9330
// Function ID: 72906
// Name: DoubleTapReminderContent
// Dependencies: []
// Exports: maybeShowDoubleTapReminderToast

// Module 9330 (DoubleTapReminderContent)
function DoubleTapReminderContent(emoji) {
  let obj = { variant: "text-sm/normal", style: callback().toastText };
  const intl = arg1(dependencyMap[6]).intl;
  obj = {
    protipHook(children) {
      return callback2(callback(closure_2[5]).Text, { children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj.children = intl.format(arg1(dependencyMap[6]).t.C2tQIV, obj);
  return jsx(arg1(dependencyMap[5]).Text, obj);
}
importAll(dependencyMap[0]);
const ContentDismissActionType = arg1(dependencyMap[1]).ContentDismissActionType;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginRight: importDefault(dependencyMap[4]).space.PX_12, marginVertical: importDefault(dependencyMap[4]).space.PX_8 };
obj.toastText = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  const arg1 = emoji;
  let obj = arg1(dependencyMap[7]);
  if (!obj.UNSAFE_isDismissibleContentDismissed(arg1(dependencyMap[8]).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = arg1(dependencyMap[9]).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const disableDoubleTap = setting.disableDoubleTap;
    const result = arg1(dependencyMap[10]).disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !(null != disableDoubleTap && disableDoubleTap) && null != result;
    if (areEmojisEqualResult) {
      areEmojisEqualResult = arg1(dependencyMap[10]).areEmojisEqual(result, emoji);
      const obj3 = arg1(dependencyMap[10]);
    }
    if (areEmojisEqualResult) {
      obj = {
        key: "DOUBLE_TAP_TO_REACT_REMINDER",
        icon() {
              return callback(arg0(closure_2[12]).ToastEmoji, { emoji: arg0 });
            },
        content() {
              return callback(closure_6, { emoji: arg0 });
            },
        toastDurationMs: 4000
      };
      importDefault(dependencyMap[11]).open(obj);
      const obj4 = importDefault(dependencyMap[11]);
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = arg1(dependencyMap[7]).UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[8]).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const obj6 = arg1(dependencyMap[7]);
    }
    const obj2 = arg1(dependencyMap[10]);
    const tmp5 = null != disableDoubleTap && disableDoubleTap;
  }
};
