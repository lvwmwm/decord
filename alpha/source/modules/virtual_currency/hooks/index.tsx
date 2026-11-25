// Module ID: 11210
// Function ID: 11211
// Dependencies: [2, 9398, 11211, 11212]

// Module 11210
import useFetchVirtualCurrencyBalance from "useFetchVirtualCurrencyBalance" /* 9398 */;
import useFetchVirtualCurrencyTotalRedeemed from "useFetchVirtualCurrencyTotalRedeemed" /* 11211 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 11212 */;
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
