// Module ID: 12388
// Function ID: 96242
// Name: LargeCountDownPill
// Dependencies: [27, 33, 4130, 689, 3831, 1212, 4086, 4126, 2]
// Exports: default

// Module 12388 (LargeCountDownPill)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
({ TouchableOpacity: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
obj.largeCountdownPill = obj;
let obj1 = { paddingVertical: 8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
obj.largeCountdownPillText = obj1;
obj.iconStyle = { width: 16, height: 16 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  const tmp = callback3();
  const require = tmp;
  let obj = {
    onPress() {
      let obj = outer1_1(outer1_2[4]);
      obj = { key: "LARGE_COUNTDOWN_PILL_TOAST" };
      const intl = tmp(outer1_2[5]).intl;
      obj.content = intl.string(tmp(outer1_2[5]).t["Mv4E/M"]);
      obj.icon = function icon() {
        const obj = { style: outer1_0.iconStyle, color: outer2_1(outer2_2[3]).colors.STATUS_WARNING };
        return outer2_5(callback(outer2_2[6]).CircleInformationIcon, obj);
      };
      obj.iconColor = outer1_1(outer1_2[3]).colors.STATUS_WARNING;
      obj.open(obj);
    }
  };
  obj = { style: tmp.largeCountdownPill };
  obj = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { style: tmp.iconStyle, color: importDefault(689).colors.TEXT_STATUS_IDLE };
  items[1] = callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj1);
  obj.children = items;
  obj.children = callback2(closure_4, obj);
  return callback(closure_3, obj);
};
