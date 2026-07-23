// Module ID: 13941
// Function ID: 106719
// Name: BountiesEndCardPressableCta
// Dependencies: [31, 27, 13942, 33, 4130, 689, 10468, 13938, 9458, 10472, 6970, 4981, 6969, 5085, 4126, 2]
// Exports: default

// Module 13941 (BountiesEndCardPressableCta)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { END_CARD_IMAGE_SIZE } from "END_CARD_IMAGE_SIZE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE, borderRadius: importDefault(689).radii.xl, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED };
  obj.image = obj;
  obj = { gap: importDefault(689).space.PX_4, alignItems: "center", marginTop: importDefault(689).space.PX_12 };
  obj.info = obj;
  obj.ctaContainer = { position: "relative", alignItems: "center" };
  return obj;
});
let result = require("END_CARD_IMAGE_SIZE").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default function BountiesEndCardPressableCta(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let getQuestImpressionId;
  const tmp = callback3();
  let obj = bounty(getQuestImpressionId[6]);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  let obj1 = bounty(getQuestImpressionId[7]);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    let obj2 = bounty(getQuestImpressionId[8]);
    obj = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
    scaledImageUrl = obj2.getScaledImageUrl(obj);
  }
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = getQuestImpressionId;
  items[3] = sourceQuestContent;
  obj = {};
  let callback;
  if (!flag) {
    callback = React.useCallback(() => {
      let obj = bounty(getQuestImpressionId[9]);
      obj = { adContentId: bounty.id, adCreativeType: bounty(getQuestImpressionId[10]).AdCreativeType.BOUNTY, cta: bounty.cta };
      obj = { content: bounty(getQuestImpressionId[11]).QuestContent.VIDEO_MODAL_ICON_END_CARD, ctaContent: bounty(getQuestImpressionId[12]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result = obj.openAdGameLinkDirectly(obj, obj);
    }, items);
  }
  obj.onPress = callback;
  obj.disabled = flag;
  obj.hitSlop = 16;
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = bountyCtaInfo.label;
  obj.style = tmp.ctaContainer;
  obj1 = { source: obj2, style: tmp.image };
  obj2 = { uri: scaledImageUrl };
  const items1 = [callback(sourceQuestContent(getQuestImpressionId[13]), obj1), ];
  const obj3 = { style: tmp.info };
  const obj4 = { variant: "text-md/semibold", color: "text-strong", children: bountyCtaInfo.label };
  const items2 = [callback(bounty(getQuestImpressionId[14]).Text, obj4), ];
  const obj5 = { variant: "text-sm/medium", color: "text-default", children: bountyCtaInfo.subtext };
  items2[1] = callback(bounty(getQuestImpressionId[14]).Text, obj5);
  obj3.children = items2;
  items1[1] = callback2(closure_5, obj3);
  obj.children = items1;
  return callback2(closure_4, obj);
};
