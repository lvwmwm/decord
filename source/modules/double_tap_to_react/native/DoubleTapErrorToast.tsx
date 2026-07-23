// Module ID: 7659
// Function ID: 61260
// Name: DoubleTapErrorToastIcon
// Dependencies: [31, 27, 1852, 33, 4130, 689, 7660, 3831, 4126, 1212, 2]
// Exports: showDoubleTapErrorToast

// Module 7659 (DoubleTapErrorToastIcon)
import "result";
import { View } from "get ActivityIndicator";
import { EmojiDisabledReasons } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function DoubleTapErrorToastIcon() {
  let obj = { style: _createForOfIteratorHelperLoose().icon, "aria-hidden": true };
  obj = { color: importDefault(689).colors.WHITE, size: "xs" };
  obj.children = jsx(require(7660) /* XSmallBoldIcon */.XSmallBoldIcon, { color: importDefault(689).colors.WHITE, size: "xs" });
  return <View color={importDefault(689).colors.WHITE} size="xs" />;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: require("_createForOfIteratorHelperLoose").space.PX_4, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("set").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  let importDefault;
  let require;
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = importDefault(3831);
  obj = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return outer1_5(outer1_7, {});
    },
    content() {
      if (closure_1 === outer1_4.DISALLOW_EXTERNAL) {
        if (null != closure_0) {
          let obj = { variant: "text-sm/normal" };
          const intl3 = outer1_0(outer1_2[9]).intl;
          obj = { emojiName: closure_0 };
          obj.children = intl3.format(outer1_0(outer1_2[9]).t.Dz4vkv, obj);
          let tmp3Result = outer1_5(outer1_0(outer1_2[8]).Text, obj);
        }
        return tmp3Result;
      }
      obj = { variant: "text-sm/normal" };
      if (null != closure_0) {
        const intl2 = outer1_0(outer1_2[9]).intl;
        const obj1 = { emojiName: closure_0 };
        let formatResult = intl2.format(outer1_0(outer1_2[9]).t.WZGLFq, obj1);
      } else {
        const intl = outer1_0(outer1_2[9]).intl;
        formatResult = intl.string(outer1_0(outer1_2[9]).t.CL5mWi);
      }
      obj.children = formatResult;
      tmp3Result = outer1_5(outer1_0(outer1_2[8]).Text, obj);
    },
    toastDurationMs: 3000
  };
  obj.open(obj);
};
