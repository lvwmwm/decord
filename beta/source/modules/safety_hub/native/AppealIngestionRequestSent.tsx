// Module ID: 11384
// Function ID: 11385
// Name: AppealIngestionRequestSent
// Dependencies: [19, 17, 7868, 21, 4836, 11367, 1115, 11365, 11385, 4832, 11379, 2]
// Exports: default

// Module 11384 (AppealIngestionRequestSent)
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 11379 */;
import AssetRegistryDefault from "AssetRegistry" /* 11385 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  let closure_0;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let obj3;
  const obj = require("useEmitAppealIngestionEvent");
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = closure_9();
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.QMbTSu);
  const intl2 = require("intl").intl;
  const obj2 = { children: closure_8(closure_3, obj3) };
  obj3 = { style: tmp.container, children: items };
  const obj4 = { source: AssetRegistryDefault, style: tmp.checkboxPng };
  const stringResult1 = intl2.string(require("intl").t.Qdx8AP);
  const AppealIngestionModalScreen = require("AppealIngestionModal").AppealIngestionModalScreen;
  items = [closure_7(closure_4, obj4), closure_7(require("AppealIngestionModal").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , ];
  const obj5 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: intl3.string(require("intl").t["9BRc1N"]) };
  const Text = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items[2] = closure_7(Text, obj5);
  const obj6 = {
    text: intl4.string(require("intl").t.PxL38B),
    url: constants.COMMUNITY_GUIDELINES,
    onPress() {
      return closure_0(hasOwnProperty.ClickCommunityGuidelinesLink);
    }
  };
  const tmp4 = AppealIngestionExternalLinkDefault;
  intl4 = require("intl").intl;
  items[3] = closure_7(tmp4, obj6);
  const obj7 = {
    text: intl5.string(require("intl").t.qC3XKa),
    url: constants.WARNING_SYSTEM_HELPCENTER_LINK,
    onPress() {
      return closure_0(hasOwnProperty.ClickWarningSystemHelpcenterLink);
    }
  };
  const tmp5 = AppealIngestionExternalLinkDefault;
  intl5 = require("intl").intl;
  items[4] = closure_7(tmp5, obj7);
  return closure_7(AppealIngestionModalScreen, obj2);
};
