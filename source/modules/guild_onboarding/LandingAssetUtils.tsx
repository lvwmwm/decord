// Module ID: 5331
// Function ID: 45424
// Name: replaceFlagIconAndFlagColor
// Dependencies: []
// Exports: default

// Module 5331 (replaceFlagIconAndFlagColor)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_onboarding/LandingAssetUtils.tsx");

export default function replaceFlagIconAndFlagColor(layers, p) {
  layers.assets[0].p = p;
  layers = layers.layers;
  const findIndexResult = layers.findIndex((nm) => "flag" === nm.nm);
  const it = layers.layers[findIndexResult].shapes[0].it;
  const item = it.forEach((arg0, arg1) => {
    if ("gr" === arg0.layers[closure_2].shapes[0].it[arg1].ty) {
      const it = arg0.layers[closure_2].shapes[0].it[arg1].it;
      if (it.findIndex((ty) => "fl" === ty.ty) >= 0) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(arg2.map((arg0) => arg0 / 256), 0);
        items[arraySpreadResult] = 1;
        const sum = arraySpreadResult + 1;
        arg0.layers[closure_2].shapes[0].it[arg1].it[1].c.k = items;
      }
    }
  });
  return layers;
};
