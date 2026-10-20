// Module ID: 12794
// Function ID: 12795
// Name: CheckpointOverlay
// Dependencies: [21, 558, 576, 6320, 12795, 12800, 12805, 12807, 12809, 12827, 12828, 12830, 12834, 2]

// Module 12794 (CheckpointOverlay)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6320 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 12795 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 12800 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 12805 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 12807 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 12809 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 12827 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 12828 */;
import CheckpointFriendsStatsScreenDefault from "CheckpointFriendsStatsScreen" /* 12830 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 12834 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointOverlay(arg0) {
  let onNextStep;
  let onPreviousStep;
  let route;
  const obj = react;
  const cResult = obj.c(12);
  ({ route, onNextStep, onPreviousStep } = arg0);
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    let first;
    const _Symbol8 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp48 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp48;
      first = tmp48;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const tmpResult = CheckpointNavigation;
    const statsScreen = tmpResult.getCheckpointRoutePresentation(route).statsScreen;
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      let tmp40;
      const _Symbol7 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp43 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[1] = tmp43;
        tmp40 = tmp43;
      } else {
        tmp40 = cResult[1];
      }
      return tmp40;
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      let tmp35;
      const _Symbol6 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp38 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[2] = tmp38;
        tmp35 = tmp38;
      } else {
        tmp35 = cResult[2];
      }
      return tmp35;
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      let tmp30;
      const _Symbol5 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp33 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[3] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[3];
      }
      return tmp30;
    } else if (CheckpointNavigation.CheckpointStatsScreen.EMOJI === statsScreen) {
      let tmp25;
      const _Symbol4 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp28 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[4] = tmp28;
        tmp25 = tmp28;
      } else {
        tmp25 = cResult[4];
      }
      return tmp25;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAMES === statsScreen) {
      let tmp20;
      const _Symbol3 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[5] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[5];
      }
      return tmp20;
    } else if (CheckpointNavigation.CheckpointStatsScreen.GAME_TIME === statsScreen) {
      let tmp15;
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[6] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[6];
      }
      return tmp15;
    } else {
      if (CheckpointNavigation.CheckpointStatsScreen.SQUAD !== statsScreen) {
        if (CheckpointNavigation.CheckpointStatsScreen.SIDEKICK !== statsScreen) {
          if (CheckpointNavigation.CheckpointStatsScreen.SUMMARY === statsScreen) {
            let tmp6;
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
              cResult[11] = tmp9;
              tmp6 = tmp9;
            } else {
              tmp6 = cResult[11];
            }
            return tmp6;
          } else {
            return null;
          }
        }
      }
      if (cResult[7] === onNextStep) {
        if (cResult[8] === onPreviousStep) {
          let tmp10;
          if (cResult[9] === route) {
            tmp10 = cResult[10];
          }
          return tmp10;
        }
      }
      const tmp13 = jsx(CheckpointFriendsStatsScreenDefault, { route, onNextStep, onPreviousStep });
      cResult[7] = onNextStep;
      cResult[8] = onPreviousStep;
      cResult[9] = route;
      cResult[10] = tmp13;
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
    if (CheckpointNavigation.CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (CheckpointNavigation.CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
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
