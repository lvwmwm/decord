// Module ID: 11257
// Function ID: 11258
// Dependencies: [2, 9441, 11258, 11259]

// Module 11257
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9441 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 11258 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 11259 */;
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
