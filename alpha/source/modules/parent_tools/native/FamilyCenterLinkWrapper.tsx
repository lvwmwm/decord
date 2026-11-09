// Module ID: 17143
// Function ID: 17144
// Name: FamilyCenterLinkWrapper
// Dependencies: [19, 21, 5140, 575, 7387, 7043, 8821, 2]
// Exports: default

// Module 17143 (FamilyCenterLinkWrapper)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8821 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 } };
({ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  const children = userId.children;
  const tmp = closure_4();
  analyticsLocations = analyticsLocations(7387)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    tmp3 = jsx(userId(7043).PressableOpacity, {
      style: tmp.container,
      onPress: function handlePress() {
          const obj = { userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        },
      children
    });
  }
  return tmp3;
};
