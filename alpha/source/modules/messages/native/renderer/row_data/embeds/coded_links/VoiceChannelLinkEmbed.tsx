// Module ID: 13504
// Function ID: 13505
// Name: VoiceChannelLinkEmbed
// Dependencies: [32, 17, 2083, 2065, 2087, 4750, 4760, 1390, 1085, 7423, 7888, 1415, 1382, 1126, 8158, 5421, 2]
// Exports: createVoiceChannelLinkEmbed

// Module 13504 (VoiceChannelLinkEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import GuildRecord from "GuildRecord" /* 2083 */;
import useChannelName from "useChannelName" /* 5421 */;
import Constants2 from "Constants" /* 7423 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7888 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8158 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const getGuildAcronym = GuildRecord.getGuildAcronym;
const Permissions = Constants.Permissions;
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, arg1) {
  let baseColors;
  let colors;
  let icon1;
  let intl2;
  let str;
  let stringResult;
  let tmp18Result2;
  let tmp26;
  let uri;
  const tmp = _slicedToArray(code.split("/"), 2);
  const first = tmp[0];
  const channel = ChannelStore.getChannel(tmp[1]);
  const guild = GuildStore.getGuild(first);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        const obj8 = PermissionStore;
        const tmp28 = Permissions;
        if (PermissionStore.can(Permissions.VIEW_CHANNEL, channel)) {
          if (obj8.can(tmp28.CONNECT, channel)) {
            let guildIconURL;
            let tmp9;
            ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
            let icon;
            getEmbedThemeColorsDefault(arg1);
            if (guild != null) {
              icon = guild.icon;
            }
            if (null != icon) {
              let id;
              const getGuildIconURL = tmp5(1415).getGuildIconURL;
              AvatarUtilsDefault;
              if (guild != null) {
                id = guild.id;
              }
              const obj = { id, icon: icon1, canAnimate: true, size: 128 };
              icon1 = undefined;
              if (guild != null) {
                icon1 = guild.icon;
              }
              guildIconURL = getGuildIconURL(obj);
            } else if (null != guild) {
              tmp9 = getGuildAcronym(guild);
            }
            const obj2 = { headerText: str, headerColor: colors.headerColor, acceptLabelText: stringResult, onlineText: undefined, memberText: undefined, channelIcon: uri, titleText: tmp18Result2.computeChannelName(channel, UserStore, RelationshipStore), titleColor: colors.titleColor, thumbnailUrl: tmp26, thumbnailText: tmp9, subtitleColor: undefined, acceptLabelBackgroundColor: colors.acceptLabelGreenBackgroundColor, acceptLabelBorderColor: undefined, acceptLabelColor: colors.acceptLabelGreenColor, embedCanBeTapped: true, canBeAccepted: true, channelName: intl2.formatToPlainString(intl3.t["2wimj5"], obj3), subtitle: "", type: InviteTypes.GUILD, inviteSplash: undefined };
            const merged = Object.assign(baseColors);
            str = undefined;
            const obj4 = PlatformUtils;
            if (obj4.isAndroid()) {
              str = "";
            }
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            const intl = tmp18(1126).intl;
            const string = intl.string;
            const t = tmp18(1126).t;
            if (isGuildStageVoiceResult) {
              stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            const resolveAssetSource = Image.resolveAssetSource;
            const tmp18Result = utils_ChannelUtils;
            const assetSource = resolveAssetSource(tmp18Result.getChannelIcon(channel));
            uri = undefined;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            tmp26 = undefined;
            tmp18Result2 = useChannelName;
            if (null != guildIconURL) {
              tmp26 = guildIconURL;
            }
            intl2 = tmp18(1126).intl;
            return obj2;
          }
        }
      }
    }
  }
  return null;
};
