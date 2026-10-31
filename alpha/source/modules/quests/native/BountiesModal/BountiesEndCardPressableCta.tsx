// Module ID: 16954
// Function ID: 16955
// Name: BountiesEndCardPressableCta
// Dependencies: [19, 17, 16955, 21, 5014, 575, 9717, 16951, 9695, 9719, 6788, 6786, 7871, 5717, 5624, 2]
// Exports: default

// Module 16954 (BountiesEndCardPressableCta)
import nativeDefault from "native" /* 575 */;
import QuestContent from "QuestContent" /* 6786 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9719 */;
import BountyConstants from "BountyConstants" /* 16955 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const END_CARD_IMAGE_SIZE = BountyConstants.END_CARD_IMAGE_SIZE;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = { image: size, info: { alignItems: "center", marginTop: nativeDefault.space.PX_12 }, ctaContainer: { position: "relative", alignItems: "center" } };
  size = { width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
  ({ alignItems: "center", marginTop: nativeDefault.space.PX_12 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default function BountiesEndCardPressableCta(bounty) {
  let items1;
  let obj6;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let getQuestImpressionId;
  let tmp = closure_9();
  let obj = bounty(getQuestImpressionId[6]);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  let obj2 = bounty(getQuestImpressionId[7]);
  const bountyCtaInfo = obj2.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    size = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
    const tmp2Result = bounty(getQuestImpressionId[8]);
    scaledImageUrl = tmp2Result.getScaledImageUrl(size);
  }
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = getQuestImpressionId;
  items[3] = sourceQuestContent;
  let callback;
  const tmp8 = closure_8;
  const tmp9 = closure_4;
  if (!flag) {
    callback = react.useCallback(() => {
      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
      const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
      const obj2 = { content: QuestContent.QuestContent.VIDEO_MODAL_ICON_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result = openAdGameLinkDirectly(obj, obj2);
    }, items);
  }
  const obj3 = { onPress: callback, disabled: flag, hitSlop: 16, accessibilityRole: "button", accessibilityLabel: bountyCtaInfo.label, style: tmp.ctaContainer, children: items1 };
  items1 = [, ];
  const obj4 = { source: { uri: scaledImageUrl }, style: tmp.image };
  items1[0] = closure_7(sourceQuestContent(getQuestImpressionId[13]), obj4);
  const obj5 = { style: tmp.info, children: closure_7(bounty(getQuestImpressionId[14]).Text, obj6) };
  obj6 = { variant: "text-md/semibold", color: "text-strong", children: bountyCtaInfo.label };
  items1[1] = closure_7(closure_5, obj5);
  return tmp8(tmp9, obj3);
};
