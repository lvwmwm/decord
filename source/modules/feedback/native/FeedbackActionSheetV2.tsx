// Module ID: 16072
// Function ID: 124379
// Name: closeActionSheet
// Dependencies: [57, 31, 27, 9536, 33, 4130, 689, 4098, 22, 8328, 4559, 4337, 9558, 1934, 1212, 4126, 9540, 9132, 5501, 5165, 4543, 1557, 5187, 5186, 5499, 5189, 2]
// Exports: default

// Module 16072 (closeActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { FeedbackRating } from "FeedbackRating";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function closeActionSheet() {
  importDefault(4098).hideActionSheet();
}
function shuffleOptionsTree(arr) {
  return importDefault(22).shuffle(arr.map((problemOptions) => {
    const obj = {};
    const merged = Object.assign(problemOptions);
    const obj2 = outer1_1(outer1_2[8]);
    let freeformConfig = problemOptions.freeformConfig;
    if (null == freeformConfig) {
      freeformConfig = [];
    }
    obj["problemOptions"] = outer1_1(outer1_2[8]).shuffle(problemOptions.problemOptions).concat(freeformConfig);
    return obj;
  }));
}
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.ratingsBody = { textAlign: "center" };
_createForOfIteratorHelperLoose.problemsList = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/feedback/native/FeedbackActionSheetV2.tsx");

