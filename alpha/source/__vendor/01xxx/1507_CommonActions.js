// Module ID: 1507
// Function ID: 1508
// Name: CommonActions
// Dependencies: [1508, 1509, 1510, 1512, 1516, 1513]

// Module 1507 (CommonActions)
import _mod1508 from "module_1508" /* 1508 */;
import goBackAll from "goBack" /* 1509 */;
import BaseRouter from "BaseRouter" /* 1510 */;
import DrawerActions from "DrawerActions" /* 1512 */;
import TabActions from "TabActions" /* 1513 */;
import StackActions from "StackActions" /* 1516 */;

for (const key10013 in _mod1508) {
  exports[key10013] = _mod1508[key10013];
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
