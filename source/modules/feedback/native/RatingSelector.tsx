// Module ID: 9497
// Function ID: 74012
// Name: RatingSelector
// Dependencies: []
// Exports: default

// Module 9497 (RatingSelector)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ DEFAULT_RATINGS: closure_5, FeedbackRating: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp4 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ ratings: {}, rating: {}, emoji: {} });
const obj = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ ratings: { 0: false, -9223372036854775808: false, 0: false, 9223372036854775807: false, 9223372036854775807: false }, rating: { width: "100%" }, emoji: { "Null": true, "Null": true } });
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_5;
  }
  const textLabels = ratingOptions.textLabels;
  const arg1 = textLabels;
  ({ selectedRating: closure_1, onChangeRating: closure_2 } = ratingOptions);
  let tmp2;
  tmp2 = callback();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  const tmp = callback2();
  const obj = {
    style: tmp2.ratings,
    children: function useEmojiConfigs(ratingOptions) {
      let obj = {};
      obj = {};
      obj = { selected: callback(closure_2[5]) };
      let obj3 = textLabels(closure_2[6]);
      obj.normal = obj3.useFeedbackModalSadDesaturatedSource();
      obj.source = obj;
      obj.getLabel = function getLabel() {
        const intl = obj(closure_2[7]).intl;
        return intl.string(obj(closure_2[7]).t.C/12Tt);
      };
      obj.rating = constants.BAD;
      obj[constants.BAD] = obj;
      const obj1 = {};
      const obj2 = { selected: callback(closure_2[8]), normal: textLabels(closure_2[9]).useFeedbackModalNeutralDesaturatedSource() };
      obj1.source = obj2;
      obj1.getLabel = function getLabel() {
        const intl = obj(closure_2[7]).intl;
        return intl.string(obj(closure_2[7]).t.Xcb4cF);
      };
      obj1.rating = constants.NEUTRAL;
      obj[constants.NEUTRAL] = obj1;
      obj3 = {};
      const obj4 = { selected: callback(closure_2[10]) };
      const obj7 = textLabels(closure_2[9]);
      obj4.normal = textLabels(closure_2[11]).useFeedbackModalHappyDesaturatedSource();
      obj3.source = obj4;
      obj3.getLabel = function getLabel() {
        const intl = obj(closure_2[7]).intl;
        return intl.string(obj(closure_2[7]).t.1Vyb5J);
      };
      obj3.rating = constants.GOOD;
      obj[constants.GOOD] = obj3;
      const textLabels = obj;
      return ratingOptions.map((arg0) => obj[arg0]);
    }(ratingOptions).map((rating) => {
      let normal;
      let selected;
      rating = rating.rating;
      const textLabels = rating;
      ({ selected, normal } = rating.source);
      const getLabel = rating.getLabel;
      if (null != textLabels) {
        let obj = { style: tmp2.rating };
        obj = { accessibilityRole: "button", accessibilityLabel: getLabel() };
        obj = { selected: closure_1 === rating };
        obj.accessibilityState = obj;
        obj.onPress = function onPress() {
          return callback(rating);
        };
        const obj1 = { style: tmp2.emoji };
        if (closure_1 === rating) {
          normal = selected;
        }
        obj1.source = normal;
        obj.icon = closure_7(closure_4, obj1);
        obj.label = textLabels[rating];
        obj.children = closure_7(textLabels(closure_2[12]).RowButton, obj);
        let tmp13Result = tmp3(tmp2, obj, rating);
        const tmp10 = closure_4;
        const tmp4 = tmp2;
      } else {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: getLabel() };
        const obj3 = { selected: closure_1 === rating };
        obj2.accessibilityState = obj3;
        obj2.onPress = function onPress() {
          return callback(rating);
        };
        const obj4 = { style: tmp2.emoji };
        let tmp = normal;
        if (closure_1 === rating) {
          tmp = selected;
        }
        obj4.source = tmp;
        obj2.children = closure_7(closure_4, obj4);
        tmp13Result = tmp13(textLabels(closure_2[13]).PressableOpacity, obj2, rating);
        const tmp18 = closure_4;
      }
      return tmp13Result;
    })
  };
  return <tmp2 {...obj} />;
};
