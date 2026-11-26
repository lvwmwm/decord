// Module ID: 9443
// Function ID: 9444
// Name: BalanceWidgetPill
// Dependencies: [2, 9444, 9454, 9452, 9458]

// Module 9443 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 9444 */;
import BalanceCounter from "BalanceCounter" /* 9452 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 9454 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 9458 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
