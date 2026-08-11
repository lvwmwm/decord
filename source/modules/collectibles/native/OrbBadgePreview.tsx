// Module ID: 9566
// Function ID: 9567
// Name: OrbBadgePreview
// Dependencies: [19, 17, 21, 4303, 9354, 9453, 9425, 1236, 2]
// Exports: OrbBadgePreview

// Module 9566 (OrbBadgePreview)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = require(9354) /* useCurrentUser */;
  obj = { style: callback().container, children: null };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser, additionalBadges: null, accessibilityLabel: null };
  const tmp = callback();
  const tmp3 = importDefault(9453);
  const items = [require(9425) /* hasAtLeastOneGPlaySynced */.createOrbProfileBadge()];
  obj[2] = items;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.bxcI6Y);
  obj[1] = <tmp3 compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
  return <View compact user={currentUser} additionalBadges={null} accessibilityLabel={null} />;
};
