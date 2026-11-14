// Module ID: 10437
// Function ID: 10438
// Dependencies: [2, 10038, 10438, 10439]

// Module 10437
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 10038 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 10438 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 10439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/hooks/index.tsx");
for (const key10018 in useFetchVirtualCurrencyBalance) {
  exports[key10018] = useFetchVirtualCurrencyBalance[key10018];
  continue;
}
for (const key10022 in useFetchVirtualCurrencyTotalRedeemed) {
  exports[key10022] = useFetchVirtualCurrencyTotalRedeemed[key10022];
  continue;
}
for (const key10026 in useRedeemVirtualCurrency) {
  exports[key10026] = useRedeemVirtualCurrency[key10026];
  continue;
}
