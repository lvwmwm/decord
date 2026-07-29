// Module ID: 11639
// Function ID: 11640
// Name: useGuildPowerupColorConfig
// Dependencies: [712, 2]
// Exports: default

// Module 11639 (useGuildPowerupColorConfig)
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: null };
    obj[1] = importDefault(712).colors.TEXT_DEFAULT;
  } else {
    obj = { textColor: "text-muted", iconColor: null };
    obj[1] = importDefault(712).colors.TEXT_MUTED;
  }
  return obj;
};
