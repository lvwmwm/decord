// Module ID: 12392
// Function ID: 94714
// Name: GuildBoostingMarketingWave
// Dependencies: []
// Exports: default

// Module 12392 (GuildBoostingMarketingWave)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx");

export default function GuildBoostingMarketingWave(arg0) {
  let obj = arg1(dependencyMap[2]);
  const token = obj.useToken(importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW);
  let tmp2;
  if (null != token) {
    tmp2 = token;
  }
  obj = { Z_NO_COMPRESSION: "center", Z_BEST_SPEED: "center", Z_BEST_COMPRESSION: 64 };
  const merged = Object.assign(arg0);
  obj = { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: tmp2 };
  obj["children"] = jsx(arg1(dependencyMap[4]).Path, obj);
  return jsx(importDefault(dependencyMap[4]), obj);
};
