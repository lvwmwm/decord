// Module ID: 19289
// Function ID: 19290
// Name: guild_channels/ChannelSubtitle
// Dependencies: [19, 21, 10981, 5866, 18817, 10986, 10995, 2]
// Exports: renderChannelSubtitle

// Module 19289 (guild_channels/ChannelSubtitle)
import Fragment from "Fragment" /* 21 */;
import ChannelListLayout from "ChannelListLayout" /* 10981 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10986 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ChannelSubtitle(muted) {
  let connected;
  let subtitle;
  muted = muted.muted;
  const channelId = muted.channelId;
  const guildId = muted.guildId;
  const layout = muted.layout;
  const textProps = muted.textProps;
  let closure_5;
  ({ connected, subtitle } = muted);
  const tmp = muted;
  let obj = muted(channelId[4]);
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  let subtitle1;
  const tmp2 = channelId;
  if (channelSubtitleData != null) {
    subtitle1 = channelSubtitleData.subtitle;
  }
  let type;
  if (channelSubtitleData != null) {
    type = channelSubtitleData.type;
  }
  closure_5 = tmp6;
  const items = [subtitle1, muted, channelId, guildId, layout, tmp6];
  const memo = guildId.useMemo(() => {
    let flag;
    let result;
    if (null != subtitle1) {
      const obj = { content: tmp, muted: flag, channelId, guildId, layout, color: "text-muted", disableAnimatedEmoji: !closure_5 };
      flag = muted;
      const renderMeasuredMessagePreviewMarkup = MessagePreviewMarkup.renderMeasuredMessagePreviewMarkup;
      MessagePreviewMarkup;
      if (muted == null) {
        flag = false;
      }
      result = renderMeasuredMessagePreviewMarkup(obj);
    }
    return result;
  }, items);
  let tmp8 = null;
  if (null != memo) {
    const obj3 = {};
    const MessagePreviewParagraph = tmp(tmp2[6]).MessagePreviewParagraph;
    const merged = Object.assign(textProps);
    ({ mentions: obj2.mentions, content: obj2.children } = memo);
    tmp8 = layout(MessagePreviewParagraph, obj3);
  }
  return tmp8;
}
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export function renderChannelSubtitle(arg0) {
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
      const Text = tmp10(5866).Text;
      const merged = Object.assign(obj2);
      tmp9 = <Text>{subtitle}</Text>;
    } else {
      tmp9 = <ChannelSubtitle channelId={tmp2} guildId={tmp3} layout={layout} subtitle={subtitle} muted={tmp} connected={tmp4} textProps={obj2} />;
    }
    return tmp9;
  }
}
