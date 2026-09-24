// Module ID: 15472
// Function ID: 15473
// Name: QuestDockBountyBackground
// Dependencies: [19, 15361, 21, 558, 568, 15368, 10606, 4494, 580, 676, 15468, 2]

// Module 15472 (QuestDockBountyBackground)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef676 from "module_676" /* 676 */;
import useToken from "useToken" /* 4494 */;
import AssetUtils from "AssetUtils" /* 10606 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15368 */;
import QuestDockVideoBackground from "QuestDockVideoBackground" /* 15468 */;
import noop from "module_19" /* 19 */;

const QuestDockVideoBackgroundDefault = QuestDockVideoBackground;

require = fn;
const expandedHeight = fn(15361).QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((previewImageUrl) => {
  const cResult = c.c(9);
  previewImageUrl = previewImageUrl.previewImageUrl;
  const questDockBounty = QuestDockCreativeContext.useQuestDockBounty();
  if (cResult[0] !== questDockBounty.videoPreview) {
    const mimetype = tmp(10606).getMimetype(questDockBounty.videoPreview);
    cResult[0] = questDockBounty.videoPreview;
    cResult[1] = mimetype;
    let tmp5 = mimetype;
    const tmpResult = tmp(10606);
  } else {
    tmp5 = cResult[1];
  }
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  if (cResult[2] !== token) {
    const tmp7Result = tmp7(676);
    const hexResult = tmp7Result.mix(token, tmp7(580).unsafe_rawColors.BLACK, 0.77, "rgb").hex();
    cResult[2] = token;
    cResult[3] = hexResult;
    let tmp9 = hexResult;
    const mixResult = tmp7Result.mix(token, tmp7(580).unsafe_rawColors.BLACK, 0.77, "rgb");
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === questDockBounty.videoPreview) {
      if (cResult[6] === previewImageUrl) {
        if (cResult[7] === tmp5) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
  }
  const obj3 = { imageUrl: previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: tmp5, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null };
  const tmpResult2 = useToken;
  obj3.collapsedMediaMode = QuestDockVideoBackground.QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = tmp9;
  obj3.backdropColor = tmp9;
  obj3.expandedHeight = expandedHeight;
  const tmp15 = jsx(QuestDockVideoBackgroundDefault, { imageUrl: previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: tmp5, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null });
  cResult[4] = tmp9;
  cResult[5] = questDockBounty.videoPreview;
  cResult[6] = previewImageUrl;
  cResult[7] = tmp5;
  cResult[8] = tmp15;
  tmp13 = tmp15;
}) : ((imageUrl) => {
  let questDockBounty;
  let token;
  questDockBounty = questDockBounty(15368).useQuestDockBounty();
  const items = [questDockBounty.videoPreview];
  const memo = noop.useMemo(() => AssetUtils.getMimetype(questDockBounty.videoPreview), items);
  let obj = questDockBounty(15368);
  token = questDockBounty(4494).useToken(token(580).colors.BACKGROUND_BRAND);
  const items1 = [token];
  const memo1 = noop.useMemo(() => _modDef676.mix(token, nativeDefault.unsafe_rawColors.BLACK, 0.77, "rgb").hex(), items1);
  const obj3 = { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null };
  const obj2 = questDockBounty(4494);
  obj3.collapsedMediaMode = questDockBounty(15468).QuestDockBackgroundCollapsedMediaMode.HIDDEN;
  obj3.gradientBaseColor = memo1;
  obj3.backdropColor = memo1;
  obj3.expandedHeight = expandedHeight;
  return jsx(token(15468), { imageUrl: imageUrl.previewImageUrl, videoUrl: questDockBounty.videoPreview, videoMimetype: memo, collapsedMediaMode: null, gradientBaseColor: null, backdropColor: null, expandedHeight: null });
}));
