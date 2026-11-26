// Module ID: 11256
// Function ID: 11257
// Dependencies: [2, 9440, 11257, 11258]

// Module 11256
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9440 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 11257 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 11258 */;
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
