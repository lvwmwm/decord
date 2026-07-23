// Module ID: 15718
// Function ID: 121228
// Name: BaseLeaveActivityButton
// Dependencies: [31, 10226, 33, 4543, 10655, 1212, 10525, 2]

// Module 15718 (BaseLeaveActivityButton)
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
class BaseLeaveActivityButton {
  constructor(arg0) {
    obj = { onPress: global.onPress };
    obj.icon = require("registerAsset");
    intl = require("getSystemLocale").intl;
    obj.text = intl.string(require("getSystemLocale").t["Hi1/aQ"]);
    intl2 = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl2.string(require("getSystemLocale").t.k0Aph0);
    obj.variant = "destructive";
    obj.size = "sm";
    obj.maxFontSizeMultiplier = 1;
    return jsx(require("Button").Button, obj);
  }
}
const memoResult = require("result").memo(function LeaveActivityButton(arg0) {
  let importDefault;
  let require;
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return <BaseLeaveActivityButton onPress={function onPress() {
    callback(outer1_3.DISCONNECTED);
    const timerId = setTimeout(() => {
      let obj = outer2_1(outer2_2[6]);
      obj = {};
      let _location;
      if (null != outer1_0) {
        _location = outer1_0.location;
      }
      obj.location = _location;
      let applicationId;
      if (null != outer1_0) {
        applicationId = outer1_0.applicationId;
      }
      obj.applicationId = applicationId;
      obj.leaveActivity(obj);
    }, 400);
  }} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export { BaseLeaveActivityButton };
