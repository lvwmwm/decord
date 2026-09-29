// Module ID: 9192
// Function ID: 9193
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8645, 9193, 9011, 9195, 9197, 7235, 8753, 2]
// Exports: GameUpdatePlatformIcon

// Module 9192 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8645 */;
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
    return jsx(tmp(9193).ScreenIcon, { size, color });
  } else if (tmp(8645).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(9011).XboxNeutralIcon, { size, color });
  } else if (tmp(8645).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9195).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8645).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9197).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8645).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7235).MobilePhoneIcon, { size, color });
  } else if (tmp(8645).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8753).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
