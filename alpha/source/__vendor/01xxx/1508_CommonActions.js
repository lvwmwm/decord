// Module ID: 1508
// Function ID: 1509
// Name: CommonActions
// Dependencies: [1509, 1510, 1511, 1513, 1517, 1514]

// Module 1508 (CommonActions)
import _mod1509 from "module_1509" /* 1509 */;
import goBackAll from "goBack" /* 1510 */;
import BaseRouter from "BaseRouter" /* 1511 */;
import DrawerActions from "DrawerActions" /* 1513 */;
import TabActions from "TabActions" /* 1514 */;
import StackActions from "StackActions" /* 1517 */;

for (const key10013 in _mod1509) {
  exports[key10013] = _mod1509[key10013];
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
