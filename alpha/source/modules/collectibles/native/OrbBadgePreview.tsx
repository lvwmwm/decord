// Module ID: 14101
// Function ID: 14102
// Name: OrbBadgePreview
// Dependencies: [19, 17, 21, 4794, 8800, 8928, 9442, 1112, 2]
// Exports: OrbBadgePreview

// Module 14101 (OrbBadgePreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import useCurrentUser from "useCurrentUser" /* 8800 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 8928 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9442 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export function OrbBadgePreview() {
  let intl;
  let items;
  const tmp = closure_5();
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  ({ compact: true, user: currentUser, additionalBadges: items, accessibilityLabel: intl.string(intl2.t.bxcI6Y) });
  UserProfilePreviewDefault;
  items = [];
  const obj4 = collectibles_CollectiblesUtils;
  items[0] = obj4.createOrbProfileBadge();
  intl = intl2.intl;
  return <View style={tmp.container}>{null}</View>;
}
