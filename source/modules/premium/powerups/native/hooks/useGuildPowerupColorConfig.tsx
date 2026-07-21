// Module ID: 11570
// Function ID: 89979
// Name: useGuildPowerupColorConfig
// Dependencies: []
// Exports: default

// Module 11570 (useGuildPowerupColorConfig)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  const obj = {};
  if (arg0) {
    obj.textColor = "text-default";
    obj.iconColor = importDefault(dependencyMap[0]).colors.TEXT_DEFAULT;
    let tmp3 = obj;
  } else {
    obj.textColor = "text-muted";
    obj.iconColor = importDefault(dependencyMap[0]).colors.TEXT_MUTED;
    tmp3 = obj;
  }
  return tmp3;
};
