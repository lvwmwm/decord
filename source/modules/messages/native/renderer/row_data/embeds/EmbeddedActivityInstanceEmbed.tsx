// Module ID: 12182
// Function ID: 93629
// Name: createActivityInstanceEmbed
// Dependencies: []
// Exports: createActivityInstanceEmbed

// Module 12182 (createActivityInstanceEmbed)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const CodedLinkExtendedType = arg1(dependencyMap[6]).CodedLinkExtendedType;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx");

export const createActivityInstanceEmbed = function createActivityInstanceEmbed(message) {
  let activityInstance;
  let application;
  ({ application, activityInstance } = message);
  const channel = channel.getChannel(message.channel_id);
  if (null != application) {
    let id;
    if (null != activityInstance) {
      id = activityInstance.id;
    }
    if (null != id) {
      if (null != channel) {
        const currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (null != currentUser) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        let obj = arg1(dependencyMap[7]);
        const contentClassificationVisibility = obj.getContentClassificationVisibility(application.content_classification, channel, nsfwAllowed);
        if (arg1(dependencyMap[7]).ContentClassificationVisibility.DISPLAY === contentClassificationVisibility) {
          return function createDisplayActivityInstanceEmbed(channel_id, application, id, channel) {
            let canLaunchInChannel;
            let instanceId;
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
            const embeddedActivitiesForChannelIncludingHidden = store.getEmbeddedActivitiesForChannelIncludingHidden(str2);
            const found = embeddedActivitiesForChannelIncludingHidden.find((applicationId) => applicationId.applicationId === arg1.id);
            const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
            let obj = application(closure_1[10]);
            obj = { activity: found, applicationId: application.id, guildId: channel.guild_id, channelId: channel_id };
            const embeddedActivityParticipantAvatarUris = obj.getEmbeddedActivityParticipantAvatarUris(obj);
            const tmp4 = function getStatusText(closure_6, found, id) {
              found = id;
              let value;
              if (null != found) {
                const userIds = found.userIds;
                value = userIds.values().next().value;
                const iter = userIds.values();
              }
              if (null == value) {
                return null;
              } else {
                const findActivityResult = closure_6.findActivity(value, (application_id) => application_id.application_id === arg2);
                let details;
                if (null != findActivityResult) {
                  details = findActivityResult.details;
                }
                return details;
              }
            }(closure_6, found, application.id);
            application(closure_1[11]);
            if (null != found) {
              let stringResult = tmp4;
              if (null == tmp4) {
                const intl2 = application(closure_1[8]).intl;
                stringResult = intl2.string(application(closure_1[8]).t.oQn0h4);
              }
              const intl3 = application(closure_1[8]).intl;
              const _HermesInternal = HermesInternal;
              let combined = str + embeddedActivityParticipantAvatarUris.length + " " + intl3.string(application(closure_1[8]).t.BMTj28);
              let stringResult1 = stringResult;
            } else {
              const intl = application(closure_1[8]).intl;
              const string = intl.string;
              const t = application(closure_1[8]).t;
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
            let obj2 = application(closure_1[12]);
            const playInContext = obj2.getPlayInContext(application.id, channel_id);
            let isCurrentlyInInstance = playInContext.isCurrentlyInInstance;
            let appIconSrc = null;
            ({ instanceId, canLaunchInChannel } = playInContext);
            if (null != application.icon) {
              let obj3 = application(closure_1[13]);
              appIconSrc = obj3.getAppIconSrc(application.id, application.icon, application.bot);
            }
            obj = { id: "play_in_channel" };
            if (null == instanceId) {
              const intl5 = application(closure_1[8]).intl;
              let stringResult2 = intl5.string(application(closure_1[8]).t.RscU7I);
            } else {
              const intl4 = application(closure_1[8]).intl;
              stringResult2 = intl4.string(application(closure_1[8]).t.VJlc0S);
            }
            obj.label = stringResult2;
            if (!isCurrentlyInInstance) {
              isCurrentlyInInstance = false === canLaunchInChannel;
            }
            obj.disabled = isCurrentlyInInstance;
            const items = [obj];
            let tmp26 = null == closure_3.getApplication(application.id);
            if (tmp26) {
              tmp26 = false === closure_3.isFetchingApplication(application.id);
            }
            if (tmp26) {
              application = application(closure_1[14]).fetchApplication(application.id);
              const obj6 = application(closure_1[14]);
            }
            const obj1 = { displayType: application(closure_1[9]).AppMessageEmbedDisplayType.DISPLAY, appId: application.id, messageId: channel_id.id };
            const intl6 = application(closure_1[8]).intl;
            obj1.title = intl6.string(application(closure_1[8]).t.pkq6Vq);
            if (null != stringResult1) {
              str = stringResult1;
            }
            obj1.header = str;
            obj1.info = null;
            obj1.tagline = null;
            obj1.staticBannerSrc = null;
            obj1.iconSrc = appIconSrc;
            obj2 = { applicationId: application.id, referrerId: id.getId() };
            obj1.embedUrl = application(closure_1[15]).getActivityLaunchURL(obj2);
            obj1.bannerRatio = "bot";
            obj1.actions = items;
            obj1.extendedType = constants.APP_MESSAGE_EMBED;
            const obj8 = application(closure_1[15]);
            let tmp31;
            if (null != appIconSrc) {
              tmp31 = appIconSrc;
            }
            obj1.gradientColors = application(closure_1[13]).getAppGradientColors(tmp31);
            obj1.backgroundColor = 0;
            obj1.borderColor = 0;
            obj1.headerColor = 0;
            obj1.headerText = null;
            obj1.type = null;
            obj3 = { applicationId: application.id, instanceId: id, appMessageEmbedModel: obj1, participantAvatarUris: embeddedActivityParticipantAvatarUris, participantsDescription: combined };
            return obj3;
          }(message, application, activityInstance.id, channel);
        } else {
          id = application.id;
          if (contentClassificationVisibility === arg1(dependencyMap[7]).ContentClassificationVisibility.BLOCK_UNDERAGE) {
            const intl2 = arg1(dependencyMap[8]).intl;
            let stringResult = intl2.string(arg1(dependencyMap[8]).t.LPOzxB);
          } else {
            const intl = arg1(dependencyMap[8]).intl;
            stringResult = intl.string(arg1(dependencyMap[8]).t.NIZyKq);
          }
          obj = { applicationId: id, instanceId: activityInstance.id, participantAvatarUris: [], participantsDescription: null };
          obj = { displayType: arg1(dependencyMap[9]).AppMessageEmbedDisplayType.BLOCKED, appId: id, messageId: message.id, title: null };
          const intl3 = arg1(dependencyMap[8]).intl;
          obj.header = intl3.string(arg1(dependencyMap[8]).t.bZBN64);
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
