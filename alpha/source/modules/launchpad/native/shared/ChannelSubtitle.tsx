// Module ID: 19349
// Function ID: 19350
// Name: ChannelSubtitle
// Dependencies: [19, 11236, 21, 18988, 5761, 18527, 11234, 11245, 2]
// Exports: renderChannelSubtitle

// Module 19349 (ChannelSubtitle)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5761 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11234 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11236 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 18988 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ChannelSubtitle(muted) {
  let connected;
  let subtitle;
  muted = muted.muted;
  const channelId = muted.channelId;
  const guildId = muted.guildId;
  const textProps = muted.textProps;
  let closure_4;
  ({ connected, subtitle } = muted);
  const tmp = muted;
  let obj = muted(guildId[5]);
  const channelSubtitleData = obj.getChannelSubtitleData(subtitle);
  let subtitle1;
  const tmp2 = guildId;
  if (channelSubtitleData != null) {
    subtitle1 = channelSubtitleData.subtitle;
  }
  let type;
  if (channelSubtitleData != null) {
    type = channelSubtitleData.type;
  }
  let tmp6 = "voice" === type && connected;
  closure_4 = tmp6;
  const items = [subtitle1, muted, channelId, guildId, tmp6];
  const memo = subtitle1.useMemo(() => {
    let flag;
    let str;
    let result;
    if (null != subtitle1) {
      const obj = { content: tmp, muted: flag, channelId, guildId, disableAnimatedEmoji: !closure_4, color: str };
      flag = muted;
      const renderMeasuredMessagePreviewMarkup = MessagePreviewMarkup.renderMeasuredMessagePreviewMarkup;
      MessagePreviewMarkup;
      const tmp6 = muted;
      if (muted == null) {
        flag = false;
      }
      str = "text-subtle";
      if (tmp6) {
        str = "text-muted";
      }
      result = renderMeasuredMessagePreviewMarkup(obj);
    }
    return result;
  }, items);
  let tmp8 = null;
  if (null != memo) {
    const MessagePreviewParagraph = tmp(tmp2[7]).MessagePreviewParagraph;
    const merged = Object.assign(textProps);
    ({ mentions: obj2.mentions, content: obj2.children } = memo);
    tmp8 = <MessagePreviewParagraph />;
  }
  return tmp8;
}
const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export function renderChannelSubtitle(arg0) {
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
}
