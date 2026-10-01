// Module ID: 11878
// Function ID: 11879
// Name: GamePlatformBadgeRow
// Dependencies: [19, 21, 11879, 8347, 6379, 8535, 4836, 11880, 5279, 576, 2]

// Module 11878 (GamePlatformBadgeRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6379 */;
import ScreenIcon from "ScreenIcon" /* 8347 */;
import GameControllerIcon from "GameControllerIcon" /* 8535 */;
import GamePlatformAvailability from "GamePlatformAvailability" /* 11879 */;
import GamePlatformBadges from "GamePlatformBadges" /* 11880 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = {};
obj[GamePlatformAvailability.GamePlatformAvailability.DESKTOP] = ScreenIcon.ScreenIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.MOBILE] = MobilePhoneIcon.MobilePhoneIcon;
obj[GamePlatformAvailability.GamePlatformAvailability.CONSOLE] = GameControllerIcon.GameControllerIcon;
let closure_6 = createStyles.createStyles({ row: { width: "auto" } });
const memoResult = react.memo(function GamePlatformBadgeRow(platforms) {
  platforms = platforms.platforms;
  const items = [platforms];
  const tmp = closure_6();
  const memo = react.useMemo(() => {
    obj = GamePlatformBadges;
    return obj.sortGamePlatformAvailability(platforms);
  }, items);
  const Stack = platforms(5279).Stack;
  return <Stack direction="horizontal" align="center" spacing={nativeDefault.space.PX_4} style={tmp.row}>{memo.map((item) => {
    const obj2 = platforms(dependencyMap[7]);
    return <tmp key={arg0} size="xs" color="icon-subtle" accessibilityLabel={obj2.getGamePlatformAvailabilityLabel(arg0)} />;
  })}</Stack>;
});
const result = size.fileFinishedImporting("modules/games/native/GamePlatformBadgeRow.tsx");

export default memoResult;
