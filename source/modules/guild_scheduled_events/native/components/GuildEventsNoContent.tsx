// Module ID: 8459
// Function ID: 67508
// Name: GuildEventsNoContent
// Dependencies: [31, 27, 3758, 653, 482, 33, 4130, 5052, 689, 566, 7491, 8460, 8461, 4126, 1212, 5459, 8438, 2]
// Exports: default

// Module 8459 (GuildEventsNoContent)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildSettingsSections } from "ME";
import sum from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_7;
let closure_8;
const require = arg1;
const Permissions = sum.Permissions;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 88, padding: 16 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(sum.Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24, { marginBottom: 8 }));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subtitle = { paddingBottom: 2, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: 8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsNoContent.tsx");

export default function GuildEventsNoContent(guild) {
  guild = guild.guild;
  const onClose = guild.onClose;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [guild];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_4.can(outer1_6.MANAGE_ROLES, guild), items1);
  obj = { style: tmp.container };
  obj = { icon: onClose(8460), IconComponent: guild(8461).CalendarIcon };
  const items2 = [callback(onClose(7491), obj), , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = guild(1212).intl;
  obj1.children = intl.string(guild(1212).t["WgZ+3D"]);
  items2[1] = callback(guild(4126).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default" };
  const intl2 = guild(1212).intl;
  obj2.children = intl2.string(guild(1212).t["v/S/PG"]);
  items2[2] = callback(guild(4126).Text, obj2);
  if (stateFromStores) {
    const obj3 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default" };
    const intl3 = guild(1212).intl;
    const obj4 = {
      onClick() {
          onClose();
          onClose(outer1_2[16]).open(guild.id, outer1_5.ROLES);
        }
    };
    obj3.children = intl3.format(guild(1212).t["K+DH2o"], obj4);
    stateFromStores = callback(guild(5459).TextWithIOSLinkWorkaround, obj3);
  }
  items2[3] = stateFromStores;
  obj.children = items2;
  return closure_8(View, obj);
};
