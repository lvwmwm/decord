// Module ID: 19324
// Function ID: 19325
// Name: AcceptInviteModal
// Dependencies: [19, 7141, 21, 1261, 5745, 14273, 9422, 7163, 2]
// Exports: default

// Module 19324 (AcceptInviteModal)
import Fragment from "Fragment" /* 21 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import InviteCodeUtils from "InviteCodeUtils" /* 5745 */;
import CreateGuildConstants from "CreateGuildConstants" /* 7141 */;
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
