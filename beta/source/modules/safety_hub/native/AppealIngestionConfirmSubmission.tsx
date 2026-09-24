// Module ID: 12070
// Function ID: 12071
// Name: AppealIngestionConfirmSubmission
// Dependencies: [19, 17, 8739, 1078, 21, 4790, 504, 12047, 1119, 12053, 12071, 8727, 4786, 4757, 12069, 1984, 577, 12056, 12066, 2]
// Exports: default

// Module 12070 (AppealIngestionConfirmSubmission)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1119 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8727 */;
import useSafetyHubClassifications from "useSafetyHubClassifications" /* 12047 */;
import AppealIngestionModal from "AppealIngestionModal" /* 12053 */;
import AppealIngestionBreadcrumbsDefault from "AppealIngestionBreadcrumbs" /* 12071 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8739 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1078).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 16 }, detailsAction: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionConfirmSubmission.tsx");

export default function AppealIngestionConfirmSubmission(isDsaEligible) {
  isDsaEligible = isDsaEligible.isDsaEligible;
  const tmp = closure_8();
  const items = [SafetyHubStore];
  let stateFromStores = initialize.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassifications.useSafetyHubClassification(stateFromStores);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => SafetyHubStore.getAppealSignal());
  const tmp2Result = initialize;
  const items2 = [SafetyHubStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => SafetyHubStore.getFreeTextAppealReason());
  const classification = safetyHubClassification.classification;
  let flagged_content;
  if (classification != null) {
    flagged_content = classification.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1119).intl;
  const tmp2Result3 = initialize;
  const intl2 = tmp2(1119).intl;
  const stringResult = intl.string(util.t["C5q+pW"]);
  const items3 = [timestampProducer(AppealIngestionModal.AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(util.t["G2g/g5"]) }), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { reasons: null };
  const stringResult1 = intl2.string(util.t["G2g/g5"]);
  const tmp12 = View;
  const tmp14 = AppealIngestionBreadcrumbsDefault;
  const items4 = [SafetyHubUtils.getAppealSignalDisplayText(stateFromStores1), stateFromStores2];
  obj4.reasons = items4.filter((item) => item.length > 0);
  const items5 = [timestampProducer(tmp14, obj4), , , ];
  if (!isDsaEligible) {
    items5[1] = isDsaEligible;
    let tmp11Result = flagged_content.length > 0;
    if (tmp11Result) {
      const obj5 = { flaggedContent: flagged_content };
      tmp11Result = tmp11(tmp13(12056), obj5);
    }
    const obj6 = { children: null };
    items5[2] = tmp11Result;
    const obj7 = { classification: safetyHubClassification.classification };
    items5[3] = tmp11(tmp13(12066), obj7);
    obj3.children = items5;
    items3[1] = tmp10(tmp12, obj3);
    obj6.children = items3;
    return tmp10(tmp2(12053).AppealIngestionModalScreen, obj6);
  } else {
    const obj8 = {
      variant: "heading-md/normal",
      color: "text-link",
      style: tmp.detailsAction,
      onPress() {
          return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[14], paths.paths), "AppealIngestionFreeTextAppealReasonActionSheet", {
            onSave(userInput) {
              closure_1_1(577).dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput });
              const obj = closure_1_1(577);
              const obj2 = { type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput };
              closure_1_1(4757).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            },
            onClose() {
              return closure_1_1(4757).hideActionSheet("AppealIngestionFreeTextAppealReasonActionSheet");
            }
          });
        },
      children: null
    };
    if (stateFromStores2.length > 0) {
      const intl4 = tmp2(1119).intl;
      let stringResult2 = intl4.string(tmp2(1119).t.tnE3bZ);
    } else {
      const intl3 = tmp2(1119).intl;
      stringResult2 = intl3.string(tmp2(1119).t.uoQFIp);
    }
    obj8.children = stringResult2;
    tmp11(tmp2(4786).Text, obj8);
  }
};
