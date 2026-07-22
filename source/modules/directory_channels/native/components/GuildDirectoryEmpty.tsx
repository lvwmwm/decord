// Module ID: 11779
// Function ID: 91420
// Name: GuildDirectoryEmpty
// Dependencies: []
// Exports: default

// Module 11779 (GuildDirectoryEmpty)
importAll(dependencyMap[0]);
({ Image: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp4 = arg1(dependencyMap[3]);
const InstantInviteSources = tmp4.InstantInviteSources;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.header = {};
const obj1 = { 1936959572: "Array", -823869256: "handleActivityItemSelected", -1717677639: "dotSeparator", 1884411745: "mic", 1390895600: "handleReduceTransparencyChanged", -289491508: "ay", fontFamily: tmp4.Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.title = obj1;
obj.description = {};
obj.ctaContainer = { marginBottom: 8 };
let closure_9 = obj.createStyles(obj);
const tmp5 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const channel = guild.channel;
  const importDefault = channel;
  const tmp = callback2();
  let obj = arg1(closure_2[8]);
  const items = [closure_5];
  closure_2 = obj.useStateFromStores(items, () => channels.getChannels(guild.id));
  let obj1 = arg1(closure_2[9]);
  obj = { contentContainerStyle: items1 };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: importDefault(closure_2[7])().bottom + 16 };
  items1[1] = obj;
  obj1 = {};
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  obj1.source = importDefault(closure_2[10]);
  obj1.style = tmp.header;
  const items2 = [callback(closure_3, obj1), , , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header" };
  const intl = arg1(closure_2[12]).intl;
  obj2.children = intl.format(arg1(closure_2[12]).t.vyvrpC, { guildName: guild.name });
  items2[1] = callback(arg1(closure_2[11]).LegacyText, obj2);
  const obj4 = { style: tmp.description };
  const intl2 = arg1(closure_2[12]).intl;
  obj4.children = intl2.string(arg1(closure_2[12]).t.WypE0i);
  items2[2] = callback(arg1(closure_2[13]).Text, obj4);
  let tmp5 = null;
  if (canCreateOrAddGuildInDirectory) {
    const obj5 = {
      style: tmp.ctaContainer,
      onPress() {
          let obj = channel(closure_2[15]);
          obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
          return obj.open(obj);
        },
      iconSource: importDefault(closure_2[16])
    };
    const intl3 = arg1(closure_2[12]).intl;
    obj5.title = intl3.string(arg1(closure_2[12]).t.hyK15i);
    tmp5 = callback(arg1(closure_2[14]).FormCTA, obj5);
  }
  items2[3] = tmp5;
  const obj6 = {
    style: tmp.ctaContainer,
    onPress() {
      return guild(closure_2[17]).handleOpenInviteActionsheet(guild, channel.id, closure_2, constants.HUB_EMPTY_STATE);
    },
    iconSource: importDefault(closure_2[18])
  };
  const intl4 = arg1(closure_2[12]).intl;
  obj6.title = intl4.string(arg1(closure_2[12]).t.L4bwJ9);
  items2[4] = callback(arg1(closure_2[14]).FormCTA, obj6);
  obj.children = items2;
  return closure_8(closure_4, obj);
};
