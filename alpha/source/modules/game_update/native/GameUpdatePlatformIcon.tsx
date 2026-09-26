// Module ID: 8346
// Function ID: 8347
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 7790, 8347, 8161, 8349, 8351, 6379, 7900, 2]
// Exports: GameUpdatePlatformIcon

// Module 8346 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 7790 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    const obj2 = { size, color };
    return jsx(tmp(8347).ScreenIcon, { size, color });
  } else if (tmp(7790).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8161).XboxNeutralIcon, { size, color });
  } else if (tmp(7790).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8349).PlaystationNeutralIcon, { size, color });
  } else if (tmp(7790).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8351).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(7790).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6379).MobilePhoneIcon, { size, color });
  } else if (tmp(7790).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(7900).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
