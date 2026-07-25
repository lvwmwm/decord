// Module ID: 8684
// Function ID: 68905
// Name: OrbBadgePreview
// Dependencies: [31, 27, 33, 4131, 8596, 8014, 8648, 1212, 2]
// Exports: OrbBadgePreview

// Module 8684 (OrbBadgePreview)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = require(8596) /* useCurrentUser */;
  obj = { style: callback().container };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser };
  const tmp = callback();
  const tmp3 = importDefault(8014);
  const items = [require(8648) /* _createForOfIteratorHelperLoose */.createOrbProfileBadge()];
  obj.additionalBadges = items;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.bxcI6Y);
  obj.children = <tmp3 compact user={currentUser} />;
  return <View compact user={currentUser} />;
};
