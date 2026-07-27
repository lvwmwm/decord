// Module ID: 14936
// Function ID: 113898
// Name: GuildsBarFooterWrapper
// Dependencies: [14872, 33, 4131, 689, 3835, 3988, 5515, 2]
// Exports: default

// Module 14936 (GuildsBarFooterWrapper)
import { GUILD_ITEM_HIT_SLOP } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").modules.mobile.GUILD_BAR_ITEM_PADDING };
obj.footerWrapper = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = require(3835) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const MobileHomeDrawerExperiment = require(3988) /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
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
  return tmp3(importDefault(5515), obj);
};
