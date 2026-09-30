// Module ID: 8545
// Function ID: 8546
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 7985, 8546, 8357, 8548, 8550, 6575, 8095, 2]
// Exports: GameUpdatePlatformIcon

// Module 8545 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 7985 */;
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
    return jsx(tmp(8546).ScreenIcon, { size, color });
  } else if (tmp(7985).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8357).XboxNeutralIcon, { size, color });
  } else if (tmp(7985).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8548).PlaystationNeutralIcon, { size, color });
  } else if (tmp(7985).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8550).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(7985).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6575).MobilePhoneIcon, { size, color });
  } else if (tmp(7985).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8095).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
