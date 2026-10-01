// Module ID: 12270
// Function ID: 12271
// Name: GuildDirectoryEmpty
// Dependencies: [19, 17, 4467, 1074, 21, 4836, 576, 1613, 504, 11790, 12271, 1177, 1115, 4832, 8053, 11791, 12272, 9275, 12273, 2]
// Exports: default

// Module 12270 (GuildDirectoryEmpty)
import nativeDefault from "native" /* 576 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11791 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let Fonts;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Image: c3, ScrollView: closure_4 } = react_native);
({ InstantInviteSources: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { marginBottom: 16, alignSelf: "center" }, title: obj3, description: { textAlign: "center", alignSelf: "center", marginBottom: 24 }, ctaContainer: { marginBottom: 8 } };
obj2 = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default function GuildDirectoryEmpty(guild) {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let obj7;
  guild = guild.guild;
  const channel = guild.channel;
  const tmp = closure_9();
  const bottom = channel(1613)().bottom;
  let obj = guild(504);
  const items = [GuildChannelStore];
  dependencyMap = obj.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(11790);
  const obj3 = { contentContainerStyle: items1, children: items2 };
  items1 = [tmp.container, ];
  const obj4 = { paddingBottom: bottom + 16 };
  items1[1] = obj4;
  const obj5 = { source: channel(12271), style: tmp.header };
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  items2 = [closure_7(closure_3, obj5), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", children: intl.format(guild(1115).t.vyvrpC, obj7) };
  const LegacyText = guild(1177).LegacyText;
  intl = guild(1115).intl;
  obj7 = { guildName: guild.name };
  items2[1] = closure_7(LegacyText, obj6);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(guild(1115).t.WypE0i) };
  const Text = guild(4832).Text;
  intl2 = guild(1115).intl;
  items2[2] = closure_7(Text, obj8);
  let tmp8Result = null;
  const tmp6 = closure_8;
  const tmp7 = closure_4;
  if (canCreateOrAddGuildInDirectory) {
    const obj9 = {
      style: tmp.ctaContainer,
      onPress() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
          return obj.open(obj2);
        },
      iconSource: channel(12272),
      title: intl3.string(guild(1115).t.hyK15i)
    };
    const FormCTA = tmp4(8053).FormCTA;
    intl3 = tmp4(1115).intl;
    tmp8Result = tmp8(FormCTA, obj9);
  }
  items2[3] = tmp8Result;
  const obj10 = {
    style: tmp.ctaContainer,
    onPress() {
      const obj = instant_invite_InstantInviteUtils;
      return obj.handleOpenInviteActionsheet(guild, channel.id, closure_2, metroRequire.HUB_EMPTY_STATE);
    },
    iconSource: channel(12273),
    title: intl4.string(guild(1115).t.L4bwJ9)
  };
  const FormCTA2 = tmp4(8053).FormCTA;
  intl4 = tmp4(1115).intl;
  items2[4] = closure_7(FormCTA2, obj10);
  return tmp6(tmp7, obj3);
};
