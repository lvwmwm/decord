// Module ID: 15054
// Function ID: 15055
// Name: FractionalNitroCollectedActionSheet
// Dependencies: [19, 17, 1072, 1385, 21, 5014, 575, 9541, 5717, 15055, 5253, 7761, 5021, 10594, 10595, 5624, 1113, 2061, 5709, 5272, 7616, 6980, 14502, 5634, 5258, 5595, 2]
// Exports: default

// Module 15054 (FractionalNitroCollectedActionSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import shared from "shared" /* 5021 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import FractionalNitroCoinIllustration2 from "FractionalNitroCoinIllustration" /* 9541 */;
import AssetRegistryDefault from "AssetRegistry" /* 15055 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let unpackModuleId;
function NitroAcquiredHeader(skuId) {
  let FractionalNitroCoinIllustration;
  let items;
  skuId = skuId.skuId;
  const tmp = closure_12();
  const obj = { style: tmp.header, children: items };
  const obj2 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [React4(tmp2, obj2), ];
  const obj3 = { style: tmp.fractionNitroIcon, children: React4(FractionalNitroCoinIllustration, size) };
  size = { skuId, width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
  FractionalNitroCoinIllustration = FractionalNitroCoinIllustration2.FractionalNitroCoinIllustration;
  items[1] = React4(hasOwnProperty, obj3);
  return authStore(hasOwnProperty, obj);
}
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: metroImportDefault, PremiumTypes: metroImportAll } = PremiumConstants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, content: obj3, buttonContainer: obj4, description: { textAlign: "center" }, header: { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" }, fractionNitroIcon: size, questionIconContainer: size1, questionIcon: { width: 18, height: 18 } };
obj2 = { flex: 1, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { flex: 1, gap: nativeDefault.space.PX_16, alignSelf: "stretch" };
size = { width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, position: "absolute", top: "50%", left: "50%", transform: items };
let obj5 = { translateX: -FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items = [obj5, ];
let obj6 = { translateY: -FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = obj6;
size1 = { position: "absolute", right: nativeDefault.space.PX_16, top: nativeDefault.space.PX_16, width: 32, height: 32, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", borderRadius: nativeDefault.radii.lg, alignItems: "center" };
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default function FractionalNitroCollectedActionSheet(skuId) {
  let CircleQuestionIcon;
  let closure_3;
  let description;
  let intl2;
  let items2;
  let items4;
  let items5;
  let obj6;
  let onPressExplorePerks;
  let onPressViewCredits;
  let tmp10Result;
  let tmp12Result;
  let tmp15;
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const tmp2 = consumed;
  const tmp4 = consumed(5253)();
  react = tmp4;
  let tmp5 = skuId;
  let obj = skuId(7761);
  const fetchFractionalPremiumInfo = obj.useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp4];
  const isLoading = fetchFractionalPremiumInfo.isLoading;
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = react.useMemo(() => {
    let intl;
    let tmpResult;
    if (consumed) {
      let tmp9Result;
      const tmp11 = FastImageDefault;
      const obj2 = shared;
      if (obj2.isThemeDark(closure_3)) {
        tmp9Result = tmp9(10594);
      } else {
        tmp9Result = tmp9(10595);
      }
      const obj3 = { source: tmp9Result };
      tmpResult = tmp(tmp11, obj3);
    } else {
      const obj = { variant: "heading-lg/bold", color: "text-default", children: intl.string(intl4.t.g5W1g8) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      tmpResult = tmp(Text, obj);
    }
    return tmpResult;
  }, items);
  const memo1 = react.useMemo(() => {
    let tmp8;
    let num;
    if (metroImportDefault[skuId] != null) {
      num = tmp[1];
    }
    if (num == null) {
      num = 3;
    }
    const intl = intl4.intl;
    const formatToPlainStringResult = intl.formatToPlainString(intl4.t.Cz1G97, { days: num });
    const obj = { variant: "text-md/normal", color: "text-default", style: description.description, children: null };
    const Text = Text_Text.Text;
    const tmp5 = React4;
    if (consumed) {
      const intl3 = tmp2(1113).intl;
      const obj2 = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj.children = intl3.format(intl4.t["93PGOI"], obj2);
      tmp8 = obj;
    } else {
      let stringResult;
      const intl2 = tmp2(1113).intl;
      if (isFractionalPremiumActive) {
        stringResult = intl2.string(tmp2(1113).t.fBmhE9);
      } else {
        const obj3 = { duration: formatToPlainStringResult };
        stringResult = intl2.format(tmp2(1113).t["8fyBPf"], obj3);
      }
      obj.children = stringResult;
      tmp8 = obj;
    }
    return tmp5(Text, tmp8);
  }, items1);
  const callback = react.useCallback(() => {
    const obj = consumed(description[17]);
    const articleURL = obj.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
    const obj2 = consumed(description[18]);
    obj2.openURL(articleURL);
  }, []);
  BottomSheet = skuId(5272).BottomSheet;
  let tmp11 = closure_11;
  if (consumed) {
    let obj2 = { premiumType: TIER_2.TIER_2 };
    tmp12Result = tmp12(tmp2(7616), obj2);
    tmp15 = tmp12;
  } else {
    let obj3 = { skuId };
    tmp12Result = tmp12(NitroAcquiredHeader, obj3);
    tmp15 = tmp12;
  }
  const obj4 = { children: items2 };
  items2 = [tmp12Result, ];
  const obj5 = { style: tmp.questionIconContainer, onPress: callback, children: tmp15(CircleQuestionIcon, obj6) };
  const PressableOpacity = tmp5(6980).PressableOpacity;
  obj6 = { style: tmp.questionIcon, color: tmp2(575).colors.WHITE };
  CircleQuestionIcon = tmp5(14502).CircleQuestionIcon;
  items2[1] = tmp15(PressableOpacity, obj5);
  const items3 = [tmp10(tmp11, obj4), , ];
  const obj7 = { style: tmp.body, children: tmp10Result };
  if (isLoading) {
    tmp10Result = tmp15(isFractionalPremiumActive, { size: "large" });
  } else {
    let tmp18;
    const obj8 = { style: tmp.content, children: items4 };
    items4 = [memo, memo1, ];
    const obj10 = { size: "lg", text: null, onPress: null };
    const obj9 = { style: tmp.buttonContainer, children: items5 };
    const Button = tmp5(5634).Button;
    let intl = tmp5(1113).intl;
    const string = intl.string;
    const t = tmp5(1113).t;
    if (consumed) {
      obj10.text = string(t.ERKK6v);
      obj10.onPress = onPressExplorePerks;
      tmp18 = obj10;
    } else {
      obj10.text = string(t["Jr6N+s"]);
      obj10.onPress = onPressViewCredits;
      tmp18 = obj10;
    }
    items5 = [tmp15(Button, tmp18), ];
    const obj11 = {
      size: "lg",
      variant: "secondary",
      text: intl2.string(tmp5(1113).t.TkTvBz),
      onPress() {
          const obj = consumed(description[24]);
          return obj.hideActionSheet();
        }
    };
    const Button2 = tmp5(5634).Button;
    intl2 = tmp5(1113).intl;
    items5[1] = tmp15(Button2, obj11);
    items4[2] = closure_10(expiresAt, obj9);
    tmp10Result = tmp10(tmp17, obj8);
  }
  const obj12 = { handleDisabled: true, children: items3 };
  items3[1] = tmp15(expiresAt, obj7);
  items3[2] = tmp15(tmp5(5595).ActionSheetHeaderBar, { variant: "floating" });
  return closure_10(BottomSheet, obj12);
};
