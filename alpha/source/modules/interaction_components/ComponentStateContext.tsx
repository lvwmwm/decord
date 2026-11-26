// Module ID: 8824
// Function ID: 8825
// Name: ComponentStateContext
// Dependencies: [32, 19, 8243, 4976, 4892, 4955, 6799, 1387, 8825, 21, 2118, 6405, 6401, 6400, 504, 8827, 7628, 8828, 8831, 572, 5604, 6395, 2]
// Exports: ComponentStateContextProvider, useComponentContainerId, useComponentError, useComponentState, useComponentStateContext, useExecuteComponentInteraction, useGetActionComponentState

// Module 8824 (ComponentStateContext)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Server from "Server" /* 2118 */;
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import InteractionTypes from "InteractionTypes" /* 6400 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6405 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import InteractionStore from "InteractionStore" /* 8243 */;
import LurkingStore from "LurkingStore" /* 4976 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6799 */;
import UserStore from "UserStore" /* 1387 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

function isInteractionComponent(type) {
  type = type.type;
  if (Server.ComponentType.BUTTON === type) {
    return type.style !== Server.ButtonStyle.LINK;
  } else if (Server.ComponentType.MENU_ACTION_ITEM === type) {
    return type.style !== Server.MenuActionItemStyle.LINK;
  } else {
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.TEXT_INPUT !== type) {
                if (Server.ComponentType.FILE_UPLOAD !== type) {
                  if (Server.ComponentType.RADIO_GROUP !== type) {
                    if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                      const CHECKBOX = tmp(2118).ComponentType.CHECKBOX;
                    }
                  }
                }
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
  let DISABLED = InteractionComponentTypes.ActionComponentState.NORMAL;
  let DISABLED2 = DISABLED;
  const tmp3 = null != interaction && interaction.state !== tmp(6401).InteractionState.FAILED;
  if (tmp3) {
    if (interaction.data.interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
      if (interaction.data.componentId === id.id) {
        DISABLED = tmp(6405).ActionComponentState.LOADING;
      }
      DISABLED2 = DISABLED;
    }
    if (isInteractionComponent(id)) {
      DISABLED = tmp(6405).ActionComponentState.DISABLED;
    }
  }
  if (flag) {
    flag = isInteractionComponent(id);
  }
  if (flag) {
    DISABLED2 = tmp(6405).ActionComponentState.DISABLED;
  }
  return DISABLED2;
}
function useShouldDisableInteractiveComponents(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  const tmp = channel;
  const tmp2 = dependencyMap;
  const items = [GuildVerificationStore];
  const items1 = [channel];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = tmp.guild_id;
    }
    const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(tmp.guild_id);
    return canChatInGuildResult;
  }, items1);
  const items2 = [LurkingStore];
  const items3 = [channel];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = tmp.guild_id;
    }
    const isLurkingResult = null != guild_id && LurkingStore.isLurking(tmp.guild_id);
    return isLurkingResult;
  }, items3);
  const items4 = [GuildMemberStore, UserStore];
  const obj4 = channel(504);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    const currentUser = UserStore.getCurrentUser();
    let guild_id;
    if (channel != null) {
      guild_id = tmp2.guild_id;
    }
    let flag = null;
    if (null != guild_id) {
      flag = null;
      if (null != currentUser) {
        let guild_id1;
        const getMember = GuildMemberStore.getMember;
        if (channel != null) {
          guild_id1 = tmp2.guild_id;
        }
        const member = getMember(guild_id1, currentUser.id);
        let isPending;
        if (member != null) {
          isPending = member.isPending;
        }
        flag = isPending;
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let guild_id;
  const useCurrentUserCommunicationDisabled = channel(8827).useCurrentUserCommunicationDisabled;
  channel(8827);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp8 = _slicedToArray(useCurrentUserCommunicationDisabled(guild_id), 2)[1];
  const tmpResult = tmp(7628);
  const isThreadModerator = tmpResult.useIsThreadModerator(channel);
  let tmp11 = !stateFromStores;
  const tmpResult2 = tmp(7628);
  const canUnarchiveThread = tmpResult2.useCanUnarchiveThread(channel);
  if (stateFromStores) {
    tmp11 = stateFromStores1;
  }
  if (!tmp11) {
    tmp11 = stateFromStores2;
  }
  if (!tmp11) {
    let isLockedThreadResult;
    if (channel != null) {
      isLockedThreadResult = channel.isLockedThread();
    }
    if (isLockedThreadResult) {
      isLockedThreadResult = !isThreadModerator;
    }
    tmp11 = isLockedThreadResult;
  }
  if (!tmp11) {
    let isArchivedThreadResult;
    if (channel != null) {
      isArchivedThreadResult = channel.isArchivedThread();
    }
    if (isArchivedThreadResult) {
      isArchivedThreadResult = !canUnarchiveThread;
    }
    tmp11 = isArchivedThreadResult;
  }
  if (!tmp11) {
    tmp11 = tmp8;
  }
  return tmp11;
}
function useGetActionComponentStateForMessage(channel_id, arg1) {
  let closure_2;
  _require = channel_id;
  const items = [InteractionStore];
  const items1 = [channel_id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => InteractionStore.getInteraction(channel_id), items1);
  const tmp2 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  dependencyMap = tmp2;
  const items2 = [stateFromStores, tmp2];
  return react.useCallback((id) => getActionComponentState(stateFromStores, id, closure_2), items2);
}
function getModalActionComponentState() {
  return InteractionComponentTypes.ActionComponentState.NORMAL;
}
function useComponentStateForMessage(channel_id, arg1, id) {
  let callback;
  let items6;
  let tmp9;
  _require = channel_id;
  let obj = require("get initialized");
  const items = [LocalInteractionComponentStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => LocalInteractionComponentStateStore.getInteractionComponentState(channel_id.id, id.id));
  const items1 = [InteractionStore];
  const items2 = [channel_id];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => InteractionStore.getInteraction(channel_id), items2);
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  const message = react.useContext(closure_20).message;
  const items3 = [message];
  callback = react.useCallback((customId, localState) => {
    if (null != message) {
      if (null != customId.customId) {
        channel = channel.getChannel(tmp.channel_id);
        if (null != channel) {
          const obj = { componentType: customId.type, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: id, channelId: null, guildId: null, localState };
          ({ id: obj.messageId, flags: obj.messageFlags } = message);
          ({ customId: obj.customId, id: obj.componentId } = customId);
          id = tmp.applicationId;
          const executeMessageComponentInteraction = message(callback[17]).executeMessageComponentInteraction;
          message(callback[17]);
          if (id == null) {
            id = tmp.author.id;
          }
          ({ id: obj.channelId, guild_id: obj.guildId } = channel);
          const result = executeMessageComponentInteraction(obj);
        }
      }
    }
  }, items3);
  _require = id;
  const context = react.useContext(closure_20);
  const items4 = [id, context];
  const callback1 = react.useCallback((arg0) => {
    let id;
    let str = "message";
    const tmp = stateFromStores(context[18]);
    const tmp2 = id;
    const tmp3 = context;
    if (null != context.modal) {
      str = "modal";
    }
    const tmpResult = tmp(tmp2, arg0, str);
    id = tmpResult;
    const setValidationErrors = tmp3.setValidationErrors;
    if (setValidationErrors != null) {
      setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[id.id] = id;
        return obj;
      });
    }
    return null == tmpResult;
  }, items4);
  const items5 = [context.validators, callback1, stateFromStores, id.id];
  const effect = react.useEffect(() => {
    function currentValidate() {
      return callback(stateFromStores);
    }
    let validators = context.validators;
    if (validators != null) {
      validators.add(currentValidate);
    }
    return () => {
      const validators = context.validators;
      if (validators != null) {
        validators.delete(currentValidate);
      }
    };
  }, items5);
  const validationErrors = context.validationErrors;
  let tmp8;
  const obj3 = react;
  if (validationErrors != null) {
    tmp8 = validationErrors[id.id];
  }
  if (tmp8 == null) {
    tmp8 = null;
  }
  const obj4 = {
    state: stateFromStores,
    executeStateUpdate: obj3.useCallback((arg0) => {
      let flag = callback1(arg0);
      if (flag) {
        callback(id, arg0);
        flag = true;
      }
      return flag;
    }, items6),
    isDisabled: tmp9,
    visualState: getActionComponentState(stateFromStores1, id, tmp3),
    error: tmp8
  };
  items6 = [id, callback, callback1];
  tmp9 = tmp3 && isInteractionComponent(id);
  return obj4;
}
function useComponentStateForModal(customId, id, arg2) {
  let callback;
  let closure_2;
  let user;
  _require = customId;
  importDefault = id;
  dependencyMap = arg2;
  let tmp2 = dependencyMap;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [LocalInteractionComponentStateStore];
  let stateFromStores = obj.useStateFromStores(items, () => LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, user.id));
  let obj2 = callback;
  _require = id;
  callback = undefined;
  const first = stateFromStores(callback.useState(arg2), 1)[0];
  const context = callback.useContext(closure_20);
  const items1 = [id, context];
  callback = callback.useCallback((arg0) => {
    let id;
    let str = "message";
    const tmp = stateFromStores(context[18]);
    const tmp2 = id;
    const tmp3 = context;
    if (null != context.modal) {
      str = "modal";
    }
    const tmpResult = tmp(tmp2, arg0, str);
    id = tmpResult;
    const setValidationErrors = tmp3.setValidationErrors;
    if (setValidationErrors != null) {
      setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[id.id] = id;
        return obj;
      });
    }
    return null == tmpResult;
  }, items1);
  const items2 = [context.validators, callback, stateFromStores, id.id];
  const effect = callback.useEffect(() => {
    function currentValidate() {
      return callback(stateFromStores);
    }
    let validators = context.validators;
    if (validators != null) {
      validators.add(currentValidate);
    }
    return () => {
      const validators = context.validators;
      if (validators != null) {
        validators.delete(currentValidate);
      }
    };
  }, items2);
  const validationErrors = context.validationErrors;
  let tmp8;
  if (validationErrors != null) {
    tmp8 = validationErrors[id.id];
  }
  if (tmp8 == null) {
    tmp8 = null;
  }
  const items3 = [customId.customId, id.id, callback];
  const callback1 = obj2.useCallback((state) => {
    let tmp = null == state;
    if (!tmp) {
      const obj2 = { type: "SET_INTERACTION_COMPONENT_STATE", rootContainerId: customId.customId, componentId: user.id, state };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
      tmp = callback(state);
    }
    return tmp;
  }, items3);
  useMountEffectDefault(() => {
    if (null == stateFromStores) {
      callback1(closure_2);
    }
  });
  if (stateFromStores == null) {
    stateFromStores = first;
  }
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const obj3 = { state: stateFromStores, executeStateUpdate: callback1, isDisabled: false, visualState: tmp(6405).ActionComponentState.NORMAL, error: tmp8 };
  return obj3;
}
const jsx = Fragment.jsx;
const redux = react.createContext(null);
let result = size.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export { useShouldDisableInteractiveComponents };
export function useExecuteComponentInteraction() {
  const message = react.useContext(closure_20).message;
  const items = [message];
  return react.useCallback((customId, localState) => {
    if (null != message) {
      if (null != customId.customId) {
        channel = channel.getChannel(tmp.channel_id);
        if (null != channel) {
          const obj = { componentType: customId.type, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: id, channelId: null, guildId: null, localState };
          ({ id: obj.messageId, flags: obj.messageFlags } = message);
          ({ customId: obj.customId, id: obj.componentId } = customId);
          id = tmp.applicationId;
          const executeMessageComponentInteraction = message(callback[17]).executeMessageComponentInteraction;
          message(callback[17]);
          if (id == null) {
            id = tmp.author.id;
          }
          ({ id: obj.channelId, guild_id: obj.guildId } = channel);
          const result = executeMessageComponentInteraction(obj);
        }
      }
    }
  }, items);
}
export function ComponentStateContextProvider(message) {
  message = message.message;
  const modal = message.modal;
  const applicationWidget = message.applicationWidget;
  const validators = message.validators;
  const validationErrors = message.validationErrors;
  const setValidationErrors = message.setValidationErrors;
  let flag = message.shouldDisableInteractiveComponents;
  const children = message.children;
  if (flag === undefined) {
    flag = false;
  }
  const items = [message, modal, applicationWidget, flag, validators, validationErrors, setValidationErrors];
  return <redux.Provider value={validationErrors.useMemo(function() {
    let ApplicationWidget_str;
    let components;
    const useComponentState = () => {
      const error = new Error("" + "ApplicationWidget" + " does not support state");
      throw error;
    };
    if (null != ApplicationWidget_str) {
      ({ channel_id: obj3.channelId, id: obj3.containerId } = ApplicationWidget_str);
      const obj5 = {
        useComponentState: useComponentStateForMessage.bind(null, ApplicationWidget_str, flag),
        useGetActionComponentState: useGetActionComponentStateForMessage.bind(null, ApplicationWidget_str, flag),
        channelId: null,
        containerId: null,
        message: ApplicationWidget_str,
        validators,
        getParents(arg0) {
            const obj = message(applicationWidget[21]);
            return obj.getParents(ApplicationWidget_str.components, arg0);
          }
      };
      return obj5;
    } else if (null != modal) {
      ({ channelId: obj2.channelId, customId: obj2.containerId } = modal);
      const obj6 = {
        useComponentState: useComponentStateForModal.bind(null, modal),
        useGetActionComponentState() {
            return closure_1_17;
          },
        channelId: null,
        containerId: null,
        modal,
        validators,
        validationErrors,
        setValidationErrors,
        getParents(arg0) {
            const obj = message(applicationWidget[21]);
            return obj.getParents(components.components, arg0);
          }
      };
      return obj6;
    } else if (null != applicationWidget) {
      let obj = {
        useComponentState,
        useGetActionComponentState: useComponentState,
        containerId: "app-widget-" + applicationWidget.applicationId,
        applicationWidget,
        validators,
        validationErrors,
        setValidationErrors,
        getParents: () => {
            const error = new Error("" + ApplicationWidget_str + " does not support parents");
            throw error;
          }
      };
      const _HermesInternal = HermesInternal;
      ApplicationWidget_str = "ApplicationWidget";
      return obj;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      let error = new Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
      throw error;
    }
  }, items)}>{children}</redux.Provider>;
}
export function useComponentState(style, arg1) {
  const context = react.useContext(redux);
  return context.useComponentState(style, arg1);
}
export function useGetActionComponentState() {
  const context = react.useContext(redux);
  return context.useGetActionComponentState();
}
export function useComponentStateContext() {
  return react.useContext(redux);
}
export function useComponentContainerId() {
  return react.useContext(redux).containerId;
}
export function useComponentError(component) {
  const validationErrors = react.useContext(redux).validationErrors;
  let tmp;
  if (validationErrors != null) {
    tmp = validationErrors[component.id];
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
}
