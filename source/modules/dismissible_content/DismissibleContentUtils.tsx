// Module ID: 1336
// Function ID: 15666
// Name: addVersionedDismissedContent
// Dependencies: [57, 5, 1316, 1337, 1338, 1340, 1345, 653, 1335, 1346, 21, 1331, 3968, 566, 1334, 686, 13048, 675, 1339, 2]
// Exports: UNSAFE_addGuildDismissedContent, UNSAFE_addSnowflakeBoundGuildDismissedContent, UNSAFE_addTimeRecurringGuildDismissedContent, UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed, UNSAFE_isTimeRecurringGuildDismissibleContentDismissed, UNSAFE_removeGuildDismissedContent, UNSAFE_removeSnowflakeBoundGuildDismissedContent, UNSAFE_removeTimeRecurringGuildDismissedContent, getDismissedRecurringDismissibleContentState, isTimeRecurringDismissibleContentDismissed, isTimeRecurringSnowflakeBoundDismissibleContentDismissed, isVersionedDismissibleContentDismissed, markLatestVersionDismissibleContentAsDismissed, markSnowflakeBoundDismissibleContentAsDismissed, markTimeRecurringDismissibleContentAsDismissed, requestMarkDismissibleContentAsShown, useIsSingleUseGuildDismissibleContentDismissed

