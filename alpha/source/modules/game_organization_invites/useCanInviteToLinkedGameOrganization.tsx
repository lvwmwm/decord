// Module ID: 15145
// Function ID: 15146
// Name: useCanInviteToLinkedGameOrganization
// Dependencies: [4881, 4875, 4901, 1087, 558, 576, 14484, 504, 2]
// Exports: hasCanInviteRole

// Module 15145 (useCanInviteToLinkedGameOrganization)
import Constants from "Constants" /* 1087 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 4881 */;
import GuildRoleStore from "GuildRoleStore" /* 4875 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, role, tmp3, tmp4, tmp6, tmp8;

let GuildMemberStore = GuildMemberStore_mod;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteToLinkedGameOrganization(linkedGameOrganization, arg1) {
  let closure_2;
  let first;
  let linkedGameOrgInvitesEnabled;
  _require = linkedGameOrganization;
  let tmp = _require;
  let tmp2 = linkedGameOrgInvitesEnabled;
  const obj = require("react");
  const cResult = obj.c(6);
  const obj2 = require("LinkedGameOrgInvitesExperiment");
  linkedGameOrgInvitesEnabled = obj2.useLinkedGameOrgInvitesEnabled(arg1);
  const tmp5 = null != linkedGameOrganization.linkedGameOrganization;
  GuildMemberStore = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, , ];
    items[1] = GuildRoleStore;
    items[2] = PermissionStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === linkedGameOrganization) {
    if (cResult[2] === linkedGameOrgInvitesEnabled) {
      let tmp10;
      let tmp11;
      if (cResult[3] === tmp5) {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult = tmp(tmp2[7]);
      return tmpResult.useStateFromStores(first, tmp10, tmp11);
    }
  }
  class I {
    constructor() {
      tmp = closure_1;
      if (tmp) {
        tmp2 = closure_2;
        if (tmp2) {
          tmp3 = closure_4;
          tmp4 = Permissions;
          tmp5 = closure_0;
          if (closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0)) {
            tmp6 = closure_2;
            selfMember = closure_2.getSelfMember(tmp5.id);
            tmp8 = null;
            someResult = null != selfMember;
            if (someResult) {
              tmp10 = closure_3;
              id = tmp5.id;
              closure_1 = closure_3;
              roles = selfMember.roles;
              someResult = roles.some(() => { /* body not rendered: F122868 */ });
            }
            return someResult;
          }
        }
      }
      return false;
    }
  }
  const items1 = [linkedGameOrgInvitesEnabled, tmp5, linkedGameOrganization];
  cResult[1] = linkedGameOrganization;
  cResult[2] = linkedGameOrgInvitesEnabled;
  cResult[3] = tmp5;
  cResult[4] = I;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = I;
}) : (function useCanInviteToLinkedGameOrganization(linkedGameOrganization, arg1) {
  let linkedGameOrgInvitesEnabled;
  _require = linkedGameOrganization;
  const obj = require("LinkedGameOrgInvitesExperiment");
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(arg1);
  let tmp2 = null != linkedGameOrganization.linkedGameOrganization;
  let closure_2 = tmp2;
  const items = [closure_2, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled, tmp2, linkedGameOrganization];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    const tmp = linkedGameOrgInvitesEnabled;
    if (tmp) {
      const tmp2 = closure_2;
      if (tmp2) {
        if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, linkedGameOrganization)) {
          const selfMember = GuildMemberStore.getSelfMember(tmp5.id);
          let someResult = null != selfMember;
          if (someResult) {
            const id = tmp5.id;
            let closure_1 = GuildRoleStore;
            const roles = selfMember.roles;
            someResult = roles.some((item) => {
              role = role.getRole(id, item);
              let prop;
              if (role != null) {
                prop = role.tags.game_organization_can_invite;
              }
              return null === prop;
            });
          }
          return someResult;
        }
      }
    }
    return false;
  }, items1);
});
function hasCanInviteRole(arg0, roles, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg2;
  roles = roles.roles;
  return roles.some((item) => {
    role = role.getRole(id, item);
    let prop;
    if (role != null) {
      prop = role.tags.game_organization_can_invite;
    }
    return null === prop;
  });
}
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx");

export default tmp2;
export { hasCanInviteRole };
