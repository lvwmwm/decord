// Module ID: 5806
// Function ID: 49668
// Name: GiftCardMobileConsumptionActionSheet
// Dependencies: [31, 27, 1345, 33, 4130, 689, 1557, 4098, 5187, 4541, 5807, 4126, 1212, 2002, 4543, 2]
// Exports: default

// Module 5806 (GiftCardMobileConsumptionActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.sheet = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { alignSelf: "stretch", alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.illustration = obj2;
_createForOfIteratorHelperLoose.body = { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = React.useRef(false);
  const dependencyMap = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!outer1_1.current) {
      outer1_2.current(outer2_5.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  React = React.useCallback((arg0) => {
    if (!ref.current) {
      ref.current = true;
      markAsDismissed(arg0);
      ref(table[7]).hideActionSheet();
      const obj = ref(table[7]);
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return callback(outer1_5.USER_DISMISS);
    }
  };
  obj = { style: items2 };
  items2 = [tmp.container, { paddingBottom: importDefault(1557)().bottom }];
  obj = { spacing: importDefault(689).space.PX_16 };
  const items3 = [callback(View, { style: tmp.illustration, children: callback(markAsDismissed(5807).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) }), , ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.body };
  const intl = markAsDismissed(1212).intl;
  obj2.children = intl.string(importDefault(2002).V3DI1E);
  items3[1] = callback(markAsDismissed(4126).Text, obj2);
  const obj3 = { size: "lg", variant: "secondary", grow: true };
  const intl2 = markAsDismissed(1212).intl;
  obj3.text = intl2.string(importDefault(2002).YZePWx);
  obj3.onPress = function onPress() {
    return callback(outer1_5.USER_DISMISS);
  };
  items3[2] = callback(markAsDismissed(4543).Button, obj3);
  obj.children = items3;
  obj.children = callback2(markAsDismissed(4541).Stack, obj);
  obj.children = callback(View, obj);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
