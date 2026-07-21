// Module ID: 15590
// Function ID: 118973
// Name: BaseLeaveActivityButton
// Dependencies: []

// Module 15590 (BaseLeaveActivityButton)
class BaseLeaveActivityButton {
  constructor(arg0) {
    obj = { onPress: global.onPress };
    obj.icon = importDefault(dependencyMap[4]);
    intl = arg1(dependencyMap[5]).intl;
    obj.text = intl.string(arg1(dependencyMap[5]).t.Hi1/aQ);
    intl2 = arg1(dependencyMap[5]).intl;
    obj.accessibilityLabel = intl2.string(arg1(dependencyMap[5]).t.k0Aph0);
    obj.variant = "destructive";
    obj.size = "sm";
    obj.maxFontSizeMultiplier = 1;
    return jsx(arg1(dependencyMap[3]).Button, obj);
  }
}
const ActivityPanelModes = arg1(dependencyMap[1]).ActivityPanelModes;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function LeaveActivityButton(arg0) {
  ({ selfEmbeddedActivity: closure_0, setMode: closure_1 } = arg0);
  return <BaseLeaveActivityButton onPress={function onPress() {
    callback(constants.DISCONNECTED);
    const timerId = setTimeout(() => {
      let obj = callback(closure_2[6]);
      obj = {};
      let _location;
      if (null != closure_0) {
        _location = closure_0.location;
      }
      obj.location = _location;
      let applicationId;
      if (null != closure_0) {
        applicationId = closure_0.applicationId;
      }
      obj.applicationId = applicationId;
      obj.leaveActivity(obj);
    }, 400);
  }} />;
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/panel/native/LeaveActivityButton.tsx");

export default memoResult;
export { BaseLeaveActivityButton };
