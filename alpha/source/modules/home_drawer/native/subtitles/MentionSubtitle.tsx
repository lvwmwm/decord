// Module ID: 15934
// Function ID: 15935
// Name: MentionSubtitle
// Dependencies: [19, 17, 21, 15935, 5328, 5387, 4825, 1115, 2]
// Exports: default

// Module 15934 (MentionSubtitle)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import useSubtitleStyles from "useSubtitleStyles" /* 15935 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  const subtitleStyles = useSubtitleStyles.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(5328).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(5328);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(5387).TextIcon;
  }
  const obj2 = { style: subtitleStyles.subtitleRow, children: null };
  const items = [React3(channelIconComponentWithGuild, { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon }), ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  const intl = tmp(1115).intl;
  obj4.children = intl.format(util.t.L9YdGH, {
    channelName,
    count: count - 1,
    channelHook(children, arg1) {
      return closure_1_3(Text_Text.Text, { variant: "text-xs/medium", children }, arg1);
    }
  });
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  return React4(View, obj2);
};
