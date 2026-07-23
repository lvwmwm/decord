// Module ID: 11336
// Function ID: 88175
// Name: PollCreationInputError
// Dependencies: [31, 27, 33, 4130, 689, 3843, 1273, 4126, 2]
// Exports: default

// Module 11336 (PollCreationInputError)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "row", alignItems: "center", marginTop: -10 } };
_createForOfIteratorHelperLoose = { alignSelf: "center", marginRight: 5, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/polls/native/PollCreationInputError.tsx");

export default function PollCreationInputError(message) {
  message = message.message;
  let tmp = _createForOfIteratorHelperLoose();
  const items = [message];
  const effect = React.useEffect(() => {
    let tmp = null != message;
    if (tmp) {
      tmp = "" !== message;
    }
    if (tmp) {
      const AccessibilityAnnouncer = message(outer1_1[5]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(message);
    }
  }, items);
  let obj = { style: tmp.container };
  obj = { width: 16, height: 16, style: tmp.icon };
  const items1 = [callback(message(1273).WarningCircle, obj), ];
  obj = { variant: "text-xs/medium", color: "text-feedback-critical", children: message };
  items1[1] = callback(message(4126).Text, obj);
  obj.children = items1;
  return callback2(View, obj);
};
