// Module ID: 14110
// Function ID: 108540
// Name: NavigateForwardButton
// Dependencies: [31, 33, 4130, 689, 4660, 4126, 1273, 14111, 2]
// Exports: default

// Module 14110 (NavigateForwardButton)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { flexGrow: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  let onPress;
  let text;
  ({ onPress, text } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container, onPress };
  obj = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { source: importDefault(14111) };
  items[1] = callback(require(1273) /* Button */.Icon, obj);
  obj.children = items;
  return callback2(require(4660) /* PressableBase */.PressableHighlight, obj);
};
