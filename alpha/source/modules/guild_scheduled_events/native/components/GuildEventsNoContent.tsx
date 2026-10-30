// Module ID: 9075
// Function ID: 9076
// Name: GuildEventsNoContent
// Dependencies: [19, 17, 4941, 1072, 1083, 21, 5009, 575, 6717, 504, 5619, 1114, 9055, 2]
// Exports: default

// Module 9075 (GuildEventsNoContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1072 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1083 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let Fonts;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const GuildSettingsSections = Constants2.GuildSettingsSections;
({ Permissions: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, subtitle: { paddingBottom: 2, textAlign: "center" } };
obj2 = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_32, paddingBottom: nativeDefault.space.PX_80 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center" };
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj6;
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = closure_9();
  let obj = guild(504);
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroRequire.MANAGE_ROLES, guild), items1);
  const obj2 = { style: tmp.container, children: items2 };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(guild(1114).t["WgZ+3D"]) };
  const Text = guild(5619).Text;
  intl = guild(1114).intl;
  items2 = [closure_7(Text, obj3), , ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl2.string(guild(1114).t["v/S/PG"]) };
  const Text2 = guild(5619).Text;
  intl2 = guild(1114).intl;
  items2[1] = closure_7(Text2, obj4);
  const tmp5 = closure_8;
  const tmp6 = View;
  const tmp7 = closure_7;
  if (stateFromStores) {
    const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.format(guild(1114).t["K+DH2o"], obj6) };
    const Text3 = tmp2(5619).Text;
    intl3 = tmp2(1114).intl;
    obj6 = {
      onClick() {
          onClose();
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    stateFromStores = tmp7(Text3, obj5);
  }
  items2[2] = stateFromStores;
  return tmp5(tmp6, obj2);
};
