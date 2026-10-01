// Module ID: 6807
// Function ID: 6808
// Name: useGetDismissibleContent
// Dependencies: [32, 19, 1220, 4655, 2033, 2035, 1074, 1084, 1241, 2029, 6808, 2031, 504, 4676, 2028, 4654, 11, 2]
// Exports: useDangerouslyPeekDismissibleContents, useGetDismissibleContent, useGetSingleUseGuildDismissibleContent_UNSAFE, useGetSnowflakeBoundDismissibleContent, useGetSnowflakeBoundGuildDismissibleContent_UNSAFE, useGetTimeRecurringDismissibleContent, useGetTimeRecurringGuildDismissibleContent_UNSAFE, useGetTimeRecurringSnowflakeBoundDismissibleContent, useGetVersionedDismissibleContent

// Module 6807 (useGetDismissibleContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2028 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentShownStateStore2 from "DismissibleContentShownStateStore" /* 2035 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2033 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const DismissibleContentShownStateStore = DismissibleContentShownStateStore2;
let _require, currentlyShown, dependencyMap, importDefault;

function useGetVisibleContent(found1, stateFromStores, GUILD_HEADER_TOOLTIPS, latestVersion, newSnowflakeId) {
  let first;
  let groupName;
  let ref;
  let snowflakeId;
  let tmp6;
  let version;
  _require = found1;
  let closure_1 = stateFromStores;
  dependencyMap = GUILD_HEADER_TOOLTIPS;
  _slicedToArray = latestVersion;
  react = newSnowflakeId;
  const tmp2 = _require;
  let tmp = DismissibleContentShownStateStore((currentlyShown) => {
    let hasItem = null != found1;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(tmp);
    }
    return hasItem;
  });
  let obj = require("OverlayTrackingUtils");
  [first, tmp6] = obj.useOverlayLockState();
  let closure_6 = tmp6;
  let result = null != found1;
  if (result) {
    const tmp2Result = tmp2(2031);
    result = tmp2Result.isDismissibleContentBlockedByOverlay(found1, first, tmp6);
  }
  const items = [ref];
  const tmp2Result2 = tmp2(504);
  stateFromStores = tmp2Result2.useStateFromStores(items, () => {
    const hasUserHitDCCapResult = null != found1 && DismissibleContentFrameworkStore.hasUserHitDCCap(tmp, stateFromStores);
    return hasUserHitDCCapResult;
  });
  ref = react.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items1 = [found1, GUILD_HEADER_TOOLTIPS, stateFromStores, result, latestVersion, newSnowflakeId];
  const effect = react.useEffect(() => {
    const tmp = found1;
    if (null != found1) {
      if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
        let current = ref.current;
        let tmp6 = groupName;
        let tmp7 = version;
        let tmp8 = snowflakeId;
        let obj = { content_type: dismissible_content.DismissibleContent[tmp], group_name: tmp6, latest_version: tmp7, guild_id: current, snowflake_id: tmp8 };
        const track = AnalyticsUtilsDefault.track;
        const DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN = AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN;
        AnalyticsUtilsDefault;
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
      const obj2 = DismissibleContentUtils;
      const obj3 = { groupName, guildId: ref.current, version, snowflakeId };
      const markDismissibleContentAsShown = obj2.requestMarkDismissibleContentAsShown(tmp, obj3, first, closure_6);
      return () => {
        if (null != found1) {
          const obj = { content: tmp, groupName };
          removeCandidateContent(obj, !ref.hasUserHitDCCap());
        }
      };
    }
  }, items1);
  let tmp11 = null;
  if (tmp) {
    tmp11 = null;
    if (null != found1) {
      tmp11 = found1;
    }
  }
  return tmp11;
}
function canShowTimeRecurringContent(arg0, lastDismissedAtMs, numTimesDismissed, cooldownDurationMs) {
  let tmp;
  if (null != lastDismissedAtMs) {
    const _Number = Number;
    const _Number2 = Number;
    let NumberResult;
    if (!Number.isNaN(Number(lastDismissedAtMs))) {
      const _Number3 = Number;
      NumberResult = Number(lastDismissedAtMs);
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
  const tmp7 = null == cooldownDurationMs.numTimesToRecur || 0 === cooldownDurationMs.numTimesToRecur || null == numTimesDismissed || numTimesDismissed < cooldownDurationMs.numTimesToRecur;
  let hasLoadedResult = UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
  if (!hasLoadedResult) {
    hasLoadedResult = null != tmp && null != numTimesDismissed;
  }
  if (hasLoadedResult) {
    hasLoadedResult = arg0;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp5;
  }
  if (hasLoadedResult) {
    hasLoadedResult = null == tmp || timestamp >= num;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp7;
  }
  return hasLoadedResult;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const removeCandidateContent = DismissibleContentShownStateStore2.removeCandidateContent;
const AnalyticEvents = Constants.AnalyticEvents;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let closure_13 = {};
let result = size.fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = function useGetDismissibleContent(items3, APP_LAUNCHER_ONBOARDING) {
  let groupName;
  let guildId;
  let settings;
  let stateFromStores1;
  let tmp3;
  _require = APP_LAUNCHER_ONBOARDING;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj2 = require("get initialized");
  const items1 = [SelectedGuildStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => guildId.getGuildId());
  const obj3 = require("NewUserDismissibleContentRegistry");
  const newUserDismissibleContent = obj3.useNewUserDismissibleContent(items3);
  let found1 = null;
  if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((item) => {
      let tmp2 = null == stateFromStores;
      if (!tmp2) {
        const obj = Uint8ArrayUtils;
        tmp2 = !obj.hasBit(tmp, item);
      }
      return tmp2;
    });
    found1 = found;
    tmp3 = found;
  } else {
    tmp3 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((item) => {
        const obj = Uint8ArrayUtils;
        return !obj.hasBit(stateFromStores, item);
      });
      tmp3 = found1;
    }
  }
  const items2 = [useGetVisibleContent(tmp3, stateFromStores1, APP_LAUNCHER_ONBOARDING), ];
  items3 = [tmp3, APP_LAUNCHER_ONBOARDING, stateFromStores1];
  items2[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != found1) {
      const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(tmp, obj2);
    }
  }, items3);
  return items2;
};
export const useGetVersionedDismissibleContent = function useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName) {
  let guildId;
  let stateFromStores;
  let version;
  _require = COLLECTIBLES_SHOP_ENTRY_MARKETING;
  const tmp = _require;
  let obj = require("get initialized");
  let obj2 = UserSettingsProtoStore;
  const items = [UserSettingsProtoStore];
  const lastDismissedVersion = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = settings.settings.userContent;
      let tmp4;
      if (userContent != null) {
        const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
        if (recurringDismissibleContentStates != null) {
          tmp4 = recurringDismissibleContentStates[tmp];
        }
      }
      tmp2 = tmp4;
    }
    if (tmp2 == null) {
      tmp2 = closure_2_13;
    }
    return tmp2;
  }).lastDismissedVersion;
  const items1 = [SelectedGuildStore];
  const obj3 = require("get initialized");
  const tmp2 = stateFromStores;
  stateFromStores = obj3.useStateFromStores(items1, () => guildId.getGuildId());
  let closure_3 = null;
  let tmp4 = null;
  if (null != COLLECTIBLES_SHOP_ENTRY_MARKETING) {
    const tmpResult = tmp(tmp2[13]);
    let result = tmpResult.disableNewUserDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp9 = null;
      if (!result) {
        if (null == lastDismissedVersion) {
          tmp9 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
        } else {
          tmp9 = null;
        }
      }
      closure_3 = tmp9;
      tmp4 = tmp9;
    } else {
      tmp4 = null;
      if (null != lastDismissedVersion) {
        let tmp8 = null;
        if (!result) {
          tmp8 = null;
          if (lastDismissedVersion < latestVersion) {
            tmp8 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
          }
        }
        closure_3 = tmp8;
        tmp4 = tmp8;
      }
    }
  }
  const items2 = [useGetVisibleContent(tmp4, stateFromStores, groupName, latestVersion), ];
  const items3 = [tmp4, groupName, stateFromStores, latestVersion];
  items2[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != COLLECTIBLES_SHOP_ENTRY_MARKETING) {
      const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack, version };
      const obj = DismissibleContentUtils;
      const result = obj.markVersionedDismissibleContentAsDismissed(tmp, version, obj2);
    }
  }, items3);
  return items2;
};
export const useGetTimeRecurringDismissibleContent = function useGetTimeRecurringDismissibleContent(prop, timeRecurringConfig, groupName) {
  let guildId;
  let lastDismissedAtMs;
  let numTimesDismissed;
  _require = prop;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = settings.settings.userContent;
      let tmp4;
      if (userContent != null) {
        const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
        if (recurringDismissibleContentStates != null) {
          tmp4 = recurringDismissibleContentStates[tmp];
        }
      }
      tmp2 = tmp4;
    }
    if (tmp2 == null) {
      tmp2 = closure_2_13;
    }
    return tmp2;
  });
  ({ lastDismissedAtMs, numTimesDismissed } = stateFromStores);
  let obj2 = require("get initialized");
  const items1 = [SelectedGuildStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => guildId.getGuildId());
  dependencyMap = null;
  let tmp5 = null;
  if (null != prop) {
    let tmp10 = null;
    const tmpResult = tmp(4676);
    if (canShowTimeRecurringContent(!tmpResult.disableNewUserDismissibleContent(prop), lastDismissedAtMs, numTimesDismissed, timeRecurringConfig)) {
      tmp10 = prop;
    }
    dependencyMap = tmp10;
    tmp5 = tmp10;
  }
  const items2 = [useGetVisibleContent(tmp5, stateFromStores1, groupName), ];
  const items3 = [tmp5, groupName, stateFromStores1];
  items2[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != prop) {
      const obj2 = { dismissAction, groupName, guildId: stateFromStores1, forceTrack };
      const obj = DismissibleContentUtils;
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(tmp, obj2);
    }
  }, items3);
  return items2;
};
export const useGetSnowflakeBoundDismissibleContent = function useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName) {
  let guildId;
  let settings;
  let stateFromStores;
  importDefault = groupName;
  _require = prop;
  let tmp2 = stateFromStores;
  const tmp = _require;
  let obj = require("get initialized");
  let obj2 = UserSettingsProtoStore;
  const items = [UserSettingsProtoStore];
  const lastDismissedObjectId = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null !== closure_0) {
      const userContent = settings.settings.userContent;
      let tmp4;
      if (userContent != null) {
        const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
        if (recurringDismissibleContentStates != null) {
          tmp4 = recurringDismissibleContentStates[tmp];
        }
      }
      tmp2 = tmp4;
    }
    if (tmp2 == null) {
      tmp2 = closure_2_13;
    }
    return tmp2;
  }).lastDismissedObjectId;
  const items1 = [SelectedGuildStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items1, () => guildId.getGuildId());
  let closure_3 = null;
  let tmp4 = null;
  if (null != prop) {
    const tmpResult = tmp(tmp2[13]);
    let result = tmpResult.disableNewUserDismissibleContent(prop);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp10 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp10 = prop;
        } else {
          tmp10 = null;
          require("SnowflakeUtils");
        }
      }
      closure_3 = tmp10;
      tmp4 = tmp10;
    } else {
      tmp4 = null;
      if (null != lastDismissedObjectId) {
        let tmp8 = null;
        if (!result) {
          tmp8 = null;
          const obj5 = require("SnowflakeUtils");
          if (1 === obj5.compare(newSnowflakeId, lastDismissedObjectId)) {
            tmp8 = prop;
          }
        }
        closure_3 = tmp8;
        tmp4 = tmp8;
      }
    }
  }
  const items2 = [useGetVisibleContent(tmp4, stateFromStores, groupName, undefined, newSnowflakeId), ];
  const items3 = [tmp4, groupName, stateFromStores, newSnowflakeId];
  items2[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != prop) {
      const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
      const obj = DismissibleContentUtils;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, newSnowflakeId, obj2);
    }
  }, items3);
  return items2;
};
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE = function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, stateFromStores, GUILD_HEADER_TOOLTIPS) {
  let groupName;
  let guildId;
  let lastDismissedObjectId;
  _require = newSnowflakeId;
  importDefault = stateFromStores;
  dependencyMap = GUILD_HEADER_TOOLTIPS;
  const tmp = _require;
  let obj = require("get initialized");
  let obj2 = UserSettingsProtoStore;
  const items = [UserSettingsProtoStore];
  stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.getGuildDismissedContentState(guildId));
  let tmp4 = null;
  if (null != prop) {
    let tmp5 = null;
    if (null != stateFromStores) {
      let tmp6;
      if (stateFromStores != null) {
        tmp6 = stateFromStores[prop];
      }
      tmp5 = tmp6;
    }
    tmp4 = tmp5;
  }
  if (tmp4 != null) {
    lastDismissedObjectId = tmp4.lastDismissedObjectId;
  }
  let closure_3 = null;
  let tmp7 = null;
  if (null != prop) {
    const tmpResult = tmp(4676);
    let result = tmpResult.disableNewUserDismissibleContent(prop);
    if (obj2.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp13 = null;
      if (!result) {
        if (null == lastDismissedObjectId) {
          tmp13 = prop;
        } else {
          tmp13 = null;
          SnowflakeUtilsDefault;
        }
      }
      closure_3 = tmp13;
      tmp7 = tmp13;
    } else {
      tmp7 = null;
      if (null != lastDismissedObjectId) {
        let tmp11 = null;
        if (!result) {
          tmp11 = null;
          const obj4 = SnowflakeUtilsDefault;
          if (1 === obj4.compare(newSnowflakeId, lastDismissedObjectId)) {
            tmp11 = prop;
          }
        }
        closure_3 = tmp11;
        tmp7 = tmp11;
      }
    }
  }
  const items1 = [useGetVisibleContent(tmp7, stateFromStores, GUILD_HEADER_TOOLTIPS, undefined, newSnowflakeId), ];
  const items2 = [tmp7, GUILD_HEADER_TOOLTIPS, stateFromStores, newSnowflakeId];
  items1[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != prop) {
      const obj = DismissibleContentUnsafeUtils;
      const obj2 = { dismissAction, groupName, guildId, forceTrack };
      const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(tmp, newSnowflakeId, guildId, obj2);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringSnowflakeBoundDismissibleContent = function useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName) {
  let guildId;
  let stateFromStores;
  _require = newSnowflakeId;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [SelectedGuildStore];
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  let closure_3 = null;
  let result = null == contentType;
  if (!result) {
    const tmpResult = tmp(tmp2[11]);
    result = tmpResult.isTimeRecurringSnowflakeBoundDismissibleContentDismissed(contentType, newSnowflakeId, timeRecurringConfig);
  }
  let tmp6 = null;
  if (!result) {
    closure_3 = contentType;
    tmp6 = contentType;
  }
  const items1 = [useGetVisibleContent(tmp6, stateFromStores, groupName, undefined, newSnowflakeId), ];
  const items2 = [tmp6, groupName, stateFromStores, newSnowflakeId];
  items1[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != contentType) {
      const obj2 = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
      const obj = DismissibleContentUtils;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp, newSnowflakeId, obj2);
    }
  }, items2);
  return items1;
};
export const useGetSingleUseGuildDismissibleContent_UNSAFE = function useGetSingleUseGuildDismissibleContent_UNSAFE(items4, id, CHANNEL_NOTICES) {
  let guildId;
  let stateFromStores;
  let tmp2;
  _require = id;
  const groupName = CHANNEL_NOTICES;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.getGuildDismissedContentState(guildId));
  let obj2 = require("NewUserDismissibleContentRegistry");
  const newUserDismissibleContent = obj2.useNewUserDismissibleContent(items4);
  let found1 = null;
  if (UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((item) => null == stateFromStores || null == tmp[item] || false === tmp[item].dismissed);
    found1 = found;
    tmp2 = found;
  } else {
    tmp2 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((item) => null == stateFromStores[item] || false === stateFromStores[item].dismissed);
      tmp2 = found1;
    }
  }
  const items1 = [useGetVisibleContent(tmp2, id, CHANNEL_NOTICES), ];
  const items2 = [tmp2, CHANNEL_NOTICES, id];
  items1[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != found1) {
      const obj2 = { dismissAction, groupName, guildId, forceTrack };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE = function useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, cooldownDurationMs, GUILD_HEADER_TOOLTIPS) {
  let guildId;
  let numTimesDismissed;
  _require = id;
  const groupName = GUILD_HEADER_TOOLTIPS;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.getGuildDismissedContentState(guildId));
  let tmp4 = null;
  if (null != prop) {
    let tmp5 = null;
    if (null != stateFromStores) {
      let tmp6;
      if (stateFromStores != null) {
        tmp6 = stateFromStores[prop];
      }
      tmp5 = tmp6;
    }
    tmp4 = tmp5;
  }
  if (tmp4 != null) {
    numTimesDismissed = tmp4.numTimesDismissed;
  }
  dependencyMap = null;
  let tmp7 = null;
  if (null != prop) {
    const tmpResult = tmp(4676);
    let lastDismissedAtMs;
    const tmp8 = !tmpResult.disableNewUserDismissibleContent(prop);
    if (tmp4 != null) {
      lastDismissedAtMs = tmp4.lastDismissedAtMs;
    }
    let tmp15 = null;
    if (canShowTimeRecurringContent(tmp8, lastDismissedAtMs, numTimesDismissed, cooldownDurationMs)) {
      tmp15 = prop;
    }
    dependencyMap = tmp15;
    tmp7 = tmp15;
  }
  const items1 = [useGetVisibleContent(tmp7, id, GUILD_HEADER_TOOLTIPS), ];
  const items2 = [tmp7, GUILD_HEADER_TOOLTIPS, id];
  items1[1] = react.useCallback((dismissAction, forceTrack) => {
    if (null != prop) {
      const obj2 = { dismissAction, groupName, guildId, forceTrack };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(tmp, guildId, obj2);
    }
  }, items2);
  return items1;
};
export const useDangerouslyPeekDismissibleContents = function useDangerouslyPeekDismissibleContents(items1) {
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
  return items1.filter((item) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const obj = Uint8ArrayUtils;
      tmp2 = !obj.hasBit(tmp, item);
    }
    return tmp2;
  });
};
