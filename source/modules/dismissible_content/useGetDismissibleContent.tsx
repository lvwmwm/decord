// Module ID: 5798
// Function ID: 49567
// Name: useGetVisibleContent
// Dependencies: []
// Exports: useDangerouslyPeekDismissibleContents, useGetDismissibleContent, useGetSingleUseGuildDismissibleContent_UNSAFE, useGetSnowflakeBoundDismissibleContent, useGetSnowflakeBoundGuildDismissibleContent_UNSAFE, useGetTimeRecurringDismissibleContent, useGetTimeRecurringGuildDismissibleContent_UNSAFE, useGetTimeRecurringSnowflakeBoundDismissibleContent, useGetVersionedDismissibleContent

// Module 5798 (useGetVisibleContent)
function useGetVisibleContent(contentType, stateFromStores, GUILD_HEADER_TOOLTIPS, latestVersion, newSnowflakeId) {
  stateFromStores = contentType;
  const importDefault = stateFromStores;
  const dependencyMap = GUILD_HEADER_TOOLTIPS;
  const React = latestVersion;
  let closure_4 = newSnowflakeId;
  const tmp = callback2((currentlyShown) => {
    let hasItem = null != currentlyShown;
    if (hasItem) {
      currentlyShown = currentlyShown.currentlyShown;
      hasItem = currentlyShown.has(currentlyShown);
    }
    return hasItem;
  });
  const anyOverlayRenderingLocked = stateFromStores(dependencyMap[9]).useAnyOverlayRenderingLocked();
  let closure_5 = anyOverlayRenderingLocked;
  const obj = stateFromStores(dependencyMap[9]);
  stateFromStores = stateFromStores(dependencyMap[10]).useStateFromStores([], () => {

  });
  let closure_6 = stateFromStores;
  const obj2 = stateFromStores(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores1 = stateFromStores(dependencyMap[10]).useStateFromStores(items, () => {
    let hasUserHitDCCapResult = null != arg0;
    if (hasUserHitDCCapResult) {
      hasUserHitDCCapResult = stateFromStores.hasUserHitDCCap(arg0, arg1);
    }
    return hasUserHitDCCapResult;
  });
  const ref = React.useRef(stateFromStores);
  const callback2 = ref;
  ref.current = stateFromStores;
  const items1 = [contentType, GUILD_HEADER_TOOLTIPS, stateFromStores1, anyOverlayRenderingLocked, latestVersion, stateFromStores, newSnowflakeId];
  const effect = React.useEffect(() => {
    if (null != arg0) {
      if (!arg4.hasLoaded(constants2.PRELOADED_USER_SETTINGS)) {
        const current = ref.current;
        let obj = arg1(arg2[7]);
        obj = { content_type: arg0(arg2[8]).DismissibleContent[closure_0] };
        let tmp12 = null;
        if (null != arg2) {
          tmp12 = tmp5;
        }
        obj.group_name = tmp12;
        let tmp13 = null;
        if (null != arg3) {
          tmp13 = tmp6;
        }
        obj.latest_version = tmp13;
        let tmp14 = null;
        if (null != current) {
          tmp14 = current;
        }
        obj.guild_id = tmp14;
        let tmp15 = null;
        if (null != arg4) {
          tmp15 = tmp7;
        }
        obj.snowflake_id = tmp15;
        obj.track(constants.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, obj);
        const tmp5 = arg2;
      }
      const obj3 = arg0(arg2[11]);
      obj = { groupName: arg2, guildId: ref.current, version: arg3, snowflakeId: arg4 };
      const markDismissibleContentAsShown = obj3.requestMarkDismissibleContentAsShown(arg0, obj, anyOverlayRenderingLocked, stateFromStores);
      return () => {
        if (null != closure_0) {
          const obj = { content: closure_0, groupName: closure_2 };
          callback(obj, !closure_6.hasUserHitDCCap());
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
  const arg1 = prop;
  const items = [closure_4];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    let tmp = null;
    if (null !== arg0) {
      const userContent = settings.settings.userContent;
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
      tmp = closure_11;
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
  let hasLoadedResult = closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS);
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const removeCandidateContent = arg1(dependencyMap[4]).removeCandidateContent;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const UserSettingsTypes = arg1(dependencyMap[6]).UserSettingsTypes;
let closure_11 = {};
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/dismissible_content/useGetDismissibleContent.tsx");

export const useGetDismissibleContent = function useGetDismissibleContent(items3, APP_LAUNCHER_ONBOARDING) {
  const items = [closure_4];
  const stateFromStores = APP_LAUNCHER_ONBOARDING(dependencyMap[10]).useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (null != userContent) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  const importDefault = stateFromStores;
  const obj = APP_LAUNCHER_ONBOARDING(dependencyMap[10]);
  const items1 = [closure_5];
  const stateFromStores1 = APP_LAUNCHER_ONBOARDING(dependencyMap[10]).useStateFromStores(items1, () => guildId.getGuildId());
  const dependencyMap = stateFromStores1;
  const obj2 = APP_LAUNCHER_ONBOARDING(dependencyMap[10]);
  const newUserDismissibleContent = APP_LAUNCHER_ONBOARDING(dependencyMap[12]).useNewUserDismissibleContent(items3);
  let React = null;
  if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const found = newUserDismissibleContent.find((CHANNEL_NOTICE_INVITE) => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        tmp = !arg1(stateFromStores1[13]).hasBit(stateFromStores, CHANNEL_NOTICE_INVITE);
        const obj = arg1(stateFromStores1[13]);
      }
      return tmp;
    });
    React = found;
    let tmp3 = found;
  } else {
    tmp3 = null;
    if (null != stateFromStores) {
      const found1 = newUserDismissibleContent.find((CHANNEL_NOTICE_INVITE) => !arg1(stateFromStores1[13]).hasBit(stateFromStores, CHANNEL_NOTICE_INVITE));
      React = found1;
      tmp3 = found1;
    }
  }
  const items2 = [useGetVisibleContent(tmp3, stateFromStores1, APP_LAUNCHER_ONBOARDING), ];
  items3 = [tmp3, APP_LAUNCHER_ONBOARDING, stateFromStores1];
  items2[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != found1) {
      let obj = forceTrack(stateFromStores1[14]);
      obj = { dismissAction, groupName: forceTrack, guildId: stateFromStores1, forceTrack };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(found1, obj);
    }
  }, items3);
  return items2;
};
export const useGetVersionedDismissibleContent = function useGetVersionedDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING, latestVersion, groupName) {
  const importDefault = groupName;
  const lastDismissedVersion = useGetRecurringDismissibleContentState(COLLECTIBLES_SHOP_ENTRY_MARKETING).lastDismissedVersion;
  const items = [closure_5];
  const stateFromStores = latestVersion(dependencyMap[10]).useStateFromStores(items, () => guildId.getGuildId());
  const dependencyMap = stateFromStores;
  let React = null;
  let tmp2 = null;
  if (null != COLLECTIBLES_SHOP_ENTRY_MARKETING) {
    const tmp5 = !latestVersion(dependencyMap[12]).disableNewUserDismissibleContent(COLLECTIBLES_SHOP_ENTRY_MARKETING);
    if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
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
    const obj2 = latestVersion(dependencyMap[12]);
  }
  const items1 = [useGetVisibleContent(tmp2, stateFromStores, groupName, latestVersion), ];
  const items2 = [tmp2, groupName, stateFromStores, latestVersion];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != tmp8) {
      let obj = forceTrack(stateFromStores[11]);
      obj = { dismissAction, groupName: arg2, guildId: stateFromStores, forceTrack, version: forceTrack };
      const result = obj.markVersionedDismissibleContentAsDismissed(tmp8, forceTrack, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringDismissibleContent = function useGetTimeRecurringDismissibleContent(prop, closure_11, groupName) {
  let lastDismissedAtMs;
  let numTimesDismissed;
  closure_11 = groupName;
  ({ lastDismissedAtMs, numTimesDismissed } = useGetRecurringDismissibleContentState(prop));
  const tmp = useGetRecurringDismissibleContentState(prop);
  const items = [closure_5];
  const stateFromStores = closure_11(dependencyMap[10]).useStateFromStores(items, () => guildId.getGuildId());
  const importDefault = stateFromStores;
  let dependencyMap = null;
  let tmp3 = null;
  if (null != prop) {
    let tmp10 = null;
    if (canShowTimeRecurringContent(!obj2.disableNewUserDismissibleContent(prop), lastDismissedAtMs, numTimesDismissed, closure_11)) {
      tmp10 = prop;
    }
    dependencyMap = tmp10;
    tmp3 = tmp10;
    const obj2 = closure_11(dependencyMap[12]);
  }
  const items1 = [useGetVisibleContent(tmp3, stateFromStores, groupName), ];
  const items2 = [tmp3, groupName, stateFromStores];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != tmp10) {
      let obj = arg2(tmp10[11]);
      obj = { dismissAction, groupName: arg2, guildId: stateFromStores, forceTrack };
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(tmp10, obj);
    }
  }, items2);
  return items1;
};
export const useGetSnowflakeBoundDismissibleContent = function useGetSnowflakeBoundDismissibleContent(prop, newSnowflakeId, groupName) {
  const importDefault = groupName;
  const lastDismissedObjectId = useGetRecurringDismissibleContentState(prop).lastDismissedObjectId;
  const items = [closure_5];
  const stateFromStores = newSnowflakeId(dependencyMap[10]).useStateFromStores(items, () => guildId.getGuildId());
  const dependencyMap = stateFromStores;
  let React = null;
  let tmp2 = null;
  if (null != prop) {
    const tmp5 = !newSnowflakeId(dependencyMap[12]).disableNewUserDismissibleContent(prop);
    if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp11 = null;
      if (tmp5) {
        if (null == lastDismissedObjectId) {
          tmp11 = prop;
        } else {
          tmp11 = null;
          const obj4 = importDefault(dependencyMap[15]);
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
          const obj3 = importDefault(dependencyMap[15]);
        }
        React = tmp8;
        tmp2 = tmp8;
      }
    }
    const obj2 = newSnowflakeId(dependencyMap[12]);
  }
  const items1 = [useGetVisibleContent(tmp2, stateFromStores, groupName, undefined, newSnowflakeId), ];
  const items2 = [tmp2, groupName, stateFromStores, newSnowflakeId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != tmp8) {
      let obj = forceTrack(stateFromStores[11]);
      obj = { dismissAction, groupName: arg2, guildId: stateFromStores, forceTrack };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp8, forceTrack, obj);
    }
  }, items2);
  return items1;
};
export const useGetSnowflakeBoundGuildDismissibleContent_UNSAFE = function useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(prop, newSnowflakeId, stateFromStores, GUILD_HEADER_TOOLTIPS) {
  const importDefault = stateFromStores;
  const dependencyMap = GUILD_HEADER_TOOLTIPS;
  const items = [closure_4];
  stateFromStores = newSnowflakeId(dependencyMap[10]).useStateFromStores(items, () => guildDismissedContentState.getGuildDismissedContentState(arg2));
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
    const tmp8 = !newSnowflakeId(dependencyMap[12]).disableNewUserDismissibleContent(prop);
    if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
      let tmp14 = null;
      if (tmp8) {
        if (null == lastDismissedObjectId) {
          tmp14 = prop;
        } else {
          tmp14 = null;
          const obj4 = importDefault(dependencyMap[15]);
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
          const obj3 = importDefault(dependencyMap[15]);
        }
        React = tmp11;
        tmp5 = tmp11;
      }
    }
    const obj2 = newSnowflakeId(dependencyMap[12]);
  }
  const items1 = [useGetVisibleContent(tmp5, stateFromStores, GUILD_HEADER_TOOLTIPS, undefined, newSnowflakeId), ];
  const items2 = [tmp5, GUILD_HEADER_TOOLTIPS, stateFromStores, newSnowflakeId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != tmp11) {
      let obj = forceTrack(arg3[14]);
      obj = { dismissAction, groupName: arg3, guildId: arg2, forceTrack };
      const result = obj.UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(tmp11, forceTrack, arg2, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringSnowflakeBoundDismissibleContent = function useGetTimeRecurringSnowflakeBoundDismissibleContent(contentType, timeRecurringConfig, newSnowflakeId, groupName) {
  timeRecurringConfig = newSnowflakeId;
  const importDefault = groupName;
  const items = [closure_5];
  const stateFromStores = timeRecurringConfig(dependencyMap[10]).useStateFromStores(items, () => guildId.getGuildId());
  const dependencyMap = stateFromStores;
  let React = null;
  let result = null == contentType;
  if (!result) {
    result = timeRecurringConfig(dependencyMap[11]).isTimeRecurringSnowflakeBoundDismissibleContentDismissed(contentType, newSnowflakeId, timeRecurringConfig);
    const obj2 = timeRecurringConfig(dependencyMap[11]);
  }
  let tmp6 = null;
  if (!result) {
    React = contentType;
    tmp6 = contentType;
  }
  const items1 = [useGetVisibleContent(tmp6, stateFromStores, groupName, undefined, newSnowflakeId), ];
  const items2 = [tmp6, groupName, stateFromStores, newSnowflakeId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != dismissAction) {
      let obj = arg2(stateFromStores[11]);
      obj = { dismissAction, groupName: arg3, guildId: stateFromStores, forceTrack };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissAction, arg2, obj);
    }
  }, items2);
  return items1;
};
export const useGetSingleUseGuildDismissibleContent_UNSAFE = function useGetSingleUseGuildDismissibleContent_UNSAFE(items2, guildId, CHANNEL_NOTICES) {
  const importDefault = CHANNEL_NOTICES;
  const items = [closure_4];
  const stateFromStores = guildId(dependencyMap[10]).useStateFromStores(items, () => guildDismissedContentState.getGuildDismissedContentState(arg1));
  const dependencyMap = stateFromStores;
  const obj = guildId(dependencyMap[10]);
  const newUserDismissibleContent = guildId(dependencyMap[12]).useNewUserDismissibleContent(items2);
  let React = null;
  if (closure_4.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
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
    React = found;
    let tmp2 = found;
  } else {
    tmp2 = null;
    if (null != stateFromStores) {
      const found1 = newUserDismissibleContent.find((arg0) => {
        let tmp = null == stateFromStores[arg0];
        if (!tmp) {
          tmp = false === stateFromStores[arg0].dismissed;
        }
        return tmp;
      });
      React = found1;
      tmp2 = found1;
    }
  }
  const items1 = [useGetVisibleContent(tmp2, guildId, CHANNEL_NOTICES), ];
  items2 = [tmp2, CHANNEL_NOTICES, guildId];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != found1) {
      let obj = forceTrack(stateFromStores[14]);
      obj = { dismissAction, groupName: arg2, guildId: forceTrack, forceTrack };
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(found1, forceTrack, obj);
    }
  }, items2);
  return items1;
};
export const useGetTimeRecurringGuildDismissibleContent_UNSAFE = function useGetTimeRecurringGuildDismissibleContent_UNSAFE(prop, id, closure_16, GUILD_HEADER_TOOLTIPS) {
  const importDefault = GUILD_HEADER_TOOLTIPS;
  const items = [closure_4];
  const stateFromStores = id(dependencyMap[10]).useStateFromStores(items, () => guildDismissedContentState.getGuildDismissedContentState(arg1));
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
    const tmp8 = !id(dependencyMap[12]).disableNewUserDismissibleContent(prop);
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
    const obj2 = id(dependencyMap[12]);
  }
  const items1 = [useGetVisibleContent(tmp5, id, GUILD_HEADER_TOOLTIPS), ];
  const items2 = [tmp5, GUILD_HEADER_TOOLTIPS, id];
  items1[1] = React.useCallback((dismissAction, forceTrack) => {
    if (null != tmp15) {
      let obj = forceTrack(tmp15[14]);
      obj = { dismissAction, groupName: arg3, guildId: forceTrack, forceTrack };
      const result = obj.UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(tmp15, forceTrack, obj);
    }
  }, items2);
  return items1;
};
export const useDangerouslyPeekDismissibleContents = function useDangerouslyPeekDismissibleContents(arr) {
  const items = [closure_4];
  const callback = callback(dependencyMap[10]).useStateFromStores(items, () => {
    const userContent = settings.settings.userContent;
    let dismissedContents;
    if (null != userContent) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  return arr.filter((CHANNEL_NOTICE_INVITE) => {
    let tmp = null != callback;
    if (tmp) {
      tmp = !callback(closure_2[13]).hasBit(callback, CHANNEL_NOTICE_INVITE);
      const obj = callback(closure_2[13]);
    }
    return tmp;
  });
};
