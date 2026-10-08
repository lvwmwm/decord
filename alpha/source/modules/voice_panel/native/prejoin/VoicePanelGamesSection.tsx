// Module ID: 17612
// Function ID: 17613
// Name: VoicePanelGamesSection
// Dependencies: [19, 21, 558, 576, 6995, 8850, 8851, 1126, 9107, 6184, 8826, 17613, 8770, 2]

// Module 17612 (VoicePanelGamesSection)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import useGame from "useGame" /* 6995 */;
import FormComponents from "FormComponents" /* 8770 */;
import VoiceChannelGamesExperimentDefault from "VoiceChannelGamesExperiment" /* 8826 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8851 */;
import useVoiceChannelGamesDefault from "useVoiceChannelGames" /* 17613 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require;

let tmp5;
const GameActivityIconDefault = tmp5(9107);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameRow(gameId) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  gameId = gameId.gameId;
  const obj2 = useGame;
  const data = obj2.useGame(gameId).data;
  if (cResult[0] !== gameId) {
    const obj3 = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames };
    cResult[0] = gameId;
    cResult[1] = obj3;
    tmp4 = obj3;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = useOpenGameProfileModalDefault(tmp4);
  _require = tmp6;
  if (null == data) {
    return null;
  } else {
    let name;
    let tmp11;
    let tmp15;
    let tmp14;
    if (cResult[2] === data) {
      let tmp7;
      let tmp8;
      if (cResult[3] === tmp6) {
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      const _Symbol2 = Symbol;
      if (tmp8 !== Symbol.for("react.early_return_sentinel")) {
        tmp7 = tmp8;
      }
      return tmp7;
    }
    const _Symbol = Symbol;
    const forResult = Symbol.for("react.early_return_sentinel");
    if ("" !== data.name) {
      name = data.name;
    } else {
      const intl = tmp(1126).intl;
      name = intl.string(tmp(1126).t.GIWFlF);
    }
    if (cResult[6] !== data) {
      const tmp13 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
      cResult[6] = data;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    if (null != tmp6) {
      let tmp16;
      if (cResult[8] !== tmp6) {
        class G {
          constructor() {
            return closure_0();
          }
        }
        cResult[8] = tmp6;
        cResult[9] = G;
        tmp16 = G;
      } else {
        class G {
          constructor() {
            return closure_0();
          }
        }
      }
      const TableRow = tmp(6184).TableRow;
      const intl2 = tmp(1126).intl;
      const obj6 = { gameName: name };
      tmp15 = <TableRow icon={tmp11} label={name} arrow onPress={tmp16} accessibilityRole="button" accessibilityLabel={intl2.formatToPlainString(intl3.t["9sZWVp"], obj6)} />;
      tmp14 = forResult;
    } else {
      class G {
        constructor() {
          return closure_0();
        }
      }
      tmp14 = jsx(tmp(6184).TableRow, { icon: tmp11, label: name, disabled: true });
    }
    cResult[2] = data;
    cResult[3] = tmp6;
    cResult[4] = tmp15;
    cResult[5] = tmp14;
    tmp8 = tmp14;
    tmp7 = tmp15;
  }
}) : (function GameRow(gameId) {
  let intl2;
  let obj6;
  gameId = gameId.gameId;
  const obj = useGame;
  const data = obj.useGame(gameId).data;
  const obj2 = { gameId, source: GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames };
  const tmp4 = useOpenGameProfileModalDefault;
  const tmp4Result = tmp4(obj2);
  let closure_0 = tmp4Result;
  if (null == data) {
    return null;
  } else {
    let name;
    let obj5;
    if ("" !== data.name) {
      name = data.name;
    } else {
      const intl = tmp(1126).intl;
      name = intl.string(tmp(1126).t.GIWFlF);
    }
    const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
    const TableRow = tmp(6184).TableRow;
    const tmp6 = jsx;
    if (null == tmp4Result) {
      obj5 = { icon: tmp7, label: name, disabled: true };
      const obj4 = { icon: tmp7, label: name, disabled: true };
    } else {
      obj5 = {
        icon: tmp7,
        label: name,
        arrow: true,
        onPress() {
              return closure_0();
            },
        accessibilityRole: "button",
        accessibilityLabel: intl2.formatToPlainString(intl3.t["9sZWVp"], obj6)
      };
      intl2 = tmp(1126).intl;
      obj6 = { gameName: name };
    }
    return tmp6(TableRow, obj5);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelGamesSection(arg0) {
  let guildId;
  let members;
  const obj = react2;
  const cResult = obj.c(6);
  ({ members, guildId } = arg0);
  const tmp4 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
  const arr = useVoiceChannelGamesDefault(members, guildId, tmp4);
  if (tmp4) {
    if (0 !== arr.length) {
      let first;
      let tmp7;
      let tmp10;
      const _Symbol2 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(intl3.t.crRMpG);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arr) {
        let tmp8;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(gameId) {
            return <closure_1_4 key={arg0} gameId={arg0} />;
          };
          cResult[3] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[3];
        }
        const mapped = arr.map(tmp8);
        cResult[1] = arr;
        cResult[2] = mapped;
        tmp7 = mapped;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[4] !== tmp7) {
        const tmp12 = jsx(FormComponents.VoicePanelFormSection, { title: first, hasIcons: true, children: tmp7 });
        cResult[4] = tmp7;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  }
  return null;
}) : (function VoicePanelGamesSection(arg0) {
  let guildId;
  let members;
  ({ members, guildId } = arg0);
  const tmp2 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
  const arr = useVoiceChannelGamesDefault(members, guildId, tmp2);
  let tmp3 = null;
  if (tmp2) {
    tmp3 = null;
    if (0 !== arr.length) {
      const VoicePanelFormSection = FormComponents.VoicePanelFormSection;
      const intl = intl3.intl;
      tmp3 = <VoicePanelFormSection title={intl.string(intl3.t.crRMpG)} hasIcons>{arr.map((gameId) => <closure_1_4 key={arg0} gameId={arg0} />)}</VoicePanelFormSection>;
    }
  }
  return tmp3;
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default memoResult;
