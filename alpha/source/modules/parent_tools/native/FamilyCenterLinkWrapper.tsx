// Module ID: 15117
// Function ID: 15118
// Name: FamilyCenterLinkWrapper
// Dependencies: [19, 21, 5091, 587, 558, 576, 6848, 8287, 6191, 2]

// Module 15117 (FamilyCenterLinkWrapper)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLinkRowWrapper(userId) {
  let analyticsLocations;
  let obj = userId(576);
  const cResult = obj.c(7);
  const tmp = userId;
  userId = userId.userId;
  const children = userId.children;
  const tmp4 = closure_4();
  analyticsLocations = analyticsLocations(6848)().analyticsLocations;
  if (undefined === userId) {
    return null;
  } else {
    if (cResult[0] === analyticsLocations) {
      let tmp5;
      if (cResult[1] === userId) {
        tmp5 = cResult[2];
      }
      if (cResult[3] === children) {
        if (cResult[4] === tmp5) {
          let tmp6;
          if (cResult[5] === tmp4.container) {
            tmp6 = cResult[6];
          }
          return tmp6;
        }
      }
      const tmp8 = jsx(tmp(6191).PressableOpacity, { style: tmp4.container, onPress: tmp5, children });
      cResult[3] = children;
      cResult[4] = tmp5;
      cResult[5] = tmp4.container;
      cResult[6] = tmp8;
      tmp6 = tmp8;
    }
    function handlePress() {
      const obj = { userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
    cResult[0] = analyticsLocations;
    cResult[1] = userId;
    cResult[2] = handlePress;
    tmp5 = handlePress;
  }
}) : (function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  let analyticsLocations;
  const children = userId.children;
  const tmp = closure_4();
  analyticsLocations = analyticsLocations(6848)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    tmp3 = jsx(userId(6191).PressableOpacity, {
      style: tmp.container,
      onPress: function handlePress() {
          const obj = { userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        },
      children
    });
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default tmp3;
