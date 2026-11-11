// Module ID: 9346
// Function ID: 9347
// Name: useMaybeFetchPromotionsForApplication
// Dependencies: [19, 9347, 2]
// Exports: default

// Module 9346 (useMaybeFetchPromotionsForApplication)
import StorefrontActionCreators from "StorefrontActionCreators" /* 9347 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/storefront/hooks/useMaybeFetchPromotionsForApplication.tsx");

export default function useMaybeFetchPromotionsForApplication(arg0) {
  let closure_0 = arg0;
  let items = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const items = [tmp];
      const obj = StorefrontActionCreators;
      const result = obj.maybeFetchStorefrontPromotions(items);
    }
  }, items);
};
