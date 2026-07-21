// Module ID: 1336
// Function ID: 15659
// Name: addVersionedDismissedContent
// Dependencies: []
// Exports: UNSAFE_addGuildDismissedContent, UNSAFE_addSnowflakeBoundGuildDismissedContent, UNSAFE_addTimeRecurringGuildDismissedContent, UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed, UNSAFE_isTimeRecurringGuildDismissibleContentDismissed, UNSAFE_removeGuildDismissedContent, UNSAFE_removeSnowflakeBoundGuildDismissedContent, UNSAFE_removeTimeRecurringGuildDismissedContent, getDismissedRecurringDismissibleContentState, isTimeRecurringDismissibleContentDismissed, isTimeRecurringSnowflakeBoundDismissibleContentDismissed, isVersionedDismissibleContentDismissed, markLatestVersionDismissibleContentAsDismissed, markSnowflakeBoundDismissibleContentAsDismissed, markTimeRecurringDismissibleContentAsDismissed, requestMarkDismissibleContentAsShown, useIsSingleUseGuildDismissibleContentDismissed

// Module 1336 (addVersionedDismissedContent)
function addVersionedDismissedContent(GUILD_POWERUP_NOTIFICATION, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed) {
  let obj = versionedDismissibleContentCurrentVersion(dependencyMap[11]);
  obj = { lastDismissedVersion: versionedDismissibleContentCurrentVersion, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addTimeRecurringDismissedContent(GUILD_POWERUP_NOTIFICATION, nextNumTimesDismissed) {
  let obj = nextNumTimesDismissed(dependencyMap[11]);
  obj = { surrogates: true, accessible: true, _oneway: true, lastDismissedAtMs: Date.now().toString(), numTimesDismissed: nextNumTimesDismissed };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addSnowflakeBoundDismissedContent(GUILD_POWERUP_NOTIFICATION, lastDismissedObjectId, nextNumTimesDismissed1) {
  let obj = lastDismissedObjectId(dependencyMap[11]);
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId, numTimesDismissed: nextNumTimesDismissed1 };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
class UNSAFE_isSingleUseGuildDismissibleContentDismissed {
  constructor(arg0, arg1) {
    obj = arg1(dependencyMap[12]);
    if (obj.disableNewUserDismissibleContent(global)) {
      flag2 = true;
      return true;
    } else {
      tmp = closure_5;
      tmp2 = arg1;
      guildDismissedContentState = closure_5.getGuildDismissedContentState(arg1);
      tmp4 = null;
      tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[global];
      if (tmp5) {
        flag = true;
        tmp5 = true === guildDismissedContentState[global].dismissed;
      }
      return tmp5;
    }
  }
}
function markDismissibleContentAsDismissedPreProcessing(CHANNEL_NOTICE_INVITE, forceTrack) {
  if (tmp) {
    trackDismissibleContentDismissed(CHANNEL_NOTICE_INVITE, forceTrack);
  }
  const tmp = callback3(CHANNEL_NOTICE_INVITE) || forceTrack.forceTrack;
  const guildId = forceTrack.guildId;
  let tmp4;
  if (null != guildId) {
    tmp4 = guildId;
  }
  forceTrack(dependencyMap[16]).handleDCDismissed(CHANNEL_NOTICE_INVITE, tmp4);
}
function markDismissibleContentAsDismissedPostProcessing(content, groupName) {
  const obj = { content };
  groupName = undefined;
  if (null != groupName) {
    groupName = groupName.groupName;
  }
  obj.groupName = groupName;
  closure_9(obj, !closure_7.hasUserHitDCCap());
}
async function _markLatestVersionDismissibleContentAsDismissed(id, arg1, arg2) {
  yield closure_24(id, callback(closure_2[9]).getVersionedDismissibleContentCurrentVersion(id), arg1);
}
function getGuildNextNumTimesDismissed(content, guildId) {
  const guildDismissedContentState = store.getGuildDismissedContentState(guildId);
  let tmp2;
  if (null != guildDismissedContentState) {
    tmp2 = guildDismissedContentState[content];
  }
  let numTimesDismissed;
  if (null != tmp2) {
    numTimesDismissed = tmp2.numTimesDismissed;
  }
  let num = 0;
  if (null != numTimesDismissed) {
    num = numTimesDismissed;
  }
  return num + 1;
}
function getNextNumTimesDismissed(arg0, numTimesDismissed) {
  if (null != numTimesDismissed.numTimesDismissed) {
    return numTimesDismissed.numTimesDismissed;
  } else {
    const userContent = store.settings.userContent;
    let tmp2;
    if (null != userContent) {
      tmp2 = userContent.recurringDismissibleContentStates[arg0];
    }
    numTimesDismissed = undefined;
    if (null != tmp2) {
      numTimesDismissed = tmp2.numTimesDismissed;
    }
    let num = 0;
    if (null != numTimesDismissed) {
      num = numTimesDismissed;
    }
    return num + 1;
  }
}
function markVersionedDismissibleContentAsDismissed(ACTIVITIES_VOICE_LAUNCHER_BADGE, arg1, arg2) {
  return _markVersionedDismissibleContentAsDismissed(...arguments);
}
async function _markVersionedDismissibleContentAsDismissed(arg0, arg1, arg2, arg3) {
  callback(arg0, arg2);
  yield closure_15(arg0, arg1, callback3(arg0, arg2));
  callback2(arg0, arg2);
}
async function _markSnowflakeBoundDismissibleContentAsDismissed(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg2);
  obj["snowflakeId"] = arg1;
  callback(arg0, obj);
  yield closure_17(arg0, arg1, callback3(arg0, arg2));
  callback2(arg0, arg2);
}
async function _markTimeRecurringDismissibleContentAsDismissed(arg0, arg1, arg2) {
  callback(arg0, arg1);
  yield closure_16(arg0, callback3(arg0, arg1));
  callback2(arg0, arg1);
}
function trackDismissibleContentShown(WISHLIST_MOBILE_NUX_ACTION_SHEET) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(callback4(), 2);
  let obj = importDefault(dependencyMap[17]);
  obj = { type: arg1(dependencyMap[14]).DismissibleContent[WISHLIST_MOBILE_NUX_ACTION_SHEET], content_count: tmp2, fatigable_content_count: tmp3 };
  let groupName;
  if (null != arg1) {
    groupName = arg1.groupName;
  }
  obj.group_name = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = arg1(dependencyMap[18]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(WISHLIST_MOBILE_NUX_ACTION_SHEET);
  let guildId;
  if (null != arg1) {
    guildId = arg1.guildId;
  }
  obj.guild_id = guildId;
  let version;
  if (null != arg1) {
    version = arg1.version;
  }
  obj.version = version;
  let snowflakeId;
  if (null != arg1) {
    snowflakeId = arg1.snowflakeId;
  }
  obj.snowflake_id = snowflakeId;
  obj.track(AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, obj);
}
function trackDismissibleContentDismissed(CHANNEL_NOTICE_INVITE, guildId) {
  const renderedAtTimestamp = closure_7.getRenderedAtTimestamp(CHANNEL_NOTICE_INVITE);
  let diff = null;
  if (null != renderedAtTimestamp) {
    diff = date.getTime() - renderedAtTimestamp;
  }
  guildId = undefined;
  if (null != guildId) {
    guildId = guildId.guildId;
  }
  if (null != guildId) {
    let tmp4Result = getGuildNextNumTimesDismissed(CHANNEL_NOTICE_INVITE, guildId.guildId);
  } else {
    let obj = guildId;
    if (null == guildId) {
      obj = {};
    }
    tmp4Result = getNextNumTimesDismissed(CHANNEL_NOTICE_INVITE, obj);
    const tmp4 = getNextNumTimesDismissed;
  }
  const date = new Date();
  obj = { type: guildId(dependencyMap[14]).DismissibleContent[CHANNEL_NOTICE_INVITE] };
  let dismissAction;
  if (null != guildId) {
    dismissAction = guildId.dismissAction;
  }
  if (null == dismissAction) {
    dismissAction = ContentDismissActionType.UNKNOWN;
  }
  obj.action = dismissAction;
  obj.content_count = callback(callback4(), 1)[0];
  let groupName;
  if (null != guildId) {
    groupName = guildId.groupName;
  }
  obj.group_name = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = guildId(dependencyMap[18]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(CHANNEL_NOTICE_INVITE);
  let guildId1;
  if (null != guildId) {
    guildId1 = guildId.guildId;
  }
  obj.guild_id = guildId1;
  obj.shown_duration = diff;
  let version;
  if (null != guildId) {
    version = guildId.version;
  }
  obj.version = version;
  obj.num_times_dismissed = tmp4Result;
  let snowflakeId;
  if (null != guildId) {
    snowflakeId = guildId.snowflakeId;
  }
  obj.snowflake_id = snowflakeId;
  importDefault(dependencyMap[17]).track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const DCFEventTypes = arg1(dependencyMap[3]).DCFEventTypes;
let closure_7 = importDefault(dependencyMap[4]);
({ addCandidateContent: closure_8, removeCandidateContent: closure_9, isContentShown: closure_10, getCurrentlyShownCounts: closure_11 } = arg1(dependencyMap[5]));
const ContentDismissActionType = arg1(dependencyMap[6]).ContentDismissActionType;
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
const items = [arg1(dependencyMap[14]).DismissibleContent.ACCOUNT_LINK_INVITE_FRIENDS, arg1(dependencyMap[14]).DismissibleContent.ACCOUNT_LINK_PROMPT, arg1(dependencyMap[14]).DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK];
const set = new Set(items);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/dismissible_content/DismissibleContentUtils.tsx");

export const SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS = 2592000000;
export const getDismissedRecurringDismissibleContentState = function getDismissedRecurringDismissibleContentState(value) {
  const userContent = store.settings.userContent;
  let tmp;
  if (null != userContent) {
    tmp = userContent.recurringDismissibleContentStates[value];
  }
  const obj = {};
  let num = 0;
  if (obj2.isVersionedDismissibleContent(value)) {
    num = arg1(dependencyMap[9]).getVersionedDismissibleContentCurrentVersion(value);
    const obj3 = arg1(dependencyMap[9]);
  }
  obj.lastDismissedVersion = num;
  const obj2 = arg1(dependencyMap[8]);
  const date = new Date();
  obj.lastDismissedAtMs = new Date().getTime().toString();
  const str = new Date().getTime();
  let str2 = "0";
  if (obj5.isSnowflakeBoundDismissibleContent(value)) {
    const _Date = Date;
    str2 = importDefault(dependencyMap[10]).fromTimestamp(Date.now() + 2592000000);
    const obj6 = importDefault(dependencyMap[10]);
  }
  obj.lastDismissedObjectId = str2;
  let numTimesDismissed;
  if (null != tmp) {
    numTimesDismissed = tmp.numTimesDismissed;
  }
  let num5 = 0;
  if (null != numTimesDismissed) {
    num5 = numTimesDismissed;
  }
  obj.numTimesDismissed = num5;
  return obj;
};
export { addVersionedDismissedContent };
export { addTimeRecurringDismissedContent };
export { addSnowflakeBoundDismissedContent };
export const UNSAFE_addGuildDismissedContent = function UNSAFE_addGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = guildId(dependencyMap[11]);
  obj = { importantForAccessibility: "rules", accessibilityRole: "message", "Bool(false)": 1, "Bool(false)": "log", lastDismissedAtMs: Date.now().toString(), numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_removeGuildDismissedContent = function UNSAFE_removeGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = guildId(dependencyMap[11]);
  obj = { importantForAccessibility: "<string:27999297>", accessibilityRole: "M8.99998 2L9.99998 2V1L8.99998 1V2Z", "Bool(false)": "<string:944898048>", "Bool(false)": "<string:1903368479>", lastDismissedAtMs: Date.now().toString(), numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_addTimeRecurringGuildDismissedContent = function UNSAFE_addTimeRecurringGuildDismissedContent(content, guildId, guildNextNumTimesDismissed) {
  let obj = guildId(dependencyMap[11]);
  obj = { importantForAccessibility: "<string:27999297>", accessibilityRole: "M8.99998 2L9.99998 2V1L8.99998 1V2Z", "Bool(false)": "<string:944898048>", "Bool(false)": "<string:1903368479>", lastDismissedAtMs: Date.now().toString(), numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_removeTimeRecurringGuildDismissedContent = function UNSAFE_removeTimeRecurringGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = guildId(dependencyMap[11]);
  obj = { importantForAccessibility: "<string:1196490754>", accessibilityRole: "<string:3310486038>", "Bool(false)": "<string:1917160705>", "Bool(false)": null, numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_addSnowflakeBoundGuildDismissedContent = function UNSAFE_addSnowflakeBoundGuildDismissedContent(content, lastDismissedObjectId, guildId, guildNextNumTimesDismissed) {
  let obj = lastDismissedObjectId(dependencyMap[11]);
  obj = { "Bool(true)": "<string:1196490754>", "Bool(false)": "<string:3310486038>", lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId, numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_removeSnowflakeBoundGuildDismissedContent = function UNSAFE_removeSnowflakeBoundGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = guildId(dependencyMap[11]);
  obj = { importantForAccessibility: "<string:1196490754>", accessibilityRole: "<string:3310486038>", "Bool(false)": "<string:1917160705>", "Bool(false)": null, numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const isVersionedDismissibleContentDismissed = function isVersionedDismissibleContentDismissed(id, latestVersion) {
  let versionedDismissibleContentCurrentVersion = latestVersion;
  let obj = latestVersion(dependencyMap[12]);
  if (obj.disableNewUserDismissibleContent(id)) {
    return { childSpanTimeout: true, _resetProfilerInfo: true };
  } else {
    const userContent = store.settings.userContent;
    let lastDismissedVersion;
    if (null != userContent) {
      if (null != userContent.recurringDismissibleContentStates[id]) {
        lastDismissedVersion = tmp5.lastDismissedVersion;
      }
    }
    if (null == versionedDismissibleContentCurrentVersion) {
      versionedDismissibleContentCurrentVersion = latestVersion(dependencyMap[9]).getVersionedDismissibleContentCurrentVersion(id);
      const obj2 = latestVersion(dependencyMap[9]);
    }
    obj = { isDismissed: null != lastDismissedVersion && lastDismissedVersion >= versionedDismissibleContentCurrentVersion, lastDismissedVersion };
    return obj;
  }
};
export const isTimeRecurringDismissibleContentDismissed = function isTimeRecurringDismissibleContentDismissed(id, cooldownConfig) {
  let obj = cooldownConfig(dependencyMap[12]);
  if (obj.disableNewUserDismissibleContent(id)) {
    return { "Null": true, "Null": true };
  } else {
    const userContent = store.settings.userContent;
    let lastDismissedAtMs;
    if (null != userContent) {
      if (null != userContent.recurringDismissibleContentStates[id]) {
        lastDismissedAtMs = tmp4.lastDismissedAtMs;
      }
    }
    let tmp5;
    if (null != lastDismissedAtMs) {
      if ("0" !== lastDismissedAtMs) {
        const _Number = Number;
        const _Number2 = Number;
        let NumberResult;
        if (!Number.isNaN(Number(lastDismissedAtMs))) {
          const _Number3 = Number;
          NumberResult = Number(lastDismissedAtMs);
        }
        tmp5 = NumberResult;
      }
    }
    if (undefined === tmp5) {
      obj = { isDismissed: false, lastDismissedAtMs: undefined };
      return obj;
    } else {
      let flag = true;
      if (null != cooldownConfig) {
        const _Date = Date;
        const sum = tmp5 + cooldownConfig.cooldownDurationMs;
        const timestamp = Date.now();
        let tmp11 = null == cooldownConfig.showAfterTimestamp;
        if (!tmp11) {
          tmp11 = timestamp >= cooldownConfig.showAfterTimestamp && tmp5 <= cooldownConfig.showAfterTimestamp;
          const tmp12 = timestamp >= cooldownConfig.showAfterTimestamp && tmp5 <= cooldownConfig.showAfterTimestamp;
        }
        flag = timestamp < sum || !tmp11;
        const tmp13 = timestamp < sum || !tmp11;
      }
      obj = { isDismissed: flag, lastDismissedAtMs: tmp5 };
      return obj;
    }
  }
};
export const isTimeRecurringSnowflakeBoundDismissibleContentDismissed = function isTimeRecurringSnowflakeBoundDismissibleContentDismissed(THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, newSnowflakeId, cooldownDurationMs) {
  if (obj.disableNewUserDismissibleContent(THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)) {
    return true;
  } else {
    const userContent = store.settings.userContent;
    let prop;
    if (null != userContent) {
      if (null != userContent.recurringDismissibleContentStates[THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) {
        prop = tmp4.lastDismissedObjectId;
      }
    }
    const userContent2 = store.settings.userContent;
    let lastDismissedAtMs;
    if (null != userContent2) {
      if (null != userContent2.recurringDismissibleContentStates[THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) {
        lastDismissedAtMs = tmp7.lastDismissedAtMs;
      }
    }
    if (null != lastDismissedAtMs) {
      if ("0" !== lastDismissedAtMs) {
        const _Number = Number;
        const _Number2 = Number;
        let NumberResult;
        if (!Number.isNaN(Number(lastDismissedAtMs))) {
          const _Number3 = Number;
          NumberResult = Number(lastDismissedAtMs);
        }
      }
    }
    let flag = false;
    if (null != cooldownDurationMs) {
      flag = false;
      if (null != tmp8) {
        const _Date = Date;
        const sum = tmp8 + cooldownDurationMs.cooldownDurationMs;
        const timestamp = Date.now();
        let tmp14 = null == cooldownDurationMs.showAfterTimestamp;
        if (!tmp14) {
          tmp14 = timestamp >= cooldownDurationMs.showAfterTimestamp && tmp8 <= cooldownDurationMs.showAfterTimestamp;
          const tmp15 = timestamp >= cooldownDurationMs.showAfterTimestamp && tmp8 <= cooldownDurationMs.showAfterTimestamp;
        }
        flag = timestamp < sum || !tmp14;
        const tmp16 = timestamp < sum || !tmp14;
      }
    }
    let tmp17 = null != prop;
    if (tmp17) {
      tmp17 = 1 !== importDefault(dependencyMap[10]).compare(newSnowflakeId, prop);
      const obj2 = importDefault(dependencyMap[10]);
    }
    if (flag) {
      flag = tmp17;
    }
    return flag;
  }
  const obj = newSnowflakeId(dependencyMap[12]);
};
export { UNSAFE_isSingleUseGuildDismissibleContentDismissed };
export const useIsSingleUseGuildDismissibleContentDismissed = function useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg1) {
  arg1 = dismissibleContent;
  const importDefault = arg1;
  const items = [closure_5];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = callback(arg0, arg1);
    }
    return tmp;
  });
};
export const UNSAFE_isTimeRecurringGuildDismissibleContentDismissed = function UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = store.getGuildDismissedContentState(guildId);
    let tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
    if (tmp5) {
      tmp5 = "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedAtMs;
    }
    return tmp5;
  }
  const obj = guildId(dependencyMap[12]);
};
export const UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed = function UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(GDM_INVITE_REMINDER, guildId) {
  if (obj.disableNewUserDismissibleContent(GDM_INVITE_REMINDER)) {
    return true;
  } else {
    const guildDismissedContentState = store.getGuildDismissedContentState(guildId);
    let tmp5 = null != guildDismissedContentState && null != guildDismissedContentState[GDM_INVITE_REMINDER] && null != guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
    if (tmp5) {
      tmp5 = "0" !== guildDismissedContentState[GDM_INVITE_REMINDER].lastDismissedObjectId;
    }
    return tmp5;
  }
  const obj = guildId(dependencyMap[12]);
};
export const requestMarkDismissibleContentAsShown = function requestMarkDismissibleContentAsShown(PASSWORDLESS_UPSELL, guildId, anyOverlayRenderingLocked, stateFromStores) {
  let tmp = anyOverlayRenderingLocked;
  guildId = PASSWORDLESS_UPSELL;
  const importDefault = guildId;
  if (!callback3(PASSWORDLESS_UPSELL)) {
    guildId = undefined;
    if (null != guildId) {
      guildId = guildId.guildId;
    }
    if (!closure_7.hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId)) {
      let hasItem = null == stateFromStores;
      if (hasItem) {
        hasItem = set.has(PASSWORDLESS_UPSELL);
      }
      if (tmp) {
        tmp = !hasItem;
      }
      if (!tmp) {
        let obj = importDefault(dependencyMap[15]);
        obj = { type: "DCF_EVENT_LOGGED", eventType: DCFEventTypes.DC_SHOW_REQUEST, dismissibleContent: PASSWORDLESS_UPSELL };
        obj.dispatch(obj);
        obj = { content: PASSWORDLESS_UPSELL };
        let groupName;
        if (null != guildId) {
          groupName = guildId.groupName;
        }
        obj.groupName = groupName;
        obj.onAdded = function onAdded(arg0, self) {
          let guildId;
          if (null != self) {
            guildId = self.guildId;
          }
          arg0(closure_2[16]).handleDCShownToUser(arg0, guildId);
          callback(arg0, self);
          let tmp6 = null == self;
          if (!tmp6) {
            tmp6 = null == self.onShown;
          }
          if (!tmp6) {
            self.onShown();
          }
        };
        closure_8(obj);
        const tmp12 = closure_8;
      }
    }
  }
};
export { markDismissibleContentAsDismissedPreProcessing };
export { markDismissibleContentAsDismissedPostProcessing };
export const markLatestVersionDismissibleContentAsDismissed = function markLatestVersionDismissibleContentAsDismissed() {
  return _markLatestVersionDismissibleContentAsDismissed(...arguments);
};
export { getGuildNextNumTimesDismissed };
export { getNextNumTimesDismissed };
export { markVersionedDismissibleContentAsDismissed };
export const markSnowflakeBoundDismissibleContentAsDismissed = function markSnowflakeBoundDismissibleContentAsDismissed(PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionId, arg2) {
  return _markSnowflakeBoundDismissibleContentAsDismissed(...arguments);
};
export const markTimeRecurringDismissibleContentAsDismissed = function markTimeRecurringDismissibleContentAsDismissed(closure_14, arg1) {
  return _markTimeRecurringDismissibleContentAsDismissed(...arguments);
};
export { trackDismissibleContentShown };
export { trackDismissibleContentDismissed };
