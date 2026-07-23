// Module ID: 11051
// Function ID: 86018
// Name: AppealIngestionRequestSent
// Dependencies: [31, 27, 7544, 33, 4130, 11043, 1212, 11041, 11052, 4126, 11046, 2]
// Exports: default

// Module 11051 (AppealIngestionRequestSent)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import SafetyHubLinks from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ SafetyHubAnalyticsActions: closure_5, SafetyHubLinks: closure_6 } = SafetyHubLinks);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, padding: 8 }, actionsHeader: { marginTop: 31, marginBottom: 16 }, checkboxPng: { width: 86, height: 78.33, marginLeft: -2, alignSelf: "center" } });
const result = require("SafetyHubLinks").fileFinishedImporting("modules/safety_hub/native/AppealIngestionRequestSent.tsx");

export default function AppealIngestionRequestSent() {
  let obj = _require(11043);
  _require = obj.useEmitAppealIngestionEvent();
  const tmp = callback3();
  const intl = _require(1212).intl;
  const intl2 = _require(1212).intl;
  const stringResult = intl.string(_require(1212).t.QMbTSu);
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { source: importDefault(11052), style: tmp.checkboxPng };
  const items = [callback(closure_4, obj1), callback(_require(11041).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(_require(1212).t.Qdx8AP) }), , , ];
  const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.actionsHeader };
  const intl3 = _require(1212).intl;
  obj2.children = intl3.string(_require(1212).t["9BRc1N"]);
  items[2] = callback(_require(4126).Text, obj2);
  const obj3 = {};
  const stringResult1 = intl2.string(_require(1212).t.Qdx8AP);
  const intl4 = _require(1212).intl;
  obj3.text = intl4.string(_require(1212).t.PxL38B);
  obj3.url = constants.COMMUNITY_GUIDELINES;
  obj3.onPress = function onPress() {
    return callback(outer1_5.ClickCommunityGuidelinesLink);
  };
  items[3] = callback(importDefault(11046), obj3);
  const obj4 = {};
  const tmp4 = importDefault(11046);
  const intl5 = _require(1212).intl;
  obj4.text = intl5.string(_require(1212).t.qC3XKa);
  obj4.url = constants.WARNING_SYSTEM_HELPCENTER_LINK;
  obj4.onPress = function onPress() {
    return callback(outer1_5.ClickWarningSystemHelpcenterLink);
  };
  items[4] = callback(importDefault(11046), obj4);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(_require(11041).AppealIngestionModalScreen, obj);
};
