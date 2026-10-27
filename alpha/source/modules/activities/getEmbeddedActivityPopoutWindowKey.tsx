// Module ID: 15773
// Function ID: 15774
// Name: getEmbeddedActivityPopoutWindowKey
// Dependencies: [2042, 7831, 4823, 5610, 1084, 2028, 5627, 4893, 558, 576, 504, 2]
// Exports: default, getEmbeddedActivityPopoutWindowKeyForApplication, getEmbeddedActivityPopoutWindowKeyForChannel

// Module 15773 (getEmbeddedActivityPopoutWindowKey)
import Constants from "Constants" /* 1084 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4893 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5610 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import PopoutWindowStore from "PopoutWindowStore" /* 7831 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4823 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const PopoutWindowKeys = Constants.PopoutWindowKeys;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePopoutWindowForActivity(channelId) {
  let first;
  let tmp8;
  const obj = channelId(576);
  const cResult = obj.c(3);
  const tmp = channelId;
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PopoutWindowStore, EmbeddedActivitiesStore, ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      let connectedActivityChannelId = channelId;
      if (channelId == null) {
        connectedActivityChannelId = EmbeddedActivitiesStore.getConnectedActivityChannelId();
      }
      const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(connectedActivityChannelId);
      let applicationId;
      const getApplication = ApplicationStore.getApplication;
      if (selfEmbeddedActivityForChannel != null) {
        applicationId = selfEmbeddedActivityForChannel.applicationId;
      }
      const application = getApplication(applicationId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8);
}) : (function usePopoutWindowForActivity(channelId) {
  channelId = channelId.channelId;
  const items = [PopoutWindowStore, EmbeddedActivitiesStore, ApplicationStore];
  const obj = channelId(504);
  return obj.useStateFromStores(items, () => {
    let connectedActivityChannelId = channelId;
    if (channelId == null) {
      connectedActivityChannelId = EmbeddedActivitiesStore.getConnectedActivityChannelId();
    }
    const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(connectedActivityChannelId);
    let applicationId;
    const getApplication = ApplicationStore.getApplication;
    if (selfEmbeddedActivityForChannel != null) {
      applicationId = selfEmbeddedActivityForChannel.applicationId;
    }
    const application = getApplication(applicationId);
  });
});
function getEmbeddedActivityPopoutWindowKey(arg0) {
  let application;
  let channelId;
  ({ application, channelId } = arg0);
}
function getEmbeddedActivityPopoutWindowKeyForChannel(channelId) {
  ({ EmbeddedActivitiesStore, ApplicationStore } = channelId);
  const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId.channelId);
  let applicationId;
  const getApplication = ApplicationStore.getApplication;
  if (selfEmbeddedActivityForChannel != null) {
    applicationId = selfEmbeddedActivityForChannel.applicationId;
  }
  const application = getApplication(applicationId);
}
const result = size.fileFinishedImporting("modules/activities/getEmbeddedActivityPopoutWindowKey.tsx");

export default getEmbeddedActivityPopoutWindowKey;
export { getEmbeddedActivityPopoutWindowKeyForChannel };
export const getEmbeddedActivityPopoutWindowKeyForApplication = function getEmbeddedActivityPopoutWindowKeyForApplication(applicationId) {
  applicationId = applicationId.applicationId;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    if (currentEmbeddedActivity.applicationId === applicationId) {
      if (null != ApplicationStore.getApplication(applicationId)) {
        const obj = embeddedActivityLocationUtils;
        const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
      }
    }
  }
};
export const usePopoutWindowForActivity = tmp2;
