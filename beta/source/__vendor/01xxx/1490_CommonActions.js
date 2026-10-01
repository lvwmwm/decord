// Module ID: 1490
// Function ID: 1491
// Name: CommonActions
// Dependencies: [1491, 1492, 1493, 1495, 1499, 1496]

// Module 1490 (CommonActions)
import _mod1491 from "module_1491" /* 1491 */;
import goBackAll from "goBack" /* 1492 */;
import BaseRouter from "BaseRouter" /* 1493 */;
import DrawerActions from "DrawerActions" /* 1495 */;
import TabActions from "TabActions" /* 1496 */;
import StackActions from "StackActions" /* 1499 */;

for (const key10013 in _mod1491) {
  exports[key10013] = _mod1491[key10013];
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
