// Module ID: 15765
// Function ID: 15766
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 17, 4181, 676, 21, 589, 14623, 500, 6205, 14624, 5141, 4600, 1236, 10178, 712, 4157, 3886, 1945, 6653, 2869, 2]
// Exports: default

// Module 15765 (IncentivizedAccountLinkConfirmationBottomSheet)
import "messagesProxy";
import { Image } from "combined";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c7 = 150;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    obj = { source: null, style: null };
    obj = { uri: null };
    obj[0] = importDefault(14623);
    obj[0] = obj;
    const obj1 = { width: null, height: null };
    obj1[0] = c7;
    obj1[1] = c7;
    obj[1] = obj1;
    let tmp3Result = <Image uri={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      let obj2 = { url: null, style: null };
      let tmp4Result = tmp4(6205);
      obj2[0] = tmp4(14624);
      const obj3 = { width: null, height: null };
      obj3[0] = c7;
      obj3[1] = c7;
      obj2[1] = obj3;
      tmp3Result = tmp3(tmp4Result, obj2);
      tmp8 = tmp4;
      tmp9 = tmp3;
    } else {
      const obj4 = { source: null, resizeMode: "contain", style: null };
      const obj5 = { uri: null };
      tmp4Result = tmp4(5141);
      obj5[0] = tmp4(14624);
      obj4[0] = obj5;
      const obj6 = { width: null, height: null };
      obj6[0] = c7;
      obj6[1] = c7;
      obj4[2] = obj6;
      tmp3Result = tmp3(tmp4Result, obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
    }
    tmpResult = tmp(500);
  }
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = tmp(1236).intl;
  obj7[0] = intl.string(require(1236) /* getSystemLocale */.t.aRIFWD);
  const obj8 = { size: "sm", color: null };
  obj8[1] = tmp8(712).colors.WHITE;
  obj7[1] = tmp9(require(10178) /* WindowLaunchIcon */.WindowLaunchIcon, obj8);
  obj7[4] = function onPress() {
    callback(4157).hideActionSheet();
    const obj = callback(4157);
    const obj2 = callback(3886);
    obj2.openURL(callback(1945).getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = tmp(1236).intl;
  obj9[0] = intl2.string(tmp8(2869).ublzTG);
  const intl3 = tmp(1236).intl;
  obj9[1] = intl3.string(tmp8(2869).JgM2xu);
  obj9[2] = tmp9(require(4600) /* Button */.Button, obj7);
  obj9[3] = tmp3Result;
  obj9[4] = function onDismiss() {
    callback(4157).hideActionSheet();
  };
  return tmp9(require(6653) /* PromoSheet */.PromoSheet, obj9);
};
