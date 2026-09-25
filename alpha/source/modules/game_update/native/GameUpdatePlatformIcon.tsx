// Module ID: 8338
// Function ID: 8339
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 7782, 8339, 8153, 8341, 8343, 6374, 7892, 2]
// Exports: GameUpdatePlatformIcon

// Module 8338 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 7782 */;
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
    return jsx(tmp(8339).ScreenIcon, { size, color });
  } else if (tmp(7782).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8153).XboxNeutralIcon, { size, color });
  } else if (tmp(7782).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8341).PlaystationNeutralIcon, { size, color });
  } else if (tmp(7782).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8343).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(7782).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6374).MobilePhoneIcon, { size, color });
  } else if (tmp(7782).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(7892).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
