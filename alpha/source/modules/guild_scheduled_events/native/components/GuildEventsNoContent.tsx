// Module ID: 8658
// Function ID: 8659
// Name: GuildEventsNoContent
// Dependencies: [19, 17, 4750, 1085, 1096, 21, 5092, 587, 5906, 558, 576, 504, 1126, 5088, 8637, 2]

// Module 8658 (GuildEventsNoContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8637 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import Constants from "Constants" /* 1096 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import TextStyles from "TextStyles" /* 5906 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventsNoContent(guild) {
  let container;
  let first;
  let intl3;
  let items2;
  let obj6;
  let title;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp7;
  let tmp8;
  let obj = guild(576);
  const cResult = obj.c(20);
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function u() {
      return PermissionStore.can(metroRequire.MANAGE_ROLES, guild);
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  ({ container, title } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guild(1126).t["WgZ+3D"]);
    cResult[4] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    const obj2 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp14 = closure_7(guild(5088).Text, obj2);
    cResult[5] = tmp4.title;
    cResult[6] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[6];
  }
  const subtitle = tmp4.subtitle;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(guild(1126).t["v/S/PG"]);
    cResult[7] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitle) {
    const obj3 = { style: subtitle, variant: "text-sm/normal", color: "text-default", children: tmp15 };
    const tmp19 = closure_7(guild(5088).Text, obj3);
    cResult[8] = tmp4.subtitle;
    cResult[9] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === stateFromStores) {
    if (cResult[11] === guild) {
      if (cResult[12] === onClose) {
        let tmp20;
        if (cResult[13] === tmp4.subtitle) {
          tmp20 = cResult[14];
        }
        if (cResult[15] === tmp4.container) {
          if (cResult[16] === tmp17) {
            if (cResult[17] === tmp20) {
              let tmp23;
              if (cResult[18] === tmp12) {
                tmp23 = cResult[19];
              }
              return tmp23;
            }
          }
        }
        const obj4 = { style: container, children: items2 };
        items2 = [tmp12, tmp17, tmp20];
        const tmp26 = closure_8(View, obj4);
        cResult[15] = tmp4.container;
        cResult[16] = tmp17;
        cResult[17] = tmp20;
        cResult[18] = tmp12;
        cResult[19] = tmp26;
        tmp23 = tmp26;
      }
    }
  }
  let tmp21 = stateFromStores;
  if (tmp21) {
    const obj5 = { style: tmp4.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.format(guild(1126).t["K+DH2o"], obj6) };
    const Text = tmp(5088).Text;
    intl3 = tmp(1126).intl;
    obj6 = {
      onClick() {
          onClose();
          const obj = GuildSettingsActionCreatorsDefault;
          obj.open(guild.id, GuildSettingsSections.ROLES);
        }
    };
    tmp21 = closure_7(Text, obj5);
  }
  cResult[10] = stateFromStores;
  cResult[11] = guild;
  cResult[12] = onClose;
  cResult[13] = tmp4.subtitle;
  cResult[14] = tmp21;
  tmp20 = tmp21;
}) : (function GuildEventsNoContent(guild) {
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
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(guild(1126).t["WgZ+3D"]) };
  const Text = guild(5088).Text;
  intl = guild(1126).intl;
  items2 = [closure_7(Text, obj3), , ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl2.string(guild(1126).t["v/S/PG"]) };
  const Text2 = guild(5088).Text;
  intl2 = guild(1126).intl;
  items2[1] = closure_7(Text2, obj4);
  const tmp5 = closure_8;
  const tmp6 = View;
  const tmp7 = closure_7;
  if (stateFromStores) {
    const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.format(guild(1126).t["K+DH2o"], obj6) };
    const Text3 = tmp2(5088).Text;
    intl3 = tmp2(1126).intl;
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
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default tmp8;
