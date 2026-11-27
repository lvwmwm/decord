// Module ID: 20078
// Function ID: 20079
// Name: useCommandPermissionSections
// Dependencies: [32, 19, 4955, 4914, 4975, 20068, 1071, 7073, 504, 8184, 5695, 12, 20079, 20071, 1112, 1083, 2]
// Exports: default

// Module 20078 (useCommandPermissionSections)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1071 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 7073 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionActionCreatorsAll from "IntegrationPermissionActionCreators" /* 20071 */;
import CommandPermissionLockout from "CommandPermissionLockout" /* 20079 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import IntegrationPermissionStore from "IntegrationPermissionStore" /* 20068 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
let closure_11 = ApplicationCommandConstants.APPLICATION_COMMAND_PERMISSIONS_LIMIT;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useCommandPermissionSections.tsx");

export default function useCommandPermissionSections(applicationId) {
  let addDisabledReason;
  let tmp7;
  let tmp8;
  applicationId = applicationId.applicationId;
  const commandId = applicationId.commandId;
  const guildId = applicationId.guildId;
  const editedTargetPermissions = applicationId.editedTargetPermissions;
  const originalApplicationPermissions = applicationId.originalApplicationPermissions;
  const originalCommandPermissions = applicationId.originalCommandPermissions;
  const onLockout = applicationId.onLockout;
  applicationId = undefined;
  let callback;
  const tmp = applicationId;
  let tmp2 = editedTargetPermissions;
  const selectedPermissionCount = applicationId.selectedPermissionCount;
  let obj = applicationId(editedTargetPermissions[8]);
  let items = [callback];
  const items1 = [commandId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let command = null;
    if (null != commandId) {
      command = IntegrationPermissionStore.getCommand(tmp);
    }
    return command;
  }, items1);
  let obj2 = applicationId(editedTargetPermissions[8]);
  const items2 = [stateFromStores, onLockout, applicationId];
  const items3 = [guildId, stateFromStores, originalApplicationPermissions, originalCommandPermissions];
  const hasAccessToMutatePermissions = obj2.useStateFromStores(items2, () => {
    let prop;
    const guild = GuildStore.getGuild(guildId);
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let hasAccessResult = null != guild && null != selfMember;
    if (hasAccessResult) {
      const obj = { PermissionStore, guild, selfMember, applicationLevelPermissions: originalApplicationPermissions, commandLevelPermissions: originalCommandPermissions, defaultMemberPermissions: prop };
      prop = undefined;
      const hasAccess = ApplicationCommandUtils.hasAccess;
      ApplicationCommandUtils;
      if (stateFromStores != null) {
        prop = stateFromStores.defaultMemberPermissions;
      }
      hasAccessResult = hasAccess(obj);
    }
    return hasAccessResult;
  }, items3);
  let tmp5 = commandId;
  if (commandId == null) {
    tmp5 = applicationId;
  }
  applicationId = tmp5;
  const items4 = [editedTargetPermissions];
  const tmp6 = originalApplicationPermissions(originalCommandPermissions.useMemo(() => {
    let tmp6;
    let tmp7;
    const obj = {};
    const obj2 = {};
    const entries = Object.entries(editedTargetPermissions);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let tmp8 = tmp7;
      if (tmp7.type === ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL) {
        obj[tmp6] = tmp8;
      } else {
        obj2[tmp6] = tmp8;
      }
      continue;
    }
    const items = [obj, obj2];
    return items;
  }, items4), 2);
  const items5 = [guildId, stateFromStores, commandId, originalApplicationPermissions];
  [tmp7, tmp8] = tmp6;
  callback = originalCommandPermissions.useCallback((commandLevelPermissions) => {
    let prop;
    const guild = GuildStore.getGuild(guildId);
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let tmp3 = null != guild && null != selfMember;
    if (tmp3) {
      let hasAccessResult;
      if (null != commandId) {
        const obj2 = { PermissionStore, guild, selfMember, applicationLevelPermissions: originalApplicationPermissions, commandLevelPermissions, defaultMemberPermissions: prop };
        prop = undefined;
        const hasAccess = ApplicationCommandUtils.hasAccess;
        ApplicationCommandUtils;
        if (stateFromStores != null) {
          prop = stateFromStores.defaultMemberPermissions;
        }
        hasAccessResult = hasAccess(obj2);
      } else {
        const obj3 = { PermissionStore, guild, selfMember, applicationLevelPermissions: commandLevelPermissions };
        const obj = ApplicationCommandUtils;
        hasAccessResult = obj.hasAccess(obj3);
      }
      tmp3 = hasAccessResult;
    }
    return tmp3;
  }, items5);
  const items6 = [applicationId, editedTargetPermissions, guildId, tmp5, callback, onLockout];
  const overwritesOverLimit = selectedPermissionCount - closure_11;
  const maximumPermissionsSelected = overwritesOverLimit >= 0;
  const editPermissions = originalCommandPermissions.useCallback((arg0, arg1) => {
    const obj = {};
    const entries = Object.entries(editedTargetPermissions);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let obj6 = { id: null, permission: null, type: null };
      ({ id: obj2.id, permission: obj2.permission, type: obj2.type } = tmp5[1]);
      obj[tmp5[0]] = obj6;
      continue;
    }
    const merged = Object.assign(obj, arg0);
    let omitResult = merged;
    if (arg1.length > 0) {
      const obj3 = _modDef12;
      omitResult = obj3.omit(merged, arg1);
    }
    if (callback(omitResult)) {
      const obj5 = IntegrationPermissionActionCreatorsAll;
      obj5.editPermissions(applicationId, applicationId, omitResult);
    } else {
      const obj4 = CommandPermissionLockout;
      const commandPermissionLockout = obj4.getCommandPermissionLockout(guildId, editedTargetPermissions, arg0, arg1);
      onLockout(commandPermissionLockout.action, commandPermissionLockout.name);
    }
  }, items6);
  if (hasAccessToMutatePermissions) {
    addDisabledReason = null;
    if (maximumPermissionsSelected) {
      const intl3 = tmp(tmp2[14]).intl;
      addDisabledReason = intl3.string(tmp(tmp2[14]).t["XTwtW/"]);
    }
  } else if (null != commandId) {
    const intl2 = tmp(tmp2[14]).intl;
    addDisabledReason = intl2.string(tmp(tmp2[14]).t.tybdas);
  } else {
    const intl = tmp(tmp2[14]).intl;
    addDisabledReason = intl.string(tmp(tmp2[14]).t["z2hjk/"]);
  }
  let defaultMemberPermissions;
  if (stateFromStores != null) {
    defaultMemberPermissions = stateFromStores.defaultMemberPermissions;
  }
  if (defaultMemberPermissions == null) {
    defaultMemberPermissions = null;
  }
  let equalsResult = null != defaultMemberPermissions;
  if (equalsResult) {
    let obj3 = guildId(tmp2[15]);
    equalsResult = obj3.equals(defaultMemberPermissions, tmp(tmp2[9]).DISABLED_BY_DEFAULT_PERMISSION_FLAG);
  }
  if (equalsResult) {
    defaultMemberPermissions = Permissions.ADMINISTRATOR;
  }
  return { channels, membersAndRoles, editPermissions, hasAccessToMutatePermissions, overwritesOverLimit, maximumPermissionsSelected, addDisabledReason, defaultMemberPermissions };
};
