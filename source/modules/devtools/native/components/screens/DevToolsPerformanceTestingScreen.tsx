// Module ID: 14696
// Function ID: 112058
// Dependencies: [31, 27, 33, 4130, 689, 1456, 1557, 5503, 13506, 5165, 13503, 2]

// Module 14696
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function DevToolsPerformanceTestingScreen() {
  let obj = _require(1456);
  _require = obj.useNavigation();
  obj = { style: callback().container };
  obj = { paddingBottom: importDefault(1557)().bottom + importDefault(689).space.PX_16 };
  obj.contentContainerStyle = obj;
  const obj1 = { hasIcons: true };
  const entries = Object.entries(_require(13506).PerformanceTestingScreens);
  obj1.children = entries.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    let obj = {
      label: tmp2,
      icon: outer1_4(callback(outer1_2[9]).TableRow.Icon, { IconComponent: tmp3 }),
      arrow: true,
      onPress() {
        if (null != outer1_0.push) {
          outer1_0.push(callback);
        } else {
          let obj = callback(outer2_2[10]);
          obj = { screenKey: callback };
          obj.navigateToDevTools(obj);
        }
      }
    };
    return outer1_4(callback(outer1_2[9]).TableRow, obj, tmp);
  });
  obj.children = jsx(_require(5503).TableRowGroup, { hasIcons: true });
  return <ScrollView paddingBottom={importDefault(1557)().bottom + importDefault(689).space.PX_16} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsPerformanceTestingScreen.tsx");

export default memoResult;
