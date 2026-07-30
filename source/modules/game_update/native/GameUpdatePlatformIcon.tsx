// Module ID: 11921
// Function ID: 11922
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8174, 11922, 8506, 11924, 11926, 9204, 11928, 2]
// Exports: GameUpdatePlatformIcon

// Module 11921 (GameUpdatePlatformIcon)
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
  if (require(8174) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(11922).ScreenIcon, { size: null, color: null });
  } else if (tmp(8174).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8506).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8174).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(11924).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8174).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(11926).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8174).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(9204).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8174).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(11928).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};
