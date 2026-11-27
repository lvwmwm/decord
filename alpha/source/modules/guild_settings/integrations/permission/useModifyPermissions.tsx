// Module ID: 20069
// Function ID: 20070
// Name: useModifyPermissions
// Dependencies: [32, 19, 4892, 4949, 4914, 4975, 1387, 20068, 1071, 504, 12, 20070, 8184, 8185, 5695, 38, 1255, 2]
// Exports: default

// Module 20069 (useModifyPermissions)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1071 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import IntegrationSettingsActionCreatorsDefault from "IntegrationSettingsActionCreators" /* 20070 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import UserStore from "UserStore" /* 1387 */;
import IntegrationPermissionStore from "IntegrationPermissionStore" /* 20068 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, dependencyMap, importDefault;

const Permissions = Constants.Permissions;
let closure_12 = {};
let result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useModifyPermissions.tsx");

export default function useModifyPermissions(id, arg1, arg2) {
  let applicationPermissions;
  let closure_1;
  let closure_2;
  let items22;
  let stateFromStores2;
  _require = id;
  importDefault = arg1;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  let items = [IntegrationPermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => applicationPermissions.getApplicationPermissions());
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, id];
  const memo = stateFromStores2.useMemo(() => {
    let obj = stateFromStores;
    if (stateFromStores == null) {
      obj = {};
    }
    const obj2 = {};
    const merged = Object.assign(obj);
    const obj3 = ApplicationCommandUtils;
    const allChannelsSentinelResult = obj3.allChannelsSentinel(id);
    const obj4 = IntegrationPermissionUtils;
    const toPermissionKeyResult = obj4.toPermissionKey(allChannelsSentinelResult, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL);
    const obj5 = IntegrationPermissionUtils;
    const toPermissionKeyResult1 = obj5.toPermissionKey(id, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE);
    if (!(toPermissionKeyResult1 in obj2)) {
      obj2[toPermissionKeyResult1] = { id, permission: true, type: ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE };
      const obj6 = { id, permission: true, type: ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE };
    }
    if (!(toPermissionKeyResult in obj2)) {
      obj2[toPermissionKeyResult] = { id: allChannelsSentinelResult, permission: true, type: ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL };
      const obj7 = { id: allChannelsSentinelResult, permission: true, type: ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL };
    }
    return obj2;
  }, items1);
  let obj3 = require("get initialized");
  const items2 = [IntegrationPermissionStore];
  const items3 = [arg2];
  let stateFromStores1 = obj3.useStateFromStores(items2, () => {
    if (null != closure_2) {
      const command = IntegrationPermissionStore.getCommand(tmp);
      let permissions;
      if (command != null) {
        permissions = command.permissions;
      }
      if (permissions == null) {
        permissions = closure_12;
      }
      return permissions;
    }
  }, items3);
  let obj4 = require("get initialized");
  const items4 = [IntegrationPermissionStore];
  const items5 = [arg2];
  stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let permissions;
    if (null == closure_2) {
      permissions = IntegrationPermissionStore.getEditedApplication();
    } else {
      const editedCommand = IntegrationPermissionStore.getEditedCommand();
      if (editedCommand != null) {
        permissions = editedCommand.permissions;
      }
    }
    return permissions;
  }, items5);
  let tmp7 = arg2;
  if (arg2 == null) {
    tmp7 = arg1;
  }
  let closure_5 = tmp7;
  let tmp8 = memo;
  if (null != arg2) {
    tmp8 = stateFromStores1;
  }
  stateFromStores1 = tmp8;
  const items6 = [stateFromStores2, tmp8];
  const memo1 = obj2.useMemo(() => {
    let tmp = stateFromStores2;
    if (stateFromStores2 == null) {
      let obj = stateFromStores1;
      if (stateFromStores1 == null) {
        obj = {};
      }
      const obj2 = {};
      const merged = Object.assign(obj);
      tmp = obj2;
    }
    return tmp;
  }, items6);
  const items7 = [memo1];
  const items8 = [tmp8, memo1];
  const memo2 = obj2.useMemo(() => Object.keys(memo1).length, items7);
  const memo3 = obj2.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      tmp2 = null;
      if (null != memo1) {
        const obj = _modDef12;
        tmp2 = !obj.isEqual(tmp, tmp3);
      }
    }
    return tmp2;
  }, items8);
  const items9 = [arg1, memo3, tmp7];
  const effect = obj2.useEffect(() => {
    if (closure_5 === closure_1) {
      const obj = IntegrationSettingsActionCreatorsDefault;
      if (memo3) {
        const result = obj.startEditingCommandPermissions(tmp);
      } else {
        const result1 = obj.stopEditingCommandPermissions(tmp);
      }
    }
  }, items9);
  let obj5 = {
    originalApplicationPermissions: memo,
    originalCommandPermissions: stateFromStores1,
    editedTargetPermissions: obj2.useMemo(() => {
      let tmp7;
      let tmp8;
      id = stateFromStores3.id;
      const obj2 = {};
      const obj = closure_0(stateFromStores3[12]);
      const allChannelsSentinelResult = obj.allChannelsSentinel(stateFromStores3.id);
      const entries = Object.entries(memo1);
      const tmp3 = entries[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp6 = stateFromStores(tmp4, 2);
        [tmp7, tmp8] = tmp6;
        let tmp9 = tmp8;
        let flag = false;
        let flag2 = false;
        let type = tmp8.type;
        let tmp11 = closure_0;
        let tmp13 = stateFromStores3;
        if (closure_0(stateFromStores3[14]).ApplicationCommandPermissionType.CHANNEL === type) {
          let canResult = tmp9.id === allChannelsSentinelResult;
          let tmp39 = stateFromStoresObject[tmp9.id];
          if (!canResult) {
            canResult = memo3.can(constants.VIEW_CHANNEL, tmp39);
          }
          flag = canResult;
          flag2 = true;
        } else if (tmp11(tmp13[14]).ApplicationCommandPermissionType.ROLE === type) {
          let tmp26 = tmp9.id === id;
          let tmp29 = stateFromStoresObject1[tmp9.id];
          let tmp27 = tmp26;
          if (!tmp27) {
            tmp26 = null != tmp29;
          }
          flag = tmp26;
          let isRoleHigherResult = closure_4 || tmp27;
          if (!isRoleHigherResult) {
            isRoleHigherResult = memo3.isRoleHigher(stateFromStores3, stateFromStores4, tmp29);
          }
          flag2 = isRoleHigherResult;
        } else if (tmp11(tmp13[14]).ApplicationCommandPermissionType.USER === type) {
          let tmp17 = stateFromStoresObject2[tmp9.id];
          flag = null != tmp17;
          let tmp19 = null != tmp17;
          if (tmp19) {
            let canManageUserResult = closure_4;
            if (!canManageUserResult) {
              canManageUserResult = memo3.canManageUser(constants.USE_APPLICATION_COMMANDS, tmp18, stateFromStores3);
            }
            tmp19 = canManageUserResult;
          }
          flag2 = tmp19;
        } else {
          let type2 = tmp9.type;
        }
        let obj3 = { canRead: flag, canWrite: flag2 };
        let merged = Object.assign(tmp9);
        obj2[tmp7] = obj3;
        continue;
      }
      return obj2;
    }, items22),
    hasChanges: memo3,
    selectedPermissionCount: memo2
  };
  _require = id;
  const items10 = [memo1];
  const items11 = [id];
  const tmpResult = tmp(504);
  const stateFromStores3 = tmpResult.useStateFromStores(items10, () => memo1.getGuild(closure_0), items11);
  let tmp14 = _modDef38(null != stateFromStores3, "guild must be present to be editing its integration settings");
  const items12 = [memo3];
  const items13 = [stateFromStores3];
  const tmpResult6 = tmp(504);
  const stateFromStores4 = tmpResult6.useStateFromStores(items12, () => memo3.getHighestRole(stateFromStores3), items13);
  const items14 = [UserStore];
  const tmpResult7 = tmp(504);
  const stateFromStores5 = tmpResult7.useStateFromStores(items14, () => {
    currentUser = currentUser.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let tmp17 = _modDef38(null != stateFromStores5, "useComputePermissions: currentUserId must not be null");
  const tmp18 = stateFromStores5 === stateFromStores3.ownerId;
  let closure_4 = tmp18;
  const items15 = [memo1];
  const memo4 = obj2.useMemo(() => {
    channelIds = [];
    roleIds = [];
    userIds = [];
    const values = Object.values(memo1);
    for (const item10013 of values) {
      let tmp2 = item10013;
      let type = item10013.type;
      let tmp3 = id;
      let tmp4 = stateFromStores3;
      if (id(stateFromStores3[14]).ApplicationCommandPermissionType.CHANNEL === type) {
        let arr = channelIds.push(tmp2.id);
      } else if (tmp3(tmp4[14]).ApplicationCommandPermissionType.ROLE === type) {
        let arr2 = roleIds.push(tmp2.id);
      } else if (tmp3(tmp4[14]).ApplicationCommandPermissionType.USER === type) {
        let arr3 = userIds.push(tmp2.id);
      } else {
        let type2 = tmp2.type;
      }
      continue;
    }
    return { channelIds, roleIds, userIds };
  }, items15);
  let channelIds = memo4.channelIds;
  let roleIds = memo4.roleIds;
  let userIds = memo4.userIds;
  const items16 = [closure_5];
  const items17 = [channelIds];
  const tmpResult8 = tmp(504);
  const stateFromStoresObject = tmpResult8.useStateFromStoresObject(items16, () => {
    const mapped = channelIds.map(channelIds.getChannel);
    const found = mapped.filter(id(stateFromStores3[16]).isNotNullish);
    return fromEntries(found.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }, items17);
  const items18 = [stateFromStores1];
  const items19 = [roleIds, id];
  const tmpResult9 = tmp(504);
  const stateFromStoresObject1 = tmpResult9.useStateFromStoresObject(items18, () => {
    const mapped = roleIds.map((item) => roleIds.getRole(closure_1_0, item));
    const found = mapped.filter(id(stateFromStores3[16]).isNotNullish);
    return fromEntries(found.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }, items19);
  const items20 = [UserStore];
  const items21 = [userIds];
  const tmpResult10 = tmp(504);
  const stateFromStoresObject2 = tmpResult10.useStateFromStoresObject(items20, () => {
    const mapped = userIds.map(currentUser.getUser);
    const found = mapped.filter(id(stateFromStores3[16]).isNotNullish);
    return fromEntries(found.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }, items21);
  items22 = [stateFromStoresObject, stateFromStores3, stateFromStores4, tmp18, memo1, stateFromStoresObject1, stateFromStoresObject2];
  return obj5;
};
