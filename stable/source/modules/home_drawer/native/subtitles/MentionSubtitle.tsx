// Module ID: 16421
// Function ID: 16422
// Name: MentionSubtitle
// Dependencies: [19, 17, 21, 16422, 5109, 5161, 4632, 1114, 2]
// Exports: default

// Module 16421 (MentionSubtitle)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import useSubtitleStyles from "useSubtitleStyles" /* 16422 */;
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
    channelIconComponentWithGuild = tmp(5109).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(5109);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(5161).TextIcon;
  }
  const obj2 = { style: subtitleStyles.subtitleRow, children: null };
  const items = [React3(channelIconComponentWithGuild, { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon }), ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  const intl = tmp(1114).intl;
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
