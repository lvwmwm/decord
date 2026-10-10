// Module ID: 17629
// Function ID: 17630
// Name: VADPermission
// Dependencies: [19, 21, 17626, 5398, 1126, 2]

// Module 17629 (VADPermission)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import AlertDefault from "Alert" /* 5398 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 17626 */;
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
