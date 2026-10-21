// Module ID: 12858
// Function ID: 12859
// Name: CheckpointOverlay
// Dependencies: [5995, 21, 558, 576, 6342, 12859, 12864, 11574, 1128, 3088, 12865, 12872, 9603, 3056, 12874, 12876, 12877, 12895, 12896, 12898, 12902, 2]

// Module 12858 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import _modDef3056 from "module_3056" /* 3056 */;
import _modDef3088 from "module_3088" /* 3088 */;
import CheckpointConstants from "CheckpointConstants" /* 5995 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6342 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12859 */;
import CheckpointStatsIntroScreenDefault from "CheckpointStatsIntroScreen" /* 12864 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12865 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12872 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12874 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 12876 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12877 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12895 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12896 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12898 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  let onNextStep;
  let onPreviousStep;
  let route;
  const obj = react;
  const cResult = obj.c(15);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    let first;
    const _Symbol11 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp67 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp67;
      first = tmp67;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE_INTRO === statsScreen) {
      let tmp57;
      const _Symbol10 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl3 = tmp(1128).intl;
        const intl4 = tmp(1128).intl;
        const tmp62 = <tmp60 icon={null} title={intl3.string(_modDef3088["/7XYsa"])} description={intl4.string(_modDef3088["X8/G/o"])} />;
        cResult[1] = tmp62;
        tmp57 = tmp62;
      } else {
        tmp57 = cResult[1];
      }
      return tmp57;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      let tmp52;
      const _Symbol9 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp55 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[2] = tmp55;
        tmp52 = tmp55;
      } else {
        tmp52 = cResult[2];
      }
      return tmp52;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      let tmp47;
      const _Symbol8 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp50 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[3] = tmp50;
        tmp47 = tmp50;
      } else {
        tmp47 = cResult[3];
      }
      return tmp47;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      let tmp40;
      const _Symbol7 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        CheckpointStatsIntroScreenDefault;
        const intl = tmp(1128).intl;
        const intl2 = tmp(1128).intl;
        const tmp45 = <tmp43 icon={null} title={intl.string(_modDef3056.F0fkrh)} description={intl2.string(_modDef3088.Xg82Gy)} />;
        cResult[4] = tmp45;
        tmp40 = tmp45;
      } else {
        tmp40 = cResult[4];
      }
      return tmp40;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      let tmp35;
      const _Symbol6 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp38 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[5] = tmp38;
        tmp35 = tmp38;
      } else {
        tmp35 = cResult[5];
      }
      return tmp35;
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      let tmp30;
      const _Symbol5 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp33 = jsx(CheckpointStatsScreenDefault, { name: "Top server" });
        cResult[6] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[6];
      }
      return tmp30;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      let tmp25;
      const _Symbol4 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[7] = tmp28;
        tmp25 = tmp28;
      } else {
        tmp25 = cResult[7];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      let tmp20;
      const _Symbol3 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[8] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[8];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      let tmp15;
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[9] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[9];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[14] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[14];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[10] === onNextStep) {
        if (cResult[11] === onPreviousStep) {
          let tmp10;
          if (cResult[12] === route) {
            tmp10 = cResult[13];
          }
          return tmp10;
        }
      }
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[10] = onNextStep;
      cResult[11] = onPreviousStep;
      cResult[12] = route;
      cResult[13] = tmp13;
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
      const intl3 = tmp(1128).intl;
      const intl4 = tmp(1128).intl;
      return <tmp28 icon={null} title={intl3.string(_modDef3088["/7XYsa"])} description={intl4.string(_modDef3088["X8/G/o"])} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS_INTRO === statsScreen) {
      CheckpointStatsIntroScreenDefault;
      const intl = tmp(1128).intl;
      const intl2 = tmp(1128).intl;
      return <tmp20 icon={null} title={intl.string(_modDef3056.F0fkrh)} description={intl2.string(_modDef3088.Xg82Gy)} />;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.TOP_SERVER === statsScreen) {
      return jsx(CheckpointStatsScreenDefault, { name: "Top server" });
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
