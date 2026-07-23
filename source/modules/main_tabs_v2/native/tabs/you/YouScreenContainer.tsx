// Module ID: 15470
// Function ID: 119091
// Dependencies: [31, 27, 8772, 33, 4130, 689, 1557, 14799, 1450, 3984, 15471, 478, 2]

// Module 15470
import { View } from "get ActivityIndicator";
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
obj.container = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, borderRadius: require("_createForOfIteratorHelperLoose").radii.none };
obj.androidContainer = _createForOfIteratorHelperLoose;
let obj2 = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, overflow: "hidden" };
obj.wrapper = obj2;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function YouScreenContainer(route) {
  route = route.route;
  let tmp = callback();
  let obj = require(14799) /* trackForScreen */;
  const trackTabPerformance = obj.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (null != route) {
    const params = route.params;
    if (null != params) {
      const initialTab = params.initialTab;
    }
  }
  if (importDefault(3984)().isChatBesideChannelList) {
    obj = {};
    const items = [tmp.container, ];
    let obj3 = require(478) /* isWindows */;
    let tmp9;
    if (obj3.isAndroid()) {
      obj = {};
      const merged = Object.assign(tmp.androidContainer);
      obj["paddingTop"] = importDefault(1557)().top;
      tmp9 = obj;
    }
    items[1] = tmp9;
    obj.style = items;
    let obj5 = require(478) /* isWindows */;
    if (obj5.isAndroid()) {
      const obj1 = {};
      const items1 = [tmp.wrapper, ];
      const obj2 = { maxWidth: 0.6 * importDefault(1450)().width };
      items1[1] = obj2;
      obj1.style = items1;
      tmp = importDefault(15471);
      obj3 = { initialTab };
      obj1.children = tmp14(tmp, obj3);
      let tmp14Result = tmp14(View, obj1);
    } else {
      const obj4 = { initialTab };
      tmp14Result = tmp14(importDefault(15471), obj4);
    }
    obj.children = tmp14Result;
    tmp3(View, obj);
    const tmp6 = View;
  } else {
    obj5 = { initialTab };
    return tmp3(importDefault(15471), obj5);
  }
});
const result = require("MODE_CHANGE_PHYSICS").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;
