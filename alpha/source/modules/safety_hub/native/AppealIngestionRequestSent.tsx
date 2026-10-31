// Module ID: 13329
// Function ID: 13330
// Name: AppealIngestionRequestSent
// Dependencies: [19, 17, 7970, 21, 5014, 13306, 1113, 13304, 5717, 13330, 5624, 13324, 2]
// Exports: default

// Module 13329 (AppealIngestionRequestSent)
import react_native from "react-native" /* 17 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 13324 */;
import AssetRegistryDefault from "AssetRegistry" /* 13330 */;
import react from "react" /* 19 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7970 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ SafetyHubAnalyticsActions: closure_4, SafetyHubLinks: hasOwnProperty } = SafetyHubConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
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
  const tmp = closure_8();
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.QMbTSu);
  const intl2 = require("intl").intl;
  const obj2 = { children: closure_7(View, obj3) };
  obj3 = { style: tmp.container, children: items };
  const stringResult1 = intl2.string(require("intl").t.Qdx8AP);
  const AppealIngestionModalScreen = require("AppealIngestionModal").AppealIngestionModalScreen;
  const obj4 = { source: AssetRegistryDefault, style: tmp.checkboxPng };
  const tmp4 = FastImageDefault;
  items = [closure_6(tmp4, obj4), closure_6(require("AppealIngestionModal").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), , , ];
  const obj5 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader, children: intl3.string(require("intl").t["9BRc1N"]) };
  const Text = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items[2] = closure_6(Text, obj5);
  const obj6 = {
    text: intl4.string(require("intl").t.PxL38B),
    url: constants.COMMUNITY_GUIDELINES,
    onPress() {
      return closure_0(React3.ClickCommunityGuidelinesLink);
    }
  };
  const tmp5 = AppealIngestionExternalLinkDefault;
  intl4 = require("intl").intl;
  items[3] = closure_6(tmp5, obj6);
  const obj7 = {
    text: intl5.string(require("intl").t.qC3XKa),
    url: constants.WARNING_SYSTEM_HELPCENTER_LINK,
    onPress() {
      return closure_0(React3.ClickWarningSystemHelpcenterLink);
    }
  };
  const tmp6 = AppealIngestionExternalLinkDefault;
  intl5 = require("intl").intl;
  items[4] = closure_6(tmp6, obj7);
  return closure_6(AppealIngestionModalScreen, obj2);
};
