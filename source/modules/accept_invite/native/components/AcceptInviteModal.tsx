// Module ID: 16024
// Function ID: 123847
// Name: AcceptInviteModal
// Dependencies: [31, 9263, 33, 480, 4116, 11777, 8693, 5517, 2]
// Exports: default

// Module 16024 (AcceptInviteModal)
import result from "result";
import { CreateGuildModalStates } from "NUXGuildTemplatesAnalytics";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => () => {

  }, []);
  let obj = {};
  const items = [arg0];
  obj.screens = React.useMemo(() => (function getScreens(closure_0) {
    const callback = closure_0;
    let obj = {};
    obj = { fullscreen: true, headerShown: false, impressionName: callback(outer2_2[3]).ImpressionNames.INVITE_ACCEPT };
    obj = { deeplink_attempt_id: closure_0.deeplinkAttemptId, invite_code: callback(outer2_2[4]).parseInviteCodeFromInviteKey(closure_0.code) };
    obj.impressionProperties = obj;
    obj.render = function render() {
      const obj = {};
      const merged = Object.assign(callback);
      obj["onPressClose"] = callback(outer3_2[6]).clearDisplayedInvite;
      return outer3_5(outer3_1(outer3_2[5]), obj);
    };
    obj[outer2_4.ACCEPT_INVITE] = obj;
    return obj;
  })(closure_0), items);
  obj.initialRouteName = CreateGuildModalStates.ACCEPT_INVITE;
  return jsx(_require(5517).Navigator, {});
};
