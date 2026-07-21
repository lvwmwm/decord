// Module ID: 14730
// Function ID: 111083
// Name: UnreadSubtitle
// Dependencies: []
// Exports: default

// Module 14730 (UnreadSubtitle)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default function UnreadSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  channel = channel.channel;
  let dependencyMap;
  ({ guild, channelName, count } = channel);
  let obj = arg1(dependencyMap[3]);
  const subtitleStyles = obj.useSubtitleStyles();
  const arg1 = subtitleStyles;
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = arg1(dependencyMap[4]).getChannelIconComponentWithGuild(channel, guild);
    const obj2 = arg1(dependencyMap[4]);
  }
  if (null == channelIconComponentWithGuild) {
    channelIconComponentWithGuild = arg1(dependencyMap[5]).TextIcon;
  }
  dependencyMap = channelIconComponentWithGuild;
  obj = { style: subtitleStyles.subtitleRow };
  const intl = arg1(dependencyMap[6]).intl;
  obj = {
    channelName,
    count: count - 1,
    labelHook(children) {
      const obj = { -9223372036854775808: "<string:2682257408>", 0: null, 0: null, children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    iconHook(arg0, arg1) {
      const obj = { flex: "text-xs/medium", flexGrow: "text-default", style: subtitleStyles.unreadChannelIcon };
      return callback(channelIconComponentWithGuild, obj, arg1);
    },
    channelHook(children) {
      const obj = { -9223372036854775808: "<string:2682257408>", 0: null, 0: null, style: subtitleStyles.subtitleText, children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    overflowHook(children) {
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { children }, arg1);
    }
  };
  obj.children = intl.format(arg1(dependencyMap[6]).t.OqlmU6, obj);
  return <View {...obj} />;
};
