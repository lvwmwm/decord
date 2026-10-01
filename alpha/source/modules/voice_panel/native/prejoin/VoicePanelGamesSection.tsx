// Module ID: 17229
// Function ID: 17230
// Name: VoicePanelGamesSection
// Dependencies: [19, 21, 6914, 8315, 8326, 1115, 9397, 6103, 9383, 17230, 9324, 2]

// Module 17229 (VoicePanelGamesSection)
import util from "util" /* 1115 */;
import useGame from "useGame" /* 6914 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8315 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8326 */;
import FormComponents from "FormComponents" /* 9324 */;
import VoiceChannelGamesExperimentDefault from "VoiceChannelGamesExperiment" /* 9383 */;
import useVoiceChannelGamesDefault from "useVoiceChannelGames" /* 17230 */;
import noop from "module_19" /* 19 */;

const GameActivityIconDefault = tmp3(9397);
require = fn;
function GameRow(gameId) {
  gameId = gameId.gameId;
  const data = useGame.useGame(gameId).data;
  const obj2 = { gameId, source: null };
  obj2.source = GameProfileAnalyticUtils.GameProfileSources.VoiceChannelGames;
  const tmp4Result = useOpenGameProfileModalDefault(obj2);
  closure_0 = tmp4Result;
  if (null == data) {
    return null;
  } else {
    if ("" !== data.name) {
      let name = data.name;
    } else {
      const intl = tmp(1115).intl;
      name = intl.string(tmp(1115).t.GIWFlF);
    }
    const obj3 = { game: data, size: 32, fallback: "placeholder" };
    const tmp7 = jsx(GameActivityIconDefault, { game: data, size: 32, fallback: "placeholder" });
    if (null == tmp4Result) {
      const obj4 = { icon: tmp7, label: name, disabled: true };
      let obj5 = obj4;
    } else {
      obj5 = {
        icon: tmp7,
        label: name,
        arrow: true,
        onPress() {
              return closure_0();
            },
        accessibilityRole: "button",
        accessibilityLabel: null
      };
      const intl2 = tmp(1115).intl;
      const obj6 = { gameName: name };
      obj5.accessibilityLabel = intl2.formatToPlainString(tmp(1115).t["9sZWVp"], obj6);
    }
    return jsx(tmp(6103).TableRow, obj5);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelGamesSection.tsx");

export default noop.memo(function VoicePanelGamesSection(arg0) {
  ({ members, guildId } = arg0);
  const tmp2 = VoiceChannelGamesExperimentDefault("voice_pre_join_games_section");
  const arr = useVoiceChannelGamesDefault(members, guildId, tmp2);
  let tmp3 = null;
  if (tmp2) {
    tmp3 = null;
    if (0 !== arr.length) {
      const obj = { title: null, hasIcons: true, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.crRMpG);
      obj.children = arr.map((gameId) => <GameRow key={arg0} gameId={arg0} />);
      tmp3 = jsx(FormComponents.VoicePanelFormSection, { title: null, hasIcons: true, children: null });
    }
  }
  return tmp3;
});
