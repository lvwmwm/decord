// Module ID: 15908
// Function ID: 121884
// Name: closeActionSheet
// Dependencies: []
// Exports: default

// Module 15908 (closeActionSheet)
function closeActionSheet() {
  importDefault(dependencyMap[7]).hideActionSheet();
}
function shuffleOptionsTree(optionsTree) {
  return importDefault(dependencyMap[8]).shuffle(optionsTree.map((problemOptions) => {
    const obj = {};
    const merged = Object.assign(problemOptions);
    const obj2 = callback(closure_2[8]);
    let freeformConfig = problemOptions.freeformConfig;
    if (null == freeformConfig) {
      freeformConfig = [];
    }
    obj["problemOptions"] = callback(closure_2[8]).shuffle(problemOptions.problemOptions).concat(freeformConfig);
    return obj;
  }));
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const FeedbackRating = arg1(dependencyMap[3]).FeedbackRating;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
obj.ratingsBody = { textAlign: "center" };
const tmp2 = arg1(dependencyMap[4]);
obj.problemsList = { marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
let closure_10 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/feedback/native/FeedbackActionSheetV2.tsx");

export default function FeedbackActionSheetV2(optionsTree) {
  let categoriesHeader;
  let headerLabel;
  let hideDontShowAgainCheckbox;
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
  const arg1 = optionsTree;
  ({ onMount: closure_1, trackOpen: closure_2, trackReport: closure_3 } = optionsTree);
  let React;
  let View;
  let FeedbackRating;
  let callback2;
  let first1;
  let callback3;
  let callback4;
  let closure_11;
  let shuffleOptionsTree;
  let closure_13;
  let first5;
  let closure_15;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  const tmp = callback4();
  const ref = React.useRef(null);
  React = ref;
  const tmp4 = importDefault(dependencyMap[9])(optionsTree);
  View = tmp4;
  const tmp5 = callback(React.useState(shuffleOptionsTree(optionsTree)), 2);
  const first = tmp5[0];
  FeedbackRating = first;
  callback2 = tmp5[1];
  const items = [optionsTree, tmp4];
  const effect = React.useEffect(() => {
    if (!obj.isEqual(tmp4, optionsTree)) {
      const tmp4 = callback2(first4(optionsTree));
    }
  }, items);
  const tmp7 = callback(React.useState(false), 2);
  first1 = tmp7[0];
  callback3 = tmp7[1];
  const tmp9 = callback(React.useState(initialRating), 2);
  const first2 = tmp9[0];
  callback4 = first2;
  closure_11 = tmp9[1];
  let first3 = null;
  if (1 === first.length) {
    first3 = first[0];
  }
  const tmp12 = callback(React.useState(first3), 2);
  const first4 = tmp12[0];
  shuffleOptionsTree = first4;
  closure_13 = tmp12[1];
  const tmp14 = callback(React.useState(null), 2);
  first5 = tmp14[0];
  closure_15 = tmp14[1];
  [closure_16, closure_17] = callback(React.useState(false), 2);
  importDefault(dependencyMap[10])(() => {
    if (null != callback) {
      callback();
    }
    lib();
  });
  let obj = arg1(dependencyMap[10]);
  const unmountEffect = obj.useUnmountEffect(() => {
    if (closure_16) {
      let obj = {};
      obj = { rating: first2 };
      let value;
      const obj2 = callback(lib[11]);
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
        closure_3(obj);
      };
      let problemsHeader;
      if (null != first4) {
        problemsHeader = first4.problemsHeader;
      }
      obj.titleLabel = problemsHeader;
      const intl = optionsTree(lib[14]).intl;
      obj.descriptionLabel = intl.string(optionsTree(lib[14]).t.h95hcn);
      let hideHelpdeskLink;
      if (null != first4) {
        const freeformConfig = first4.freeformConfig;
        if (null != freeformConfig) {
          hideHelpdeskLink = freeformConfig.hideHelpdeskLink;
        }
      }
      obj.hideHelpdeskLink = hideHelpdeskLink;
      obj2.pushLazy(optionsTree(lib[13])(lib[12], lib.paths), obj);
      const tmp14 = optionsTree(lib[13])(lib[12], lib.paths);
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
      closure_3(obj);
      const tmp = closure_3;
    }
  });
  const callback = React.useCallback((arg0) => {
    callback4(arg0);
    if (arg0 === first.GOOD) {
      callback5(null);
      callback6(null);
      _undefined(false);
      callback4();
    } else {
      const current = ref.current;
      if (null != current) {
        current.expandActionSheet();
      }
    }
  }, []);
  closure_18 = React.useCallback((arg0) => {
    callback5(arg0);
    callback6(null);
    const current = ref.current;
    if (null != current) {
      current.expandActionSheet();
    }
  }, []);
  const items1 = [first4];
  closure_19 = React.useCallback((value) => {
    callback6(value);
    if (null != first4) {
      if (null != value) {
        value = undefined;
        if (null != first4.freeformConfig) {
          value = iter.value;
        }
        if (value === value.value) {
          _undefined(true);
        }
        callback4();
      }
    }
    _undefined(false);
  }, items1);
  if (null == first2) {
    obj = {};
    let tmp36 = null;
    if (null != ratingBody) {
      obj = { style: tmp.ratingsBody, children: ratingBody };
      tmp36 = callback2(arg1(dependencyMap[15]).Text, obj);
    }
    const items2 = [tmp36, , ];
    const obj1 = { ratingOptions, selectedRating: first2, onChangeRating: callback };
    items2[1] = callback2(importDefault(dependencyMap[16]), obj1);
    let tmp43 = null;
    if (!hideDontShowAgainCheckbox) {
      const obj2 = { 400888199: null, 2091392542: null, checked: first1 };
      const intl3 = arg1(dependencyMap[14]).intl;
      obj2.label = intl3.string(arg1(dependencyMap[14]).t.5E9SB9);
      obj2.onPress = function onPress() {
        return callback3(!first1);
      };
      tmp43 = callback2(arg1(dependencyMap[17]).TableCheckboxRow, obj2);
    }
    items2[2] = tmp43;
    obj.children = items2;
    let tmp34Result = callback3(first1, obj);
    let problemsHeader = headerLabel;
    const tmp34 = callback3;
    const tmp35 = first1;
  } else {
    if (first2 !== FeedbackRating.GOOD) {
      if (null == first4) {
        const obj3 = {};
        const obj4 = { style: tmp.problemsList };
        const obj5 = {
          hasIcons: false,
          children: first.map((label) => {
                  const optionsTree = label;
                  return callback2(optionsTree(closure_2[19]).TableRow, {
                    label: label.label,
                    labelLineClamp: 2,
                    onPress() {
                      return callback(arg0);
                    }
                  }, arg1);
                })
        };
        obj4.children = callback2(arg1(dependencyMap[18]).TableRowGroup, obj5);
        const items3 = [callback2(View, obj4), ];
        const obj6 = {};
        const intl2 = arg1(dependencyMap[14]).intl;
        obj6.text = intl2.string(arg1(dependencyMap[14]).t.13/7kX);
        obj6.onPress = function onPress() {
          return callback4(null);
        };
        items3[1] = callback2(arg1(dependencyMap[20]).Button, obj6);
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
        const optionsTree = label;
        return callback2(optionsTree(closure_2[19]).TableRow, {
          label: label.label,
          labelLineClamp: 2,
          onPress() {
            return callback(arg0);
          }
        }, arg1);
      });
      obj8.children = callback2(arg1(dependencyMap[18]).TableRowGroup, obj9);
      const items4 = [callback2(View, obj8), ];
      const obj10 = {};
      const intl = arg1(dependencyMap[14]).intl;
      obj10.text = intl.string(arg1(dependencyMap[14]).t.13/7kX);
      obj10.onPress = function onPress() {
        if (1 === first.length) {
          let tmp3 = callback4(null);
        } else {
          tmp3 = callback5(null);
        }
        return tmp3;
      };
      items4[1] = callback2(arg1(dependencyMap[20]).Button, obj10);
      obj7.children = items4;
      tmp34Result = callback3(first1, obj7);
    }
    const tmp20 = null != first4 && null == first5;
  }
  const bottom = importDefault(dependencyMap[21])().bottom;
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
    tmp51 = callback2(arg1(dependencyMap[24]).ActionSheetCloseButton, obj13);
  }
  obj12.trailing = tmp51;
  obj11.header = callback2(arg1(dependencyMap[23]).BottomSheetTitleHeader, obj12);
  const obj14 = { contentContainerStyle: items5 };
  const items5 = [tmp.container, { paddingBottom: tmp.container.padding + bottom }];
  obj14.children = tmp34Result;
  obj11.children = callback2(arg1(dependencyMap[25]).BottomSheetScrollView, obj14);
  return callback2(arg1(dependencyMap[22]).BottomSheet, obj11);
};
