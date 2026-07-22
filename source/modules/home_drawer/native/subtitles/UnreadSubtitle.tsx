// Module ID: 14741
// Function ID: 111160
// Name: UnreadSubtitle
// Dependencies: []
// Exports: default

// Module 14741 (UnreadSubtitle)
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
      const obj = { 803799044: 3309567, 1269170180: 601874432, 711589892: 4319821, children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    iconHook(arg0, arg1) {
      return callback(channelIconComponentWithGuild, { style: subtitleStyles.unreadChannelIcon }, arg1);
    },
    channelHook(children) {
      const obj = { 803799044: 3309567, 1269170180: 601874432, 711589892: 4319821, style: subtitleStyles.subtitleText, children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    },
    overflowHook(children) {
      const obj = { cachedAt: "center", edpbxy: "center", children };
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, obj, arg1);
    }
  };
  obj.children = intl.format(arg1(dependencyMap[6]).t.OqlmU6, obj);
  return <View {...obj} />;
};
