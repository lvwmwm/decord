// Module ID: 12327
// Function ID: 96058
// Name: createActivityInstanceEmbed
// Dependencies: [1347, 4167, 1194, 1348, 4217, 1849, 9515, 11112, 1212, 11113, 12318, 12328, 11114, 11115, 5463, 11281, 2]
// Exports: createActivityInstanceEmbed

// Module 12327 (createActivityInstanceEmbed)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  let activityInstance;
  let application;
  ({ application, activityInstance } = message);
  channel = channel.getChannel(message.channel_id);
  if (null != application) {
    let id;
    if (null != activityInstance) {
      id = activityInstance.id;
    }
    if (null != id) {
      if (null != channel) {
        currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (null != currentUser) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        let obj = require(11112) /* getContentClassificationVisibility */;
        const contentClassificationVisibility = obj.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (require(11112) /* getContentClassificationVisibility */.ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          return (function createDisplayActivityInstanceEmbed(channel_id, application, id, channel) {
            let canLaunchInChannel;
            let instanceId;
            let closure_0 = application;
            channel_id = channel_id.channel_id;
            let parent_id = channel_id;
            if (channel.isThread()) {
              parent_id = channel.parent_id;
            }
            let str = "";
            let str2 = "";
            if (null != parent_id) {
              str2 = parent_id;
            }
            const embeddedActivitiesForChannelIncludingHidden = outer1_2.getEmbeddedActivitiesForChannelIncludingHidden(str2);
            const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === application.id);
            const currentEmbeddedActivity = outer1_2.getCurrentEmbeddedActivity();
            let obj = outer1_0(outer1_1[10]);
            obj = { activity: found, applicationId: application.id, guildId: channel.guild_id, channelId: channel_id };
            const embeddedActivityParticipantAvatarUris = obj.getEmbeddedActivityParticipantAvatarUris(obj);
            const tmp4 = (function getStatusText(outer1_6, found, id) {
              let closure_0 = id;
              let value;
              if (null != found) {
                const userIds = found.userIds;
                value = userIds.values().next().value;
                const iter = userIds.values();
              }
              if (null == value) {
                return null;
              } else {
                const findActivityResult = outer1_6.findActivity(value, (application_id) => application_id.application_id === closure_0);
                let details;
                if (null != findActivityResult) {
                  details = findActivityResult.details;
                }
                return details;
              }
            })(outer1_6, found, application.id);
            outer1_0(outer1_1[11]);
            if (null != found) {
              let stringResult = tmp4;
              if (null == tmp4) {
                const intl2 = outer1_0(outer1_1[8]).intl;
                stringResult = intl2.string(outer1_0(outer1_1[8]).t.oQn0h4);
              }
              const intl3 = outer1_0(outer1_1[8]).intl;
              const _HermesInternal = HermesInternal;
              let combined = str + embeddedActivityParticipantAvatarUris.length + " " + intl3.string(outer1_0(outer1_1[8]).t.BMTj28);
              let stringResult1 = stringResult;
            } else {
              const intl = outer1_0(outer1_1[8]).intl;
              const string = intl.string;
              const t = outer1_0(outer1_1[8]).t;
              if (tmp6.disabled) {
                stringResult1 = string(t.JBnc7N);
              } else {
                stringResult1 = string(t.cX9uLZ);
              }
              if (null != tmp4) {
                stringResult1 = tmp4;
              }
              combined = null;
            }
            let obj2 = outer1_0(outer1_1[12]);
            const playInContext = obj2.getPlayInContext(application.id, channel_id);
            let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
            let appIconSrc = null;
            ({ instanceId, canLaunchInChannel } = playInContext);
            if (null != application.icon) {
              let obj3 = outer1_0(outer1_1[13]);
              appIconSrc = obj3.getAppIconSrc(application.id, application.icon, application.bot);
            }
            obj = { id: "play_in_channel" };
            if (null == instanceId) {
              const intl5 = outer1_0(outer1_1[8]).intl;
              let stringResult2 = intl5.string(outer1_0(outer1_1[8]).t.RscU7I);
            } else {
              const intl4 = outer1_0(outer1_1[8]).intl;
              stringResult2 = intl4.string(outer1_0(outer1_1[8]).t.VJlc0S);
            }
            obj.label = stringResult2;
            if (!isCurrentlyInInstance) {
              isCurrentlyInInstance = false === canLaunchInChannel;
            }
            obj.disabled = isCurrentlyInInstance;
            const items = [obj];
            let tmp26 = null == outer1_3.getApplication(application.id);
            if (tmp26) {
              tmp26 = false === outer1_3.isFetchingApplication(application.id);
            }
            if (tmp26) {
              application = outer1_0(outer1_1[14]).fetchApplication(application.id);
              const obj6 = outer1_0(outer1_1[14]);
            }
            const obj1 = { displayType: outer1_0(outer1_1[9]).AppMessageEmbedDisplayType.DISPLAY, appId: application.id, messageId: channel_id.id };
            const intl6 = outer1_0(outer1_1[8]).intl;
            obj1.title = intl6.string(outer1_0(outer1_1[8]).t.pkq6Vq);
            if (null != stringResult1) {
              str = stringResult1;
            }
            obj1.header = str;
            obj1.info = null;
            obj1.tagline = null;
            obj1.staticBannerSrc = null;
            obj1.iconSrc = appIconSrc;
            obj2 = { applicationId: application.id, referrerId: outer1_4.getId() };
            obj1.embedUrl = outer1_0(outer1_1[15]).getActivityLaunchURL(obj2);
            obj1.bannerRatio = "bot";
            obj1.actions = items;
            obj1.extendedType = outer1_8.APP_MESSAGE_EMBED;
            const obj8 = outer1_0(outer1_1[15]);
            let tmp31;
            if (null != appIconSrc) {
              tmp31 = appIconSrc;
            }
            obj1.gradientColors = outer1_0(outer1_1[13]).getAppGradientColors(tmp31);
            obj1.backgroundColor = 0;
            obj1.borderColor = 0;
            obj1.headerColor = 0;
            obj1.headerText = null;
            obj1.type = null;
            obj3 = { applicationId: application.id, instanceId: id, appMessageEmbedModel: obj1, participantAvatarUris: embeddedActivityParticipantAvatarUris, participantsDescription: combined };
            return obj3;
          })(message, application, activityInstance.id, channel);
        } else {
          id = application.id;
          if (contentClassificationVisibility === require(11112) /* getContentClassificationVisibility */.ContentClassificationVisibility.BLOCK_UNDERAGE) {
            let intl2 = require(1212) /* getSystemLocale */.intl;
            let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.LPOzxB);
          } else {
            let intl = require(1212) /* getSystemLocale */.intl;
            stringResult = intl.string(require(1212) /* getSystemLocale */.t.NIZyKq);
          }
          obj = { applicationId: id, instanceId: activityInstance.id, participantAvatarUris: [], participantsDescription: null };
          obj = { displayType: require(11113) /* AppMessageEmbedDisplayType */.AppMessageEmbedDisplayType.BLOCKED, appId: id, messageId: message.id, title: null };
          let intl3 = require(1212) /* getSystemLocale */.intl;
          obj.header = intl3.string(require(1212) /* getSystemLocale */.t.bZBN64);
          obj.info = stringResult;
          obj.tagline = null;
          obj.iconSrc = null;
          obj.staticBannerSrc = null;
          obj.bannerRatio = "bot";
          obj.actions = [];
          obj.embedUrl = null;
          obj.extendedType = CodedLinkExtendedType.APP_MESSAGE_EMBED;
          obj.gradientColors = [];
          obj.backgroundColor = 0;
          obj.borderColor = 0;
          obj.headerColor = 0;
          obj.headerText = null;
          obj.type = null;
          obj.appMessageEmbedModel = obj;
          return obj;
        }
      }
    }
  }
};
