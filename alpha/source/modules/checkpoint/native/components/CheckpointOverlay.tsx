// Module ID: 16058
// Function ID: 16059
// Name: CheckpointOverlay
// Dependencies: [21, 16048, 16059, 16064, 16066, 16067, 16068, 16069, 16070, 16071, 16072, 16073, 2]
// Exports: default

// Module 16058 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 16048 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 16059 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 16064 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 16066 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 16067 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 16068 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 16069 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 16070 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 16071 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 16072 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 16073 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(16048).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(16048).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(16048).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(16048);
  }
};
