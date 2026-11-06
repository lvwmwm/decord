// Module ID: 17980
// Function ID: 17981
// Name: DevToolsGuildPowerupsModal
// Dependencies: [19, 21, 9992, 7256, 9918, 10282, 17981, 2]

// Module 17980 (DevToolsGuildPowerupsModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 9918 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10282 */;
import DevToolsGuildPowerupsScreenDefault from "DevToolsGuildPowerupsScreen" /* 17981 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 9992 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_4 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function DevToolsGuildPowerupsModal() {
  let Navigator;
  let Screen;
  let closure_0;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  ({ Navigator, Screen } = closure_4);
  ({
    name: "DevToolsGuildPowerups",
    options() {
      return { title: "Guild Powerups" };
    },
    component: DevToolsGuildPowerupsScreenDefault
  });
  return <Navigator screenOptions={function screenOptions(navigation) {
    let obj2;
    let obj = {
      headerTitle(children) {
        children = children.children;
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const obj = { title: children };
        const GenericHeaderTitle = closure_1_0(closure_1_2[4]).GenericHeaderTitle;
        const merged1 = Object.assign(merged);
        return closure_1_3(GenericHeaderTitle, obj);
      },
      headerLeft: obj2.getRenderModalCloseImage(navigation),
      headerTitleAlign: "center"
    };
    navigation = navigation.navigation;
    obj2 = HeaderShared;
    let merged = Object.assign(closure_0);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}>{null}</Navigator>;
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default memoResult;
