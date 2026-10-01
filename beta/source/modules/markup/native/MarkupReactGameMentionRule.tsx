// Module ID: 13390
// Function ID: 13391
// Name: MarkupReactGameMentionRule
// Dependencies: [19, 21, 4836, 576, 5419, 1115, 2010, 4824, 8021, 5899, 8133, 8139, 4832, 6727, 2]
// Exports: createFetchingGameMentionRule

// Module 13390 (MarkupReactGameMentionRule)
import nativeDefault from "native" /* 576 */;
import useGame from "useGame" /* 6727 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8133 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let size;
class MarkupGameMention {
  constructor(state) {
    let fn;
    let items;
    let items1;
    let obj5;
    let textColor1;
    state = state.state;
    const node = state.node;
    const tmp = closure_5();
    const gameId = node.gameId;
    let obj = state(5419);
    const gameMentionData = obj.useGameMentionData(gameId);
    const intl = state(1115).intl;
    const stringResult = intl.string(state(1115).t["11pdXZ"]);
    let gameName;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      gameName = stringResult;
    }
    let gameIcon;
    const tmp7 = gameId;
    const tmp8 = gameId(2010);
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    const tmp8Result = tmp8(gameId, gameIcon, { size: 32 });
    if (null == gameMentionData) {
      let textColor;
      const MarkupText2 = tmp2(4824).MarkupText;
      const tmp15 = closure_3;
      if (state != null) {
        textColor = state.textColor;
      }
      let obj2 = { color: textColor, children: items };
      items = ["@", stringResult];
      return tmp15(MarkupText2, obj2, state.key);
    } else {
      let tmp11 = null != tmp8Result;
      const obj3 = { size: "sm", style: tmp.icon };
      const tmp18 = closure_4(state(8021).UnknownGameIcon, obj3);
      if (tmp11) {
        tmp11 = "" !== tmp8Result;
      }
      let tmp17Result = tmp18;
      if (tmp11) {
        const obj4 = { style: tmp.icon, source: obj5 };
        obj5 = { uri: tmp8Result };
        tmp17Result = tmp17(tmp7(5899), obj4);
      }
      let str2 = "button";
      const MarkupText = tmp2(4824).MarkupText;
      const tmp13 = closure_3;
      if (state.noStyleAndInteraction) {
        str2 = "text";
      }
      const obj6 = { accessibilityRole: str2, style: tmp.chip, color: textColor1, onPress: fn, children: items1 };
      textColor1 = undefined;
      if (state != null) {
        textColor1 = state.textColor;
      }
      fn = undefined;
      if (!state.noStyleAndInteraction) {
        fn = () => {
          const obj = GameProfileActionCreatorsDefault;
          const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId };
          obj.openGameProfileModal(obj2);
        };
      }
      items1 = [tmp17Result, ];
      const obj7 = { variant: "text-sm/medium", style: tmp.chipText, children: gameName };
      items1[1] = closure_4(state(4832).Text, obj7);
      return tmp13(MarkupText, obj6, state.key);
    }
  }
}
function FetchingGameMention(node) {
  node = node.node;
  const state = node.state;
  const obj = useGame;
  const game = obj.useGame(node.gameId);
  return React3(MarkupGameMention, { node, state });
}
({ jsxs: c3, jsx: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { icon: size, chip: obj2, chipText: obj3 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, marginRight: 2 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
obj3 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
const hasOwnProperty = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default MarkupGameMention;
export function createFetchingGameMentionRule() {
  let obj = {
    gameMention: {
      react(node, arg1, state) {
        const obj = { node, state };
        return closure_1_4(FetchingGameMention, obj, state.key);
      }
    }
  };
  return obj;
}
