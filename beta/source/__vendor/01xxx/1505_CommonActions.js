// Module ID: 1505
// Function ID: 1506
// Name: CommonActions
// Dependencies: [1506, 1507, 1508, 1510, 1514, 1511]

// Module 1505 (CommonActions)
import _mod1506 from "module_1506" /* 1506 */;
import goBackAll from "goBack" /* 1507 */;
import BaseRouter from "BaseRouter" /* 1508 */;
import DrawerActions from "DrawerActions" /* 1510 */;
import TabActions from "TabActions" /* 1511 */;
import StackActions from "StackActions" /* 1514 */;

for (const key10013 in _mod1506) {
  exports[key10013] = _mod1506[key10013];
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
