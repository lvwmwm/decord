// Module ID: 14368
// Function ID: 14369
// Name: CheckpointOverlay
// Dependencies: [6314, 21, 6682, 14369, 14372, 14159, 1113, 3269, 14377, 12952, 14378, 8004, 14385, 10870, 3237, 14388, 14393, 14171, 14394, 7374, 14401, 14403, 14406, 14410, 2]
// Exports: default

// Module 14368 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3237 from "module_3237" /* 3237 */;
import _modDef3269 from "module_3269" /* 3269 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6682 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 14159 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 14369 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 14372 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 14377 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 14378 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 14385 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 14388 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 14393 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 14394 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 14401 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 14403 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 14406 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 14410 */;
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
    if (CheckpointNavigation.CheckpointStatsScreen.CHARACTER_UNAVAILABLE === statsScreen) {
      CheckpointUnavailableScreenDefault;
      const intl11 = tmp(1113).intl;
      return <tmp44 message={intl11.string(_modDef3269.vcRnnQ)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl9 = tmp(1113).intl;
      const intl10 = tmp(1113).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3269["/7XYsa"])} description={intl10.string(_modDef3269["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1113).intl;
      const intl8 = tmp(1113).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3269["2BuyVC"])} description={intl8.string(_modDef3269["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1113).intl;
      const intl6 = tmp(1113).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3237.F0fkrh)} description={intl6.string(_modDef3269.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1113).intl;
      const intl4 = tmp(1113).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3269.ZTDCIv)} description={intl4.string(_modDef3269.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1113).intl;
      const intl2 = tmp(1113).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3269.HM2fjf)} description={intl2.string(_modDef3269.LQiFqJ)} />;
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
