// Module ID: 12225
// Function ID: 12226
// Name: useAppLauncherOnboardingContent
// Dependencies: [32, 9763, 4863, 4860, 5044, 4847, 504, 12226, 12231, 7569, 2]
// Exports: default

// Module 12225 (useAppLauncherOnboardingContent)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import useCanShowAppLauncherOnboardingDefault from "useCanShowAppLauncherOnboarding" /* 12231 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 9763 */;
import ChannelStore from "ChannelStore" /* 4863 */;
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
    items.push(tmp(4847).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(4847).DismissibleContent;
    if (hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  const tmpResult = tmp(7569);
  let obj3 = { groupName: constants.APP_LAUNCHER_ONBOARDING };
  const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items, obj3), 2);
  let obj4 = { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
  return obj4;
};
