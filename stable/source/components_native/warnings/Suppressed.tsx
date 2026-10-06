// Module ID: 16742
// Function ID: 16743
// Name: Suppressed
// Dependencies: [19, 13297, 21, 16743, 1127, 16744, 16745, 5301, 2]

// Module 16742 (Suppressed)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1127 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16743 */;
import AssetRegistryDefault from "AssetRegistry" /* 16744 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16745 */;
import react from "react" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13297 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const Component = react.Component;
class Suppressed extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.close = function close() {
      const obj = PermissionActionCreatorsDefault;
      obj.clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
  render() {
    let stringResult;
    let stringResult1;
    let tmp6;
    let tmp7;
    const isAFKChannelResult = PermissionSpeakStore.isAFKChannel();
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (isAFKChannelResult) {
      stringResult = string(t.KuYcnU);
      const intl3 = tmp2(1127).intl;
      stringResult1 = intl3.string(tmp2(1127).t["RaFZ3+"]);
      tmp7 = AssetRegistryDefault;
      tmp6 = importDefault;
    } else {
      stringResult = string(t.FJSZVM);
      const intl2 = tmp2(1127).intl;
      stringResult1 = intl2.string(tmp2(1127).t.etJjgW);
      tmp6 = importDefault;
      tmp7 = AssetRegistryDefault2;
    }
    return jsx(tmp6(5301), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
  }
}
const prototype = Suppressed.prototype;
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
