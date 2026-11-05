// Module ID: 14179
// Function ID: 14180
// Name: GamePlatformBadgeRow
// Dependencies: [19, 21, 14180, 9743, 7276, 9883, 9505, 5143, 14181, 6165, 575, 2]

// Module 14179 (GamePlatformBadgeRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7276 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 9505 */;
import ScreenIcon from "ScreenIcon" /* 9743 */;
import GameControllerIcon from "GameControllerIcon" /* 9883 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 14180 */;
import GamePlatformBadges from "GamePlatformBadges" /* 14181 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = {};
obj[GamePlatformAvailability.GamePlatformAvailability.DESKTOP] = ScreenIcon.ScreenIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.MOBILE] = MobilePhoneIcon.MobilePhoneIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.CONSOLE] = GameControllerIcon.GameControllerIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.ROBLOX] = RobloxNeutralIcon.RobloxNeutralIcon;
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const memoResult = react.memo(function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  const items = [platforms];
  const tmp = closure_6();
  const memo = react.useMemo(() => {
    obj = GamePlatformBadges;
    return obj.sortGamePlatformAvailability(platforms);
  }, items);
  const Stack = platforms(6165).Stack;
  return <Stack direction="horizontal" align="center" spacing={nativeDefault.space.PX_4} style={tmp.row}>{memo.map((item) => {
    const obj2 = platforms(dependencyMap[8]);
    return <tmp key={arg0} size="xs" color="icon-muted" accessibilityLabel={obj2.getGamePlatformAvailabilityLabel(arg0)} />;
  })}</Stack>;
});
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default memoResult;
