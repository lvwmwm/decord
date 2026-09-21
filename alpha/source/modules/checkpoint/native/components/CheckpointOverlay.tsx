// Module ID: 15974
// Function ID: 15975
// Name: CheckpointOverlay
// Dependencies: [21, 15968, 15975, 15979, 15981, 15982, 15983, 15984, 15985, 15986, 15987, 15988, 2]
// Exports: default

// Module 15974 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15968 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15975 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15979 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15981 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15982 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15983 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15984 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15985 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15986 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15987 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15988 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(15968).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(15968).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(15968).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(15968);
  }
};
