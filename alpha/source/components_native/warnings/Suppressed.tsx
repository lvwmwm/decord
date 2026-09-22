// Module ID: 17398
// Function ID: 17399
// Name: Suppressed
// Dependencies: [19, 14028, 21, 17399, 1115, 17400, 17401, 5206, 2]

// Module 17398 (Suppressed)
import util from "util" /* 1115 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 17399 */;
import _modDef17400 from "module_17400" /* 17400 */;
import _modDef17401 from "module_17401" /* 17401 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 14028 */;

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
    let tmp7 = _modDef17400;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1115).intl;
    stringResult1 = intl2.string(tmp2(1115).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef17401;
  }
  return jsx(tmp6(5206), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
