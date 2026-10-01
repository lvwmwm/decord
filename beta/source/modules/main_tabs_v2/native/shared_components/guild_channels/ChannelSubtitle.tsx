// Module ID: 16472
// Function ID: 16473
// Name: guild_channels/ChannelSubtitle
// Dependencies: [19, 21, 9580, 4832, 15858, 9575, 2]
// Exports: renderChannelSubtitle

// Module 16472 (guild_channels/ChannelSubtitle)
import Fragment from "Fragment" /* 21 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 9575 */;
import ChannelListLayout from "ChannelListLayout" /* 9580 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 15858 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ChannelSubtitle(arg0) {
  let channelId;
  let connected;
  let guildId;
  let layout;
  let muted;
  let obj3;
  let renderMessagePreviewMarkup;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, layout, subtitle } = arg0);
  const obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    const obj2 = { children: renderMessagePreviewMarkup(obj3) };
    const tmp4 = "voice" === channelSubtitleData.type && connected;
    const Text = tmp(4832).Text;
    const merged = Object.assign(textProps);
    obj3 = { content: channelSubtitleData.subtitle, muted, channelId, guildId, layout, color: "text-muted", disableAnimatedEmoji: !tmp4 };
    renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
    MessagePreviewMarkup;
    const tmp5 = jsx;
    if (muted == null) {
      muted = false;
    }
    return tmp5(Text, obj2);
  }
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let layout;
  let obj3;
  let subtitle;
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let tmp9;
    const obj2 = { variant: obj3.getLayoutStyles(layout).messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    obj3 = ChannelListLayout;
    const tmp10 = require;
    if (typeof subtitle === "string") {
      const Text = tmp10(4832).Text;
      const merged = Object.assign(obj2);
      tmp9 = <Text>{subtitle}</Text>;
    } else {
      tmp9 = <ChannelSubtitle channelId={tmp2} guildId={tmp3} layout={layout} subtitle={subtitle} muted={tmp} connected={tmp4} textProps={obj2} />;
    }
    return tmp9;
  }
};
