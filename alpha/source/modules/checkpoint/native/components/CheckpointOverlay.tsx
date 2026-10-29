// Module ID: 13433
// Function ID: 13434
// Name: CheckpointOverlay
// Dependencies: [6054, 21, 558, 576, 6423, 13434, 13439, 13445, 11740, 1125, 3090, 13446, 8601, 13452, 9712, 3058, 13455, 13459, 13460, 13462, 9682, 13478, 13479, 13482, 13486, 2]

// Module 13433 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import _modDef3058 from "module_3058" /* 3058 */;
import _modDef3090 from "module_3090" /* 3090 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6423 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 13434 */;
import CheckpointIntroScreenDefault from "CheckpointIntroScreen" /* 13439 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 13445 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 13446 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 13452 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 13455 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 13459 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 13462 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13478 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13479 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13482 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13486 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  let onNextStep;
  let onPreviousStep;
  let route;
  const obj = react;
  const cResult = obj.c(19);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    let first;
    const _Symbol15 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp93 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp93;
      first = tmp93;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    let tmp85;
    const _Symbol14 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp88 = jsx(CheckpointIntroScreenDefault, {});
      cResult[1] = tmp88;
      tmp85 = tmp88;
    } else {
      tmp85 = cResult[1];
    }
    return tmp85;
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      let tmp78;
      const _Symbol13 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl9 = tmp(1125).intl;
        const intl10 = tmp(1125).intl;
        const tmp83 = <tmp81 icon={null} title={intl9.string(_modDef3090["/7XYsa"])} description={intl10.string(_modDef3090["X8/G/o"])} />;
        cResult[2] = tmp83;
        tmp78 = tmp83;
      } else {
        tmp78 = cResult[2];
      }
      return tmp78;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      let tmp73;
      const _Symbol12 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp76 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[3] = tmp76;
        tmp73 = tmp76;
      } else {
        tmp73 = cResult[3];
      }
      return tmp73;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      let tmp66;
      const _Symbol11 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl7 = tmp(1125).intl;
        const intl8 = tmp(1125).intl;
        const tmp71 = <tmp69 icon={null} title={intl7.string(_modDef3090["2BuyVC"])} description={intl8.string(_modDef3090["kF+Y3a"])} />;
        cResult[4] = tmp71;
        tmp66 = tmp71;
      } else {
        tmp66 = cResult[4];
      }
      return tmp66;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      let tmp61;
      const _Symbol10 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp64 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[5] = tmp64;
        tmp61 = tmp64;
      } else {
        tmp61 = cResult[5];
      }
      return tmp61;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      let tmp54;
      const _Symbol9 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl5 = tmp(1125).intl;
        const intl6 = tmp(1125).intl;
        const tmp59 = <tmp57 icon={null} title={intl5.string(_modDef3058.F0fkrh)} description={intl6.string(_modDef3090.Xg82Gy)} />;
        cResult[6] = tmp59;
        tmp54 = tmp59;
      } else {
        tmp54 = cResult[6];
      }
      return tmp54;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      let tmp49;
      const _Symbol8 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp52 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[7] = tmp52;
        tmp49 = tmp52;
      } else {
        tmp49 = cResult[7];
      }
      return tmp49;
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      let tmp44;
      const _Symbol7 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp47 = jsx(CheckpointTopServerStatsScreenDefault, {});
        cResult[8] = tmp47;
        tmp44 = tmp47;
      } else {
        tmp44 = cResult[8];
      }
      return tmp44;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      let tmp37;
      const _Symbol6 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl3 = tmp(1125).intl;
        const intl4 = tmp(1125).intl;
        const tmp42 = <tmp40 icon={null} title={intl3.string(_modDef3090.ZTDCIv)} description={intl4.string(_modDef3090.y8Sr8J)} />;
        cResult[9] = tmp42;
        tmp37 = tmp42;
      } else {
        tmp37 = cResult[9];
      }
      return tmp37;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      let tmp32;
      const _Symbol5 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp35 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[10] = tmp35;
        tmp32 = tmp35;
      } else {
        tmp32 = cResult[10];
      }
      return tmp32;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      let tmp25;
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl = tmp(1125).intl;
        const intl2 = tmp(1125).intl;
        const tmp30 = <tmp28 icon={null} title={intl.string(_modDef3090.HM2fjf)} description={intl2.string(_modDef3090.LQiFqJ)} />;
        cResult[11] = tmp30;
        tmp25 = tmp30;
      } else {
        tmp25 = cResult[11];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      let tmp20;
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[12] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[12];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      let tmp15;
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[13] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[13];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[18] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[18];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[14] === onNextStep) {
        if (cResult[15] === onPreviousStep) {
          let tmp10;
          if (cResult[16] === route) {
            tmp10 = cResult[17];
          }
          return tmp10;
        }
      }
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[14] = onNextStep;
      cResult[15] = onPreviousStep;
      cResult[16] = route;
      cResult[17] = tmp13;
      tmp10 = tmp13;
    }
  }
}) : (function CheckpointOverlay(route) {
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
      const intl9 = tmp(1125).intl;
      const intl10 = tmp(1125).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3090["/7XYsa"])} description={intl10.string(_modDef3090["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1125).intl;
      const intl8 = tmp(1125).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3090["2BuyVC"])} description={intl8.string(_modDef3090["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1125).intl;
      const intl6 = tmp(1125).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3058.F0fkrh)} description={intl6.string(_modDef3090.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1125).intl;
      const intl4 = tmp(1125).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3090.ZTDCIv)} description={intl4.string(_modDef3090.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1125).intl;
      const intl2 = tmp(1125).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3090.HM2fjf)} description={intl2.string(_modDef3090.LQiFqJ)} />;
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
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default tmp2;
