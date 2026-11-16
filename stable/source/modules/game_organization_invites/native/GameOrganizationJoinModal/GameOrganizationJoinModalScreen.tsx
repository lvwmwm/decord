// Module ID: 13480
// Function ID: 13481
// Name: GameOrganizationJoinModalScreen
// Dependencies: [19, 17, 21, 5170, 1627, 8074, 8075, 575, 5746, 2]
// Exports: default

// Module 13480 (GameOrganizationJoinModalScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5746 */;
import ModalScreen2 from "ModalScreen" /* 8074 */;
import ExpressiveGradient2 from "ExpressiveGradient" /* 8075 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ content: { flex: 1 } });
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalScreen.tsx");

export default function GameOrganizationJoinModalScreen(children) {
  let items;
  let items1;
  children = children.children;
  const obj = { children: items };
  const tmp = closure_6();
  const tmp2 = useSafeAreaInsetsDefault();
  const ModalScreen = ModalScreen2.ModalScreen;
  const obj2 = { color: "purple", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const ExpressiveGradient = ExpressiveGradient2.ExpressiveGradient;
  items = [React3(ExpressiveGradient, obj2), ];
  const obj3 = { style: items1, children };
  items1 = [tmp.content, { paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + tmp2.top }];
  ({ paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + tmp2.top });
  items[1] = React3(View, obj3);
  return hasOwnProperty(ModalScreen, obj);
};
