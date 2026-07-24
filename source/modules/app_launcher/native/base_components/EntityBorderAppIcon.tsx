// Module ID: 11206
// Function ID: 87162
// Name: EntityBorderAppIcon
// Dependencies: [27, 33, 689, 4130, 5085, 2]
// Exports: default

// Module 11206 (EntityBorderAppIcon)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const sm = require("_createForOfIteratorHelperLoose").radii.sm;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((width, borderRadius) => {
  obj = { appIcon: obj };
  obj = { width, height: width, borderRadius };
  obj = { padding: 1, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, overflow: "hidden", borderRadius: borderRadius + 1 };
  obj.entityWrapper = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

export default function EntityBorderAppIcon(iconSize) {
  let iconSource;
  let iconStyle;
  let wrapperStyle;
  let num = iconSize.iconSize;
  ({ iconSource, wrapperStyle, iconStyle } = iconSize);
  if (num === undefined) {
    num = 32;
  }
  let iconBorderRadius = iconSize.iconBorderRadius;
  if (iconBorderRadius === undefined) {
    iconBorderRadius = sm;
  }
  const tmp = callback(num, iconBorderRadius);
  const items = [tmp.entityWrapper, wrapperStyle];
  const items1 = [tmp.appIcon, iconStyle];
  return <View style={items}>{jsx(importDefault(5085), { style: items1, source: iconSource })}</View>;
};
