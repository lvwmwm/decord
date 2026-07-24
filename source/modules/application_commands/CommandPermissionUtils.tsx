// Module ID: 8220
// Function ID: 64779
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1352, 1838, 4566, 653, 8221, 8012, 6755, 1881, 483, 8224, 44, 6753, 6754, 2]
// Exports: hasAccess

// Module 8220 (_createForOfIteratorHelperLoose)
import { ChannelRecordBase } from "_callSuper";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import { Permissions } from "ME";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
    const obj = require(6754) /* toPermissionKey */;
    const tmp3 = permissions[obj.toPermissionKey(obj, id2, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.CHANNEL)];
    if (null != tmp3) {
      return tmp3.permission;
    } else {
      const obj2 = require(6754) /* toPermissionKey */;
      const obj3 = require(6753) /* _createForOfIteratorHelperLoose */;
      const tmp8 = permissions[obj2.toPermissionKey(obj2, require(6753) /* _createForOfIteratorHelperLoose */.allChannelsSentinel(guild_id), require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.CHANNEL)];
      let permission = null;
      if (null != tmp8) {
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
      const obj = require(6754) /* toPermissionKey */;
      const tmp4 = permissions[obj.toPermissionKey(obj, userId, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.USER)];
      if (null != tmp4) {
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
        let obj2 = require(6754) /* toPermissionKey */;
        let tmp10 = permissions[obj2.toPermissionKey(obj2, iter2.value, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.ROLE)];
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
        const obj3 = require(6754) /* toPermissionKey */;
        tmp11 = permissions[obj3.toPermissionKey(obj3, guild_id, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.ROLE)];
      }
      let permission = null;
      if (null != tmp11) {
        permission = tmp11.permission;
      }
      return permission;
    }
  }
}
let obj = { ALLOWED: 0, [0]: "ALLOWED", NSFW_NOT_ALLOWED: 1, [1]: "NSFW_NOT_ALLOWED", WRONG_COMMAND_TYPE: 2, [2]: "WRONG_COMMAND_TYPE", PREDICATE_FAILED: 3, [3]: "PREDICATE_FAILED", CONTEXT_NOT_ALLOWED: 4, [4]: "CONTEXT_NOT_ALLOWED", MISSING_BASE_PERMISSIONS: 5, [5]: "MISSING_BASE_PERMISSIONS", CHANNEL_DENIED: 6, [6]: "CHANNEL_DENIED", USER_DENIED: 7, [7]: "USER_DENIED" };
const result = require("TRUE_OPTION_NAME").fileFinishedImporting("modules/application_commands/CommandPermissionUtils.tsx");

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
      obj = require(8012) /* computeAllowNsfw */;
      const commandContextType = obj.computeCommandContextType(context, commandBotId);
    }
    if (null != type.contexts) {
      if (null != commandContextType) {
        const contexts = type.contexts;
        if (!contexts.includes(commandContextType)) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
    } else if (type.inputType === require(6755) /* ApplicationCommandSectionType */.ApplicationCommandInputType.BOT) {
      if (false === type.dmPermission) {
        if (commandContextType === require(1881) /* PermissionOverwriteType */.InteractionContextType.BOT_DM) {
          return obj.CONTEXT_NOT_ALLOWED;
        }
      }
      if (commandContextType === require(1881) /* PermissionOverwriteType */.InteractionContextType.PRIVATE_CHANNEL) {
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
        contextGuildId = require(8012) /* computeAllowNsfw */.getContextGuildId(context);
        const obj3 = require(8012) /* computeAllowNsfw */;
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
              if (integration_types.includes(require(8224) /* ApplicationIntegrationType */.ApplicationIntegrationType.USER_INSTALL)) {
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
            importDefault(44)(undefined !== applicationAllowedForChannel, "missing applicationAllowedForChannel");
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
                  if (!obj4.equals(type.defaultMemberPermissions, require(6753) /* _createForOfIteratorHelperLoose */.DISABLED_BY_DEFAULT_PERMISSION_FLAG)) {
                    if (obj5.has(computedPermissions, type.defaultMemberPermissions)) {
                      let USER_DENIED2 = obj.ALLOWED;
                    }
                    obj5 = importAll(483);
                  }
                  USER_DENIED2 = obj.USER_DENIED;
                  obj4 = importAll(483);
                } else {
                  USER_DENIED = obj.ALLOWED;
                }
              }
            }
            USER_DENIED = obj.USER_DENIED;
          }
          return USER_DENIED;
        }
        obj6 = importAll(483);
      }
    }
  } else {
    return obj.WRONG_COMMAND_TYPE;
  }
};
export { computeAllowedForChannel };
export { computeAllowedForUser };
