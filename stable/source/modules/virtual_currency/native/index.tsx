// Module ID: 13720
// Function ID: 13721
// Name: BalanceWidgetPill
// Dependencies: [2, 13721, 13730, 13728, 13731]

// Module 13720 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 13721 */;
import BalanceCounter from "BalanceCounter" /* 13728 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 13730 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 13731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
