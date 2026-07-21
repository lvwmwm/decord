// Module ID: 14729
// Function ID: 111081
// Name: TypingSubtitle
// Dependencies: []
// Exports: default

// Module 14729 (TypingSubtitle)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  let channel;
  let channelName;
  let guild;
  let text;
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
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
  let tmp9 = null;
  if (null != channelName) {
    obj = { flex: "text-xs/medium", flexGrow: "text-default", style: subtitleStyles.channelIcon };
    tmp9 = callback(channelIconComponentWithGuild, obj);
  }
  const items = [tmp9, ];
  obj1 = { -9223372036854775808: "<string:2682257408>", 0: null, 0: null, style: subtitleStyles.subtitleText };
  let tmp12 = null;
  if (null != channelName) {
    const obj2 = { variant: "text-xs/medium" };
    const items1 = [channelName, "  \u00B7  "];
    obj2.children = items1;
    tmp12 = callback2(arg1(dependencyMap[6]).Text, obj2);
  }
  const items2 = [tmp12, text];
  obj1.children = items2;
  items[1] = callback2(arg1(dependencyMap[6]).Text, obj1);
  obj.children = items;
  return callback2(View, obj);
};
