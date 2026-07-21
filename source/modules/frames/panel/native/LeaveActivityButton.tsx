// Module ID: 15603
// Function ID: 119027
// Dependencies: []

// Module 15603
const ActivityPanelModes = arg1(dependencyMap[1]).ActivityPanelModes;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function LeaveActivityButton(arg0) {
  ({ frame: closure_0, setMode: closure_1 } = arg0);
  return jsx(arg1(dependencyMap[3]).BaseLeaveActivityButton, {
    onPress() {
      callback(constants.DISCONNECTED);
      const timerId = setTimeout(() => {
        let obj = callback(closure_2[4]);
        obj = { applicationId: applicationId.applicationId };
        obj.leaveFrame(obj);
      }, 400);
    }
  });
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default memoResult;
