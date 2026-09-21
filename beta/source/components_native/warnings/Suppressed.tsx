// Module ID: 17386
// Function ID: 17387
// Name: Suppressed
// Dependencies: [19, 14020, 21, 17387, 1115, 17388, 17389, 5205, 2]

// Module 17386 (Suppressed)
import util from "util" /* 1115 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 17387 */;
import _modDef17388 from "module_17388" /* 17388 */;
import _modDef17389 from "module_17389" /* 17389 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 14020 */;

require = fn;
const jsx = fn(21).jsx;
const Component = noop.Component;
class Suppressed extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      PermissionActionCreatorsDefault.clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
}
Suppressed.prototype["render"] = function render() {
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAFKChannelResult) {
    let stringResult = string(t.KuYcnU);
    const intl3 = tmp2(1115).intl;
    let stringResult1 = intl3.string(tmp2(1115).t["RaFZ3+"]);
    let tmp7 = _modDef17388;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1115).intl;
    stringResult1 = intl2.string(tmp2(1115).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef17389;
  }
  return jsx(tmp6(5205), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
