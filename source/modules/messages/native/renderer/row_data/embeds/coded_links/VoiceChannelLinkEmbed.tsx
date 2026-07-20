// Module ID: 12172
// Function ID: 93598
// Name: createVoiceChannelLinkEmbed
// Dependencies: []
// Exports: createVoiceChannelLinkEmbed

// Module 12172 (createVoiceChannelLinkEmbed)
let closure_3 = importDefault(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const getGuildAcronym = arg1(dependencyMap[2]).getGuildAcronym;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const Permissions = arg1(dependencyMap[8]).Permissions;
const InviteTypes = arg1(dependencyMap[9]).InviteTypes;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx");

export const createVoiceChannelLinkEmbed = function createVoiceChannelLinkEmbed(code, arg1) {
  let baseColors;
  let colors;
  const tmp = callback(code.split("/"), 2);
  const channel = channel.getChannel(tmp[1]);
  const guild = guild.getGuild(tmp[0]);
  if (null != channel) {
    if (channel.isGuildVocal()) {
      if (null != guild) {
        if (closure_8.can(Permissions.VIEW_CHANNEL, channel)) {
          if (closure_8.can(Permissions.CONNECT, channel)) {
            ({ colors, baseColors } = importDefault(dependencyMap[10])(arg1));
            let icon;
            if (null != guild) {
              icon = guild.icon;
            }
            if (null != icon) {
              let obj1 = importDefault(dependencyMap[11]);
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
            const tmp8 = importDefault(dependencyMap[10])(arg1);
            let str;
            if (obj5.isAndroid()) {
              str = "";
            }
            obj["headerText"] = str;
            obj["headerColor"] = colors.headerColor;
            const obj5 = arg1(dependencyMap[12]);
            const intl = arg1(dependencyMap[13]).intl;
            const string = intl.string;
            const t = arg1(dependencyMap[13]).t;
            if (isGuildStageVoiceResult) {
              let stringResult = string(t.7vb2cc);
            } else {
              stringResult = string(t.gpqgah);
            }
            obj["acceptLabelText"] = stringResult;
            obj["onlineText"] = undefined;
            obj["memberText"] = undefined;
            const isGuildStageVoiceResult = channel.isGuildStageVoice();
            const assetSource = Image.resolveAssetSource(arg1(dependencyMap[14]).getChannelIcon(channel));
            let uri;
            if (null != assetSource) {
              uri = assetSource.uri;
            }
            obj["channelIcon"] = uri;
            const obj6 = arg1(dependencyMap[14]);
            obj["titleText"] = arg1(dependencyMap[15]).computeChannelName(channel, closure_10, closure_9);
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
            const intl2 = arg1(dependencyMap[13]).intl;
            obj1 = { guildName: guild.name };
            obj["channelName"] = intl2.formatToPlainString(arg1(dependencyMap[13]).t.2wimj5, obj1);
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
