// Module ID: 13948
// Function ID: 105982
// Name: Footer
// Dependencies: []
// Exports: default

// Module 13948 (Footer)
function Footer(eligibleToReceivePremiumRewards) {
  let loading;
  let onPress;
  const callback = React.useCallback(() => {
    let obj = callback2(closure_2[6]);
    obj.hideActionSheet();
    obj = { screen: constants2.PREMIUM };
    callback(closure_2[7]).openUserSettings(obj);
  }, []);
  const tmp = callback3();
  ({ loading, onPress } = importDefault(dependencyMap[8])(false, callback, constants.QUEST_ORB_MULTIPLIER_PERK_INFO));
  const callback1 = React.useCallback(() => {
    callback2(closure_2[6]).hideActionSheet();
    const obj = callback2(closure_2[6]);
    const obj2 = callback2(closure_2[9]);
    obj2.openURL(callback2(closure_2[10]).getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer };
  const callback2 = React.useCallback(() => {
    callback2(closure_2[6]).hideActionSheet();
  }, []);
  const Button = arg1(dependencyMap[11]).Button;
  if (eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards) {
    obj = { mm: "Boolean", nm: "isArray", mn: "isArray" };
    const intl3 = tmp9(tmp10[12]).intl;
    obj.text = intl3.string(tmp9(tmp10[12]).t.hvVgAZ);
    obj.onPress = callback1;
    const items = [tmp8(Button, obj), ];
    obj = { <string:1986169986>: null, <string:2487833047>: "955eed7cc4876c0375acb05d74c44ea7" };
    const intl4 = tmp9(tmp10[12]).intl;
    obj.text = intl4.string(tmp9(tmp10[12]).t.cpT0Cq);
    obj.onPress = callback2;
    items[1] = callback(tmp9(tmp10[11]).Button, obj);
    obj.children = items;
    let tmp12 = obj;
  } else {
    const obj1 = { <string:1986169986>: true, <string:2487833047>: true };
    const intl = tmp9(tmp10[12]).intl;
    obj1.text = intl.string(tmp9(tmp10[12]).t.pj0XBN);
    obj1.onPress = onPress;
    obj1.loading = loading;
    const items1 = [tmp8(Button, obj1), ];
    const obj2 = { <string:1986169986>: null, <string:2487833047>: "955eed7cc4876c0375acb05d74c44ea7" };
    const intl2 = tmp9(tmp10[12]).intl;
    obj2.text = intl2.string(tmp9(tmp10[12]).t.PcTCB7);
    obj2.onPress = callback;
    items1[1] = callback(tmp9(tmp10[11]).Button, obj2);
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
  const tmp = callback3();
  let obj = {};
  const items = [callback(arg1(dependencyMap[14]).ActionSheetHeaderBar, { variant: "floating" }), ];
  obj = { style: items1 };
  const items1 = [tmp.container, { marginBottom: importDefault(dependencyMap[13])().bottom }];
  obj = { style: tmp.contentContainer };
  const items2 = [callback(View, { style: tmp.riveContainer, children: callback(arg1(dependencyMap[15]).NitroQuestOrbsMultiplierRive, {}) }), , , ];
  const obj2 = { "Null": 1, "Null": 1, "Null": 4, "Null": "row" };
  const items3 = [, ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  obj2.style = items3;
  obj2.children = title;
  items2[1] = callback(arg1(dependencyMap[16]).Text, obj2);
  items2[2] = callback(arg1(dependencyMap[16]).Text, { style: tmp.text, variant: "text-sm/normal", children: body });
  items2[3] = callback(Footer, { eligibleToReceivePremiumRewards });
  obj.children = items2;
  obj.children = callback2(View, obj);
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(closure_10, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AnalyticsPages: closure_5, HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[3]));
let closure_11 = { marginBottom: 0 };
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { alignItems: "center", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.contentContainer = { marginTop: importDefault(dependencyMap[5]).space.PX_48 };
const obj1 = { marginTop: importDefault(dependencyMap[5]).space.PX_48 };
obj.text = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
const obj2 = { textAlign: "center", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.buttonContainer = { width: "100%", gap: importDefault(dependencyMap[5]).space.PX_12, marginVertical: importDefault(dependencyMap[5]).space.PX_16 };
obj.title = { alignContent: "Array", justifyContent: "onMomentumBegin", sectionIndex: "<string:275841477>", itemIndex: "<string:1929379840>" };
obj.riveContainer = { "Null": "CARD", "Null": "SenderStopped" };
let closure_12 = obj.createStyles(obj);
const obj3 = { width: "100%", gap: importDefault(dependencyMap[5]).space.PX_12, marginVertical: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  multiplier = multiplier.multiplier;
  const arg1 = multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  const importDefault = orbMultiplierEligibility;
  let obj = arg1(dependencyMap[17]);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const dependencyMap = result;
  let tmp2 = orbMultiplierEligibility === arg1(dependencyMap[17]).QuestOrbMultiplierEligibilityType.NITRO;
  if (!tmp2) {
    tmp2 = orbMultiplierEligibility === arg1(dependencyMap[17]).QuestOrbMultiplierEligibilityType.UPSELL;
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
      if (result) {
        obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.NpUfej, obj);
      } else {
        obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.G5k+lZ, obj);
      }
    }
    return formatResult;
  }, items1);
  obj = { contentStyles: closure_11 };
  obj = { visible: tmp2, children: callback(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result }) };
  obj.children = callback(importDefault(dependencyMap[20]), obj);
  return callback(arg1(dependencyMap[19]).BottomSheet, obj);
};
