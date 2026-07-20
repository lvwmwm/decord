// Module ID: 12165
// Function ID: 93570
// Name: createEmbeddedActivityInviteEmbed
// Dependencies: []
// Exports: createEmbeddedActivityInviteEmbed

// Module 12165 (createEmbeddedActivityInviteEmbed)
let closure_3 = importDefault(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const FetchState = arg1(dependencyMap[3]).FetchState;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const CodedLinkExtendedType = arg1(dependencyMap[10]).CodedLinkExtendedType;
const InviteTargetTypes = arg1(dependencyMap[11]).InviteTargetTypes;
let closure_16 = ["PREMIUM_STANDARD"];
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx");

export const createEmbeddedActivityInviteEmbed = function createEmbeddedActivityInviteEmbed(inviteCode) {
  let arg1;
  const invite = invite.getInvite(inviteCode.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        if (null == application.getApplication(target_application.id)) {
          let obj = importDefault(dependencyMap[12]);
          obj = { type: "APPLICATION_UPDATE", application: target_application };
          obj.dispatch(obj);
        }
        let id = target_application.id;
        arg1 = id;
        if (applicationAssetFetchState.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          let obj2 = arg1(dependencyMap[13]);
          const assetIds = obj2.fetchAssetIds(id, closure_16);
        }
        const tmp13 = importDefault(dependencyMap[14])(inviteCode.theme);
        const baseColors = tmp13.baseColors;
        const guild = invite.guild;
        let name;
        if (null != guild) {
          name = guild.name;
        }
        let channel = invite.channel;
        id = undefined;
        if (null != channel) {
          id = channel.id;
        }
        const guild2 = invite.guild;
        if (null != guild2) {
          const id2 = guild2.id;
        }
        channel = null;
        if (null != id) {
          channel = channel.getChannel(id);
        }
        let simpleChannelIcon = null;
        if (null != channel) {
          let obj3 = arg1(dependencyMap[15]);
          simpleChannelIcon = obj3.getSimpleChannelIcon(channel);
        }
        if (null != simpleChannelIcon) {
          const assetSource = Image.resolveAssetSource(simpleChannelIcon);
          let uri;
          if (null != assetSource) {
            uri = assetSource.uri;
          }
          const tmp21 = uri;
        }
        let name1;
        if (null != target_application) {
          name1 = target_application.name;
        }
        let tmp26 = null;
        if (null != name1) {
          tmp26 = name1;
        }
        const string = arg1(dependencyMap[16]).intl.string;
        if (null != channel) {
          if (null != name) {
            const intl2 = arg1(dependencyMap[16]).intl;
            obj = { channelName: arg1(dependencyMap[17]).computeChannelName(channel, closure_13, closure_12), guildName: name };
            let formatToPartsResult = intl2.formatToParts(arg1(dependencyMap[16]).t.omZR7L, obj);
            const obj7 = arg1(dependencyMap[17]);
          }
          let tmp37 = null != id;
          if (tmp37) {
            const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id);
            const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === id);
            let hasItem;
            if (null != found) {
              const userIds = found.userIds;
              if (null != userIds) {
                hasItem = userIds.has(id.getId());
              }
            }
            tmp37 = hasItem;
          }
          if (null != id) {
            if (null != id2) {
              const obj1 = { channelId: id, guildId: id2, applicationId: id };
              let embeddedActivityParticipantAvatarUris = arg1(dependencyMap[18]).getEmbeddedActivityParticipantAvatarUris(obj1);
              const obj8 = arg1(dependencyMap[18]);
            }
            const string2 = arg1(dependencyMap[16]).intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = arg1(dependencyMap[16]).intl;
              let stringResult = intl4.string(arg1(dependencyMap[16]).t.I0v0Qv);
            } else {
              stringResult = tmp46;
              if (tmp37) {
                const intl3 = arg1(dependencyMap[16]).intl;
                stringResult = intl3.string(arg1(dependencyMap[16]).t.KC26NR);
              }
            }
            let assetIds1 = arg1(dependencyMap[13]).getAssetIds(id, closure_16);
            if (null == assetIds1) {
              assetIds1 = [];
            }
            const first = callback(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              assetImage = arg1(dependencyMap[13]).getAssetImage(id, first, 1024);
              const obj11 = arg1(dependencyMap[13]);
            }
            obj2 = {};
            const merged = Object.assign(baseColors);
            obj2["channelIcon"] = tmp21;
            obj2["headerText"] = tmp26;
            obj2["acceptLabelBackgroundColor"] = tmp13.colors.acceptLabelGreenBackgroundColor;
            obj2["titleText"] = tmp29;
            obj2["structurableSubtitleText"] = formatToPartsResult;
            obj2["type"] = null;
            obj2["extendedType"] = CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE;
            obj2["participantAvatarUris"] = embeddedActivityParticipantAvatarUris;
            obj2["acceptLabelText"] = stringResult;
            obj2["splashUrl"] = assetImage;
            const intl5 = arg1(dependencyMap[16]).intl;
            obj2["noParticipantsText"] = intl5.string(arg1(dependencyMap[16]).t.PZLnuD);
            obj2["ctaEnabled"] = !tmp37;
            return obj2;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = arg1(dependencyMap[16]).intl;
          obj3 = { guildName: name };
          formatToPartsResult = intl.formatToParts(arg1(dependencyMap[16]).t.u0vaDE, obj3);
        }
      }
    }
    return null;
  }
};
