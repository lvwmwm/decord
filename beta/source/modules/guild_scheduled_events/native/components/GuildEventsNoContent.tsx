// Module ID: 9262
// Function ID: 9263
// Name: GuildEventsNoContent
// Dependencies: [19, 17, 4469, 1074, 1085, 21, 4836, 5836, 576, 504, 7855, 9074, 9076, 4832, 1115, 9048, 2]
// Exports: default

// Module 9262 (GuildEventsNoContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1074 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let Fonts;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const GuildSettingsSections = Constants2.GuildSettingsSections;
({ Permissions: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 88, padding: 16 }, title: obj2, subtitle: { paddingBottom: 2, textAlign: "center" } };
obj2 = { textAlign: "center" };
createStyles = createStyles.createStyles;
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
const merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj7;
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = closure_9();
  let obj = guild(504);
  const items = [PermissionStore];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroRequire.MANAGE_ROLES, guild), items1);
  const obj2 = { style: tmp.container, children: items2 };
  const obj3 = { icon: onClose(9074), IconComponent: guild(9076).CalendarIcon };
  const tmp8 = onClose(7855);
  items2 = [closure_7(tmp8, obj3), , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(guild(1115).t["WgZ+3D"]) };
  const Text = guild(4832).Text;
  intl = guild(1115).intl;
  items2[1] = closure_7(Text, obj4);
  const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl2.string(guild(1115).t["v/S/PG"]) };
  const Text2 = guild(4832).Text;
  intl2 = guild(1115).intl;
  items2[2] = closure_7(Text2, obj5);
  const tmp5 = closure_8;
  const tmp6 = View;
  const tmp7 = closure_7;
  if (stateFromStores) {
    const obj6 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.format(guild(1115).t["K+DH2o"], obj7) };
    const Text3 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    obj7 = {
      onClick() {
          onClose();
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    stateFromStores = tmp7(Text3, obj6);
  }
  items2[3] = stateFromStores;
  return tmp5(tmp6, obj2);
};
