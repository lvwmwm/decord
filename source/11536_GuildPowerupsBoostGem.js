// Module ID: 11536
// Function ID: 89851
// Name: GuildPowerupsBoostGem
// Dependencies: []
// Exports: default

// Module 11536 (GuildPowerupsBoostGem)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = { "Bool(false)": "isArray", "Bool(false)": "jsx", "Bool(false)": "useMemo", "Bool(false)": "r", "Bool(false)": "isArray", "Bool(false)": "h", "Bool(false)": "uri", borderRadius: importDefault(dependencyMap[3]).radii.round, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SECONDARY_ALT };
obj.boostGemContainer = obj;
let closure_4 = _module.createStyles(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  let gemHeight;
  let gemWidth;
  let style;
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = {};
  const items = [callback().boostGemContainer, style];
  obj.style = items;
  obj.children = jsx(importDefault(dependencyMap[4]), { width: gemWidth, height: gemHeight });
  return <View {...obj} />;
};
