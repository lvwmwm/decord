// Module ID: 16026
// Function ID: 16027
// Name: DevToolsGuildPowerupsModal
// Dependencies: [19, 21, 8161, 7247, 8110, 11195, 16027, 2]

// Module 16026 (DevToolsGuildPowerupsModal)
import HeaderShared from "HeaderShared" /* 8110 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11195 */;
import DevToolsGuildPowerupsScreenDefault from "DevToolsGuildPowerupsScreen" /* 16027 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(8161);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default noop.memo(function DevToolsGuildPowerupsModal() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[4]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  let obj = require("Navigator");
  ({ Navigator, Screen } = closure_4);
  obj2.children = <Screen name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={DevToolsGuildPowerupsScreenDefault} />;
  return <Navigator screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const merged1 = Object.assign(merged);
        return closure_1_3(closure_1_0(closure_1_2[4]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(closure_0);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}>{null}</Navigator>;
});
