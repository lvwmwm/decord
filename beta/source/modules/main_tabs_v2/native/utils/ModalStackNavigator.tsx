// Module ID: 10542
// Function ID: 10543
// Name: ModalStackNavigator
// Dependencies: [19, 21, 8638, 7092, 8561, 10543, 1378, 2]

// Module 10542 (ModalStackNavigator)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import Navigator2 from "Navigator" /* 7092 */;
import HeaderShared from "HeaderShared" /* 8561 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10543 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 8638 */;
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
