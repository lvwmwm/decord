// Module ID: 7199
// Function ID: 57953
// Name: useToggleOnIAPSuccess
// Dependencies: [57, 31, 686, 2]
// Exports: default

// Module 7199 (useToggleOnIAPSuccess)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("dispatcher").fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  let importDefault;
  let tmp2;
  function toggleFlip() {
    callback((arg0) => !arg0);
  }
  [tmp2, importDefault] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const subscription = outer1_0(toggleFlip[2]).subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      outer2_0(toggleFlip[2]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", outer1_1);
    };
  }, []);
  return tmp2;
};
