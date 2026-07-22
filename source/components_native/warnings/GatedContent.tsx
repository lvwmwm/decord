// Module ID: 10003
// Function ID: 77325
// Name: GatedContent
// Dependencies: []
// Exports: default

// Module 10003 (GatedContent)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.title = { textAlign: "center" };
obj.description = { textAlign: "center" };
obj.buttonGroup = { 0: null, 0: null };
let closure_5 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default function GatedContent(onAgree) {
  let agreement;
  let agreementButtonVariant;
  let description;
  let disagreement;
  let disagreementButtonVariant;
  let subtitle;
  let title;
  ({ agreement, agreementButtonVariant } = onAgree);
  ({ title, subtitle, description } = onAgree);
  if (agreementButtonVariant === undefined) {
    agreementButtonVariant = "primary";
  }
  ({ disagreementButtonVariant, disagreement } = onAgree);
  if (disagreementButtonVariant === undefined) {
    disagreementButtonVariant = "secondary";
  }
  onAgree = onAgree.onAgree;
  const arg1 = onAgree;
  const onDisagree = onAgree.onDisagree;
  const dependencyMap = onDisagree;
  const modalType = onAgree.modalType;
  const React = modalType;
  const channelId = onAgree.channelId;
  const guildId = onAgree.guildId;
  const tmp = callback();
  const items = [modalType, channelId, guildId];
  const effect = React.useEffect(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = React.useCallback(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalClicked(onAgree(onDisagree[4]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (null != onDisagree) {
      onDisagree();
    }
  }, items1);
  const callback1 = React.useCallback(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalClicked(onAgree(onDisagree[4]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
    if (null != onAgree) {
      onAgree();
    }
  }, items2);
  let obj = { spacing: 16, style: tmp.container };
  obj = { align: "center" };
  obj = { style: tmp.title, children: title };
  const items3 = [channelId(arg1(dependencyMap[6]).Text, obj), subtitle, ];
  const obj1 = { margin: true, paddingHorizontal: true, height: true, alignItems: true, style: tmp.description, children: description };
  items3[2] = channelId(arg1(dependencyMap[6]).Text, obj1);
  obj.children = items3;
  const items4 = [guildId(arg1(dependencyMap[5]).Stack, obj), ];
  const obj2 = { style: tmp.buttonGroup };
  let tmp6 = null != agreement;
  if (tmp6) {
    tmp6 = null != onAgree;
  }
  if (tmp6) {
    const obj3 = { variant: agreementButtonVariant, onPress: callback1, text: agreement };
    tmp6 = channelId(arg1(dependencyMap[8]).Button, obj3);
  }
  const items5 = [tmp6, ];
  const obj4 = { variant: disagreementButtonVariant, text: disagreement, onPress: callback };
  items5[1] = channelId(arg1(dependencyMap[8]).Button, obj4);
  obj2.children = items5;
  items4[1] = guildId(arg1(dependencyMap[7]).ButtonGroup, obj2);
  obj.children = items4;
  return guildId(arg1(dependencyMap[5]).Stack, obj);
};
