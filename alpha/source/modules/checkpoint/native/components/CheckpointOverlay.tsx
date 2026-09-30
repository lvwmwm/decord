// Module ID: 15466
// Function ID: 15467
// Name: CheckpointOverlay
// Dependencies: [21, 15456, 15467, 15472, 15474, 15475, 15476, 15477, 15478, 15479, 15480, 15481, 2]
// Exports: default

// Module 15466 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15456 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15467 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15472 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15474 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15475 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15476 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15477 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15478 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15479 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15480 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15481 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(15456).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(15456).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(15456).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(15456);
  }
};
