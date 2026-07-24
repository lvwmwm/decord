// Module ID: 14112
// Function ID: 108461
// Name: Footer
// Dependencies: [31, 27, 653, 33, 4130, 689, 4098, 5796, 8045, 3827, 1920, 4543, 1212, 1557, 5446, 3842, 4126, 9502, 3040, 5187, 14109, 2]
// Exports: default

// Module 14112 (Footer)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function Footer(eligibleToReceivePremiumRewards) {
  let loading;
  let onPress;
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[6]);
    obj.hideActionSheet();
    obj = { screen: outer1_7.PREMIUM };
    outer1_0(outer1_2[7]).openUserSettings(obj);
  }, []);
  const tmp = _createForOfIteratorHelperLoose();
  ({ loading, onPress } = importDefault(8045)(false, callback, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  const callback1 = React.useCallback(() => {
    outer1_1(outer1_2[6]).hideActionSheet();
    const obj = outer1_1(outer1_2[6]);
    const obj2 = outer1_1(outer1_2[9]);
    obj2.openURL(outer1_1(outer1_2[10]).getArticleURL(outer1_6.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer };
  const callback2 = React.useCallback(() => {
    outer1_1(outer1_2[6]).hideActionSheet();
  }, []);
  const Button = require(4543) /* Button */.Button;
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    obj = { size: "lg", text: null, variant: "primary" };
    const intl3 = tmp9(1212).intl;
    obj.text = intl3.string(tmp9(1212).t.hvVgAZ);
    obj.onPress = callback1;
    const items = [tmp8(Button, obj), ];
    obj = { size: "lg", variant: "secondary" };
    const intl4 = tmp9(1212).intl;
    obj.text = intl4.string(tmp9(1212).t.cpT0Cq);
    obj.onPress = callback2;
    items[1] = callback(tmp9(4543).Button, obj);
    obj.children = items;
    let tmp12 = obj;
  } else {
    const obj1 = { size: "lg", variant: "primary" };
    const intl = tmp9(1212).intl;
    obj1.text = intl.string(tmp9(1212).t.pj0XBN);
    obj1.onPress = onPress;
    obj1.loading = loading;
    const items1 = [tmp8(Button, obj1), ];
    let obj2 = { size: "lg", variant: "secondary" };
    const intl2 = tmp9(1212).intl;
    obj2.text = intl2.string(tmp9(1212).t.PcTCB7);
    obj2.onPress = callback;
    items1[1] = callback(tmp9(4543).Button, obj2);
    obj.children = items1;
    tmp12 = obj;
  }
  return closure_9(View, tmp12);
}
function SheetContent(arg0) {
  let body;
  let eligibleToReceivePremiumRewards;
  let title;
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [callback(require(5446) /* ActionSheetHeaderBar */.ActionSheetHeaderBar, { variant: "floating" }), ];
  obj = { style: items1 };
  items1 = [tmp.container, { marginBottom: importDefault(1557)().bottom }];
  obj = { style: tmp.contentContainer };
  const items2 = [callback(View, { style: tmp.riveContainer, children: callback(require(3842) /* ManaContext */.NitroQuestOrbsMultiplierRive, {}) }), , , ];
  const obj2 = { style: null, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header" };
  const items3 = [, ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  obj2.style = items3;
  obj2.children = title;
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  items2[2] = callback(require(4126) /* Text */.Text, { style: tmp.text, variant: "text-sm/normal", children: body });
  items2[3] = callback(Footer, { eligibleToReceivePremiumRewards });
  obj.children = items2;
  obj.children = callback2(View, obj);
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(closure_10, obj);
}
({ AnalyticsPages: closure_5, HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let closure_11 = { marginBottom: 0 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { alignItems: "center", width: "100%", marginTop: require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose.contentContainer = obj1;
_createForOfIteratorHelperLoose.text = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { textAlign: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.buttonContainer = { width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.title = { textTransform: "uppercase", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 };
_createForOfIteratorHelperLoose.riveContainer = { width: "100%", height: 160 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj3 = { width: "100%", gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("ME").fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  let obj = multiplier(9502);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const dependencyMap = result;
  let tmp2 = orbMultiplierEligibility === multiplier(9502).QuestOrbMultiplierEligibilityType.NITRO;
  if (!tmp2) {
    tmp2 = orbMultiplierEligibility === multiplier(9502).QuestOrbMultiplierEligibilityType.UPSELL;
  }
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const memo = React.useMemo(() => {
    if (orbMultiplierEligibility === multiplier(result[17]).QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = multiplier(result[12]).intl;
      let stringResult = intl2.string(orbMultiplierEligibility(result[18]).c5usUr);
    } else {
      const intl = multiplier(result[12]).intl;
      stringResult = intl.string(multiplier(result[12]).t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = React.useMemo(() => {
    if (orbMultiplierEligibility === multiplier(result[17]).QuestOrbMultiplierEligibilityType.CREPE) {
      const intl2 = multiplier(result[12]).intl;
      let obj = { bonusOrbMultiplier: multiplier };
      let formatResult = intl2.format(orbMultiplierEligibility(result[18]).UkrcSH, obj);
    } else {
      const intl = multiplier(result[12]).intl;
      const format = intl.format;
      const t = multiplier(result[12]).t;
      if (closure_2) {
        obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.NpUfej, obj);
      } else {
        obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t["G5k+lZ"], obj);
      }
    }
    return formatResult;
  }, items1);
  obj = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles: closure_11 };
  obj = { visible: tmp2, children: callback(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result }) };
  obj.children = callback(orbMultiplierEligibility(14109), obj);
  return callback(multiplier(5187).BottomSheet, obj);
};
