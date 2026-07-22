// Module ID: 11032
// Function ID: 85926
// Name: AppealIngestionSpeedBump
// Dependencies: []
// Exports: default

// Module 11032 (AppealIngestionSpeedBump)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ SafetyHubAnalyticsActions: closure_5, SafetyHubLinks: closure_6 } = arg1(dependencyMap[3]));
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[4]).EMPTY_STRING_SNOWFLAKE_ID;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ container: { "Bool(false)": "LIGHT", "Bool(false)": "DARK", "Bool(false)": "backgroundColor" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  let classification;
  let isCoppa;
  let isDsaEligible;
  let isSpam;
  ({ isCoppa, isSpam } = arg0);
  let callback;
  let obj = callback(dependencyMap[7]);
  const items = [closure_4];
  let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
  let obj1 = callback(dependencyMap[8]);
  if (null == stateFromStores) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let obj2 = callback(dependencyMap[9]);
  callback = obj2.useEmitAppealIngestionEvent();
  ({ isDsaEligible, classification } = safetyHubClassification);
  let explainer_link;
  if (null != classification) {
    explainer_link = classification.explainer_link;
  }
  let str = "";
  if (null != explainer_link) {
    str = explainer_link;
  }
  const classification2 = safetyHubClassification.classification;
  let flagged_content;
  if (null != classification2) {
    flagged_content = classification2.flagged_content;
  }
  if (null == flagged_content) {
    flagged_content = [];
  }
  const intl = callback(dependencyMap[10]).intl;
  const tmp = callback3();
  const intl2 = callback(dependencyMap[10]).intl;
  const stringResult = intl.string(callback(dependencyMap[10]).t.C5q+pW);
  obj = {};
  const items1 = [callback2(callback(dependencyMap[11]).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(callback(dependencyMap[10]).t.URt7VI) }), ];
  obj = { style: tmp.container };
  let tmp9 = flagged_content.length > 0;
  if (tmp9) {
    obj1 = { flaggedContent: flagged_content };
    tmp9 = callback2(importDefault(dependencyMap[12]), obj1);
  }
  const items2 = [tmp9, , , , , ];
  obj2 = { classification: safetyHubClassification.classification };
  items2[1] = callback2(importDefault(dependencyMap[13]), obj2);
  let tmp13 = isCoppa;
  if (isCoppa) {
    const obj3 = {};
    const intl3 = callback(dependencyMap[10]).intl;
    obj3.text = intl3.string(callback(dependencyMap[10]).t.gJs+kf);
    obj3.url = constants.AGE_VERIFICATION_LINK;
    obj3.onPress = function onPress() {
      return callback(closure_5.ClickAgeVerificationLink);
    };
    tmp13 = callback2(importDefault(dependencyMap[14]), obj3);
    const tmp17 = importDefault(dependencyMap[14]);
  }
  items2[2] = tmp13;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj4 = {};
    const intl4 = callback(dependencyMap[10]).intl;
    obj4.text = intl4.string(callback(dependencyMap[10]).t.NBsJvm);
    obj4.url = constants.SPAM_LINK;
    obj4.onPress = function onPress() {
      return callback(closure_5.ClickSpamWebformLink);
    };
    isSpam = callback2(importDefault(dependencyMap[14]), obj4);
    const tmp23 = importDefault(dependencyMap[14]);
  }
  items2[3] = isSpam;
  let tmp26 = !isCoppa;
  if (tmp26) {
    const obj5 = {};
    const intl5 = callback(dependencyMap[10]).intl;
    obj5.text = intl5.string(callback(dependencyMap[10]).t.Vtyn/7);
    obj5.url = str;
    obj5.onPress = function onPress() {
      return callback(closure_5.ClickLearnMoreLink);
    };
    tmp26 = callback2(importDefault(dependencyMap[14]), obj5);
    const tmp30 = importDefault(dependencyMap[14]);
  }
  items2[4] = tmp26;
  if (isDsaEligible) {
    const obj6 = { variant: "text-xs/normal" };
    const intl6 = callback(dependencyMap[10]).intl;
    obj6.children = intl6.format(callback(dependencyMap[10]).t.WMUgCX, {});
    isDsaEligible = callback2(callback(dependencyMap[15]).TextWithIOSLinkWorkaround, obj6);
  }
  items2[5] = isDsaEligible;
  obj.children = items2;
  items1[1] = closure_9(View, obj);
  obj.children = items1;
  return closure_9(callback(dependencyMap[11]).AppealIngestionModalScreen, obj);
};
