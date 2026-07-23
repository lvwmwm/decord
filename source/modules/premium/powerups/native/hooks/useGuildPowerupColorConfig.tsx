// Module ID: 11581
// Function ID: 90053
// Name: useGuildPowerupColorConfig
// Dependencies: [689, 2]
// Exports: default

// Module 11581 (useGuildPowerupColorConfig)
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  const obj = {};
  if (arg0) {
    obj.textColor = "text-default";
    obj.iconColor = importDefault(689).colors.TEXT_DEFAULT;
    let tmp3 = obj;
  } else {
    obj.textColor = "text-muted";
    obj.iconColor = importDefault(689).colors.TEXT_MUTED;
    tmp3 = obj;
  }
  return tmp3;
};
