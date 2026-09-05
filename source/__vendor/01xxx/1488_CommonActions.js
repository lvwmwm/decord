// Module ID: 1488
// Function ID: 1489
// Name: CommonActions
// Dependencies: [1489, 1490, 1491, 1493, 1497, 1494]

// Module 1488 (CommonActions)
import goBackAll from "goBack" /* 1490 */;
import nanoid from "nanoid" /* 1491 */;
import openDrawer from "openDrawer" /* 1493 */;
import TabRouter from "TabRouter" /* 1494 */;
import StackRouter from "StackRouter" /* 1497 */;

for (const key10013 in require("module_1489")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1489")[key10013];
  continue;
}

export const CommonActions = goBackAll;
export const BaseRouter = nanoid.BaseRouter;
export const DrawerActions = openDrawer.DrawerActions;
export const DrawerRouter = openDrawer.DrawerRouter;
export const StackActions = StackRouter.StackActions;
export const StackRouter = StackRouter.StackRouter;
export const TabActions = TabRouter.TabActions;
export const TabRouter = TabRouter.TabRouter;
