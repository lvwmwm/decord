// Module ID: 12548
// Function ID: 12549
// Name: useGuildPowerupColorConfig
// Dependencies: [576, 2]
// Exports: default

// Module 12548 (useGuildPowerupColorConfig)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 576 */;

const result = set.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  if (arg0) {
    let obj = { textColor: "text-default", iconColor: null };
    obj[1] = ThemesDefault.colors.TEXT_DEFAULT;
  } else {
    obj = { textColor: "text-muted", iconColor: null };
    obj[1] = ThemesDefault.colors.TEXT_MUTED;
  }
  return obj;
};
