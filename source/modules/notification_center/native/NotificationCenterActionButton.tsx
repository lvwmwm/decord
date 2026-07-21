// Module ID: 15006
// Function ID: 112986
// Name: NotificationCenterActionButton
// Dependencies: []
// Exports: default

// Module 15006 (NotificationCenterActionButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    9223372036854775807: 8817,
    -9223372036854775808: 1091633408,
    icon: importDefault(dependencyMap[3]),
    onPress() {
      return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
    }
  };
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.UKOtz+);
  obj.maxFontSizeMultiplier = 2;
  return jsx(arg1(dependencyMap[2]).IconButton, obj);
};
