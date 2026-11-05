// Module ID: 10329
// Function ID: 10330
// Name: ModalStackNavigator
// Dependencies: [19, 21, 10041, 7309, 9967, 10330, 1377, 2]

// Module 10329 (ModalStackNavigator)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import Navigator2 from "Navigator" /* 7309 */;
import HeaderShared from "HeaderShared" /* 9967 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10330 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 10041 */;
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
