// Module ID: 15079
// Function ID: 15080
// Name: EmbeddedActivityInviteEmbed
// Dependencies: [32, 17, 4857, 8714, 2040, 502, 4858, 5744, 4951, 1384, 10097, 7873, 572, 8713, 8386, 8595, 1114, 5647, 15080, 2]
// Exports: createEmbeddedActivityInviteEmbed

// Module 15079 (EmbeddedActivityInviteEmbed)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl6 from "intl" /* 1114 */;
import useChannelName from "useChannelName" /* 5647 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7873 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8386 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8713 */;
import ApplicationAssetsStore2 from "ApplicationAssetsStore" /* 8714 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10097 */;
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris" /* 15080 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import InviteStore from "InviteStore" /* 5744 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const ApplicationAssetsStore = ApplicationAssetsStore2;

const Image = react_native.Image;
const FetchState = ApplicationAssetsStore2.FetchState;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let closure_15 = ["embedded_cover"];
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx");

export function createEmbeddedActivityInviteEmbed(theme) {
  let intl5;
  let tmp39Result7;
  let id;
  theme = theme.theme;
  const invite = InviteStore.getInvite(theme.inviteCode);
  if (null == invite) {
    return null;
  } else {
    const target_application = invite.target_application;
    if (invite.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != target_application) {
        let id2;
        let tmp15;
        let formatToPartsResult;
        if (null == ApplicationStore.getApplication(target_application.id)) {
          const obj2 = { type: "APPLICATION_UPDATE", application: target_application };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
        id = target_application.id;
        if (ApplicationAssetsStore.getApplicationAssetFetchState(id) === FetchState.NOT_FETCHED) {
          const tmp39Result = ApplicationAssetUtils;
          const assetIds = tmp39Result.fetchAssetIds(id, closure_15);
        }
        const tmp9 = getEmbedThemeColorsDefault(theme);
        const baseColors = tmp9.baseColors;
        const guild = invite.guild;
        let name;
        const acceptLabelGreenBackgroundColor = tmp9.colors.acceptLabelGreenBackgroundColor;
        if (guild != null) {
          name = guild.name;
        }
        const channel = invite.channel;
        let id1;
        if (channel != null) {
          id1 = channel.id;
        }
        const guild2 = invite.guild;
        if (guild2 != null) {
          id2 = guild2.id;
        }
        let channel1 = null;
        if (null != id1) {
          channel1 = ChannelStore.getChannel(id1);
        }
        let simpleChannelIcon = null;
        if (null != channel1) {
          const tmp39Result6 = utils_ChannelUtils;
          simpleChannelIcon = tmp39Result6.getSimpleChannelIcon(channel1);
        }
        if (null != simpleChannelIcon) {
          const assetSource = Image.resolveAssetSource(simpleChannelIcon);
          let uri;
          if (assetSource != null) {
            uri = assetSource.uri;
          }
          tmp15 = uri;
        }
        let name1;
        if (target_application != null) {
          name1 = target_application.name;
        }
        if (name1 == null) {
          name1 = null;
        }
        const string = tmp39(1114).intl.string;
        if (null != channel1) {
          if (null != name) {
            const intl2 = tmp39(1114).intl;
            const formatToParts = intl2.formatToParts;
            const obj3 = { channelName: tmp39Result7.computeChannelName(channel1, UserStore, RelationshipStore), guildName: name };
            const omZR7L = tmp39(1114).t.omZR7L;
            tmp39Result7 = useChannelName;
            formatToPartsResult = formatToParts(omZR7L, obj3);
          }
          let tmp24 = null != id1;
          if (tmp24) {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id1);
            const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === id);
            let hasItem;
            if (found != null) {
              const userIds = found.userIds;
              if (userIds != null) {
                hasItem = userIds.has(AuthenticationStore.getId());
              }
            }
            tmp24 = hasItem;
          }
          if (null != id1) {
            let embeddedActivityParticipantAvatarUris;
            let stringResult;
            if (null != id2) {
              const obj4 = { channelId: id1, guildId: id2, applicationId: id };
              const tmp39Result8 = useEmbeddedActivityParticipantAvatarUris;
              embeddedActivityParticipantAvatarUris = tmp39Result8.getEmbeddedActivityParticipantAvatarUris(obj4);
            }
            const string2 = tmp39(1114).intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = tmp39(1114).intl;
              stringResult = intl4.string(tmp39(1114).t.I0v0Qv);
            } else {
              stringResult = tmp29;
              if (tmp24) {
                const intl3 = tmp39(1114).intl;
                stringResult = intl3.string(tmp39(1114).t.KC26NR);
              }
            }
            const tmp39Result9 = ApplicationAssetUtils;
            let assetIds1 = tmp39Result9.getAssetIds(id, closure_15);
            if (assetIds1 == null) {
              assetIds1 = [];
            }
            const first = _slicedToArray(assetIds1, 1)[0];
            let assetImage;
            if (null != first) {
              const tmp39Result10 = ApplicationAssetUtils;
              assetImage = tmp39Result10.getAssetImage(id, first, 1024);
            }
            const obj5 = { channelIcon: tmp15, headerText: name1, acceptLabelBackgroundColor: acceptLabelGreenBackgroundColor, titleText: tmp20, structurableSubtitleText: formatToPartsResult, type: null, extendedType: CodedLinkExtendedType.EMBEDDED_ACTIVITY_INVITE, participantAvatarUris: embeddedActivityParticipantAvatarUris, acceptLabelText: stringResult, splashUrl: assetImage, noParticipantsText: intl5.string(intl6.t.PZLnuD), ctaEnabled: !tmp24 };
            const merged = Object.assign(baseColors);
            intl5 = tmp39(1114).intl;
            return obj5;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = tmp39(1114).intl;
          const obj6 = { guildName: name };
          formatToPartsResult = intl.formatToParts(tmp39(1114).t.u0vaDE, obj6);
        }
      }
    }
    return null;
  }
}
