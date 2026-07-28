// Module ID: 11901
// Function ID: 92074
// Name: GameUpdatePlatformIcon
// Dependencies: [31, 33, 8153, 11902, 8485, 11904, 11906, 9184, 11908, 2]
// Exports: GameUpdatePlatformIcon

// Module 11901 (GameUpdatePlatformIcon)
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
  if (require(8153) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size, color };
    return jsx(require(11902) /* ScreenIcon */.ScreenIcon, { size, color });
  } else if (require(8153) /* PlatformType */.PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(require(8485) /* XboxNeutralIcon */.XboxNeutralIcon, { size, color });
  } else if (require(8153) /* PlatformType */.PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(require(11904) /* PlaystationNeutralIcon */.PlaystationNeutralIcon, { size, color });
  } else if (require(8153) /* PlatformType */.PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(require(11906) /* NintendoSwitchNeutralIcon */.NintendoSwitchNeutralIcon, { size, color });
  } else if (require(8153) /* PlatformType */.PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(require(9184) /* MobilePhoneIcon */.MobilePhoneIcon, { size, color });
  } else if (require(8153) /* PlatformType */.PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(require(11908) /* AppleNeutralIcon */.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
