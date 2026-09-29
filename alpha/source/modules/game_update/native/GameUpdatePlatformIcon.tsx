// Module ID: 8511
// Function ID: 8512
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 7955, 8512, 8326, 8514, 8516, 6545, 8065, 2]
// Exports: GameUpdatePlatformIcon

// Module 8511 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 7955 */;
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
    return jsx(tmp(8512).ScreenIcon, { size, color });
  } else if (tmp(7955).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8326).XboxNeutralIcon, { size, color });
  } else if (tmp(7955).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8514).PlaystationNeutralIcon, { size, color });
  } else if (tmp(7955).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8516).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(7955).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6545).MobilePhoneIcon, { size, color });
  } else if (tmp(7955).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8065).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
