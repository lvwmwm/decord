// Module ID: 15058
// Function ID: 15059
// Name: PremiumRestorationAlert
// Dependencies: [19, 6739, 21, 15059, 504, 2]

// Module 15058 (PremiumRestorationAlert)
import Fragment from "Fragment" /* 21 */;
import UntouchableAlertDefault from "UntouchableAlert" /* 15059 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6739 */;
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
const result = size.fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;
