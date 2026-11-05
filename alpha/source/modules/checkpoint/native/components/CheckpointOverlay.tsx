// Module ID: 13874
// Function ID: 13875
// Name: CheckpointOverlay
// Dependencies: [6204, 21, 6572, 13875, 13880, 13886, 12178, 1113, 3219, 13887, 8789, 13893, 9914, 3187, 13896, 13901, 13677, 13902, 9883, 13907, 13908, 13911, 13915, 2]
// Exports: default

// Module 13874 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3187 from "module_3187" /* 3187 */;
import _modDef3219 from "module_3219" /* 3219 */;
import CheckpointConstants from "CheckpointConstants" /* 6204 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6572 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13875 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 13880 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13886 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13887 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13893 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13896 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13901 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13902 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13907 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13908 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13911 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13915 */;
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
      return <tmp40 icon={null} title={intl9.string(_modDef3219["/7XYsa"])} description={intl10.string(_modDef3219["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1113).intl;
      const intl8 = tmp(1113).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3219["2BuyVC"])} description={intl8.string(_modDef3219["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1113).intl;
      const intl6 = tmp(1113).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3187.F0fkrh)} description={intl6.string(_modDef3219.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1113).intl;
      const intl4 = tmp(1113).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3219.ZTDCIv)} description={intl4.string(_modDef3219.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1113).intl;
      const intl2 = tmp(1113).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3219.HM2fjf)} description={intl2.string(_modDef3219.LQiFqJ)} />;
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
