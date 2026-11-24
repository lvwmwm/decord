// Module ID: 9433
// Function ID: 9434
// Name: BalanceWidgetPill
// Dependencies: [2, 9434, 9444, 9442, 9445]

// Module 9433 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 9434 */;
import BalanceCounter from "BalanceCounter" /* 9442 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 9444 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 9445 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
