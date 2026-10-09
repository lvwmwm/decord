// Module ID: 17760
// Function ID: 17761
// Name: GameTagChiplet
// Dependencies: [19, 21, 5091, 558, 576, 8859, 8860, 6163, 8839, 2]

// Module 17760 (GameTagChiplet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import GuildTag from "GuildTag" /* 8839 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8859 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8860 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp3;
const FastImageDefault = tmp3(6163);
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, minWidth: 0, overflow: "hidden" }, text: { flexShrink: 1, minWidth: 0 }, image: { width: 12, height: 12 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameTagChiplet(arg0) {
  let game;
  let textColor;
  let tmp5;
  let userId;
  const obj = react2;
  const cResult = obj.c(15);
  ({ game, userId, textColor } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== game) {
    const iconURL = game.getIconURL(32);
    cResult[0] = game;
    cResult[1] = iconURL;
    tmp5 = iconURL;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === game.id) {
    let tmp7;
    if (cResult[3] === userId) {
      tmp7 = cResult[4];
    }
    const tmp9 = useOpenGameProfileModalDefault(tmp7);
    const tmp8 = importDefault;
    if (cResult[5] === tmp5) {
      let tmp10;
      if (cResult[6] === tmp4.image) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === game.name) {
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp4.text) {
              if (cResult[12] === tmp10) {
                let tmp14;
                if (cResult[13] === textColor) {
                  tmp14 = cResult[14];
                }
                return tmp14;
              }
            }
          }
        }
      }
      ({ container: obj5.containerStyles, text: obj5.textStyle } = tmp4);
      const tmp16 = jsx(GuildTag.BaseGuildTagChiplet, { guildTag: game.name, guildBadge: tmp10, containerStyles: null, textStyle: null, onPress: tmp9, textColor });
      cResult[8] = game.name;
      cResult[9] = tmp9;
      cResult[10] = tmp4.container;
      cResult[11] = tmp4.text;
      cResult[12] = tmp10;
      cResult[13] = textColor;
      cResult[14] = tmp16;
      tmp14 = tmp16;
    }
    let tmp12;
    if (null != tmp5) {
      const obj4 = { uri: tmp5 };
      tmp12 = jsx(tmp8(6163), { source: obj4, accessible: false, style: tmp4.image });
    }
    cResult[5] = tmp5;
    cResult[6] = tmp4.image;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const obj9 = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.CallTile, sourceUserId: userId };
  cResult[2] = game.id;
  cResult[3] = userId;
  cResult[4] = obj9;
  tmp7 = obj9;
}) : (function GameTagChiplet(game) {
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
}));
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameTagChiplet.tsx");

export default memoResult;
