// Module ID: 9444
// Function ID: 9445
// Name: BalanceWidgetPill
// Dependencies: [2, 9445, 9455, 9453, 9459]

// Module 9444 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 9445 */;
import BalanceCounter from "BalanceCounter" /* 9453 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 9455 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 9459 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
