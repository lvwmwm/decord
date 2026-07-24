// Module ID: 16273
// Function ID: 126386
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 16274, 1352, 1911, 1917, 1910, 1838, 653, 483, 22, 566, 686, 2]

// Module 16273 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AuditLogChange } from "_isNativeReflectConstruct";
import { isGuildSelectableChannelType as closure_9 } from "_callSuper";
import { hasAnyPermission } from "GuildRoleRecordTypeTag";
import closure_11 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import importAllResult from "fromHexReverseArray";

let Permissions;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function transformEntries(logs) {
  let items = [];
  let c1 = 0;
  const reversed = logs.reverse();
  const item = reversed.forEach((id) => {
    let iter2;
    const items = [];
    if (null != id.reason) {
      const prototype = outer1_8.prototype;
      const tmp6 = new outer1_8(outer1_17.REASON, null, id.reason);
      items.push(tmp6);
    }
    let tmp9 = null;
    let tmp10 = null;
    let tmp11 = null;
    if (null != id.changes) {
      const tmp13 = outer1_41(id.changes);
      let iter = tmp13();
      let tmp14 = null;
      let tmp15 = null;
      let tmp16 = null;
      tmp9 = null;
      tmp10 = null;
      tmp11 = null;
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp17 = outer1_8;
          let prototype2 = outer1_8.prototype;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let tmp20 = new outer1_8(value.key, value.old_value, value.new_value);
          let tmp21 = tmp20;
          let arr = items.push(tmp20);
          let tmp23 = outer1_17;
          let tmp24 = tmp20;
          let tmp25 = tmp15;
          let tmp26 = tmp16;
          if (tmp20.key !== outer1_17.NAME) {
            let tmp27 = outer1_17;
            tmp24 = tmp14;
            tmp25 = tmp15;
            tmp26 = tmp20;
            if (tmp20.key !== outer1_17.TYPE) {
              let tmp28 = outer1_17;
              tmp24 = tmp14;
              tmp25 = tmp15;
              tmp26 = tmp16;
              if (tmp20.key === outer1_17.TITLE) {
                tmp24 = tmp14;
                tmp25 = tmp20;
                tmp26 = tmp16;
              }
            }
          }
          iter2 = tmp13();
          tmp14 = tmp24;
          tmp15 = tmp25;
          tmp16 = tmp26;
          iter = iter2;
          tmp9 = tmp24;
          tmp10 = tmp25;
          tmp11 = tmp26;
        } while (!iter2.done);
      }
    }
    if (id.action_type === outer1_14.MEMBER_PRUNE) {
      let num2 = 1;
      if (null != id) {
        num2 = 1;
        if (null != id.options) {
          num2 = 1;
          if (null != id.options.delete_member_days) {
            num2 = id.options.delete_member_days;
          }
        }
      }
      const prototype3 = outer1_8.prototype;
      const tmp35 = new outer1_8(outer1_17.PRUNE_DELETE_DAYS, null, num2);
      items.push(tmp35);
    }
    if (id.action_type === outer1_14.AUTO_MODERATION_BLOCK_MESSAGE) {
      const options = id.options;
      let prop;
      if (null != options) {
        prop = options.auto_moderation_rule_name;
      }
      if (null != prop) {
        const prototype4 = outer1_8.prototype;
        const tmp44 = new outer1_8(outer1_17.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, id.options.auto_moderation_rule_name);
        items.push(tmp44);
      }
    }
    let tmp47 = id.action_type === outer1_14.VOICE_CHANNEL_STATUS_CREATE;
    if (tmp47) {
      const options2 = id.options;
      let status;
      if (null != options2) {
        status = options2.status;
      }
      tmp47 = null != status;
    }
    if (tmp47) {
      const prototype5 = outer1_8.prototype;
      const tmp54 = new outer1_8(outer1_17.STATUS, null, id.options.status);
      items.push(tmp54);
    }
    let obj = { id: id.id, action: id.action_type, targetId: id.target_id, userId: id.user_id, changes: items, options: id.options };
    const tmp57 = new outer1_7(obj);
    const first = items[0];
    let isEqualResult = null != first;
    if (isEqualResult) {
      isEqualResult = first.action === tmp57.action;
    }
    if (isEqualResult) {
      isEqualResult = first.targetId === tmp57.targetId;
    }
    if (isEqualResult) {
      isEqualResult = first.userId === tmp57.userId;
    }
    if (isEqualResult) {
      isEqualResult = items(table[13]).isEqual(first.options, tmp57.options);
      const obj3 = items(table[13]);
    }
    if (isEqualResult) {
      const timestampStart = tmp57.timestampStart;
      isEqualResult = timestampStart.diff(first.timestampStart, "minutes") < 30;
    }
    if (isEqualResult) {
      isEqualResult = tmp58 < 50;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.targetType !== outer1_16.INVITE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MESSAGE_DELETE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MESSAGE_BULK_DELETE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MESSAGE_PIN;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MESSAGE_UNPIN;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MEMBER_MOVE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MEMBER_DISCONNECT;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.BOT_ADD;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.APPLICATION_COMMAND_PERMISSION_UPDATE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== outer1_14.MEMBER_PRUNE;
    }
    if (isEqualResult) {
      obj = {};
      const items1 = [];
      HermesBuiltin.arraySpread(tmp57.changes, HermesBuiltin.arraySpread(first.changes, 0));
      obj.changes = items1;
      obj.timestampEnd = tmp57.timestampStart;
      items[0] = first.merge(obj);
      table = +table + 1;
    } else {
      if (tmp57.actionType === outer1_15.DELETE) {
        if (null != tmp9) {
          let oldValue;
          if (null != tmp9) {
            oldValue = tmp9.oldValue;
          }
          if (null == oldValue) {
            let oldValue1;
            if (null != tmp10) {
              oldValue1 = tmp10.oldValue;
            }
            oldValue = oldValue1;
          }
          let tmp76 = tmp57.targetType !== outer1_16.CHANNEL;
          if (tmp76) {
            tmp76 = tmp57.targetType !== outer1_16.CHANNEL_OVERWRITE;
          }
          if (!tmp76) {
            tmp76 = null === tmp11;
          }
          if (!tmp76) {
            tmp76 = !outer1_9(tmp11.oldValue);
          }
          let combined = oldValue;
          if (!tmp76) {
            const _HermesInternal = HermesInternal;
            combined = "#" + oldValue;
          }
          if (null == outer1_38[tmp57.targetType]) {
            obj = {};
            obj[tmp57.targetId] = combined;
            outer1_38[tmp57.targetType] = obj;
          } else {
            outer1_38[tmp57.targetType][tmp57.targetId] = combined;
          }
        }
      }
      table = 0;
      items.unshift(tmp57);
    }
    tmp58 = table;
  });
  return items;
}
function handleSettingsSetSection(section) {
  let importDefault;
  let unsafeMutableRoles;
  if (section.section !== constants.AUDIT_LOG) {
    return false;
  } else {
    members = members.getMembers(c21);
    importDefault = guild.getGuild(c21);
    unsafeMutableRoles = undefined;
    if (null != c21) {
      unsafeMutableRoles = unsafeMutableRoles.getUnsafeMutableRoles(c21);
    }
    const found = importDefault(unsafeMutableRoles[13])(members).filter((roles) => {
      let closure_0 = roles;
      roles = roles.roles;
      return roles.some((arg0) => {
        if (null != closure_0) {
          if (closure_0.userId === closure_0.ownerId) {
            return true;
          } else {
            let tmp4;
            if (null != outer1_1) {
              tmp4 = outer1_1[arg0];
            }
            let tmp7 = null != tmp4;
            if (tmp7) {
              tmp7 = outer2_10(tmp4, outer2_20);
            }
            return tmp7;
          }
        }
      });
    });
    const arr = importDefault(unsafeMutableRoles[13])(members);
    let closure_24 = found.map((userId) => userId.userId).value();
  }
}
const AuditLogActions = ME.AuditLogActions;
({ AuditLogActionTypes: closure_15, AuditLogTargetTypes: closure_16, AuditLogChangeKeys: closure_17, AUDIT_LOG_PAGE_LIMIT: closure_18, GuildSettingsSections: closure_19, Permissions } = ME);
let closure_20 = require("fromHexReverseArray").combine(Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.ADMINISTRATOR, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_GUILD, Permissions.MANAGE_MESSAGES, Permissions.MANAGE_NICKNAMES, Permissions.MANAGE_ROLES, Permissions.MANAGE_WEBHOOKS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MOVE_MEMBERS, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS);
let c21 = null;
let closure_22 = [];
let closure_23 = [];
let closure_24 = [];
let closure_25 = [];
let closure_26 = [];
let closure_27 = [];
let closure_28 = [];
let closure_29 = [];
let c30 = true;
let c31 = false;
let c32 = false;
let c33 = true;
let c34 = false;
let c35 = null;
let ALL = AuditLogActions.ALL;
let c37 = null;
let closure_38 = {};
let c39 = 0;
let tmp3 = ((Store) => {
  class GuildSettingsAuditLogStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildSettingsAuditLogStore);
      obj = outer1_5(GuildSettingsAuditLogStore);
      tmp2 = outer1_4;
      if (outer1_40()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildSettingsAuditLogStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_13, outer1_12, outer1_11);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "logs",
    get() {
      return outer1_22;
    }
  };
  items[1] = obj;
  obj = {
    key: "integrations",
    get() {
      return outer1_23;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "webhooks",
    get() {
      return outer1_25;
    }
  };
  items[4] = {
    key: "guildScheduledEvents",
    get() {
      return outer1_26;
    }
  };
  items[5] = {
    key: "automodRules",
    get() {
      return outer1_27;
    }
  };
  items[6] = {
    key: "threads",
    get() {
      return outer1_28;
    }
  };
  items[7] = {
    key: "applicationCommands",
    get() {
      return outer1_29;
    }
  };
  items[8] = {
    key: "isInitialLoading",
    get() {
      return outer1_30;
    }
  };
  items[9] = {
    key: "isLoading",
    get() {
      return outer1_31;
    }
  };
  items[10] = {
    key: "isLoadingNextPage",
    get() {
      return outer1_32;
    }
  };
  items[11] = {
    key: "hasOlderLogs",
    get() {
      return outer1_33;
    }
  };
  items[12] = {
    key: "hasError",
    get() {
      return outer1_34;
    }
  };
  items[13] = {
    key: "userIds",
    get() {
      return outer1_24;
    }
  };
  items[14] = {
    key: "userIdFilter",
    get() {
      return outer1_35;
    }
  };
  items[15] = {
    key: "targetIdFilter",
    get() {
      return outer1_37;
    }
  };
  items[16] = {
    key: "actionFilter",
    get() {
      return outer1_36;
    }
  };
  items[17] = {
    key: "deletedTargets",
    get() {
      return outer1_38;
    }
  };
  items[18] = {
    key: "groupedFetchCount",
    get() {
      return outer1_39;
    }
  };
  return callback(GuildSettingsAuditLogStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildSettingsAuditLogStore";
tmp3 = new tmp3(require("dispatcher"), {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    let c31 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    let automodRules;
    let closure_23;
    let closure_25;
    let closure_26;
    let closure_28;
    let closure_29;
    let c39 = 0;
    let c30 = false;
    let c31 = false;
    let c33 = true;
    let c34 = false;
    let closure_22 = transformEntries(logs.logs);
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules } = logs);
    if (null == automodRules) {
      automodRules = [];
    }
    ({ threads: closure_28, applicationCommands: closure_29 } = logs);
    if (logs.logs.length < closure_18) {
      c33 = false;
    }
  },
  AUDIT_LOG_FETCH_FAIL: function handleFetchedLogsFail() {
    let c31 = false;
    let c34 = true;
    let closure_22 = [];
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function handleStartFetchNextPage(isGroupedFetch) {
    let c32 = true;
    if (isGroupedFetch.isGroupedFetch) {
      closure_39 = closure_39 + 1;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function handleFetchedNextPage(logs) {
    let closure_23;
    let closure_25;
    let closure_26;
    let closure_27;
    let closure_28;
    let closure_29;
    logs = logs.logs;
    let c32 = false;
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules: closure_27, threads: closure_28, applicationCommands: closure_29 } = logs);
    let tmp = 0 === logs.length;
    if (!tmp) {
      tmp = logs.length < closure_18;
    }
    if (tmp) {
      let c33 = false;
    }
    if (logs.length > 0) {
      const tmp4 = transformEntries(logs);
      const items = [];
      HermesBuiltin.arraySpread(tmp4, HermesBuiltin.arraySpread(items, 0));
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    let c32 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    action = action.action;
  },
  AUDIT_LOG_FILTER_BY_USER: function handleFilterByUser(userId) {
    userId = userId.userId;
  },
  AUDIT_LOG_FILTER_BY_TARGET: function handleFilterByTarget(targetId) {
    targetId = targetId.targetId;
  },
  GUILD_SETTINGS_SET_SECTION: handleSettingsSetSection,
  GUILD_SETTINGS_INIT: function handleSettingsInit(guildId) {
    guildId = guildId.guildId;
    let c37 = null;
    return handleSettingsSetSection({ section: guildId.section });
  },
  GUILD_SETTINGS_CLOSE: function handleSettingsClose() {
    let closure_22 = [];
    let closure_24 = [];
    const ALL = AuditLogActions.ALL;
    let c35 = null;
    let c37 = null;
    let closure_38 = {};
    let c39 = 0;
    let c30 = true;
    let closure_23 = [];
    let closure_25 = [];
    let closure_26 = [];
    let closure_27 = [];
    let closure_28 = [];
  }
});
let obj = {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    let c31 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    let automodRules;
    let closure_23;
    let closure_25;
    let closure_26;
    let closure_28;
    let closure_29;
    let c39 = 0;
    let c30 = false;
    let c31 = false;
    let c33 = true;
    let c34 = false;
    let closure_22 = transformEntries(logs.logs);
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules } = logs);
    if (null == automodRules) {
      automodRules = [];
    }
    ({ threads: closure_28, applicationCommands: closure_29 } = logs);
    if (logs.logs.length < closure_18) {
      c33 = false;
    }
  },
  AUDIT_LOG_FETCH_FAIL: function handleFetchedLogsFail() {
    let c31 = false;
    let c34 = true;
    let closure_22 = [];
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function handleStartFetchNextPage(isGroupedFetch) {
    let c32 = true;
    if (isGroupedFetch.isGroupedFetch) {
      closure_39 = closure_39 + 1;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function handleFetchedNextPage(logs) {
    let closure_23;
    let closure_25;
    let closure_26;
    let closure_27;
    let closure_28;
    let closure_29;
    logs = logs.logs;
    let c32 = false;
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules: closure_27, threads: closure_28, applicationCommands: closure_29 } = logs);
    let tmp = 0 === logs.length;
    if (!tmp) {
      tmp = logs.length < closure_18;
    }
    if (tmp) {
      let c33 = false;
    }
    if (logs.length > 0) {
      const tmp4 = transformEntries(logs);
      const items = [];
      HermesBuiltin.arraySpread(tmp4, HermesBuiltin.arraySpread(items, 0));
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    let c32 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    action = action.action;
  },
  AUDIT_LOG_FILTER_BY_USER: function handleFilterByUser(userId) {
    userId = userId.userId;
  },
  AUDIT_LOG_FILTER_BY_TARGET: function handleFilterByTarget(targetId) {
    targetId = targetId.targetId;
  },
  GUILD_SETTINGS_SET_SECTION: handleSettingsSetSection,
  GUILD_SETTINGS_INIT: function handleSettingsInit(guildId) {
    guildId = guildId.guildId;
    let c37 = null;
    return handleSettingsSetSection({ section: guildId.section });
  },
  GUILD_SETTINGS_CLOSE: function handleSettingsClose() {
    let closure_22 = [];
    let closure_24 = [];
    const ALL = AuditLogActions.ALL;
    let c35 = null;
    let c37 = null;
    let closure_38 = {};
    let c39 = 0;
    let c30 = true;
    let closure_23 = [];
    let closure_25 = [];
    let closure_26 = [];
    let closure_27 = [];
    let closure_28 = [];
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx");

export default tmp3;