// Module 1336 (addVersionedDismissedContent)
import _slicedToArray from "_slicedToArray";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { DCFEventTypes } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import { AnalyticEvents } from "ME";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
function addVersionedDismissedContent(GUILD_POWERUP_NOTIFICATION, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { lastDismissedVersion: versionedDismissibleContentCurrentVersion, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addTimeRecurringDismissedContent(GUILD_POWERUP_NOTIFICATION, nextNumTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: nextNumTimesDismissed };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
function addSnowflakeBoundDismissedContent(GUILD_POWERUP_NOTIFICATION, lastDismissedObjectId, nextNumTimesDismissed1) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId, numTimesDismissed: nextNumTimesDismissed1 };
  return obj.updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, obj);
}
class UNSAFE_isSingleUseGuildDismissibleContentDismissed {
  constructor(arg0, arg1) {
    obj = require("isUserAccountOldEnough");
    if (obj.disableNewUserDismissibleContent(global)) {
      flag2 = true;
      return true;
    } else {
      tmp = c5;
      tmp2 = arg1;
      guildDismissedContentState = c5.getGuildDismissedContentState(arg1);
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
function markDismissibleContentAsDismissedPreProcessing(closure_0, forceTrack) {
  if (tmp) {
    trackDismissibleContentDismissed(closure_0, forceTrack);
  }
  tmp = callback3(closure_0) || forceTrack.forceTrack;
  const guildId = forceTrack.guildId;
  let tmp4;
  if (null != guildId) {
    tmp4 = guildId;
  }
  require(13048) /* handleDCShownToUser */.handleDCDismissed(closure_0, tmp4);
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
async function _markLatestVersionDismissibleContentAsDismissed(arg0, arg1, arg2) {
  yield outer2_24(arg0, outer2_0(outer2_2[9]).getVersionedDismissibleContentCurrentVersion(arg0), arg1);
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
function getNextNumTimesDismissed(closure_0, numTimesDismissed) {
  if (null != numTimesDismissed.numTimesDismissed) {
    return numTimesDismissed.numTimesDismissed;
  } else {
    const userContent = store.settings.userContent;
    let tmp2;
    if (null != userContent) {
      tmp2 = userContent.recurringDismissibleContentStates[closure_0];
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
function markVersionedDismissibleContentAsDismissed(ACTIVITIES_VOICE_LAUNCHER_BADGE, closure_0, arg2) {
  return _markVersionedDismissibleContentAsDismissed(...arguments);
}
async function _markVersionedDismissibleContentAsDismissed(arg0, arg1, arg2, arg3) {
  outer2_19(arg0, arg2);
  yield outer2_15(arg0, arg1, outer2_23(arg0, arg2));
  outer2_20(arg0, arg2);
}
async function _markSnowflakeBoundDismissibleContentAsDismissed(arg0, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(arg2);
  obj["snowflakeId"] = arg1;
  outer2_19(arg0, obj);
  yield outer2_17(arg0, arg1, outer2_23(arg0, arg2));
  outer2_20(arg0, arg2);
}
async function _markTimeRecurringDismissibleContentAsDismissed(arg0, arg1, arg2) {
  outer2_19(arg0, arg1);
  yield outer2_16(arg0, outer2_23(arg0, arg1));
  outer2_20(arg0, arg1);
}
function trackDismissibleContentShown(WISHLIST_MOBILE_NUX_ACTION_SHEET) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(callback4(), 2);
  let obj = importDefault(675);
  obj = { type: require(1334) /* DismissibleContent */.DismissibleContent[WISHLIST_MOBILE_NUX_ACTION_SHEET], content_count: tmp2, fatigable_content_count: tmp3 };
  let groupName;
  if (null != arg1) {
    groupName = arg1.groupName;
  }
  obj.group_name = groupName;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1339) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
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
function trackDismissibleContentDismissed(closure_0, guildId) {
  const renderedAtTimestamp = closure_7.getRenderedAtTimestamp(closure_0);
  let diff = null;
  if (null != renderedAtTimestamp) {
    diff = date.getTime() - renderedAtTimestamp;
  }
  guildId = undefined;
  if (null != guildId) {
    guildId = guildId.guildId;
  }
  if (null != guildId) {
    let tmp4Result = getGuildNextNumTimesDismissed(closure_0, guildId.guildId);
  } else {
    let obj = guildId;
    if (null == guildId) {
      obj = {};
    }
    tmp4Result = getNextNumTimesDismissed(closure_0, obj);
    const tmp4 = getNextNumTimesDismissed;
  }
  date = new Date();
  obj = { type: require(1334) /* DismissibleContent */.DismissibleContent[closure_0] };
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
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1339) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(closure_0);
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
  importDefault(675).track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
}
({ addCandidateContent: closure_8, removeCandidateContent: closure_9, isContentShown: closure_10, getCurrentlyShownCounts: closure_11 } = _isNativeReflectConstruct);
let items = [require("DismissibleContent").DismissibleContent.ACCOUNT_LINK_INVITE_FRIENDS, require("DismissibleContent").DismissibleContent.ACCOUNT_LINK_PROMPT, require("DismissibleContent").DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/dismissible_content/DismissibleContentUtils.tsx");

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
    num = require(1346) /* getVersionedDismissibleContentCurrentVersion */.getVersionedDismissibleContentCurrentVersion(value);
    const obj3 = require(1346) /* getVersionedDismissibleContentCurrentVersion */;
  }
  obj.lastDismissedVersion = num;
  obj2 = require(1335) /* isTimeRecurringDismissibleContent */;
  const date = new Date();
  obj.lastDismissedAtMs = new Date().getTime().toString();
  const str = new Date().getTime();
  let str2 = "0";
  if (obj5.isSnowflakeBoundDismissibleContent(value)) {
    const _Date = Date;
    str2 = importDefault(21).fromTimestamp(Date.now() + 2592000000);
    const obj6 = importDefault(21);
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
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { dismissed: true, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_removeGuildDismissedContent = function UNSAFE_removeGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_addTimeRecurringGuildDismissedContent = function UNSAFE_addTimeRecurringGuildDismissedContent(content, guildId, guildNextNumTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId: "0", numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_removeTimeRecurringGuildDismissedContent = function UNSAFE_removeTimeRecurringGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_addSnowflakeBoundGuildDismissedContent = function UNSAFE_addSnowflakeBoundGuildDismissedContent(content, lastDismissedObjectId, guildId, guildNextNumTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: Date.now().toString(), lastDismissedObjectId, numTimesDismissed: guildNextNumTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const UNSAFE_removeSnowflakeBoundGuildDismissedContent = function UNSAFE_removeSnowflakeBoundGuildDismissedContent(content, guildId, numTimesDismissed) {
  let obj = require(1331) /* _createForOfIteratorHelperLoose */;
  obj = { dismissed: false, lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed };
  return obj.updateGuildDismissedContent(content, guildId, obj);
};
export const isVersionedDismissibleContentDismissed = function isVersionedDismissibleContentDismissed(id, latestVersion) {
  let versionedDismissibleContentCurrentVersion = latestVersion;
  let obj = require(3968) /* isUserAccountOldEnough */;
  if (obj.disableNewUserDismissibleContent(id)) {
    return { isDismissed: true, lastDismissedVersion: null };
  } else {
    const userContent = store.settings.userContent;
    let lastDismissedVersion;
    if (null != userContent) {
      if (null != userContent.recurringDismissibleContentStates[id]) {
        lastDismissedVersion = tmp5.lastDismissedVersion;
      }
    }
    if (null == versionedDismissibleContentCurrentVersion) {
      versionedDismissibleContentCurrentVersion = require(1346) /* getVersionedDismissibleContentCurrentVersion */.getVersionedDismissibleContentCurrentVersion(id);
      const obj2 = require(1346) /* getVersionedDismissibleContentCurrentVersion */;
    }
    obj = { isDismissed: null != lastDismissedVersion && lastDismissedVersion >= versionedDismissibleContentCurrentVersion, lastDismissedVersion };
    return obj;
  }
};
export const isTimeRecurringDismissibleContentDismissed = function isTimeRecurringDismissibleContentDismissed(id, cooldownConfig) {
  let obj = require(3968) /* isUserAccountOldEnough */;
  if (obj.disableNewUserDismissibleContent(id)) {
    return { isDismissed: true, lastDismissedAtMs: null };
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
      tmp17 = 1 !== importDefault(21).compare(newSnowflakeId, prop);
      const obj2 = importDefault(21);
    }
    if (flag) {
      flag = tmp17;
    }
    return flag;
  }
  obj = require(3968) /* isUserAccountOldEnough */;
};
export { UNSAFE_isSingleUseGuildDismissibleContentDismissed };
export const useIsSingleUseGuildDismissibleContentDismissed = function useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg1) {
  const _require = dismissibleContent;
  let closure_1 = arg1;
  const items = [closure_5];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = outer1_18(closure_0, closure_1);
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
  obj = require(3968) /* isUserAccountOldEnough */;
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
  obj = require(3968) /* isUserAccountOldEnough */;
};
export const requestMarkDismissibleContentAsShown = function requestMarkDismissibleContentAsShown(PASSWORDLESS_UPSELL, guildId, anyOverlayRenderingLocked, stateFromStores) {
  let tmp = anyOverlayRenderingLocked;
  let closure_0 = PASSWORDLESS_UPSELL;
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
        let obj = importDefault(686);
        obj = { type: "DCF_EVENT_LOGGED", eventType: DCFEventTypes.DC_SHOW_REQUEST, dismissibleContent: PASSWORDLESS_UPSELL };
        obj.dispatch(obj);
        obj = { content: PASSWORDLESS_UPSELL };
        let groupName;
        if (null != guildId) {
          groupName = guildId.groupName;
        }
        obj.groupName = groupName;
        obj.onAdded = function onAdded() {
          let guildId;
          if (null != guildId) {
            guildId = guildId.guildId;
          }
          PASSWORDLESS_UPSELL(outer1_2[16]).handleDCShownToUser(PASSWORDLESS_UPSELL, guildId);
          outer1_28(PASSWORDLESS_UPSELL, guildId);
          let tmp6 = null == guildId;
          if (!tmp6) {
            tmp6 = null == guildId.onShown;
          }
          if (!tmp6) {
            guildId.onShown();
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
export const markTimeRecurringDismissibleContentAsDismissed = function markTimeRecurringDismissibleContentAsDismissed(c2, arg1) {
  return _markTimeRecurringDismissibleContentAsDismissed(...arguments);
};
export { trackDismissibleContentShown };
export { trackDismissibleContentDismissed };
