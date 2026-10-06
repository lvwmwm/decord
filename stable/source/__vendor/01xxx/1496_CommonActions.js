// Module ID: 1496
// Function ID: 1497
// Name: CommonActions
// Dependencies: [1497, 1498, 1499, 1501, 1505, 1502]

// Module 1496 (CommonActions)
import _mod1497 from "module_1497" /* 1497 */;
import goBackAll from "goBack" /* 1498 */;
import BaseRouter from "BaseRouter" /* 1499 */;
import DrawerActions from "DrawerActions" /* 1501 */;
import TabActions from "TabActions" /* 1502 */;
import StackActions from "StackActions" /* 1505 */;

for (const key10013 in _mod1497) {
  exports[key10013] = _mod1497[key10013];
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
