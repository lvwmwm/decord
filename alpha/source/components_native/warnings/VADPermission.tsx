// Module ID: 18211
// Function ID: 18212
// Name: VADPermission
// Dependencies: [19, 21, 18208, 5958, 1128, 2]

// Module 18211 (VADPermission)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1128 */;
import AlertDefault from "Alert" /* 5958 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 18208 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const Component = react.Component;
class VADPermission extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.close = function close() {
      const obj = PermissionActionCreatorsDefault;
      obj.clearVADWarning();
    };
    return applyArgumentsResult;
  }
  render() {
    AlertDefault;
    const intl = intl3.intl;
    const intl2 = intl3.intl;
    return <tmp title={intl.string(intl3.t.NYklhr)} body={intl2.string(intl3.t.EJ26Oh)} onConfirm={this.close} />;
  }
}
const prototype = VADPermission.prototype;
const result = size.fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default VADPermission;
