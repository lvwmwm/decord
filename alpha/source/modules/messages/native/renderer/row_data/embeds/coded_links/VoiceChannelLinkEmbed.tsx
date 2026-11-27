// Module ID: 14523
// Function ID: 14524
// Name: VoiceChannelLinkEmbed
// Dependencies: [32, 17, 4910, 4892, 4914, 4975, 4985, 1387, 1071, 5776, 12393, 1413, 1379, 1112, 7096, 5659, 2]
// Exports: createVoiceChannelLinkEmbed

// Module 14523 (VoiceChannelLinkEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import GuildRecord from "GuildRecord" /* 4910 */;
import useChannelName from "useChannelName" /* 5659 */;
import Constants2 from "Constants" /* 5776 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 7096 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12393 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const getGuildAcronym = GuildRecord.getGuildAcronym;
const Permissions = Constants.Permissions;
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export function createVoiceChannelLinkEmbed(code, arg1) {
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
              const getGuildIconURL = tmp5(1413).getGuildIconURL;
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
            const intl = tmp18(1112).intl;
            const string = intl.string;
            const t = tmp18(1112).t;
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
            intl2 = tmp18(1112).intl;
            return obj2;
          }
        }
      }
    }
  }
  return null;
}
