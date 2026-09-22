// Module ID: 9007
// Function ID: 9008
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8460, 9008, 8831, 9010, 9012, 7061, 8567, 2]
// Exports: GameUpdatePlatformIcon

// Module 9007 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8460 */;
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
    return jsx(tmp(9008).ScreenIcon, { size, color });
  } else if (tmp(8460).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8831).XboxNeutralIcon, { size, color });
  } else if (tmp(8460).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9010).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8460).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9012).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8460).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7061).MobilePhoneIcon, { size, color });
  } else if (tmp(8460).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8567).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
