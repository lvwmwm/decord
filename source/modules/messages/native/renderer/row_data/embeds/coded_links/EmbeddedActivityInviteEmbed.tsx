// Module ID: 12290
// Function ID: 95782
// Name: createEmbeddedActivityInviteEmbed
// Dependencies: [57, 27, 1347, 7821, 4167, 1194, 1348, 4115, 3767, 1849, 9479, 6979, 686, 7820, 7633, 4593, 1212, 4320, 12291, 2]
// Exports: createEmbeddedActivityInviteEmbed

// Module 12290 (createEmbeddedActivityInviteEmbed)
import _slicedToArray from "_slicedToArray";
import { Image } from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { CodedLinkExtendedType } from "CodedLinkExtendedType";
import { InviteTargetTypes } from "InviteSendStates";

const require = arg1;
let closure_16 = ["embedded_cover"];
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx");

export const createEmbeddedActivityInviteEmbed = function createEmbeddedActivityInviteEmbed(inviteCode) {
  let id;
  invite = invite.getInvite(inviteCode.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        if (null == application.getApplication(target_application.id)) {
          let obj = importDefault(686);
          obj = { type: "APPLICATION_UPDATE", application: target_application };
          obj.dispatch(obj);
        }
        id = target_application.id;
        if (applicationAssetFetchState.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          let obj2 = id(7820);
          const assetIds = obj2.fetchAssetIds(id, closure_16);
        }
        const tmp13 = importDefault(7633)(inviteCode.theme);
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
          let obj3 = id(4593);
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
        const string = id(1212).intl.string;
        if (null != channel) {
          if (null != name) {
            const intl2 = id(1212).intl;
            obj = { channelName: id(4320).computeChannelName(channel, closure_13, closure_12), guildName: name };
            let formatToPartsResult = intl2.formatToParts(id(1212).t.omZR7L, obj);
            const obj7 = id(4320);
          }
          let tmp37 = null != id;
          if (tmp37) {
            embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id);
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
              let embeddedActivityParticipantAvatarUris = id(12291).getEmbeddedActivityParticipantAvatarUris(obj1);
              const obj8 = id(12291);
            }
            const string2 = id(1212).intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = id(1212).intl;
              let stringResult = intl4.string(id(1212).t.I0v0Qv);
            } else {
              stringResult = tmp46;
              if (tmp37) {
                const intl3 = id(1212).intl;
                stringResult = intl3.string(id(1212).t.KC26NR);
              }
            }
            let assetIds1 = id(7820).getAssetIds(id, closure_16);
            if (null == assetIds1) {
              assetIds1 = [];
            }
            const first = callback(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              assetImage = id(7820).getAssetImage(id, first, 1024);
              const obj11 = id(7820);
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
            const intl5 = id(1212).intl;
            obj2["noParticipantsText"] = intl5.string(id(1212).t.PZLnuD);
            obj2["ctaEnabled"] = !tmp37;
            return obj2;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = id(1212).intl;
          obj3 = { guildName: name };
          formatToPartsResult = intl.formatToParts(id(1212).t.u0vaDE, obj3);
        }
      }
    }
    return null;
  }
};
