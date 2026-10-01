// Module ID: 15960
// Function ID: 15961
// Name: MentionSubtitle
// Dependencies: [19, 17, 21, 15961, 5335, 5394, 4832, 1115, 2]
// Exports: default

// Module 15960 (MentionSubtitle)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import useSubtitleStyles from "useSubtitleStyles" /* 15961 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  let intl;
  let items;
  let obj5;
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = useSubtitleStyles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    const tmpResult = utils_ChannelUtils;
    channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(5394).TextIcon;
  }
  const obj2 = { style: subtitleStyles.subtitleRow, children: items };
  items = [, ];
  const obj3 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  items[0] = _false(channelIconComponentWithGuild, obj3);
  const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: intl.format(intl2.t.L9YdGH, obj5) };
  const Text = tmp(4832).Text;
  intl = tmp(1115).intl;
  obj5 = {
    channelName,
    count: count - 1,
    channelHook(children, arg1) {
      const obj = { variant: "text-xs/medium", children };
      return closure_1_3(Text_Text.Text, obj, arg1);
    }
  };
  items[1] = _false(Text, obj4);
  return React3(View, obj2);
};
