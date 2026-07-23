// Module ID: 7794
// Function ID: 62186
// Name: isInteractionComponent
// Dependencies: [57, 31, 7629, 3759, 1348, 1917, 4946, 1849, 7795, 33, 1881, 4359, 4357, 566, 7664, 5650, 7797, 7798, 686, 4559, 4353, 2]
// Exports: ComponentStateContextProvider, useComponentContainerId, useComponentError, useComponentState, useComponentStateContext

// Module 7794 (isInteractionComponent)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function isInteractionComponent(type) {
  type = type.type;
  if (require(1881) /* PermissionOverwriteType */.ComponentType.BUTTON === type) {
    return type.style !== require(1881) /* PermissionOverwriteType */.ButtonStyle.LINK;
  } else {
    if (require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT !== type) {
      if (require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
        if (require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
          if (require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
            if (require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
              if (require(1881) /* PermissionOverwriteType */.ComponentType.ACTION_ROW !== type) {
                const TEXT_INPUT = require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT;
              }
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
function getActionComponentState(interaction, id, shouldDisableInteractiveComponents) {
  let flag = shouldDisableInteractiveComponents;
  if (shouldDisableInteractiveComponents === undefined) {
    flag = false;
  }
  let LOADING = require(4359) /* ActionComponentState */.ActionComponentState.NORMAL;
  let tmp = null != interaction;
  if (tmp) {
    tmp = interaction.state !== require(4357) /* InteractionState */.InteractionState.FAILED;
  }
  let DISABLED = LOADING;
  if (!tmp) {
    if (flag) {
      flag = isInteractionComponent(id);
    }
    if (flag) {
      DISABLED = require(4359) /* ActionComponentState */.ActionComponentState.DISABLED;
    }
    return DISABLED;
  } else {
    if (interaction.data.interactionType !== require(1881) /* PermissionOverwriteType */.InteractionTypes.MESSAGE_COMPONENT) {
      if (isInteractionComponent(id)) {
        LOADING = require(4359) /* ActionComponentState */.ActionComponentState.DISABLED;
      }
    }
    LOADING = require(4359) /* ActionComponentState */.ActionComponentState.LOADING;
  }
}
function getApplicationWidgetContainerId(applicationId) {
  return "app-widget-" + applicationId.applicationId;
}
function useShouldDisableInteractiveComponents(channel_id) {
  channel = channel.getChannel(channel_id);
  const items = [closure_9];
  const items1 = [channel];
  const stateFromStores = channel(566).useStateFromStores(items, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = outer1_9.canChatInGuild(channel.guild_id);
    }
    return canChatInGuildResult;
  }, items1);
  const obj2 = channel(566);
  const items2 = [closure_6];
  const items3 = [channel];
  const stateFromStores1 = channel(566).useStateFromStores(items2, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = outer1_6.isLurking(channel.guild_id);
    }
    return isLurkingResult;
  }, items3);
  const obj3 = channel(566);
  const items4 = [closure_8, closure_10];
  const stateFromStores2 = channel(566).useStateFromStores(items4, () => {
    const currentUser = outer1_10.getCurrentUser();
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let tmp4 = null;
    if (null != guild_id) {
      tmp4 = null;
      if (null != currentUser) {
        let guild_id1;
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        const member = outer1_8.getMember(guild_id1, currentUser.id);
        let isPending;
        if (null != member) {
          isPending = member.isPending;
        }
        tmp4 = isPending;
      }
    }
    return null != tmp4 && tmp4;
  });
  const obj4 = channel(566);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const obj5 = channel(7664);
  const isThreadModerator = channel(5650).useIsThreadModerator(channel);
  const obj6 = channel(5650);
  let tmp7 = !stateFromStores;
  const canUnarchiveThread = channel(5650).useCanUnarchiveThread(channel);
  if (!tmp7) {
    tmp7 = stateFromStores1;
  }
  if (!tmp7) {
    tmp7 = stateFromStores2;
  }
  if (!tmp7) {
    tmp7 = null != channel && channel.isLockedThread() && !isThreadModerator;
    const tmp8 = null != channel && channel.isLockedThread() && !isThreadModerator;
  }
  if (!tmp7) {
    tmp7 = null != channel && channel.isArchivedThread() && !canUnarchiveThread;
    const tmp9 = null != channel && channel.isArchivedThread() && !canUnarchiveThread;
  }
  if (!tmp7) {
    tmp7 = callback(obj5.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
  }
  return tmp7;
}
function useComponentValidatorState(id, stateFromStores) {
  let closure_0 = id;
  let closure_1 = stateFromStores;
  const context = importAllResult.useContext(closure_13);
  const items = [id, context];
  const callback = importAllResult.useCallback((arg0) => {
    let str = "message";
    if (null != context.modal) {
      str = "modal";
    }
    const tmpResult = stateFromStores(context[16])(closure_0, arg0, str);
    closure_0 = tmpResult;
    if (null != context.setValidationErrors) {
      context.setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmpResult.id] = tmpResult;
        return obj;
      });
    }
    return null == tmpResult;
  }, items);
  const items1 = [context.validators, callback, stateFromStores, id.id];
  const effect = importAllResult.useEffect(() => {
    function currentValidate() {
      return outer1_3(outer1_1);
    }
    let validators = context.validators;
    if (null != validators) {
      validators.add(currentValidate);
    }
    return () => {
      const validators = outer1_2.validators;
      if (null != validators) {
        validators.delete(currentValidate);
      }
    };
  }, items1);
  let obj = {};
  const validationErrors = context.validationErrors;
  let tmp4;
  if (null != validationErrors) {
    tmp4 = validationErrors[id.id];
  }
  let tmp5 = null;
  if (null != tmp4) {
    tmp5 = tmp4;
  }
  obj.error = tmp5;
  obj.validate = callback;
  return obj;
}
function useComponentStateForMessage(channel_id, arg1, type) {
  const _require = channel_id;
  let closure_1 = type;
  let obj = _require(validate[13]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getInteractionComponentState(channel_id.id, type.id));
  const items1 = [_isNativeReflectConstruct];
  const items2 = [channel_id];
  const stateFromStores1 = _require(validate[13]).useStateFromStores(items1, () => outer1_5.getInteraction(closure_0), items2);
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  const tmp4 = useComponentValidatorState(type, stateFromStores);
  validate = tmp4.validate;
  let id = channel_id.applicationId;
  if (null == id) {
    id = channel_id.author.id;
  }
  obj = {
    state: stateFromStores,
    executeStateUpdate: importAllResult.useCallback((localState) => {
      if (validate(localState)) {
        const channel = outer1_7.getChannel(channel_id.channel_id);
        let tmp5 = null != channel;
        if (tmp5) {
          tmp5 = null != type.customId;
        }
        if (tmp5) {
          let obj = channel_id(validate[17]);
          obj = { componentType: type.type };
          ({ id: obj2.messageId, flags: obj2.messageFlags } = channel_id);
          ({ customId: obj2.customId, id: obj2.componentId } = type);
          obj.applicationId = id;
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          obj.localState = localState;
          const result = obj.executeMessageComponentInteraction(obj);
        }
        return true;
      } else {
        return false;
      }
    }, items3)
  };
  items3 = [, , , , , , , ];
  ({ channel_id: arr4[0], flags: arr4[1], id: arr4[2] } = channel_id);
  ({ customId: arr4[3], type: arr4[4], id: arr4[5] } = type);
  items3[6] = id;
  items3[7] = validate;
  let tmp5 = tmp3;
  if (tmp3) {
    tmp5 = isInteractionComponent(type);
  }
  obj.isDisabled = tmp5;
  obj.visualState = getActionComponentState(stateFromStores1, type, tmp3);
  obj.error = tmp4.error;
  return obj;
}
function useComponentStateForModal(customId, id) {
  const _require = customId;
  const importDefault = id;
  const dependencyMap = arg2;
  let obj = _require(566);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getInteractionComponentState(customId.customId, id.id));
  let first = stateFromStores(validate.useState(arg2), 1)[0];
  const tmp3 = useComponentValidatorState(id, stateFromStores);
  validate = tmp3.validate;
  const items1 = [customId.customId, id.id, validate];
  const callback = validate.useCallback((state) => {
    let tmp = null == state;
    if (!tmp) {
      let obj = id(table[18]);
      obj = { type: "SET_INTERACTION_COMPONENT_STATE", rootContainerId: customId.customId, componentId: id.id, state };
      obj.dispatch(obj);
      tmp = validate(state);
    }
    return tmp;
  }, items1);
  importDefault(4559)(() => {
    if (null == stateFromStores) {
      callback(closure_2);
    }
  });
  obj = {};
  if (null != stateFromStores) {
    first = stateFromStores;
  }
  let tmp6 = null;
  if (null != first) {
    tmp6 = first;
  }
  obj.state = tmp6;
  obj.executeStateUpdate = callback;
  obj.isDisabled = false;
  obj.visualState = _require(4359).ActionComponentState.NORMAL;
  obj.error = tmp3.error;
  return obj;
}
function getParentsNotSupported(arg0) {
  const ApplicationWidget = "ApplicationWidget";
  return () => {
    const error = new Error("" + ApplicationWidget + " does not support parents");
    throw error;
  };
}
let context = importAllResult.createContext(null);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export { useShouldDisableInteractiveComponents };
export const ComponentStateContextProvider = function ComponentStateContextProvider(children) {
  const message = children.message;
  const modal = children.modal;
  const applicationWidget = children.applicationWidget;
  const validators = children.validators;
  const validationErrors = children.validationErrors;
  const setValidationErrors = children.setValidationErrors;
  let flag = children.shouldDisableInteractiveComponents;
  if (flag === undefined) {
    flag = false;
  }
  const items = [message, modal, applicationWidget, flag, validators, validationErrors, setValidationErrors];
  return <redux.Provider value={validationErrors.useMemo(() => {
    if (null != ApplicationWidget) {
      let obj = { useComponentState: outer1_19.bind(null, ApplicationWidget, flag) };
      ({ channel_id: obj3.channelId, id: obj3.containerId } = ApplicationWidget);
      obj.message = ApplicationWidget;
      obj.validators = validators;
      obj.getParents = function getParents(arg0) {
        return message(applicationWidget[20]).getParents(ApplicationWidget.components, arg0);
      };
      return obj;
    } else if (null != modal) {
      obj = { useComponentState: outer1_20.bind(null, modal) };
      ({ channelId: obj2.channelId, customId: obj2.containerId } = modal);
      obj.modal = modal;
      obj.validators = validators;
      obj.validationErrors = validationErrors;
      obj.setValidationErrors = setValidationErrors;
      obj.getParents = function getParents(arg0) {
        return message(applicationWidget[20]).getParents(outer1_1.components, arg0);
      };
      return obj;
    } else if (null != applicationWidget) {
      obj = {};
      ApplicationWidget = "ApplicationWidget";
      obj.useComponentState = () => {
        const error = new Error("" + ApplicationWidget + " does not support state");
        throw error;
      };
      obj.containerId = outer1_16(applicationWidget);
      obj.applicationWidget = applicationWidget;
      obj.validators = validators;
      obj.validationErrors = validationErrors;
      obj.setValidationErrors = setValidationErrors;
      obj.getParents = outer1_21("ApplicationWidget");
      return obj;
    } else {
      const _Error = Error;
      let error = new Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
      throw error;
    }
  }, items)}>{arg0.children}</redux.Provider>;
};
export const useComponentState = function useComponentState(type, arg1) {
  const context = importAllResult.useContext(closure_13);
  return context.useComponentState(type, arg1);
};
export const useComponentStateContext = function useComponentStateContext() {
  return importAllResult.useContext(closure_13);
};
export const useComponentContainerId = function useComponentContainerId() {
  return importAllResult.useContext(closure_13).containerId;
};
export const useComponentError = function useComponentError(component) {
  const validationErrors = importAllResult.useContext(closure_13).validationErrors;
  let tmp;
  if (null != validationErrors) {
    tmp = validationErrors[component.id];
  }
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = tmp;
  }
  return tmp3;
};
