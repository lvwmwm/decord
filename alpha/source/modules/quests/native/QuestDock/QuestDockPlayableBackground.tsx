// Module ID: 17699
// Function ID: 17700
// Name: QuestDockPlayableBackground
// Dependencies: [19, 17, 17578, 5275, 17580, 21, 5243, 563, 17684, 17685, 17609, 10077, 5839, 575, 671, 17683, 2]

// Module 17699 (QuestDockPlayableBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import QuestConstants from "QuestConstants" /* 5275 */;
import AssetUtils from "AssetUtils" /* 10077 */;
import QuestDockConstants from "QuestDockConstants" /* 17580 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17578 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

function QuestDockBackgroundSmokeArt() {
  let height;
  let width;
  const items = [QuestDockStore];
  const tmp = closure_9();
  const obj = width(563);
  const stateFromStores = obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const tmp7 = height(17684)(QuestDockMode.EXPANDED);
  const obj2 = width(17685);
  size = obj2.useSmokeArtSize();
  const tmp2 = width;
  width = size.width;
  const tmp5 = height;
  height = size.height;
  const items1 = [width, height];
  let tmp9 = null;
  const tmp6 = QuestDockMode;
  if (tmp7) {
    const items2 = [tmp.smokeArtWrapper, tmp8];
    ({ surface: tmp2(17685).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== tmp6.EXPANDED });
    tmp5(17685);
    tmp9 = <View style={items2}>{null}</View>;
  }
  return tmp9;
}
const View = react_native.View;
const QuestDockMode = QuestConstants.QuestDockMode;
const expandedHeight = QuestDockConstants.QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
const memoResult = react.memo(function QuestDockPlayableBackground(previewImageUrl) {
  let questDockPlayable;
  let token;
  previewImageUrl = previewImageUrl.previewImageUrl;
  let obj = questDockPlayable(17609);
  questDockPlayable = obj.useQuestDockPlayable();
  const items = [questDockPlayable.videoPreview];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getMimetype(questDockPlayable.videoPreview);
  }, items);
  const obj2 = questDockPlayable(5839);
  token = obj2.useToken(token(575).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = react.useMemo(() => {
    const obj = _modDef671;
    const mixResult = obj.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb");
    return mixResult.hex();
  }, items1);
  token(17683);
  return <tmp5 imageUrl={previewImageUrl} videoUrl={questDockPlayable.videoPreview} videoMimetype={memo} collapsedMediaMode={questDockPlayable(17683).QuestDockBackgroundCollapsedMediaMode.HIDDEN} gradientBaseColor={memo1} backdropColor={memo1} expandedHeight={expandedHeight} foregroundContent={null} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBackground.tsx");

export default memoResult;
