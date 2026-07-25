// Module ID: 11857
// Function ID: 91899
// Name: GameUpdatePlatformIcon
// Dependencies: [31, 33, 8115, 11858, 8441, 11860, 11862, 9140, 11864, 2]
// Exports: GameUpdatePlatformIcon

// Module 11857 (GameUpdatePlatformIcon)
import "result";
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
  if (require(8115) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size, color };
    return jsx(require(11858) /* ScreenIcon */.ScreenIcon, { size, color });
  } else if (require(8115) /* PlatformType */.PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(require(8441) /* XboxNeutralIcon */.XboxNeutralIcon, { size, color });
  } else if (require(8115) /* PlatformType */.PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(require(11860) /* PlaystationNeutralIcon */.PlaystationNeutralIcon, { size, color });
  } else if (require(8115) /* PlatformType */.PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(require(11862) /* NintendoSwitchNeutralIcon */.NintendoSwitchNeutralIcon, { size, color });
  } else if (require(8115) /* PlatformType */.PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(require(9140) /* MobilePhoneIcon */.MobilePhoneIcon, { size, color });
  } else if (require(8115) /* PlatformType */.PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(require(11864) /* AppleNeutralIcon */.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
