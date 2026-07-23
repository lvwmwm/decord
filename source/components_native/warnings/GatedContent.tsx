// Module ID: 10011
// Function ID: 77365
// Name: GatedContent
// Dependencies: [31, 33, 4130, 689, 7538, 4541, 4126, 4965, 4543, 2]
// Exports: default

// Module 10011 (GatedContent)
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, textAlign: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose.buttonGroup = { width: "100%", maxWidth: 400 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("components_native/warnings/GatedContent.tsx");

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
  const onDisagree = onAgree.onDisagree;
  const modalType = onAgree.modalType;
  const channelId = onAgree.channelId;
  const guildId = onAgree.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [modalType, channelId, guildId];
  const effect = modalType.useEffect(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalClicked(onAgree(onDisagree[4]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (null != onDisagree) {
      onDisagree();
    }
  }, items1);
  const callback1 = modalType.useCallback(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalClicked(onAgree(onDisagree[4]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
    if (null != onAgree) {
      onAgree();
    }
  }, items2);
  let obj = { spacing: 16, style: tmp.container };
  obj = { align: "center" };
  obj = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title };
  const items3 = [channelId(onAgree(onDisagree[6]).Text, obj), subtitle, ];
  const obj1 = { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description };
  items3[2] = channelId(onAgree(onDisagree[6]).Text, obj1);
  obj.children = items3;
  const items4 = [guildId(onAgree(onDisagree[5]).Stack, obj), ];
  const obj2 = { style: tmp.buttonGroup };
  let tmp6 = null != agreement;
  if (tmp6) {
    tmp6 = null != onAgree;
  }
  if (tmp6) {
    const obj3 = { variant: agreementButtonVariant, onPress: callback1, text: agreement };
    tmp6 = channelId(onAgree(onDisagree[8]).Button, obj3);
  }
  const items5 = [tmp6, ];
  const obj4 = { variant: disagreementButtonVariant, text: disagreement, onPress: callback };
  items5[1] = channelId(onAgree(onDisagree[8]).Button, obj4);
  obj2.children = items5;
  items4[1] = guildId(onAgree(onDisagree[7]).ButtonGroup, obj2);
  obj.children = items4;
  return guildId(onAgree(onDisagree[5]).Stack, obj);
};
