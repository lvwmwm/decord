// Module ID: 15386
// Function ID: 15387
// Name: GuildsBarFooterWrapper
// Dependencies: [15324, 21, 4302, 712, 4005, 15087, 5721, 2]
// Exports: default

// Module 15386 (GuildsBarFooterWrapper)
import { GUILD_ITEM_HIT_SLOP } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { footerWrapper: null };
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: require("Themes").modules.mobile.GUILD_BAR_ITEM_PADDING };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = require(4005) /* map */;
  const token = obj.useToken(importDefault(712).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = callback();
  const isHomeDrawerEnabled = require(15087) /* context */.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const obj2 = require(15087) /* context */;
  const tmp4 = jsx;
  if (!isHomeDrawerEnabled) {
    obj = { width: null };
    obj[0] = token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right;
    tmp6 = obj;
  }
  style[1] = tmp6;
  return tmp4(importDefault(5721), { style, children: children.children });
};
