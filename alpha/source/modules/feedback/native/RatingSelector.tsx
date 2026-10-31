// Module ID: 10162
// Function ID: 10163
// Name: RatingSelector
// Dependencies: [19, 17, 10158, 21, 5014, 10163, 10164, 1113, 10168, 10169, 10173, 10174, 8179, 5717, 6980, 2]
// Exports: default

// Module 10162 (RatingSelector)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 10163 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10168 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10173 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 10158 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let rating;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ DEFAULT_RATINGS: closure_4, FeedbackRating: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles({ ratings: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, rating: {}, emoji: { width: 64, height: 64, marginVertical: 24, marginHorizontal: 12 } });
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ ratings: { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, marginBottom: 12 }, rating: { width: "100%" }, emoji: { width: 32, height: 32 } });
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
    ratingOptions = closure_4;
  }
  const textLabels = ratingOptions.textLabels;
  ({ selectedRating: importDefault, onChangeRating: dependencyMap } = ratingOptions);
  let closure_3;
  const tmp = closure_8();
  let tmp2 = closure_7();
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
  obj4 = textLabels(10164);
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
  obj7 = textLabels(10169);
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
  obj10 = textLabels(10174);
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
    let tmp15;
    let tmp16Result;
    let tmp2;
    let tmp21;
    let tmp24;
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
        icon: tmp12(tmp15, obj4),
        label: tmp[rating]
      };
      RowButton = textLabels(dependencyMap[12]).RowButton;
      obj3 = { selected: importDefault === rating };
      obj4 = { style: closure_3.emoji, source: normal };
      tmp12 = jsx;
      tmp15 = FastImageDefault;
      const tmp4 = jsx;
      const tmp5 = closure_3;
      tmp7 = jsx;
      if (importDefault === rating) {
        normal = selected;
      }
      tmp16Result = tmp4(tmp5, obj, rating);
    } else {
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: getLabel(),
        accessibilityState: obj6,
        onPress() {
            return dependencyMap(rating);
          },
        children: tmp21(tmp24, obj7)
      };
      const PressableOpacity = textLabels(dependencyMap[14]).PressableOpacity;
      obj7 = { style: closure_3.emoji, source: tmp2 };
      tmp2 = normal;
      obj6 = { selected: importDefault === rating };
      const tmp16 = jsx;
      tmp21 = jsx;
      tmp24 = FastImageDefault;
      if (importDefault === rating) {
        tmp2 = selected;
      }
      tmp16Result = tmp16(PressableOpacity, obj5, rating);
    }
    return tmp16Result;
  })}</closure_3>;
};
