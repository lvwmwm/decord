// Module ID: 15187
// Function ID: 15188
// Name: FamilyCenterLinkWrapper
// Dependencies: [19, 21, 4758, 580, 558, 568, 7409, 8453, 5341, 2]

// Module 15187 (FamilyCenterLinkWrapper)
import nativeDefault from "native" /* 580 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 14, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(568).c(7);
  userId = userId.userId;
  const children = userId.children;
  const tmp4 = closure_4();
  analyticsLocations = analyticsLocations(7409)().analyticsLocations;
  if (undefined === userId) {
    return null;
  } else {
    if (cResult[0] === analyticsLocations) {
      if (cResult[1] === userId) {
        let tmp5 = cResult[2];
      }
      if (cResult[3] === children) {
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp4.container) {
            let tmp6 = cResult[6];
          }
          return tmp6;
        }
      }
      const obj2 = { style: tmp4.container, onPress: tmp5, children };
      const tmp8 = jsx(userId(5341).PressableOpacity, { style: tmp4.container, onPress: tmp5, children });
      cResult[3] = children;
      cResult[4] = tmp5;
      cResult[5] = tmp4.container;
      cResult[6] = tmp8;
      tmp6 = tmp8;
    }
    const fn = function l() {
      showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
    };
    cResult[0] = analyticsLocations;
    cResult[1] = userId;
    cResult[2] = fn;
    tmp5 = fn;
  }
}) : ((userId) => {
  userId = userId.userId;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7409)().analyticsLocations;
  let tmp3 = null;
  if (undefined !== userId) {
    const obj = {
      style: tmp.container,
      onPress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    };
    tmp3 = jsx(userId(5341).PressableOpacity, {
      style: tmp.container,
      onPress() {
          showUserProfileActionSheetDefault({ userId, disableCalls: true, disableMessage: true, sourceAnalyticsLocations: analyticsLocations });
        },
      children: userId.children
    });
  }
  return tmp3;
});
