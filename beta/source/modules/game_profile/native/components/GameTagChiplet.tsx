// Module ID: 16983
// Function ID: 16984
// Name: GameTagChiplet
// Dependencies: [19, 17, 21, 4836, 8128, 8139, 9205, 2]

// Module 16983 (GameTagChiplet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8128 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GuildTag from "GuildTag" /* 9205 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let game;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const memoResult = react.memo((game) => {
  let obj7;
  let textColor;
  let userId;
  game = game.game;
  ({ userId, textColor } = game);
  const tmp = closure_5();
  const iconURL = game.getIconURL(32);
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  let tmp5Result;
  const tmp3 = useOpenGameProfileModalDefault;
  const tmp3Result = tmp3(obj);
  const BaseGuildTagChiplet = GuildTag.BaseGuildTagChiplet;
  if (null != iconURL) {
    const obj4 = { source: obj7, alt: "", style: tmp.image };
    obj7 = { uri: iconURL };
    tmp5Result = tmp5(Image, obj4);
  }
  ({ container: obj2.containerStyles, text: obj2.textStyle } = tmp);
  return <BaseGuildTagChiplet guildTag={game.name} guildBadge={tmp5Result} containerStyles={null} textStyle={null} onPress={tmp3Result} textColor={textColor} />;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default memoResult;
