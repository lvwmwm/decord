// Module ID: 9557
// Function ID: 74309
// Name: closeActionSheet
// Dependencies: [57, 31, 27, 9536, 33, 4130, 689, 4098, 8328, 22, 9539, 4559, 4337, 9558, 1934, 1557, 5187, 5186, 5499, 5189, 4126, 9540, 5501, 5165, 9132, 1212, 2]
// Exports: default

// Module 9557 (closeActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { FeedbackRating } from "FeedbackRating";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function closeActionSheet() {
  importDefault(4098).hideActionSheet();
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.ratingsHeader = { textAlign: "center" };
_createForOfIteratorHelperLoose.reasonsList = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/feedback/native/FeedbackActionSheet.tsx");

export default function FeedbackActionSheet(feedbackReasons) {
  let View;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let _slicedToArray;
  let result;
  let headerLabel;
  let hideDontShowAgainCheckbox;
  let ratingOptions;
  let ratingTextLabels;
  let ratingsBodyLabel;
  let reasons;
  let reasonsHeaderLabel;
  let showHeaderCloseButton;
  ({ hideDontShowAgainCheckbox, ratingsBodyLabel, reasons } = feedbackReasons);
  feedbackReasons = feedbackReasons.feedbackReasons;
  const otherKey = feedbackReasons.otherKey;
  ({ trackOpen: _slicedToArray, trackReport: result, getFreeformDescription: View } = feedbackReasons);
  ({ headerLabel, showHeaderCloseButton, ratingOptions, ratingTextLabels, reasonsHeaderLabel } = feedbackReasons);
  let tmp = first1();
  const ref = React.useRef(null);
  const tmp3 = feedbackReasons(otherKey[8])(reasons);
  const callback2 = tmp3;
  let obj = feedbackReasons(otherKey[9]);
  const tmp4 = callback(React.useState(obj.shuffle(reasons)), 2);
  const first = tmp4[0];
  let closure_8 = tmp4[1];
  const items = [reasons, tmp3, otherKey];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(closure_7, reasons)) {
      callback4(reasons(otherKey[10]).shuffleProblems(reasons, otherKey));
      const obj2 = reasons(otherKey[10]);
    }
  }, items);
  const tmp6 = callback(React.useState(null), 2);
  first1 = tmp6[0];
  let closure_10 = tmp6[1];
  [closure_11, closure_12] = callback(React.useState(null), 2);
  const tmp8 = callback(React.useState(null), 2);
  [closure_13, closure_14] = callback(React.useState(false), 2);
  const tmp10 = callback(React.useState(false), 2);
  const first2 = tmp10[0];
  let closure_16 = tmp10[1];
  feedbackReasons(otherKey[11])(() => {
    callback();
  });
  let obj1 = reasons(otherKey[11]);
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
  callback = React.useCallback((arg0) => {
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
    tmp15 = first1 !== ref.GOOD;
  }
  const bottom = feedbackReasons(otherKey[15])().bottom;
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
    tmp21 = callback2(reasons(otherKey[18]).ActionSheetCloseButton, obj1);
  }
  obj.trailing = tmp21;
  obj.header = callback2(reasons(otherKey[17]).BottomSheetTitleHeader, obj);
  let obj2 = { contentContainerStyle: items2 };
  items2 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  let tmp27 = null;
  if (null != ratingsBodyLabel) {
    const obj3 = { style: tmp.ratingsHeader, variant: "text-md/medium", color: "text-default", children: ratingsBodyLabel };
    tmp27 = callback2(reasons(otherKey[20]).Text, obj3);
  }
  const items3 = [tmp27, callback2(feedbackReasons(otherKey[21]), { ratingOptions, textLabels: ratingTextLabels, selectedRating: first1, onChangeRating: callback }), , ];
  let tmp31 = null;
  if (tmp15) {
    const obj4 = { style: tmp.reasonsList };
    const obj5 = {
      title: reasonsHeaderLabel,
      hasIcons: false,
      children: first.map((label) => {
          let closure_0 = label;
          let tmp;
          if (null != label.label) {
            const obj = {
              label: label.label,
              labelLineClamp: 2,
              onPress() {
                  return outer1_17(closure_0);
                }
            };
            tmp = tmp3(reasons(otherKey[23]).TableRow, obj, arg1);
          }
          return tmp;
        })
    };
    obj4.children = callback2(reasons(otherKey[22]).TableRowGroup, obj5);
    tmp31 = callback2(View, obj4);
  }
  items3[2] = tmp31;
  let tmp36 = null;
  if (!hideDontShowAgainCheckbox) {
    const obj6 = { start: true, end: true, checked: first2 };
    const intl = reasons(otherKey[25]).intl;
    obj6.label = intl.string(reasons(otherKey[25]).t["5E9SB9"]);
    obj6.onPress = function onPress() {
      return callback8(!first2);
    };
    tmp36 = callback2(reasons(otherKey[24]).TableCheckboxRow, obj6);
  }
  items3[3] = tmp36;
  obj2.children = items3;
  obj.children = closure_8(reasons(otherKey[19]).BottomSheetScrollView, obj2);
  return callback2(reasons(otherKey[16]).BottomSheet, obj);
};
