// Module ID: 15886
// Function ID: 15887
// Name: ChannelsEmpty
// Dependencies: [19, 17, 4469, 1074, 21, 4836, 4832, 576, 563, 9048, 9015, 14629, 8055, 1177, 15887, 1115, 15888, 5282, 2]

// Module 15886 (ChannelsEmpty)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9015 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import AssetRegistryDefault from "AssetRegistry" /* 15887 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15888 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const Permissions = Constants.Permissions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }, headerText: obj2, text: { textAlign: "center" }, buttonWrapper: { marginTop: 24 }, buttonPill: obj3, personalizeButtonWrapper: { marginHorizontal: 12, marginBottom: 12 } };
obj2 = { fontSize: 18, marginTop: 16, marginBottom: 8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(Text_Text.TextStyleSheet["heading-md/bold"]);
obj3 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function ChannelsEmpty(guild) {
  let BaseTextButton;
  let Icon;
  let RowButton;
  let canCreateChannel;
  let canCustomizeGuild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj13;
  let obj6;
  let obj7;
  guild = guild.guild;
  const tmp = closure_10();
  let obj = guild(563);
  const items = [PermissionStore];
  const items1 = [guild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { canCustomizeGuild: PermissionStore.can(Permissions.MANAGE_GUILD, guild), canCreateChannel: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild) };
    return obj;
  }, items1);
  ({ canCustomizeGuild, canCreateChannel } = stateFromStoresObject);
  const items2 = [guild.id];
  const items3 = [guild.id];
  const callback = react.useCallback(() => {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.open(guild.id);
  }, items2);
  const callback1 = react.useCallback(() => {
    const obj = CreateChannelModalActionCreatorsDefault;
    obj.open(null, guild.id, null, null);
  }, items3);
  const obj3 = { style: items4, children: items5 };
  items4 = [tmp.wrapper, ];
  const obj2 = guild(14629);
  items4[1] = { paddingBottom: obj2.useYouBarTotalHeight(16) };
  ({ paddingBottom: obj2.useYouBarTotalHeight(16) });
  if (canCustomizeGuild) {
    const obj5 = { style: tmp.personalizeButtonWrapper, children: closure_8(RowButton, obj6) };
    obj6 = { icon: closure_8(Icon, obj7), label: intl.string(guild(1115).t["Yhi9/N"]), onPress: callback };
    RowButton = tmp2(8055).RowButton;
    obj7 = { source: AssetRegistryDefault, disableColor: true };
    Icon = tmp2(1177).Icon;
    intl = tmp2(1115).intl;
    canCustomizeGuild = closure_8(tmp8, obj5);
  }
  items5 = [canCustomizeGuild, ];
  const obj8 = { style: tmp.content, children: items6 };
  items6 = [, , , ];
  const obj9 = { source: AssetRegistryDefault2 };
  items6[0] = closure_8(closure_5, obj9);
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: intl2.string(guild(1115).t.o4s29v) };
  items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  const Text = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items6[1] = closure_8(Text, obj10);
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl3.string(guild(1115).t.iypvFu) };
  const Text2 = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items6[2] = closure_8(Text2, obj11);
  if (canCreateChannel) {
    const obj12 = { style: tmp.buttonWrapper, children: closure_8(BaseTextButton, obj13) };
    obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: intl4.string(guild(1115).t["63PyJQ"]), onPress: callback1 };
    BaseTextButton = tmp2(5282).BaseTextButton;
    intl4 = tmp2(1115).intl;
    canCreateChannel = tmp11(tmp8, obj12);
  }
  items6[3] = canCreateChannel;
  items5[1] = closure_9(closure_4, obj8);
  return closure_9(closure_4, obj3);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;
