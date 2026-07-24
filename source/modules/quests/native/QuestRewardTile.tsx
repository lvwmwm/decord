// Module ID: 10949
// Function ID: 85049
// Name: QuestRewardTile
// Dependencies: [57, 31, 27, 4122, 33, 4130, 689, 477, 566, 9499, 9494, 8346, 5085, 2]
// Exports: default

// Module 10949 (QuestRewardTile)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useMemo } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ AppState: closure_6, View: closure_7 } = get_ActivityIndicator);
let closure_10 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { borderRadius: importDefault(689).radii.sm, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
  obj.container = obj;
  obj.video = { overflow: "hidden", height: "100%", width: "100%" };
  obj.image = { height: "100%", width: "100%" };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  quest = quest.quest;
  const height = quest.height;
  const width = quest.width;
  let flag = quest.paused;
  if (flag === undefined) {
    flag = false;
  }
  let withAnimation = quest.withAnimation;
  if (withAnimation === undefined) {
    let obj = quest(width[7]);
    withAnimation = obj.isIOS();
  }
  let callback;
  let React;
  let obj1 = quest(width[8]);
  const items = [_isNativeReflectConstruct];
  const items1 = [quest];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_8.useReducedMotion);
  const tmp4 = useMemo(() => quest(width[9]).getQuestPrimaryReward(quest), items1);
  if (null != tmp4.name) {
    let name = tmp4.name;
  } else {
    name = tmp4.messages.name;
  }
  const items2 = [quest];
  const tmp5 = useMemo(() => quest(width[10]).getQuestAsset(quest, quest(width[10]).QuestAssetType.REWARD, undefined, true), items2);
  callback = tmp5;
  const tmp6 = callback2();
  const tmp7 = callback(React.useState("active" === currentState.currentState), 2);
  React = tmp7[1];
  const items3 = [tmp5.isAnimated];
  const effect = React.useEffect(() => {
    if (_undefined.isAnimated) {
      let closure_0 = outer1_6.addEventListener("change", (arg0) => {
        outer1_4("active" === arg0);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items3);
  const items4 = [tmp5, width, height];
  const memo = React.useMemo(() => {
    let obj = quest(width[10]);
    obj = { assetUrl: _undefined.url, width, height };
    return obj.getScaledImageUrl(obj);
  }, items4);
  const items5 = [quest.accessibilityLabelPrefix, name];
  const found = items5.filter(Boolean);
  obj = { accessibilityLabel: found.join(", "), style: items6 };
  items6 = [tmp6.container, { height, width }, quest.style];
  if (tmp5.isAnimated) {
    if (withAnimation) {
      obj = { style: tmp6.video, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover" };
      obj1 = { uri: tmp5.url };
      obj.source = obj1;
      obj.poster = memo;
      let tmp16 = !tmp7[0];
      if (!tmp16) {
        tmp16 = flag;
      }
      if (!tmp16) {
        tmp16 = stateFromStores;
      }
      obj.paused = tmp16;
      obj.muted = true;
      let tmp13Result = jsx(quest(width[11]).VideoComponent, { style: tmp6.video, source: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", poster: null, resizeMode: "cover" });
      const tmp13 = jsx;
    }
    obj.children = tmp13Result;
    return tmp10(tmp11, obj);
  }
  tmp13Result = jsx(height(width[12]), { source: { uri: memo }, style: tmp6.image });
};
