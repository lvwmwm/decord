// Module ID: 16426
// Function ID: 16427
// Name: PremiumRestorationAlert
// Dependencies: [19, 7501, 21, 16427, 504, 2]

// Module 16426 (PremiumRestorationAlert)
import Fragment from "Fragment" /* 21 */;
import UntouchableAlertDefault from "UntouchableAlert" /* 16427 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 7501 */;
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
