// Module ID: 13849
// Function ID: 13850
// Name: CheckpointOverlay
// Dependencies: [6224, 21, 6592, 13850, 13855, 13861, 12147, 1113, 3248, 13862, 8735, 13868, 9864, 3216, 13871, 13876, 13652, 13877, 9833, 13882, 13884, 13887, 13891, 2]
// Exports: default

// Module 13849 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3216 from "module_3216" /* 3216 */;
import _modDef3248 from "module_3248" /* 3248 */;
import CheckpointConstants from "CheckpointConstants" /* 6224 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6592 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13850 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 13855 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13861 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13862 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13868 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13871 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13876 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13877 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13882 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13884 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13887 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13891 */;
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
  } else if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    return jsx(CheckpointIntroScreenDefault, {});
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl9 = tmp(1113).intl;
      const intl10 = tmp(1113).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3248["/7XYsa"])} description={intl10.string(_modDef3248["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1113).intl;
      const intl8 = tmp(1113).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3248["2BuyVC"])} description={intl8.string(_modDef3248["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1113).intl;
      const intl6 = tmp(1113).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3216.F0fkrh)} description={intl6.string(_modDef3248.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1113).intl;
      const intl4 = tmp(1113).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3248.ZTDCIv)} description={intl4.string(_modDef3248.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1113).intl;
      const intl2 = tmp(1113).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3248.HM2fjf)} description={intl2.string(_modDef3248.LQiFqJ)} />;
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
