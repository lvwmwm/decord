// Module ID: 9494
// Function ID: 9495
// Name: useGetDismissibleContent
// Dependencies: [32, 19, 1231, 5286, 5079, 5084, 1072, 1082, 1252, 5076, 9495, 5077, 504, 9496, 5307, 9497, 9498, 5075, 2]
// Exports: useDangerouslyPeekDismissibleContents, useGetDismissibleContent, useGetSingleUseGuildDismissibleContent_UNSAFE, useGetSnowflakeBoundDismissibleContent, useGetSnowflakeBoundGuildDismissibleContent_UNSAFE, useGetTimeRecurringDismissibleContent, useGetTimeRecurringGuildDismissibleContent_UNSAFE, useGetTimeRecurringSnowflakeBoundDismissibleContent, useGetVersionedDismissibleContent

// Module 9494 (useGetDismissibleContent)
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 5075 */;
import DismissibleContentShownStateStore2 from "DismissibleContentShownStateStore" /* 5084 */;
import DismissibleContentAvailability from "DismissibleContentAvailability" /* 9497 */;
import markScopedDismissibleContentAsDismissed from "markScopedDismissibleContentAsDismissed" /* 9498 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 5079 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const DismissibleContentShownStateStore = DismissibleContentShownStateStore2;
let _require, closure_5, currentlyShown, dependencyMap;

function checksNewUsersWithHook(kind) {
  return "single_use" === kind.kind || "single_use_guild" === kind.kind;
}
function useScopedDismissibleContentSelection(items1, groupName) {
  let closure_2;
  let closure_3;
  let constants2;
  let dismissedContents;
  let dismissibleContentShowing;
  let first;
  let guildId;
  let recurringStates;
  let snowflakeId;
  let version;
  const f128871 = (scope) => {
    let items1;
    const obj = groupName(closure_2[13]);
    if (obj.isGuildScopedDismissibleContent(scope)) {
      const items = [scope.scope.guildId];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  };
  const f128874 = (item, index) => {
    items = [item, closure_3[index]];
    return items;
  };
  const found = items1.filter((kind) => !("snowflake_bound_guild" === kind.kind && "" === kind.scope.snowflakeId));
  _require = found.some((kind) => "single_use" === kind.kind);
  let tmp = _require;
  let closure_1 = found.some(require("DismissibleContentScope").isRecurringScopedDismissibleContent);
  let items = [...new Set(found.flatMap(f128871))];
  new Set(found.flatMap(f128871));
  let obj = require("get initialized");
  items1 = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items1, () => {
    let tmp4;
    const userContent = settings.settings.userContent;
    let tmp;
    if (closure_0) {
      let dismissedContents;
      if (userContent != null) {
        dismissedContents = userContent.dismissedContents;
      }
      tmp = dismissedContents;
    }
    const obj = { dismissedContents: tmp, recurringStates: tmp4 };
    tmp4 = undefined;
    if (closure_1) {
      let prop;
      if (userContent != null) {
        prop = userContent.recurringDismissibleContentStates;
      }
      tmp4 = prop;
    }
    return obj;
  });
  ({ dismissedContents, recurringStates } = stateFromStoresObject);
  let obj2 = require("get initialized");
  const items2 = [closure_5];
  obj2.useStateFromStoresArray(items2, () => {
    let guildDismissedContentState;
    return items.map((item) => guildDismissedContentState.getGuildDismissedContentState(item));
  });
  let obj3 = { dismissedContents, recurringStates, guildStates: new Map(items.map(f128874)) };
  new Map(items.map(f128874));
  let tmp6 = require("NewUserDismissibleContentRegistry");
  const useNewUserDismissibleContent = tmp6.useNewUserDismissibleContent;
  const found1 = found.filter(checksNewUsersWithHook);
  dependencyMap = useNewUserDismissibleContent(found1.map((content) => content.content));
  const items3 = [closure_5];
  const obj4 = require("get initialized");
  _slicedToArray = obj4.useStateFromStores(items3, () => closure_5.hasLoaded(constants2.PRELOADED_USER_SETTINGS));
  let found2 = found.find((kind) => {
    let hasItem = !tmp;
    if ("single_use" === kind.kind || "single_use_guild" === kind.kind) {
      hasItem = closure_2.includes(kind.content);
    }
    if (hasItem) {
      const obj = DismissibleContentAvailability;
      hasItem = obj.canShowScopedDismissibleContent(kind, obj3, closure_3);
    }
    return hasItem;
  });
  if (found2 == null) {
    found2 = null;
  }
  if (null != found2) {
    const tmpResult = tmp(9496);
    dismissibleContentShowing = tmpResult.getDismissibleContentShowing(found2);
  } else {
    dismissibleContentShowing = closure_12;
  }
  ({ version, snowflakeId } = dismissibleContentShowing);
  closure_5 = found.some((item) => {
    const obj = groupName(closure_2[13]);
    return !obj.isGuildScopedDismissibleContent(item);
  });
  const items4 = [guildId];
  const tmpResult6 = tmp(504);
  const stateFromStores = tmpResult6.useStateFromStores(items4, () => {
    guildId = null;
    if (closure_5) {
      guildId = SelectedGuildStore.getGuildId();
    }
    return guildId;
  });
  guildId = stateFromStores;
  if (null != found2) {
    guildId = stateFromStores;
    const tmpResult7 = tmp(9496);
    if (tmpResult7.isGuildScopedDismissibleContent(found2)) {
      guildId = found2.scope.guildId;
    }
  }
  let content;
  if (found2 != null) {
    content = found2.content;
  }
  if (content == null) {
    content = null;
  }
  dependencyMap = groupName;
  const tmp11 = DismissibleContentShownStateStore((currentlyShown) => {
    let hasItem = null != content;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  const tmpResult8 = tmp(9495);
  [first] = tmpResult8.useOverlayLockState();
  let closure_6 = tmp14;
  let result = null != content;
  if (result) {
    const tmpResult9 = tmp(5077);
    result = tmpResult9.isDismissibleContentBlockedByOverlay(content, first, tmp14);
  }
  const items5 = [DismissibleContentFrameworkStore];
  const tmpResult10 = tmp(504);
  const stateFromStores1 = tmpResult10.useStateFromStores(items5, () => {
    const hasUserHitDCCapResult = null != content && DismissibleContentFrameworkStore.hasUserHitDCCap(tmp, guildId);
    return hasUserHitDCCapResult;
  });
  const ref = found2.useRef(guildId);
  ref.current = guildId;
  const items6 = [content, groupName, stateFromStores1, result, version, snowflakeId];
  const effect = found2.useEffect(() => {
    const tmp = content;
    if (null != content) {
      if (!first.hasLoaded(constants2.PRELOADED_USER_SETTINGS)) {
        let current = ref.current;
        let tmp6 = groupName;
        let tmp7 = version;
        let tmp8 = snowflakeId;
        let obj = { content_type: content(groupName[9]).DismissibleContent[tmp], group_name: tmp6, latest_version: tmp7, guild_id: current, snowflake_id: tmp8 };
        const track = obj3(groupName[8]).track;
        const DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN = constants.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN;
        obj3(groupName[8]);
        if (groupName == null) {
          tmp6 = null;
        }
        if (tmp7 == null) {
          tmp7 = null;
        }
        if (current == null) {
          current = null;
        }
        if (tmp8 == null) {
          tmp8 = null;
        }
        track(DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
      }
      obj3 = { groupName, guildId: ref.current, version, snowflakeId };
      const obj2 = content(groupName[11]);
      const markDismissibleContentAsShown = obj2.requestMarkDismissibleContentAsShown(tmp, obj3, first, closure_6);
      return () => {
        if (null != content) {
          const obj = { content: tmp, groupName };
          closure_2_9(obj, !ref.hasUserHitDCCap());
        }
      };
    }
  }, items6);
  let tmp19 = null;
  const obj11 = found2;
  if (tmp11) {
    tmp19 = null;
    if (null != content) {
      tmp19 = content;
    }
  }
  const items7 = [content, groupName, guildId, version, snowflakeId];
  const obj5 = {
    candidate: found2,
    visibleContent: tmp19,
    markAsDismissed: obj11.useCallback((dismissAction, forceTrack) => {
      if (null != found2) {
        const obj2 = { dismissAction, groupName, guildId, forceTrack };
        const obj = markScopedDismissibleContentAsDismissed;
        const result = obj.markScopedDismissibleContentAsDismissed(tmp, obj2);
      }
    }, items7)
  };
  return obj5;
}
let _slicedToArray = _slicedToArray_mod;
const removeCandidateContent = DismissibleContentShownStateStore2.removeCandidateContent;
const AnalyticEvents = Constants.AnalyticEvents;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let closure_12 = {};
let result = size.fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export { useScopedDismissibleContentSelection };
export function useGetDismissibleContent(items3, groupName) {
  const f97212 = (item) => {
    const obj = require("DismissibleContentScope");
    let result = obj.scopeDismissibleContentEntry(item);
    if (result == null) {
      result = [];
    }
    return result;
  };
  const items = [, ];
  ({ visibleContent: arr[0], markAsDismissed: arr[1] } = useScopedDismissibleContentSelection(items3.flatMap(f97212), groupName));
  useScopedDismissibleContentSelection(items3.flatMap(f97212), groupName);
  const items1 = [, ];
  [arr2[0], arr2[1]] = items;
  _slicedToArray(items, 2);
  return items1;
}
export function useGetVersionedDismissibleContent(content, version, groupName) {
  let items1;
  let obj2;
  if (null != content) {
    const obj = { kind: "versioned", content, scope: obj2 };
    const items = [obj];
    items1 = items;
    obj2 = { version };
  } else {
    items1 = [];
  }
  const items2 = [, ];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  useScopedDismissibleContentSelection(items1, groupName);
  return items2;
}
export function useGetTimeRecurringDismissibleContent(content, timeRecurringConfig, groupName) {
  let items1;
  let obj2;
  if (null != content) {
    const obj = { kind: "time_recurring", content, scope: obj2 };
    const items = [obj];
    items1 = items;
    obj2 = { timeRecurringConfig };
  } else {
    items1 = [];
  }
  const items2 = [, ];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  useScopedDismissibleContentSelection(items1, groupName);
  return items2;
}
export function useGetSnowflakeBoundDismissibleContent(content, snowflakeId, groupName) {
  let items1;
  let obj2;
  if (null != content) {
    const obj = { kind: "snowflake_bound", content, scope: obj2 };
    const items = [obj];
    items1 = items;
    obj2 = { snowflakeId };
  } else {
    items1 = [];
  }
  const items2 = [, ];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  useScopedDismissibleContentSelection(items1, groupName);
  return items2;
}
export function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(content, snowflakeId, guildId, groupName) {
  let items1;
  let obj2;
  if (null != content) {
    const obj = { kind: "snowflake_bound_guild", content, scope: obj2 };
    const items = [obj];
    items1 = items;
    obj2 = { snowflakeId, guildId };
  } else {
    items1 = [];
  }
  const items2 = [, ];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  useScopedDismissibleContentSelection(items1, groupName);
  return items2;
}
export function useGetTimeRecurringSnowflakeBoundDismissibleContent(content, timeRecurringConfig, snowflakeId, groupName) {
  let items1;
  let obj2;
  if (null != content) {
    const obj = { kind: "time_recurring_snowflake_bound", content, scope: obj2 };
    const items = [obj];
    items1 = items;
    obj2 = { snowflakeId, timeRecurringConfig };
  } else {
    items1 = [];
  }
  const items2 = [, ];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, groupName));
  useScopedDismissibleContentSelection(items1, groupName);
  return items2;
}
export function useGetSingleUseGuildDismissibleContent_UNSAFE(arr, id, CHANNEL_NOTICES) {
  const f97213 = (content) => {
    const obj = { kind: "single_use_guild", content, scope: obj2 };
    return obj;
  };
  let closure_0 = id;
  const items = [, ];
  ({ visibleContent: arr[0], markAsDismissed: arr[1] } = useScopedDismissibleContentSelection(arr.map(f97213), CHANNEL_NOTICES));
  useScopedDismissibleContentSelection(arr.map(f97213), CHANNEL_NOTICES);
  return items;
}
export function useGetTimeRecurringGuildDismissibleContent_UNSAFE(content, guildId, timeRecurringConfig, GUILD_HEADER_TOOLTIPS) {
  let items1;
  let obj2;
  if (null != content) {
    const obj = { kind: "time_recurring_guild", content, scope: obj2 };
    const items = [obj];
    items1 = items;
    obj2 = { timeRecurringConfig, guildId };
  } else {
    items1 = [];
  }
  const items2 = [, ];
  ({ visibleContent: arr3[0], markAsDismissed: arr3[1] } = useScopedDismissibleContentSelection(items1, GUILD_HEADER_TOOLTIPS));
  useScopedDismissibleContentSelection(items1, GUILD_HEADER_TOOLTIPS);
  return items2;
}
export function useDangerouslyPeekDismissibleContents(arr) {
  let closure_0;
  let settings;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  _require = obj.useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  return arr.filter((item) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const obj = Uint8ArrayUtils;
      tmp2 = !obj.hasBit(tmp, item);
    }
    return tmp2;
  });
}
