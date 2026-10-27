// Module ID: 12477
// Function ID: 12478
// Name: ConjureRatingFeedbackSheet
// Dependencies: [19, 17, 21, 4971, 587, 558, 576, 8659, 12476, 1128, 3830, 1896, 7248, 7180, 5244, 7298, 2]

// Module 12477 (ConjureRatingFeedbackSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1896 */;
import _modDef3830 from "module_3830" /* 3830 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRatingFeedbackSheet(rating) {
  let bottomSheetClose;
  let bottomSheetRef;
  let first;
  let items;
  let send;
  let setText;
  let text;
  let obj = bottomSheetClose(576);
  const cResult = obj.c(20);
  rating = rating.rating;
  const tmp4 = closure_6();
  const obj2 = bottomSheetClose(8659);
  const bottomSheetRef1 = obj2.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj3 = bottomSheetClose(12476);
  const conjureRatingFeedback = obj3.useConjureRatingFeedback(rating);
  ({ text, setText, send } = conjureRatingFeedback);
  const canSend = conjureRatingFeedback.canSend;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(send(3830).IqkF07);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === bottomSheetClose) {
    let tmp10;
    let tmp11;
    let tmp14;
    if (cResult[2] === send) {
      tmp10 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { title: first };
      const tmp13 = closure_4(bottomSheetClose(7248).BottomSheetTitleHeader, obj4);
      cResult[4] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    const _Symbol2 = Symbol;
    const content = tmp4.content;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(send(3830).HMGKAV);
      cResult[5] = stringResult1;
      tmp14 = stringResult1;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === setText) {
      let tmp17;
      let tmp20;
      if (cResult[7] === text) {
        tmp17 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1128).intl;
        const stringResult2 = intl3.string(send(3830)["sr+mUC"]);
        cResult[9] = stringResult2;
        tmp20 = stringResult2;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        let tmp24;
        if (cResult[11] === !canSend) {
          tmp24 = cResult[12];
        }
        if (cResult[13] === tmp4.content) {
          if (cResult[14] === tmp17) {
            let tmp27;
            if (cResult[15] === tmp24) {
              tmp27 = cResult[16];
            }
            if (cResult[17] === bottomSheetRef) {
              let tmp31;
              if (cResult[18] === tmp27) {
                tmp31 = cResult[19];
              }
              return tmp31;
            }
            const obj5 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp11, children: tmp27 };
            const tmp33 = closure_4(bottomSheetClose(7298).ActionSheet, obj5);
            cResult[17] = bottomSheetRef;
            cResult[18] = tmp27;
            cResult[19] = tmp33;
            tmp31 = tmp33;
          }
        }
        const obj6 = { style: content, children: items };
        items = [tmp17, tmp24];
        const tmp30 = closure_5(View, obj6);
        cResult[13] = tmp4.content;
        cResult[14] = tmp17;
        cResult[15] = tmp24;
        cResult[16] = tmp30;
        tmp27 = tmp30;
      }
      const obj7 = { variant: "primary", text: tmp20, disabled: !canSend, onPress: tmp10 };
      const tmp26 = closure_4(bottomSheetClose(5244).Button, obj7);
      cResult[10] = tmp10;
      cResult[11] = !canSend;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    }
    const obj8 = { accessibilityLabel: first, placeholder: tmp14, maxLength: bottomSheetClose(12476).CONJURE_RATING_FEEDBACK_MAX_LENGTH, value: text, onChange: setText };
    const TextArea = tmp(7180).TextArea;
    const tmp19 = closure_4(TextArea, obj8);
    cResult[6] = setText;
    cResult[7] = text;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  }
  function handleSend() {
    send();
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    bottomSheetClose();
  }
  cResult[1] = bottomSheetClose;
  cResult[2] = send;
  cResult[3] = handleSend;
  tmp10 = handleSend;
}) : (function ConjureRatingFeedbackSheet(rating) {
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
  let obj = require("useBottomSheetRef");
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetClose: c0, bottomSheetRef } = bottomSheetRef1);
  const obj2 = require("conjurePublishRatings");
  const conjureRatingFeedback = obj2.useConjureRatingFeedback(rating);
  ({ send: c1, text, setText, canSend } = conjureRatingFeedback);
  const intl = require("intl").intl;
  const stringResult = intl.string(_modDef3830.IqkF07);
  const obj3 = { ref: bottomSheetRef, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }), children: closure_5(View, obj4) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj4 = { style: tmp.content, children: items };
  const obj5 = { accessibilityLabel: stringResult, placeholder: intl2.string(_modDef3830.HMGKAV), maxLength: require("conjurePublishRatings").CONJURE_RATING_FEEDBACK_MAX_LENGTH, value: text, onChange: setText };
  const TextArea = require("TextArea").TextArea;
  intl2 = require("intl").intl;
  items = [closure_4(TextArea, obj5), ];
  const obj6 = {
    variant: "primary",
    text: intl3.string(_modDef3830["sr+mUC"]),
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
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureRatingFeedbackSheet.tsx");

export default tmp4;
export const CONJURE_RATING_FEEDBACK_SHEET_KEY = "ConjureRatingFeedbackSheet";
