// Module ID: 6744
// Function ID: 52498
// Name: AutomodAlertActionType
// Dependencies: []
// Exports: parseAlertActionsExecution

// Module 6744 (AutomodAlertActionType)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_automod/AutomodAlert.tsx");

export const AutomodAlertActionType = { SET_COMPLETED: 1, [1]: "SET_COMPLETED", UNSET_COMPLETED: 2, [2]: "UNSET_COMPLETED", DELETE_USER_MESSAGE: 3, [3]: "DELETE_USER_MESSAGE", SUBMIT_FEEDBACK: 4, [4]: "SUBMIT_FEEDBACK" };
export const parseAlertActionsExecution = function parseAlertActionsExecution(arg0) {
  if (null == arg0) {
    return null;
  } else {
    let parsed = null;
    if (null != arg0) {
      const _JSON = JSON;
      parsed = JSON.parse(arg0);
    }
    while (true) {
      let tmp4 = null;
      if (null == parsed) {
        break;
      } else {
        tmp4 = null;
        if (null == parsed.actions) {
          break;
        } else {
          let tmp5 = globalThis;
          let _Object = Object;
          let keys = Object.keys(parsed.actions);
          let item = keys.forEach((actionType) => {
            parsed.actions[actionType].actionType = actionType;
          });
          tmp4 = parsed;
          // break
        }
      }
      return tmp4;
    }
  }
};
