// Module ID: 16657
// Function ID: 16658
// Name: PremiumRestorationAlert
// Dependencies: [19, 8851, 21, 16658, 504, 2]

// Module 16657 (PremiumRestorationAlert)
import Fragment from "Fragment" /* 21 */;
import UntouchableAlertDefault from "UntouchableAlert" /* 16658 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 8851 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const PureComponent = react.PureComponent;
class PremiumRestorationAlert extends PureComponent {
  render() {
    let isBusy;
    let onClose;
    ({ isBusy, onClose } = this.props);
    return jsx(UntouchableAlertDefault, { loading, onClose });
  }
}
const prototype = PremiumRestorationAlert.prototype;
const items = [IAPStore];
const tmp4 = get_initialized.connectStores(items, () => {
  const obj = { isBusy: IAPStore.isBusy() };
  return obj;
})(PremiumRestorationAlert);
const result = size.fileFinishedImporting("modules/premium/native/PremiumRestorationAlert.tsx");

export default tmp4;
