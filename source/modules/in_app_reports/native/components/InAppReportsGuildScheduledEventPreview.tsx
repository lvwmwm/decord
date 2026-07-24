// Module ID: 12357
// Function ID: 96187
// Name: GuildScheduledEventPreview
// Dependencies: [31, 27, 1838, 33, 4130, 689, 566, 3974, 4126, 1212, 5513, 2]
// Exports: default

// Module 12357 (GuildScheduledEventPreview)
import "result";
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.borderColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { lineHeight: 16, marginBottom: 8 };
let obj1 = { minHeight: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, padding: 8 };
_createForOfIteratorHelperLoose.itemContainer = obj1;
_createForOfIteratorHelperLoose.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.guildName = { lineHeight: 18, marginStart: 8 };
_createForOfIteratorHelperLoose.eventName = { lineHeight: 20, marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx");

export default function GuildScheduledEventPreview(event) {
  event = event.event;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = event(566);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(event.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let obj1 = event(3974);
    obj = { style: tmp.container };
    obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
    const intl = event(1212).intl;
    obj.children = intl.string(event(1212).t.SDTOL7);
    const items1 = [callback(event(4126).Text, obj), ];
    obj1 = {};
    const items2 = [tmp.itemContainer, ];
    const obj2 = { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) };
    items2[1] = obj2;
    obj1.style = items2;
    const obj3 = { style: tmp.guildInfo };
    const obj4 = { guild: stateFromStores };
    const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
    obj4.size = event(5513).GuildIconSizes.XXSMALL;
    obj4.selected = false;
    const items3 = [callback(importDefault(5513), obj4), ];
    const obj5 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
    items3[1] = callback(event(4126).Text, obj5);
    obj3.children = items3;
    const items4 = [callback2(View, obj3), ];
    const obj6 = { style: tmp.eventName, variant: "text-md/bold", color: "mobile-text-heading-primary", children: event.name };
    items4[1] = callback(event(4126).Text, obj6);
    obj1.children = items4;
    items1[1] = callback2(View, obj1);
    obj.children = items1;
    return callback2(View, obj);
  }
};
