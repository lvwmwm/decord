// Module ID: 9564
// Function ID: 9565
// Name: DismissibleContentAvailability
// Dependencies: [5138, 11, 9563, 5370, 5140, 2]
// Exports: canShowScopedDismissibleContent

// Module 9564 (DismissibleContentAvailability)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 5138 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 5140 */;
import NewUserDismissibleContentRegistry from "NewUserDismissibleContentRegistry" /* 5370 */;
import DismissibleContentScope from "DismissibleContentScope" /* 9563 */;
import size from "module_2" /* 2 */;

function canShowTimeRecurringDismissibleContent(arg0, arg1, cooldownDurationMs, arg3) {
  let tmp;
  if (null != arg0) {
    const _Number = Number;
    const _Number2 = Number;
    let NumberResult;
    if (!Number.isNaN(Number(arg0))) {
      const _Number3 = Number;
      NumberResult = Number(arg0);
    }
    tmp = NumberResult;
  }
  let num = 0;
  if (undefined !== tmp) {
    num = tmp + cooldownDurationMs.cooldownDurationMs;
  }
  const timestamp = Date.now();
  let tmp5 = null == cooldownDurationMs.showAfterTimestamp;
  if (!tmp5) {
    let tmp6 = timestamp >= cooldownDurationMs.showAfterTimestamp;
    if (tmp6) {
      let num2 = tmp;
      if (tmp == null) {
        num2 = 0;
      }
      tmp6 = num2 <= cooldownDurationMs.showAfterTimestamp;
    }
    tmp5 = tmp6;
  }
  let tmp8 = arg3;
  const tmp7 = null == cooldownDurationMs.numTimesToRecur || 0 === cooldownDurationMs.numTimesToRecur || null == arg1 || arg1 < cooldownDurationMs.numTimesToRecur;
  if (!tmp8) {
    tmp8 = null != tmp && null != arg1;
  }
  if (tmp8) {
    tmp8 = tmp5;
  }
  if (tmp8) {
    tmp8 = null == tmp || timestamp >= num;
  }
  if (tmp8) {
    tmp8 = tmp7;
  }
  return tmp8;
}
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentAvailability.tsx");

export function canShowScopedDismissibleContent(scope, arg1, arg2) {
  let dismissedContents;
  let guildStates;
  let recurringStates;
  ({ dismissedContents, recurringStates, guildStates } = arg1);
  const obj = DismissibleContentScope;
  if (obj.isGuildScopedDismissibleContent(scope)) {
    let value;
    if (guildStates != null) {
      value = guildStates.get(scope.scope.guildId);
    }
  }
  const kind = scope.kind;
  let tmp6 = arg2;
  if ("single_use" === kind) {
    if (null != dismissedContents) {
      const tmp2Result = Uint8ArrayUtils;
      tmp6 = !tmp2Result.hasBit(dismissedContents, tmp43);
    }
    return tmp6;
  } else if ("single_use_guild" === kind) {
    const content = scope.content;
    let tmp41 = tmp6;
    if (null != tmp4) {
      tmp41 = null == tmp4[content] || false === tmp4[content].dismissed;
      const tmp42 = null == tmp4[content] || false === tmp4[content].dismissed;
    }
    return tmp41;
  } else if ("versioned" === kind) {
    const tmp2Result7 = NewUserDismissibleContentRegistry;
    const result = tmp2Result7.disableNewUserDismissibleContent(scope.content);
    let tmp38 = !result;
    if (tmp38) {
      let lastDismissedVersion;
      if (tmp != null) {
        lastDismissedVersion = tmp.lastDismissedVersion;
      }
      let tmp40 = tmp6;
      if (null != lastDismissedVersion) {
        tmp40 = lastDismissedVersion < scope.scope.version;
      }
      tmp38 = tmp40;
    }
    return tmp38;
  } else if ("time_recurring" === kind) {
    const tmp2Result8 = NewUserDismissibleContentRegistry;
    const result1 = tmp2Result8.disableNewUserDismissibleContent(scope.content);
    let tmp31Result = !result1;
    if (tmp31Result) {
      let lastDismissedAtMs;
      const tmp31 = canShowTimeRecurringDismissibleContent;
      if (tmp != null) {
        lastDismissedAtMs = tmp.lastDismissedAtMs;
      }
      let numTimesDismissed;
      if (tmp != null) {
        numTimesDismissed = tmp.numTimesDismissed;
      }
      tmp31Result = tmp31(lastDismissedAtMs, numTimesDismissed, scope.scope.timeRecurringConfig, tmp6);
    }
    return tmp31Result;
  } else if ("time_recurring_guild" === kind) {
    const tmp2Result9 = NewUserDismissibleContentRegistry;
    const result2 = tmp2Result9.disableNewUserDismissibleContent(scope.content);
    let tmp23Result = !result2;
    if (tmp23Result) {
      let lastDismissedAtMs1;
      const tmp23 = canShowTimeRecurringDismissibleContent;
      if (tmp20 != null) {
        lastDismissedAtMs1 = tmp20.lastDismissedAtMs;
      }
      let numTimesDismissed1;
      if (tmp20 != null) {
        numTimesDismissed1 = tmp20.numTimesDismissed;
      }
      tmp23Result = tmp23(lastDismissedAtMs1, numTimesDismissed1, scope.scope.timeRecurringConfig, tmp6);
    }
    return tmp23Result;
  } else if ("snowflake_bound" === kind) {
    const tmp2Result10 = NewUserDismissibleContentRegistry;
    const result3 = tmp2Result10.disableNewUserDismissibleContent(scope.content);
    let tmp15 = !result3;
    if (tmp15) {
      let prop;
      if (tmp != null) {
        prop = tmp.lastDismissedObjectId;
      }
      let tmp18 = tmp6;
      if (null != prop) {
        const obj6 = SnowflakeUtilsDefault;
        tmp18 = 1 === obj6.compare(tmp17, prop);
      }
      tmp15 = tmp18;
    }
    return tmp15;
  } else if ("snowflake_bound_guild" === kind) {
    const tmp2Result11 = NewUserDismissibleContentRegistry;
    const result4 = tmp2Result11.disableNewUserDismissibleContent(scope.content);
    let tmp8 = !result4;
    if (tmp8) {
      let prop1;
      if (tmp4 != null) {
        if (tmp4[scope.content] != null) {
          prop1 = tmp10.lastDismissedObjectId;
        }
      }
      let tmp12 = tmp6;
      if (null != prop1) {
        const obj4 = SnowflakeUtilsDefault;
        tmp12 = 1 === obj4.compare(tmp11, prop1);
      }
      tmp8 = tmp12;
    }
    return tmp8;
  } else if ("time_recurring_snowflake_bound" === kind) {
    const tmp2Result12 = DismissibleContentUtils;
    return !tmp2Result12.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(scope.content, scope.scope.snowflakeId, scope.scope.timeRecurringConfig);
  }
}
