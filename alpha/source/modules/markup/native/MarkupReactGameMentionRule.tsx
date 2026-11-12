// Module ID: 10988
// Function ID: 10989
// Name: MarkupReactGameMentionRule
// Dependencies: [19, 17, 5997, 21, 575, 5243, 5866, 5998, 9310, 10989, 5881, 2149, 1113, 10990, 6274, 2150, 8309, 5957, 10212, 10217, 9466, 2]
// Exports: createFetchingGameMentionRule

// Module 10988 (MarkupReactGameMentionRule)
import nativeDefault from "native" /* 575 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5997 */;
import useGame from "useGame" /* 9466 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10212 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10217 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
class MarkupGameMention {
  constructor(fallbackVariant) {
    let inlineRoot;
    let items1;
    let items3;
    let node;
    let obj10;
    let pill;
    let state;
    let str2;
    let tmp21Result;
    let tmp23;
    let tmp23Result;
    ({ node, state } = fallbackVariant);
    fallbackVariant = fallbackVariant.fallbackVariant;
    if (fallbackVariant === undefined) {
      fallbackVariant = c9;
    }
    const gameId = node.gameId;
    const muted = state.muted;
    let obj = state(9310);
    const gameMentionData = obj.useGameMentionData(gameId);
    let obj2 = state(10989);
    const previewMentionLayout = obj2.usePreviewMentionLayout();
    let variant;
    const obj3 = state(5881);
    const fontScale = obj3.useFontScale();
    if (previewMentionLayout != null) {
      variant = previewMentionLayout.variant;
    }
    if (variant == null) {
      variant = fallbackVariant;
    }
    let prop;
    if (previewMentionLayout != null) {
      prop = previewMentionLayout.maxFontSizeMultiplier;
    }
    const fontSize = tmp(5866).TextStyleSheet[variant].fontSize;
    let num = Infinity;
    if (null != prop) {
      num = Infinity;
      if (prop >= 1) {
        num = prop;
      }
    }
    const tmpResult = state(5998);
    const minResult = min(tmpResult.scaleLineHeight(fontSize, fontScale), fontSize * num);
    let value;
    if (previewMentionLayout != null) {
      const widths = previewMentionLayout.widths;
      value = widths.get(node);
    }
    const tmp11 = closure_10(minResult, true === muted);
    let gameIcon;
    const tmp12 = gameId;
    const tmp13 = gameId(2149);
    if (gameMentionData != null) {
      gameIcon = gameMentionData.gameIcon;
    }
    const tmp13Result = tmp13(gameId, gameIcon, { size: minResult });
    let gameName;
    if (gameMentionData != null) {
      gameName = gameMentionData.gameName;
    }
    if (gameName == null) {
      const intl = tmp(1113).intl;
      gameName = intl.string(tmp(1113).t["11pdXZ"]);
    }
    let str = "mention-foreground";
    if (true === muted) {
      str = "text-muted";
    }
    let mentionPillOffsetY = state.mentionPillOffsetY;
    if (mentionPillOffsetY == null) {
      let prop1;
      if (true === state.noStyleAndInteraction) {
        prop1 = tmp(10990).MENTION_PILL_OFFSET_Y;
      }
      mentionPillOffsetY = prop1;
    }
    let result1;
    if (null != mentionPillOffsetY) {
      const result = mentionPillOffsetY * minResult;
      result1 = result / tmp(5866).TextStyleSheet[variant].fontSize;
    }
    if (null != result1) {
      const items = [tmp11.inlineRoot, ];
      const obj4 = { transform: items1 };
      items1 = [{ translateY: result1 }];
      const obj5 = { translateY: result1 };
      items[1] = obj4;
      inlineRoot = items;
    } else {
      inlineRoot = tmp11.inlineRoot;
    }
    const Stack = tmp(6274).Stack;
    const tmp20 = closure_7;
    if (null != value) {
      const items2 = [tmp11.pill, ];
      const obj6 = { maxWidth: value };
      items2[1] = obj6;
      pill = items2;
    } else {
      pill = tmp11.pill;
    }
    const obj7 = { direction: "horizontal", align: "center", style: pill, children: items3 };
    const tmpResult2 = state(2150);
    if (tmpResult2.isNullOrEmpty(tmp13Result)) {
      const obj8 = { size: "custom", color: str, style: tmp11.icon, accessible: false };
      tmp21Result = tmp21(tmp(8309).UnknownGameIcon, obj8);
      tmp23 = tmp21;
    } else {
      const obj9 = { source: obj10, resizeMode: "contain", style: tmp11.icon, accessible: false };
      obj10 = { uri: tmp13Result };
      tmp21Result = tmp21(tmp12(5957), obj9);
      tmp23 = tmp21;
    }
    items3 = [tmp21Result, ];
    const obj11 = { variant, color: str, lineClamp: 1, ellipsizeMode: str2, maxFontSizeMultiplier: prop, style: tmp11.name, children: gameName };
    str2 = "tail";
    const Text = tmp(5866).Text;
    if (null != value) {
      str2 = "clip";
    }
    items3[1] = tmp23(Text, obj11);
    const tmp20Result = tmp20(Stack, obj7);
    if (true === state.noStyleAndInteraction) {
      const obj12 = { style: inlineRoot, children: tmp20Result };
      tmp23Result = tmp23(closure_4, obj12);
    } else {
      const obj13 = {
        style: inlineRoot,
        accessibilityRole: "button",
        accessibilityLabel: gameName,
        onPress: function handlePress() {
            const obj = GameProfileActionCreatorsDefault;
            const obj2 = { gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention, sourceUserId: state.authorId };
            obj.openGameProfileModal(obj2);
          },
        children: tmp20Result
      };
      tmp23Result = tmp23(closure_3, obj13);
    }
    return tmp23Result;
  }
}
function FetchingGameMention(node) {
  const obj = useGame;
  const game = obj.useGame(node.node.gameId);
  const obj2 = {};
  const merged = Object.assign(node);
  return metroRequire(MarkupGameMention, obj2);
}
({ Pressable: c3, View: closure_4 } = react_native);
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = nativeDefault.space.PX_4 / 2;
let c9 = "body-sm/semibold";
const authStore = createStyles.createStyles((width, arg1) => {
  let num;
  const obj = { inlineRoot: { flexDirection: "row" }, pill: { width: "auto", minWidth: 0, flexShrink: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: nativeDefault.radii.xs, paddingHorizontal: gap, gap }, name: { minWidth: 0, flexShrink: 1 }, icon: size };
  ({ width: "auto", minWidth: 0, flexShrink: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: nativeDefault.radii.xs, paddingHorizontal: gap, gap });
  size = { width, height: width, borderRadius: nativeDefault.radii.xs, opacity: num };
  num = 1;
  const tmp = arg1;
  if (tmp) {
    num = MUTED_OPACITY_CONTENT;
  }
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default MarkupGameMention;
export function createFetchingGameMentionRule(variant) {
  let tmp = variant;
  if (variant === undefined) {
    tmp = c9;
  }
  const fallbackVariant = tmp;
  let obj = {
    gameMention: {
      react(gameId, arg1, insideSpoiler) {
        let combined;
        if (true === insideSpoiler.insideSpoiler) {
          const _HermesInternal = HermesInternal;
          combined = "<@$" + gameId.gameId + ">";
        } else {
          const obj = { node: gameId, state: insideSpoiler, fallbackVariant };
          combined = metroRequire(FetchingGameMention, obj, insideSpoiler.key);
        }
        return combined;
      }
    }
  };
  return obj;
}
