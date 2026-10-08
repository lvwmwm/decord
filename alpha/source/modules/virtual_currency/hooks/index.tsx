// Module ID: 9026
// Function ID: 9027
// Dependencies: [2, 9027, 9033, 9034]

// Module 9026
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9027 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 9033 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 9034 */;
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
