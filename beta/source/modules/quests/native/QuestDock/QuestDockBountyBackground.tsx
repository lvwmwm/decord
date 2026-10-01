// Module ID: 14745
// Function ID: 14746
// Name: QuestDockBountyBackground
// Dependencies: [19, 17, 14622, 5756, 14624, 21, 4836, 563, 14732, 14733, 14631, 10689, 4531, 576, 672, 14731, 2]

// Module 14745 (QuestDockBountyBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14622 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

function QuestDockBackgroundSmokeArt() {
  let height;
  let width;
  const items = [QuestDockStore];
  const tmp = closure_9();
  const obj = width(563);
  const stateFromStores = obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const tmp7 = height(14732)(QuestDockMode.EXPANDED);
  const obj2 = width(14733);
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
    ({ surface: tmp2(14733).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== tmp6.EXPANDED });
    tmp5(14733);
    tmp9 = <View style={items2}>{null}</View>;
  }
  return tmp9;
}
const View = react_native.View;
const QuestDockMode = QuestConstants.QuestDockMode;
const expandedHeight = QuestDockConstants.QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ smokeArtWrapper: { position: "absolute", left: 0, bottom: 0 } });
const memoResult = react.memo(function QuestDockBountyBackground(previewImageUrl) {
  let questDockBounty;
  let token;
  previewImageUrl = previewImageUrl.previewImageUrl;
  let obj = questDockBounty(14631);
  questDockBounty = obj.useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getMimetype(questDockBounty.videoPreview);
  }, items);
  const obj2 = questDockBounty(4531);
  token = obj2.useToken(token(576).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = react.useMemo(() => {
    const obj = _modDef672;
    const mixResult = obj.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb");
    return mixResult.hex();
  }, items1);
  token(14731);
  return <tmp5 imageUrl={previewImageUrl} videoUrl={questDockBounty.videoPreview} videoMimetype={memo} collapsedMediaMode={questDockBounty(14731).QuestDockBackgroundCollapsedMediaMode.HIDDEN} gradientBaseColor={memo1} backdropColor={memo1} expandedHeight={expandedHeight} foregroundContent={null} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default memoResult;
