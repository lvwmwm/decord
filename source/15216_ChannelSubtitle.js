// Module ID: 15216
// Function ID: 114934
// Name: ChannelSubtitle
// Dependencies: []
// Exports: renderChannelSubtitle

// Module 15216 (ChannelSubtitle)
function ChannelSubtitle(arg0) {
  let channelId;
  let connected;
  let guildId;
  let layout;
  let muted;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, layout, subtitle } = arg0);
  let obj = arg1(dependencyMap[4]);
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(textProps);
    obj = { content: channelSubtitleData.subtitle };
    let tmp9 = null != muted;
    if (tmp9) {
      tmp9 = muted;
    }
    obj.muted = tmp9;
    obj.channelId = channelId;
    obj.guildId = guildId;
    obj.layout = layout;
    obj.color = "text-muted";
    obj.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
    obj["children"] = arg1(dependencyMap[5]).renderMessagePreviewMarkup(obj);
    return jsx(arg1(dependencyMap[3]).Text, obj);
  }
}
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let layout;
  let subtitle;
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: arg1(dependencyMap[2]).getLayoutStyles(layout).messagePreview.text.variant };
    if ("string" === typeof subtitle) {
      obj = {};
      const merged = Object.assign(obj);
      obj["children"] = subtitle;
      let tmp7 = jsx(arg1(dependencyMap[3]).Text, obj);
    } else {
      obj = { channelId: tmp2, guildId: tmp3, layout, subtitle, muted: tmp, connected: tmp4 };
      obj.textProps = obj;
      tmp7 = <ChannelSubtitle {...obj} />;
    }
    return tmp7;
  }
};
