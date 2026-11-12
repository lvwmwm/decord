// Module ID: 16900
// Function ID: 16901
// Name: UserProfileFloatingUpsell
// Dependencies: [32, 19, 7470, 21, 5170, 16888, 1627, 2]
// Exports: default, useFloatingUpsellHeight

// Module 16900 (UserProfileFloatingUpsell)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 16888 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7470 */;
import createStyles from "createStyles" /* 5170 */;
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
