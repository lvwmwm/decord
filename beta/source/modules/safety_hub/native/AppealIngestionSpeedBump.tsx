// Module ID: 11366
// Function ID: 11367
// Name: AppealIngestionSpeedBump
// Dependencies: [19, 17, 7881, 7868, 1074, 21, 4836, 504, 11359, 11367, 1115, 11365, 11368, 11378, 11379, 4832, 2]
// Exports: default

// Module 11366 (AppealIngestionSpeedBump)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary" /* 11368 */;
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary" /* 11378 */;
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 11379 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
const View = react_native.View;
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  let appealClassificationId;
  let classification;
  let closure_0;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let isCoppa;
  let isDeveloperClassification;
  let isDsaEligible;
  let isSpam;
  let items2;
  ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
  _require = undefined;
  const items = [SafetyHubStore];
  const tmp = closure_10();
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
  const useSafetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification;
  require("useSafetyHubClassifications");
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(stateFromStores);
  const tmp2Result = require("useEmitAppealIngestionEvent");
  _require = tmp2Result.useEmitAppealIngestionEvent();
  ({ isDsaEligible, classification } = safetyHubClassification);
  let str;
  if (classification != null) {
    str = classification.explainer_link;
  }
  if (str == null) {
    str = "";
  }
  const classification2 = safetyHubClassification.classification;
  let flagged_content;
  if (classification2 != null) {
    flagged_content = classification2.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1115).intl;
  const stringResult = intl.string(require("intl").t["C5q+pW"]);
  const intl2 = tmp2(1115).intl;
  const stringResult1 = intl2.string(require("intl").t.URt7VI);
  const AppealIngestionModalScreen = tmp2(11365).AppealIngestionModalScreen;
  const items1 = [closure_8(require("AppealIngestionModal").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), ];
  let tmp10Result = flagged_content.length > 0;
  const obj2 = { style: tmp.container, children: items2 };
  const tmp11 = View;
  if (tmp10Result) {
    const obj3 = { flaggedContent: flagged_content };
    tmp10Result = tmp10(AppealIngestionActivitySummaryDefault, obj3);
  }
  items2 = [tmp10Result, , , , , , ];
  const obj4 = { classification: safetyHubClassification.classification };
  items2[1] = closure_8(AppealIngestionPolicySummaryDefault, obj4);
  let tmp10Result3 = isCoppa;
  if (tmp10Result3) {
    const obj5 = {
      text: intl3.string(require("intl").t["gJs+kf"]),
      url: constants.AGE_VERIFICATION_LINK,
      onPress() {
          return closure_0(hasOwnProperty.ClickAgeVerificationLink);
        }
    };
    const tmp14Result = AppealIngestionExternalLinkDefault;
    intl3 = tmp2(1115).intl;
    tmp10Result3 = tmp10(tmp14Result, obj5);
  }
  items2[2] = tmp10Result3;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj6 = {
      text: intl4.string(require("intl").t.NBsJvm),
      url: constants.SPAM_LINK,
      onPress() {
          return closure_0(hasOwnProperty.ClickSpamWebformLink);
        }
    };
    const tmp14Result4 = AppealIngestionExternalLinkDefault;
    intl4 = tmp2(1115).intl;
    isSpam = tmp10(tmp14Result4, obj6);
  }
  items2[3] = isSpam;
  if (isDeveloperClassification) {
    const obj7 = {
      text: intl5.string(require("intl").t.n9cZTH),
      url: constants.APP_APPEAL_LINK,
      onPress() {
          return closure_0(hasOwnProperty.ClickAppAppealLink);
        }
    };
    const tmp14Result5 = AppealIngestionExternalLinkDefault;
    intl5 = tmp2(1115).intl;
    isDeveloperClassification = tmp10(tmp14Result5, obj7);
  }
  items2[4] = isDeveloperClassification;
  let tmp10Result4 = !isCoppa;
  if (tmp10Result4) {
    const obj8 = {
      text: intl6.string(require("intl").t["Vtyn/7"]),
      url: str,
      onPress() {
          return closure_0(hasOwnProperty.ClickLearnMoreLink);
        }
    };
    const tmp14Result6 = AppealIngestionExternalLinkDefault;
    intl6 = tmp2(1115).intl;
    tmp10Result4 = tmp10(tmp14Result6, obj8);
  }
  items2[5] = tmp10Result4;
  if (isDsaEligible) {
    const obj9 = { variant: "text-xs/normal", children: intl7.format(require("intl").t.WMUgCX, {}) };
    const Text = tmp2(4832).Text;
    intl7 = tmp2(1115).intl;
    isDsaEligible = tmp10(Text, obj9);
  }
  const obj10 = { children: items1 };
  items2[6] = isDsaEligible;
  items1[1] = closure_9(tmp11, obj2);
  return closure_9(AppealIngestionModalScreen, obj10);
};
