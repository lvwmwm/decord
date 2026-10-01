// Module ID: 11125
// Function ID: 11126
// Name: RatingSelector
// Dependencies: [19, 17, 11121, 21, 4836, 11126, 11127, 1115, 11131, 11132, 11136, 11137, 8055, 5435, 2]
// Exports: default

// Module 11125 (RatingSelector)
import Fragment from "Fragment" /* 21 */;
import AssetRegistryDefault from "AssetRegistry" /* 11126 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11131 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11136 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 11121 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let rating;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ DEFAULT_RATINGS: hasOwnProperty, FeedbackRating: metroRequire } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
const result = size.fileFinishedImporting("modules/feedback/native/RatingSelector.tsx");

export default function RatingSelector(ratingOptions) {
  let obj10;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  ratingOptions = ratingOptions.ratingOptions;
  if (ratingOptions === undefined) {
    ratingOptions = closure_5;
  }
  const textLabels = ratingOptions.textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  let closure_3;
  const tmp = closure_9();
  let tmp2 = closure_8();
  if (null != textLabels) {
    tmp2 = tmp;
  }
  closure_3 = tmp2;
  let obj = {};
  let obj2 = {
    source: obj3,
    getLabel() {
      const intl = textLabels(dependencyMap[7]).intl;
      return intl.string(textLabels(dependencyMap[7]).t["C/12Tt"]);
    },
    rating: constants.BAD
  };
  obj3 = { selected: AssetRegistryDefault, normal: obj4.useFeedbackModalSadDesaturatedSource() };
  const BAD = constants.BAD;
  obj4 = textLabels(11127);
  obj[BAD] = obj2;
  let obj5 = {
    source: obj6,
    getLabel() {
      const intl = textLabels(dependencyMap[7]).intl;
      return intl.string(textLabels(dependencyMap[7]).t.Xcb4cF);
    },
    rating: constants.NEUTRAL
  };
  obj6 = { selected: AssetRegistryDefault2, normal: obj7.useFeedbackModalNeutralDesaturatedSource() };
  const NEUTRAL = constants.NEUTRAL;
  obj7 = textLabels(11132);
  obj[NEUTRAL] = obj5;
  const obj8 = {
    source: obj9,
    getLabel() {
      const intl = textLabels(dependencyMap[7]).intl;
      return intl.string(textLabels(dependencyMap[7]).t["1Vyb5J"]);
    },
    rating: constants.GOOD
  };
  const GOOD = constants.GOOD;
  obj9 = { selected: AssetRegistryDefault3, normal: obj10.useFeedbackModalHappyDesaturatedSource() };
  obj[GOOD] = obj8;
  obj10 = textLabels(11137);
  const mapped = ratingOptions.map((item) => obj[item]);
  return <closure_3 style={tmp2.ratings}>{mapped.map((rating) => {
    let RowButton;
    let normal;
    let obj2;
    let obj3;
    let obj4;
    let obj6;
    let obj7;
    let selected;
    let tmp12;
    let tmp13;
    let tmp14Result;
    let tmp19;
    let tmp2;
    let tmp20;
    let tmp7;
    rating = rating.rating;
    ({ selected, normal } = rating.source);
    const getLabel = rating.getLabel;
    if (null != rating) {
      const obj = { style: closure_3.rating, children: tmp7(RowButton, obj2) };
      obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: getLabel(),
        accessibilityState: obj3,
        onPress() {
            return dependencyMap(rating);
          },
        icon: tmp12(tmp13, obj4),
        label: tmp[rating]
      };
      RowButton = textLabels(dependencyMap[12]).RowButton;
      obj3 = { selected: closure_1 === rating };
      obj4 = { style: closure_3.emoji, source: normal };
      tmp12 = jsx;
      tmp13 = closure_1_4;
      const tmp4 = jsx;
      const tmp5 = closure_3;
      tmp7 = jsx;
      if (closure_1 === rating) {
        normal = selected;
      }
      tmp14Result = tmp4(tmp5, obj, rating);
    } else {
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: getLabel(),
        accessibilityState: obj6,
        onPress() {
            return dependencyMap(rating);
          },
        children: tmp19(tmp20, obj7)
      };
      const PressableOpacity = textLabels(dependencyMap[13]).PressableOpacity;
      obj7 = { style: closure_3.emoji, source: tmp2 };
      tmp2 = normal;
      obj6 = { selected: closure_1 === rating };
      const tmp14 = jsx;
      tmp19 = jsx;
      tmp20 = closure_1_4;
      if (closure_1 === rating) {
        tmp2 = selected;
      }
      tmp14Result = tmp14(PressableOpacity, obj5, rating);
    }
    return tmp14Result;
  })}</closure_3>;
};
