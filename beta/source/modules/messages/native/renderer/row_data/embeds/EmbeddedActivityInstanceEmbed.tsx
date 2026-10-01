// Module ID: 12798
// Function ID: 12799
// Name: EmbeddedActivityInstanceEmbed
// Dependencies: [2044, 5063, 502, 2045, 4876, 1372, 10851, 11421, 1115, 11422, 12789, 12799, 11423, 11424, 6584, 11614, 2]
// Exports: createActivityInstanceEmbed

// Module 12798 (EmbeddedActivityInstanceEmbed)
import intl10 from "intl" /* 1115 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6584 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10851 */;
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 11421 */;
import CodedLinksTypes from "CodedLinksTypes" /* 11422 */;
import getPlayInContext from "getPlayInContext" /* 11423 */;
import nativeAppMessageEmbedUtil from "nativeAppMessageEmbedUtil" /* 11424 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11614 */;
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris" /* 12789 */;
import EmbeddedApplicationInstanceUtils from "EmbeddedApplicationInstanceUtils" /* 12799 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  let activityInstance;
  let application;
  let canLaunchInChannel;
  let getActivityLaunchURL;
  let getAppGradientColors;
  let instanceId;
  let intl3;
  let intl9;
  let obj11;
  let obj7;
  ({ application, activityInstance } = message);
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != application) {
    let id1;
    if (activityInstance != null) {
      id1 = activityInstance.id;
    }
    if (null != id1) {
      if (null != channel) {
        let id;
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const obj2 = ContentClassificationVisibility;
        const contentClassificationVisibility = obj2.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          let combined;
          let str2;
          let stringResult2;
          const channel_id = message.channel_id;
          const id4 = activityInstance.id;
          const guild_id = channel.guild_id;
          let str = channel_id;
          if (channel.isThread()) {
            str = channel.parent_id;
          }
          const getEmbeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden;
          const obj5 = EmbeddedActivitiesStore;
          if (str == null) {
            str = "";
          }
          const embeddedActivitiesForChannelIncludingHidden = getEmbeddedActivitiesForChannelIncludingHidden(str);
          const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === application.id);
          const currentEmbeddedActivity = obj5.getCurrentEmbeddedActivity();
          const obj = { activity: found, applicationId: application.id, guildId: guild_id, channelId: channel_id };
          const tmp5Result = useEmbeddedActivityParticipantAvatarUris;
          const embeddedActivityParticipantAvatarUris = tmp5Result.getEmbeddedActivityParticipantAvatarUris(obj);
          id = application.id;
          let value;
          const obj8 = PresenceStore;
          if (found != null) {
            const userIds = found.userIds;
            const iter = userIds.values();
            value = iter.next().value;
          }
          let stringResult = null;
          if (null != value) {
            const findActivityResult = obj8.findActivity(value, (application_id) => application_id.application_id === id);
            let details;
            if (findActivityResult != null) {
              details = findActivityResult.details;
            }
            stringResult = details;
          }
          EmbeddedApplicationInstanceUtils;
          if (null != found) {
            if (stringResult == null) {
              const intl5 = tmp5(1115).intl;
              stringResult = intl5.string(tmp5(1115).t.oQn0h4);
            }
            const length = embeddedActivityParticipantAvatarUris.length;
            const intl6 = tmp5(1115).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + length + " " + intl6.string(tmp5(1115).t.BMTj28);
            str2 = stringResult;
          } else {
            let stringResult1;
            const disabled = tmp17.disabled;
            const intl4 = tmp5(1115).intl;
            const string = intl4.string;
            const t = tmp5(1115).t;
            if (disabled) {
              stringResult1 = string(t.JBnc7N);
            } else {
              stringResult1 = string(t.cX9uLZ);
            }
            str2 = stringResult;
            if (stringResult == null) {
              str2 = stringResult1;
            }
            combined = null;
          }
          const tmp5Result8 = getPlayInContext;
          const playInContext = tmp5Result8.getPlayInContext(application.id, channel_id);
          let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
          let appIconSrc = null;
          ({ instanceId, canLaunchInChannel } = playInContext);
          if (null != application.icon) {
            const tmp5Result9 = nativeAppMessageEmbedUtil;
            appIconSrc = tmp5Result9.getAppIconSrc(application.id, application.icon, application.bot);
          }
          if (null == instanceId) {
            const intl8 = tmp5(1115).intl;
            stringResult2 = intl8.string(tmp5(1115).t.RscU7I);
          } else {
            const intl7 = tmp5(1115).intl;
            stringResult2 = intl7.string(tmp5(1115).t.VJlc0S);
          }
          const obj4 = { id: "play_in_channel", label: stringResult2, disabled: isCurrentlyInInstance };
          if (!isCurrentlyInInstance) {
            isCurrentlyInInstance = false === canLaunchInChannel;
          }
          const items = [obj4];
          let tmp24 = null == ApplicationStore.getApplication(application.id);
          const obj13 = ApplicationStore;
          if (tmp24) {
            tmp24 = false === obj13.isFetchingApplication(application.id);
          }
          if (tmp24) {
            const tmp5Result10 = ApplicationActionCreators;
            const application1 = tmp5Result10.fetchApplication(application.id);
          }
          const obj6 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.DISPLAY, appId: application.id, messageId: message.id, title: intl9.string(intl10.t.pkq6Vq), header: str2, info: null, tagline: null, staticBannerSrc: null, iconSrc: appIconSrc, embedUrl: getActivityLaunchURL(obj7), bannerRatio: "bot", actions: items, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: getAppGradientColors(appIconSrc), backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          intl9 = tmp5(1115).intl;
          if (str2 == null) {
            str2 = "";
          }
          obj7 = { applicationId: application.id, referrerId: AuthenticationStore.getId() };
          getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
          getApplicationInstallURL;
          getAppGradientColors = nativeAppMessageEmbedUtil.getAppGradientColors;
          nativeAppMessageEmbedUtil;
          return { applicationId: application.id, instanceId: id4, appMessageEmbedModel: obj6, participantAvatarUris: embeddedActivityParticipantAvatarUris, participantsDescription: combined };
        } else {
          let stringResult3;
          id = application.id;
          const id2 = activityInstance.id;
          const id3 = message.id;
          if (contentClassificationVisibility === ContentClassificationVisibility.ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl2 = tmp5(1115).intl;
            stringResult3 = intl2.string(tmp5(1115).t.LPOzxB);
          } else {
            const intl = tmp5(1115).intl;
            stringResult3 = intl.string(tmp5(1115).t.NIZyKq);
          }
          const obj10 = { applicationId: id, instanceId: id2, participantAvatarUris: [], participantsDescription: null, appMessageEmbedModel: obj11 };
          obj11 = { displayType: CodedLinksTypes.AppMessageEmbedDisplayType.BLOCKED, appId: id, messageId: id3, title: null, header: intl3.string(intl10.t.bZBN64), info: stringResult3, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: [], embedUrl: null, extendedType: CodedLinkExtendedType.APP_MESSAGE_EMBED, gradientColors: [], backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          intl3 = tmp5(1115).intl;
          return obj10;
        }
      }
    }
  }
};
