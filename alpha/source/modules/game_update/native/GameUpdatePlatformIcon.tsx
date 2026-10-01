// Module ID: 8537
// Function ID: 8538
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 7972, 8538, 8348, 8540, 8542, 6565, 8084, 2]
// Exports: GameUpdatePlatformIcon

// Module 8537 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 7972 */;
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
    return jsx(tmp(8538).ScreenIcon, { size, color });
  } else if (tmp(7972).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8348).XboxNeutralIcon, { size, color });
  } else if (tmp(7972).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8540).PlaystationNeutralIcon, { size, color });
  } else if (tmp(7972).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8542).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(7972).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6565).MobilePhoneIcon, { size, color });
  } else if (tmp(7972).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8084).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
