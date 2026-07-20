// Module ID: 14743
// Function ID: 111175
// Name: GuildsBarFooterWrapper
// Dependencies: []
// Exports: default

// Module 14743 (GuildsBarFooterWrapper)
const GUILD_ITEM_HIT_SLOP = require(dependencyMap[0]).GUILD_ITEM_HIT_SLOP;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = { gap: importDefault(dependencyMap[3]).modules.mobile.GUILD_BAR_ITEM_PADDING };
obj.footerWrapper = obj;
let closure_5 = _module.createStyles(obj);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = require(dependencyMap[4]);
  const token = obj.useToken(importDefault(dependencyMap[3]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const MobileHomeDrawerExperiment = require(dependencyMap[5]).MobileHomeDrawerExperiment;
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
  return tmp3(importDefault(dependencyMap[6]), obj);
};
