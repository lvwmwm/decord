// Module ID: 9775
// Function ID: 75997
// Name: ExclusiveBadge
// Dependencies: [31, 27, 33, 4130, 689, 477, 9776, 4126, 1212, 2]
// Exports: ExclusiveBadge

// Module 9775 (ExclusiveBadge)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import { space } from "_createForOfIteratorHelperLoose";
import set from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", textAlignVertical: "center", alignSelf: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.exclusiveBadge = _createForOfIteratorHelperLoose;
const obj1 = { textTransform: "uppercase", fontSize: require("_createForOfIteratorHelperLoose").space.PX_12 };
set = set.isAndroid();
obj1.lineHeight = set ? space.PX_12 : space.PX_16;
_createForOfIteratorHelperLoose.exclusiveBadgeText = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.exclusiveBadge };
  obj = { size: "xs", color: importDefault(689).colors.WHITE };
  const items = [callback(require(9776) /* ClydeIcon */.ClydeIcon, obj), ];
  obj = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.exclusiveBadgeText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.RiDMFz);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
