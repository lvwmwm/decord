// Module ID: 16039
// Function ID: 16040
// Name: CheckpointOverlay
// Dependencies: [21, 16033, 16040, 16044, 16046, 16047, 16048, 16049, 16050, 16051, 16052, 16053, 2]
// Exports: default

// Module 16039 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 16033 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 16040 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 16044 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 16046 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 16047 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 16048 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 16049 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 16050 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 16051 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 16052 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 16053 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(16033).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(16033).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(16033).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(16033);
  }
};
