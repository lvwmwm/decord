// Module ID: 5803
// Function ID: 49618
// Name: useGetVisibleContent
// Dependencies: [31, 1316, 3947, 1338, 1340, 653, 662, 675, 1334, 5804, 566, 1336, 3968, 1333, 3946, 21, 2]
// Exports: useDangerouslyPeekDismissibleContents, useGetDismissibleContent, useGetSingleUseGuildDismissibleContent_UNSAFE, useGetSnowflakeBoundDismissibleContent, useGetSnowflakeBoundGuildDismissibleContent_UNSAFE, useGetTimeRecurringDismissibleContent, useGetTimeRecurringGuildDismissibleContent_UNSAFE, useGetTimeRecurringSnowflakeBoundDismissibleContent, useGetVersionedDismissibleContent

// Module 5803 (useGetVisibleContent)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { removeCandidateContent } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
function useGetVisibleContent(contentType, stateFromStores, GUILD_HEADER_TOOLTIPS, latestVersion, newSnowflakeId) {
  const _require = contentType;
  let closure_1 = stateFromStores;
  const dependencyMap = GUILD_HEADER_TOOLTIPS;
  const React = latestVersion;
  let _isNativeReflectConstruct = newSnowflakeId;
  const tmp = ref((currentlyShown) => {
    let hasItem = null != closure_0;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(closure_0);
    }
    return hasItem;
  });
  const anyOverlayRenderingLocked = _require(5804).useAnyOverlayRenderingLocked();
  let obj = _require(5804);
  stateFromStores = _require(566).useStateFromStores([], () => {

  });
  const obj2 = _require(566);
  const items = [stateFromStores];
  const stateFromStores1 = _require(566).useStateFromStores(items, () => {
    let hasUserHitDCCapResult = null != closure_0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores.hasUserHitDCCap(closure_0, closure_1);
    }
    return hasUserHitDCCapResult;
  });
  ref = React.useRef(stateFromStores);
  ref.current = stateFromStores;
  const items1 = [contentType, GUILD_HEADER_TOOLTIPS, stateFromStores1, anyOverlayRenderingLocked, latestVersion, stateFromStores, newSnowflakeId];
  const effect = React.useEffect(() => {
    if (null != contentType) {
      if (!newSnowflakeId.hasLoaded(outer1_10.PRELOADED_USER_SETTINGS)) {
        const current = ref.current;
        let obj = stateFromStores(GUILD_HEADER_TOOLTIPS[7]);
        obj = { content_type: contentType(GUILD_HEADER_TOOLTIPS[8]).DismissibleContent[contentType] };
        let tmp12 = null;
        if (null != GUILD_HEADER_TOOLTIPS) {
          tmp12 = tmp5;
        }
        obj.group_name = tmp12;
        let tmp13 = null;
        if (null != result) {
          tmp13 = tmp6;
        }
        obj.latest_version = tmp13;
        let tmp14 = null;
        if (null != current) {
          tmp14 = current;
        }
        obj.guild_id = tmp14;
        let tmp15 = null;
        if (null != newSnowflakeId) {
          tmp15 = tmp7;
        }
        obj.snowflake_id = tmp15;
        obj.track(outer1_9.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
        tmp5 = GUILD_HEADER_TOOLTIPS;
      }
      const obj3 = contentType(GUILD_HEADER_TOOLTIPS[11]);
      obj = { groupName: GUILD_HEADER_TOOLTIPS, guildId: ref.current, version: result, snowflakeId: newSnowflakeId };
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(contentType, obj, anyOverlayRenderingLocked, stateFromStores);
      return () => {
        if (null != outer1_0) {
          const obj = { content: outer1_0, groupName: outer1_2 };
          outer2_8(obj, !stateFromStores.hasUserHitDCCap());
        }
      };
    }
  }, items1);
  let tmp7 = null;
  if (tmp) {
    tmp7 = null;
    if (null != contentType) {
      tmp7 = contentType;
    }
  }
  return tmp7;
}
function useGetRecurringDismissibleContentState(prop) {
  const _require = prop;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null !== closure_0) {
      const userContent = outer1_4.settings.userContent;
      let tmp3;
      if (null != userContent) {
        const recurringDismissibleContentStates = userContent.recurringDismissibleContentStates;
        if (null != recurringDismissibleContentStates) {
          tmp3 = recurringDismissibleContentStates[closure_0];
        }
      }
      tmp = tmp3;
    }
    if (null == tmp) {
      tmp = outer1_11;
    }
    return tmp;
  });
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
      let num2 = 0;
      if (null != tmp) {
        num2 = tmp;
      }
      tmp6 = num2 <= cooldownDurationMs.showAfterTimestamp;
    }
    tmp5 = tmp6;
  }
  let hasLoadedResult = _isNativeReflectConstruct.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
  if (!hasLoadedResult) {
    hasLoadedResult = null != tmp && null != numTimesDismissed;
    const tmp9 = null != tmp && null != numTimesDismissed;
  }
  if (hasLoadedResult) {
    hasLoadedResult = arg0;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp5;
  }
  if (hasLoadedResult) {
    hasLoadedResult = null == tmp || timestamp >= num;
    const tmp10 = null == tmp || timestamp >= num;
  }
  if (hasLoadedResult) {
    hasLoadedResult = tmp7;
  }
  return hasLoadedResult;
}
let closure_11 = {};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = function useGetDismissibleContent(items3, APP_LAUNCHER_ONBOARDING) {
  const _require = APP_LAUNCHER_ONBOARDING;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(stateFromStores1[10]).useStateFromStores(items, () => {
    const userContent = outer1_4.settings.userContent;
    let dismissedContents;
    if (null != userContent) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj = _require(stateFromStores1[10]);
  const items1 = [closure_5];
  stateFromStores1 = _require(stateFromStores1[10]).useStateFromStores(items1, () => outer1_5.getGuildId());
  const obj2 = _require(stateFromStores1[10]);
  const newUserDismissibleContent = _require(stateFromStores1[12]).useNewUserDismissibleContent(items3);
  let found1 = null;
  if (_isNativeReflectConstruct.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((closure_0) => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        tmp = !APP_LAUNCHER_ONBOARDING(stateFromStores1[13]).hasBit(stateFromStores, closure_0);
        const obj = APP_LAUNCHER_ONBOARDING(stateFromStores1[13]);
      }
      return tmp;
    });
    found1 = found;
    let tmp3 = found;
  } else {
    tmp3 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((closure_0) => !APP_LAUNCHER_ONBOARDING(stateFromStores1[13]).hasBit(stateFromStores, closure_0));
      tmp3 = found1;
    }
  }
  const items2 = [useGetVisibleContent(tmp3, stateFromStores1, APP_LAUNCHER_ONBOARDING), ];
  items3 = [tmp3, APP_LAUNCHER_ONBOARDING, stateFromStores1];
  items2[1] = found1.useCallback((dismissAction, forceTrack) => {
    if (null != found1) {
      let obj = APP_LAUNCHER_ONBOARDING(stateFromStores1[14]);
      obj = { dismissAction, groupName: APP_LAUNCHER_ONBOARDING, guildId: stateFromStores1, forceTrack };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(found1, obj);
    }
  }, items3);
  return items2;
};
export const useGetVersionedDismissibleContent = function useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName) {
  const _require = latestVersion;
  let closure_1 = groupName;
  const lastDismissedVersion = useGetRecurringDismissibleContentState(COLLECTIBLES_SHOP_ENTRY_MARKETING).lastDismissedVersion;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_5.getGuildId());
  let React = null;
  let tmp2 = null;
  if (null != COLLECTIBLES_SHOP_ENTRY_MARKETING) {
    const tmp5 = !_require(stateFromStores[12]).disableNewUserDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING);
    if (_isNativeReflectConstruct.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp9 = null;
      if (tmp5) {
        if (null == lastDismissedVersion) {
          tmp9 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
        } else {
          tmp9 = null;
        }
      }
      React = tmp9;
      tmp2 = tmp9;
    } else {
      tmp2 = null;
      if (null != lastDismissedVersion) {
        let tmp8 = null;
        if (tmp5) {
          tmp8 = null;
          if (lastDismissedVersion < latestVersion) {
            tmp8 = COLLECTIBLES_SHOP_ENTRY_MARKETING;
          }
        }
        React = tmp8;
        tmp2 = tmp8;
      }
    }
    const obj2 = _require(stateFromStores[12]);
  }
  const items1 = [useGetVisibleContent(tmp2, stateFromStores, groupName, latestVersion), ];
  const items2 = [tmp2, groupName, stateFromStores, latestVersion];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != c3) {
      let obj = latestVersion(stateFromStores[11]);
      obj = { dismissAction, groupName: closure_1, guildId: stateFromStores, forceTrack, version: latestVersion };
      const result = obj.markVersionedDismissibleContentAsDismissed(c3, latestVersion, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringDismissibleContent = function useGetTimeRecurringDismissibleContent(prop, closure_11, groupName) {
  let lastDismissedAtMs;
  let numTimesDismissed;
  const _require = groupName;
  ({ lastDismissedAtMs, numTimesDismissed } = useGetRecurringDismissibleContentState(prop));
  const tmp = useGetRecurringDismissibleContentState(prop);
  const items = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getGuildId());
  let dependencyMap = null;
  let tmp3 = null;
  if (null != prop) {
    let tmp10 = null;
    if (canShowTimeRecurringContent(!obj2.disableNewUserDismissibleContent(prop), lastDismissedAtMs, numTimesDismissed, closure_11)) {
      tmp10 = prop;
    }
    dependencyMap = tmp10;
    tmp3 = tmp10;
    obj2 = _require(3968);
  }
  const items1 = [useGetVisibleContent(tmp3, stateFromStores, groupName), ];
  const items2 = [tmp3, groupName, stateFromStores];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != _null) {
      let obj = groupName(_null[11]);
      obj = { dismissAction, groupName, guildId: stateFromStores, forceTrack };
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(_null, obj);
    }
  }, items2);
  return items1;
};
export const useGetSnowflakeBoundDismissibleContent = function useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName) {
  const _require = newSnowflakeId;
  const importDefault = groupName;
  const lastDismissedObjectId = useGetRecurringDismissibleContentState(prop).lastDismissedObjectId;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_5.getGuildId());
  let React = null;
  let tmp2 = null;
  if (null != prop) {
    const tmp5 = !_require(stateFromStores[12]).disableNewUserDismissibleContent(prop);
    if (_isNativeReflectConstruct.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp11 = null;
      if (tmp5) {
        if (null == lastDismissedObjectId) {
          tmp11 = prop;
        } else {
          tmp11 = null;
          const obj4 = importDefault(stateFromStores[15]);
        }
      }
      React = tmp11;
      tmp2 = tmp11;
    } else {
      tmp2 = null;
      if (null != lastDismissedObjectId) {
        let tmp8 = null;
        if (tmp5) {
          tmp8 = null;
          if (1 === obj3.compare(newSnowflakeId, lastDismissedObjectId)) {
            tmp8 = prop;
          }
          obj3 = importDefault(stateFromStores[15]);
        }
        React = tmp8;
        tmp2 = tmp8;
      }
    }
    const obj2 = _require(stateFromStores[12]);
  }
  const items1 = [useGetVisibleContent(tmp2, stateFromStores, groupName, undefined, newSnowflakeId), ];
  const items2 = [tmp2, groupName, stateFromStores, newSnowflakeId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != c3) {
      let obj = newSnowflakeId(stateFromStores[11]);
      obj = { dismissAction, groupName: closure_1, guildId: stateFromStores, forceTrack };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(c3, newSnowflakeId, obj);
    }
  }, items2);
  return items1;
};
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE = function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, stateFromStores, GUILD_HEADER_TOOLTIPS) {
  const _require = newSnowflakeId;
  const importDefault = stateFromStores;
  const dependencyMap = GUILD_HEADER_TOOLTIPS;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getGuildDismissedContentState(closure_1));
  let tmp2 = null;
  if (null != prop) {
    let tmp3 = null;
    if (null != stateFromStores) {
      let tmp4;
      if (null != stateFromStores) {
        tmp4 = stateFromStores[prop];
      }
      tmp3 = tmp4;
    }
    tmp2 = tmp3;
  }
  if (null != tmp2) {
    const lastDismissedObjectId = tmp2.lastDismissedObjectId;
  }
  let React = null;
  let tmp5 = null;
  if (null != prop) {
    const tmp8 = !_require(3968).disableNewUserDismissibleContent(prop);
    if (_isNativeReflectConstruct.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp14 = null;
      if (tmp8) {
        if (null == lastDismissedObjectId) {
          tmp14 = prop;
        } else {
          tmp14 = null;
          const obj4 = importDefault(21);
        }
      }
      React = tmp14;
      tmp5 = tmp14;
    } else {
      tmp5 = null;
      if (null != lastDismissedObjectId) {
        let tmp11 = null;
        if (tmp8) {
          tmp11 = null;
          if (1 === obj3.compare(newSnowflakeId, lastDismissedObjectId)) {
            tmp11 = prop;
          }
          obj3 = importDefault(21);
        }
        React = tmp11;
        tmp5 = tmp11;
      }
    }
    const obj2 = _require(3968);
  }
  const items1 = [useGetVisibleContent(tmp5, stateFromStores, GUILD_HEADER_TOOLTIPS, undefined, newSnowflakeId), ];
  const items2 = [tmp5, GUILD_HEADER_TOOLTIPS, stateFromStores, newSnowflakeId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != c3) {
      let obj = newSnowflakeId(GUILD_HEADER_TOOLTIPS[14]);
      obj = { dismissAction, groupName: GUILD_HEADER_TOOLTIPS, guildId: closure_1, forceTrack };
      const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(c3, newSnowflakeId, closure_1, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringSnowflakeBoundDismissibleContent = function useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName) {
  const _require = newSnowflakeId;
  let closure_1 = groupName;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_5.getGuildId());
  let React = null;
  let result = null == contentType;
  if (!result) {
    result = _require(stateFromStores[11]).isTimeRecurringSnowflakeBoundDismissibleContentDismissed(contentType, newSnowflakeId, timeRecurringConfig);
    const obj2 = _require(stateFromStores[11]);
  }
  let tmp6 = null;
  if (!result) {
    React = contentType;
    tmp6 = contentType;
  }
  const items1 = [useGetVisibleContent(tmp6, stateFromStores, groupName, undefined, newSnowflakeId), ];
  const items2 = [tmp6, groupName, stateFromStores, newSnowflakeId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != result) {
      let obj = newSnowflakeId(stateFromStores[11]);
      obj = { dismissAction, groupName: closure_1, guildId: stateFromStores, forceTrack };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(result, newSnowflakeId, obj);
    }
  }, items2);
  return items1;
};
export const useGetSingleUseGuildDismissibleContent_UNSAFE = function useGetSingleUseGuildDismissibleContent_UNSAFE(items2, guildId, CHANNEL_NOTICES) {
  const _require = guildId;
  let closure_1 = CHANNEL_NOTICES;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_4.getGuildDismissedContentState(closure_0));
  let obj = _require(stateFromStores[10]);
  const newUserDismissibleContent = _require(stateFromStores[12]).useNewUserDismissibleContent(items2);
  let found1 = null;
  if (_isNativeReflectConstruct.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((arg0) => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        tmp = null == stateFromStores[arg0];
      }
      if (!tmp) {
        tmp = false === stateFromStores[arg0].dismissed;
      }
      return tmp;
    });
    found1 = found;
    let tmp2 = found;
  } else {
    tmp2 = null;
    if (null != stateFromStores) {
      found1 = newUserDismissibleContent.find((arg0) => {
        let tmp = null == stateFromStores[arg0];
        if (!tmp) {
          tmp = false === stateFromStores[arg0].dismissed;
        }
        return tmp;
      });
      tmp2 = found1;
    }
  }
  const items1 = [useGetVisibleContent(tmp2, guildId, CHANNEL_NOTICES), ];
  items2 = [tmp2, CHANNEL_NOTICES, guildId];
  items1[1] = found1.useCallback((dismissAction, forceTrack) => {
    if (null != found1) {
      let obj = guildId(stateFromStores[14]);
      obj = { dismissAction, groupName: closure_1, guildId, forceTrack };
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(found1, guildId, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE = function useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_16, GUILD_HEADER_TOOLTIPS) {
  const _require = id;
  let closure_1 = GUILD_HEADER_TOOLTIPS;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getGuildDismissedContentState(closure_0));
  let tmp2 = null;
  if (null != prop) {
    let tmp3 = null;
    if (null != stateFromStores) {
      let tmp4;
      if (null != stateFromStores) {
        tmp4 = stateFromStores[prop];
      }
      tmp3 = tmp4;
    }
    tmp2 = tmp3;
  }
  if (null != tmp2) {
    const numTimesDismissed = tmp2.numTimesDismissed;
  }
  let dependencyMap = null;
  let tmp5 = null;
  if (null != prop) {
    const tmp8 = !_require(3968).disableNewUserDismissibleContent(prop);
    let lastDismissedAtMs;
    if (null != tmp2) {
      lastDismissedAtMs = tmp2.lastDismissedAtMs;
    }
    let tmp15 = null;
    if (canShowTimeRecurringContent(tmp8, lastDismissedAtMs, numTimesDismissed, closure_16)) {
      tmp15 = prop;
    }
    dependencyMap = tmp15;
    tmp5 = tmp15;
    const obj2 = _require(3968);
  }
  const items1 = [useGetVisibleContent(tmp5, id, GUILD_HEADER_TOOLTIPS), ];
  const items2 = [tmp5, GUILD_HEADER_TOOLTIPS, id];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != _null) {
      let obj = id(_null[14]);
      obj = { dismissAction, groupName: closure_1, guildId: id, forceTrack };
      const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(_null, id, obj);
    }
  }, items2);
  return items1;
};
export const useDangerouslyPeekDismissibleContents = function useDangerouslyPeekDismissibleContents(arr) {
  const items = [_isNativeReflectConstruct];
  _require = _require(566).useStateFromStores(items, () => {
    const userContent = outer1_4.settings.userContent;
    let dismissedContents;
    if (null != userContent) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  return arr.filter((closure_0) => {
    let tmp = null != callback;
    if (tmp) {
      tmp = !callback(outer1_2[13]).hasBit(callback, closure_0);
      const obj = callback(outer1_2[13]);
    }
    return tmp;
  });
};
