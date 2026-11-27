// Module ID: 20071
// Function ID: 20072
// Name: IntegrationPermissionActionCreators
// Dependencies: [5, 1071, 572, 1285, 8181, 12, 8185, 5695, 8184, 2]
// Exports: clearIntegrationPermissions, editPermissions, getApplicationCommandPermissions, getApplicationCommands, initIntegrationPermissions, resetPermissions, saveApplicationPermissions, saveCommandPermissions

// Module 20071 (IntegrationPermissionActionCreators)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, body, closure_4, dispatch, status;

let obj = function _getApplicationCommandPermissions() {
  obj = _asyncToGenerator(async (applicationId, guildId, commandId) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj10;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let permissions;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              permissions = [];
              c6 = 1;
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              const obj5 = { url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(applicationId, guildId, commandId), rejectWithError: obj10.rejectWithMigratedError() };
              c7 = 2;
              c8 = 1;
              obj10 = require("HTTPUtils");
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              if (404 !== status.status) {
                const obj7 = { type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE", applicationId, commandId, guildId };
                const obj3 = closure_132_1(closure_132_3[2]);
                obj3.dispatch(obj7);
                c8 = 3;
                return { value: undefined, done: true };
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              permissions = value.body.permissions;
              c6 = 0;
            }
            dispatch = closure_132_1(closure_132_3[2]).dispatch;
            const obj9 = { type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE", applicationId, commandId, guildId, permissions };
            closure_132_1(closure_132_3[2]);
            dispatch(obj9);
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          status = tmp25;
          if (0 === c6) {
            c8 = 3;
            throw tmp25;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function updateApplicationCommandPermissions() {
  return obj(...arguments);
}
obj = function _updateApplicationCommandPermissions() {
  obj = _asyncToGenerator(async (applicationId) => {
    let closure_2;
    let commandId;
    let guildId;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c4;
      let c5;
      let tmp14;
      function removeDefaultSentinels(c4, c5, c2, c3) {
        const tmp = c2;
        if (tmp) {
          const tmp2 = c3;
          if (tmp2) {
            obj = {};
            obj[c4] = c2;
            obj[applicationId(closure_1_3[8]).allChannelsSentinel(c4)] = c3;
            applicationId(closure_1_3[8]);
            return c5.filter((id) => {
              if (id.id in obj) {
                return id.permission !== tmp[id.id];
              } else {
                return true;
              }
            });
          }
        }
        return c5;
      }
      if (commandId === applicationId) {
        tmp14 = removeDefaultSentinels(guildId, c5, c2, c3);
      } else {
        tmp14 = c5;
      }
      let closure_6 = tmp14;
      const obj4 = closure_130_2(closure_130_3[4]);
      await obj4.updateApplicationGuildCommandPermissions(applicationId, guildId, commandId, closure_6);
      body = value;
      obj = closure_130_1(closure_130_3[2]);
      const obj8 = { type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE", applicationId, commandId, guildId, permissions: body.body.permissions };
      obj.dispatch(obj8);
      await "HermesInternal";
      ({ applicationId: c0, commandId: c1, defaultEveryoneValue: c2, defaultEverywhereValue: c3, guildId: c4, permissions: c5 } = closure_0);
      return "Path";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionActionCreators.tsx");

export function clearIntegrationPermissions() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
}
export function editPermissions(Button, applicationId, omitResult) {
  obj = DispatcherDefault;
  const obj2 = { applicationId: Button, commandId: applicationId, permissions: omitResult, type: "INTEGRATION_PERMISSION_SETTINGS_EDIT" };
  obj.dispatch(obj2);
}
export function getApplicationCommands(guildId, id) {
  _require = guildId;
  const applicationId = id;
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: Endpoints.GUILD_COMMANDS_FOR_APPLICATION(guildId, id), rejectWithError: true };
  const value = HTTP.get(obj);
  value.then((body) => {
    obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS", applicationId, commands: body.body.application_commands, guildId, permissions: body.body.permissions };
    obj.dispatch(obj2);
  }, () => {
    obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE", applicationId };
    obj.dispatch(obj2);
  });
}
export function getApplicationCommandPermissions() {
  return obj(...arguments);
}
export function initIntegrationPermissions(id) {
  obj = DispatcherDefault;
  const obj2 = { applicationId: id, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" };
  obj.dispatch(obj2);
}
export function resetPermissions(commandId) {
  obj = DispatcherDefault;
  const obj2 = { commandId, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" };
  obj.dispatch(obj2);
}
export function saveApplicationPermissions(applicationId, guildId, permissions) {
  obj = { applicationId, commandId: applicationId, defaultEveryoneValue: true, defaultEverywhereValue: true, guildId, permissions };
  return updateApplicationCommandPermissions(obj);
}
export function saveCommandPermissions(applicationId) {
  let command;
  let editedPermissions;
  let flag2;
  let guildId;
  let originalApplicationPermissions;
  let values;
  ({ command, editedPermissions, guildId, originalApplicationPermissions } = applicationId);
  applicationId = applicationId.applicationId;
  let permissions = command.permissions;
  const difference = _modDef12.difference;
  const _Object = Object;
  _modDef12;
  if (permissions == null) {
    permissions = {};
  }
  const keys1 = keys(permissions);
  const differenceResult = difference(keys1, Object.keys(editedPermissions));
  obj = {};
  const omit = tmp(12).omit;
  _modDef12;
  const merged = Object.assign(editedPermissions);
  const omitResult = omit(obj, differenceResult);
  const obj3 = IntegrationPermissionUtils;
  const toPermissionKeyResult = obj3.toPermissionKey(guildId, ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE);
  const toPermissionKey = IntegrationPermissionUtils.toPermissionKey;
  IntegrationPermissionUtils;
  let flag;
  const obj4 = ApplicationCommandUtils;
  const allChannelsSentinelResult = obj4.allChannelsSentinel(guildId);
  const tmp13 = updateApplicationCommandPermissions;
  const toPermissionKeyResult1 = toPermissionKey(allChannelsSentinelResult, ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL);
  if (originalApplicationPermissions[toPermissionKeyResult] != null) {
    flag = tmp14.permission;
  }
  if (flag == null) {
    flag = true;
  }
  const obj2 = { defaultEveryoneValue: flag, defaultEverywhereValue: flag2, applicationId, commandId: command.id, guildId, permissions: values.map((id) => ({ id: id.id, permission: id.permission, type: id.type })) };
  flag2 = undefined;
  if (originalApplicationPermissions[toPermissionKeyResult1] != null) {
    flag2 = tmp15.permission;
  }
  if (flag2 == null) {
    flag2 = true;
  }
  values = Object.values(omitResult);
  return tmp13(obj2);
}
