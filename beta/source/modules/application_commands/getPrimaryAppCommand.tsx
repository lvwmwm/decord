// Module ID: 8790
// Function ID: 8791
// Name: getPrimaryAppCommand
// Dependencies: [5, 19, 2045, 8591, 1979, 8599, 8595, 8505, 2]
// Exports: default, isPrimaryAppCommandUsableInAppDM, useGetPrimaryAppCommand, useIsPrimaryAppCommandUsableInAppDM, useQueryForPrimaryAppCommand

// Module 8790 (getPrimaryAppCommand)
import Server from "Server" /* 1979 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8505 */;
import ApplicationCommandIndexActionCreators from "ApplicationCommandIndexActionCreators" /* 8595 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 8599 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ApplicationCommandIndexStore_mod from "ApplicationCommandIndexStore" /* 8591 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, channel;

let hasOwnProperty;
let metroRequire;
let obj = function _getPrimaryAppCommand() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let closure_0 = arg0;
    applicationId = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            closure_0 = applicationId;
            channel = undefined;
            channel = channel.getChannel(closure_0);
            value = undefined;
            let tmp12 = null != channel;
            if (tmp12) {
              const obj4 = { channel, type: "channel" };
              const tmp11 = queryForPrimaryAppCommand(obj4, applicationId);
              value = tmp11;
              tmp12 = null == tmp11;
            }
            if (tmp12) {
              const obj5 = { type: "application", applicationId };
              c4 = 1;
              c5 = 1;
              const obj6 = { value: hasOwnProperty(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          obj = { channel, type: "channel" };
          value = closure_131_11(obj, closure_0);
        }
        if (null != value) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(closure_131_8);
          throw error;
        }
      } catch (tmp23) {
        c5 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
function queryForPrimaryAppCommand(withAffinitySuggestions, id) {
  const query = ApplicationCommandIndexStore.query;
  obj = { commandTypes: items };
  items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
  const obj2 = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  return query(withAffinitySuggestions, obj, obj2).commands[0];
}
let ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
({ getOrFetchApplicationCommandIndexForTarget: hasOwnProperty, useQueryState: metroRequire } = ApplicationCommandIndexStore);
ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
let c8 = "no primary app command for application";
let items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
const result = size.fileFinishedImporting("modules/application_commands/getPrimaryAppCommand.tsx");

export default function getPrimaryAppCommand() {
  return obj(...arguments);
};
export const NO_PRIMARY_APP_COMMAND_ERROR = "no primary app command for application";
export { queryForPrimaryAppCommand };
export const useGetPrimaryAppCommand = function useGetPrimaryAppCommand(context, id) {
  let loading;
  _require = id;
  obj = { commandTypes: items };
  const obj2 = { placeholderCount: 1, scoreMethod: require("ApplicationCommandQueryTypes").ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  const tmp = closure_6(context, obj, obj2);
  loading = tmp.loading;
  const first = tmp.commands[0];
  let closure_2 = tmp3;
  items = [id, null != first, loading];
  const effect = react.useEffect(() => {
    const tmp = closure_2 || loading;
    if (!tmp) {
      const obj2 = { type: "application", applicationId };
      obj = ApplicationCommandIndexActionCreators;
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj2);
    }
  }, items);
  return first;
};
export const useQueryForPrimaryAppCommand = function useQueryForPrimaryAppCommand(arg0, applicationId) {
  obj = { commandTypes: items };
  const obj2 = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  return metroRequire(arg0, obj, obj2);
};
export const useIsPrimaryAppCommandUsableInAppDM = function useIsPrimaryAppCommandUsableInAppDM(applicationId) {
  let botUserId;
  let context;
  applicationId = applicationId.applicationId;
  let loading;
  obj = { commandTypes: items };
  let obj2 = { placeholderCount: 1, scoreMethod: applicationId(loading[5]).ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  let tmp = applicationId;
  ({ context, botUserId } = applicationId);
  const tmp3 = closure_6(context, obj, obj2);
  loading = tmp3.loading;
  const first = tmp3.commands[0];
  let closure_2 = tmp5;
  items = [applicationId, null != first, loading];
  const effect = react.useEffect(() => {
    const tmp = closure_2 || loading;
    if (!tmp) {
      const obj2 = { type: "application", applicationId };
      obj = ApplicationCommandIndexActionCreators;
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj2);
    }
  }, items);
  let tmp7 = null != first;
  if (tmp7) {
    let tmp8 = null != botUserId;
    if (tmp8) {
      let flag = false;
      if (null != first) {
        let hasItem = null != first.integration_types;
        if (hasItem) {
          const integration_types = first.integration_types;
          hasItem = integration_types.includes(tmp(tmp2[7]).ApplicationIntegrationType.USER_INSTALL);
        }
        let hasItem1 = null != first.contexts;
        if (hasItem1) {
          const contexts = first.contexts;
          hasItem1 = contexts.includes(tmp(tmp2[4]).InteractionContextType.BOT_DM);
        }
        if (hasItem) {
          hasItem = hasItem1;
        }
        flag = hasItem;
      }
      tmp8 = flag;
    }
    tmp7 = tmp8;
  }
  return tmp7;
};
export const isPrimaryAppCommandUsableInAppDM = function isPrimaryAppCommandUsableInAppDM(integration_types) {
  if (null == integration_types) {
    return false;
  } else {
    let hasItem = null != integration_types.integration_types;
    if (hasItem) {
      integration_types = integration_types.integration_types;
      hasItem = integration_types.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
    }
    let hasItem1 = null != integration_types.contexts;
    if (hasItem1) {
      const contexts = integration_types.contexts;
      hasItem1 = contexts.includes(Server.InteractionContextType.BOT_DM);
    }
    if (hasItem) {
      hasItem = hasItem1;
    }
    return hasItem;
  }
};
