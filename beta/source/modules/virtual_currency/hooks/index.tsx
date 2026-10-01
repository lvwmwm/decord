// Module ID: 8315
// Function ID: 8316
// Dependencies: [2, 8316, 8323]

// Module 8315
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 8316 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 8323 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/hooks/index.tsx");
for (const key10018 in useFetchVirtualCurrencyBalance) {
  exports[key10018] = useFetchVirtualCurrencyBalance[key10018];
  continue;
}
for (const key10022 in useRedeemVirtualCurrency) {
  exports[key10022] = useRedeemVirtualCurrency[key10022];
  continue;
}
