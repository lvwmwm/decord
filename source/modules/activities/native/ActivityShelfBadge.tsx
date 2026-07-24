// Module ID: 11235
// Function ID: 87547
// Name: ActivityShelfBadge
// Dependencies: [31, 27, 653, 33, 4130, 689, 1273, 1881, 4126, 1212, 2]
// Exports: default

// Module 11235 (ActivityShelfBadge)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: 4, right: 4, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND };
_createForOfIteratorHelperLoose.badge = _createForOfIteratorHelperLoose;
let obj1 = { paddingLeft: 4, paddingRight: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, height: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_NOTIFICATION_BACKGROUND };
_createForOfIteratorHelperLoose.newBadge = obj1;
const obj2 = { paddingLeft: 4, paddingRight: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, height: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.updatedBadge = obj2;
_createForOfIteratorHelperLoose.elevationShadow = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
const obj3 = { textTransform: "uppercase", marginLeft: 2, fontFamily: require("ME").Fonts.DISPLAY_EXTRABOLD, lineHeight: 16, fontSize: 12 };
_createForOfIteratorHelperLoose.badgeText = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  let labelType;
  let replacementStyles;
  ({ labelType, replacementStyles } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (null == replacementStyles) {
    replacementStyles = tmp.badge;
  }
  if (labelType === require(1881) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.NEW) {
    let obj = {};
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    obj.style = items;
    obj = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light" });
    let tmp6 = <View variant="text-xs/semibold" style={tmp.badgeText} color="text-overlay-light" />;
  } else {
    tmp6 = null;
    if (labelType === require(1881) /* PermissionOverwriteType */.EmbeddedActivityLabelTypes.UPDATED) {
      obj = {};
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj.style = items1;
      const obj1 = { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj1.children = intl2.string(require(1212) /* getSystemLocale */.t["/qdhkk"]);
      obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/semibold", style: tmp.badgeText, color: "text-overlay-light" });
      tmp6 = <View />;
    }
  }
  return tmp6;
};
