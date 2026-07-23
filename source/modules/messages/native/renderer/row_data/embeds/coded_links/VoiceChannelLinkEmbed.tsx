// Module ID: 12297
// Function ID: 95810
// Name: createVoiceChannelLinkEmbed
// Dependencies: [57, 27, 1391, 1348, 1838, 3758, 3767, 1849, 653, 6979, 7633, 1392, 477, 1212, 4593, 4320, 2]
// Exports: createVoiceChannelLinkEmbed

// Module 12297 (createVoiceChannelLinkEmbed)
import _slicedToArray from "_slicedToArray";
import { Image } from "get ActivityIndicator";
import { getGuildAcronym } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { InviteTypes } from "InviteSendStates";

const require = arg1;
const result = require("isGuildOwner").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, closure_2) {
  let baseColors;
  let colors;
  const tmp = callback(code.split("/"), 2);
  channel = channel.getChannel(tmp[1]);
  guild = guild.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (closure_8.can(Permissions.VIEW_CHANNEL, channel)) {
          if (closure_8.can(Permissions.CONNECT, channel)) {
            ({ colors, baseColors } = importDefault(7633)(closure_2));
            let icon;
            if (null != guild) {
              icon = guild.icon;
            }
            if (null != icon) {
              let obj1 = importDefault(1392);
              let obj = {};
              let id;
              if (null != guild) {
                id = guild.id;
              }
              obj.id = id;
              let icon1;
              if (null != guild) {
                icon1 = guild.icon;
              }
              obj.icon = icon1;
              obj.canAnimate = true;
              obj.size = 128;
              const guildIconURL = obj1.getGuildIconURL(obj);
            } else if (null != guild) {
              const tmp10 = getGuildAcronym(guild);
            }
            obj = {};
            const merged = Object.assign(baseColors);
            const tmp8 = importDefault(7633)(closure_2);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj["headerText"] = str;
            obj["headerColor"] = colors.headerColor;
            obj5 = require(477) /* set */;
            const intl = require(1212) /* getSystemLocale */.intl;
            const string = intl.string;
            const t = require(1212) /* getSystemLocale */.t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj["acceptLabelText"] = stringResult;
            obj["onlineText"] = undefined;
            obj["memberText"] = undefined;
            isGuildStageVoiceResult = channel.isGuildStageVoice();
            const assetSource = Image.resolveAssetSource(require(4593) /* getThreadChannelIcon */.getChannelIcon(channel));
            let uri;
            if (null != assetSource) {
              uri = assetSource.uri;
            }
            obj["channelIcon"] = uri;
            const obj6 = require(4593) /* getThreadChannelIcon */;
            obj["titleText"] = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_10, closure_9);
            obj["titleColor"] = colors.titleColor;
            let tmp35;
            if (null != guildIconURL) {
              tmp35 = guildIconURL;
            }
            obj["thumbnailUrl"] = tmp35;
            obj["thumbnailText"] = tmp10;
            obj["subtitleColor"] = undefined;
            obj["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
            obj["acceptLabelBorderColor"] = undefined;
            obj["acceptLabelColor"] = colors.acceptLabelGreenColor;
            obj["embedCanBeTapped"] = true;
            obj["canBeAccepted"] = true;
            const intl2 = require(1212) /* getSystemLocale */.intl;
            obj1 = { guildName: guild.name };
            obj["channelName"] = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["2wimj5"], obj1);
            obj["subtitle"] = "";
            obj["type"] = InviteTypes.GUILD;
            obj["inviteSplash"] = undefined;
            return obj;
          }
        }
      }
    }
  }
  return null;
};
