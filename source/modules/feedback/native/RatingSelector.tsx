// Module ID: 9504
// Function ID: 74053
// Name: RatingSelector
// Dependencies: [31, 27, 9500, 33, 4130, 9505, 9506, 1212, 9510, 9511, 9515, 9516, 7498, 4660, 2]
// Exports: default

// Module 9504 (RatingSelector)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import FeedbackRating from "FeedbackRating";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ DEFAULT_RATINGS: closure_5, FeedbackRating: closure_6 } = FeedbackRating);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const result = require("FeedbackRating").fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  let dependencyMap;
  let importDefault;
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_5;
  }
  const textLabels = ratingOptions.textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  let c3;
  let tmp2 = callback();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  c3 = tmp2;
  tmp = callback2();
  let obj = {
    style: tmp2.ratings,
    children: (function useEmojiConfigs(ratingOptions) {
      let obj = {};
      obj = {};
      obj = { selected: outer1_1(outer1_2[5]) };
      let obj3 = textLabels(outer1_2[6]);
      obj.normal = obj3.useFeedbackModalSadDesaturatedSource();
      obj.source = obj;
      obj.getLabel = function getLabel() {
        const intl = textLabels(outer2_2[7]).intl;
        return intl.string(textLabels(outer2_2[7]).t["C/12Tt"]);
      };
      obj.rating = outer1_6.BAD;
      obj[outer1_6.BAD] = obj;
      const obj1 = {};
      const obj2 = { selected: outer1_1(outer1_2[8]), normal: textLabels(outer1_2[9]).useFeedbackModalNeutralDesaturatedSource() };
      obj1.source = obj2;
      obj1.getLabel = function getLabel() {
        const intl = textLabels(outer2_2[7]).intl;
        return intl.string(textLabels(outer2_2[7]).t.Xcb4cF);
      };
      obj1.rating = outer1_6.NEUTRAL;
      obj[outer1_6.NEUTRAL] = obj1;
      obj3 = {};
      const obj4 = { selected: outer1_1(outer1_2[10]) };
      const obj7 = textLabels(outer1_2[9]);
      obj4.normal = textLabels(outer1_2[11]).useFeedbackModalHappyDesaturatedSource();
      obj3.source = obj4;
      obj3.getLabel = function getLabel() {
        const intl = textLabels(outer2_2[7]).intl;
        return intl.string(textLabels(outer2_2[7]).t["1Vyb5J"]);
      };
      obj3.rating = outer1_6.GOOD;
      obj[outer1_6.GOOD] = obj3;
      return ratingOptions.map((arg0) => obj[arg0]);
    })(ratingOptions).map((rating) => {
      let normal;
      let selected;
      rating = rating.rating;
      ({ selected, normal } = rating.source);
      const getLabel = rating.getLabel;
      if (null != rating) {
        let obj = { style: _undefined.rating };
        obj = { accessibilityRole: "button", accessibilityLabel: getLabel() };
        obj = { selected: closure_1 === rating };
        obj.accessibilityState = obj;
        obj.onPress = function onPress() {
          return outer1_2(rating);
        };
        const obj1 = { style: _undefined.emoji };
        if (closure_1 === rating) {
          normal = selected;
        }
        obj1.source = normal;
        obj.icon = outer1_7(outer1_4, obj1);
        obj.label = rating[rating];
        obj.children = outer1_7(textLabels(outer1_2[12]).RowButton, obj);
        let tmp13Result = tmp3(_undefined, obj, rating);
        const tmp10 = outer1_4;
        const tmp4 = _undefined;
      } else {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: getLabel() };
        const obj3 = { selected: closure_1 === rating };
        obj2.accessibilityState = obj3;
        obj2.onPress = function onPress() {
          return outer1_2(rating);
        };
        const obj4 = { style: _undefined.emoji };
        let tmp = normal;
        if (closure_1 === rating) {
          tmp = selected;
        }
        obj4.source = tmp;
        obj2.children = outer1_7(outer1_4, obj4);
        tmp13Result = tmp13(textLabels(outer1_2[13]).PressableOpacity, obj2, rating);
        const tmp18 = outer1_4;
      }
      return tmp13Result;
    })
  };
  return <c3 style={tmp2.ratings}>{(function useEmojiConfigs(ratingOptions) {
    let obj = {};
    obj = {};
    obj = { selected: outer1_1(outer1_2[5]) };
    let obj3 = textLabels(outer1_2[6]);
    obj.normal = obj3.useFeedbackModalSadDesaturatedSource();
    obj.source = obj;
    obj.getLabel = function getLabel() {
      const intl = textLabels(outer2_2[7]).intl;
      return intl.string(textLabels(outer2_2[7]).t["C/12Tt"]);
    };
    obj.rating = outer1_6.BAD;
    obj[outer1_6.BAD] = obj;
    const obj1 = {};
    const obj2 = { selected: outer1_1(outer1_2[8]), normal: textLabels(outer1_2[9]).useFeedbackModalNeutralDesaturatedSource() };
    obj1.source = obj2;
    obj1.getLabel = function getLabel() {
      const intl = textLabels(outer2_2[7]).intl;
      return intl.string(textLabels(outer2_2[7]).t.Xcb4cF);
    };
    obj1.rating = outer1_6.NEUTRAL;
    obj[outer1_6.NEUTRAL] = obj1;
    obj3 = {};
    const obj4 = { selected: outer1_1(outer1_2[10]) };
    const obj7 = textLabels(outer1_2[9]);
    obj4.normal = textLabels(outer1_2[11]).useFeedbackModalHappyDesaturatedSource();
    obj3.source = obj4;
    obj3.getLabel = function getLabel() {
      const intl = textLabels(outer2_2[7]).intl;
      return intl.string(textLabels(outer2_2[7]).t["1Vyb5J"]);
    };
    obj3.rating = outer1_6.GOOD;
    obj[outer1_6.GOOD] = obj3;
    return ratingOptions.map((arg0) => obj[arg0]);
  })(ratingOptions).map((rating) => {
    let normal;
    let selected;
    rating = rating.rating;
    ({ selected, normal } = rating.source);
    const getLabel = rating.getLabel;
    if (null != rating) {
      let obj = { style: _undefined.rating };
      obj = { accessibilityRole: "button", accessibilityLabel: getLabel() };
      obj = { selected: closure_1 === rating };
      obj.accessibilityState = obj;
      obj.onPress = function onPress() {
        return outer1_2(rating);
      };
      const obj1 = { style: _undefined.emoji };
      if (closure_1 === rating) {
        normal = selected;
      }
      obj1.source = normal;
      obj.icon = outer1_7(outer1_4, obj1);
      obj.label = rating[rating];
      obj.children = outer1_7(textLabels(outer1_2[12]).RowButton, obj);
      let tmp13Result = tmp3(_undefined, obj, rating);
      const tmp10 = outer1_4;
      const tmp4 = _undefined;
    } else {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: getLabel() };
      const obj3 = { selected: closure_1 === rating };
      obj2.accessibilityState = obj3;
      obj2.onPress = function onPress() {
        return outer1_2(rating);
      };
      const obj4 = { style: _undefined.emoji };
      let tmp = normal;
      if (closure_1 === rating) {
        tmp = selected;
      }
      obj4.source = tmp;
      obj2.children = outer1_7(outer1_4, obj4);
      tmp13Result = tmp13(textLabels(outer1_2[13]).PressableOpacity, obj2, rating);
      const tmp18 = outer1_4;
    }
    return tmp13Result;
  })}</c3>;
};
