// Module ID: 6753
// Function ID: 52556
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1352, 4468, 4566, 653, 482, 6754, 1881, 6755, 483, 22, 44, 24, 4324, 2]
// Exports: allChannelsSentinel, applicationPermissionsList, buildApplicationCommands, canUseApplicationCommands, extractInteractionDataProps, getApplicationCommandOptionQueryOptions, getApplicationCommandSection, getCommandAttachmentDraftType, getCommandTriggerSection, getInitialInteractionMetadata, getMatchingGroupCommands, hasAccess, hasCommandIndexForApp, isSnowflake, trackCommandSelected

// Module 6753 (_createForOfIteratorHelperLoose)
import { isReadableType } from "_callSuper";
import { DraftType } from "_isNativeReflectConstruct";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";
import ME from "ME";
import { Permissions } from "sum";
import deserializeResult from "_callSuper";
import importAllResult from "fromHexReverseArray";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
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
function buildCommand(arg0) {
  let applicationId;
  let command;
  let rootCommand;
  let subCommandPath;
  let useKeyedPermissions;
  ({ rootCommand, command, subCommandPath } = arg0);
  let obj;
  let tmp = null != rootCommand.permissions;
  ({ applicationId, useKeyedPermissions } = arg0);
  if (tmp) {
    tmp = rootCommand.permissions.length > 0;
  }
  if (!tmp) {
    let items = subCommandPath;
    if (null == subCommandPath) {
      items = [];
    }
    const mapped = items.map((name) => name.name);
    let items1 = subCommandPath;
    if (null == subCommandPath) {
      items1 = [];
    }
    const mapped1 = items1.map((displayName) => displayName.displayName);
    obj = {};
    ({ version: obj3.version, guild_id: obj3.guildId } = rootCommand);
    const items2 = [rootCommand.id];
    HermesBuiltin.arraySpread(mapped, 1);
    obj.id = items2.join(closure_7);
    const items3 = [rootCommand.name];
    HermesBuiltin.arraySpread(mapped, 1);
    obj.untranslatedName = items3.join(" ");
    obj.serverLocalizedName = command.name_localized;
    obj.applicationId = applicationId;
    let CHAT = rootCommand.type;
    if (null == CHAT) {
      CHAT = obj(1881).ApplicationCommandType.CHAT;
    }
    obj.type = CHAT;
    obj.inputType = obj(6755).ApplicationCommandInputType.BOT;
    obj.untranslatedDescription = command.description;
    obj.options = mapOptions(command.options);
    obj.rootCommand = rootCommand;
    obj.subCommandPath = subCommandPath;
    let deserializeResult;
    if (null != rootCommand.default_member_permissions) {
      deserializeResult = importAll(483).deserialize(rootCommand.default_member_permissions);
      const obj4 = importAll(483);
    }
    obj.defaultMemberPermissions = deserializeResult;
    obj.dmPermission = rootCommand.dm_permission;
    obj.permissions = undefined;
    let name = rootCommand.name_localized;
    if (null == name) {
      name = rootCommand.name;
    }
    const items4 = [name];
    HermesBuiltin.arraySpread(mapped1, 1);
    obj.displayName = items4.join(" ");
    let description = command.description_localized;
    if (null == description) {
      description = command.description;
    }
    obj.displayDescription = description;
    ({ nsfw: obj3.nsfw, contexts: obj3.contexts, integration_types: obj3.integration_types, global_popularity_rank: obj3.global_popularity_rank, handler: obj3.handler } = rootCommand);
    return obj;
  } else if (useKeyedPermissions) {
    const keyPermissionsResult = obj(6754).keyPermissions(rootCommand.permissions);
    obj = keyPermissionsResult;
    obj = keyPermissionsResult;
    const obj2 = obj(6754);
  } else {
    obj = {};
    const permissions = rootCommand.permissions;
    const item = permissions.forEach((id) => {
      obj[id.id] = id;
    });
  }
}
function mapOptions(options) {
  let mapped;
  if (null != options) {
    mapped = options.map((choices) => {
      let name_localized;
      let obj = {};
      let merged = Object.assign(choices);
      choices = choices.choices;
      let mapped;
      if (null != choices) {
        mapped = choices.map((name_localized) => {
          const obj = {};
          const merged = Object.assign(name_localized);
          let name = name_localized.name_localized;
          if (null == name) {
            name = name_localized.name;
          }
          obj["displayName"] = name;
          return obj;
        });
      }
      obj["choices"] = mapped;
      obj["options"] = outer1_15(choices.options);
      ({ name_localized: obj["serverLocalizedName"], name_localized } = choices);
      if (null == name_localized) {
        name_localized = choices.name;
      }
      obj["displayName"] = name_localized;
      let description = choices.description_localized;
      if (null == description) {
        description = choices.description;
      }
      obj["displayDescription"] = description;
      if (choices.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.CHANNEL) {
        if ("channel_types" in choices) {
          obj = {};
          const merged1 = Object.assign(obj);
          obj["channelTypes"] = choices.channel_types;
        }
        return obj;
      }
      if (choices.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.NUMBER) {
        obj = {};
        const merged2 = Object.assign(obj);
        obj["minValue"] = choices.min_value;
        obj["maxValue"] = choices.max_value;
      }
      if (choices.type !== outer1_0(outer1_3[6]).ApplicationCommandOptionType.STRING) {
        let tmp10 = obj;
        if (choices.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.ATTACHMENT) {
          tmp10 = obj;
          if ("file_types" in choices) {
            const obj1 = {};
            const merged3 = Object.assign(obj);
            obj1["fileTypes"] = choices.file_types;
            tmp10 = obj1;
          }
        }
      }
      const obj2 = {};
      const merged4 = Object.assign(obj);
      obj2["minLength"] = choices.min_length;
      obj2["maxLength"] = choices.max_length;
      tmp10 = obj2;
    });
  }
  return mapped;
}
function buildSubCommands(arg0) {
  let applicationId;
  let command;
  let rootCommand;
  let subCommandPath;
  let useKeyedPermissions;
  ({ rootCommand, command, applicationId, subCommandPath, useKeyedPermissions } = arg0);
  if (command.hasOwnProperty("id")) {
    let obj = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
    const items = [buildCommand(obj)];
    return items;
  } else if (command.type !== require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND) {
    if (command.type !== require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      obj = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
      const items1 = [buildCommand(obj)];
      return items1;
    }
  }
  const items2 = [];
  if (null == command.options) {
    return items2;
  } else {
    const options = command.options;
    const found = options.filter((type) => type.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.SUB_COMMAND_GROUP);
    for (let num4 = 0; num4 < found.length; num4 = num4 + 1) {
      let push = items2.push;
      obj = { rootCommand, command: found[num4], applicationId };
      let items3 = subCommandPath;
      let tmp6 = buildSubCommands;
      if (null == subCommandPath) {
        items3 = [];
      }
      let obj1 = { name: found[num4].name };
      let tmp7 = require;
      let tmp8 = dependencyMap;
      obj1.type = require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND_GROUP;
      let name = found[num4].name_localized;
      if (null == name) {
        name = found[num4].name;
      }
      obj1.displayName = name;
      let items4 = [obj1];
      obj.subCommandPath = items3.concat(items4);
      obj.useKeyedPermissions = useKeyedPermissions;
      let items5 = [];
      let tmp9 = items5;
      let num3 = 0;
      let arraySpreadResult = HermesBuiltin.arraySpread(tmp6(obj), 0);
      let tmp11 = push;
      let tmp12 = items5;
      let tmp13 = items2;
      let applyResult = HermesBuiltin.apply(items5, items2);
    }
    const options1 = command.options;
    const found1 = options1.filter((type) => type.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.SUB_COMMAND);
    for (let num5 = 0; num5 < found1.length; num5 = num5 + 1) {
      let obj2 = { rootCommand, command: found1[num5], applicationId };
      let items6 = subCommandPath;
      let tmp15 = buildCommand;
      if (null == subCommandPath) {
        items6 = [];
      }
      let obj3 = { name: found1[num5].name };
      let tmp16 = require;
      let tmp17 = dependencyMap;
      obj3.type = require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND;
      let name2 = found1[num5].name_localized;
      if (null == name2) {
        name2 = found1[num5].name;
      }
      obj3.displayName = name2;
      let items7 = [obj3];
      obj2.subCommandPath = items6.concat(items7);
      obj2.useKeyedPermissions = useKeyedPermissions;
      let arr = items2.push(tmp15(obj2));
    }
    if (tmp19) {
      const obj4 = { rootCommand, command, applicationId, subCommandPath, useKeyedPermissions };
      items2.push(buildCommand(obj4));
    }
    return items2;
  }
}
function hasAccessGivenPerms(selfMember, id, commandLevelPermissions) {
  const obj = require(6754) /* toPermissionKey */;
  const tmp = commandLevelPermissions[obj.toPermissionKey(obj, selfMember.userId, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.USER)];
  if (null != tmp) {
    return tmp.permission;
  } else {
    const tmp11 = _createForOfIteratorHelperLoose(selfMember.roles);
    const iter3 = tmp11();
    let iter2 = iter3;
    let flag = false;
    let flag2 = false;
    if (!iter3.done) {
      while (true) {
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let obj2 = require(6754) /* toPermissionKey */;
        let tmp4 = commandLevelPermissions[obj2.toPermissionKey(obj2, iter2.value, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.ROLE)];
        if (null != tmp4) {
          flag = true;
          if (tmp4.permission) {
            break;
          }
        }
        let iter = tmp11();
        iter2 = iter;
        flag2 = flag;
      }
      return true;
    }
    if (flag2) {
      return false;
    } else {
      const obj3 = require(6754) /* toPermissionKey */;
      const tmp8 = commandLevelPermissions[obj3.toPermissionKey(obj3, id, require(undefined, 6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.ROLE)];
      let permission = null;
      if (null != tmp8) {
        permission = tmp8.permission;
      }
      return permission;
    }
  }
}
({ BuiltInSectionId: closure_6, SUB_COMMAND_KEY_SEPARATOR: closure_7 } = TRUE_OPTION_NAME);
({ AnalyticEvents: closure_8, ID_REGEX: closure_9 } = ME);
let result = require("TRUE_OPTION_NAME").fileFinishedImporting("modules/application_commands/ApplicationCommandUtils.tsx");

export { buildCommand };
export const buildApplicationCommands = function buildApplicationCommands(application_commands, arg1) {
  let closure_0 = arg1;
  return importDefault(22).flatMap(application_commands, (id) => {
    outer1_1(outer1_3[10])(null != id.id, "Missing command id");
    return outer1_16({ rootCommand: id, command: id, applicationId: id.application_id, subCommandPath: undefined, useKeyedPermissions: closure_0 });
  });
};
export const applicationPermissionsList = function applicationPermissionsList(arr) {
  let reduced;
  if (null != arr) {
    reduced = arr.reduce((arr, applicationCommandPermissions) => {
      if (null != applicationCommandPermissions.applicationCommandPermissions) {
        const obj = {};
        ({ id: obj.id, applicationCommandPermissions: obj.permissions } = applicationCommandPermissions);
        arr.push(obj);
      }
      return arr;
    }, []);
  }
  return reduced;
};
export const isSnowflake = function isSnowflake(text) {
  return regex.test(text.trim());
};
export const getMatchingGroupCommands = function getMatchingGroupCommands(contextCommands, regExp, closure_3, arg3) {
  let closure_0 = regExp;
  const importDefault = closure_3;
  const items = [];
  const item = importDefault(22)(contextCommands).forEach((displayName) => {
    let isMatch = regex.test(displayName.displayName);
    if (isMatch) {
      let predicateResult = null == displayName.predicate;
      if (!predicateResult) {
        predicateResult = displayName.predicate(closure_1);
      }
      isMatch = predicateResult;
    }
    if (isMatch) {
      items.push(displayName);
    }
  });
  return items.slice(0, arg3);
};
export const getApplicationCommandOptionQueryOptions = function getApplicationCommandOptionQueryOptions(activeOption) {
  const tmp = activeOption.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.STRING;
  let tmp3 = activeOption.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.USER;
  if (!tmp3) {
    tmp3 = activeOption.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.MENTIONABLE;
  }
  let tmp6 = activeOption.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.ROLE;
  if (!tmp6) {
    tmp6 = activeOption.type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.MENTIONABLE;
  }
  const obj = {};
  let tmp9 = tmp;
  if (!tmp) {
    tmp9 = tmp6;
  }
  obj.canMentionEveryone = tmp9;
  obj.canMentionHere = tmp;
  let tmp10 = tmp;
  if (!tmp) {
    tmp10 = tmp2;
  }
  obj.canMentionChannels = tmp10;
  let tmp11 = tmp;
  if (!tmp) {
    tmp11 = tmp3;
  }
  obj.canMentionUsers = tmp11;
  let tmp12 = tmp;
  if (!tmp) {
    tmp12 = tmp6;
  }
  obj.canMentionRoles = tmp12;
  obj.canMentionAnyGuildUser = tmp3;
  obj.canMentionNonMentionableRoles = tmp6;
  obj.canMentionOtherGlobals = tmp;
  return obj;
};
export const allChannelsSentinel = function allChannelsSentinel(guild_id) {
  const obj = importDefault(24)(guild_id);
  return importDefault(24)(guild_id).subtract(1).toString();
};
export const canUseApplicationCommands = function canUseApplicationCommands(can, arg1, isMultiUserDM) {
  let tmp = !arg1;
  if (tmp) {
    const tmp2 = !isMultiUserDM.isMultiUserDM();
    if (!tmp2) {
      tmp = !tmp2;
    } else if (isMultiUserDM.isDM()) {
      let canResult = !isMultiUserDM.isSystemDM();
    } else if (isMultiUserDM.isArchivedLockedThread()) {
      canResult = can.can(importAll(483).combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.MANAGE_THREADS), isMultiUserDM);
      const obj2 = importAll(483);
    } else {
      const tmp4 = !isReadableType(isMultiUserDM.type);
      canResult = !tmp4;
      if (!tmp4) {
        canResult = can.can(importAll(483).combine(Permissions.USE_APPLICATION_COMMANDS, Permissions.SEND_MESSAGES), isMultiUserDM);
        const obj = importAll(483);
      }
    }
  }
  return tmp;
};
export const DISABLED_BY_DEFAULT_PERMISSION_FLAG = deserializeResult;
export const hasAccess = function hasAccess(arg0) {
  let PermissionStore;
  let commandLevelPermissions;
  let defaultMemberPermissions;
  let guild;
  let selfMember;
  ({ PermissionStore, guild, selfMember, commandLevelPermissions, defaultMemberPermissions } = arg0);
  if (guild.ownerId !== selfMember.userId) {
    if (!PermissionStore.can(Permissions.ADMINISTRATOR, guild)) {
      const id = guild.id;
      if (null != commandLevelPermissions) {
        const tmp4 = hasAccessGivenPerms(selfMember, id, commandLevelPermissions);
        if ("boolean" === typeof tmp4) {
          return tmp4;
        }
      }
      const tmp6 = hasAccessGivenPerms(selfMember, id, tmp);
      let tmp8 = !tmp7;
      if (!("boolean" === typeof tmp6 && !tmp6)) {
        let tmp9 = null == defaultMemberPermissions;
        if (!tmp9) {
          const obj = importAll(483);
          tmp9 = !importAll(483).equals(defaultMemberPermissions, closure_11) && PermissionStore.can(defaultMemberPermissions, guild);
          const tmp13 = !importAll(483).equals(defaultMemberPermissions, closure_11) && PermissionStore.can(defaultMemberPermissions, guild);
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  }
  return true;
};
export const getCommandAttachmentDraftType = function getCommandAttachmentDraftType(commandOrigin) {
  if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.CHAT === commandOrigin) {
    return DraftType.SlashCommand;
  } else {
    return DraftType.ApplicationLauncherCommand;
  }
};
export const getCommandTriggerSection = function getCommandTriggerSection(closure_3) {
  if (null != closure_3) {
    if (closure_3.id === constants.BUILT_IN) {
      let APP = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerSections.BUILT_IN;
    } else if (closure_3.id === constants.FRECENCY) {
      APP = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerSections.FRECENCY;
    } else {
      APP = require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerSections.APP;
    }
    return APP;
  }
};
export const getApplicationCommandSection = function getApplicationCommandSection(application, arg1, arg2) {
  let name = arg2;
  const obj = { type: require(6755) /* ApplicationCommandSectionType */.ApplicationCommandSectionType.APPLICATION, id: application.id };
  if (null == arg2) {
    let username;
    if (null != application) {
      const bot = application.bot;
      if (null != bot) {
        username = bot.username;
      }
    }
    name = username;
  }
  if (null == name) {
    name = application.name;
  }
  obj.name = name;
  obj.icon = application.icon;
  obj.application = application;
  obj.isUserApp = null != arg1 && arg1;
  return obj;
};
export const extractInteractionDataProps = function extractInteractionDataProps(parsed) {
  let id;
  let options;
  ({ id, options } = parsed);
  let found;
  if (null != options) {
    found = options.find((type) => type.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.SUB_COMMAND_GROUP);
  }
  let sum = id;
  if (null != found) {
    const _HermesInternal = HermesInternal;
    sum = id + "" + closure_7 + found.name;
    options = found.options;
  }
  let found1;
  if (null != options) {
    found1 = options.find((type) => type.type === outer1_0(outer1_3[6]).ApplicationCommandOptionType.SUB_COMMAND);
  }
  let sum1 = sum;
  if (null != found1) {
    const _HermesInternal2 = HermesInternal;
    sum1 = sum + "" + closure_7 + found1.name;
    options = found1.options;
  }
  const obj = { commandKey: sum1, interactionOptions: options };
  return obj;
};
export const trackCommandSelected = function trackCommandSelected(command) {
  let _location;
  let query;
  let queryLength;
  let searchResultsPosition;
  let sectionName;
  let source;
  let triggerSection;
  command = command.command;
  ({ location: _location, triggerSection, queryLength, sectionName, query, searchResultsPosition, source } = command);
  let obj = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = {};
  const rootCommand = command.rootCommand;
  let id;
  if (null != rootCommand) {
    id = rootCommand.id;
  }
  if (null == id) {
    id = command.id;
  }
  obj.command_id = id;
  obj.application_id = command.applicationId;
  obj.location = _location;
  obj.section = triggerSection;
  obj.query_length = queryLength;
  obj.command_text_length = command.displayName.length;
  obj.section_name = sectionName;
  obj.query = query;
  obj.search_results_position = searchResultsPosition;
  obj.source = source;
  obj.trackWithMetadata(constants2.APPLICATION_COMMAND_SELECTED, obj);
};
export const getInitialInteractionMetadata = function getInitialInteractionMetadata(interactionMetadata) {
  interactionMetadata = interactionMetadata.interactionMetadata;
  let tmp = null;
  if (null != interactionMetadata) {
    let triggering_interaction_metadata = interactionMetadata;
    if ("triggering_interaction_metadata" in interactionMetadata) {
      triggering_interaction_metadata = interactionMetadata.triggering_interaction_metadata;
    }
    tmp = triggering_interaction_metadata;
  }
  return tmp;
};
export const hasCommandIndexForApp = function hasCommandIndexForApp(id, guildState) {
  const result = guildState.result;
  let sections;
  if (null != result) {
    sections = result.sections;
  }
  let tmp2 = null != sections;
  if (tmp2) {
    tmp2 = id in sections;
  }
  return tmp2;
};
