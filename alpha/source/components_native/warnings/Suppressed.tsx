// Module ID: 17467
// Function ID: 17468
// Name: Suppressed
// Dependencies: [19, 14109, 21, 17468, 1115, 17469, 17470, 5290, 2]

// Module 17467 (Suppressed)
import util from "util" /* 1115 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 17468 */;
import _modDef17469 from "module_17469" /* 17469 */;
import _modDef17470 from "module_17470" /* 17470 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 14109 */;

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
    let tmp7 = _modDef17469;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1115).intl;
    stringResult1 = intl2.string(tmp2(1115).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef17470;
  }
  return jsx(tmp6(5290), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
