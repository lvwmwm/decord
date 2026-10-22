// Module ID: 12890
// Function ID: 12891
// Name: CheckpointOverlay
// Dependencies: [6002, 21, 558, 576, 6349, 12891, 12896, 11591, 1128, 3088, 12897, 8527, 12905, 9615, 3056, 12907, 12910, 12911, 12913, 12929, 12930, 12932, 12936, 2]

// Module 12890 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6002 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6349 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12891 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12896 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12897 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12905 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12907 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12910 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12913 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12929 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12930 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12932 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12936 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  let onNextStep;
  let onPreviousStep;
  let route;
  const obj = react;
  const cResult = obj.c(17);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    let first;
    const _Symbol13 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp81 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp81;
      first = tmp81;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      let tmp71;
      const _Symbol12 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl7 = tmp(1128).intl;
        const intl8 = tmp(1128).intl;
        const tmp76 = <tmp74 icon={null} title={intl7.string(_modDef3088["/7XYsa"])} description={intl8.string(_modDef3088["X8/G/o"])} />;
        cResult[1] = tmp76;
        tmp71 = tmp76;
      } else {
        tmp71 = cResult[1];
      }
      return tmp71;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      let tmp66;
      const _Symbol11 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp69 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[2] = tmp69;
        tmp66 = tmp69;
      } else {
        tmp66 = cResult[2];
      }
      return tmp66;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      let tmp59;
      const _Symbol10 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl5 = tmp(1128).intl;
        const intl6 = tmp(1128).intl;
        const tmp64 = <tmp62 icon={null} title={intl5.string(_modDef3088["2BuyVC"])} description={intl6.string(_modDef3088["kF+Y3a"])} />;
        cResult[3] = tmp64;
        tmp59 = tmp64;
      } else {
        tmp59 = cResult[3];
      }
      return tmp59;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      let tmp54;
      const _Symbol9 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp57 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[4] = tmp57;
        tmp54 = tmp57;
      } else {
        tmp54 = cResult[4];
      }
      return tmp54;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      let tmp47;
      const _Symbol8 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl3 = tmp(1128).intl;
        const intl4 = tmp(1128).intl;
        const tmp52 = <tmp50 icon={null} title={intl3.string(_modDef3056.F0fkrh)} description={intl4.string(_modDef3088.Xg82Gy)} />;
        cResult[5] = tmp52;
        tmp47 = tmp52;
      } else {
        tmp47 = cResult[5];
      }
      return tmp47;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      let tmp42;
      const _Symbol7 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp45 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[6] = tmp45;
        tmp42 = tmp45;
      } else {
        tmp42 = cResult[6];
      }
      return tmp42;
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      let tmp37;
      const _Symbol6 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp40 = jsx(CheckpointTopServerStatsScreenDefault, {});
        cResult[7] = tmp40;
        tmp37 = tmp40;
      } else {
        tmp37 = cResult[7];
      }
      return tmp37;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      let tmp30;
      const _Symbol5 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl = tmp(1128).intl;
        const intl2 = tmp(1128).intl;
        const tmp35 = <tmp33 icon={null} title={intl.string(_modDef3088.ZTDCIv)} description={intl2.string(_modDef3088.y8Sr8J)} />;
        cResult[8] = tmp35;
        tmp30 = tmp35;
      } else {
        tmp30 = cResult[8];
      }
      return tmp30;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      let tmp25;
      const _Symbol4 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[9] = tmp28;
        tmp25 = tmp28;
      } else {
        tmp25 = cResult[9];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      let tmp20;
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[10] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[10];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      let tmp15;
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[11] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[11];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[16] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[16];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[12] === onNextStep) {
        if (cResult[13] === onPreviousStep) {
          let tmp10;
          if (cResult[14] === route) {
            tmp10 = cResult[15];
          }
          return tmp10;
        }
      }
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[12] = onNextStep;
      cResult[13] = onPreviousStep;
      cResult[14] = route;
      cResult[15] = tmp13;
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
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1128).intl;
      const intl8 = tmp(1128).intl;
      return <tmp36 icon={null} title={intl7.string(_modDef3088["/7XYsa"])} description={intl8.string(_modDef3088["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1128).intl;
      const intl6 = tmp(1128).intl;
      return <tmp30 icon={null} title={intl5.string(_modDef3088["2BuyVC"])} description={intl6.string(_modDef3088["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1128).intl;
      const intl4 = tmp(1128).intl;
      return <tmp24 icon={null} title={intl3.string(_modDef3056.F0fkrh)} description={intl4.string(_modDef3088.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1128).intl;
      const intl2 = tmp(1128).intl;
      return <tmp16 icon={null} title={intl.string(_modDef3088.ZTDCIv)} description={intl2.string(_modDef3088.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
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
