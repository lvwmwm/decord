// Module ID: 11287
// Function ID: 11288
// Name: useCanInviteToLinkedGameOrganization
// Dependencies: [4883, 4877, 4903, 1087, 558, 576, 11286, 504, 2]
// Exports: canInviteToLinkedGameOrganization, hasCanInviteRole

// Module 11287 (useCanInviteToLinkedGameOrganization)
import Constants from "Constants" /* 1087 */;
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import GuildRoleStore from "GuildRoleStore" /* 4877 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, role;

const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteToLinkedGameOrganization(arg0, arg1) {
  let closure_0;
  let first;
  let linkedGameOrgInvitesEnabled;
  _require = arg0;
  let tmp = _require;
  const tmp2 = linkedGameOrgInvitesEnabled;
  let obj = require("react");
  const cResult = obj.c(5);
  let obj2 = require("LinkedGameOrgInvitesExperiment");
  linkedGameOrgInvitesEnabled = obj2.useLinkedGameOrgInvitesEnabled(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, GuildRoleStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp9;
    let tmp10;
    if (cResult[2] === linkedGameOrgInvitesEnabled) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(tmp2[7]);
    return tmpResult.useStateFromStores(first, tmp9, tmp10);
  }
  const fn = function v() {
    let tmp = linkedGameOrgInvitesEnabled;
    if (tmp) {
      let flag = false;
      const obj = PermissionStore;
      const obj2 = GuildMemberStore;
      if (null != closure_0.linkedGameOrganization) {
        flag = false;
        if (obj.can(Permissions.CREATE_INSTANT_INVITE, closure_0)) {
          const selfMember = obj2.getSelfMember(tmp2.id);
          let someResult = null != selfMember;
          if (someResult) {
            const id = tmp2.id;
            let closure_1 = tmp3;
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
          flag = someResult;
        }
      }
      tmp = flag;
    }
    return tmp;
  };
  const items1 = [linkedGameOrgInvitesEnabled, arg0];
  cResult[1] = arg0;
  cResult[2] = linkedGameOrgInvitesEnabled;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : (function useCanInviteToLinkedGameOrganization(arg0, arg1) {
  let closure_0;
  let linkedGameOrgInvitesEnabled;
  _require = arg0;
  let obj = require("LinkedGameOrgInvitesExperiment");
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(arg1);
  let obj2 = require("get initialized");
  const items = [GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled, arg0];
  return obj2.useStateFromStores(items, () => {
    let tmp = linkedGameOrgInvitesEnabled;
    if (tmp) {
      let flag = false;
      const obj = PermissionStore;
      const obj2 = GuildMemberStore;
      if (null != closure_0.linkedGameOrganization) {
        flag = false;
        if (obj.can(Permissions.CREATE_INSTANT_INVITE, closure_0)) {
          const selfMember = obj2.getSelfMember(tmp2.id);
          let someResult = null != selfMember;
          if (someResult) {
            const id = tmp2.id;
            let closure_1 = tmp3;
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
          flag = someResult;
        }
      }
      tmp = flag;
    }
    return tmp;
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
function canInviteToLinkedGameOrganization(linkedGameOrganization, can, getSelfMember, arg3) {
  if (null == linkedGameOrganization.linkedGameOrganization) {
    return false;
  } else if (can.can(Permissions.CREATE_INSTANT_INVITE, linkedGameOrganization)) {
    const selfMember = getSelfMember.getSelfMember(linkedGameOrganization.id);
    let someResult = null != selfMember;
    if (someResult) {
      const id = linkedGameOrganization.id;
      let closure_1 = arg3;
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
  } else {
    return false;
  }
}
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx");

export default tmp2;
export { hasCanInviteRole };
export { canInviteToLinkedGameOrganization };
