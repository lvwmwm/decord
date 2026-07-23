// Module ID: 14877
// Function ID: 113444
// Name: GuildsBarFooterWrapper
// Dependencies: [14813, 33, 4130, 689, 3834, 3987, 5517, 2]
// Exports: default

// Module 14877 (GuildsBarFooterWrapper)
import { GUILD_ITEM_HIT_SLOP } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_PADDING };
obj.footerWrapper = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const MobileHomeDrawerExperiment = require(3987) /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
  obj = {};
  const items = [callback().footerWrapper, ];
  let tmp5 = null;
  const tmp2 = callback();
  const tmp3 = jsx;
  if (!MobileHomeDrawerExperiment.useConfig({ location: "guilds_bar" }).enableHome) {
    obj = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    tmp5 = obj;
  }
  items[1] = tmp5;
  obj.style = items;
  obj.children = children.children;
  return tmp3(importDefault(5517), obj);
};
