// Module ID: 10370
// Function ID: 10371
// Dependencies: [2, 9972, 10371, 10372]

// Module 10370
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9972 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 10371 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 10372 */;
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
