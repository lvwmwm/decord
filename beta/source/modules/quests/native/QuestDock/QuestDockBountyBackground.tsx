// Module ID: 16609
// Function ID: 16610
// Name: QuestDockBountyBackground
// Dependencies: [19, 17, 16481, 6558, 16483, 21, 4913, 563, 16599, 16601, 16516, 16351, 9971, 9972, 5477, 575, 671, 16598, 2]

// Module 16609 (QuestDockBountyBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import AssetUtils from "AssetUtils" /* 9972 */;
import QuestDockConstants from "QuestDockConstants" /* 16483 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16481 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function QuestDockBackgroundSmokeArt() {
  let height;
  let width;
  const items = [QuestDockStore];
  const tmp = closure_9();
  const obj = width(563);
  const stateFromStores = obj.useStateFromStores(items, () => QuestDockStore.prevRestingQuestDockMode);
  const tmp7 = height(16599)(QuestDockMode.EXPANDED);
  const obj2 = width(16601);
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
    ({ surface: tmp2(16601).QuestDockBountySmokeSurface.EXPANDED, paused: stateFromStores !== tmp6.EXPANDED });
    tmp5(16601);
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
  let c0;
  _require = undefined;
  let token;
  previewImageUrl = previewImageUrl.previewImageUrl;
  let obj = require("QuestDockCreativeContext");
  const questDockBounty = obj.useQuestDockBounty();
  const obj2 = require("pickBountyVideoRendition");
  const pickBountyPreviewUrlResult = obj2.pickBountyPreviewUrl(questDockBounty, require("BountyAspectRatio").BountyAspectRatio.PORTRAIT);
  _require = pickBountyPreviewUrlResult;
  const items = [pickBountyPreviewUrlResult];
  const memo = react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getMimetype(c0);
  }, items);
  const obj3 = require("useToken");
  token = obj3.useToken(token(575).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = react.useMemo(() => {
    const obj = _modDef671;
    const mixResult = obj.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb");
    return mixResult.hex();
  }, items1);
  token(16598);
  return <tmp6 imageUrl={previewImageUrl} videoUrl={pickBountyPreviewUrlResult} videoMimetype={memo} collapsedMediaMode={require("QuestDockVideoBackground").QuestDockBackgroundCollapsedMediaMode.HIDDEN} gradientBaseColor={memo1} backdropColor={memo1} expandedHeight={expandedHeight} foregroundContent={null} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default memoResult;
