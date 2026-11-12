// Module ID: 9976
// Function ID: 9977
// Name: BalanceWidgetPill
// Dependencies: [2, 9977, 9987, 9985, 9988]

// Module 9976 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 9977 */;
import BalanceCounter from "BalanceCounter" /* 9985 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 9987 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 9988 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
