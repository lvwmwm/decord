// Module ID: 11455
// Function ID: 11456
// Name: AppealIngestionConfirmSubmission
// Dependencies: [19, 17, 5921, 1085, 21, 5091, 504, 11426, 1126, 11432, 11456, 5928, 5087, 5055, 11454, 2000, 584, 11435, 11451, 2]
// Exports: default

// Module 11455 (AppealIngestionConfirmSubmission)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import SafetyHubUtils from "SafetyHubUtils" /* 5928 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 11426 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11432 */;
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary" /* 11451 */;
import AppealIngestionBreadcrumbsDefault from "AppealIngestionBreadcrumbs" /* 11456 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 5921 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  let items4;
  let items5;
  let paths;
  let stringResult2;
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = closure_8();
  let obj = get_initialized;
  const items = [SafetyHubStore];
  let stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  const useSafetyHubClassification = useSafetyHubClassifications.useSafetyHubClassification;
  useSafetyHubClassifications;
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(stateFromStores);
  const items1 = [SafetyHubStore];
  const tmp2Result = get_initialized;
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => SafetyHubStore.getAppealSignal());
  const items2 = [SafetyHubStore];
  const tmp2Result3 = get_initialized;
  const stateFromStores2 = tmp2Result3.useStateFromStores(items2, () => SafetyHubStore.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1126).intl;
  const stringResult = intl.string(intl5.t["C5q+pW"]);
  const intl2 = tmp2(1126).intl;
  const stringResult1 = intl2.string(intl5.t["G2g/g5"]);
  const AppealIngestionModalScreen = tmp2(11432).AppealIngestionModalScreen;
  const items3 = [metroRequire(AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), ];
  let obj2 = { style: tmp.container, children: items5 };
  let obj3 = { reasons: items4.filter((item) => item.length > 0) };
  items4 = [, ];
  const tmp15 = AppealIngestionBreadcrumbsDefault;
  const tmp2Result4 = SafetyHubUtils;
  items4[0] = tmp2Result4.getAppealSignalDisplayText(stateFromStores1);
  items4[1] = stateFromStores2;
  items5 = [metroRequire(tmp15, obj3), , , ];
  const tmp13 = View;
  if (isDsaEligible) {
    const obj4 = {
      variant: "heading-md/normal",
      color: "text-link",
      style: tmp.detailsAction,
      onPress() {
          let obj = require("ActionSheetActionCreators");
          let obj2 = {
            onSave(userInput) {
              const obj = closure_1_1(paths[16]);
              const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
              obj.dispatch(obj2);
              const obj3 = closure_1_1(paths[13]);
              obj3.hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            },
            onClose() {
              const obj = closure_1_1(paths[13]);
              return obj.hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            }
          };
          return obj.openLazy(require("asyncRequire")(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", obj2);
        },
      children: stringResult2
    };
    const Text = tmp2(5087).Text;
    if (stateFromStores2.length > 0) {
      const intl4 = tmp2(1126).intl;
      stringResult2 = intl4.string(tmp2(1126).t.tnE3bZ);
    } else {
      const intl3 = tmp2(1126).intl;
      stringResult2 = intl3.string(tmp2(1126).t.uoQFIp);
    }
    isDsaEligible = tmp12(Text, obj4);
  }
  items5[1] = isDsaEligible;
  let tmp12Result = flagged_content.length > 0;
  if (tmp12Result) {
    const obj5 = { flaggedContent: flagged_content };
    tmp12Result = tmp12(tmp14(11435), obj5);
  }
  const obj6 = { children: items3 };
  items5[2] = tmp12Result;
  const obj7 = { classification: safetyHubClassification.classification };
  items5[3] = metroRequire(AppealIngestionPolicySummaryDefault, obj7);
  items3[1] = metroImportDefault(tmp13, obj2);
  return metroImportDefault(AppealIngestionModalScreen, obj6);
};
