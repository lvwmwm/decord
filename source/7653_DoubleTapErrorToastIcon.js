// Module ID: 7653
// Function ID: 61206
// Name: DoubleTapErrorToastIcon
// Dependencies: []
// Exports: showDoubleTapErrorToast

// Module 7653 (DoubleTapErrorToastIcon)
function DoubleTapErrorToastIcon() {
  let obj = { style: callback().icon, aria-hidden: true };
  obj = { color: importDefault(dependencyMap[5]).colors.WHITE, size: "xs" };
  obj.children = jsx(arg1(dependencyMap[6]).XSmallBoldIcon, obj);
  return <View {...obj} />;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const EmojiDisabledReasons = arg1(dependencyMap[2]).EmojiDisabledReasons;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[5]).radii.round, padding: importDefault(dependencyMap[5]).space.PX_4, marginLeft: importDefault(dependencyMap[5]).space.PX_4 };
obj.icon = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: closure_0, reason: closure_1 } = arg0);
  let obj = importDefault(dependencyMap[7]);
  obj = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return callback2(closure_7, {});
    },
    content() {
      if (closure_1 === constants.DISALLOW_EXTERNAL) {
        if (null != callback) {
          let obj = { variant: "text-sm/normal" };
          const intl3 = callback(closure_2[9]).intl;
          obj = { emojiName: callback };
          obj.children = intl3.format(callback(closure_2[9]).t.Dz4vkv, obj);
          let tmp3Result = callback2(callback(closure_2[8]).Text, obj);
        }
        return tmp3Result;
      }
      obj = { variant: "text-sm/normal" };
      if (null != callback) {
        const intl2 = callback(closure_2[9]).intl;
        const obj1 = { emojiName: callback };
        let formatResult = intl2.format(callback(closure_2[9]).t.WZGLFq, obj1);
      } else {
        const intl = callback(closure_2[9]).intl;
        formatResult = intl.string(callback(closure_2[9]).t.CL5mWi);
      }
      obj.children = formatResult;
      tmp3Result = callback2(callback(closure_2[8]).Text, obj);
    },
    toastDurationMs: 3000
  };
  obj.open(obj);
};
