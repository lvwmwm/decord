// Module ID: 10043
// Function ID: 10044
// Name: BalanceWidgetPill
// Dependencies: [2, 10044, 10054, 10052, 10055]

// Module 10043 (BalanceWidgetPill)
import virtual_currency_BalanceWidgetPill from "virtual_currency/BalanceWidgetPill" /* 10044 */;
import BalanceCounter from "BalanceCounter" /* 10052 */;
import BalanceWidgetPillButton from "BalanceWidgetPillButton" /* 10054 */;
import BalanceWidgetActionSheetDefault from "BalanceWidgetActionSheet" /* 10055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/virtual_currency/native/index.tsx");
const BalanceWidgetPillButton_export = BalanceWidgetPillButton.BalanceWidgetPillButton;
const BalanceCounter_export = BalanceCounter.BalanceCounter;

export const BalanceWidgetPill = virtual_currency_BalanceWidgetPill.BalanceWidgetPill;
export { BalanceWidgetPillButton_export as BalanceWidgetPillButton };
export { BalanceCounter_export as BalanceCounter };
export const BalanceWidgetActionSheet = BalanceWidgetActionSheetDefault;
