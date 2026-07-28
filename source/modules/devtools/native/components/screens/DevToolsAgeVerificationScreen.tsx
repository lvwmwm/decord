// Module ID: 14784
// Function ID: 112550
// Name: showAgeVerificationTestModal
// Dependencies: [5, 31, 27, 33, 4165, 689, 6733, 6726, 3866, 6728, 1557, 5536, 5198, 9182, 5205, 2]
// Exports: default

// Module 14784 (showAgeVerificationTestModal)
import closure_3 from "_createForOfIteratorHelperLoose";
import "result";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function showAgeVerificationTestModal() {
  return _showAgeVerificationTestModal(...arguments);
}
function _showAgeVerificationTestModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default function DevToolsAgeVerificationScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  const items = [tmp.content, ];
  obj = { paddingBottom: tmp.content.padding + importDefault(1557)().bottom };
  items[1] = obj;
  obj.contentContainerStyle = items;
  obj = { title: "Quick Actions", hasIcons: true };
  const obj1 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: callback2(require(9182) /* KeyIcon */.KeyIcon, {}), trailing: callback2(require(5205) /* TableRowArrow */.TableRowArrow, {}) };
  const items1 = [callback2(require(5198) /* TableRowInner */.TableRow, obj1), ];
  const obj2 = {
    label: "Launch Age Verification Modal",
    onPress() {
      let obj = outer1_1(outer1_2[7]);
      obj = { entryPoint: outer1_0(outer1_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
    icon: callback2(require(9182) /* KeyIcon */.KeyIcon, {}),
    trailing: callback2(require(5205) /* TableRowArrow */.TableRowArrow, {})
  };
  items1[1] = callback2(require(5198) /* TableRowInner */.TableRow, obj2);
  obj.children = items1;
  obj.children = callback3(require(5536) /* TableRowGroupTitle */.TableRowGroup, obj);
  return callback2(ScrollView, obj);
};
