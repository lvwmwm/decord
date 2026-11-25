// Module ID: 13486
// Function ID: 13487
// Name: useGuildPowerupColorConfig
// Dependencies: [575, 2]
// Exports: default

// Module 13486 (useGuildPowerupColorConfig)
import nativeDefault from "native" /* 575 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupColorConfig.tsx");

export default function useGuildPowerupColorConfig(arg0) {
  let obj;
  const tmp = arg0;
  if (tmp) {
    obj = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
    const obj2 = { textColor: "text-default", iconColor: nativeDefault.colors.TEXT_DEFAULT };
  } else {
    obj = { textColor: "text-muted", iconColor: nativeDefault.colors.TEXT_MUTED };
  }
  return obj;
};
