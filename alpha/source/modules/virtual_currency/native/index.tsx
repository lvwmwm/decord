// Module ID: 9313
// Function ID: 9314
// Name: BalanceWidgetPill
// Dependencies: [2, 9314, 9324, 9322, 9325]

// Module 9313 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 9314 */;
import BalanceCounter from "BalanceCounter" /* 9322 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 9324 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 9325 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
