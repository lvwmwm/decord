// Module ID: 9236
// Function ID: 9237
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8688, 9237, 9055, 9239, 9241, 7289, 8796, 2]
// Exports: GameUpdatePlatformIcon

// Module 9236 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8688 */;
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
    return jsx(tmp(9237).ScreenIcon, { size, color });
  } else if (tmp(8688).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(9055).XboxNeutralIcon, { size, color });
  } else if (tmp(8688).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9239).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8688).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9241).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8688).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7289).MobilePhoneIcon, { size, color });
  } else if (tmp(8688).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8796).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
