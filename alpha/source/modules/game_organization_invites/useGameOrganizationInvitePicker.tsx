// Module ID: 12763
// Function ID: 12764
// Name: useGameOrganizationInvitePicker
// Dependencies: [19, 1388, 504, 12728, 12764, 12761, 12765, 12768, 2]
// Exports: default

// Module 12763 (useGameOrganizationInvitePicker)
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 12761 */;
import groupInvitableGameOrganizationsByApplicationDefault from "groupInvitableGameOrganizationsByApplication" /* 12764 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 12765 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 12768 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;
let _require;

let result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationInvitePicker.tsx");

export default function useGameOrganizationInvitePicker(arg0) {
  let closure_0;
  let data;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0));
  let tmp2 = stateFromStores(data[3])("game_organization_invite_picker");
  data = tmp2.data;
  const items1 = [data];
  const error = tmp2.error;
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    let tmp2 = null;
    if (null != data) {
      tmp2 = groupInvitableGameOrganizationsByApplicationDefault(tmp);
    }
    return tmp2;
  }, items1);
  const obj2 = {
    user: stateFromStores,
    groups: memo,
    error,
    handleInvite: react.useCallback((organization) => {
      if (null != stateFromStores) {
        const obj = getGameOrganizationInviteSendStateKey;
        const result = obj.toLinkedGameOrganization(organization);
        const tmp7 = sendGameOrganizationInviteDefault;
        const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
        tmp7(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
      }
    }, items2)
  };
  return obj2;
};
