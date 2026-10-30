// Module ID: 12737
// Function ID: 12738
// Name: ConjureRatingFeedbackSheet
// Dependencies: [19, 17, 21, 5009, 575, 8733, 12736, 1114, 3865, 7360, 7315, 7247, 5629, 1889, 2]
// Exports: default

// Module 12737 (ConjureRatingFeedbackSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1889 */;
import _modDef3865 from "module_3865" /* 3865 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureRatingFeedbackSheet.tsx");

export default function ConjureRatingFeedbackSheet(rating) {
  let _undefined;
  let _undefined2;
  let bottomSheetRef;
  let c0;
  let c1;
  let canSend;
  let intl2;
  let intl3;
  let items;
  let obj4;
  let setText;
  let text;
  _require = undefined;
  importDefault = undefined;
  rating = rating.rating;
  const tmp = closure_6();
  let obj = require("react");
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetClose: c0, bottomSheetRef } = bottomSheetRef1);
  const obj2 = require("conjurePublishRatings");
  const conjureRatingFeedback = obj2.useConjureRatingFeedback(rating);
  ({ send: c1, text, setText, canSend } = conjureRatingFeedback);
  const intl = require("intl").intl;
  const stringResult = intl.string(_modDef3865.IqkF07);
  const obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }), children: closure_5(View, obj4) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj4 = { style: tmp.content, children: items };
  const obj5 = { accessibilityLabel: stringResult, placeholder: intl2.string(_modDef3865.HMGKAV), maxLength: require("conjurePublishRatings").CONJURE_RATING_FEEDBACK_MAX_LENGTH, value: text, onChange: setText };
  const TextArea = require("TextArea").TextArea;
  intl2 = require("intl").intl;
  items = [closure_4(TextArea, obj5), ];
  const obj6 = {
    variant: "primary",
    text: intl3.string(_modDef3865["sr+mUC"]),
    disabled: !canSend,
    onPress: function handleSend() {
      _undefined2();
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
      _undefined();
    }
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items[1] = closure_4(Button, obj6);
  return closure_4(ActionSheet, obj3);
};
export const CONJURE_RATING_FEEDBACK_SHEET_KEY = "ConjureRatingFeedbackSheet";
