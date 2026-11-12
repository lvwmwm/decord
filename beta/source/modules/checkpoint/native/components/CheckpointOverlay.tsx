// Module ID: 13906
// Function ID: 13907
// Name: CheckpointOverlay
// Dependencies: [6231, 21, 6599, 13907, 13912, 13918, 12170, 1113, 3248, 13919, 8747, 13925, 9881, 3216, 13928, 13933, 13709, 13934, 9850, 13939, 13941, 13944, 13948, 2]
// Exports: default

// Module 13906 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3216 from "module_3216" /* 3216 */;
import _modDef3248 from "module_3248" /* 3248 */;
import CheckpointConstants from "CheckpointConstants" /* 6231 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6599 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13907 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 13912 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13918 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13919 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13925 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13928 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13933 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13934 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13939 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13941 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13944 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13948 */;
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
