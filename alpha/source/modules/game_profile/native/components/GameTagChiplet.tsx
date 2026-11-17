// Module ID: 20088
// Function ID: 20089
// Name: GameTagChiplet
// Dependencies: [19, 21, 5310, 10385, 10394, 10363, 6014, 2]

// Module 20088 (GameTagChiplet)
import Fragment from "Fragment" /* 21 */;
import GuildTag from "GuildTag" /* 10363 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 10385 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10394 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let tmp3;
const FastImageDefault = tmp3(6014);
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const memoResult = react.memo(function GameTagChiplet(game) {
  let obj7;
  let textColor;
  let userId;
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_4();
  const iconURL = game.getIconURL(32);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  let tmp7Result;
  const tmp5 = useOpenGameProfileModalDefault;
  const tmp5Result = tmp5(obj);
  const BaseGuildTagChiplet = GuildTag.BaseGuildTagChiplet;
  if (null != iconURL) {
    const obj4 = { source: obj7, accessible: false, style: tmp.image };
    obj7 = { uri: iconURL };
    tmp7Result = tmp7(FastImageDefault, obj4);
  }
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  return <BaseGuildTagChiplet guildTag={game.name} guildBadge={tmp7Result} containerStyles={null} textStyle={null} onPress={tmp5Result} textColor={textColor} />;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default memoResult;
