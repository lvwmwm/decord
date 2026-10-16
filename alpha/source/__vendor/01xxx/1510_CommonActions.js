// Module ID: 1510
// Function ID: 1511
// Name: CommonActions
// Dependencies: [1511, 1512, 1513, 1515, 1519, 1516]

// Module 1510 (CommonActions)
import _mod1511 from "module_1511" /* 1511 */;
import goBackAll from "goBack" /* 1512 */;
import BaseRouter from "BaseRouter" /* 1513 */;
import DrawerActions from "DrawerActions" /* 1515 */;
import TabActions from "TabActions" /* 1516 */;
import StackActions from "StackActions" /* 1519 */;

for (const key10013 in _mod1511) {
  exports[key10013] = _mod1511[key10013];
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
