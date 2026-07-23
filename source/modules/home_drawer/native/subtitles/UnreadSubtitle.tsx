// Module ID: 14857
// Function ID: 113328
// Name: UnreadSubtitle
// Dependencies: [31, 27, 33, 14855, 4593, 4638, 1212, 4126, 2]
// Exports: default

// Module 14857 (UnreadSubtitle)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default function UnreadSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  channel = channel.channel;
  let channelIconComponentWithGuild;
  ({ guild, channelName, count } = channel);
  let obj = subtitleStyles(channelIconComponentWithGuild[3]);
  subtitleStyles = obj.useSubtitleStyles();
  channelIconComponentWithGuild = undefined;
  if (null != channel) {
    channelIconComponentWithGuild = subtitleStyles(channelIconComponentWithGuild[4]).getChannelIconComponentWithGuild(channel, guild);
    const obj2 = subtitleStyles(channelIconComponentWithGuild[4]);
  }
  if (null == channelIconComponentWithGuild) {
    channelIconComponentWithGuild = subtitleStyles(channelIconComponentWithGuild[5]).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow };
  const intl = subtitleStyles(channelIconComponentWithGuild[6]).intl;
  obj = {
    channelName,
    count: count - 1,
    labelHook(children) {
      const obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children };
      return outer1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    iconHook(arg0, arg1) {
      const obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.unreadChannelIcon };
      return outer1_3(channelIconComponentWithGuild, obj, arg1);
    },
    channelHook(children) {
      const obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children };
      return outer1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    overflowHook(children) {
      const obj = { variant: "text-xs/medium", color: "text-muted", children };
      return outer1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    }
  };
  obj.children = intl.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, obj);
  return <View channelName={channelName} count={count - 1} labelHook={function labelHook(children) {
    const obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children };
    return outer1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
  }} iconHook={function iconHook(arg0, arg1) {
    const obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.unreadChannelIcon };
    return outer1_3(channelIconComponentWithGuild, obj, arg1);
  }} channelHook={function channelHook(children) {
    const obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children };
    return outer1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
  }} overflowHook={function overflowHook(children) {
    const obj = { variant: "text-xs/medium", color: "text-muted", children };
    return outer1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
  }} />;
};
