// Module ID: 8170
// Function ID: 64514
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: hasAccess

// Module 8170 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function isExplicitAllow(arg0) {
  return true === arg0;
}
function isExplicitDeny(applicationAllowedForChannel) {
  return false === applicationAllowedForChannel;
}
function computeAllowedForChannel(permissions, context, guild_id) {
  if (null == permissions) {
    return null;
  } else {
    let id2 = context.id;
    if (context.isThread()) {
      let id = context.parent_id;
      if (null == id) {
        id = context.id;
      }
      id2 = id;
    }
    const obj = require(dependencyMap[12]);
    if (null != permissions[obj.toPermissionKey(obj, id2, closure_0(undefined, closure_3[6]).ApplicationCommandPermissionType.CHANNEL)]) {
      return tmp3.permission;
    } else {
      const obj2 = require(dependencyMap[12]);
      const obj3 = require(dependencyMap[11]);
      let permission = null;
      if (null != permissions[obj2.toPermissionKey(obj2, require(dependencyMap[11]).allChannelsSentinel(guild_id), closure_0(undefined, closure_3[6]).ApplicationCommandPermissionType.CHANNEL)]) {
        permission = tmp8.permission;
      }
      return permission;
    }
  }
}
function computeAllowedForUser(permissions, guild_id, userId, roleIds, isImpersonating) {
  if (null == permissions) {
    return null;
  } else {
    if (!isImpersonating) {
      const obj = require(dependencyMap[12]);
      if (null != permissions[obj.toPermissionKey(obj, userId, closure_0(undefined, closure_3[6]).ApplicationCommandPermissionType.USER)]) {
        return tmp4.permission;
      }
    }
    const tmp7 = _createForOfIteratorHelperLoose(roleIds);
    const iter = tmp7();
    let iter2 = iter;
    let flag3 = false;
    let flag4 = false;
    if (!iter.done) {
      while (true) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
        let obj2 = require(dependencyMap[12]);
        let tmp10 = permissions[obj2.toPermissionKey(obj2, iter2.value, closure_0(undefined, closure_3[6]).ApplicationCommandPermissionType.ROLE)];
        if (null != tmp10) {
          flag3 = true;
          if (tmp10.permission) {
            break;
          }
        }
        let iter3 = tmp7();
        iter2 = iter3;
        flag4 = flag3;
      }
      return true;
    }
    if (flag4) {
      return false;
    } else {
      let tmp11 = null;
      if (null != guild_id) {
        const obj3 = require(dependencyMap[12]);
        tmp11 = permissions[obj3.toPermissionKey(obj3, guild_id, closure_0(undefined, closure_3[6]).ApplicationCommandPermissionType.ROLE)];
      }
      let permission = null;
      if (null != tmp11) {
        permission = tmp11.permission;
      }
      return permission;
    }
  }
}
const ChannelRecordBase = require(dependencyMap[0]).ChannelRecordBase;
let closure_5 = importDefault(dependencyMap[1]);
const BuiltInSectionId = require(dependencyMap[2]).BuiltInSectionId;
const Permissions = require(dependencyMap[3]).Permissions;
const obj = { ALLOWED: 0, [0]: "ALLOWED", NSFW_NOT_ALLOWED: 1, [1]: "NSFW_NOT_ALLOWED", WRONG_COMMAND_TYPE: 2, [2]: "WRONG_COMMAND_TYPE", PREDICATE_FAILED: 3, [3]: "PREDICATE_FAILED", CONTEXT_NOT_ALLOWED: 4, [4]: "CONTEXT_NOT_ALLOWED", MISSING_BASE_PERMISSIONS: 5, [5]: "MISSING_BASE_PERMISSIONS", CHANNEL_DENIED: 6, [6]: "CHANNEL_DENIED", USER_DENIED: 7, [7]: "USER_DENIED" };
const _module = require(dependencyMap[13]);
const result = _module.fileFinishedImporting("modules/application_commands/CommandPermissionUtils.tsx");

