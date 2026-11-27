// Module ID: 20068
// Function ID: 20069
// Name: IntegrationPermissionStore
// Dependencies: [8184, 8185, 504, 572, 2]

// Module 20068 (IntegrationPermissionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import IntegrationPermissionUtils from "IntegrationPermissionUtils" /* 8185 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3, obj2;

function handleClear() {
  applicationId = undefined;
  closure_3 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = false;
}
let c7 = false;
const Store = get_initializedDefault.Store;
class IntegrationPermissionStore extends Store {
  getApplicationPermissions() {
    return closure_3;
  }
  getCommands() {
    return obj2;
  }
  getCommand(commandId) {
    let tmp2;
    if (obj2 != null) {
      tmp2 = tmp[commandId];
    }
    return tmp2;
  }
  getEditedApplication() {
    return c5;
  }
  getEditedCommand() {
    return c6;
  }
  isUnavailable() {
    return c7;
  }
  getApplicationId() {
    return applicationId;
  }
}
const prototype = IntegrationPermissionStore.prototype;
IntegrationPermissionStore.displayName = "IntegrationPermissionStore";
let obj = {
  LOGOUT: handleClear,
  INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function handleIntegrationPermissionSettingsApplicationPermissionsFetchFailure(applicationId) {
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else {
      c7 = true;
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_CLEAR: handleClear,
  INTEGRATION_PERMISSION_SETTINGS_INIT: function handleInit(applicationId) {
    closure_3 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = false;
    applicationId = applicationId.applicationId;
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function handleIntegrationPermissionSettingsCommandUpdate(applicationId) {
    let commandId;
    let obj3;
    let permissions;
    ({ commandId, permissions } = applicationId);
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else if (commandId !== tmp) {
      if (null != obj2) {
        if (null != tmp5) {
          obj2 = { permissions: obj3.keyPermissions(permissions) };
          const merged = Object.assign(tmp5);
          obj2[commandId] = obj2;
          obj3 = IntegrationPermissionUtils;
        }
      }
      return false;
    } else {
      const obj = IntegrationPermissionUtils;
      closure_3 = obj.keyPermissions(permissions);
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_EDIT: function handleIntegrationPermissionSettingsEdit(applicationId) {
    let commandId;
    let permissions;
    ({ commandId, permissions } = applicationId);
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else if (commandId === tmp) {
      c5 = permissions;
    } else {
      c6 = { commandId, permissions };
      const obj = { commandId, permissions };
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_RESET: function handleIntegrationPermissionSettingsReset(commandId) {
    if (null == commandId.commandId) {
      c5 = undefined;
    } else {
      c6 = undefined;
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function handleIntegrationPermissionSettingsCommandsFetchFailure(applicationId) {
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else {
      c7 = true;
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function handleIntegrationPermissionSettingsCommandsFetchSuccess(applicationId) {
    let commands;
    let permissions;
    ({ commands, permissions } = applicationId);
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else {
      const _Object = Object;
      obj2 = {};
      const fromEntriesResult = Object.fromEntries(permissions.map((item) => {
        const items = [, ];
        ({ id: arr[0], permissions: arr[1] } = item);
        return items;
      }));
      const iter = commands[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (nextResult.application_id === applicationId) {
          let tmp6 = require;
          let obj = ApplicationCommandUtils;
          let obj3 = { rootCommand: tmp4, command: tmp4, applicationId: tmp4.application_id };
          let command = obj.buildCommand(obj3);
          let tmp10 = fromEntriesResult[tmp4.id];
          if (null != tmp10) {
            let tmp6Result = tmp6(8185);
            command.permissions = tmp6Result.keyPermissions(tmp11);
          }
          obj2[tmp4.id] = command;
        }
        continue;
      }
    }
  }
};
const integrationPermissionStore = new IntegrationPermissionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionStore.tsx");

export default integrationPermissionStore;
