// Module ID: 12635
// Function ID: 12636
// Name: CheckpointOverlay
// Dependencies: [5848, 21, 6217, 12636, 12652, 12653, 10949, 1113, 3339, 12654, 7553, 12661, 12372, 3307, 12664, 12670, 12428, 12671, 6921, 12676, 12678, 12681, 12689, 2]
// Exports: default

// Module 12635 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3307 from "module_3307" /* 3307 */;
import _modDef3339 from "module_3339" /* 3339 */;
import CheckpointConstants from "CheckpointConstants" /* 5848 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6217 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12636 */;
import CheckpointCharacterUnavailableScreenDefault from "CheckpointCharacterUnavailableScreen" /* 12652 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12653 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12654 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12661 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12664 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12670 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12671 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12676 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12678 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12681 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12689 */;
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
      return <tmp40 icon={null} title={intl9.string(_modDef3339["/7XYsa"])} description={intl10.string(_modDef3339["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1113).intl;
      const intl8 = tmp(1113).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3339["2BuyVC"])} description={intl8.string(_modDef3339["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1113).intl;
      const intl6 = tmp(1113).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3307.F0fkrh)} description={intl6.string(_modDef3339.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1113).intl;
      const intl4 = tmp(1113).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3339.ZTDCIv)} description={intl4.string(_modDef3339.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1113).intl;
      const intl2 = tmp(1113).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3339.HM2fjf)} description={intl2.string(_modDef3339.LQiFqJ)} />;
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
