// Module ID: 16083
// Function ID: 16084
// Name: render
// Dependencies: [19, 13097, 21, 16084, 1236, 16085, 16086, 4795, 2]

// Module 16083 (render)
import initialize from "initialize";
import { jsx } from "jsxProd";
import { Component } from "noop";
import importAllResult from "noop";

const require = arg1;
class Suppressed extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      callback(table[3]).clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
}
Suppressed.prototype["render"] = function render() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (isAFKChannelResult) {
    let stringResult = string(t.KuYcnU);
    const intl3 = tmp2(1236).intl;
    let stringResult1 = intl3.string(tmp2(1236).t["RaFZ3+"]);
    let tmp7 = importDefault(16085);
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1236).intl;
    stringResult1 = intl2.string(tmp2(1236).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = importDefault(16086);
  }
  return jsx(tmp6(4795), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const result = require("jsxProd").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
