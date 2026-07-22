// Module ID: 11153
// Function ID: 86741
// Name: result
// Dependencies: []
// Exports: default

// Module 11153 (result)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const BuiltInSectionId = arg1(dependencyMap[6]).BuiltInSectionId;
const result = 5 * importDefault(dependencyMap[7]).Millis.SECOND;
let closure_11 = 5 * importDefault(dependencyMap[7]).Millis.SECOND;
let closure_12 = 14 * importDefault(dependencyMap[7]).Millis.DAY;
const HOUR = importDefault(dependencyMap[7]).Millis.HOUR;
const DAY = importDefault(dependencyMap[7]).Millis.DAY;
const result1 = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default function useCanShowAppLauncherOnboarding(channelId) {
  let recentApplicationCommandMetadata;
  let recentMessageMetadata;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const timestamp = Date.now();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp4 = function useIsNewUser() {
    const items = [closure_6];
    const stateFromStores = channelId(closure_2[8]).useStateFromStores(items, () => currentUser.getCurrentUser());
    let createdAt;
    if (null != stateFromStores) {
      createdAt = stateFromStores.createdAt;
    }
    let tmp3 = null != createdAt;
    if (tmp3) {
      const _Date = Date;
      const timestamp = Date.now();
      tmp3 = timestamp < callback(closure_2[9]).extractTimestamp(stateFromStores.id) + closure_12;
      const obj2 = callback(closure_2[9]);
    }
    return tmp3;
  }();
  obj = { guildId: guild_id };
  const isInCooldown = function useIsInCooldown(currentTimeMs) {
    const items = [closure_7];
    const stateFromStores = channelId(closure_2[8]).useStateFromStores(items, () => lastSeenTimeMs.getLastSeenTimeMs());
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = currentTimeMs.currentTimeMs < stateFromStores + closure_13;
    }
    return tmp2;
  }({ currentTimeMs: timestamp });
  const items1 = [];
  if (!{ isInCooldown }.isInCooldown) {
    items1.push(arg1(dependencyMap[10]).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  let obj2 = arg1(dependencyMap[11]);
  obj = { willShowGlobalSearchOnboarding: callback(obj2.useSelectedDismissibleContent(items1), 1)[0] === arg1(dependencyMap[10]).DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING };
  const tmp5 = function useIsInSmallContext(guildId) {
    const channelId = guildId.guildId;
    const items = [closure_5];
    const stateFromStores = channelId(closure_2[8]).useStateFromStores(items, () => memberCount.getMemberCount(guildId));
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores < 200;
    }
    return tmp2;
  }(obj);
  const items2 = [closure_8];
  const stateFromStoresObject = arg1(dependencyMap[8]).useStateFromStoresObject(items2, () => ({ recentMessageMetadata: store.getRecentMessageMetadata(), recentApplicationCommandMetadata: store.getRecentApplicationCommandMetadata() }));
  ({ recentApplicationCommandMetadata, recentMessageMetadata } = stateFromStoresObject);
  const obj5 = arg1(dependencyMap[8]);
  const items3 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items3, () => triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata());
  const obj1 = { currentTimeMs: timestamp, recentMessageMetadata, channelId };
  const recentMessageMetadata2 = obj1.recentMessageMetadata;
  let tmp13 = null != recentMessageMetadata2;
  if (tmp13) {
    tmp13 = tmp12 < recentMessageMetadata2.timeMs + result;
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
  const obj6 = arg1(dependencyMap[8]);
  const tmp21 = applicationId === BuiltInSectionId.BUILT_IN;
  const result = arg1(dependencyMap[12]).useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[10]).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const obj9 = arg1(dependencyMap[12]);
  let result1 = arg1(dependencyMap[12]).useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[10]).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  const obj10 = arg1(dependencyMap[12]);
  const obj3 = { alignItems: null, justifyContent: "rgba(0, 0, 0, 0.251)", placeholderCount: "RFC3986", limit: null, includeFrecency: "RFC1738" };
  let tmp25 = null != stateFromStores1;
  const result2 = arg1(dependencyMap[12]).useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[10]).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
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
    const tmp28 = !obj3.canShowOnboarding && tmp25;
  }
  return obj3;
};
export const RECENT_MESSAGE_MS = result;
