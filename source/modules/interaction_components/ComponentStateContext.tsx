// Module ID: 7787
// Function ID: 62126
// Name: isInteractionComponent
// Dependencies: [7788, 1881, 2, 1348, 1917, 1910, 1838, 3765, 1849, 7788, 1881, 5245, 4315, 4355, 4316, 7796, 1327, 2, 1348, 1910, 1838, 1849]
// Exports: ComponentStateContextProvider, useComponentContainerId, useComponentError, useComponentState, useComponentStateContext

// Module 7787 (isInteractionComponent)
import closure_3 from "_isNativeReflectConstruct";
import importAllResult from "PermissionOverwriteType";
import result2 from "result2";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { jsx } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function isInteractionComponent(type) {
  type = type.type;
  if (arg1(dependencyMap[10]).ComponentType.BUTTON === type) {
    return type.style !== arg1(dependencyMap[10]).ButtonStyle.LINK;
  } else {
    if (arg1(dependencyMap[10]).ComponentType.STRING_SELECT !== type) {
      if (arg1(dependencyMap[10]).ComponentType.USER_SELECT !== type) {
        if (arg1(dependencyMap[10]).ComponentType.ROLE_SELECT !== type) {
          if (arg1(dependencyMap[10]).ComponentType.MENTIONABLE_SELECT !== type) {
            if (arg1(dependencyMap[10]).ComponentType.CHANNEL_SELECT !== type) {
              if (arg1(dependencyMap[10]).ComponentType.ACTION_ROW !== type) {
                const TEXT_INPUT = arg1(dependencyMap[10]).ComponentType.TEXT_INPUT;
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
  let LOADING = id(dependencyMap[11]).ActionComponentState.NORMAL;
  let tmp = null != interaction;
  if (tmp) {
    tmp = interaction.state !== id(dependencyMap[12]).InteractionState.FAILED;
  }
  let DISABLED = LOADING;
  if (!tmp) {
    if (flag) {
      flag = isInteractionComponent(id);
    }
    if (flag) {
      DISABLED = id(dependencyMap[11]).ActionComponentState.DISABLED;
    }
    return DISABLED;
  } else {
    if (interaction.data.interactionType !== id(dependencyMap[10]).InteractionTypes.MESSAGE_COMPONENT) {
      if (isInteractionComponent(id)) {
        LOADING = id(dependencyMap[11]).ActionComponentState.DISABLED;
      }
    }
    LOADING = id(dependencyMap[11]).ActionComponentState.LOADING;
  }
}
function getApplicationWidgetContainerId(applicationId) {
  return "app-widget-" + applicationId.applicationId;
}
function useShouldDisableInteractiveComponents(channel_id) {
  const channel = channel.getChannel(channel_id);
  const arg1 = channel;
  const items = [closure_9];
  const items1 = [channel];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = closure_9.canChatInGuild(channel.guild_id);
    }
    return canChatInGuildResult;
  }, items1);
  const obj2 = arg1(dependencyMap[13]);
  const items2 = [closure_6];
  const items3 = [channel];
  const stateFromStores1 = arg1(dependencyMap[13]).useStateFromStores(items2, () => {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = lurking.isLurking(channel.guild_id);
    }
    return isLurkingResult;
  }, items3);
  const obj3 = arg1(dependencyMap[13]);
  const items4 = [_createForOfIteratorHelperLoose, closure_10];
  const stateFromStores2 = arg1(dependencyMap[13]).useStateFromStores(items4, () => {
    const currentUser = currentUser.getCurrentUser();
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
        const member = member.getMember(guild_id1, currentUser.id);
        let isPending;
        if (null != member) {
          isPending = member.isPending;
        }
        tmp4 = isPending;
      }
    }
    return null != tmp4 && tmp4;
  });
  const obj4 = arg1(dependencyMap[13]);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const obj5 = arg1(dependencyMap[14]);
  const isThreadModerator = arg1(dependencyMap[15]).useIsThreadModerator(channel);
  const obj6 = arg1(dependencyMap[15]);
  let tmp7 = !stateFromStores;
  const canUnarchiveThread = arg1(dependencyMap[15]).useCanUnarchiveThread(channel);
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
  stateFromStores = id;
  const importDefault = stateFromStores;
  const context = importAllResult.useContext(closure_13);
  const dependencyMap = context;
  const items = [id, context];
  const callback = importAllResult.useCallback((arg0) => {
    let str = "message";
    if (null != context.modal) {
      str = "modal";
    }
    const tmpResult = arg1(context[16])(arg0, arg0, str);
    arg0 = tmpResult;
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
  let closure_3 = callback;
  const items1 = [context.validators, callback, stateFromStores, id.id];
  const effect = importAllResult.useEffect(() => {
    function currentValidate() {
      return callback(closure_1);
    }
    const arg0 = currentValidate;
    const validators = context.validators;
    if (null != validators) {
      validators.add(currentValidate);
    }
    return () => {
      const validators = validators.validators;
      if (null != validators) {
        validators.delete(currentValidate);
      }
    };
  }, items1);
  const obj = {};
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
  arg1 = channel_id;
  const importDefault = type;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => interactionComponentState.getInteractionComponentState(arg0.id, arg2.id));
  const items1 = [result2];
  const items2 = [channel_id];
  const stateFromStores1 = arg1(dependencyMap[13]).useStateFromStores(items1, () => interaction.getInteraction(arg0), items2);
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  const tmp4 = useComponentValidatorState(type, stateFromStores);
  const validate = tmp4.validate;
  const dependencyMap = validate;
  let id = channel_id.applicationId;
  if (null == id) {
    id = channel_id.author.id;
  }
  let closure_3 = id;
  obj = {
    state: stateFromStores,
    executeStateUpdate: importAllResult.useCallback((localState, arg1, self) => {
      if (validate(localState)) {
        const channel = channel.getChannel(localState.channel_id);
        let tmp5 = null != channel;
        if (tmp5) {
          tmp5 = null != self.customId;
        }
        if (tmp5) {
          let obj = localState(validate[17]);
          obj = { componentType: self.type };
          ({ id: obj2.messageId, flags: obj2.messageFlags } = localState);
          ({ customId: obj2.customId, id: obj2.componentId } = self);
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
  const items3 = [, , , , , , , ];
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
  id = customId;
  const importDefault = id;
  const dependencyMap = arg2;
  let obj = id(dependencyMap[13]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => interactionComponentState.getInteractionComponentState(arg0.customId, arg1.id));
  let callback = stateFromStores;
  let first = callback(importAllResult.useState(arg2), 1)[0];
  const tmp3 = useComponentValidatorState(id, stateFromStores);
  const validate = tmp3.validate;
  const items1 = [customId.customId, id.id, validate];
  callback = importAllResult.useCallback((state) => {
    let tmp = null == state;
    if (!tmp) {
      let obj = arg1(arg2[18]);
      obj = { type: "SET_INTERACTION_COMPONENT_STATE", rootContainerId: state.customId, componentId: arg1.id, state };
      obj.dispatch(obj);
      tmp = validate(state);
    }
    return tmp;
  }, items1);
  let result2 = callback;
  importDefault(dependencyMap[19])(() => {
    if (null == stateFromStores) {
      callback(arg2);
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
  obj.visualState = id(dependencyMap[11]).ActionComponentState.NORMAL;
  obj.error = tmp3.error;
  return obj;
}
function getParentsNotSupported(arg0) {
  let closure_0 = "ApplicationWidget";
  return () => {
    const error = new Error("" + closure_0 + " does not support parents");
    throw error;
  };
}
const context = importAllResult.createContext(null);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export { useShouldDisableInteractiveComponents };
export const ComponentStateContextProvider = function ComponentStateContextProvider(children) {
  const message = children.message;
  const arg1 = message;
  const modal = children.modal;
  const importDefault = modal;
  const applicationWidget = children.applicationWidget;
  const dependencyMap = applicationWidget;
  const validators = children.validators;
  let closure_3 = validators;
  const validationErrors = children.validationErrors;
  const setValidationErrors = children.setValidationErrors;
  let result2 = setValidationErrors;
  let flag = children.shouldDisableInteractiveComponents;
  if (flag === undefined) {
    flag = false;
  }
  let closure_6 = flag;
  const items = [message, modal, applicationWidget, flag, validators, validationErrors, setValidationErrors];
  return <redux.Provider value={validationErrors.useMemo(() => {
    if (null != closure_0) {
      let obj = { useComponentState: callback2.bind(null, closure_0, flag) };
      ({ channel_id: obj3.channelId, id: obj3.containerId } = closure_0);
      obj.message = closure_0;
      obj.validators = validators;
      obj.getParents = function getParents(arg0) {
        return ApplicationWidget(closure_2[20]).getParents(ApplicationWidget.components, arg0);
      };
      return obj;
    } else if (null != modal) {
      obj = { useComponentState: callback3.bind(null, modal) };
      ({ channelId: obj2.channelId, customId: obj2.containerId } = modal);
      obj.modal = modal;
      obj.validators = validators;
      obj.validationErrors = validationErrors;
      obj.setValidationErrors = setValidationErrors;
      obj.getParents = function getParents(arg0) {
        return ApplicationWidget(closure_2[20]).getParents(components.components, arg0);
      };
      return obj;
    } else if (null != applicationWidget) {
      obj = {};
      closure_0 = "ApplicationWidget";
      obj.useComponentState = () => {
        const error = new Error("" + closure_0 + " does not support state");
        throw error;
      };
      obj.containerId = callback(applicationWidget);
      obj.applicationWidget = applicationWidget;
      obj.validators = validators;
      obj.validationErrors = validationErrors;
      obj.setValidationErrors = setValidationErrors;
      obj.getParents = callback4("ApplicationWidget");
      return obj;
    } else {
      const _Error = Error;
      const error = new Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
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
