// Module ID: 12969
// Function ID: 12970
// Name: CheckpointOverlay
// Dependencies: [6015, 21, 558, 576, 6363, 12970, 12975, 11643, 1128, 3088, 12976, 8542, 12986, 9646, 3056, 12989, 12993, 12994, 12996, 9616, 13012, 13013, 13016, 13020, 2]

// Module 12969 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6363 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12970 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12975 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12976 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12986 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12989 */;
import CheckpointTopServerStatsScreenDefault from "CheckpointTopServerStatsScreen" /* 12993 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12996 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 13012 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 13013 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 13016 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 13020 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  let onNextStep;
  let onPreviousStep;
  let route;
  const obj = react;
  const cResult = obj.c(18);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    let first;
    const _Symbol14 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp88 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp88;
      first = tmp88;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      let tmp78;
      const _Symbol13 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl9 = tmp(1128).intl;
        const intl10 = tmp(1128).intl;
        const tmp83 = <tmp81 icon={null} title={intl9.string(_modDef3088["/7XYsa"])} description={intl10.string(_modDef3088["X8/G/o"])} />;
        cResult[1] = tmp83;
        tmp78 = tmp83;
      } else {
        tmp78 = cResult[1];
      }
      return tmp78;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      let tmp73;
      const _Symbol12 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp76 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[2] = tmp76;
        tmp73 = tmp76;
      } else {
        tmp73 = cResult[2];
      }
      return tmp73;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      let tmp66;
      const _Symbol11 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl7 = tmp(1128).intl;
        const intl8 = tmp(1128).intl;
        const tmp71 = <tmp69 icon={null} title={intl7.string(_modDef3088["2BuyVC"])} description={intl8.string(_modDef3088["kF+Y3a"])} />;
        cResult[3] = tmp71;
        tmp66 = tmp71;
      } else {
        tmp66 = cResult[3];
      }
      return tmp66;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      let tmp61;
      const _Symbol10 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp64 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[4] = tmp64;
        tmp61 = tmp64;
      } else {
        tmp61 = cResult[4];
      }
      return tmp61;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      let tmp54;
      const _Symbol9 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl5 = tmp(1128).intl;
        const intl6 = tmp(1128).intl;
        const tmp59 = <tmp57 icon={null} title={intl5.string(_modDef3056.F0fkrh)} description={intl6.string(_modDef3088.Xg82Gy)} />;
        cResult[5] = tmp59;
        tmp54 = tmp59;
      } else {
        tmp54 = cResult[5];
      }
      return tmp54;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      let tmp49;
      const _Symbol8 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp52 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[6] = tmp52;
        tmp49 = tmp52;
      } else {
        tmp49 = cResult[6];
      }
      return tmp49;
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      let tmp44;
      const _Symbol7 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp47 = jsx(CheckpointTopServerStatsScreenDefault, {});
        cResult[7] = tmp47;
        tmp44 = tmp47;
      } else {
        tmp44 = cResult[7];
      }
      return tmp44;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      let tmp37;
      const _Symbol6 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl3 = tmp(1128).intl;
        const intl4 = tmp(1128).intl;
        const tmp42 = <tmp40 icon={null} title={intl3.string(_modDef3088.ZTDCIv)} description={intl4.string(_modDef3088.y8Sr8J)} />;
        cResult[8] = tmp42;
        tmp37 = tmp42;
      } else {
        tmp37 = cResult[8];
      }
      return tmp37;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      let tmp32;
      const _Symbol5 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp35 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[9] = tmp35;
        tmp32 = tmp35;
      } else {
        tmp32 = cResult[9];
      }
      return tmp32;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      let tmp25;
      const _Symbol4 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl = tmp(1128).intl;
        const intl2 = tmp(1128).intl;
        const tmp30 = <tmp28 icon={null} title={intl.string(_modDef3088.HM2fjf)} description={intl2.string(_modDef3088.LQiFqJ)} />;
        cResult[10] = tmp30;
        tmp25 = tmp30;
      } else {
        tmp25 = cResult[10];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      let tmp20;
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[11] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[11];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      let tmp15;
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[12] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[12];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[17] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[17];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[13] === onNextStep) {
        if (cResult[14] === onPreviousStep) {
          let tmp10;
          if (cResult[15] === route) {
            tmp10 = cResult[16];
          }
          return tmp10;
        }
      }
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[13] = onNextStep;
      cResult[14] = onPreviousStep;
      cResult[15] = route;
      cResult[16] = tmp13;
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
      const intl9 = tmp(1128).intl;
      const intl10 = tmp(1128).intl;
      return <tmp40 icon={null} title={intl9.string(_modDef3088["/7XYsa"])} description={intl10.string(_modDef3088["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl7 = tmp(1128).intl;
      const intl8 = tmp(1128).intl;
      return <tmp34 icon={null} title={intl7.string(_modDef3088["2BuyVC"])} description={intl8.string(_modDef3088["kF+Y3a"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl5 = tmp(1128).intl;
      const intl6 = tmp(1128).intl;
      return <tmp28 icon={null} title={intl5.string(_modDef3056.F0fkrh)} description={intl6.string(_modDef3088.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointTopServerStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl3 = tmp(1128).intl;
      const intl4 = tmp(1128).intl;
      return <tmp20 icon={null} title={intl3.string(_modDef3088.ZTDCIv)} description={intl4.string(_modDef3088.y8Sr8J)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1128).intl;
      const intl2 = tmp(1128).intl;
      return <tmp14 icon={null} title={intl.string(_modDef3088.HM2fjf)} description={intl2.string(_modDef3088.LQiFqJ)} />;
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
