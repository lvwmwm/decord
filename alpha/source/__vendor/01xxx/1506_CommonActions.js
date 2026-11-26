// Module ID: 1506
// Function ID: 1507
// Name: CommonActions
// Dependencies: [1507, 1508, 1509, 1511, 1515, 1512]

// Module 1506 (CommonActions)
import _mod1507 from "module_1507" /* 1507 */;
import goBackAll from "goBack" /* 1508 */;
import BaseRouter from "BaseRouter" /* 1509 */;
import DrawerActions from "DrawerActions" /* 1511 */;
import TabActions from "TabActions" /* 1512 */;
import StackActions from "StackActions" /* 1515 */;

for (const key10013 in _mod1507) {
  exports[key10013] = _mod1507[key10013];
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
