// Module ID: 12728
// Function ID: 12729
// Name: CheckpointOverlay
// Dependencies: [5969, 21, 6338, 12729, 12745, 12746, 11016, 1112, 3440, 12747, 7672, 12754, 12467, 3408, 12757, 12763, 12523, 12764, 7040, 12769, 12771, 12774, 12782, 2]
// Exports: default

// Module 12728 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3408 from "module_3408" /* 3408 */;
import _modDef3440 from "module_3440" /* 3440 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12729 */;
import CheckpointCharacterUnavailableScreenDefault from "CheckpointCharacterUnavailableScreen" /* 12745 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12746 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12747 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12754 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12757 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12763 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12764 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12769 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12771 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12774 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12782 */;
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
      return <tmp40 icon={null} title={intl9.string(_modDef3440["/7XYsa"])} description={intl10.string(_modDef3440["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1112).intl;
      const intl8 = tmp(1112).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3440["2BuyVC"])} description={intl8.string(_modDef3440["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1112).intl;
      const intl6 = tmp(1112).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3408.F0fkrh)} description={intl6.string(_modDef3440.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1112).intl;
      const intl4 = tmp(1112).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3440.ZTDCIv)} description={intl4.string(_modDef3440.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1112).intl;
      const intl2 = tmp(1112).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3440.HM2fjf)} description={intl2.string(_modDef3440.LQiFqJ)} />;
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
