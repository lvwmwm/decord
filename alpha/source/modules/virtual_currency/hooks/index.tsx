// Module ID: 9531
// Function ID: 9532
// Dependencies: [2, 9532, 9536, 9537]

// Module 9531
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9532 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 9536 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 9537 */;
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
