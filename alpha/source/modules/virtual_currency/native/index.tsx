// Module ID: 10056
// Function ID: 10057
// Name: BalanceWidgetPill
// Dependencies: [2, 10057, 10067, 10065, 10068]

// Module 10056 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 10057 */;
import BalanceCounter from "BalanceCounter" /* 10065 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 10067 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 10068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
