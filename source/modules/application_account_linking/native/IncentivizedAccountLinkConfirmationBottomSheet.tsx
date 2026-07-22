// Module ID: 15509
// Function ID: 118357
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: []
// Exports: default

// Module 15509 (IncentivizedAccountLinkConfirmationBottomSheet)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
let closure_4 = importDefault(dependencyMap[2]);
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    obj = {};
    obj = { uri: importDefault(dependencyMap[6]) };
    obj.source = obj;
    obj.style = {};
    let tmp3Result = <Image {...obj} />;
  } else {
    let obj1 = arg1(dependencyMap[7]);
    if (obj1.isAndroid()) {
      obj1 = {};
      let tmp4Result = tmp4(tmp5[8]);
      obj1.url = tmp4(tmp5[9]);
      obj1.style = {};
      tmp3Result = tmp3(tmp4Result, obj1);
    } else {
      const obj2 = {};
      const obj3 = {};
      tmp4Result = tmp4(tmp5[10]);
      obj3.uri = tmp4(tmp5[9]);
      obj2.source = obj3;
      obj2.resizeMode = "contain";
      obj2.style = {};
      tmp3Result = tmp3(tmp4Result, obj2);
    }
  }
  const obj4 = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj4.text = intl.string(arg1(dependencyMap[12]).t.aRIFWD);
  const obj5 = { size: "sm", color: importDefault(dependencyMap[14]).colors.WHITE };
  obj4.icon = jsx(arg1(dependencyMap[13]).WindowLaunchIcon, obj5);
  obj4.iconPosition = "end";
  obj4.size = "lg";
  obj4.onPress = function onPress() {
    callback(closure_2[15]).hideActionSheet();
    const obj = callback(closure_2[15]);
    const obj2 = callback(closure_2[16]);
    obj2.openURL(callback(closure_2[17]).getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj6 = {};
  const intl2 = arg1(dependencyMap[12]).intl;
  obj6.title = intl2.string(importDefault(dependencyMap[19]).ublzTG);
  const intl3 = arg1(dependencyMap[12]).intl;
  obj6.description = intl3.string(importDefault(dependencyMap[19]).JgM2xu);
  obj6.actions = jsx(arg1(dependencyMap[11]).Button, obj4);
  obj6.illustration = tmp3Result;
  obj6.onDismiss = function onDismiss() {
    callback(closure_2[15]).hideActionSheet();
  };
  return jsx(arg1(dependencyMap[18]).PromoSheet, obj6);
};
