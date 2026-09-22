// Module ID: 16424
// Function ID: 16425
// Name: UnreadSubtitle
// Dependencies: [19, 17, 21, 16422, 5109, 5161, 1114, 4632, 2]
// Exports: default

// Module 16424 (UnreadSubtitle)
import Text_Text from "Text/Text" /* 4632 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default function UnreadSubtitle(arg0) {
  ({ channel, channelName } = arg0);
  let subtitleStyles;
  let channelIconComponentWithGuild;
  ({ guild, count } = arg0);
  subtitleStyles = subtitleStyles(channelIconComponentWithGuild[3]).useSubtitleStyles();
  channelIconComponentWithGuild = undefined;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(tmp2[4]).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(tmp2[4]);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(tmp2[5]).TextIcon;
  }
  const diff = count - 1;
  const intl = tmp(tmp2[6]).intl;
  const obj2 = { style: subtitleStyles.subtitleRow, accessible: true, accessibilityLabel: intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[6]).t.gxD5I6, { channelName, count: diff }), children: null };
  const intl2 = tmp(tmp2[6]).intl;
  obj2.children = intl2.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, {
    channelName,
    count: diff,
    labelHook(children, arg1) {
      return jsx(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children }, arg1);
    },
    iconHook(arg0, arg1) {
      return <channelIconComponentWithGuild key={arg1} size="xxs" color="icon-muted" style={subtitleStyles.unreadChannelIcon} />;
    },
    channelHook(children, arg1) {
      return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children }, arg1);
    },
    overflowHook(children, arg1) {
      return jsx(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", children }, arg1);
    }
  });
  return <View style={subtitleStyles.subtitleRow} accessible accessibilityLabel={intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[6]).t.gxD5I6, { channelName, count: diff })}>{null}</View>;
};
