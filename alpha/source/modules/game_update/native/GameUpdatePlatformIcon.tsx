// Module ID: 9165
// Function ID: 9166
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8617, 9166, 8984, 9168, 9170, 7205, 8725, 2]
// Exports: GameUpdatePlatformIcon

// Module 9165 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8617 */;
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
    return jsx(tmp(9166).ScreenIcon, { size, color });
  } else if (tmp(8617).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8984).XboxNeutralIcon, { size, color });
  } else if (tmp(8617).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9168).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8617).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9170).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8617).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7205).MobilePhoneIcon, { size, color });
  } else if (tmp(8617).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8725).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
