// Module ID: 15990
// Function ID: 15991
// Name: render
// Dependencies: [19, 13015, 21, 15991, 1236, 15992, 15993, 4732, 2]

// Module 15990 (render)
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
    let tmp7 = importDefault(15992);
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1236).intl;
    stringResult1 = intl2.string(tmp2(1236).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = importDefault(15993);
  }
  return jsx(tmp6(4732), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const result = require("jsxProd").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
