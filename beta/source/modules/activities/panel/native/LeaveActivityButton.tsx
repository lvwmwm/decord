// Module ID: 19372
// Function ID: 19373
// Name: LeaveActivityButton
// Dependencies: [19, 5781, 21, 5758, 12047, 1113, 11065, 2]

// Module 19372 (LeaveActivityButton)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5781 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 11065 */;
import AssetRegistryDefault from "AssetRegistry" /* 12047 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class BaseLeaveActivityButton {
  constructor(onPress) {
    const Button = components_Button_Button.Button;
    const intl = intl3.intl;
    const intl2 = intl3.intl;
    return <Button onPress={arg0.onPress} icon={AssetRegistryDefault} text={intl.string(intl3.t["Hi1/aQ"])} accessibilityLabel={intl2.string(intl3.t.k0Aph0)} variant="destructive" size="sm" maxFontSizeMultiplier={1} />;
  }
}
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function LeaveActivityButton(arg0) {
  ({ selfEmbeddedActivity: require, setMode: importDefault } = arg0);
  return <BaseLeaveActivityButton onPress={function onPress() {
    const tmp = importDefault(ActivityPanelModes.DISCONNECTED);
    const timerId = setTimeout(() => {
      let applicationId;
      let _location;
      const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
      leaveEmbeddedActivity2;
      if (closure_1_0 != null) {
        _location = tmp2.location;
      }
      const obj = { location: _location, applicationId };
      applicationId = undefined;
      if (closure_1_0 != null) {
        applicationId = tmp2.applicationId;
      }
      const result = leaveEmbeddedActivity(obj);
    }, 400);
  }} />;
});
let result = size.fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export { BaseLeaveActivityButton };
