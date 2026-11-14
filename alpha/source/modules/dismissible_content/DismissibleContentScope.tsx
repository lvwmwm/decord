// Module ID: 9563
// Function ID: 9564
// Name: DismissibleContentScope
// Dependencies: [5146, 3, 2]
// Exports: getDismissibleContentKind, getDismissibleContentShowing, getDismissibleContentShowingKey, isGuildScopedDismissibleContent, isRecurringScopedDismissibleContent, scopeDismissibleContent, scopeDismissibleContentEntry

// Module 9563 (DismissibleContentScope)
import LoggerDefault from "Logger" /* 3 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 5146 */;
import size from "module_2" /* 2 */;

function tagDismissibleContentKind(content) {
  let obj9;
  const obj = DismissibleContentTypes;
  if (obj.isSnowflakeBoundGuildDismissibleContent(content)) {
    obj9 = { kind: "snowflake_bound_guild", content };
    const obj2 = { kind: "snowflake_bound_guild", content };
  } else {
    const tmpResult = DismissibleContentTypes;
    if (tmpResult.isTimeRecurringGuildDismissibleContent(content)) {
      obj9 = { kind: "time_recurring_guild", content };
      const obj3 = { kind: "time_recurring_guild", content };
    } else {
      const tmpResult7 = DismissibleContentTypes;
      if (tmpResult7.isSingleUseGuildDismissibleContent(content)) {
        obj9 = { kind: "single_use_guild", content };
        const obj4 = { kind: "single_use_guild", content };
      } else {
        const tmpResult8 = DismissibleContentTypes;
        if (tmpResult8.isSnowflakeBoundDismissibleContent(content)) {
          const tmpResult9 = DismissibleContentTypes;
          if (tmpResult9.isTimeRecurringDismissibleContent(content)) {
            obj9 = { kind: "time_recurring_snowflake_bound", content };
            const obj5 = { kind: "time_recurring_snowflake_bound", content };
          }
        }
        const tmpResult10 = DismissibleContentTypes;
        if (tmpResult10.isVersionedDismissibleContent(content)) {
          obj9 = { kind: "versioned", content };
          const obj6 = { kind: "versioned", content };
        } else {
          const tmpResult11 = DismissibleContentTypes;
          if (tmpResult11.isTimeRecurringDismissibleContent(content)) {
            obj9 = { kind: "time_recurring", content };
            const obj7 = { kind: "time_recurring", content };
          } else {
            const tmpResult12 = DismissibleContentTypes;
            if (tmpResult12.isSnowflakeBoundDismissibleContent(content)) {
              obj9 = { kind: "snowflake_bound", content };
              const obj8 = { kind: "snowflake_bound", content };
            } else {
              obj9 = { kind: "single_use", content };
            }
          }
        }
      }
    }
  }
  return obj9;
}
function scopeUncheckedDismissibleContent(arg0) {
  let content;
  let scope;
  ({ content, scope } = arg0);
  if (scope === undefined) {
    scope = {};
  }
  const tmp = tagDismissibleContentKind(content);
  const kind = tmp.kind;
  if ("single_use" === kind) {
    const obj2 = { scope: {} };
    const merged = Object.assign(tmp);
    return obj2;
  } else if ("single_use_guild" === kind) {
    const obj3 = {};
    const merged1 = Object.assign(tmp);
    const guildId3 = scope.guildId;
    if (null == guildId3) {
      const _Error10 = Error;
      const _HermesInternal10 = HermesInternal;
      const self19 = this;
      const self20 = this;
      const error = new Error("Dismissible content " + content + " is missing scope." + "guildId");
      throw error;
    } else {
      const obj4 = { guildId: guildId3 };
      obj3.scope = obj4;
      return obj3;
    }
  } else if ("versioned" === kind) {
    const obj5 = {};
    const merged2 = Object.assign(tmp);
    const version = scope.version;
    if (null == version) {
      const _Error9 = Error;
      const _HermesInternal9 = HermesInternal;
      const self17 = this;
      const self18 = this;
      const error1 = new Error("Dismissible content " + content + " is missing scope." + "version");
      throw error1;
    } else {
      const obj6 = { version };
      obj5.scope = obj6;
      return obj5;
    }
  } else if ("time_recurring" === kind) {
    const obj7 = {};
    const merged3 = Object.assign(tmp);
    const timeRecurringConfig3 = scope.timeRecurringConfig;
    if (null == timeRecurringConfig3) {
      const _Error8 = Error;
      const _HermesInternal8 = HermesInternal;
      const self15 = this;
      const self16 = this;
      const error2 = new Error("Dismissible content " + content + " is missing scope." + "timeRecurringConfig");
      throw error2;
    } else {
      const obj8 = { timeRecurringConfig: timeRecurringConfig3 };
      obj7.scope = obj8;
      return obj7;
    }
  } else if ("time_recurring_guild" === kind) {
    const obj9 = {};
    const merged4 = Object.assign(tmp);
    const timeRecurringConfig2 = scope.timeRecurringConfig;
    if (null == timeRecurringConfig2) {
      const _Error7 = Error;
      const _HermesInternal7 = HermesInternal;
      const self13 = this;
      const self14 = this;
      const error3 = new Error("Dismissible content " + content + " is missing scope." + "timeRecurringConfig");
      throw error3;
    } else {
      const obj10 = { timeRecurringConfig: timeRecurringConfig2, guildId: null };
      const guildId2 = scope.guildId;
      if (null == guildId2) {
        const _Error6 = Error;
        const _HermesInternal6 = HermesInternal;
        const self11 = this;
        const self12 = this;
        const error4 = new Error("Dismissible content " + content + " is missing scope." + "guildId");
        throw error4;
      } else {
        obj10.guildId = guildId2;
        obj9.scope = obj10;
        return obj9;
      }
    }
  } else if ("snowflake_bound" === kind) {
    const obj11 = {};
    const merged5 = Object.assign(tmp);
    const snowflakeId3 = scope.snowflakeId;
    if (null == snowflakeId3) {
      const _Error5 = Error;
      const _HermesInternal5 = HermesInternal;
      const self9 = this;
      const self10 = this;
      const error5 = new Error("Dismissible content " + content + " is missing scope." + "snowflakeId");
      throw error5;
    } else {
      const obj12 = { snowflakeId: snowflakeId3 };
      obj11.scope = obj12;
      return obj11;
    }
  } else if ("snowflake_bound_guild" === kind) {
    const obj13 = {};
    const merged6 = Object.assign(tmp);
    const snowflakeId2 = scope.snowflakeId;
    if (null == snowflakeId2) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const self7 = this;
      const self8 = this;
      const error6 = new Error("Dismissible content " + content + " is missing scope." + "snowflakeId");
      throw error6;
    } else {
      const obj14 = { snowflakeId: snowflakeId2, guildId: null };
      const guildId = scope.guildId;
      if (null == guildId) {
        const _Error3 = Error;
        const _HermesInternal3 = HermesInternal;
        const self5 = this;
        const self6 = this;
        const error7 = new Error("Dismissible content " + content + " is missing scope." + "guildId");
        throw error7;
      } else {
        obj14.guildId = guildId;
        obj13.scope = obj14;
        return obj13;
      }
    }
  } else if ("time_recurring_snowflake_bound" === kind) {
    const obj = {};
    const merged7 = Object.assign(tmp);
    const snowflakeId = scope.snowflakeId;
    if (null == snowflakeId) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error8 = new Error("Dismissible content " + content + " is missing scope." + "snowflakeId");
      throw error8;
    } else {
      const obj15 = { snowflakeId, timeRecurringConfig: null };
      const timeRecurringConfig = scope.timeRecurringConfig;
      if (null == timeRecurringConfig) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error9 = new Error("Dismissible content " + content + " is missing scope." + "timeRecurringConfig");
        throw error9;
      } else {
        obj15.timeRecurringConfig = timeRecurringConfig;
        obj.scope = obj15;
        return obj;
      }
    }
  }
}
let tmp2 = new LoggerDefault("DismissibleContentScope");
const logger = tmp2;
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentScope.tsx");

