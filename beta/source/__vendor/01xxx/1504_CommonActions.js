// Module ID: 1504
// Function ID: 1505
// Name: CommonActions
// Dependencies: [1505, 1506, 1507, 1509, 1513, 1510]

// Module 1504 (CommonActions)
import _mod1505 from "module_1505" /* 1505 */;
import goBackAll from "goBack" /* 1506 */;
import BaseRouter from "BaseRouter" /* 1507 */;
import DrawerActions from "DrawerActions" /* 1509 */;
import TabActions from "TabActions" /* 1510 */;
import StackActions from "StackActions" /* 1513 */;

for (const key10013 in _mod1505) {
  exports[key10013] = _mod1505[key10013];
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
