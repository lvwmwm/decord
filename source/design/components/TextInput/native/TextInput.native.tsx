// Module ID: 7574
// Function ID: 60373
// Name: TextInput
// Dependencies: [31, 33, 7575, 5773, 477, 2]

// Module 7574 (TextInput)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const forwardRefResult = importAllResult.forwardRef((errorMessage, ref) => {
  let accessibilityLabel;
  let label;
  let status;
  ({ label, accessibilityLabel, status } = errorMessage);
  const id = importAllResult.useId();
  if (null == status) {
    let str;
    if (null != errorMessage.errorMessage) {
      str = "error";
    }
    status = str;
  }
  let obj = {};
  const merged = Object.assign(errorMessage);
  let tmp4;
  if (null != label) {
    tmp4 = id;
  }
  obj["labelId"] = tmp4;
  obj = { ref };
  const merged1 = Object.assign(errorMessage);
  obj["status"] = status;
  if (!obj3.isAndroid()) {
    if (null == accessibilityLabel) {
      let tmp8;
      if ("string" === typeof label) {
        tmp8 = label;
      }
      accessibilityLabel = tmp8;
    }
    const tmp7 = accessibilityLabel;
  }
  obj["accessibilityLabel"] = tmp7;
  let tmp9;
  if (null != label) {
    tmp9 = id;
  }
  obj["accessibilityLabelledBy"] = tmp9;
  obj["children"] = jsx(require(5773) /* TextField */.TextField, { ref });
  return jsx(require(7575) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = forwardRefResult;
