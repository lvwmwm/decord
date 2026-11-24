// Module ID: 9302
// Function ID: 9303
// Name: BalanceWidgetPill
// Dependencies: [2, 9303, 9313, 9311, 9317]

// Module 9302 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 9303 */;
import BalanceCounter from "BalanceCounter" /* 9311 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 9313 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 9317 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
