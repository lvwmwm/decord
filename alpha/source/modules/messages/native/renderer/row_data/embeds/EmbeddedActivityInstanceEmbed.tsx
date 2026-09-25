// Module ID: 12782
// Function ID: 12783
// Name: EmbeddedActivityInstanceEmbed
// Dependencies: [2043, 5056, 502, 2044, 4869, 1372, 10838, 11407, 1115, 11408, 12773, 12783, 11409, 11410, 6579, 11600, 2]
// Exports: createActivityInstanceEmbed

// Module 12782 (EmbeddedActivityInstanceEmbed)
import ContentClassificationVisibility from "ContentClassificationVisibility" /* 11407 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import PresenceStore from "PresenceStore" /* 4869 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const CodedLinkExtendedType = fn(10838).CodedLinkExtendedType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  ({ application, activityInstance } = message);
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != application) {
    let id1;
    if (activityInstance != null) {
      id1 = activityInstance.id;
    }
    if (null != id1) {
      if (null != channel) {
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        const contentClassificationVisibility = ContentClassificationVisibility.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (ContentClassificationVisibility.ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          let id = application;
          const channel_id = message.channel_id;
          let str = channel_id;
          if (channel.isThread()) {
            str = channel.parent_id;
          }
          if (str == null) {
            str = "";
          }
          const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(str);
          const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === id.id);
          const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
          const obj = { activity: found, applicationId: application.id, guildId: channel.guild_id, channelId: channel_id };
          const embeddedActivityParticipantAvatarUris = tmp5(12773).getEmbeddedActivityParticipantAvatarUris(obj);
          id = application.id;
          value = undefined;
          if (found != null) {
            const userIds = found.userIds;
            value = userIds.values().next().value;
            const iter = userIds.values();
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
          tmp5(12783);
          const obj3 = { embeddedActivity: found, currentEmbeddedActivity, channel };
          if (null != found) {
            if (stringResult == null) {
              const intl5 = tmp5(1115).intl;
              stringResult = intl5.string(tmp5(1115).t.oQn0h4);
            }
            const intl6 = tmp5(1115).intl;
            const _HermesInternal = HermesInternal;
            let combined = "" + embeddedActivityParticipantAvatarUris.length + " " + intl6.string(tmp5(1115).t.BMTj28);
            let str2 = stringResult;
          } else {
            const intl4 = tmp5(1115).intl;
            const string = intl4.string;
            const t = tmp5(1115).t;
            if (tmp17.disabled) {
              let stringResult1 = string(t.JBnc7N);
            } else {
              stringResult1 = string(t.cX9uLZ);
            }
            str2 = stringResult;
            if (stringResult == null) {
              str2 = stringResult1;
            }
            combined = null;
          }
          obj8 = PresenceStore;
          const tmp5Result = tmp5(12773);
          const playInContext = tmp5(11409).getPlayInContext(application.id, channel_id);
          let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
          let appIconSrc = null;
          ({ instanceId, canLaunchInChannel } = playInContext);
          if (null != application.icon) {
            appIconSrc = tmp5(11410).getAppIconSrc(application.id, application.icon, application.bot);
            const tmp5Result9 = tmp5(11410);
          }
          if (null == instanceId) {
            const intl8 = tmp5(1115).intl;
            let stringResult2 = intl8.string(tmp5(1115).t.RscU7I);
          } else {
            const intl7 = tmp5(1115).intl;
            stringResult2 = intl7.string(tmp5(1115).t.VJlc0S);
          }
          const obj4 = { id: "play_in_channel", label: stringResult2, disabled: null };
          if (!isCurrentlyInInstance) {
            isCurrentlyInInstance = false === canLaunchInChannel;
          }
          obj4.disabled = isCurrentlyInInstance;
          const items = [obj4];
          let tmp24 = null == ApplicationStore.getApplication(application.id);
          if (tmp24) {
            tmp24 = false === obj13.isFetchingApplication(application.id);
          }
          if (tmp24) {
            const application1 = tmp5(6579).fetchApplication(application.id);
            const tmp5Result10 = tmp5(6579);
          }
          const obj6 = { displayType: tmp5(11408).AppMessageEmbedDisplayType.DISPLAY, appId: application.id, messageId: message.id, title: null, header: null, info: null, tagline: null, staticBannerSrc: null, iconSrc: null, embedUrl: null, bannerRatio: "bot", actions: null, extendedType: null, gradientColors: null, backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          const intl9 = tmp5(1115).intl;
          obj6.title = intl9.string(tmp5(1115).t.pkq6Vq);
          if (str2 == null) {
            str2 = "";
          }
          obj6.header = str2;
          obj6.iconSrc = appIconSrc;
          obj13 = ApplicationStore;
          const tmp5Result8 = tmp5(11409);
          const obj7 = { applicationId: application.id, referrerId: AuthenticationStore.getId() };
          obj6.embedUrl = tmp5(11600).getActivityLaunchURL(obj7);
          obj6.actions = items;
          obj6.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          const tmp5Result11 = tmp5(11600);
          obj6.gradientColors = tmp5(11410).getAppGradientColors(appIconSrc);
          const obj9 = { applicationId: application.id, instanceId: activityInstance.id, appMessageEmbedModel: obj6, participantAvatarUris: embeddedActivityParticipantAvatarUris, participantsDescription: combined };
          return obj9;
        } else {
          id = application.id;
          if (contentClassificationVisibility === tmp5(11407).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl2 = tmp5(1115).intl;
            let stringResult3 = intl2.string(tmp5(1115).t.LPOzxB);
          } else {
            const intl = tmp5(1115).intl;
            stringResult3 = intl.string(tmp5(1115).t.NIZyKq);
          }
          const obj10 = { applicationId: id, instanceId: activityInstance.id, participantAvatarUris: [], participantsDescription: null, appMessageEmbedModel: null };
          const obj11 = { displayType: tmp5(11408).AppMessageEmbedDisplayType.BLOCKED, appId: id, messageId: message.id, title: null, header: null, info: null, tagline: null, iconSrc: null, staticBannerSrc: null, bannerRatio: "bot", actions: null, embedUrl: null, extendedType: null, gradientColors: null, backgroundColor: 0, borderColor: 0, headerColor: 0, headerText: null, type: null };
          const intl3 = tmp5(1115).intl;
          obj11.header = intl3.string(tmp5(1115).t.bZBN64);
          obj11.info = stringResult3;
          obj11.actions = [];
          obj11.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          obj11.gradientColors = [];
          obj10.appMessageEmbedModel = obj11;
          return obj10;
        }
      }
    }
  }
};
