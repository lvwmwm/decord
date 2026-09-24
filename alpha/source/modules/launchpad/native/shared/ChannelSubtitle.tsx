// Module ID: 17556
// Function ID: 17557
// Name: ChannelSubtitle
// Dependencies: [19, 10464, 21, 17231, 4825, 16652, 10462, 2]
// Exports: renderChannelSubtitle

// Module 17556 (ChannelSubtitle)
import Text_Text from "Text/Text" /* 4825 */;
import getChannelSubtitleData from "getChannelSubtitleData" /* 16652 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 17231 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelSubtitle(arg0) {
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  const channelSubtitleData = getChannelSubtitleData.getChannelSubtitleData(subtitle);
  if (null == channelSubtitleData) {
    return null;
  } else {
    const obj2 = {};
    const merged = Object.assign(textProps);
    const obj3 = { content: channelSubtitleData.subtitle, muted: null, channelId: null, guildId: null, disableAnimatedEmoji: null, color: null };
    let flag = muted;
    if (muted == null) {
      flag = false;
    }
    obj3.muted = flag;
    obj3.channelId = channelId;
    obj3.guildId = guildId;
    obj3.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj3.color = str;
    obj2.children = tmp(10462).renderMessagePreviewMarkup(obj3);
    return jsx(tmp(4825).Text, {});
  }
}
const SUBTITLE_OPACITY_NORMAL = fn(10464).SUBTITLE_OPACITY_NORMAL;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    const obj2 = { variant: getLayoutStylesDefault().messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75, style: null };
    let num = 1;
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    const obj = { opacity: num };
    obj2.style = obj;
    if (typeof subtitle === "string") {
      const obj3 = {};
      const merged = Object.assign(obj2);
      obj3.children = subtitle;
      let tmp9 = jsx(Text_Text.Text, {});
    } else {
      const obj4 = { channelId: tmp, guildId: tmp2, subtitle, muted, connected: tmp3, textProps: obj2 };
      tmp9 = <ChannelSubtitle channelId={tmp} guildId={tmp2} subtitle={subtitle} muted={muted} connected={tmp3} textProps={obj2} />;
    }
    return tmp9;
  }
};
