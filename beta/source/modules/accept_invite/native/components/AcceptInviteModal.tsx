// Module ID: 17082
// Function ID: 17083
// Name: AcceptInviteModal
// Dependencies: [19, 6399, 21, 1249, 4818, 12230, 8200, 6421, 2]
// Exports: default

// Module 17082 (AcceptInviteModal)
import Fragment from "Fragment" /* 21 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4818 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const CreateGuildModalStates = CreateGuildConstants.CreateGuildModalStates;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/accept_invite/native/components/AcceptInviteModal.tsx");

export default function AcceptInviteModal(arg0) {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => () => {

  }, []);
  const items = [arg0];
  const Navigator = require("Navigator").Navigator;
  return <Navigator screens={react.useMemo(() => {
    let obj3;
    let obj4;
    let obj = {};
    const ACCEPT_INVITE = CreateGuildModalStates.ACCEPT_INVITE;
    const obj2 = {
      fullscreen: true,
      headerShown: false,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.INVITE_ACCEPT,
      impressionProperties: obj3,
      render() {
        const obj = { onPressClose: closure_2_0(closure_2_2[6]).clearDisplayedInvite };
        const tmp = closure_2_1(closure_2_2[5]);
        const merged = Object.assign(closure_0);
        return closure_2_5(tmp, obj);
      }
    };
    obj3 = { deeplink_attempt_id: closure_0.deeplinkAttemptId, invite_code: obj4.parseInviteCodeFromInviteKey(closure_0.code) };
    obj[ACCEPT_INVITE] = obj2;
    obj4 = InviteCodeUtils;
    return obj;
  }, items)} initialRouteName={CreateGuildModalStates.ACCEPT_INVITE} />;
};
