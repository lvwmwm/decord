// Module ID: 18260
// Function ID: 18261
// Name: ChannelsEmpty
// Dependencies: [19, 17, 4941, 1072, 21, 5009, 5619, 575, 563, 9055, 9025, 17006, 8171, 1188, 18261, 1114, 5712, 18262, 5630, 2]

// Module 18260 (ChannelsEmpty)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9025 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import AssetRegistryDefault from "AssetRegistry" /* 18261 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18262 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flex: 1, paddingTop: 12 }, content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }, headerText: obj2, text: { textAlign: "center" }, buttonWrapper: { marginTop: 24 }, buttonPill: obj3, personalizeButtonWrapper: { marginHorizontal: 12, marginBottom: 12 } };
obj2 = { fontSize: 18, marginTop: 16, marginBottom: 8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(Text_Text.TextStyleSheet["heading-md/bold"]);
obj3 = { borderRadius: nativeDefault.radii.xl, height: 44, paddingHorizontal: 20 };
let closure_9 = createStyles(obj);
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
  const tmp = closure_9();
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
  const obj2 = guild(17006);
  items4[1] = { paddingBottom: obj2.useYouBarTotalHeight(16) };
  ({ paddingBottom: obj2.useYouBarTotalHeight(16) });
  if (canCustomizeGuild) {
    const obj5 = { style: tmp.personalizeButtonWrapper, children: closure_7(RowButton, obj6) };
    obj6 = { icon: closure_7(Icon, obj7), label: intl.string(guild(1114).t["Yhi9/N"]), onPress: callback };
    RowButton = tmp2(8171).RowButton;
    obj7 = { source: AssetRegistryDefault, disableColor: true };
    Icon = tmp2(1188).Icon;
    intl = tmp2(1114).intl;
    canCustomizeGuild = closure_7(tmp8, obj5);
  }
  items5 = [canCustomizeGuild, ];
  const obj8 = { style: tmp.content, children: items6 };
  const obj9 = { source: AssetRegistryDefault2 };
  const tmp12 = FastImageDefault;
  items6 = [closure_7(tmp12, obj9), , , ];
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items7, children: intl2.string(guild(1114).t.o4s29v) };
  items7 = [, ];
  ({ text: arr8[0], headerText: arr8[1] } = tmp);
  const Text = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items6[1] = closure_7(Text, obj10);
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl3.string(guild(1114).t.iypvFu) };
  const Text2 = tmp2(5619).Text;
  intl3 = tmp2(1114).intl;
  items6[2] = closure_7(Text2, obj11);
  if (canCreateChannel) {
    const obj12 = { style: tmp.buttonWrapper, children: closure_7(BaseTextButton, obj13) };
    obj13 = { shrink: true, size: "md", pillStyle: tmp.buttonPill, text: intl4.string(guild(1114).t["63PyJQ"]), onPress: callback1 };
    BaseTextButton = tmp2(5630).BaseTextButton;
    intl4 = tmp2(1114).intl;
    canCreateChannel = tmp11(tmp8, obj12);
  }
  items6[3] = canCreateChannel;
  items5[1] = closure_8(View, obj8);
  return closure_8(View, obj3);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/ChannelsEmpty.tsx");

export default memoResult;