export default function FeedbackActionSheetV2(optionsTree) {
  let c16;
  let c17;
  let categoriesHeader;
  let _slicedToArray;
  let dependencyMap;
  let headerLabel;
  let hideDontShowAgainCheckbox;
  let importDefault;
  let initialRating;
  let ratingBody;
  let ratingOptions;
  let showHeaderCloseButton;
  ({ headerLabel, ratingBody, hideDontShowAgainCheckbox, initialRating } = optionsTree);
  ({ ratingOptions, showHeaderCloseButton, categoriesHeader } = optionsTree);
  if (initialRating === undefined) {
    initialRating = null;
  }
  optionsTree = optionsTree.optionsTree;
  ({ onMount: importDefault, trackOpen: dependencyMap, trackReport: _slicedToArray } = optionsTree);
  let ref;
  let c5;
  let first;
  let callback2;
  let first1;
  let callback3;
  let first2;
  let closure_11;
  let first4;
  let closure_13;
  let first5;
  let closure_15;
  c16 = undefined;
  c17 = undefined;
  let closure_18;
  let closure_19;
  let tmp = first2();
  ref = ref.useRef(null);
  const tmp4 = importDefault(8328)(optionsTree);
  c5 = tmp4;
  const tmp5 = callback(ref.useState(first4(optionsTree)), 2);
  first = tmp5[0];
  callback2 = tmp5[1];
  const items = [optionsTree, tmp4];
  const effect = ref.useEffect(() => {
    if (!obj.isEqual(c5, optionsTree)) {
      callback3(first4(optionsTree));
    }
  }, items);
  let tmp7 = callback(ref.useState(false), 2);
  first1 = tmp7[0];
  callback3 = tmp7[1];
  const tmp9 = callback(ref.useState(initialRating), 2);
  first2 = tmp9[0];
  closure_11 = tmp9[1];
  let first3 = null;
  if (1 === first.length) {
    first3 = first[0];
  }
  const tmp12 = callback(ref.useState(first3), 2);
  first4 = tmp12[0];
  closure_13 = tmp12[1];
  let tmp14 = callback(ref.useState(null), 2);
  first5 = tmp14[0];
  closure_15 = tmp14[1];
  [c16, c17] = callback(ref.useState(false), 2);
  importDefault(4559)(() => {
    if (null != callback) {
      callback();
    }
    callback2();
  });
  let obj = optionsTree(4559);
  const unmountEffect = obj.useUnmountEffect(() => {
    if (c16) {
      let obj = {};
      obj = { rating: first2 };
      let value;
      const obj2 = outer1_1(outer1_2[11]);
      if (null != first4) {
        value = first4.value;
      }
      obj.category = value;
      obj.reason = first5;
      obj.dontShowAgain = first1;
      obj.result = obj;
      obj.trackReport = function trackReport(rating) {
        const obj = { rating: rating.rating, category: rating.category, reason: rating.reason, dontShowAgain: rating.dontShowAgain };
        const feedback = rating.feedback;
        let str = "";
        if (null != feedback) {
          str = feedback;
        }
        obj.feedback = str;
        outer1_3(obj);
      };
      let problemsHeader;
      if (null != first4) {
        problemsHeader = first4.problemsHeader;
      }
      obj.titleLabel = problemsHeader;
      const intl = optionsTree(outer1_2[14]).intl;
      obj.descriptionLabel = intl.string(optionsTree(outer1_2[14]).t.h95hcn);
      let hideHelpdeskLink;
      if (null != first4) {
        const freeformConfig = first4.freeformConfig;
        if (null != freeformConfig) {
          hideHelpdeskLink = freeformConfig.hideHelpdeskLink;
        }
      }
      obj.hideHelpdeskLink = hideHelpdeskLink;
      obj2.pushLazy(optionsTree(outer1_2[13])(outer1_2[12], outer1_2.paths), obj);
      const tmp14 = optionsTree(outer1_2[13])(outer1_2[12], outer1_2.paths);
    } else {
      obj = { rating: first2 };
      value = undefined;
      if (null != first4) {
        value = first4.value;
      }
      let tmp7 = null;
      if (null != value) {
        tmp7 = value;
      }
      obj.category = tmp7;
      obj.reason = first5;
      obj.dontShowAgain = first1;
      obj.feedback = "";
      _slicedToArray(obj);
      const tmp = _slicedToArray;
    }
  });
  callback = ref.useCallback((arg0) => {
    callback5(arg0);
    if (arg0 === first.GOOD) {
      callback6(null);
      callback7(null);
      _undefined(false);
      callback5();
    } else {
      const current = ref.current;
      if (null != current) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_18 = ref.useCallback((arg0) => {
    callback6(arg0);
    callback7(null);
    const current = ref.current;
    if (null != current) {
      current.expandActionSheet();
    }
  }, []);
  const items1 = [first4];
  closure_19 = ref.useCallback((value) => {
    callback7(value);
    if (null != first4) {
      if (null != value) {
        value = undefined;
        if (null != first4.freeformConfig) {
          value = iter.value;
        }
        if (value === value.value) {
          _undefined(true);
        }
        callback5();
      }
    }
    _undefined(false);
  }, items1);
  if (null == first2) {
    obj = {};
    let tmp36 = null;
    if (null != ratingBody) {
      obj = { style: tmp.ratingsBody, variant: "text-md/medium", color: "text-default", children: ratingBody };
      tmp36 = callback2(optionsTree(4126).Text, obj);
    }
    const items2 = [tmp36, , ];
    const obj1 = { ratingOptions, selectedRating: first2, onChangeRating: callback };
    items2[1] = callback2(importDefault(9540), obj1);
    let tmp43 = null;
    if (!hideDontShowAgainCheckbox) {
      let obj2 = { start: true, end: true, checked: first1 };
      const intl3 = optionsTree(1212).intl;
      obj2.label = intl3.string(optionsTree(1212).t["5E9SB9"]);
      obj2.onPress = function onPress() {
        return callback4(!first1);
      };
      tmp43 = callback2(optionsTree(9132).TableCheckboxRow, obj2);
    }
    items2[2] = tmp43;
    obj.children = items2;
    let tmp34Result = callback3(first1, obj);
    let problemsHeader = headerLabel;
    const tmp34 = callback3;
    const tmp35 = first1;
  } else {
    if (first2 !== first.GOOD) {
      if (null == first4) {
        const obj3 = {};
        const obj4 = { style: tmp.problemsList };
        const obj5 = {
          hasIcons: false,
          children: first.map((label) => {
                  let closure_0 = label;
                  return callback3(optionsTree(outer1_2[19]).TableRow, {
                    label: label.label,
                    labelLineClamp: 2,
                    onPress() {
                      return outer1_18(closure_0);
                    }
                  }, arg1);
                })
        };
        obj4.children = callback2(optionsTree(5501).TableRowGroup, obj5);
        const items3 = [callback2(c5, obj4), ];
        const obj6 = { variant: "secondary", size: "sm" };
        const intl2 = optionsTree(1212).intl;
        obj6.text = intl2.string(optionsTree(1212).t["13/7kX"]);
        obj6.onPress = function onPress() {
          return callback5(null);
        };
        items3[1] = callback2(optionsTree(4543).Button, obj6);
        obj3.children = items3;
        tmp34Result = callback3(first1, obj3);
        problemsHeader = categoriesHeader;
      }
    }
    problemsHeader = headerLabel;
    if (tmp20) {
      problemsHeader = first4.problemsHeader;
      const obj7 = {};
      const obj8 = { style: tmp.problemsList };
      const obj9 = { hasIcons: false };
      const problemOptions = first4.problemOptions;
      obj9.children = problemOptions.map((label) => {
        let closure_0 = label;
        return callback3(optionsTree(outer1_2[19]).TableRow, {
          label: label.label,
          labelLineClamp: 2,
          onPress() {
            return outer1_19(closure_0);
          }
        }, arg1);
      });
      obj8.children = callback2(optionsTree(5501).TableRowGroup, obj9);
      const items4 = [callback2(c5, obj8), ];
      const obj10 = { variant: "secondary", size: "sm" };
      let intl = optionsTree(1212).intl;
      obj10.text = intl.string(optionsTree(1212).t["13/7kX"]);
      obj10.onPress = function onPress() {
        if (1 === first.length) {
          let tmp3 = callback5(null);
        } else {
          tmp3 = callback6(null);
        }
        return tmp3;
      };
      items4[1] = callback2(optionsTree(4543).Button, obj10);
      obj7.children = items4;
      tmp34Result = callback3(first1, obj7);
    }
    tmp20 = null != first4 && null == first5;
  }
  const bottom = importDefault(1557)().bottom;
  let num11 = 48;
  if (hideDontShowAgainCheckbox) {
    num11 = 0;
  }
  const sum = 232 + num11 + bottom;
  const obj11 = { scrollable: true, ref, startHeight: sum };
  let tmp49;
  if (null == first2) {
    tmp49 = sum;
  }
  obj11.maxHeight = tmp49;
  const obj12 = { title: problemsHeader };
  let tmp51 = null;
  if (showHeaderCloseButton) {
    const obj13 = { onPress: closure_11 };
    tmp51 = callback2(optionsTree(5499).ActionSheetCloseButton, obj13);
  }
  obj12.trailing = tmp51;
  obj11.header = callback2(optionsTree(5186).BottomSheetTitleHeader, obj12);
  const obj14 = { contentContainerStyle: items5 };
  items5 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj14.children = tmp34Result;
  obj11.children = callback2(optionsTree(5189).BottomSheetScrollView, obj14);
  return callback2(optionsTree(5187).BottomSheet, obj11);
};
