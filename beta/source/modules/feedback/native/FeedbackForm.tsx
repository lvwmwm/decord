// Module ID: 11123
// Function ID: 11124
// Name: FeedbackForm
// Dependencies: [32, 19, 11121, 21, 4836, 576, 7720, 12, 11124, 5298, 8053, 4832, 5919, 11125, 1115, 2]
// Exports: FeedbackForm

// Module 11123 (FeedbackForm)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 11121 */;
import FeedbackUtils from "FeedbackUtils" /* 11124 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
let FeedbackRating = Constants.FeedbackRating;
let Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 }, reason: obj2, doNotShowAgainContainer: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = function FeedbackForm(otherKey) {
  let Checkbox;
  let Label;
  let _undefined;
  let arr;
  let c6;
  let closure_5;
  let intl;
  let items2;
  let obj8;
  let obj9;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  ({ ratingsBodyLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  c6 = undefined;
  closure_8 = undefined;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  let tmp = closure_8();
  react = tmp;
  const tmp3 = onFeedbackChanged;
  let tmp2 = otherKey;
  const tmp4 = otherKey(onFeedbackChanged[6])(reasons);
  FeedbackRating = tmp4;
  const useState = react.useState;
  let obj = otherKey(onFeedbackChanged[7]);
  [arr, c6] = trackOpen(useState(obj.shuffle(reasons)), 2);
  let items = [reasons, tmp4, otherKey];
  const tmp6 = trackOpen(useState(obj.shuffle(reasons)), 2);
  const effect = react.useEffect(() => {
    const obj = _modDef12;
    const tmp2 = reasons;
    if (!obj.isEqual(closure_5, reasons)) {
      const obj2 = FeedbackUtils;
      _undefined(obj2.shuffleProblems(tmp2, otherKey));
    }
  }, items);
  const tmp8 = trackOpen(react.useState({}), 2);
  const first = tmp8[0];
  closure_8 = tmp8[1];
  otherKey(onFeedbackChanged[9])(() => {
    trackOpen();
  });
  const items1 = [first, onFeedbackChanged];
  const callback = react.useCallback(() => {
    let flag = first.doNotShowAgain;
    if (flag == null) {
      flag = false;
    }
    const obj = { doNotShowAgain: !flag };
    const merged = Object.assign(tmp);
    closure_8(obj);
    onFeedbackChanged(first);
  }, items1);
  const found = arr.filter((label) => Boolean(label.label));
  let tmp14 = null;
  if (null != first.rating) {
    tmp14 = null;
    if (first.rating !== FeedbackRating.GOOD) {
      let obj2 = { children: items2 };
      const Fragment2 = tmp5.Fragment;
      let obj3 = { style: tmp.reasonsHeader, variant: "eyebrow", color: "text-default", children: reasonsHeaderLabel };
      items2 = [c6(reasons(tmp3[11]).Text, obj3), ];
      const obj4 = { border: "subtle", style: tmp.reasonsList, children: tmp13 };
      items2[1] = c6(reasons(tmp3[12]).Card, obj4);
      tmp14 = first(Fragment2, obj2);
    }
  }
  let tmp17 = null;
  let Fragment = tmp5.Fragment;
  const tmp16 = first;
  if (null != ratingsBodyLabel) {
    const obj5 = { style: tmp.ratingsLabel, variant: "heading-md/semibold", color: "text-default", children: ratingsBodyLabel };
    tmp17 = c6(reasons(tmp3[11]).Text, obj5);
  }
  const children = [tmp17, , , ];
  let rating = first.rating;
  const tmp2Result = tmp2(tmp3[13]);
  if (rating == null) {
    rating = null;
  }
  const obj6 = {
    selectedRating: rating,
    onChangeRating(rating) {
      let reason = null;
      if (rating !== FeedbackRating.GOOD) {
        reason = first.reason;
      }
      const obj = { rating, reason };
      const merged = Object.assign(first);
      closure_8(obj);
      onFeedbackChanged(obj);
    }
  };
  children[1] = c6(tmp2Result, obj6);
  children[2] = tmp14;
  let tmp20Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj7 = { style: tmp.doNotShowAgainContainer, leading: c6(Checkbox, obj8), label: c6(Label, obj9), onPress: callback };
    let FormRow = reasons(tmp3[10]).FormRow;
    let flag = first.doNotShowAgain;
    Checkbox = reasons(tmp3[10]).FormRow.Checkbox;
    if (flag == null) {
      flag = false;
    }
    obj8 = { selected: flag };
    obj9 = { text: intl.string(reasons(tmp3[14]).t["5E9SB9"]) };
    Label = tmp24(tmp3[10]).FormRow.Label;
    intl = tmp24(tmp3[14]).intl;
    tmp20Result = tmp20(FormRow, obj7);
  }
  children[3] = tmp20Result;
  return tmp16(Fragment, { children });
};
