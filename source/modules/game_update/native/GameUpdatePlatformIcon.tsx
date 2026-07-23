// Module ID: 11854
// Function ID: 91856
// Name: GameUpdatePlatformIcon
// Dependencies: [31, 33, 8313, 11855, 8623, 11857, 11859, 9212, 11861, 2]
// Exports: GameUpdatePlatformIcon

// Module 11854 (GameUpdatePlatformIcon)
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
  if (require(8313) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size, color };
    return jsx(require(11855) /* ScreenIcon */.ScreenIcon, { size, color });
  } else if (require(8313) /* PlatformType */.PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(require(8623) /* XboxNeutralIcon */.XboxNeutralIcon, { size, color });
  } else if (require(8313) /* PlatformType */.PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(require(11857) /* PlaystationNeutralIcon */.PlaystationNeutralIcon, { size, color });
  } else if (require(8313) /* PlatformType */.PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(require(11859) /* NintendoSwitchNeutralIcon */.NintendoSwitchNeutralIcon, { size, color });
  } else if (require(8313) /* PlatformType */.PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(require(9212) /* MobilePhoneIcon */.MobilePhoneIcon, { size, color });
  } else if (require(8313) /* PlatformType */.PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(require(11861) /* AppleNeutralIcon */.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
