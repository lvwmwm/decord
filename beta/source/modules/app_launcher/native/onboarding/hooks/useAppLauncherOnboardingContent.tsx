// Module ID: 11519
// Function ID: 11520
// Name: useAppLauncherOnboardingContent
// Dependencies: [32, 8592, 2045, 2042, 4654, 2029, 504, 11520, 11525, 6806, 2]
// Exports: default

// Module 11519 (useAppLauncherOnboardingContent)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import useCanShowAppLauncherOnboardingDefault from "useCanShowAppLauncherOnboarding" /* 11525 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 8592 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const constants = DismissibleContentConstants.DismissibleContentGroupName;
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  let items1;
  let obj2;
  function useHasUsedActivities(channel) {
    let applicationFrecencyWithoutLoadingLatest;
    channel = channel.channel;
    const obj = channelId(dependencyMap[4]);
    let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(dependencyMap[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    const obj2 = channelId(dependencyMap[4]);
    const result1 = obj2.useIsDismissibleContentDismissed_UNSAFE(channelId(dependencyMap[5]).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    const items = [ApplicationFrecencyStore];
    const obj3 = channelId(dependencyMap[6]);
    const stateFromStores = obj3.useStateFromStores(items, () => applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest());
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const obj4 = { guildId: guild_id, fetchesShelf: !result };
    const useActivityApplications = tmp(tmp2[7]).useActivityApplications;
    channelId(dependencyMap[7]);
    if (result) {
      result = result1;
    }
    const activityApplications = useActivityApplications(obj4);
    let flag = false;
    for (const item10042 of activityApplications) {
      if (null != stateFromStores.getEntry(item10042.id)) {
        flag = true;
        obj6.return();
        break;
      }
      let obj5 = { hasUsedActivities: flag };
      return obj5;
    }
  }
  channelId = channelId.channelId;
  let items = [];
  let obj = { channel: obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId)) };
  const tmp = channelId;
  const tmp2 = dependencyMap;
  obj2 = channelId(504);
  items1 = [ChannelStore];
  const hasUsedActivities = useHasUsedActivities(obj).hasUsedActivities;
  const tmp3 = useCanShowAppLauncherOnboardingDefault({ channelId });
  const canShowAppsOrActivitiesBanner = tmp3.canShowAppsOrActivitiesBanner;
  if (tmp3.canShowBotsBanner) {
    items.push(tmp(2029).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(2029).DismissibleContent;
    if (hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  const tmpResult = tmp(6806);
  const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  let obj3 = { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
  return obj3;
};
