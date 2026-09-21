// Module ID: 15963
// Function ID: 15964
// Name: CheckpointOverlay
// Dependencies: [21, 558, 568, 15957, 15964, 15968, 15970, 15971, 15972, 15973, 15974, 15975, 15976, 15977, 2]

// Module 15963 (CheckpointOverlay)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import CheckpointNavigation from "CheckpointNavigation" /* 15957 */;
import CheckpointWelcomeScreenDefault from "CheckpointWelcomeScreen" /* 15964 */;
import CheckpointVoiceStatsScreenDefault from "CheckpointVoiceStatsScreen" /* 15968 */;
import CheckpointMessagesStatsScreenDefault from "CheckpointMessagesStatsScreen" /* 15970 */;
import CheckpointServersStatsScreenDefault from "CheckpointServersStatsScreen" /* 15971 */;
import CheckpointEmojiStatsScreenDefault from "CheckpointEmojiStatsScreen" /* 15972 */;
import CheckpointGamesStatsScreenDefault from "CheckpointGamesStatsScreen" /* 15973 */;
import CheckpointGameTimeStatsScreenDefault from "CheckpointGameTimeStatsScreen" /* 15974 */;
import CheckpointSquadStatsScreenDefault from "CheckpointSquadStatsScreen" /* 15975 */;
import CheckpointSidekickStatsScreenDefault from "CheckpointSidekickStatsScreen" /* 15976 */;
import CheckpointSummaryStatsScreenDefault from "CheckpointSummaryStatsScreen" /* 15977 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = c.c(10);
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    const _Symbol10 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp54 = jsx(CheckpointWelcomeScreenDefault, {});
      cResult[0] = tmp54;
      let first = tmp54;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const statsScreen = tmp(15957).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(15957).CheckpointStatsScreen.VOICE === statsScreen) {
      const _Symbol9 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp49 = jsx(CheckpointVoiceStatsScreenDefault, {});
        cResult[1] = tmp49;
        let tmp46 = tmp49;
      } else {
        tmp46 = cResult[1];
      }
      return tmp46;
    } else if (tmp(15957).CheckpointStatsScreen.MESSAGES === statsScreen) {
      const _Symbol8 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp44 = jsx(CheckpointMessagesStatsScreenDefault, {});
        cResult[2] = tmp44;
        let tmp41 = tmp44;
      } else {
        tmp41 = cResult[2];
      }
      return tmp41;
    } else if (tmp(15957).CheckpointStatsScreen.SERVERS === statsScreen) {
      const _Symbol7 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp39 = jsx(CheckpointServersStatsScreenDefault, {});
        cResult[3] = tmp39;
        let tmp36 = tmp39;
      } else {
        tmp36 = cResult[3];
      }
      return tmp36;
    } else if (tmp(15957).CheckpointStatsScreen.EMOJI === statsScreen) {
      const _Symbol6 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp34 = jsx(CheckpointEmojiStatsScreenDefault, {});
        cResult[4] = tmp34;
        let tmp31 = tmp34;
      } else {
        tmp31 = cResult[4];
      }
      return tmp31;
    } else if (tmp(15957).CheckpointStatsScreen.GAMES === statsScreen) {
      const _Symbol5 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp29 = jsx(CheckpointGamesStatsScreenDefault, {});
        cResult[5] = tmp29;
        let tmp26 = tmp29;
      } else {
        tmp26 = cResult[5];
      }
      return tmp26;
    } else if (tmp(15957).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      const _Symbol4 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = jsx(CheckpointGameTimeStatsScreenDefault, {});
        cResult[6] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[6];
      }
      return tmp21;
    } else if (tmp(15957).CheckpointStatsScreen.SQUAD === statsScreen) {
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = jsx(CheckpointSquadStatsScreenDefault, {});
        cResult[7] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      return tmp16;
    } else if (tmp(15957).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = jsx(CheckpointSidekickStatsScreenDefault, {});
        cResult[8] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[8];
      }
      return tmp11;
    } else if (tmp(15957).CheckpointStatsScreen.SUMMARY === statsScreen) {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = jsx(CheckpointSummaryStatsScreenDefault, {});
        cResult[9] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[9];
      }
      return tmp6;
    } else {
      return null;
    }
    const tmpResult = tmp(15957);
  }
}) : ((route) => {
  route = route.route;
  if (route === CheckpointNavigation.CheckpointRoute.HOME) {
    return jsx(CheckpointWelcomeScreenDefault, {});
  } else {
    const statsScreen = tmp(15957).getCheckpointRoutePresentation(route).statsScreen;
    if (tmp(15957).CheckpointStatsScreen.VOICE === statsScreen) {
      return jsx(CheckpointVoiceStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.MESSAGES === statsScreen) {
      return jsx(CheckpointMessagesStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.SERVERS === statsScreen) {
      return jsx(CheckpointServersStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.EMOJI === statsScreen) {
      return jsx(CheckpointEmojiStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.GAMES === statsScreen) {
      return jsx(CheckpointGamesStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.GAME_TIME === statsScreen) {
      return jsx(CheckpointGameTimeStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.SQUAD === statsScreen) {
      return jsx(CheckpointSquadStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.SIDEKICK === statsScreen) {
      return jsx(CheckpointSidekickStatsScreenDefault, {});
    } else if (tmp(15957).CheckpointStatsScreen.SUMMARY === statsScreen) {
      return jsx(CheckpointSummaryStatsScreenDefault, {});
    } else {
      return null;
    }
    const tmpResult = tmp(15957);
  }
});
