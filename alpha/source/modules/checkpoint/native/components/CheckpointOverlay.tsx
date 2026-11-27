// Module ID: 12866
// Function ID: 12867
// Name: CheckpointOverlay
// Dependencies: [6396, 21, 6767, 12867, 12882, 12884, 10505, 1112, 3495, 12885, 7137, 12892, 11446, 3463, 12895, 12901, 12645, 12902, 7756, 12907, 12909, 12912, 12920, 2]
// Exports: default

// Module 12866 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3463 from "module_3463" /* 3463 */;
import _modDef3495 from "module_3495" /* 3495 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6767 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12867 */;
import CheckpointCharacterUnavailableScreenDefault from "CheckpointCharacterUnavailableScreen" /* 12882 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12884 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12885 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12892 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12895 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12901 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12902 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12907 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12909 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12912 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12920 */;
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
      return <tmp40 icon={null} title={intl9.string(_modDef3495["/7XYsa"])} description={intl10.string(_modDef3495["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1112).intl;
      const intl8 = tmp(1112).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3495["2BuyVC"])} description={intl8.string(_modDef3495["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1112).intl;
      const intl6 = tmp(1112).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3463.F0fkrh)} description={intl6.string(_modDef3495.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1112).intl;
      const intl4 = tmp(1112).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3495.ZTDCIv)} description={intl4.string(_modDef3495.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1112).intl;
      const intl2 = tmp(1112).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3495.HM2fjf)} description={intl2.string(_modDef3495.LQiFqJ)} />;
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
