// Module ID: 9975
// Function ID: 77113
// Name: ContextMenuSubmenuActionSheetHeader
// Dependencies: [31, 27, 33, 4130, 8434, 1212, 2]
// Exports: default

// Module 9975 (ContextMenuSubmenuActionSheetHeader)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ headerContainer: { paddingVertical: 12, paddingHorizontal: 16, alignItems: "flex-start" } });
const result = require("jsxProd").fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  let obj = { style: callback().headerContainer };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  if (null == fn) {
    fn = () => {

    };
  }
  obj.onPress = fn;
  obj.children = jsx(require(8434) /* ActionSheetHeaderPressableText */.ActionSheetHeaderPressableText, {});
  return <View />;
};
