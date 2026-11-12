// Module ID: 9498
// Function ID: 9499
// Name: markScopedDismissibleContentAsDismissed
// Dependencies: [5285, 5077, 2]
// Exports: markScopedDismissibleContentAsDismissed

// Module 9498 (markScopedDismissibleContentAsDismissed)
import DismissibleContentUtils from "DismissibleContentUtils" /* 5077 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5285 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dismissible_content/markScopedDismissibleContentAsDismissed.tsx");

export function markScopedDismissibleContentAsDismissed(kind, arg1) {
  kind = kind.kind;
  if ("single_use" === kind) {
    const obj7 = DismissibleContentUnsafeUtils;
    return obj7.UNSAFE_markDismissibleContentAsDismissed(kind.content, arg1);
  } else if ("single_use_guild" === kind) {
    const obj6 = DismissibleContentUnsafeUtils;
    return obj6.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(kind.content, kind.scope.guildId, arg1);
  } else if ("versioned" === kind) {
    const obj5 = { version: kind.scope.version };
    const markVersionedDismissibleContentAsDismissed = DismissibleContentUtils.markVersionedDismissibleContentAsDismissed;
    const content = kind.content;
    const version = kind.scope.version;
    DismissibleContentUtils;
    const merged = Object.assign(arg1);
    return markVersionedDismissibleContentAsDismissed(content, version, obj5);
  } else if ("time_recurring" === kind) {
    const obj4 = DismissibleContentUtils;
    return obj4.markTimeRecurringDismissibleContentAsDismissed(kind.content, arg1);
  } else if ("time_recurring_guild" === kind) {
    const obj3 = DismissibleContentUnsafeUtils;
    return obj3.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(kind.content, kind.scope.guildId, arg1);
  } else {
    if ("snowflake_bound" !== kind) {
      if ("time_recurring_snowflake_bound" !== kind) {
        if ("snowflake_bound_guild" === kind) {
          const obj = DismissibleContentUnsafeUtils;
          return obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(kind.content, kind.scope.snowflakeId, kind.scope.guildId, arg1);
        }
      }
    }
    const obj2 = DismissibleContentUtils;
    return obj2.markSnowflakeBoundDismissibleContentAsDismissed(kind.content, kind.scope.snowflakeId, arg1);
  }
}
