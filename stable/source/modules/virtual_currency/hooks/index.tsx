// Module ID: 8312
// Function ID: 8313
// Dependencies: [2, 8313, 8320]

// Module 8312
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 8313 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 8320 */;
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
