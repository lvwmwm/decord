// Module ID: 18348
// Function ID: 18349
// Name: DevToolsGuildTagBadgesModal
// Dependencies: [19, 21, 9128, 7490, 9051, 10908, 18349, 2]

// Module 18348 (DevToolsGuildTagBadgesModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 9051 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10908 */;
import DevToolsGuildTagBadgesScreenDefault from "DevToolsGuildTagBadgesScreen" /* 18349 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 9128 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_4 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function DevToolsGuildTagBadgesModal() {
  let Navigator;
  let Screen;
  let closure_0;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  ({ Navigator, Screen } = closure_4);
  ({
    name: "DevToolsGuildTagBadges",
    options() {
      return { title: "Guild Tag Badges" };
    },
    component: DevToolsGuildTagBadgesScreenDefault
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
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesModal.tsx");

export default memoResult;
