// Module ID: 9240
// Function ID: 9241
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8692, 9241, 9059, 9243, 9245, 7291, 8800, 2]
// Exports: GameUpdatePlatformIcon

// Module 9240 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8692 */;
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
    return jsx(tmp(9241).ScreenIcon, { size, color });
  } else if (tmp(8692).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(9059).XboxNeutralIcon, { size, color });
  } else if (tmp(8692).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9243).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8692).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9245).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8692).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7291).MobilePhoneIcon, { size, color });
  } else if (tmp(8692).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8800).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
