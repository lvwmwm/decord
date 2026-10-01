// Module ID: 15963
// Function ID: 15964
// Name: UnreadSubtitle
// Dependencies: [19, 17, 21, 15961, 5335, 5394, 1115, 4832, 2]
// Exports: default

// Module 15963 (UnreadSubtitle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default function UnreadSubtitle(arg0) {
  let channel;
  let channelName;
  let count;
  let guild;
  ({ channel, channelName } = arg0);
  let subtitleStyles;
  let channelIconComponentWithGuild;
  ({ guild, count } = arg0);
  const obj = subtitleStyles(channelIconComponentWithGuild[3]);
  subtitleStyles = obj.useSubtitleStyles();
  channelIconComponentWithGuild = undefined;
  if (null != channel) {
    const tmpResult = subtitleStyles(channelIconComponentWithGuild[4]);
    channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(tmp2[5]).TextIcon;
  }
  const diff = count - 1;
  const intl = tmp(tmp2[6]).intl;
  const intl2 = tmp(tmp2[6]).intl;
  const obj3 = {
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
  };
  return <View style={subtitleStyles.subtitleRow} accessible accessibilityLabel={intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[6]).t.gxD5I6, { channelName, count: diff })}>{intl2.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, obj3)}</View>;
};
