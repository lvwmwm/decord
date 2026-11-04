// Module ID: 16023
// Function ID: 16024
// Name: useLinkedGameOrganizationInviteSender
// Dependencies: [19, 9344, 5012, 504, 11844, 11852, 11855, 2]
// Exports: default

// Module 16023 (useLinkedGameOrganizationInviteSender)
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9344 */;
import getGameOrganizationInviteSendStateKeyDefault from "getGameOrganizationInviteSendStateKey" /* 11844 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11852 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11855 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let closure_4 = InstantInviteSendStateStore.useInstantInviteSendStates;
const result = size.fileFinishedImporting("modules/game_organization_invites/useLinkedGameOrganizationInviteSender.tsx");

export default function useLinkedGameOrganizationInviteSender(arg0) {
  let closure_0;
  let closure_2;
  let closure_3;
  let items1;
  let items2;
  _require = arg0;
  const tmp = dependencyMap;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.linkedGameOrganization;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = stateFromStores(11844)(stateFromStores);
  }
  dependencyMap = tmp3;
  let tmp5 = closure_4((arg0) => {
    let tmp2;
    if (null != closure_2) {
      tmp2 = arg0[tmp];
    }
    return tmp2;
  });
  react = tmp5;
  const obj2 = {
    getSendState: react.useCallback((arg0) => {
      let tmp2;
      if (closure_3 != null) {
        tmp2 = tmp[arg0];
      }
      if (tmp2 == null) {
        tmp2 = null;
      }
      return tmp2;
    }, items1),
    handleInvite: react.useCallback((arg0) => {
      if (null != stateFromStores) {
        const tmp5 = sendGameOrganizationInviteDefault;
        const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
        tmp5(tmp6, stateFromStores, arg0, showGameOrganizationInviteErrorToastDefault);
      }
    }, items2)
  };
  items1 = [tmp5];
  items2 = [stateFromStores];
  return obj2;
};
