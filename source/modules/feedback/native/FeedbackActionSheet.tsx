// Module ID: 9508
// Function ID: 74019
// Name: closeActionSheet
// Dependencies: []
// Exports: default

// Module 9508 (closeActionSheet)
function closeActionSheet() {
  importDefault(dependencyMap[7]).hideActionSheet();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const FeedbackRating = arg1(dependencyMap[3]).FeedbackRating;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
obj.ratingsHeader = { textAlign: "center" };
const tmp2 = arg1(dependencyMap[4]);
obj.reasonsList = { marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
let closure_9 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  let headerLabel;
  let hideDontShowAgainCheckbox;
  let ratingOptions;
  let ratingTextLabels;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showHeaderCloseButton;
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  const arg1 = reasons;
  feedbackReasons = feedbackReasons.feedbackReasons;
  const importDefault = feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  const dependencyMap = otherKey;
  ({ trackOpen: closure_3, trackReport: closure_4, getFreeformDescription: closure_5 } = feedbackReasons);
  ({ headerLabel, showHeaderCloseButton, ratingOptions, ratingTextLabels, reasonsHeaderLabel } = feedbackReasons);
  const tmp = callback2();
  const ref = React.useRef(null);
  const FeedbackRating = ref;
  const tmp3 = importDefault(dependencyMap[8])(reasons);
  let obj = importDefault(dependencyMap[9]);
  const tmp4 = callback(React.useState(obj.shuffle(reasons)), 2);
  const first = tmp4[0];
  let closure_8 = tmp4[1];
  const items = [reasons, tmp3, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(tmp3, reasons)) {
      callback4(reasons(otherKey[10]).shuffleProblems(reasons, otherKey));
      const obj2 = reasons(otherKey[10]);
      const tmp3 = otherKey;
    }
  }, items);
  const tmp6 = callback(React.useState(null), 2);
  const first1 = tmp6[0];
  const callback2 = first1;
  let closure_10 = tmp6[1];
  [closure_11, closure_12] = callback(React.useState(null), 2);
  const tmp8 = callback(React.useState(null), 2);
  [closure_13, closure_14] = callback(React.useState(false), 2);
  const tmp10 = callback(React.useState(false), 2);
  const first2 = tmp10[0];
  let closure_16 = tmp10[1];
  importDefault(dependencyMap[11])(() => {
    callback();
  });
  let obj1 = arg1(dependencyMap[11]);
  const unmountEffect = obj1.useUnmountEffect(() => {
    if (closure_13) {
      let obj = {};
      obj = { rating: first1, reason: closure_11, dontShowAgain: first2 };
      obj.result = obj;
      obj.trackReport = callback2;
      let tmp16;
      const obj2 = feedbackReasons(otherKey[12]);
      if (null != callback3) {
        tmp16 = callback3(closure_11);
      }
      let tmp19;
      if (null != tmp16) {
        tmp19 = tmp16;
      }
      obj.descriptionLabel = tmp19;
      obj2.pushLazy(reasons(otherKey[14])(otherKey[13], otherKey.paths), obj);
      const tmp9 = reasons(otherKey[14])(otherKey[13], otherKey.paths);
    } else {
      obj = { rating: first1, reason: closure_11, dontShowAgain: first2 };
      callback2(obj);
    }
  });
  const items1 = [feedbackReasons];
  const callback = React.useCallback((arg0) => {
    callback5(arg0);
    if (arg0 === ref.GOOD) {
      callback6(null);
      callback7(false);
      callback5();
    } else {
      const current = ref.current;
      if (null != current) {
        current.expandActionSheet();
      }
    }
  }, []);
  let closure_17 = React.useCallback((value) => {
    callback6(value);
    let hasItem = null != feedbackReasons;
    if (hasItem) {
      hasItem = feedbackReasons.includes(value.value);
    }
    if (hasItem) {
      callback7(true);
    }
    callback5();
  }, items1);
  let tmp15 = null !== first1;
  if (tmp15) {
    tmp15 = first1 !== FeedbackRating.GOOD;
  }
  const bottom = importDefault(dependencyMap[15])().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  obj = { scrollable: true, ref, startHeight: sum };
  let tmp19;
  if (null == first1) {
    tmp19 = sum;
  }
  obj.maxHeight = tmp19;
  obj = { title: headerLabel };
  let tmp21 = null;
  if (showHeaderCloseButton) {
    obj1 = { onPress: closure_10 };
    tmp21 = tmp3(arg1(dependencyMap[18]).ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp21;
  obj.header = tmp3(arg1(dependencyMap[17]).BottomSheetTitleHeader, obj);
  const obj2 = { contentContainerStyle: items2 };
  const items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  let tmp27 = null;
  if (null != ratingsBodyLabel) {
    const obj3 = { style: tmp.ratingsHeader, children: ratingsBodyLabel };
    tmp27 = tmp3(arg1(dependencyMap[20]).Text, obj3);
  }
  const items3 = [tmp27, tmp3(importDefault(dependencyMap[21]), { ratingOptions, textLabels: ratingTextLabels, selectedRating: first1, onChangeRating: callback }), , ];
  let tmp31 = null;
  if (tmp15) {
    const obj4 = { style: tmp.reasonsList };
    const obj5 = {
      title: reasonsHeaderLabel,
      hasIcons: false,
      children: first.map((label) => {
          const reasons = label;
          let tmp;
          if (null != label.label) {
            const obj = {
              label: label.label,
              labelLineClamp: 2,
              onPress() {
                  return callback(arg0);
                }
            };
            tmp = tmp3(reasons(otherKey[23]).TableRow, obj, arg1);
          }
          return tmp;
        })
    };
    obj4.children = tmp3(arg1(dependencyMap[22]).TableRowGroup, obj5);
    tmp31 = tmp3(View, obj4);
  }
  items3[2] = tmp31;
  let tmp36 = null;
  if (!hideDontShowAgainCheckbox) {
    const obj6 = { 1726238916: null, 607091733: null, checked: first2 };
    const intl = arg1(dependencyMap[25]).intl;
    obj6.label = intl.string(arg1(dependencyMap[25]).t.5E9SB9);
    obj6.onPress = function onPress() {
      return callback8(!first2);
    };
    tmp36 = tmp3(arg1(dependencyMap[24]).TableCheckboxRow, obj6);
  }
  items3[3] = tmp36;
  obj2.children = items3;
  obj.children = closure_8(arg1(dependencyMap[19]).BottomSheetScrollView, obj2);
  return tmp3(arg1(dependencyMap[16]).BottomSheet, obj);
};
