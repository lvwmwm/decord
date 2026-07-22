// Module ID: 11374
// Function ID: 88439
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: actionsFromServer, isChannelValidForNewMemberAction, isChannelValidForResourceChannel, isSettingsValid, settingsFromServer, settingsToServer

// Module 11374 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function newMemberActionFromServer(channelId) {
  let obj = { channelId: channelId.channel_id, actionType: channelId.action_type, title: channelId.title, description: channelId.description };
  let tmp = null;
  if (null != channelId.emoji) {
    obj = { id: channelId.emoji.id, name: channelId.emoji.name, animated: channelId.emoji.animated };
    tmp = obj;
  }
  obj.emoji = tmp;
  const icon = channelId.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  return obj;
}
function resourceChannelFromServer(channelId) {
  let obj = { channelId: channelId.channel_id, title: channelId.title };
  const description = channelId.description;
  let str = "";
  if (null != description) {
    str = description;
  }
  obj.description = str;
  let tmp = null;
  if (null != channelId.emoji) {
    obj = { id: channelId.emoji.id, name: channelId.emoji.name, animated: channelId.emoji.animated };
    tmp = obj;
  }
  obj.emoji = tmp;
  const icon = channelId.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  return obj;
}
function isWelcomeMessageEmpty(welcomeMessage) {
  let tmp = null == welcomeMessage;
  if (!tmp) {
    let tmp2 = null != welcomeMessage.message;
    if (tmp2) {
      tmp2 = welcomeMessage.message.length > 0;
    }
    let tmp3 = !tmp2;
    if (!tmp2) {
      let tmp4 = null != welcomeMessage.authorIds;
      if (tmp4) {
        tmp4 = welcomeMessage.authorIds.length > 0;
      }
      tmp3 = !tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
}
function isSettingsEmpty(welcomeMessage) {
  let tmp = null == welcomeMessage;
  if (!tmp) {
    const tmp3 = isWelcomeMessageEmpty(welcomeMessage.welcomeMessage);
    let tmp4 = tmp3;
    if (tmp3) {
      let tmp5 = null != welcomeMessage.newMemberActions;
      if (tmp5) {
        tmp5 = welcomeMessage.newMemberActions.length > 0;
      }
      let tmp6 = !tmp5;
      if (!tmp5) {
        let tmp7 = null != welcomeMessage.resourceChannels;
        if (tmp7) {
          tmp7 = welcomeMessage.resourceChannels.length > 0;
        }
        tmp6 = !tmp7;
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
({ ChannelTypes: closure_4, Permissions: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx");

export const WELCOME_MESSAGE_MIN_LENGTH = 7;
export const WELCOME_MESSAGE_MAX_LENGTH = 300;
export const NEW_MEMBER_ACTION_TITLE_MIN_LENGTH = 7;
export const NEW_MEMBER_ACTION_TITLE_MAX_LENGTH = 60;
export const NEW_MEMBER_ACTION_MIN = 3;
export const NEW_MEMBER_ACTION_MAX = 5;
export const RESOURCE_CHANNEL_TITLE_MIN_LENGTH = 1;
export const RESOURCE_CHANNEL_TITLE_MAX_LENGTH = 30;
export const RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH = 200;
export const RESOURCE_CHANNEL_MAX = 7;
export const NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY = "NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY";
export const CHANNEL_ACTION_BANNER_HEIGHT = 46;
export const NewMemberActionTypes = { VIEW: 0, [0]: "VIEW", CHAT: 1, [1]: "CHAT" };
export { newMemberActionFromServer };
export { resourceChannelFromServer };
export const settingsFromServer = function settingsFromServer(body) {
  let new_member_actions;
  let resource_channels;
  let welcome_message;
  if (null == body) {
    return null;
  } else {
    ({ welcome_message, new_member_actions, resource_channels } = body);
    let obj = {};
    obj = {};
    ({ author_ids: obj2.authorIds, message: obj2.message } = welcome_message);
    obj.welcomeMessage = obj;
    const found = new_member_actions.filter((channel_id) => callback(closure_2[2]).isNotNullish(store.getChannel(channel_id.channel_id)));
    obj.newMemberActions = found.map(newMemberActionFromServer);
    const found1 = resource_channels.filter((channel_id) => callback(closure_2[2]).isNotNullish(store.getChannel(channel_id.channel_id)));
    obj.resourceChannels = found1.map(resourceChannelFromServer);
    obj.enabled = body.enabled;
    return obj;
  }
};
export const settingsToServer = function settingsToServer(guild_id, enabled) {
  let newMemberActions;
  let resourceChannels;
  let welcomeMessage;
  if (null == enabled) {
    return null;
  } else {
    ({ welcomeMessage, newMemberActions, resourceChannels } = enabled);
    let obj = { guild_id };
    obj = {};
    let authorIds;
    if (null != welcomeMessage) {
      authorIds = welcomeMessage.authorIds;
    }
    if (null == authorIds) {
      authorIds = [];
    }
    obj.author_ids = authorIds;
    let message;
    if (null != welcomeMessage) {
      message = welcomeMessage.message;
    }
    let str = "";
    if (null != message) {
      str = message;
    }
    obj.message = str;
    obj.welcome_message = obj;
    if (null == newMemberActions) {
      newMemberActions = [];
    }
    const found = newMemberActions.filter((channelId) => callback(closure_2[2]).isNotNullish(store.getChannel(channelId.channelId)));
    obj.new_member_actions = found.map((channelId) => {
      let obj = { channel_id: channelId.channelId, action_type: channelId.actionType, title: channelId.title, description: channelId.description };
      obj = {};
      const emoji = channelId.emoji;
      let id;
      if (null != emoji) {
        id = emoji.id;
      }
      let tmp2;
      if (null != id) {
        tmp2 = id;
      }
      obj.id = tmp2;
      const emoji2 = channelId.emoji;
      let name;
      if (null != emoji2) {
        name = emoji2.name;
      }
      let tmp4;
      if (null != name) {
        tmp4 = name;
      }
      obj.name = tmp4;
      const emoji3 = channelId.emoji;
      let animated;
      if (null != emoji3) {
        animated = emoji3.animated;
      }
      let tmp6;
      if (null != animated) {
        tmp6 = animated;
      }
      obj.animated = tmp6;
      obj.emoji = obj;
      const icon = channelId.icon;
      let tmp7;
      if (null != icon) {
        tmp7 = icon;
      }
      obj.icon = tmp7;
      return obj;
    });
    if (null == resourceChannels) {
      resourceChannels = [];
    }
    const found1 = resourceChannels.filter((channelId) => callback(closure_2[2]).isNotNullish(store.getChannel(channelId.channelId)));
    obj.resource_channels = found1.map((channelId) => {
      let obj = { channel_id: channelId.channelId, title: channelId.title, description: channelId.description };
      obj = {};
      const emoji = channelId.emoji;
      let id;
      if (null != emoji) {
        id = emoji.id;
      }
      let tmp2;
      if (null != id) {
        tmp2 = id;
      }
      obj.id = tmp2;
      const emoji2 = channelId.emoji;
      let name;
      if (null != emoji2) {
        name = emoji2.name;
      }
      let tmp4;
      if (null != name) {
        tmp4 = name;
      }
      obj.name = tmp4;
      const emoji3 = channelId.emoji;
      let animated;
      if (null != emoji3) {
        animated = emoji3.animated;
      }
      let tmp6;
      if (null != animated) {
        tmp6 = animated;
      }
      obj.animated = tmp6;
      obj.emoji = obj;
      const icon = channelId.icon;
      let tmp7;
      if (null != icon) {
        tmp7 = icon;
      }
      obj.icon = tmp7;
      return obj;
    });
    obj.enabled = enabled.enabled;
    return obj;
  }
};
export const actionsFromServer = function actionsFromServer(body) {
  if (null == body) {
    return null;
  } else {
    const obj = {};
    for (const key10005 in arg0.channel_actions) {
      let tmp = key10005;
      obj[key10005] = arg0.channel_actions[key10005].completed;
    }
    return obj;
  }
};
export { isWelcomeMessageEmpty };
export { isSettingsEmpty };
export const isSettingsValid = function isSettingsValid(welcomeMessage) {
  if (null == welcomeMessage) {
    return false;
  } else if (isSettingsEmpty(welcomeMessage)) {
    return true;
  } else {
    welcomeMessage = welcomeMessage.welcomeMessage;
    let message;
    if (null != welcomeMessage) {
      message = welcomeMessage.message;
    }
    if (null != message) {
      if (welcomeMessage.welcomeMessage.message.length >= 7) {
        const welcomeMessage2 = welcomeMessage.welcomeMessage;
        let authorIds;
        if (null != welcomeMessage2) {
          authorIds = welcomeMessage2.authorIds;
        }
        if (null != authorIds) {
          if (0 !== welcomeMessage.welcomeMessage.authorIds.length) {
            if (null != welcomeMessage.newMemberActions) {
              if (welcomeMessage.newMemberActions.length >= 3) {
                if (null != welcomeMessage.newMemberActions) {
                  const tmp4 = _createForOfIteratorHelperLoose(welcomeMessage.newMemberActions);
                  let iter = tmp4();
                  if (!iter.done) {
                    const channel = channel.getChannel(iter.value.channelId);
                    while (null != channel) {
                      let tmp7 = importAll;
                      let tmp8 = dependencyMap;
                      let obj = importAll(dependencyMap[3]);
                      let tmp9 = constants2;
                      if (!obj.canEveryoneRole(constants2.VIEW_CHANNEL, channel)) {
                        break;
                      } else {
                        let iter2 = tmp4();
                        iter = iter2;
                      }
                    }
                    return false;
                  }
                }
                return true;
              }
            }
            return false;
          }
        }
        return false;
      }
    }
    return false;
  }
};
export const isChannelValidForResourceChannel = function isChannelValidForResourceChannel(type) {
  let canEveryoneRoleResult = type.type === constants.GUILD_TEXT;
  if (canEveryoneRoleResult) {
    canEveryoneRoleResult = !importAll(dependencyMap[3]).canEveryoneRole(constants2.SEND_MESSAGES, type);
    const obj = importAll(dependencyMap[3]);
  }
  if (canEveryoneRoleResult) {
    canEveryoneRoleResult = importAll(dependencyMap[3]).canEveryoneRole(constants2.VIEW_CHANNEL, type);
    const obj2 = importAll(dependencyMap[3]);
  }
  return canEveryoneRoleResult;
};
export const isChannelValidForNewMemberAction = function isChannelValidForNewMemberAction(type) {
  type = type.type;
  if (constants.GUILD_TEXT !== type) {
    if (constants.GUILD_ANNOUNCEMENT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          return false;
        }
      }
    }
  }
  return importAll(dependencyMap[3]).canEveryoneRole(constants2.VIEW_CHANNEL, type);
};
export const ChannelEditBlockTypes = { DEFAULT: 0, [0]: "DEFAULT", TODO: 1, [1]: "TODO", RESOURCE: 2, [2]: "RESOURCE", RULES: 3, [3]: "RULES", UPDATES: 4, [4]: "UPDATES" };
