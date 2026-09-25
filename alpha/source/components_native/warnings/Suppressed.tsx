// Module ID: 16707
// Function ID: 16708
// Name: Suppressed
// Dependencies: [19, 13279, 21, 16708, 1115, 16709, 16710, 5293, 2]

// Module 16707 (Suppressed)
import util from "util" /* 1115 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16708 */;
import _modDef16709 from "module_16709" /* 16709 */;
import _modDef16710 from "module_16710" /* 16710 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13279 */;

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
    let tmp7 = _modDef16709;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1115).intl;
    stringResult1 = intl2.string(tmp2(1115).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef16710;
  }
  return jsx(tmp6(5293), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
