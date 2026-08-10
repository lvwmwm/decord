// Module ID: 12181
// Function ID: 12182
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8905, 12182, 9305, 12184, 12186, 8487, 12188, 2]
// Exports: GameUpdatePlatformIcon

// Module 12181 (GameUpdatePlatformIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("PlatformType").fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  let platform;
  let size;
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (require(8905) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12182).ScreenIcon, { size: null, color: null });
  } else if (tmp(8905).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9305).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8905).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12184).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8905).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12186).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8905).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8487).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8905).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12188).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
