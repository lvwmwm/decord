// Module ID: 15328
// Function ID: 15329
// Name: DevToolsPerformanceTestingScreen
// Dependencies: [19, 17, 21, 4836, 576, 1485, 1613, 5999, 15134, 5917, 14139, 2]

// Module 15328 (DevToolsPerformanceTestingScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14139 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(function DevToolsPerformanceTestingScreen() {
  let closure_0;
  let entries;
  const tmp = closure_5();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  ({
    hasIcons: true,
    children: entries.map((item) => {
      let tmp;
      [tmp, ] = item;
      const TableRow = screenKey(dependencyMap[9]).TableRow;
      return <TableRow key={tmp} label={tmp2} icon={null} arrow onPress={function onPress() {
        const arr = screenKey;
        if (null != screenKey.push) {
          arr.push(screenKey);
        } else {
          const obj2 = { screenKey };
          const obj = DevToolsNavigator;
          obj.navigateToDevTools(obj2);
        }
      }} />;
    })
  });
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  entries = Object.entries(require("DevToolsScreens").PerformanceTestingScreens);
  return <ScrollView style={tmp.container} contentContainerStyle={{ paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 }}>{null}</ScrollView>;
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;
