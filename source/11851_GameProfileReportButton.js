// Module ID: 11851
// Function ID: 91784
// Name: GameProfileReportButton
// Dependencies: []
// Exports: default

// Module 11851 (GameProfileReportButton)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const trackAction = applicationId.trackAction;
  const importDefault = trackAction;
  const items = [applicationId, trackAction];
  const callback = React.useCallback(() => {
    let obj = trackAction(paths[2]);
    obj.hideActionSheet();
    trackAction(applicationId(paths[3]).GameProfileTrackActionActions.Feedback);
    obj = { applicationId };
    const obj2 = trackAction(paths[4]);
    obj2.pushLazy(applicationId(paths[6])(paths[5], paths.paths), obj, applicationId(paths[7]).MODAL_KEY);
  }, items);
  const obj = { <string:1522289750>: "r", <string:570601313>: "isArray" };
  const intl = arg1(dependencyMap[9]).intl;
  obj.text = intl.string(arg1(dependencyMap[9]).t.qP2cXd);
  obj.onPress = callback;
  return jsx(arg1(dependencyMap[8]).Button, obj);
};
