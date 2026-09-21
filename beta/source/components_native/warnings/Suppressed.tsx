// Module ID: 17389
// Function ID: 17390
// Name: Suppressed
// Dependencies: [19, 14023, 21, 17390, 1119, 17391, 17392, 5207, 2]

// Module 17389 (Suppressed)
import util from "util" /* 1119 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 17390 */;
import _modDef17391 from "module_17391" /* 17391 */;
import _modDef17392 from "module_17392" /* 17392 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 14023 */;

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
    const intl3 = tmp2(1119).intl;
    let stringResult1 = intl3.string(tmp2(1119).t["RaFZ3+"]);
    let tmp7 = _modDef17391;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1119).intl;
    stringResult1 = intl2.string(tmp2(1119).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef17392;
  }
  return jsx(tmp6(5207), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
