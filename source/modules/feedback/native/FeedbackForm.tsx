// Module ID: 9538
// Function ID: 74239
// Name: FeedbackForm
// Dependencies: [57, 31, 9536, 33, 4130, 689, 8328, 22, 9539, 4559, 7636, 4126, 5167, 9540, 1212, 2]
// Exports: FeedbackForm

// Module 9538 (FeedbackForm)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { FeedbackRating } from "FeedbackRating";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { overflow: "hidden", marginBottom: 12, padding: 0 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose.reason = _createForOfIteratorHelperLoose;
let obj1 = { paddingHorizontal: 0, paddingVertical: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.doNotShowAgainContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("FeedbackRating").fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = function FeedbackForm(otherKey) {
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  ({ ratingsBodyLabel, reasons } = otherKey);
  otherKey = otherKey.otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const trackOpen = otherKey.trackOpen;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  let tmp2 = otherKey(onFeedbackChanged[6])(reasons);
  const FeedbackRating = tmp2;
  let obj = otherKey(onFeedbackChanged[7]);
  const tmp3 = trackOpen(React.useState(obj.shuffle(reasons)), 2);
  const first = tmp3[0];
  let callback = tmp3[1];
  let items = [reasons, tmp2, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(closure_5, reasons)) {
      callback(reasons(onFeedbackChanged[8]).shuffleProblems(reasons, otherKey));
      const obj2 = reasons(onFeedbackChanged[8]);
    }
  }, items);
  const tmp5 = trackOpen(React.useState({}), 2);
  const first1 = tmp5[0];
  _createForOfIteratorHelperLoose = tmp5[1];
  otherKey(onFeedbackChanged[9])(() => {
    trackOpen();
  });
  const items1 = [first1, onFeedbackChanged];
  callback = React.useCallback(() => {
    const doNotShowAgain = first1.doNotShowAgain;
    const obj = {};
    const merged = Object.assign(first1);
    obj["doNotShowAgain"] = !(null != doNotShowAgain && doNotShowAgain);
    callback2(obj);
    onFeedbackChanged(first1);
  }, items1);
  const found = first.filter((label) => label.label);
  let tmp11 = null;
  if (null != first1.rating) {
    tmp11 = null;
    if (first1.rating !== FeedbackRating.GOOD) {
      obj = {};
      obj = { style: tmp.reasonsHeader, variant: "eyebrow", color: "text-default", children: reasonsHeaderLabel };
      const items2 = [callback(reasons(onFeedbackChanged[11]).Text, obj), ];
      const obj1 = { border: "subtle", style: tmp.reasonsList, children: tmp10 };
      items2[1] = callback(reasons(onFeedbackChanged[12]).Card, obj1);
      obj.children = items2;
      tmp11 = first1(React.Fragment, obj);
    }
  }
  let obj2 = {};
  let tmp14 = null;
  if (null != ratingsBodyLabel) {
    const obj3 = { style: tmp.ratingsLabel, variant: "heading-md/semibold", color: "text-default", children: ratingsBodyLabel };
    tmp14 = callback(reasons(onFeedbackChanged[11]).Text, obj3);
  }
  const items3 = [tmp14, , , ];
  const obj4 = {};
  const rating = first1.rating;
  let tmp20 = null;
  if (null != rating) {
    tmp20 = rating;
  }
  obj4.selectedRating = tmp20;
  obj4.onChangeRating = function onChangeRating(arg0) {
    let reason = null;
    if (arg0 !== tmp2.GOOD) {
      reason = first1.reason;
      tmp2 = first1;
    }
    const obj = {};
    const merged = Object.assign(first1);
    obj["rating"] = arg0;
    obj["reason"] = reason;
    callback2(obj);
    onFeedbackChanged(obj);
  };
  items3[1] = callback(otherKey(onFeedbackChanged[13]), obj4);
  items3[2] = tmp11;
  let tmp22Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj5 = { style: tmp.doNotShowAgainContainer };
    const obj6 = {};
    let doNotShowAgain = first1.doNotShowAgain;
    let tmp25 = null != doNotShowAgain;
    if (tmp25) {
      tmp25 = doNotShowAgain;
    }
    obj6.selected = tmp25;
    obj5.leading = callback(reasons(onFeedbackChanged[10]).FormRow.Checkbox, obj6);
    const obj7 = {};
    const intl = reasons(onFeedbackChanged[14]).intl;
    obj7.text = intl.string(reasons(onFeedbackChanged[14]).t["5E9SB9"]);
    obj5.label = callback(reasons(onFeedbackChanged[10]).FormRow.Label, obj7);
    obj5.onPress = callback;
    tmp22Result = tmp22(reasons(onFeedbackChanged[10]).FormRow, obj5);
  }
  items3[3] = tmp22Result;
  obj2.children = items3;
  return first1(React.Fragment, obj2);
};
