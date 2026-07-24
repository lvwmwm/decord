// Module ID: 11331
// Function ID: 88168
// Name: styles
// Dependencies: [31, 27, 33, 4130, 689, 2]
// Exports: default

// Module 11331 (styles)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.iconWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().iconWrapper, wrapperSize.wrapperStyle, ];
  obj = { height: num, width: num };
  items[2] = obj;
  obj.style = items;
  obj.children = wrapperSize.icon;
  return <View height={num} width={num} />;
};
export const useAppLauncherOptionIconStyles = _createForOfIteratorHelperLoose;