export const HasAccessResult = obj;
export const hasAccess = function hasAccess(type, arg1, applicationAllowedForChannel) {
  let allowNsfw;
  let applicationAllowedForUser;
  let commandBotId;
  let commandTypes;
  let computedPermissions;
  let context;
  let hasBaseAccessPermissions;
  let hasSendMessagesPermission;
  let isGuildInstalled;
  let isImpersonating;
  let isUserInstalled;
  let roleIds;
  let userId;
  ({ context, commandTypes, computedPermissions, userId, roleIds, isImpersonating } = arg1);
  applicationAllowedForChannel = applicationAllowedForChannel.applicationAllowedForChannel;
  ({ allowNsfw, hasBaseAccessPermissions, hasSendMessagesPermission } = arg1);
  ({ applicationAllowedForUser, isGuildInstalled, isUserInstalled, commandBotId } = applicationAllowedForChannel);
  if (commandTypes.includes(type.type)) {
    if (type.nsfw) {
      if (!allowNsfw) {
        return obj.NSFW_NOT_ALLOWED;
      }
    }
    if (null != context) {
      let obj = require(dependencyMap[5]);
      const commandContextType = obj.computeCommandContextType(context, commandBotId);
    }
    if (null != type.contexts) {
      if (null != commandContextType) {
        const contexts = type.contexts;
        if (!contexts.includes(commandContextType)) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
    } else if (type.inputType === require(dependencyMap[6]).ApplicationCommandInputType.BOT) {
      if (false === type.dmPermission) {
        if (commandContextType === require(dependencyMap[7]).InteractionContextType.BOT_DM) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
      if (commandContextType === require(dependencyMap[7]).InteractionContextType.PRIVATE_CHANNEL) {
        return obj.CONTEXT_NOT_ALLOWED;
      }
    }
    if (null != type.predicate) {
      if (context instanceof ChannelRecordBase) {
        obj = { channel: context, guild: guild.getGuild(context.guild_id) };
        if (!type.predicate(obj)) {
          return obj.PREDICATE_FAILED;
        }
      }
    }
    if (type.applicationId === BuiltInSectionId.BUILT_IN) {
      return obj.ALLOWED;
    } else {
      let contextGuildId;
      if (null != context) {
        contextGuildId = require(dependencyMap[5]).getContextGuildId(context);
        const obj3 = require(dependencyMap[5]);
      }
      if (null == contextGuildId) {
        return obj.ALLOWED;
      } else {
        if (obj6.has(computedPermissions, Permissions.ADMINISTRATOR)) {
          return obj.ALLOWED;
        } else {
          if (isUserInstalled) {
            const integration_types = type.integration_types;
            if (null != integration_types) {
              if (integration_types.includes(require(dependencyMap[9]).ApplicationIntegrationType.USER_INSTALL)) {
                return obj.ALLOWED;
              }
            }
          }
          if (!hasBaseAccessPermissions) {
            if (isGuildInstalled) {
              if (null != type.integration_types) {
                const integration_types2 = type.integration_types;
              }
              return obj.MISSING_BASE_PERMISSIONS;
            }
          }
          if (context instanceof ChannelRecordBase) {
            importDefault(dependencyMap[10])(undefined !== applicationAllowedForChannel, "missing applicationAllowedForChannel");
            const tmp33 = computeAllowedForChannel(type.permissions, context, contextGuildId);
            if (isExplicitDeny(tmp33)) {
              return obj.CHANNEL_DENIED;
            } else if (!isExplicitAllow(tmp33)) {
              if (isExplicitDeny(applicationAllowedForChannel)) {
                return obj.CHANNEL_DENIED;
              }
            }
          }
          const tmp43 = computeAllowedForUser(type.permissions, contextGuildId, userId, roleIds, isImpersonating);
          if (isExplicitAllow(tmp43)) {
            let USER_DENIED = obj.ALLOWED;
          } else {
            if (!isExplicitDeny(tmp43)) {
              if (!isExplicitDeny(applicationAllowedForUser)) {
                if (null != type.defaultMemberPermissions) {
                  if (!obj4.equals(type.defaultMemberPermissions, require(dependencyMap[11]).DISABLED_BY_DEFAULT_PERMISSION_FLAG)) {
                    if (obj5.has(computedPermissions, type.defaultMemberPermissions)) {
                      let USER_DENIED2 = obj.ALLOWED;
                    }
                    const obj5 = importAll(dependencyMap[8]);
                  }
                  USER_DENIED2 = obj.USER_DENIED;
                  const obj4 = importAll(dependencyMap[8]);
                } else {
                  USER_DENIED = obj.ALLOWED;
                }
              }
            }
            USER_DENIED = obj.USER_DENIED;
          }
          return USER_DENIED;
        }
        const obj6 = importAll(dependencyMap[8]);
      }
    }
  } else {
    return obj.WRONG_COMMAND_TYPE;
  }
};
export { computeAllowedForChannel };
export { computeAllowedForUser };
