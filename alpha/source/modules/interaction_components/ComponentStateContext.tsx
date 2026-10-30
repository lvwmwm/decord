// Module ID: 8688
// Function ID: 8689
// Name: ComponentStateContext
// Dependencies: [32, 19, 8381, 4942, 4858, 4921, 6702, 1384, 8689, 21, 1993, 6068, 6066, 6065, 504, 8426, 7437, 8691, 8692, 572, 5588, 6060, 2]
// Exports: ComponentStateContextProvider, useComponentContainerId, useComponentError, useComponentState, useComponentStateContext

// Module 8688 (ComponentStateContext)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Server from "Server" /* 1993 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import InteractionTypes from "InteractionTypes" /* 6065 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6068 */;
import InteractionUtils from "InteractionUtils" /* 8692 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import InteractionStore from "InteractionStore" /* 8381 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6702 */;
import UserStore from "UserStore" /* 1384 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8689 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

function isInteractionComponent(type) {
  type = type.type;
  if (Server.ComponentType.BUTTON === type) {
    return type.style !== Server.ButtonStyle.LINK;
  } else {
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.ACTION_ROW !== type) {
                const TEXT_INPUT = tmp(1993).ComponentType.TEXT_INPUT;
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
  const tmp3 = null != interaction && interaction.state !== tmp(6066).InteractionState.FAILED;
  if (tmp3) {
    if (interaction.data.interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
      if (interaction.data.componentId === id.id) {
        DISABLED = tmp(6068).ActionComponentState.LOADING;
      }
      DISABLED2 = DISABLED;
    }
    if (isInteractionComponent(id)) {
      DISABLED = tmp(6068).ActionComponentState.DISABLED;
    }
  }
  if (flag) {
    flag = isInteractionComponent(id);
  }
  if (flag) {
    DISABLED2 = tmp(6068).ActionComponentState.DISABLED;
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
  const useCurrentUserCommunicationDisabled = channel(8426).useCurrentUserCommunicationDisabled;
  channel(8426);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp8 = _slicedToArray(useCurrentUserCommunicationDisabled(guild_id), 2)[1];
  const tmpResult = tmp(7437);
  const isThreadModerator = tmpResult.useIsThreadModerator(channel);
  let tmp11 = !stateFromStores;
  const tmpResult2 = tmp(7437);
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
function useComponentStateForMessage(channel_id, arg1, id) {
  let callback;
  let items5;
  let tmp8;
  _require = channel_id;
  let obj = require("get initialized");
  const items = [LocalInteractionComponentStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => LocalInteractionComponentStateStore.getInteractionComponentState(channel_id.id, id.id));
  const obj2 = require("get initialized");
  const items1 = [InteractionStore];
  const items2 = [channel_id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => InteractionStore.getInteraction(channel_id), items2);
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  _require = id;
  let obj3 = react;
  const context = react.useContext(closure_18);
  const items3 = [id, context];
  callback = react.useCallback((arg0) => {
    let id;
    let str = "message";
    const tmp = stateFromStores(context[17]);
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
  }, items3);
  const items4 = [context.validators, callback, stateFromStores, id.id];
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
  }, items4);
  const validationErrors = context.validationErrors;
  let tmp7;
  if (validationErrors != null) {
    tmp7 = validationErrors[id.id];
  }
  if (tmp7 == null) {
    tmp7 = null;
  }
  id = channel_id.applicationId;
  if (id == null) {
    id = channel_id.author.id;
  }
  const obj4 = {
    state: stateFromStores,
    executeStateUpdate: obj3.useCallback((localState) => {
      if (callback(localState)) {
        const channel = ChannelStore.getChannel(channel_id.channel_id);
        let tmp5 = null != channel;
        const tmp2 = channel_id;
        if (tmp5) {
          tmp5 = null != id.customId;
        }
        if (tmp5) {
          const obj3 = { componentType: id.type, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: id, channelId: null, guildId: null, localState };
          ({ id: obj2.messageId, flags: obj2.messageFlags } = tmp2);
          ({ customId: obj2.customId, id: obj2.componentId } = id);
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          const obj = InteractionUtils;
          const result = obj.executeMessageComponentInteraction(obj3);
        }
        return true;
      } else {
        return false;
      }
    }, items5),
    isDisabled: tmp8,
    visualState: getActionComponentState(stateFromStores1, id, tmp3),
    error: tmp7
  };
  items5 = [, , , , , , , ];
  ({ channel_id: arr6[0], flags: arr6[1], id: arr6[2] } = channel_id);
  ({ customId: arr6[3], type: arr6[4], id: arr6[5] } = id);
  items5[6] = id;
  items5[7] = callback;
  tmp8 = tmp3;
  if (tmp8) {
    tmp8 = isInteractionComponent(id);
  }
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
  const context = callback.useContext(closure_18);
  const items1 = [id, context];
  callback = callback.useCallback((arg0) => {
    let id;
    let str = "message";
    const tmp = stateFromStores(context[17]);
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
  const obj3 = { state: stateFromStores, executeStateUpdate: callback1, isDisabled: false, visualState: tmp(6068).ActionComponentState.NORMAL, error: tmp8 };
  return obj3;
}
const jsx = Fragment.jsx;
const redux = react.createContext(null);
let result = size.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export { useShouldDisableInteractiveComponents };
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
    if (null != ApplicationWidget_str) {
      ({ channel_id: obj3.channelId, id: obj3.containerId } = ApplicationWidget_str);
      const obj5 = {
        useComponentState: useComponentStateForMessage.bind(null, ApplicationWidget_str, flag),
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
        useComponentState: () => {
            const error = new Error("" + ApplicationWidget_str + " does not support state");
            throw error;
          },
        containerId: "app-widget-" + applicationWidget.applicationId,
        applicationWidget,
        validators,
        validationErrors,
        setValidationErrors,
        getParents: () => {
            const error = new Error("" + "ApplicationWidget" + " does not support parents");
            throw error;
          }
      };
      ApplicationWidget_str = "ApplicationWidget";
      const _HermesInternal = HermesInternal;
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
export function useComponentState(type, arg1) {
  const context = react.useContext(redux);
  return context.useComponentState(type, arg1);
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
