// Module ID: 16740
// Function ID: 16741
// Name: Suppressed
// Dependencies: [19, 13295, 21, 16741, 1115, 16742, 16743, 5300, 2]

// Module 16740 (Suppressed)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16741 */;
import AssetRegistryDefault from "AssetRegistry" /* 16742 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16743 */;
import react from "react" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13295 */;
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
      const intl3 = tmp2(1115).intl;
      stringResult1 = intl3.string(tmp2(1115).t["RaFZ3+"]);
      tmp7 = AssetRegistryDefault;
      tmp6 = importDefault;
    } else {
      stringResult = string(t.FJSZVM);
      const intl2 = tmp2(1115).intl;
      stringResult1 = intl2.string(tmp2(1115).t.etJjgW);
      tmp6 = importDefault;
      tmp7 = AssetRegistryDefault2;
    }
    return jsx(tmp6(5300), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
  }
}
const prototype = Suppressed.prototype;
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
