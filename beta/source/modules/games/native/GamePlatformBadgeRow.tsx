// Module ID: 14214
// Function ID: 14215
// Name: GamePlatformBadgeRow
// Dependencies: [19, 21, 14215, 9708, 7231, 9850, 9466, 5170, 14216, 6191, 575, 2]

// Module 14214 (GamePlatformBadgeRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7231 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 9466 */;
import ScreenIcon from "ScreenIcon" /* 9708 */;
import GameControllerIcon from "GameControllerIcon" /* 9850 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 14215 */;
import GamePlatformBadges from "GamePlatformBadges" /* 14216 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
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
  const Stack = platforms(6191).Stack;
  return <Stack direction="horizontal" align="center" spacing={nativeDefault.space.PX_4} style={tmp.row}>{memo.map((item) => {
    const obj2 = platforms(dependencyMap[8]);
    return <tmp key={arg0} size="xs" color="icon-muted" accessibilityLabel={obj2.getGamePlatformAvailabilityLabel(arg0)} />;
  })}</Stack>;
});
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default memoResult;
