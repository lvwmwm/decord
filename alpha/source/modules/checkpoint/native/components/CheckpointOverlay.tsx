// Module ID: 15986
// Function ID: 15987
// Name: CheckpointOverlay
// Dependencies: [21, 15980, 15987, 15991, 15993, 15994, 15995, 15996, 15997, 15998, 15999, 16000, 2]
// Exports: default

// Module 15986 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15980 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15987 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15991 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15993 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15994 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15995 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15996 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15997 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15998 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15999 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 16000 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(15980).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(15980).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(15980).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(15980);
  }
};
