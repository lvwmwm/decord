// Module ID: 10123
// Function ID: 10124
// Name: ModalStackNavigator
// Dependencies: [19, 21, 9835, 7163, 9791, 10124, 1376, 2]

// Module 10123 (ModalStackNavigator)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import Navigator2 from "Navigator" /* 7163 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10124 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 9835 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

const jsx = Fragment.jsx;
let Navigator = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function ModalStackNavigator(render) {
  let closure_2;
  let screenKey;
  let title;
  ({ screenKey, title: require, titleIcon: importDefault } = render);
  render = render.render;
  let obj = Navigator2;
  dependencyMap = obj.useAccessibilityNativeStackOptions();
  Navigator = Navigator.Navigator;
  return <Navigator initialRouteName={screenKey} screenOptions={function screenOptions(navigation) {
    let icon;
    let obj2;
    const obj = {
      headerTitle(children) {
        children = children.children;
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const GenericHeaderTitle = require("HeaderShared").GenericHeaderTitle;
        const merged1 = Object.assign(merged);
        return <GenericHeaderTitle title={children} icon={icon} />;
      },
      headerLeft: obj2.getRenderModalCloseImage(navigation),
      headerTitleAlign: "center"
    };
    navigation = navigation.navigation;
    obj2 = HeaderShared;
    let merged = Object.assign(closure_2);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}>{null}</Navigator>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;
