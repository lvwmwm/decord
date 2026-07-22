// Module ID: 15553
// Function ID: 118666
// Name: ChannelSubtitle
// Dependencies: []
// Exports: renderChannelSubtitle

// Module 15553 (ChannelSubtitle)
function ChannelSubtitle(arg0) {
  let channelId;
  let connected;
  let guildId;
  let muted;
  let subtitle;
  let textProps;
  ({ muted, textProps } = arg0);
  ({ connected, channelId, guildId, subtitle } = arg0);
  let obj = arg1(dependencyMap[5]);
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
    obj["children"] = arg1(dependencyMap[6]).renderMessagePreviewMarkup(obj);
    return jsx(arg1(dependencyMap[4]).Text, obj);
  }
}
importAll(dependencyMap[0]);
const SUBTITLE_OPACITY_NORMAL = arg1(dependencyMap[1]).SUBTITLE_OPACITY_NORMAL;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/launchpad/native/shared/ChannelSubtitle.tsx");

export const renderChannelSubtitle = function renderChannelSubtitle(arg0) {
  let muted;
  let subtitle;
  ({ subtitle, muted } = arg0);
  if (null == subtitle) {
    return null;
  } else {
    let obj = { variant: importDefault(dependencyMap[3])().messagePreview.text.variant };
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
      let tmp6 = jsx(arg1(dependencyMap[4]).Text, obj1);
    } else {
      obj = { channelId: tmp, guildId: tmp2, subtitle, muted, connected: tmp3 };
      obj.textProps = obj;
      tmp6 = <ChannelSubtitle {...obj} />;
    }
    return tmp6;
  }
};
