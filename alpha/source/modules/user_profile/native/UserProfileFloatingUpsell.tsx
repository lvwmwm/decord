// Module ID: 16540
// Function ID: 16541
// Name: UserProfileFloatingUpsell
// Dependencies: [32, 19, 7377, 21, 5014, 16528, 1625, 2]
// Exports: default, useFloatingUpsellHeight

// Module 16540 (UserProfileFloatingUpsell)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 16528 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7377 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

let hasOwnProperty;
let metroRequire;
({ FLOATING_UPSELL_HEIGHT: hasOwnProperty, PROFILE_SIDE_PADDING: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles((bottom) => {
  const obj = { container: { position: "absolute", bottom, start: 0, end: 0, marginHorizontal: metroRequire - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  ({ position: "absolute", bottom, start: 0, end: 0, marginHorizontal: metroRequire - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH });
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFloatingUpsell.tsx");

export default function UserProfileFloatingUpsell(arg0) {
  UserProfileUpsellCardV2Default;
  const merged = Object.assign(arg0);
  return <tmp2 style={closure_8(useSafeAreaInsetsDefault().bottom).container} />;
};
export function useFloatingUpsellHeight() {
  const tmp = _slicedToArray(react.useState(hasOwnProperty), 2);
  let closure_0 = tmp[1];
  const obj = { height: tmp[0], onLayout: react.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.height), []) };
  return obj;
}
