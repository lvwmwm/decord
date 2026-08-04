// Module ID: 12092
// Function ID: 12093
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8827, 12093, 9223, 12095, 12097, 8298, 12099, 2]
// Exports: GameUpdatePlatformIcon

// Module 12092 (GameUpdatePlatformIcon)
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
  if (require(8827) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12093).ScreenIcon, { size: null, color: null });
  } else if (tmp(8827).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9223).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8827).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12095).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8827).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12097).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8827).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8298).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8827).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12099).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
