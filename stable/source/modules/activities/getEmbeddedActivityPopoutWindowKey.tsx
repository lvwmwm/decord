// Module ID: 16666
// Function ID: 16667
// Name: getEmbeddedActivityPopoutWindowKey
// Dependencies: [2162, 8012, 5018, 5813, 1072, 2148, 5831, 5091, 504, 2]
// Exports: default, getEmbeddedActivityPopoutWindowKeyForApplication, getEmbeddedActivityPopoutWindowKeyForChannel, usePopoutWindowForActivity

// Module 16666 (getEmbeddedActivityPopoutWindowKey)
import Constants from "Constants" /* 1072 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5091 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import PopoutWindowStore from "PopoutWindowStore" /* 8012 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const PopoutWindowKeys = Constants.PopoutWindowKeys;
const result = size.fileFinishedImporting("modules/activities/getEmbeddedActivityPopoutWindowKey.tsx");

export default function getEmbeddedActivityPopoutWindowKey(arg0) {
  let application;
  let channelId;
  ({ application, channelId } = arg0);
};
export function getEmbeddedActivityPopoutWindowKeyForChannel(channelId) {
  ({ EmbeddedActivitiesStore, ApplicationStore } = channelId);
  const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId.channelId);
  let applicationId;
  const getApplication = ApplicationStore.getApplication;
  if (selfEmbeddedActivityForChannel != null) {
    applicationId = selfEmbeddedActivityForChannel.applicationId;
  }
  const application = getApplication(applicationId);
}
export function getEmbeddedActivityPopoutWindowKeyForApplication(applicationId) {
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
}
export function usePopoutWindowForActivity(channelId) {
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
}
