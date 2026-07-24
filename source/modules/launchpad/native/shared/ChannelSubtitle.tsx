// Module ID: 15717
// Function ID: 121161
// Name: ChannelSubtitle
// Dependencies: [31, 10289, 33, 15706, 4126, 15096, 10287, 2]
// Exports: renderChannelSubtitle

// Module 15717 (ChannelSubtitle)
import "result";
import { SUBTITLE_OPACITY_NORMAL } from "hairlineWidth";
import { jsx } from "jsxProd";

const require = arg1;
function ChannelSubtitle(arg0) {
  let channelId;
  let connected;
  let guildId;
  let muted;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  let obj = require(15096) /* getChannelSubtitleData */;
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
    obj.disableAnimatedEmoji = !("voice" === channelSubtitleData.type && connected);
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj.color = str;
    obj["children"] = require(10287) /* getRules */.renderMessagePreviewMarkup(obj);
    return jsx(require(4126) /* Text */.Text, { content: channelSubtitleData.subtitle });
  }
}
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let muted;
  let subtitle;
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: importDefault(15706)().messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    let num = 1;
    obj = {};
    if (!muted) {
      num = SUBTITLE_OPACITY_NORMAL;
    }
    obj.opacity = num;
    obj.style = obj;
    if ("string" === typeof subtitle) {
      const obj1 = {};
      const merged = Object.assign(obj);
      obj1["children"] = subtitle;
      let tmp6 = jsx(require(4126) /* Text */.Text, {});
    } else {
      obj = { channelId: tmp, guildId: tmp2, subtitle, muted, connected: tmp3 };
      obj.textProps = obj;
      tmp6 = <ChannelSubtitle channelId={tmp} guildId={tmp2} subtitle={subtitle} muted={muted} connected={tmp3} />;
    }
    return tmp6;
  }
};
