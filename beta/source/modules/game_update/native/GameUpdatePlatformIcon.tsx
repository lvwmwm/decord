// Module ID: 8346
// Function ID: 8347
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 7790, 8347, 8161, 8349, 8351, 6379, 7900, 2]
// Exports: GameUpdatePlatformIcon

// Module 8346 (GameUpdatePlatformIcon)
import Fragment from "Fragment" /* 21 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6379 */;
import PlatformType from "PlatformType" /* 7790 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 7900 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8161 */;
import ScreenIcon from "ScreenIcon" /* 8347 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8349 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 8351 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  let platform;
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    return jsx(ScreenIcon.ScreenIcon, { size, color });
  } else if (PlatformType.PlatformType.XBOX === platform) {
    return jsx(XboxNeutralIcon.XboxNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    return jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    return jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    return jsx(MobilePhoneIcon.MobilePhoneIcon, { size, color });
  } else if (PlatformType.PlatformType.IOS === platform) {
    return jsx(AppleNeutralIcon.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
