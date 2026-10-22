// Module ID: 13902
// Function ID: 13903
// Name: BalanceWidgetPill
// Dependencies: [2, 13903, 13912, 13910, 13913]

// Module 13902 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 13903 */;
import BalanceCounter from "BalanceCounter" /* 13910 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 13912 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 13913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
