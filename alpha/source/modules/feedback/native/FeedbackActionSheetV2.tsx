// Module ID: 17812
// Function ID: 17813
// Name: FeedbackActionSheetV2
// Dependencies: [32, 19, 17, 9602, 21, 5090, 587, 5054, 12, 5928, 5392, 5940, 9624, 1999, 1126, 5086, 9606, 6181, 6267, 6184, 5375, 1630, 6829, 6828, 6880, 6298, 2]
// Exports: default

// Module 17812 (FeedbackActionSheetV2)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import usePreviousDefault from "usePrevious" /* 5928 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import Constants from "Constants" /* 9602 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let BottomSheet, onPress;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp3;
const useSafeAreaInsetsDefault = tmp3(1630);
const useMountEffectDefault = tmp3(5392);
const RatingSelectorDefault = tmp3(9606);
function closeActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
}
const View = react_native.View;
const FeedbackRating = Constants.FeedbackRating;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, ratingsBody: { textAlign: "center" }, problemsList: obj3 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/feedback/native/FeedbackActionSheetV2.tsx");

export default function FeedbackActionSheetV2(optionsTree) {
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let TableRowGroup2;
  let _undefined;
  let c16;
  let c17;
  let categoriesHeader;
  let closure_11;
  let closure_7;
  let closure_9;
  let first;
  let first1;
  let first2;
  let headerLabel;
  let hideDontShowAgainCheckbox;
  let initialRating;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj14;
  let obj17;
  let obj19;
  let problemOptions;
  let problemsHeader;
  let ratingBody;
  let ratingOptions;
  let showHeaderCloseButton;
  let tmp33Result;
  let tmp40Result;
  let tmp41;
  const f132458 = (problemOptions) => {
    let concat;
    let freeformConfig;
    const obj = { problemOptions: concat(freeformConfig) };
    const merged = Object.assign(problemOptions);
    const obj2 = closure_1_1(closure_1_2[8]);
    freeformConfig = problemOptions.freeformConfig;
    concat = obj2.shuffle(problemOptions.problemOptions).concat;
    obj2.shuffle(problemOptions.problemOptions);
    if (freeformConfig == null) {
      freeformConfig = [];
    }
    return obj;
  };
  ({ headerLabel, ratingBody, hideDontShowAgainCheckbox, initialRating } = optionsTree);
  ({ ratingOptions, showHeaderCloseButton, categoriesHeader } = optionsTree);
  if (initialRating === undefined) {
    initialRating = null;
  }
  optionsTree = optionsTree.optionsTree;
  ({ onMount: importDefault, trackOpen: dependencyMap, trackReport: _slicedToArray } = optionsTree);
  let ref;
  first = undefined;
  closure_7 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  first2 = undefined;
  onPress = undefined;
  let first4;
  let closure_13;
  let first5;
  let closure_15;
  c16 = undefined;
  c17 = undefined;
  let closure_18;
  let closure_19;
  let tmp = first2();
  let obj = ref;
  ref = ref.useRef(null);
  let tmp3 = importDefault;
  const tmp5 = usePreviousDefault(optionsTree);
  let closure_5 = tmp5;
  const useState = ref.useState;
  let obj2 = _modDef12;
  [first, closure_7] = useState(obj2.shuffle(optionsTree.map(f132458)));
  const items = [optionsTree, tmp5];
  const effect = ref.useEffect(() => {
    let obj = _modDef12;
    const arr = optionsTree;
    if (!obj.isEqual(closure_5, optionsTree)) {
      const tmpResult = _modDef12;
      closure_7(tmpResult.shuffle(arr.map(f132458)));
    }
  }, items);
  [first1, closure_9] = ref.useState(false);
  [first2, onPress] = ref.useState(initialRating);
  let first3 = null;
  const useState2 = ref.useState;
  if (1 === first.length) {
    first3 = first[0];
  }
  const tmp6Result = _slicedToArray(useState2(first3), 2);
  first4 = tmp6Result[0];
  closure_13 = tmp6Result[1];
  const tmp6Result3 = _slicedToArray(obj.useState(null), 2);
  first5 = tmp6Result3[0];
  closure_15 = tmp6Result3[1];
  [c16, c17] = _slicedToArray(obj.useState(false), 2);
  _slicedToArray(obj.useState(false), 2);
  useMountEffectDefault(() => {
    if (importDefault != null) {
      tmp();
    }
    dependencyMap();
  });
  let obj3 = optionsTree(5392);
  const unmountEffect = obj3.useUnmountEffect(() => {
    let hideHelpdeskLink;
    let intl;
    let problemsHeader;
    let value;
    let value2;
    let tmp = c16;
    if (tmp) {
      const pushLazy = ModalActionCreatorsDefault.pushLazy;
      const obj2 = { rating: first2, category: value, reason: first5, dontShowAgain: first1 };
      value = undefined;
      ModalActionCreatorsDefault;
      const tmp13 = asyncRequire(9624, dependencyMap.paths);
      if (first4 != null) {
        value = iter.value;
      }
      const obj3 = {
        result: obj2,
        trackReport(rating) {
            let str;
            const obj = { rating: rating.rating, category: rating.category, reason: rating.reason, dontShowAgain: rating.dontShowAgain, feedback: str };
            str = rating.feedback;
            const tmp = closure_1_3;
            if (str == null) {
              str = "";
            }
            tmp(obj);
          },
        titleLabel: problemsHeader,
        descriptionLabel: intl.string(intl4.t.h95hcn),
        hideHelpdeskLink
      };
      problemsHeader = undefined;
      if (first4 != null) {
        problemsHeader = iter.problemsHeader;
      }
      intl = tmp12(1126).intl;
      hideHelpdeskLink = undefined;
      if (first4 != null) {
        const freeformConfig = iter.freeformConfig;
        if (freeformConfig != null) {
          hideHelpdeskLink = freeformConfig.hideHelpdeskLink;
        }
      }
      pushLazy(tmp13, obj3);
    } else {
      let obj = { rating: first2, category: value2, reason: first5, dontShowAgain: first1, feedback: "" };
      value2 = undefined;
      const tmp2 = _slicedToArray;
      if (first4 != null) {
        value2 = first4.value;
      }
      if (value2 == null) {
        value2 = null;
      }
      tmp2(obj);
    }
  });
  const callback = obj.useCallback((arg0) => {
    closure_11(arg0);
    if (arg0 === FeedbackRating.GOOD) {
      closure_13(null);
      closure_15(null);
      _undefined(false);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    } else {
      const current = ref.current;
      if (current != null) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_18 = obj.useCallback((arg0) => {
    closure_13(arg0);
    closure_15(null);
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, []);
  const items1 = [first4];
  closure_19 = obj.useCallback((value) => {
    closure_15(value);
    if (null != first4) {
      if (null != value) {
        value = undefined;
        if (first4.freeformConfig != null) {
          value = iter.value;
        }
        if (value === value.value) {
          _undefined(true);
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    }
    _undefined(false);
  }, items1);
  if (null == first2) {
    let tmp35 = null;
    const tmp33 = closure_9;
    const tmp34 = first1;
    if (null != ratingBody) {
      const obj4 = { style: tmp.ratingsBody, variant: "text-md/medium", color: "text-default", children: ratingBody };
      tmp35 = closure_7(tmp20(5086).Text, obj4);
    }
    const items2 = [tmp35, , ];
    const obj5 = { ratingOptions, selectedRating: first2, onChangeRating: callback };
    items2[1] = closure_7(RatingSelectorDefault, obj5);
    let tmp37Result = null;
    const tmp37 = closure_7;
    if (!hideDontShowAgainCheckbox) {
      const obj6 = {
        start: true,
        end: true,
        checked: first1,
        label: intl3.string(optionsTree(1126).t["5E9SB9"]),
        onPress() {
              return closure_9(!first1);
            }
      };
      const TableCheckboxRow = tmp20(6181).TableCheckboxRow;
      intl3 = tmp20(1126).intl;
      tmp37Result = tmp37(TableCheckboxRow, obj6);
    }
    const obj7 = { children: items2 };
    items2[2] = tmp37Result;
    tmp33Result = tmp33(tmp34, obj7);
    problemsHeader = headerLabel;
  } else {
    if (first2 !== first.GOOD) {
      if (null == first4) {
        const obj8 = { children: items3 };
        const obj9 = { style: tmp.problemsList, children: closure_7(TableRowGroup2, obj10) };
        obj10 = {
          hasIcons: false,
          children: first.map((label, index) => {
                  let closure_0 = label;
                  const obj = {
                    label: label.label,
                    labelLineClamp: 2,
                    onPress() {
                      return closure_18(label);
                    }
                  };
                  return closure_7(optionsTree(dependencyMap[19]).TableRow, obj, index);
                })
        };
        TableRowGroup2 = tmp20(6267).TableRowGroup;
        items3 = [closure_7(closure_5, obj9), ];
        const obj11 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(optionsTree(1126).t["13/7kX"]),
          onPress() {
                  return closure_11(null);
                }
        };
        const Button2 = tmp20(5375).Button;
        intl2 = tmp20(1126).intl;
        items3[1] = closure_7(Button2, obj11);
        tmp33Result = closure_9(first1, obj8);
        problemsHeader = categoriesHeader;
      }
    }
    problemsHeader = headerLabel;
    const tmp23 = null != first4 && null == first5;
    if (tmp23) {
      problemsHeader = first4.problemsHeader;
      const obj12 = { children: items4 };
      const obj13 = { style: tmp.problemsList, children: closure_7(TableRowGroup, obj14) };
      obj14 = {
        hasIcons: false,
        children: problemOptions.map((label, index) => {
              let closure_0 = label;
              const obj = {
                label: label.label,
                labelLineClamp: 2,
                onPress() {
                  return closure_19(label);
                }
              };
              return closure_7(optionsTree(dependencyMap[19]).TableRow, obj, index);
            })
      };
      problemOptions = first4.problemOptions;
      TableRowGroup = tmp20(6267).TableRowGroup;
      items4 = [closure_7(closure_5, obj13), ];
      const obj15 = {
        variant: "secondary",
        size: "sm",
        text: intl.string(optionsTree(1126).t["13/7kX"]),
        onPress() {
              let tmp3;
              if (1 === first.length) {
                tmp3 = closure_11(null);
              } else {
                tmp3 = closure_13(null);
              }
              return tmp3;
            }
      };
      const Button = tmp20(5375).Button;
      intl = tmp20(1126).intl;
      items4[1] = closure_7(Button, obj15);
      tmp33Result = closure_9(first1, obj12);
    }
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  let num = 48;
  if (hideDontShowAgainCheckbox) {
    num = 0;
  }
  const sum = 232 + num + bottom;
  const obj16 = { scrollable: true, ref, startHeight: sum, maxHeight: tmp41, header: closure_7(BottomSheetTitleHeader, obj17), children: closure_7(optionsTree(6298).BottomSheetScrollView, obj19) };
  tmp41 = undefined;
  BottomSheet = tmp20(6829).BottomSheet;
  if (null == first2) {
    tmp41 = sum;
  }
  obj17 = { title: problemsHeader, trailing: tmp40Result };
  tmp40Result = null;
  BottomSheetTitleHeader = tmp20(6828).BottomSheetTitleHeader;
  if (showHeaderCloseButton) {
    const obj18 = { onPress };
    tmp40Result = tmp40(tmp20(6880).ActionSheetCloseButton, obj18);
  }
  obj19 = { contentContainerStyle: items5, children: tmp33Result };
  items5 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  return closure_7(BottomSheet, obj16);
};
