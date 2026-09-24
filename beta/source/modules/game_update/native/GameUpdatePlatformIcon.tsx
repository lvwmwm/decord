// Module ID: 9190
// Function ID: 9191
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 558, 568, 8650, 9191, 9009, 9193, 9195, 7233, 8758, 2]

// Module 9190 (GameUpdatePlatformIcon)
import c from "c" /* 568 */;
import PlatformType from "PlatformType" /* 8650 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ platform, size, color } = arg0);
  let str = "xs";
  if (undefined !== size) {
    str = size;
  }
  if (PlatformType.PlatformType.DESKTOP === platform) {
    if (cResult[0] === color) {
      if (cResult[1] === str) {
        let tmp20 = cResult[2];
      }
      return tmp20;
    }
    const obj2 = { size: str, color };
    const tmp22 = jsx(tmp(9191).ScreenIcon, { size: str, color });
    cResult[0] = color;
    cResult[1] = str;
    cResult[2] = tmp22;
    tmp20 = tmp22;
  } else if (tmp(8650).PlatformType.XBOX === platform) {
    if (cResult[3] === color) {
      if (cResult[4] === str) {
        let tmp17 = cResult[5];
      }
      return tmp17;
    }
    const obj3 = { size: str, color };
    const tmp19 = jsx(tmp(9009).XboxNeutralIcon, { size: str, color });
    cResult[3] = color;
    cResult[4] = str;
    cResult[5] = tmp19;
    tmp17 = tmp19;
  } else if (tmp(8650).PlatformType.PLAYSTATION === platform) {
    if (cResult[6] === color) {
      if (cResult[7] === str) {
        let tmp14 = cResult[8];
      }
      return tmp14;
    }
    const obj4 = { size: str, color };
    const tmp16 = jsx(tmp(9193).PlaystationNeutralIcon, { size: str, color });
    cResult[6] = color;
    cResult[7] = str;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  } else if (tmp(8650).PlatformType.NINTENDO === platform) {
    if (cResult[9] === color) {
      if (cResult[10] === str) {
        let tmp11 = cResult[11];
      }
      return tmp11;
    }
    const obj5 = { size: str, color };
    const tmp13 = jsx(tmp(9195).NintendoSwitchNeutralIcon, { size: str, color });
    cResult[9] = color;
    cResult[10] = str;
    cResult[11] = tmp13;
    tmp11 = tmp13;
  } else if (tmp(8650).PlatformType.ANDROID === platform) {
    if (cResult[12] === color) {
      if (cResult[13] === str) {
        let tmp8 = cResult[14];
      }
      return tmp8;
    }
    const obj6 = { size: str, color };
    const tmp10 = jsx(tmp(7233).MobilePhoneIcon, { size: str, color });
    cResult[12] = color;
    cResult[13] = str;
    cResult[14] = tmp10;
    tmp8 = tmp10;
  } else if (tmp(8650).PlatformType.IOS === platform) {
    if (cResult[15] === color) {
      if (cResult[16] === str) {
        let tmp5 = cResult[17];
      }
      return tmp5;
    }
    const obj7 = { size: str, color };
    const tmp7 = jsx(tmp(8758).AppleNeutralIcon, { size: str, color });
    cResult[15] = color;
    cResult[16] = str;
    cResult[17] = tmp7;
    tmp5 = tmp7;
  } else {
    return null;
  }
}) : ((color) => {
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    const obj2 = { size, color };
    return jsx(tmp(9191).ScreenIcon, { size, color });
  } else if (tmp(8650).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(9009).XboxNeutralIcon, { size, color });
  } else if (tmp(8650).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9193).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8650).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9195).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8650).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7233).MobilePhoneIcon, { size, color });
  } else if (tmp(8650).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8758).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
});
