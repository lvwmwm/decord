// Module ID: 11834
// Function ID: 91754
// Name: GameUpdatePlatformIcon
// Dependencies: []
// Exports: GameUpdatePlatformIcon

// Module 11834 (GameUpdatePlatformIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  let platform;
  let size;
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (arg1(dependencyMap[2]).PlatformType.DESKTOP === platform) {
    let obj = { size, color };
    return jsx(arg1(dependencyMap[3]).ScreenIcon, obj);
  } else if (arg1(dependencyMap[2]).PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(arg1(dependencyMap[4]).XboxNeutralIcon, obj);
  } else if (arg1(dependencyMap[2]).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(arg1(dependencyMap[5]).PlaystationNeutralIcon, obj1);
  } else if (arg1(dependencyMap[2]).PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(arg1(dependencyMap[6]).NintendoSwitchNeutralIcon, obj2);
  } else if (arg1(dependencyMap[2]).PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(arg1(dependencyMap[7]).MobilePhoneIcon, obj3);
  } else if (arg1(dependencyMap[2]).PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(arg1(dependencyMap[8]).AppleNeutralIcon, obj);
  } else {
    return null;
  }
};
