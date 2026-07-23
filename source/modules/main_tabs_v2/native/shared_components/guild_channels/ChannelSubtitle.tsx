// Module ID: 15350
// Function ID: 117205
// Name: ChannelSubtitle
// Dependencies: [31, 33, 10261, 4126, 15049, 10258, 2]
// Exports: renderChannelSubtitle

// Module 15350 (ChannelSubtitle)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
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
  let obj = require(15049) /* getChannelSubtitleData */;
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
    obj["children"] = require(10258) /* getRules */.renderMessagePreviewMarkup(obj);
    return jsx(require(4126) /* Text */.Text, { content: channelSubtitleData.subtitle });
  }
}
const result = require("getLayoutStyles").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let layout;
  let subtitle;
  ({ subtitle, layout } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: require(10261) /* getLayoutStyles */.getLayoutStyles(layout).messagePreview.text.variant, color: "text-muted", lineClamp: 1, maxFontSizeMultiplier: 1.75 };
    if ("string" === typeof subtitle) {
      obj = {};
      const merged = Object.assign(obj);
      obj["children"] = subtitle;
      let tmp7 = jsx(require(4126) /* Text */.Text, {});
    } else {
      obj = { channelId: tmp2, guildId: tmp3, layout, subtitle, muted: tmp, connected: tmp4 };
      obj.textProps = obj;
      tmp7 = <ChannelSubtitle channelId={tmp2} guildId={tmp3} layout={layout} subtitle={subtitle} muted={tmp} connected={tmp4} />;
    }
    return tmp7;
  }
};
