// Module ID: 18772
// Function ID: 18773
// Name: TypingSubtitle
// Dependencies: [19, 17, 21, 18771, 8707, 8756, 5783, 2]
// Exports: default

// Module 18772 (TypingSubtitle)
import react_native from "react-native" /* 17 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8707 */;
import useSubtitleStyles from "useSubtitleStyles" /* 18771 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  let channel;
  let channelName;
  let guild;
  let items;
  let items1;
  let items2;
  let text;
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  const obj = useSubtitleStyles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    const tmpResult = utils_ChannelUtils;
    channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(8756).TextIcon;
  }
  let tmp7 = null;
  const obj2 = { style: subtitleStyles.subtitleRow, children: items };
  const tmp6 = View;
  if (null != channelName) {
    const obj3 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
    tmp7 = _false(channelIconComponentWithGuild, obj3);
  }
  items = [tmp7, ];
  let tmp5Result = null;
  const obj4 = { variant: "body-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: items2 };
  const Text = tmp(5783).Text;
  if (null != channelName) {
    const obj5 = { variant: "body-xs/medium", children: items1 };
    items1 = [channelName, "  \u00B7  "];
    tmp5Result = tmp5(tmp(5783).Text, obj5);
  }
  items2 = [tmp5Result, text];
  items[1] = React3(Text, obj4);
  return React3(tmp6, obj2);
};
