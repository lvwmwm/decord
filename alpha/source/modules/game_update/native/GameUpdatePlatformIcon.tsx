// Module ID: 9160
// Function ID: 9161
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8613, 9161, 8979, 9163, 9165, 7203, 8721, 2]
// Exports: GameUpdatePlatformIcon

// Module 9160 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8613 */;
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
    return jsx(tmp(9161).ScreenIcon, { size, color });
  } else if (tmp(8613).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8979).XboxNeutralIcon, { size, color });
  } else if (tmp(8613).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9163).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8613).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9165).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8613).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7203).MobilePhoneIcon, { size, color });
  } else if (tmp(8613).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8721).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
