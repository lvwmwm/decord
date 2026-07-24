// Module ID: 12358
// Function ID: 96190
// Name: GuildDiscoveryPreviewElement
// Dependencies: [31, 27, 4122, 33, 4130, 689, 566, 3974, 4126, 1212, 5513, 1387, 2]
// Exports: default

// Module 12358 (GuildDiscoveryPreviewElement)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.borderColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textTransform: "uppercase", lineHeight: 16, marginBottom: 8 };
let obj1 = { minHeight: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, padding: 8 };
_createForOfIteratorHelperLoose.itemContainer = obj1;
_createForOfIteratorHelperLoose.guildInfo = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.guildName = { lineHeight: 18, marginStart: 8 };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, width: 18, height: 18 };
_createForOfIteratorHelperLoose.guildIcon = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildDiscoveryPreviewElement.tsx");

export default function GuildDiscoveryPreviewElement(guild) {
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  let obj1 = require(3974) /* hexToRgb */;
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.nTe4HC);
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  obj1 = { style: items2 };
  items2 = [tmp.itemContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  const obj2 = { style: tmp.guildInfo };
  const obj3 = { style: tmp.guildIcon };
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
  const tmp4 = importDefault(5513);
  obj3.guild = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromClientDiscoverableGuild(guild);
  obj3.animate = !stateFromStores;
  const items3 = [callback(tmp4, obj3), ];
  const obj4 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: guild.name };
  items3[1] = callback(require(4126) /* Text */.Text, obj4);
  obj2.children = items3;
  obj1.children = callback2(View, obj2);
  items1[1] = callback(View, obj1);
  obj.children = items1;
  return callback2(View, obj);
};
