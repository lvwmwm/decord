// Module ID: 13529
// Function ID: 13530
// Name: VoiceChannelLinkEmbed
// Dependencies: [32, 17, 2063, 2045, 2067, 4399, 4409, 1376, 1078, 7983, 8208, 1401, 1368, 1119, 5241, 4911, 2]
// Exports: createVoiceChannelLinkEmbed

// Module 13529 (VoiceChannelLinkEmbed)
import util from "util" /* 1119 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import useChannelName from "useChannelName" /* 4911 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5241 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8208 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const Image = fn(17).Image;
const getGuildAcronym = fn(2063).getGuildAcronym;
const Permissions = fn(1078).Permissions;
const InviteTypes = fn(7983).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, arg1) {
  const tmp = _slicedToArray(code.split("/"), 2);
  const channel = ChannelStore.getChannel(tmp[1]);
  guild = GuildStore.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (PermissionStore.can(Permissions.VIEW_CHANNEL, channel)) {
          if (obj9.can(tmp26.CONNECT, channel)) {
            ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
            let icon;
            if (guild != null) {
              icon = guild.icon;
            }
            if (null != icon) {
              let id;
              if (guild != null) {
                id = guild.id;
              }
              const obj = { id, icon: null, canAnimate: true, size: 128 };
              let icon1;
              if (guild != null) {
                icon1 = guild.icon;
              }
              obj.icon = icon1;
              const guildIconURL = tmp4(1401).getGuildIconURL(obj);
              const tmp4Result = tmp4(1401);
            } else if (null != guild) {
              const tmp8 = getGuildAcronym(guild);
            }
            const obj2 = {};
            const merged = Object.assign(baseColors);
            tmp4 = importDefault;
            const tmp6 = getEmbedThemeColorsDefault(arg1);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj2.headerText = str;
            obj2.headerColor = colors.headerColor;
            obj5 = PlatformUtils;
            const intl = tmp16(1119).intl;
            const string = intl.string;
            const t = tmp16(1119).t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj2.acceptLabelText = stringResult;
            obj2.onlineText = undefined;
            obj2.memberText = undefined;
            isGuildStageVoiceResult = channel.isGuildStageVoice();
            const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
            let uri;
            if (assetSource != null) {
              uri = assetSource.uri;
            }
            obj2.channelIcon = uri;
            const tmp16Result = utils_ChannelUtils;
            obj2.titleText = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
            obj2.titleColor = colors.titleColor;
            let tmp24;
            if (null != guildIconURL) {
              tmp24 = guildIconURL;
            }
            obj2.thumbnailUrl = tmp24;
            obj2.thumbnailText = tmp8;
            obj2.subtitleColor = undefined;
            obj2.acceptLabelBackgroundColor = colors.acceptLabelGreenBackgroundColor;
            obj2.acceptLabelBorderColor = undefined;
            obj2.acceptLabelColor = colors.acceptLabelGreenColor;
            obj2.embedCanBeTapped = true;
            obj2.canBeAccepted = true;
            const intl2 = tmp16(1119).intl;
            const obj3 = { guildName: guild.name };
            obj2.channelName = intl2.formatToPlainString(util.t["2wimj5"], obj3);
            obj2.subtitle = "";
            obj2.type = InviteTypes.GUILD;
            obj2.inviteSplash = undefined;
            return obj2;
          }
        }
        obj9 = PermissionStore;
        tmp26 = Permissions;
      }
    }
  }
  return null;
};
