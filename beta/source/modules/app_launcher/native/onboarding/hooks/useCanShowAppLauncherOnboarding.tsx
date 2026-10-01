// Module ID: 11525
// Function ID: 11526
// Name: useCanShowAppLauncherOnboarding
// Dependencies: [32, 2045, 4754, 1372, 11526, 11527, 5305, 1091, 504, 11, 2029, 6806, 4654, 2]
// Exports: default

// Module 11525 (useCanShowAppLauncherOnboarding)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1091 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import UserStore from "UserStore" /* 1372 */;
import AppLauncherOnboardingPersistedStore from "AppLauncherOnboardingPersistedStore" /* 11526 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 11527 */;
import size from "module_2" /* 2 */;

const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = 5 * DurationsDefault.Millis.SECOND;
let c10 = result;
let closure_11 = 5 * DurationsDefault.Millis.SECOND;
let closure_12 = 14 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const DAY = DurationsDefault.Millis.DAY;
let result1 = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default function useCanShowAppLauncherOnboarding(channelId) {
  let applicationId;
  let currentUser;
  let memberCount;
  let recentApplicationCommandMetadata;
  let recentMessageMetadata;
  channelId = channelId.channelId;
  const timestamp = Date.now();
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [UserStore];
  const tmp2Result = channelId(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let createdAt;
  if (stateFromStores1 != null) {
    createdAt = stateFromStores1.createdAt;
  }
  let tmp8 = null != createdAt;
  if (tmp8) {
    const _Date = Date;
    const timestamp1 = Date.now();
    const obj3 = SnowflakeUtilsDefault;
    tmp8 = timestamp1 < obj3.extractTimestamp(stateFromStores1.id) + closure_12;
  }
  const items2 = [GuildMemberCountStore];
  const tmp2Result9 = channelId(504);
  const stateFromStores2 = tmp2Result9.useStateFromStores(items2, () => memberCount.getMemberCount(guild_id));
  const items3 = [AppLauncherOnboardingPersistedStore];
  const tmp13 = null != stateFromStores2 && stateFromStores2 < 200;
  const tmp2Result10 = channelId(504);
  const stateFromStores3 = tmp2Result10.useStateFromStores(items3, () => AppLauncherOnboardingPersistedStore.getLastSeenTimeMs());
  let tmp16 = null != stateFromStores3;
  const tmp14 = AppLauncherOnboardingPersistedStore;
  if (tmp16) {
    tmp16 = timestamp < stateFromStores3 + HOUR;
  }
  const items4 = [];
  if (!tmp16) {
    items4.push(channelId(2029).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  const tmp2Result11 = channelId(6806);
  const first = _slicedToArray(tmp2Result11.useSelectedDismissibleContent(items4), 1)[0];
  const APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING = tmp2(2029).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
  const items5 = [AppLauncherOnboardingStore];
  const tmp2Result12 = channelId(504);
  const stateFromStoresObject = tmp2Result12.useStateFromStoresObject(items5, () => {
    const obj = { recentMessageMetadata: AppLauncherOnboardingStore.getRecentMessageMetadata(), recentApplicationCommandMetadata: AppLauncherOnboardingStore.getRecentApplicationCommandMetadata() };
    return obj;
  });
  ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
  const items6 = [tmp14];
  const tmp2Result13 = channelId(504);
  const stateFromStores4 = tmp2Result13.useStateFromStores(items6, () => AppLauncherOnboardingPersistedStore.getTriggeredOnboardingContentMetadata());
  let tmp22 = null != recentMessageMetadata && timestamp < recentMessageMetadata.timeMs + closure_10;
  if (tmp22) {
    let channelId1;
    if (recentMessageMetadata != null) {
      channelId1 = recentMessageMetadata.channelId;
    }
    tmp22 = channelId1 === channelId;
  }
  let tmp25 = null != recentApplicationCommandMetadata && timestamp < recentApplicationCommandMetadata.timeMs + closure_11;
  if (tmp25) {
    let channelId2;
    if (recentApplicationCommandMetadata != null) {
      channelId2 = recentApplicationCommandMetadata.channelId;
    }
    tmp25 = channelId2 === channelId;
  }
  if (recentApplicationCommandMetadata != null) {
    applicationId = recentApplicationCommandMetadata.applicationId;
  }
  const BUILT_IN = BuiltInSectionId.BUILT_IN;
  const tmp2Result14 = channelId(4654);
  result = tmp2Result14.useIsDismissibleContentDismissed_UNSAFE(tmp2(2029).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const tmp2Result15 = channelId(4654);
  let result1 = tmp2Result15.useIsDismissibleContentDismissed_UNSAFE(tmp2(2029).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  let tmp31 = null != stateFromStores4;
  const tmp2Result16 = channelId(4654);
  const result2 = tmp2Result16.useIsDismissibleContentDismissed_UNSAFE(tmp2(2029).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
  if (tmp31) {
    tmp31 = stateFromStores4.channelId === channelId;
  }
  if (tmp31) {
    tmp31 = stateFromStores4.timeMs + DAY > timestamp;
  }
  const obj2 = { canShowOnboarding: false, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: false, fromTriggeredOnboarding: false };
  if (null != stateFromStores) {
    let tmp33 = !tmp25;
    if (tmp25) {
      tmp33 = applicationId === BUILT_IN;
    }
    if (!tmp33) {
      tmp33 = result;
    }
    if (!tmp33) {
      tmp33 = tmp16;
    }
    if (!tmp33) {
      obj2.canShowOnboarding = true;
      obj2.canShowBotsBanner = true;
    }
    if (!tmp8) {
      tmp8 = !tmp22;
    }
    if (!tmp8) {
      tmp8 = !tmp13;
    }
    if (!tmp8) {
      tmp8 = tmp16;
    }
    if (!tmp8) {
      if (result1) {
        result1 = result2;
      }
      tmp8 = result1;
    }
    if (!tmp8) {
      obj2.canShowOnboarding = true;
      obj2.canShowAppsOrActivitiesBanner = true;
    }
    if (first === APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING) {
      obj2.willShowGlobalSearchOnboarding = true;
      obj2.canShowOnboarding = true;
    }
    const tmp34 = !obj2.canShowOnboarding && tmp31;
    if (tmp34) {
      obj2.canShowOnboarding = true;
      ({ canShowBotsBanner: obj12.canShowBotsBanner, canShowAppsOrActivitiesBanner: obj12.canShowAppsOrActivitiesBanner, willShowGlobalSearchOnboarding: obj12.willShowGlobalSearchOnboarding } = stateFromStores4);
      obj2.fromTriggeredOnboarding = true;
    }
  }
  return obj2;
};
export const RECENT_MESSAGE_MS = result;
