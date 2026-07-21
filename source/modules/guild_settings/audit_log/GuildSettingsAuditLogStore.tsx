// Module ID: 16093
// Function ID: 123786
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16093 (_isNativeReflectConstruct)
let Permissions;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function transformEntries(logs) {
  const items = [];
  const importDefault = items;
  let closure_1 = 0;
  const reversed = logs.reverse();
  const item = reversed.forEach((id) => {
    let iter2;
    const items = [];
    if (null != id.reason) {
      const prototype = ctor.prototype;
      const tmp6 = new ctor(constants4.REASON, null, id.reason);
      items.push(tmp6);
    }
    let tmp9 = null;
    let tmp10 = null;
    let tmp11 = null;
    if (null != id.changes) {
      const tmp13 = callback2(id.changes);
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
          let tmp17 = closure_8;
          let prototype2 = closure_8.prototype;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let tmp20 = new closure_8(value.key, value.old_value, value.new_value);
          let tmp21 = tmp20;
          let arr = items.push(tmp20);
          let tmp23 = closure_17;
          let tmp24 = tmp20;
          let tmp25 = tmp15;
          let tmp26 = tmp16;
          if (tmp20.key !== closure_17.NAME) {
            let tmp27 = closure_17;
            tmp24 = tmp14;
            tmp25 = tmp15;
            tmp26 = tmp20;
            if (tmp20.key !== closure_17.TYPE) {
              let tmp28 = closure_17;
              tmp24 = tmp14;
              tmp25 = tmp15;
              tmp26 = tmp16;
              if (tmp20.key === closure_17.TITLE) {
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
    if (id.action_type === constants.MEMBER_PRUNE) {
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
      const prototype3 = ctor.prototype;
      const tmp35 = new ctor(constants4.PRUNE_DELETE_DAYS, null, num2);
      items.push(tmp35);
    }
    if (id.action_type === constants.AUTO_MODERATION_BLOCK_MESSAGE) {
      const options = id.options;
      let prop;
      if (null != options) {
        prop = options.auto_moderation_rule_name;
      }
      if (null != prop) {
        const prototype4 = ctor.prototype;
        const tmp44 = new ctor(constants4.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, id.options.auto_moderation_rule_name);
        items.push(tmp44);
      }
    }
    let tmp47 = id.action_type === constants.VOICE_CHANNEL_STATUS_CREATE;
    if (tmp47) {
      const options2 = id.options;
      let status;
      if (null != options2) {
        status = options2.status;
      }
      tmp47 = null != status;
    }
    if (tmp47) {
      const prototype5 = ctor.prototype;
      const tmp54 = new ctor(constants4.STATUS, null, id.options.status);
      items.push(tmp54);
    }
    let obj = { id: id.id, action: id.action_type, targetId: id.target_id, userId: id.user_id, changes: items, options: id.options };
    const tmp57 = new closure_7(obj);
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
      isEqualResult = items(closure_1[13]).isEqual(first.options, tmp57.options);
      const obj3 = items(closure_1[13]);
    }
    if (isEqualResult) {
      const timestampStart = tmp57.timestampStart;
      isEqualResult = timestampStart.diff(first.timestampStart, "minutes") < 30;
    }
    if (isEqualResult) {
      isEqualResult = tmp58 < 50;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.targetType !== constants3.INVITE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MESSAGE_DELETE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MESSAGE_BULK_DELETE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MESSAGE_PIN;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MESSAGE_UNPIN;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MEMBER_MOVE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MEMBER_DISCONNECT;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.BOT_ADD;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.APPLICATION_COMMAND_PERMISSION_UPDATE;
    }
    if (isEqualResult) {
      isEqualResult = tmp57.action !== constants.MEMBER_PRUNE;
    }
    if (isEqualResult) {
      obj = {};
      const items1 = [];
      HermesBuiltin.arraySpread(tmp57.changes, HermesBuiltin.arraySpread(first.changes, 0));
      obj.changes = items1;
      obj.timestampEnd = tmp57.timestampStart;
      items[0] = first.merge(obj);
      closure_1 = +closure_1 + 1;
    } else {
      if (tmp57.actionType === constants2.DELETE) {
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
          let tmp76 = tmp57.targetType !== constants3.CHANNEL;
          if (tmp76) {
            tmp76 = tmp57.targetType !== constants3.CHANNEL_OVERWRITE;
          }
          if (!tmp76) {
            tmp76 = null === tmp11;
          }
          if (!tmp76) {
            tmp76 = !callback(tmp11.oldValue);
          }
          let combined = oldValue;
          if (!tmp76) {
            const _HermesInternal = HermesInternal;
            combined = "#" + oldValue;
          }
          if (null == closure_38[tmp57.targetType]) {
            obj = {};
            obj[tmp57.targetId] = combined;
            closure_38[tmp57.targetType] = obj;
          } else {
            closure_38[tmp57.targetType][tmp57.targetId] = combined;
          }
        }
      }
      closure_1 = 0;
      items.unshift(tmp57);
    }
    const tmp58 = closure_1;
  });
  return items;
}
function handleSettingsSetSection(section) {
  let importDefault;
  let dependencyMap;
  if (section.section !== constants.AUDIT_LOG) {
    return false;
  } else {
    const members = members.getMembers(closure_21);
    importDefault = guild.getGuild(closure_21);
    let unsafeMutableRoles;
    if (null != closure_21) {
      unsafeMutableRoles = unsafeMutableRoles.getUnsafeMutableRoles(closure_21);
    }
    dependencyMap = unsafeMutableRoles;
    const found = importDefault(dependencyMap[13])(members).filter((roles) => {
      let closure_0 = roles;
      roles = roles.roles;
      return roles.some((self) => {
        if (null != self) {
          if (self.userId === self.ownerId) {
            return true;
          } else {
            let tmp4;
            if (null != closure_1) {
              tmp4 = closure_1[self];
            }
            let tmp7 = null != tmp4;
            if (tmp7) {
              tmp7 = callback(tmp4, closure_20);
            }
            return tmp7;
          }
        }
      });
    });
    const arr = importDefault(dependencyMap[13])(members);
    let closure_24 = found.map((userId) => userId.userId).value();
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const AuditLogChange = arg1(dependencyMap[5]).AuditLogChange;
let closure_9 = arg1(dependencyMap[6]).isGuildSelectableChannelType;
const hasAnyPermission = arg1(dependencyMap[7]).hasAnyPermission;
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const tmp2 = arg1(dependencyMap[11]);
const AuditLogActions = tmp2.AuditLogActions;
({ AuditLogActionTypes: closure_15, AuditLogTargetTypes: closure_16, AuditLogChangeKeys: closure_17, AUDIT_LOG_PAGE_LIMIT: closure_18, GuildSettingsSections: closure_19, Permissions } = tmp2);
let closure_20 = importAll(dependencyMap[12]).combine(Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.ADMINISTRATOR, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_GUILD, Permissions.MANAGE_MESSAGES, Permissions.MANAGE_NICKNAMES, Permissions.MANAGE_ROLES, Permissions.MANAGE_WEBHOOKS, Permissions.MANAGE_GUILD_EXPRESSIONS, Permissions.MOVE_MEMBERS, Permissions.MUTE_MEMBERS, Permissions.DEAFEN_MEMBERS);
let closure_21 = null;
let closure_22 = [];
let closure_23 = [];
let closure_24 = [];
let closure_25 = [];
let closure_26 = [];
let closure_27 = [];
let closure_28 = [];
let closure_29 = [];
let closure_30 = true;
let closure_31 = false;
let closure_32 = false;
let closure_33 = true;
let closure_34 = false;
let closure_35 = null;
const ALL = AuditLogActions.ALL;
let closure_37 = null;
let closure_38 = {};
let closure_39 = 0;
let tmp3 = (Store) => {
  class GuildSettingsAuditLogStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildSettingsAuditLogStore);
      obj = closure_5(GuildSettingsAuditLogStore);
      tmp2 = closure_4;
      if (closure_40()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildSettingsAuditLogStore;
  callback2(GuildSettingsAuditLogStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_13, closure_12, closure_11);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "logs",
    get() {
      return closure_22;
    }
  };
  items[1] = obj;
  obj = {
    key: "integrations",
    get() {
      return closure_23;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "webhooks",
    get() {
      return closure_25;
    }
  };
  items[4] = {
    key: "guildScheduledEvents",
    get() {
      return closure_26;
    }
  };
  items[5] = {
    key: "automodRules",
    get() {
      return closure_27;
    }
  };
  items[6] = {
    key: "threads",
    get() {
      return closure_28;
    }
  };
  items[7] = {
    key: "applicationCommands",
    get() {
      return closure_29;
    }
  };
  items[8] = {
    key: "isInitialLoading",
    get() {
      return closure_30;
    }
  };
  items[9] = {
    key: "isLoading",
    get() {
      return closure_31;
    }
  };
  items[10] = {
    key: "isLoadingNextPage",
    get() {
      return closure_32;
    }
  };
  items[11] = {
    key: "hasOlderLogs",
    get() {
      return closure_33;
    }
  };
  items[12] = {
    key: "hasError",
    get() {
      return closure_34;
    }
  };
  items[13] = {
    key: "userIds",
    get() {
      return closure_24;
    }
  };
  items[14] = {
    key: "userIdFilter",
    get() {
      return closure_35;
    }
  };
  items[15] = {
    key: "targetIdFilter",
    get() {
      return closure_37;
    }
  };
  items[16] = {
    key: "actionFilter",
    get() {
      return closure_36;
    }
  };
  items[17] = {
    key: "deletedTargets",
    get() {
      return closure_38;
    }
  };
  items[18] = {
    key: "groupedFetchCount",
    get() {
      return closure_39;
    }
  };
  return callback(GuildSettingsAuditLogStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp3.displayName = "GuildSettingsAuditLogStore";
tmp3 = new tmp3(importDefault(dependencyMap[15]), {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    let closure_31 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    let automodRules;
    let closure_39 = 0;
    let closure_30 = false;
    let closure_31 = false;
    let closure_33 = true;
    let closure_34 = false;
    let closure_22 = transformEntries(logs.logs);
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules } = logs);
    if (null == automodRules) {
      automodRules = [];
    }
    let closure_27 = automodRules;
    ({ threads: closure_28, applicationCommands: closure_29 } = logs);
    if (logs.logs.length < closure_18) {
      closure_33 = false;
    }
  },
  AUDIT_LOG_FETCH_FAIL: function handleFetchedLogsFail() {
    let closure_31 = false;
    let closure_34 = true;
    let closure_22 = [];
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function handleStartFetchNextPage(isGroupedFetch) {
    let closure_32 = true;
    if (isGroupedFetch.isGroupedFetch) {
      closure_39 = closure_39 + 1;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function handleFetchedNextPage(logs) {
    logs = logs.logs;
    let closure_32 = false;
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules: closure_27, threads: closure_28, applicationCommands: closure_29 } = logs);
    let tmp = 0 === logs.length;
    if (!tmp) {
      tmp = logs.length < closure_18;
    }
    if (tmp) {
      let closure_33 = false;
    }
    if (logs.length > 0) {
      const tmp4 = transformEntries(logs);
      const items = [];
      HermesBuiltin.arraySpread(tmp4, HermesBuiltin.arraySpread(closure_22, 0));
      closure_22 = items;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    let closure_32 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    const ALL = action.action;
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
    let closure_37 = null;
    return handleSettingsSetSection({ section: guildId.section });
  },
  GUILD_SETTINGS_CLOSE: function handleSettingsClose() {
    let closure_22 = [];
    let closure_24 = [];
    const ALL = AuditLogActions.ALL;
    let closure_35 = null;
    let closure_37 = null;
    let closure_38 = {};
    let closure_39 = 0;
    let closure_30 = true;
    let closure_23 = [];
    let closure_25 = [];
    let closure_26 = [];
    let closure_27 = [];
    let closure_28 = [];
  }
});
const importAllResult = importAll(dependencyMap[12]);
const obj = {
  AUDIT_LOG_FETCH_START: function handleStartFetchingLogs() {
    let closure_31 = true;
  },
  AUDIT_LOG_FETCH_SUCCESS: function handleFetchedLogs(logs) {
    let automodRules;
    let closure_39 = 0;
    let closure_30 = false;
    let closure_31 = false;
    let closure_33 = true;
    let closure_34 = false;
    let closure_22 = transformEntries(logs.logs);
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules } = logs);
    if (null == automodRules) {
      automodRules = [];
    }
    let closure_27 = automodRules;
    ({ threads: closure_28, applicationCommands: closure_29 } = logs);
    if (logs.logs.length < closure_18) {
      closure_33 = false;
    }
  },
  AUDIT_LOG_FETCH_FAIL: function handleFetchedLogsFail() {
    let closure_31 = false;
    let closure_34 = true;
    let closure_22 = [];
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function handleStartFetchNextPage(isGroupedFetch) {
    let closure_32 = true;
    if (isGroupedFetch.isGroupedFetch) {
      closure_39 = closure_39 + 1;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function handleFetchedNextPage(logs) {
    logs = logs.logs;
    let closure_32 = false;
    ({ integrations: closure_23, webhooks: closure_25, guildScheduledEvents: closure_26, automodRules: closure_27, threads: closure_28, applicationCommands: closure_29 } = logs);
    let tmp = 0 === logs.length;
    if (!tmp) {
      tmp = logs.length < closure_18;
    }
    if (tmp) {
      let closure_33 = false;
    }
    if (logs.length > 0) {
      const tmp4 = transformEntries(logs);
      const items = [];
      HermesBuiltin.arraySpread(tmp4, HermesBuiltin.arraySpread(closure_22, 0));
      closure_22 = items;
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function handleFetchNextPageFail() {
    let closure_32 = false;
  },
  AUDIT_LOG_FILTER_BY_ACTION: function handleFilterByAction(action) {
    const ALL = action.action;
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
    let closure_37 = null;
    return handleSettingsSetSection({ section: guildId.section });
  },
  GUILD_SETTINGS_CLOSE: function handleSettingsClose() {
    let closure_22 = [];
    let closure_24 = [];
    const ALL = AuditLogActions.ALL;
    let closure_35 = null;
    let closure_37 = null;
    let closure_38 = {};
    let closure_39 = 0;
    let closure_30 = true;
    let closure_23 = [];
    let closure_25 = [];
    let closure_26 = [];
    let closure_27 = [];
    let closure_28 = [];
  }
};
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_settings/audit_log/GuildSettingsAuditLogStore.tsx");

export default tmp3;
