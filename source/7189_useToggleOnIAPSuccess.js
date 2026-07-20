// Module ID: 7189
// Function ID: 57885
// Name: useToggleOnIAPSuccess
// Dependencies: []
// Exports: default

// Module 7189 (useToggleOnIAPSuccess)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/billing/native/subscription/useToggleOnIAPSuccess.tsx");

export default function useToggleOnIAPSuccess() {
  let tmp2;
  function toggleFlip() {
    callback((arg0) => !arg0);
  }
  [tmp2, closure_0] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const subscription = callback(toggleFlip[2]).subscribe("IAP_PURCHASE_PRODUCT_SUCCESS", toggleFlip);
    return () => {
      callback(closure_1[2]).unsubscribe("IAP_PURCHASE_PRODUCT_SUCCESS", closure_1);
    };
  }, []);
  return tmp2;
};
