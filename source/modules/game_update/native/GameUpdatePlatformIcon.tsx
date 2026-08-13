// Module ID: 12250
// Function ID: 12251
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8954, 12251, 9355, 12253, 12255, 8536, 12257, 2]
// Exports: GameUpdatePlatformIcon

// Module 12250 (GameUpdatePlatformIcon)
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
  if (require(8954) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12251).ScreenIcon, { size: null, color: null });
  } else if (tmp(8954).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9355).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8954).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12253).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8954).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12255).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8954).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8536).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8954).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12257).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
