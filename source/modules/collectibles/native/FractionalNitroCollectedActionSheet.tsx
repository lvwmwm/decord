// Module ID: 11836
// Function ID: 91753
// Name: NitroAcquiredHeader
// Dependencies: [31, 27, 653, 1851, 33, 4130, 689, 8717, 5085, 11837, 4066, 6823, 3976, 7176, 7177, 4126, 1212, 1920, 3827, 5187, 6670, 4660, 9802, 4543, 4098, 5446, 2]
// Exports: default

// Module 11836 (NitroAcquiredHeader)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function NitroAcquiredHeader(skuId) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.header };
  obj = { source: importDefault(11837) };
  const items = [callback(importDefault(5085), obj), ];
  obj = { style: tmp.fractionNitroIcon };
  const obj1 = { skuId: skuId.skuId, width: require(8717) /* FRACTIONAL_NITRO_COIN_SIZE */.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: require(8717) /* FRACTIONAL_NITRO_COIN_SIZE */.FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET };
  obj.children = callback(require(8717) /* FRACTIONAL_NITRO_COIN_SIZE */.FractionalNitroCoinIllustration, obj1);
  items[1] = callback(closure_5, obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
({ FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_7, PremiumTypes: closure_8 } = GuildFeatures);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.body = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.content = obj1;
let obj2 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignSelf: "stretch" };
_createForOfIteratorHelperLoose.buttonContainer = obj2;
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose.header = { height: 112, justifyContent: "center", alignItems: "center", overflow: "hidden" };
let obj3 = { width: require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, height: require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET, position: "absolute", top: "50%", left: "50%" };
let items = [{ translateX: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 }, ];
let obj4 = { translateX: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
items[1] = { translateY: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
obj3.transform = items;
_createForOfIteratorHelperLoose.fractionNitroIcon = obj3;
let obj6 = { position: "absolute", right: require("_createForOfIteratorHelperLoose").space.PX_16, top: require("_createForOfIteratorHelperLoose").space.PX_16, width: 32, height: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center" };
_createForOfIteratorHelperLoose.questionIconContainer = obj6;
_createForOfIteratorHelperLoose.questionIcon = { width: 18, height: 18 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { translateY: -require("FRACTIONAL_NITRO_COIN_SIZE").FRACTIONAL_NITRO_COIN_SIZE.COLLECTED_SHEET / 2 };
const result = require("ME").fileFinishedImporting("modules/collectibles/native/FractionalNitroCollectedActionSheet.tsx");

export default function FractionalNitroCollectedActionSheet(skuId) {
  let onPressExplorePerks;
  let onPressViewCredits;
  skuId = skuId.skuId;
  const consumed = skuId.consumed;
  ({ onPressExplorePerks, onPressViewCredits } = skuId);
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let tmp2 = consumed(4066)();
  const React = tmp2;
  let obj = skuId(6823);
  const fetchFractionalPremiumInfo = obj.useFetchFractionalPremiumInfo();
  const isFractionalPremiumActive = fetchFractionalPremiumInfo.isFractionalPremiumActive;
  const expiresAt = fetchFractionalPremiumInfo.expiresAt;
  const items = [consumed, tmp2];
  const items1 = [skuId, consumed, expiresAt, isFractionalPremiumActive, tmp.description];
  const memo = React.useMemo(() => {
    if (consumed) {
      let obj = {};
      const tmp6 = consumed(tmp[8]);
      if (obj3.isThemeDark(result)) {
        let tmp9Result = tmp9(tmp10[13]);
      } else {
        tmp9Result = tmp9(tmp10[14]);
      }
      obj.source = tmp9Result;
      tmp(tmp6, obj);
      obj3 = skuId(tmp[12]);
    } else {
      obj = { variant: "heading-lg/bold", color: "text-default" };
      const intl = skuId(tmp[16]).intl;
      obj.children = intl.string(skuId(tmp[16]).t.g5W1g8);
      return tmp(skuId(tmp[15]).Text, obj);
    }
  }, items);
  const memo1 = React.useMemo(() => {
    let tmp2;
    if (null != outer1_7[skuId]) {
      tmp2 = tmp[1];
    }
    let num2 = 3;
    if (null != tmp2) {
      num2 = tmp2;
    }
    const intl = skuId(tmp[16]).intl;
    let obj = { days: num2 };
    const formatToPlainStringResult = intl.formatToPlainString(skuId(outer1_7[skuId][16]).t.Cz1G97, obj);
    obj = { variant: "text-md/normal", color: "text-default", style: outer1_7[skuId].description };
    if (consumed) {
      const intl3 = skuId(tmp[16]).intl;
      obj = { duration: formatToPlainStringResult, expirationDate: expiresAt };
      obj.children = intl3.format(skuId(tmp[16]).t["93PGOI"], obj);
      let tmp9 = obj;
    } else {
      const intl2 = skuId(tmp[16]).intl;
      if (isFractionalPremiumActive) {
        let stringResult = intl2.string(tmp6(tmp7[16]).t.fBmhE9);
      } else {
        const obj1 = { duration: formatToPlainStringResult };
        stringResult = intl2.format(tmp6(tmp7[16]).t["8fyBPf"], obj1);
      }
      obj.children = stringResult;
      tmp9 = obj;
    }
    return outer1_9(skuId(outer1_7[skuId][15]).Text, tmp9);
  }, items1);
  const callback = React.useCallback(() => {
    const articleURL = consumed(tmp[17]).getArticleURL(outer1_6.FRACTIONAL_PREMIUM_ABOUT);
    const obj = consumed(tmp[17]);
    consumed(tmp[18]).openURL(articleURL);
  }, []);
  obj = { handleDisabled: true };
  obj = {};
  if (consumed) {
    let obj1 = { premiumType: TIER_2.TIER_2 };
    let tmp10Result = tmp10(consumed(6670), obj1);
  } else {
    const obj2 = { skuId };
    tmp10Result = tmp10(NitroAcquiredHeader, obj2);
  }
  const items2 = [tmp10Result, ];
  let obj3 = { style: tmp.questionIconContainer, onPress: callback };
  const obj4 = { style: tmp.questionIcon, color: consumed(689).colors.WHITE };
  obj3.children = callback(skuId(9802).CircleQuestionIcon, obj4);
  items2[1] = callback(skuId(4660).PressableOpacity, obj3);
  obj.children = items2;
  const items3 = [closure_10(closure_11, obj), , ];
  const obj5 = { style: tmp.body };
  if (fetchFractionalPremiumInfo.isLoading) {
    const obj6 = { size: "large" };
    let tmp18Result = callback(isFractionalPremiumActive, obj6);
  } else {
    const obj7 = { style: tmp.content };
    const items4 = [memo, memo1, ];
    const obj8 = { style: tmp.buttonContainer };
    const obj9 = { size: "lg" };
    let intl = skuId(1212).intl;
    const string = intl.string;
    const t = skuId(1212).t;
    if (consumed) {
      obj9.text = string(t.ERKK6v);
      obj9.onPress = onPressExplorePerks;
      let tmp27 = obj9;
    } else {
      obj9.text = string(t["Jr6N+s"]);
      obj9.onPress = onPressViewCredits;
      tmp27 = obj9;
    }
    const items5 = [callback(skuId(4543).Button, tmp27), ];
    const obj10 = { size: "lg", variant: "secondary" };
    let intl2 = skuId(1212).intl;
    obj10.text = intl2.string(skuId(1212).t.TkTvBz);
    obj10.onPress = function onPress() {
      return consumed(tmp[24]).hideActionSheet();
    };
    items5[1] = callback(skuId(4543).Button, obj10);
    obj8.children = items5;
    items4[2] = closure_10(expiresAt, obj8);
    obj7.children = items4;
    tmp18Result = closure_10(expiresAt, obj7);
    const tmp18 = closure_10;
    const tmp19 = expiresAt;
    const tmp20 = closure_10;
    const tmp21 = expiresAt;
    const tmp22 = callback;
  }
  obj5.children = tmp18Result;
  items3[1] = callback(expiresAt, obj5);
  items3[2] = callback(skuId(5446).ActionSheetHeaderBar, { variant: "floating" });
  obj.children = items3;
  return closure_10(skuId(5187).BottomSheet, obj);
};
