// Module ID: 11881
// Function ID: 92094
// Name: GameUpdatePlatformIcon
// Dependencies: [31, 33, 8357, 11882, 8665, 11884, 11886, 9248, 11888, 2]
// Exports: GameUpdatePlatformIcon

// Module 11881 (GameUpdatePlatformIcon)
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
  if (require(8357) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size, color };
    return jsx(require(11882) /* ScreenIcon */.ScreenIcon, { size, color });
  } else if (require(8357) /* PlatformType */.PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(require(8665) /* XboxNeutralIcon */.XboxNeutralIcon, { size, color });
  } else if (require(8357) /* PlatformType */.PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(require(11884) /* PlaystationNeutralIcon */.PlaystationNeutralIcon, { size, color });
  } else if (require(8357) /* PlatformType */.PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(require(11886) /* NintendoSwitchNeutralIcon */.NintendoSwitchNeutralIcon, { size, color });
  } else if (require(8357) /* PlatformType */.PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(require(9248) /* MobilePhoneIcon */.MobilePhoneIcon, { size, color });
  } else if (require(8357) /* PlatformType */.PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(require(11888) /* AppleNeutralIcon */.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
