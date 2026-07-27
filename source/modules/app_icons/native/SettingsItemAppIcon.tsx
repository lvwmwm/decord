// Module ID: 14419
// Function ID: 110251
// Name: SettingsItemAppIcon
// Dependencies: [31, 6526, 33, 4131, 689, 6525, 6527, 9700, 14420, 2]
// Exports: default

// Module 14419 (SettingsItemAppIcon)
import "result";
import { getIconById } from "getDefaultIcon";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = require(6525) /* fetchCurrentAppIcon */;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = _createForOfIteratorHelperLoose();
  if (currentAppIcon !== require(6527) /* FreemiumAppIconIds */.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp5) {
      obj = { style: tmp3.icon, id: currentAppIcon, size: 32 };
      let tmp10 = jsx(importDefault(14420), { style: tmp3.icon, id: currentAppIcon, size: 32 });
    }
    return tmp10;
  }
  obj = { color: INTERACTIVE_ICON_DEFAULT };
  tmp10 = jsx(require(9700) /* ClydeIcon */.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};
