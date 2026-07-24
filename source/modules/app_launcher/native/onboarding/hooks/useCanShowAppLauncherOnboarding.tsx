// Module ID: 11193
// Function ID: 87060
// Name: result
// Dependencies: [57, 1348, 4051, 1849, 11194, 11195, 4566, 664, 566, 21, 1334, 5802, 3946, 2]
// Exports: default

// Module 11193 (result)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";

const require = arg1;
let result = 5 * require("set").Millis.SECOND;
let closure_11 = 5 * require("set").Millis.SECOND;
let closure_12 = 14 * require("set").Millis.DAY;
const HOUR = require("set").Millis.HOUR;
const DAY = require("set").Millis.DAY;
let result1 = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default function useCanShowAppLauncherOnboarding(channelId) {
  let recentApplicationCommandMetadata;
  let recentMessageMetadata;
  channelId = channelId.channelId;
  let timestamp = Date.now();
  let obj = channelId(566);
  let items = [_isNativeReflectConstruct];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(channelId));
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp4 = (function useIsNewUser() {
    const items = [outer1_6];
    const stateFromStores = channelId(outer1_2[8]).useStateFromStores(items, () => outer2_6.getCurrentUser());
    let createdAt;
    if (null != stateFromStores) {
      createdAt = stateFromStores.createdAt;
    }
    let tmp3 = null != createdAt;
    if (tmp3) {
      const _Date = Date;
      const timestamp = Date.now();
      tmp3 = timestamp < outer1_1(outer1_2[9]).extractTimestamp(stateFromStores.id) + outer1_12;
      const obj2 = outer1_1(outer1_2[9]);
    }
    return tmp3;
  })();
  obj = { guildId: guild_id };
  const isInCooldown = (function useIsInCooldown(currentTimeMs) {
    const items = [outer1_7];
    const stateFromStores = channelId(outer1_2[8]).useStateFromStores(items, () => outer2_7.getLastSeenTimeMs());
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = currentTimeMs.currentTimeMs < stateFromStores + outer1_13;
    }
    return tmp2;
  })({ currentTimeMs: timestamp });
  const items1 = [];
  if (!{ isInCooldown }.isInCooldown) {
    items1.push(channelId(1334).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  let obj2 = channelId(5802);
  obj = { willShowGlobalSearchOnboarding: callback(obj2.useSelectedDismissibleContent(items1), 1)[0] === channelId(1334).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING };
  const tmp5 = (function useIsInSmallContext(guildId) {
    guildId = guildId.guildId;
    const items = [outer1_5];
    const stateFromStores = channelId(outer1_2[8]).useStateFromStores(items, () => outer2_5.getMemberCount(guildId));
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores < 200;
    }
    return tmp2;
  })(obj);
  const items2 = [closure_8];
  const stateFromStoresObject = channelId(566).useStateFromStoresObject(items2, () => ({ recentMessageMetadata: outer1_8.getRecentMessageMetadata(), recentApplicationCommandMetadata: outer1_8.getRecentApplicationCommandMetadata() }));
  ({ recentApplicationCommandMetadata, recentMessageMetadata } = stateFromStoresObject);
  const obj5 = channelId(566);
  const items3 = [closure_7];
  const stateFromStores1 = channelId(566).useStateFromStores(items3, () => outer1_7.getTriggeredOnboardingContentMetadata());
  const obj1 = { currentTimeMs: timestamp, recentMessageMetadata, channelId };
  const recentMessageMetadata2 = obj1.recentMessageMetadata;
  let tmp13 = null != recentMessageMetadata2;
  if (tmp13) {
    tmp13 = tmp12 < recentMessageMetadata2.timeMs + closure_10;
  }
  if (tmp13) {
    channelId = undefined;
    if (null != recentMessageMetadata2) {
      channelId = recentMessageMetadata2.channelId;
    }
    tmp13 = channelId === obj1.channelId;
  }
  obj2 = { currentTimeMs: timestamp, recentApplicationCommandMetadata, channelId };
  const recentApplicationCommandMetadata2 = obj2.recentApplicationCommandMetadata;
  let tmp17 = null != recentApplicationCommandMetadata2;
  if (tmp17) {
    tmp17 = tmp16 < recentApplicationCommandMetadata2.timeMs + closure_11;
  }
  if (tmp17) {
    let channelId1;
    if (null != recentApplicationCommandMetadata2) {
      channelId1 = recentApplicationCommandMetadata2.channelId;
    }
    tmp17 = channelId1 === obj2.channelId;
  }
  let applicationId;
  if (null != recentApplicationCommandMetadata) {
    applicationId = recentApplicationCommandMetadata.applicationId;
  }
  const obj6 = channelId(566);
  const tmp21 = applicationId === BuiltInSectionId.BUILT_IN;
  const result = channelId(3946).useIsDismissibleContentDismissed_UNSAFE(channelId(1334).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const obj9 = channelId(3946);
  let result1 = channelId(3946).useIsDismissibleContentDismissed_UNSAFE(channelId(1334).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  const obj10 = channelId(3946);
  const obj3 = { canShowOnboarding: false, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: false, fromTriggeredOnboarding: false };
  let tmp25 = null != stateFromStores1;
  const result2 = channelId(3946).useIsDismissibleContentDismissed_UNSAFE(channelId(1334).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
  if (tmp25) {
    tmp25 = stateFromStores1.channelId === channelId;
  }
  if (tmp25) {
    tmp25 = stateFromStores1.timeMs + DAY > timestamp;
  }
  if (null != stateFromStores) {
    let tmp27 = !tmp17;
    if (tmp17) {
      tmp27 = tmp21;
    }
    if (!tmp27) {
      tmp27 = result;
    }
    if (!tmp27) {
      tmp27 = isInCooldown;
    }
    if (!tmp27) {
      obj3.canShowOnboarding = true;
      obj3.canShowBotsBanner = true;
    }
    if (!tmp4) {
      tmp4 = !tmp13;
    }
    if (!tmp4) {
      tmp4 = !tmp5;
    }
    if (!tmp4) {
      tmp4 = isInCooldown;
    }
    if (!tmp4) {
      if (result1) {
        result1 = result2;
      }
      tmp4 = result1;
    }
    if (!tmp4) {
      obj3.canShowOnboarding = true;
      obj3.canShowAppsOrActivitiesBanner = true;
    }
    if (obj.willShowGlobalSearchOnboarding) {
      obj3.willShowGlobalSearchOnboarding = true;
      obj3.canShowOnboarding = true;
    }
    if (tmp28) {
      obj3.canShowOnboarding = true;
      ({ canShowBotsBanner: obj12.canShowBotsBanner, canShowAppsOrActivitiesBanner: obj12.canShowAppsOrActivitiesBanner, willShowGlobalSearchOnboarding: obj12.willShowGlobalSearchOnboarding } = stateFromStores1);
      obj3.fromTriggeredOnboarding = true;
    }
    tmp28 = !obj3.canShowOnboarding && tmp25;
  }
  return obj3;
};
export const RECENT_MESSAGE_MS = result;
