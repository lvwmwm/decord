// Module ID: 12268
// Function ID: 12269
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8968, 12269, 9369, 12271, 12273, 8558, 12275, 2]
// Exports: GameUpdatePlatformIcon

// Module 12268 (GameUpdatePlatformIcon)
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
  if (require(8968) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12269).ScreenIcon, { size: null, color: null });
  } else if (tmp(8968).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9369).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8968).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12271).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8968).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12273).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8968).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8558).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8968).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12275).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
