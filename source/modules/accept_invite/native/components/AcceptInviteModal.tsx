// Module ID: 15841
// Function ID: 121241
// Name: AcceptInviteModal
// Dependencies: []
// Exports: default

// Module 15841 (AcceptInviteModal)
let closure_3 = importAll(dependencyMap[0]);
const CreateGuildModalStates = arg1(dependencyMap[1]).CreateGuildModalStates;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  const arg1 = arg0;
  const effect = React.useEffect(() => () => {

  }, []);
  const obj = {};
  const items = [arg0];
  obj.screens = React.useMemo(() => function getScreens(deeplinkAttemptId) {
    let obj = {};
    obj = { <string:344902466>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, <string:3126127034>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986, impressionName: deeplinkAttemptId(closure_2[3]).ImpressionNames.INVITE_ACCEPT };
    obj = { deeplink_attempt_id: deeplinkAttemptId.deeplinkAttemptId, invite_code: deeplinkAttemptId(closure_2[4]).parseInviteCodeFromInviteKey(deeplinkAttemptId.code) };
    obj.impressionProperties = obj;
    obj.render = function render() {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["onPressClose"] = arg0(closure_2[6]).clearDisplayedInvite;
      return callback2(callback(closure_2[5]), obj);
    };
    obj[constants.ACCEPT_INVITE] = obj;
    return obj;
  }(arg0), items);
  obj.initialRouteName = CreateGuildModalStates.ACCEPT_INVITE;
  return jsx(arg1(dependencyMap[7]).Navigator, obj);
};
