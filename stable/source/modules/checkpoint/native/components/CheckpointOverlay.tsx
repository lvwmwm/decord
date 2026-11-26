// Module ID: 14485
// Function ID: 14486
// Name: CheckpointOverlay
// Dependencies: [6367, 21, 6735, 14486, 14501, 14502, 13050, 1113, 3317, 14503, 8069, 14510, 10939, 3285, 14513, 14518, 14283, 14519, 7438, 14524, 14526, 14529, 14533, 2]
// Exports: default

// Module 14485 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3285 from "module_3285" /* 3285 */;
import _modDef3317 from "module_3317" /* 3317 */;
import CheckpointConstants from "CheckpointConstants" /* 6367 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6735 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 14486 */;
import CheckpointCharacterUnavailableScreenDefault from "CheckpointCharacterUnavailableScreen" /* 14501 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 14502 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 14503 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 14510 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 14513 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 14518 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 14519 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 14524 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 14526 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 14529 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 14533 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default function CheckpointOverlay(route) {
  let onNextStep;
  let onPreviousStep;
  route = route.route;
  ({ onNextStep, onPreviousStep } = route);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.CHARACTER_UNAVAILABLE === statsScreen) {
      return jsx(CheckpointCharacterUnavailableScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl9 = tmp(1113).intl;
      const intl10 = tmp(1113).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3317["/7XYsa"])} description={intl10.string(_modDef3317["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1113).intl;
      const intl8 = tmp(1113).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3317["2BuyVC"])} description={intl8.string(_modDef3317["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1113).intl;
      const intl6 = tmp(1113).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3285.F0fkrh)} description={intl6.string(_modDef3317.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1113).intl;
      const intl4 = tmp(1113).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3317.ZTDCIv)} description={intl4.string(_modDef3317.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1113).intl;
      const intl2 = tmp(1113).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3317.HM2fjf)} description={intl2.string(_modDef3317.LQiFqJ)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            return jsx(CheckpointSummaryStatsScreenDefault, {});
          } else {
            return null;
          }
        }
      }
      return jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
    }
  }
};
