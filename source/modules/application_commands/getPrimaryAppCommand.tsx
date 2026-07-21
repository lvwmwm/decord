// Module ID: 10819
// Function ID: 84009
// Name: _getPrimaryAppCommand
// Dependencies: []
// Exports: default, useIsPrimaryAppCommandUsableInAppDM

// Module 10819 (_getPrimaryAppCommand)
function _getPrimaryAppCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getPrimaryAppCommand = obj;
  return obj(...arguments);
}
function queryForPrimaryAppCommand(closure_0, id) {
  let obj = {};
  const items = [id(dependencyMap[4]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items;
  obj = { <string:4199657057>: "100%", <string:3821364133>: "hidden", <string:1393906828>: "flex-end", <string:3980691200>: "row", <string:3595885077>: "center", scoreMethod: id(dependencyMap[5]).ScoreMethod.COMMAND_ONLY, applicationId: id };
  return closure_7.query(closure_0, obj, obj).commands[0];
}
function useGetPrimaryAppCommand(context, applicationId) {
  const tmp = useQueryForPrimaryAppCommand(context, applicationId);
  const loading = tmp.loading;
  const dependencyMap = loading;
  const first = tmp.commands[0];
  let closure_2 = tmp3;
  const items = [applicationId, null != first, loading];
  const effect = React.useEffect(() => {
    let tmp = tmp3;
    if (!tmp3) {
      tmp = loading;
    }
    if (!tmp) {
      let obj = arg1(loading[6]);
      obj = { type: "application", applicationId: arg1 };
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
    }
  }, items);
  return first;
}
function useQueryForPrimaryAppCommand(context, applicationId) {
  let obj = { commandTypes: items };
  obj = { <string:4199657057>: "100%", <string:3821364133>: "hidden", <string:1393906828>: "flex-end", <string:3980691200>: "row", <string:3595885077>: "center", scoreMethod: applicationId(dependencyMap[5]).ScoreMethod.COMMAND_ONLY, applicationId };
  return callback2(context, obj, obj);
}
function isPrimaryAppCommandUsableInAppDM(integration_types) {
  if (null == integration_types) {
    return false;
  } else {
    let hasItem = null != integration_types.integration_types;
    if (hasItem) {
      integration_types = integration_types.integration_types;
      hasItem = integration_types.includes(arg1(dependencyMap[7]).ApplicationIntegrationType.USER_INSTALL);
    }
    let hasItem1 = null != integration_types.contexts;
    if (hasItem1) {
      const contexts = integration_types.contexts;
      hasItem1 = contexts.includes(arg1(dependencyMap[4]).InteractionContextType.BOT_DM);
    }
    if (hasItem) {
      hasItem = hasItem1;
    }
    return hasItem;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ getOrFetchApplicationCommandIndexForTarget: closure_5, useQueryState: closure_6 } = arg1(dependencyMap[3]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = "no primary app command for application";
const items = [arg1(dependencyMap[4]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/application_commands/getPrimaryAppCommand.tsx");

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
