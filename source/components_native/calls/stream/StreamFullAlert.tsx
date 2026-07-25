// Module ID: 16606
// Function ID: 129542
// Name: StreamFullAlert
// Dependencies: [31, 27, 33, 8784, 1212, 4562, 4127, 16607, 2]
// Exports: default

// Module 16606 (StreamFullAlert)
import "result";
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const result = require("jsxProd").fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default function StreamFullAlert(arg0) {
  let obj = require(8784) /* validateUniqueErrorCodes */;
  const errorInfo = obj.getErrorInfo(require(8784) /* validateUniqueErrorCodes */.AVError.STREAM_FULL);
  let errorCode;
  if (null != errorInfo) {
    errorCode = errorInfo.errorCode;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { errorCode };
  obj = {};
  const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.ejOT95, obj);
  const merged = Object.assign(arg0);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["title"] = intl2.string(require(1212) /* getSystemLocale */.t.GzjdO5);
  const obj1 = { variant: "text-md/normal", style: closure_6.body };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl3.string(require(1212) /* getSystemLocale */.t.VVZDBL);
  const items = [callback(require(4127) /* Text */.Text, obj1), , ];
  const obj2 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  items[1] = callback(require(4127) /* Text */.Text, obj2);
  const tmp4 = importDefault(4562);
  items[2] = callback(Image, { source: importDefault(16607), style: closure_6.image });
  obj["children"] = items;
  return callback2(tmp4, obj);
};
