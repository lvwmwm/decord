// Module ID: 9494
// Function ID: 73965
// Name: FeedbackForm
// Dependencies: []
// Exports: FeedbackForm

// Module 9494 (FeedbackForm)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const FeedbackRating = arg1(dependencyMap[2]).FeedbackRating;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { ratingsLabel: { textAlign: "center" }, reasonsHeader: { marginBottom: 8 }, reasonsList: { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true } };
obj = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.reason = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.doNotShowAgainContainer = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/feedback/native/FeedbackForm.tsx");

export const FeedbackForm = function FeedbackForm(otherKey) {
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showDoNotShowAgainCheckbox;
  ({ ratingsBodyLabel, reasons } = otherKey);
  const arg1 = reasons;
  otherKey = otherKey.otherKey;
  const importDefault = otherKey;
  const onFeedbackChanged = otherKey.onFeedbackChanged;
  const dependencyMap = onFeedbackChanged;
  let callback = otherKey.trackOpen;
  ({ showDoNotShowAgainCheckbox, reasonsHeaderLabel } = otherKey);
  const tmp = callback3();
  const React = tmp;
  const tmp2 = importDefault(dependencyMap[6])(reasons);
  const FeedbackRating = tmp2;
  let obj = importDefault(dependencyMap[7]);
  const tmp3 = callback(React.useState(obj.shuffle(reasons)), 2);
  const first = tmp3[0];
  const callback2 = tmp3[1];
  const items = [reasons, tmp2, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(tmp2, reasons)) {
      callback(reasons(onFeedbackChanged[8]).shuffleProblems(reasons, otherKey));
      const obj2 = reasons(onFeedbackChanged[8]);
      const tmp2 = reasons;
    }
  }, items);
  const tmp5 = callback(React.useState({}), 2);
  const first1 = tmp5[0];
  const callback3 = tmp5[1];
  importDefault(dependencyMap[9])(() => {
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
      obj = { style: tmp.reasonsHeader, children: reasonsHeaderLabel };
      const items2 = [callback2(arg1(dependencyMap[11]).Text, obj), ];
      const obj1 = { border: "subtle", style: tmp.reasonsList, children: tmp10 };
      items2[1] = callback2(arg1(dependencyMap[12]).Card, obj1);
      obj.children = items2;
      tmp11 = first1(React.Fragment, obj);
    }
  }
  const obj2 = {};
  let tmp14 = null;
  if (null != ratingsBodyLabel) {
    const obj3 = { style: tmp.ratingsLabel, children: ratingsBodyLabel };
    tmp14 = callback2(arg1(dependencyMap[11]).Text, obj3);
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
      const tmp2 = first1;
    }
    const obj = {};
    const merged = Object.assign(first1);
    obj["rating"] = arg0;
    obj["reason"] = reason;
    callback2(obj);
    onFeedbackChanged(obj);
  };
  items3[1] = callback2(importDefault(dependencyMap[13]), obj4);
  items3[2] = tmp11;
  let tmp22Result = null;
  if (showDoNotShowAgainCheckbox) {
    const obj5 = { style: tmp.doNotShowAgainContainer };
    const obj6 = {};
    const doNotShowAgain = first1.doNotShowAgain;
    let tmp25 = null != doNotShowAgain;
    if (tmp25) {
      tmp25 = doNotShowAgain;
    }
    obj6.selected = tmp25;
    obj5.leading = callback2(arg1(dependencyMap[10]).FormRow.Checkbox, obj6);
    const obj7 = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj7.text = intl.string(arg1(dependencyMap[14]).t.5E9SB9);
    obj5.label = callback2(arg1(dependencyMap[10]).FormRow.Label, obj7);
    obj5.onPress = callback;
    tmp22Result = tmp22(arg1(dependencyMap[10]).FormRow, obj5);
  }
  items3[3] = tmp22Result;
  obj2.children = items3;
  return first1(React.Fragment, obj2);
};
