// Module ID: 15041
// Function ID: 114554
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: [31, 27, 33, 4130, 689, 15042, 2]
// Exports: default

// Module 15041 (GuildThemeNuxPreviewGraphic)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  let obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", style: _createForOfIteratorHelperLoose().container };
  obj = {};
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.themeSettings = tmp4;
  obj.children = jsx(importDefault(15042), {});
  return <View />;
};
