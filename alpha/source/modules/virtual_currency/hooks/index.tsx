// Module ID: 9566
// Function ID: 9567
// Dependencies: [2, 9428, 9567, 9568]

// Module 9566
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9428 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 9567 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 9568 */;
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
