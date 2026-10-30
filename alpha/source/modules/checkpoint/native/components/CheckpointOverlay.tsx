// Module ID: 13583
// Function ID: 13584
// Name: CheckpointOverlay
// Dependencies: [6061, 21, 6430, 13584, 13589, 13595, 11933, 1114, 3091, 13596, 8635, 13602, 9738, 3059, 13605, 13609, 13610, 13612, 9707, 13628, 13629, 13632, 13636, 2]
// Exports: default

// Module 13583 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import _modDef3059 from "module_3059" /* 3059 */;
import _modDef3091 from "module_3091" /* 3091 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6430 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13584 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 13589 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13595 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13596 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13602 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13605 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13609 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13612 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13628 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13629 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13632 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13636 */;
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
      const intl9 = tmp(1114).intl;
      const intl10 = tmp(1114).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3091["/7XYsa"])} description={intl10.string(_modDef3091["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1114).intl;
      const intl8 = tmp(1114).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3091["2BuyVC"])} description={intl8.string(_modDef3091["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1114).intl;
      const intl6 = tmp(1114).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3059.F0fkrh)} description={intl6.string(_modDef3091.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1114).intl;
      const intl4 = tmp(1114).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3091.ZTDCIv)} description={intl4.string(_modDef3091.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1114).intl;
      const intl2 = tmp(1114).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3091.HM2fjf)} description={intl2.string(_modDef3091.LQiFqJ)} />;
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
