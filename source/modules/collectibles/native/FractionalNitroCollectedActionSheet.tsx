// Module ID: 11826
// Function ID: 91704
// Name: NitroAcquiredHeader
// Dependencies: []
// Exports: default

// Module 11826 (NitroAcquiredHeader)
function NitroAcquiredHeader() {
  const tmp = callback3();
  let obj = { style: tmp.header };
  obj = { source: importDefault(dependencyMap[8]) };
  const items = [callback(importDefault(dependencyMap[7]), obj), ];
  obj = {};
  const obj1 = {};
  const tmp2 = importDefault(dependencyMap[7]);
  obj1.uri = importDefault(dependencyMap[9]);
  obj.source = obj1;
  obj.style = tmp.fractionNitroIcon;
  items[1] = callback(importDefault(dependencyMap[7]), obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
const PremiumTypes = arg1(dependencyMap[3]).PremiumTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.body = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.content = { gap: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.buttonContainer = { gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.description = { textAlign: "center" };
obj.header = { "Null": true, "Null": true, x: false, c: false };
const obj3 = { gap: "isArray", position: "isArray", right: "split", top: "header", alignItems: "guild" };
const items = [{ translateX: -34 }, { translateY: -34 }];
obj3.transform = items;
obj.fractionNitroIcon = obj3;
const obj4 = { -9223372036854775808: "/assets/images/native/icons", 0: 12, 0: 12, 0: null, 9223372036854775807: "b28329d7d2ebd0b330f6112973e5d746", 0: "ic_sparkle", 9223372036854775807: "png", right: importDefault(dependencyMap[6]).space.PX_16, top: importDefault(dependencyMap[6]).space.PX_16, backgroundColor: importDefault(dependencyMap[6]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[6]).radii.lg, alignItems: "center" };
obj.questionIconContainer = obj4;
obj.questionIcon = { "Null": null, "Null": null };
let closure_11 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default function FractionalNitroCollectedActionSheet(consumed) {
  let onPressExplorePerks;
  let onPressViewCredits;
  consumed = consumed.consumed;
  const arg1 = consumed;
  ({ onPressExplorePerks, onPressViewCredits } = consumed);
  const tmp = callback3();
  const importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[10])();
  const dependencyMap = tmp2;
  let obj = arg1(dependencyMap[11]);
  const fetchFractionalPremiumInfo = obj.useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const React = isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp2];
  const items1 = [consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = React.useMemo(() => {
    if (consumed) {
      let obj = {};
      const tmp6 = tmp(tmp2[7]);
      if (obj3.isThemeDark(tmp2)) {
        let tmp9Result = tmp9(tmp10[13]);
      } else {
        tmp9Result = tmp9(tmp10[14]);
      }
      obj.source = tmp9Result;
      tmp(tmp6, obj);
      const obj3 = consumed(tmp2[12]);
    } else {
      obj = { cachedAt: null, edpbxy: null };
      const intl = consumed(tmp2[16]).intl;
      obj.children = intl.string(consumed(consumed[16]).t.g5W1g8);
      return tmp(consumed(consumed[15]).Text, obj);
    }
  }, items);
  const memo1 = React.useMemo(() => {
    const intl = consumed(tmp2[16]).intl;
    const formatToPlainStringResult = intl.formatToPlainString(consumed(tmp2[16]).t.Cz1G97, { days: 3 });
    let obj = { cachedAt: 1, edpbxy: 1, style: tmp.description };
    if (consumed) {
      const intl3 = consumed(tmp2[16]).intl;
      obj = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj.children = intl3.format(consumed(tmp2[16]).t.93PGOI, obj);
      let tmp7 = obj;
    } else {
      const intl2 = consumed(tmp2[16]).intl;
      if (isFractionalPremiumActive) {
        let stringResult = intl2.string(tmp4(tmp5[16]).t.fBmhE9);
      } else {
        obj = { duration: formatToPlainStringResult };
        stringResult = intl2.format(tmp4(tmp5[16]).t.8fyBPf, obj);
      }
      obj.children = stringResult;
      tmp7 = obj;
    }
    return closure_8(consumed(closure_8[15]).Text, tmp7);
  }, items1);
  const callback = React.useCallback(() => {
    const articleURL = tmp(tmp2[17]).getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj = tmp(tmp2[17]);
    tmp(tmp2[18]).openURL(articleURL);
  }, []);
  obj = { handleDisabled: true };
  obj = {};
  if (consumed) {
    const obj1 = { premiumType: PremiumTypes.TIER_2 };
    let tmp10Result = tmp10(importDefault(dependencyMap[20]), obj1);
  } else {
    tmp10Result = tmp10(NitroAcquiredHeader, {});
  }
  const items2 = [tmp10Result, ];
  const obj2 = { style: tmp.questionIconContainer, onPress: callback };
  const obj3 = { style: tmp.questionIcon, color: importDefault(dependencyMap[6]).colors.WHITE };
  obj2.children = callback(arg1(dependencyMap[22]).CircleQuestionIcon, obj3);
  items2[1] = callback(arg1(dependencyMap[21]).PressableOpacity, obj2);
  obj.children = items2;
  const items3 = [closure_9(closure_10, obj), , ];
  const obj4 = { style: tmp.body };
  if (fetchFractionalPremiumInfo.isLoading) {
    const obj5 = { size: "large" };
    let tmp18Result = callback(expiresAt, obj5);
  } else {
    const obj6 = { style: tmp.content };
    const items4 = [memo, memo1, ];
    const obj7 = { style: tmp.buttonContainer };
    const obj8 = { size: "lg" };
    const intl = arg1(dependencyMap[16]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[16]).t;
    if (consumed) {
      obj8.text = string(t.ERKK6v);
      obj8.onPress = onPressExplorePerks;
      let tmp27 = obj8;
    } else {
      obj8.text = string(t.Jr6N+s);
      obj8.onPress = onPressViewCredits;
      tmp27 = obj8;
    }
    const items5 = [callback(arg1(dependencyMap[23]).Button, tmp27), ];
    const obj9 = { <string:1986169986>: null, <string:2487833047>: "955eed7cc4876c0375acb05d74c44ea7" };
    const intl2 = arg1(dependencyMap[16]).intl;
    obj9.text = intl2.string(arg1(dependencyMap[16]).t.TkTvBz);
    obj9.onPress = function onPress() {
      return tmp(tmp2[24]).hideActionSheet();
    };
    items5[1] = callback(arg1(dependencyMap[23]).Button, obj9);
    obj7.children = items5;
    items4[2] = closure_9(closure_5, obj7);
    obj6.children = items4;
    tmp18Result = closure_9(closure_5, obj6);
    const tmp18 = closure_9;
    const tmp19 = closure_5;
    const tmp20 = closure_9;
    const tmp21 = closure_5;
    const tmp22 = callback;
  }
  obj4.children = tmp18Result;
  items3[1] = callback(closure_5, obj4);
  items3[2] = callback(arg1(dependencyMap[25]).ActionSheetHeaderBar, { variant: "floating" });
  obj.children = items3;
  return closure_9(arg1(dependencyMap[19]).BottomSheet, obj);
};
