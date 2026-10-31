// Module ID: 1502
// Function ID: 1503
// Name: CommonActions
// Dependencies: [1503, 1504, 1505, 1507, 1511, 1508]

// Module 1502 (CommonActions)
import _mod1503 from "module_1503" /* 1503 */;
import goBackAll from "goBack" /* 1504 */;
import BaseRouter from "BaseRouter" /* 1505 */;
import DrawerActions from "DrawerActions" /* 1507 */;
import TabActions from "TabActions" /* 1508 */;
import StackActions from "StackActions" /* 1511 */;

for (const key10013 in _mod1503) {
  exports[key10013] = _mod1503[key10013];
  continue;
}
const BaseRouter_export = BaseRouter.BaseRouter;
const DrawerActions_export = DrawerActions.DrawerActions;
const StackActions_export = StackActions.StackActions;
const TabActions_export = TabActions.TabActions;

export const CommonActions = goBackAll;
export { BaseRouter_export as BaseRouter };
export { DrawerActions_export as DrawerActions };
export const DrawerRouter = DrawerActions.DrawerRouter;
export { StackActions_export as StackActions };
export const StackRouter = StackActions.StackRouter;
export { TabActions_export as TabActions };
export const TabRouter = TabActions.TabRouter;
