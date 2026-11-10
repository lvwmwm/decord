// Module ID: 11793
// Function ID: 11794
// Name: useCanInviteToLinkedGameOrganization
// Dependencies: [5054, 5048, 5074, 1072, 11792, 504, 2]
// Exports: canInviteToLinkedGameOrganization, default, hasCanInviteRole

// Module 11793 (useCanInviteToLinkedGameOrganization)
import Constants from "Constants" /* 1072 */;
import GuildMemberStore from "GuildMemberStore" /* 5054 */;
import GuildRoleStore from "GuildRoleStore" /* 5048 */;
import PermissionStore from "PermissionStore" /* 5074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, role;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToLinkedGameOrganization.tsx");

export default function useCanInviteToLinkedGameOrganization(arg0, location) {
  let closure_0;
  let linkedGameOrgInvitesEnabled;
  _require = arg0;
  let obj = require("LinkedGameOrgInvitesExperiment");
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(location);
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
};
export function hasCanInviteRole(arg0, roles, arg2) {
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
export function canInviteToLinkedGameOrganization(linkedGameOrganization, can, getSelfMember, arg3) {
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
