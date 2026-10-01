// Module ID: 16744
// Function ID: 16745
// Name: VADPermission
// Dependencies: [19, 21, 16741, 5300, 1115, 2]

// Module 16744 (VADPermission)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import AlertDefault from "Alert" /* 5300 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16741 */;
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
