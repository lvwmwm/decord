// Module ID: 19218
// Function ID: 19219
// Name: VoicePanelGamesSection
// Dependencies: [19, 21, 7474, 9296, 9320, 1114, 9275, 6969, 19219, 9213, 2]

// Module 19218 (VoicePanelGamesSection)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1114 */;
import useGame from "useGame" /* 7474 */;
import FormComponents from "FormComponents" /* 9213 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9296 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import useVoiceChannelGamesDefault from "useVoiceChannelGames" /* 19219 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const GameActivityIconDefault = tmp3(9275);
function GameRow(gameId) {
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
      const intl = tmp(1114).intl;
      name = intl.string(tmp(1114).t.GIWFlF);
    }
    const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
    const TableRow = tmp(6969).TableRow;
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
      intl2 = tmp(1114).intl;
      obj6 = { gameName: name };
    }
    return tmp6(TableRow, obj5);
  }
}
const jsx = Fragment.jsx;
const memoResult = react.memo(function VoicePanelGamesSection(arg0) {
  let guildId;
  let members;
  ({ members, guildId } = arg0);
  const arr = useVoiceChannelGamesDefault(members, guildId);
  let tmp2 = null;
  if (0 !== arr.length) {
    const VoicePanelFormSection = FormComponents.VoicePanelFormSection;
    const intl = intl3.intl;
    tmp2 = <VoicePanelFormSection title={intl.string(intl3.t.crRMpG)} hasIcons>{arr.map((gameId) => <GameRow key={arg0} gameId={arg0} />)}</VoicePanelFormSection>;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default memoResult;
