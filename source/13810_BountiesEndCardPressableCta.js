// Module ID: 13810
// Function ID: 104468
// Name: BountiesEndCardPressableCta
// Dependencies: []
// Exports: default

// Module 13810 (BountiesEndCardPressableCta)
let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const END_CARD_IMAGE_SIZE = arg1(dependencyMap[2]).END_CARD_IMAGE_SIZE;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = {};
  obj = { width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE, borderRadius: importDefault(dependencyMap[5]).radii.xl, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_MUTED };
  obj.image = obj;
  obj = { gap: importDefault(dependencyMap[5]).space.PX_4, alignItems: "center", marginTop: importDefault(dependencyMap[5]).space.PX_12 };
  obj.info = obj;
  obj.ctaContainer = { 9223372036854775807: "withFriendRequestsIncoming", 9223372036854775807: "NOTIFICATION_SETTINGS_MODAL_OPEN" };
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default function BountiesEndCardPressableCta(bounty) {
  bounty = bounty.bounty;
  const arg1 = bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const importDefault = sourceQuestContent;
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  dependencyMap = getQuestImpressionId;
  let obj1 = arg1(dependencyMap[7]);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    let obj2 = arg1(dependencyMap[8]);
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
  const items1 = [callback(importDefault(dependencyMap[13]), obj1), ];
  const obj3 = { style: tmp.info };
  const items2 = [callback(arg1(dependencyMap[14]).Text, { children: bountyCtaInfo.label }), callback(arg1(dependencyMap[14]).Text, { children: bountyCtaInfo.subtext })];
  obj3.children = items2;
  items1[1] = callback2(closure_5, obj3);
  obj.children = items1;
  return callback2(closure_4, obj);
};
