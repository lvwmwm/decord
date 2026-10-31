// Module ID: 15664
// Function ID: 15665
// Name: MarkupReactGameMentionRule
// Dependencies: [19, 21, 5014, 575, 8679, 1113, 2025, 5755, 8143, 5717, 9320, 9340, 5624, 7480, 2]
// Exports: createFetchingGameMentionRule

// Module 15664 (MarkupReactGameMentionRule)
import nativeDefault from "native" /* 575 */;
import useGame from "useGame" /* 7480 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9320 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let size;
class MarkupGameMention {
  constructor(state) {
    let handlePress;
    let items;
    let items1;
    let obj5;
    let textColor1;
    state = state.state;
    const node = state.node;
    const tmp = closure_5();
    const gameId = node.gameId;
    let obj = state(8679);
    const gameMentionData = obj.useGameMentionData(gameId);
    const intl = state(1113).intl;
    const stringResult = intl.string(state(1113).t["11pdXZ"]);
    let gameName;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      gameName = stringResult;
    }
    let gameIcon;
    const tmp7 = gameId;
    const tmp8 = gameId(2025);
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    const tmp8Result = tmp8(gameId, gameIcon, { size: 32 });
    if (null == gameMentionData) {
      let textColor;
      const MarkupText2 = tmp2(5755).MarkupText;
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
      const tmp18 = closure_4(state(8143).UnknownGameIcon, obj3);
      if (tmp11) {
        tmp11 = "" !== tmp8Result;
      }
      let tmp17Result = tmp18;
      if (tmp11) {
        const obj4 = { style: tmp.icon, source: obj5 };
        obj5 = { uri: tmp8Result };
        tmp17Result = tmp17(tmp7(5717), obj4);
      }
      let str2 = "button";
      const MarkupText = tmp2(5755).MarkupText;
      const tmp13 = closure_3;
      if (state.noStyleAndInteraction) {
        str2 = "text";
      }
      const obj6 = { accessibilityRole: str2, style: tmp.chip, color: textColor1, onPress: handlePress, children: items1 };
      textColor1 = undefined;
      if (state != null) {
        textColor1 = state.textColor;
      }
      handlePress = undefined;
      if (!state.noStyleAndInteraction) {
        handlePress = function handlePress() {
          const obj = GameProfileActionCreatorsDefault;
          const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId };
          obj.openGameProfileModal(obj2);
        };
      }
      items1 = [tmp17Result, ];
      const obj7 = { variant: "text-sm/medium", style: tmp.chipText, children: gameName };
      items1[1] = closure_4(state(5624).Text, obj7);
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
obj2 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 2 };
obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND };
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
