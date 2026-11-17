// Module ID: 10187
// Function ID: 10188
// Dependencies: [2, 10051, 10188, 10189]

// Module 10187
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 10051 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 10188 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 10189 */;
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
