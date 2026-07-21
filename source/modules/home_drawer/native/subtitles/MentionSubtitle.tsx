// Module ID: 14730
// Function ID: 111111
// Name: MentionSubtitle
// Dependencies: []
// Exports: default

// Module 14730 (MentionSubtitle)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = arg1(dependencyMap[3]);
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    let obj1 = arg1(dependencyMap[4]);
    channelIconComponentWithGuild = obj1.getChannelIconComponentWithGuild(channel, guild);
  }
  if (null == channelIconComponentWithGuild) {
    channelIconComponentWithGuild = arg1(dependencyMap[5]).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow };
  obj = { style: subtitleStyles.channelIcon };
  const items = [callback(channelIconComponentWithGuild, obj), ];
  obj1 = { <string:1643205302>: "<string:2682257408>", <string:1415816450>: null, <string:4283523744>: null, style: subtitleStyles.subtitleText };
  const intl = arg1(dependencyMap[7]).intl;
  obj1.children = intl.format(arg1(dependencyMap[7]).t.L9YdGH, {
    channelName,
    count: count - 1,
    channelHook(children) {
      return callback2(callback(closure_1[6]).Text, { variant: "text-xs/medium", children }, arg1);
    }
  });
  items[1] = callback(arg1(dependencyMap[6]).Text, obj1);
  obj.children = items;
  return callback2(View, obj);
};
