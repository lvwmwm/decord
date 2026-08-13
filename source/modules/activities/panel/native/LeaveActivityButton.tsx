// Module ID: 16187
// Function ID: 16188
// Name: BaseLeaveActivityButton
// Dependencies: [19, 9809, 21, 4755, 10765, 1236, 10575, 2]

// Module 16187 (BaseLeaveActivityButton)
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
class BaseLeaveActivityButton {
  constructor(arg0) {
    obj = { onPress: global.onPress, icon: null, text: null, accessibilityLabel: null, variant: "destructive", size: "sm", maxFontSizeMultiplier: 1 };
    obj[1] = require("registerAsset");
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t["Hi1/aQ"]);
    intl2 = require("getSystemLocale").intl;
    obj[3] = intl2.string(require("getSystemLocale").t.k0Aph0);
    return jsx(require("Button").Button, obj);
  }
}
const memoResult = require("noop").memo(function LeaveActivityButton(arg0) {
  let importDefault;
  let require;
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return <BaseLeaveActivityButton onPress={function onPress() {
    callback(outer1_3.DISCONNECTED);
    const timerId = setTimeout(() => {
      let obj = outer1_1(outer1_2[6]);
      let _location;
      if (closure_0 != null) {
        _location = tmp.location;
      }
      obj = { location: _location, applicationId: null };
      let applicationId;
      if (closure_0 != null) {
        applicationId = tmp.applicationId;
      }
      obj[1] = applicationId;
      obj.leaveActivity(obj);
    }, 400);
  }} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export { BaseLeaveActivityButton };
