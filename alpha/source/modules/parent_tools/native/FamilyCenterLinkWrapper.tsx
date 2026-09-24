// Module ID: 15265
// Function ID: 15266
// Name: FamilyCenterLinkWrapper
// Dependencies: [19, 21, 4829, 576, 7495, 5427, 8527, 2]
// Exports: default

// Module 15265 (FamilyCenterLinkWrapper)
import nativeDefault from "native" /* 576 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7495)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = {
      style: tmp.container,
      onPress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    };
    tmp3 = jsx(userId(5427).PressableOpacity, {
      style: tmp.container,
      onPress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    });
  }
  return tmp3;
};
