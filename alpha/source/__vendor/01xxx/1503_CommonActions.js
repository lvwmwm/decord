// Module ID: 1503
// Function ID: 1504
// Name: CommonActions
// Dependencies: [1504, 1505, 1506, 1508, 1512, 1509]

// Module 1503 (CommonActions)
import _mod1504 from "module_1504" /* 1504 */;
import goBackAll from "goBack" /* 1505 */;
import BaseRouter from "BaseRouter" /* 1506 */;
import DrawerActions from "DrawerActions" /* 1508 */;
import TabActions from "TabActions" /* 1509 */;
import StackActions from "StackActions" /* 1512 */;

for (const key10013 in _mod1504) {
  exports[key10013] = _mod1504[key10013];
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
