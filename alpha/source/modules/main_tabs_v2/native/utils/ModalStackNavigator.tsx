// Module ID: 11270
// Function ID: 11271
// Name: ModalStackNavigator
// Dependencies: [19, 21, 8243, 7331, 8192, 11271, 1364, 2]

// Module 11270 (ModalStackNavigator)
import Navigator from "Navigator" /* 7331 */;
import HeaderShared from "HeaderShared" /* 8192 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11271 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(8243);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default noop.memo(function ModalStackNavigator(children) {
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  dependencyMap = Navigator.useAccessibilityNativeStackOptions();
  const obj2 = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return jsx(title(closure_2[4]).GenericHeaderTitle, { title: children.children, icon });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_2);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: <closure_4.Screen name={screenKey} options={function options() {
      const obj = { title, orientation: null };
      let str;
      if (obj2.isIOS()) {
        str = "portrait";
      }
      obj.orientation = str;
      return obj;
    }}>{arg0.render}</closure_4.Screen>
  };
  return <closure_4.Navigator initialRouteName={screenKey} screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const merged1 = Object.assign(merged);
        return jsx(title(closure_2[4]).GenericHeaderTitle, { title: children.children, icon });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(closure_2);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}><closure_4.Screen name={screenKey} options={function options() {
    const obj = { title, orientation: null };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj.orientation = str;
    return obj;
  }}>{arg0.render}</closure_4.Screen></closure_4.Navigator>;
});
