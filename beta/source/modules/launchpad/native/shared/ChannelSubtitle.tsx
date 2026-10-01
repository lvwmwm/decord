// Module ID: 16813
// Function ID: 16814
// Name: ChannelSubtitle
// Dependencies: [19, 9577, 21, 16479, 4832, 15858, 9575, 2]
// Exports: renderChannelSubtitle

// Module 16813 (ChannelSubtitle)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 9575 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 15858 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16479 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ChannelSubtitle(arg0) {
  let channelId;
  let connected;
  let flag;
  let guildId;
  let muted;
  let obj3;
  let renderMessagePreviewMarkup;
  let str;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  const obj = getChannelSubtitleData;
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    const obj2 = { children: renderMessagePreviewMarkup(obj3) };
    const tmp4 = "voice" === channelSubtitleData.type && connected;
    const Text = tmp(4832).Text;
    const merged = Object.assign(textProps);
    obj3 = { content: channelSubtitleData.subtitle, muted: flag, channelId, guildId, disableAnimatedEmoji: !tmp4, color: str };
    flag = muted;
    renderMessagePreviewMarkup = MessagePreviewMarkup.renderMessagePreviewMarkup;
    MessagePreviewMarkup;
    const tmp5 = jsx;
    if (muted == null) {
      flag = false;
    }
    str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    return tmp5(Text, obj2);
  }
}
const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let muted;
  let obj;
  let subtitle;
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let tmp9;
    const obj2 = { variant: getLayoutStylesDefault().messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75, style: obj };
    let num = 1;
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    obj = { opacity: num };
    if (typeof subtitle === "string") {
      const Text = Text_Text.Text;
      const merged = Object.assign(obj2);
      tmp9 = <Text>{subtitle}</Text>;
    } else {
      tmp9 = <ChannelSubtitle channelId={tmp} guildId={tmp2} subtitle={subtitle} muted={muted} connected={tmp3} textProps={obj2} />;
    }
    return tmp9;
  }
};
