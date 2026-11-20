// Module ID: 12605
// Function ID: 12606
// Name: CheckpointOverlay
// Dependencies: [5850, 21, 6219, 12606, 12622, 12623, 10891, 1112, 3341, 12624, 7552, 12631, 12342, 3309, 12634, 12640, 12398, 12641, 6920, 12646, 12648, 12651, 12659, 2]
// Exports: default

// Module 12605 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3309 from "module_3309" /* 3309 */;
import _modDef3341 from "module_3341" /* 3341 */;
import CheckpointConstants from "CheckpointConstants" /* 5850 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6219 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12606 */;
import CheckpointCharacterUnavailableScreenDefault from "CheckpointCharacterUnavailableScreen" /* 12622 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12623 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12624 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12631 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12634 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12640 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12641 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12646 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12648 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12651 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12659 */;
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
      return <tmp40 icon={null} title={intl9.string(_modDef3341["/7XYsa"])} description={intl10.string(_modDef3341["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1112).intl;
      const intl8 = tmp(1112).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3341["2BuyVC"])} description={intl8.string(_modDef3341["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1112).intl;
      const intl6 = tmp(1112).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3309.F0fkrh)} description={intl6.string(_modDef3341.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1112).intl;
      const intl4 = tmp(1112).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3341.ZTDCIv)} description={intl4.string(_modDef3341.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1112).intl;
      const intl2 = tmp(1112).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3341.HM2fjf)} description={intl2.string(_modDef3341.LQiFqJ)} />;
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
