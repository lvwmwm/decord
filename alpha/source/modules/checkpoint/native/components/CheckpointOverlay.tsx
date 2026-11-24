// Module ID: 12645
// Function ID: 12646
// Name: CheckpointOverlay
// Dependencies: [6270, 21, 6641, 12646, 12661, 12662, 10360, 1112, 3442, 12663, 7011, 12670, 11300, 3410, 12673, 12679, 12437, 12680, 7623, 12685, 12687, 12690, 12698, 2]
// Exports: default

// Module 12645 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3410 from "module_3410" /* 3410 */;
import _modDef3442 from "module_3442" /* 3442 */;
import CheckpointConstants from "CheckpointConstants" /* 6270 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6641 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12646 */;
import CheckpointCharacterUnavailableScreenDefault from "CheckpointCharacterUnavailableScreen" /* 12661 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12662 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12663 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12670 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12673 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12679 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12680 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12685 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12687 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12690 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12698 */;
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
      const intl9 = tmp(1112).intl;
      const intl10 = tmp(1112).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3442["/7XYsa"])} description={intl10.string(_modDef3442["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1112).intl;
      const intl8 = tmp(1112).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3442["2BuyVC"])} description={intl8.string(_modDef3442["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1112).intl;
      const intl6 = tmp(1112).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3410.F0fkrh)} description={intl6.string(_modDef3442.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1112).intl;
      const intl4 = tmp(1112).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3442.ZTDCIv)} description={intl4.string(_modDef3442.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1112).intl;
      const intl2 = tmp(1112).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3442.HM2fjf)} description={intl2.string(_modDef3442.LQiFqJ)} />;
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
