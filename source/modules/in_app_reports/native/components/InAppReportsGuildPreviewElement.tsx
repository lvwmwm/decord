// Module ID: 12356
// Function ID: 96185
// Name: GuildPreview
// Dependencies: [31, 27, 33, 4130, 689, 3974, 4126, 1212, 5513, 2]
// Exports: default

// Module 12356 (GuildPreview)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.borderColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { lineHeight: 16, marginBottom: 8 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, padding: 12 };
_createForOfIteratorHelperLoose.guildContainer = obj1;
_createForOfIteratorHelperLoose.guildInfo = { marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildPreviewElement.tsx");

export default function GuildPreview(guild) {
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3974) /* hexToRgb */;
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["0ox7Hq"]).toUpperCase();
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { style: items1 };
  items1 = [tmp.guildContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = {};
  const str = intl.string(require(1212) /* getSystemLocale */.t["0ox7Hq"]);
  obj2.size = require(5513) /* makeSizeStyle */.GuildIconSizes.LARGE;
  obj2.guild = guild;
  const items2 = [callback(importDefault(5513), obj2), ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.guildInfo, children: guild.name };
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items2;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
};
