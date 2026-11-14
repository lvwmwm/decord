// Module ID: 15568
// Function ID: 15569
// Name: EmbeddedActivityInviteEmbed
// Dependencies: [32, 17, 5154, 7314, 2165, 502, 5155, 6052, 5248, 1388, 11891, 7665, 572, 7313, 9170, 8033, 1113, 5954, 15569, 2]
// Exports: createEmbeddedActivityInviteEmbed

// Module 15568 (EmbeddedActivityInviteEmbed)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl6 from "intl" /* 1113 */;
import useChannelName from "useChannelName" /* 5954 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7313 */;
import ApplicationAssetsStore2 from "ApplicationAssetsStore" /* 7314 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7665 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8033 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 9170 */;
import CodedLinksConstants from "CodedLinksConstants" /* 11891 */;
import useEmbeddedActivityParticipantAvatarUris from "useEmbeddedActivityParticipantAvatarUris" /* 15569 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import InviteStore from "InviteStore" /* 6052 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
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
        const string = tmp39(1113).intl.string;
        if (null != channel1) {
          if (null != name) {
            const intl2 = tmp39(1113).intl;
            const formatToParts = intl2.formatToParts;
            const obj3 = { channelName: tmp39Result7.computeChannelName(channel1, UserStore, RelationshipStore), guildName: name };
            const omZR7L = tmp39(1113).t.omZR7L;
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
            const string2 = tmp39(1113).intl.string;
            if (0 === embeddedActivityParticipantAvatarUris.length) {
              const intl4 = tmp39(1113).intl;
              stringResult = intl4.string(tmp39(1113).t.I0v0Qv);
            } else {
              stringResult = tmp29;
              if (tmp24) {
                const intl3 = tmp39(1113).intl;
                stringResult = intl3.string(tmp39(1113).t.KC26NR);
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
            intl5 = tmp39(1113).intl;
            return obj5;
          }
          embeddedActivityParticipantAvatarUris = [];
        }
        formatToPartsResult = null;
        if (null != name) {
          const intl = tmp39(1113).intl;
          const obj6 = { guildName: name };
          formatToPartsResult = intl.formatToParts(tmp39(1113).t.u0vaDE, obj6);
        }
      }
    }
    return null;
  }
}
