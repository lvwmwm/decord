// Module ID: 10859
// Function ID: 84263
// Name: _getPrimaryAppCommand
// Dependencies: [5, 31, 1348, 8007, 1881, 8015, 8011, 8224, 2]
// Exports: default, useIsPrimaryAppCommandUsableInAppDM

// Module 10859 (_getPrimaryAppCommand)
import ScoreMethod from "ScoreMethod";
import result from "result";
import closure_4 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

let closure_5;
let closure_6;
const require = arg1;
function _getPrimaryAppCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function queryForPrimaryAppCommand(outer1_0, id) {
  let obj = {};
  const items = [require(1881) /* PermissionOverwriteType */.ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items;
  obj = { placeholderCount: 1, scoreMethod: require(8015) /* ScoreMethod */.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  return closure_7.query(outer1_0, obj, obj).commands[0];
}
function useGetPrimaryAppCommand(context, applicationId) {
  let closure_0 = applicationId;
  let tmp = useQueryForPrimaryAppCommand(context, applicationId);
  const loading = tmp.loading;
  const first = tmp.commands[0];
  let ScoreMethod = tmp3;
  const items = [applicationId, null != first, loading];
  const effect = React.useEffect(() => {
    let tmp = ScoreMethod;
    if (!ScoreMethod) {
      tmp = loading;
    }
    if (!tmp) {
      let obj = applicationId(loading[6]);
      obj = { type: "application", applicationId };
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
    }
  }, items);
  return first;
}
function useQueryForPrimaryAppCommand(context, applicationId) {
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: require(8015) /* ScoreMethod */.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  return callback2(context, obj, obj);
}
function isPrimaryAppCommandUsableInAppDM(integration_types) {
  if (null == integration_types) {
    return false;
  } else {
    let hasItem = null != integration_types.integration_types;
    if (hasItem) {
      integration_types = integration_types.integration_types;
      hasItem = integration_types.includes(require(8224) /* ApplicationIntegrationType */.ApplicationIntegrationType.USER_INSTALL);
    }
    let hasItem1 = null != integration_types.contexts;
    if (hasItem1) {
      const contexts = integration_types.contexts;
      hasItem1 = contexts.includes(require(1881) /* PermissionOverwriteType */.InteractionContextType.BOT_DM);
    }
    if (hasItem) {
      hasItem = hasItem1;
    }
    return hasItem;
  }
}
({ getOrFetchApplicationCommandIndexForTarget: closure_5, useQueryState: closure_6 } = _isNativeReflectConstruct);
let c8 = "no primary app command for application";
let items = [require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/getPrimaryAppCommand.tsx");

export default function getPrimaryAppCommand() {
  return _getPrimaryAppCommand(...arguments);
};
export const NO_PRIMARY_APP_COMMAND_ERROR = "no primary app command for application";
export { queryForPrimaryAppCommand };
export { useGetPrimaryAppCommand };
export { useQueryForPrimaryAppCommand };
export const useIsPrimaryAppCommandUsableInAppDM = function useIsPrimaryAppCommandUsableInAppDM(context) {
  const tmp = useGetPrimaryAppCommand(context.context, context.applicationId);
  let tmp2 = null != tmp;
  if (tmp2) {
    let tmp3 = null != context.botUserId;
    if (tmp3) {
      tmp3 = isPrimaryAppCommandUsableInAppDM(tmp);
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
export { isPrimaryAppCommandUsableInAppDM };
