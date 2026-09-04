// Module ID: 8808
// Function ID: 8809
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8272, 8809, 8638, 8811, 8813, 6900, 8372, 2]
// Exports: GameUpdatePlatformIcon

// Module 8808 (GameUpdatePlatformIcon)
import noopAll from "noop" /* 19 */;
import PlatformType from "PlatformType" /* 8272 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8809).ScreenIcon, { size: null, color: null });
  } else if (tmp(8272).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8638).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8272).PlatformType.PLAYSTATION === platform) {
    obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(8811).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8272).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(8813).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8272).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(6900).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8272).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8372).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
