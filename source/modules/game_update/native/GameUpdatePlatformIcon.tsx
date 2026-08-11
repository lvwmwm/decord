// Module ID: 12184
// Function ID: 12185
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8911, 12185, 9311, 12187, 12189, 8493, 12191, 2]
// Exports: GameUpdatePlatformIcon

// Module 12184 (GameUpdatePlatformIcon)
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
  if (require(8911) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12185).ScreenIcon, { size: null, color: null });
  } else if (tmp(8911).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9311).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8911).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12187).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8911).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12189).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8911).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8493).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8911).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12191).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
