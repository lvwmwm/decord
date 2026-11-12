// Module ID: 10368
// Function ID: 10369
// Dependencies: [2, 9971, 10369, 10370]

// Module 10368
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9971 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 10369 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 10370 */;
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