export function getDismissibleContentKind(content) {
  return tagDismissibleContentKind(content).kind;
}
export function isGuildScopedDismissibleContent(found2) {
  return "single_use_guild" === found2.kind || "time_recurring_guild" === found2.kind || "snowflake_bound_guild" === found2.kind;
}
export function isRecurringScopedDismissibleContent(kind) {
  return "versioned" === kind.kind || "time_recurring" === kind.kind || "snowflake_bound" === kind.kind || "time_recurring_snowflake_bound" === kind.kind;
}
export function scopeDismissibleContent(arg0) {
  return scopeUncheckedDismissibleContent(arg0);
}
export function scopeDismissibleContentEntry(content) {
  try {
    let tmp3 = content;
    const tmp2 = scopeUncheckedDismissibleContent;
    if (typeof content !== "object") {
      tmp3 = { content };
      const obj = { content };
    }
    return tmp2(tmp3);
  } catch (tmp4) {
    logger.error("Dropped a dismissible content entry", tmp4);
    return null;
  }
}
export function getDismissibleContentShowing(candidate) {
  const kind = candidate.kind;
  if ("single_use" !== kind) {
    if ("time_recurring" !== kind) {
      if ("single_use_guild" !== kind) {
        if ("time_recurring_guild" !== kind) {
          if ("versioned" === kind) {
            return { version: candidate.scope.version };
          } else {
            if ("snowflake_bound" !== kind) {
              if ("time_recurring_snowflake_bound" !== kind) {
                if ("snowflake_bound_guild" === kind) {
                  return { snowflakeId: candidate.scope.snowflakeId, guildId: candidate.scope.guildId };
                }
              }
            }
            return { snowflakeId: candidate.scope.snowflakeId };
          }
        }
      }
      return { guildId: candidate.scope.guildId };
    }
  }
  return {};
}
export function getDismissibleContentShowingKey(kind) {
  let guildId;
  let snowflakeId;
  let version;
  kind = kind.kind;
  if ("single_use" !== kind) {
    let obj;
    if ("time_recurring" !== kind) {
      if ("single_use_guild" !== kind) {
        if ("time_recurring_guild" !== kind) {
          if ("versioned" === kind) {
            obj = { version: kind.scope.version };
            const obj2 = { version: kind.scope.version };
          } else {
            if ("snowflake_bound" !== kind) {
              if ("time_recurring_snowflake_bound" !== kind) {
                if ("snowflake_bound_guild" === kind) {
                  obj = { snowflakeId: kind.scope.snowflakeId, guildId: kind.scope.guildId };
                  const obj3 = { snowflakeId: kind.scope.snowflakeId, guildId: kind.scope.guildId };
                }
              }
            }
            obj = { snowflakeId: kind.scope.snowflakeId };
            const obj4 = { snowflakeId: kind.scope.snowflakeId };
          }
        }
      }
      obj = { guildId: kind.scope.guildId };
      const obj5 = { guildId: kind.scope.guildId };
    }
    ({ version, snowflakeId, guildId } = obj);
    const _String = String;
    const StringResult = String(kind.content);
    let sum = StringResult;
    if (null != version) {
      const _HermesInternal = HermesInternal;
      sum = StringResult + ":v" + version;
    }
    let sum1 = sum;
    if (null != snowflakeId) {
      const _HermesInternal2 = HermesInternal;
      sum1 = sum + ":s" + snowflakeId;
    }
    let sum2 = sum1;
    if (null != guildId) {
      const _HermesInternal3 = HermesInternal;
      sum2 = sum1 + ":g" + guildId;
    }
    return sum2;
  }
  obj = {};
}
