// Module ID: 14352
// Function ID: 14353
// Name: GuildDirectoryEmpty
// Dependencies: [19, 17, 4944, 1072, 21, 5014, 575, 1625, 504, 13840, 5717, 14353, 1187, 1113, 5624, 8177, 13841, 14354, 9118, 14355, 2]
// Exports: default

// Module 14352 (GuildDirectoryEmpty)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 13841 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let Fonts;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ InstantInviteSources: hasOwnProperty, Fonts } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { marginBottom: 16, alignSelf: "center" }, title: obj3, description: { textAlign: "center", alignSelf: "center", marginBottom: 24 }, ctaContainer: { marginBottom: 8 } };
obj2 = { flex: 1, justifyContent: "flex-end", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8, alignSelf: "center" };
let closure_8 = createStyles(obj);
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
  const tmp = closure_8();
  const bottom = channel(1625)().bottom;
  let obj = guild(504);
  const items = [GuildChannelStore];
  dependencyMap = obj.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(13840);
  const obj3 = { contentContainerStyle: items1, children: items2 };
  items1 = [tmp.container, ];
  const obj4 = { paddingBottom: bottom + 16 };
  items1[1] = obj4;
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  const obj5 = { source: channel(14353), style: tmp.header };
  const tmp9 = channel(5717);
  items2 = [closure_6(tmp9, obj5), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", children: intl.format(guild(1113).t.vyvrpC, obj7) };
  const LegacyText = guild(1187).LegacyText;
  intl = guild(1113).intl;
  obj7 = { guildName: guild.name };
  items2[1] = closure_6(LegacyText, obj6);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(guild(1113).t.WypE0i) };
  const Text = guild(5624).Text;
  intl2 = guild(1113).intl;
  items2[2] = closure_6(Text, obj8);
  let tmp8Result = null;
  const tmp6 = closure_7;
  const tmp7 = ScrollView;
  if (canCreateOrAddGuildInDirectory) {
    const obj9 = {
      style: tmp.ctaContainer,
      onPress() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: channel.id };
          return obj.open(obj2);
        },
      iconSource: channel(14354),
      title: intl3.string(guild(1113).t.hyK15i)
    };
    const FormCTA = tmp4(8177).FormCTA;
    intl3 = tmp4(1113).intl;
    tmp8Result = tmp8(FormCTA, obj9);
  }
  items2[3] = tmp8Result;
  const obj10 = {
    style: tmp.ctaContainer,
    onPress() {
      const obj = instant_invite_InstantInviteUtils;
      return obj.handleOpenInviteActionsheet(guild, channel.id, closure_2, hasOwnProperty.HUB_EMPTY_STATE);
    },
    iconSource: channel(14355),
    title: intl4.string(guild(1113).t.L4bwJ9)
  };
  const FormCTA2 = tmp4(8177).FormCTA;
  intl4 = tmp4(1113).intl;
  items2[4] = closure_6(FormCTA2, obj10);
  return tmp6(tmp7, obj3);
};
