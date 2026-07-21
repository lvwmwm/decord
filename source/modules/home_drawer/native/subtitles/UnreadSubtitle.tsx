// Module ID: 14733
// Function ID: 111117
// Name: UnreadSubtitle
// Dependencies: []
// Exports: default

// Module 14733 (UnreadSubtitle)
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
      const obj = { <string:1643205302>: "<string:2682257408>", <string:1415816450>: null, <string:4283523744>: null, children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    iconHook(arg0, arg1) {
      return callback(channelIconComponentWithGuild, { style: subtitleStyles.unreadChannelIcon }, arg1);
    },
    channelHook(children) {
      const obj = { <string:1643205302>: "<string:2682257408>", <string:1415816450>: null, <string:4283523744>: null, style: subtitleStyles.subtitleText, children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    overflowHook(children) {
      const obj = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44", children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    }
  };
  obj.children = intl.format(arg1(dependencyMap[6]).t.OqlmU6, obj);
  return <View {...obj} />;
};
