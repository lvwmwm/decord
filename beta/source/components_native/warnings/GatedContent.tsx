// Module ID: 12163
// Function ID: 12164
// Name: GatedContent
// Dependencies: [19, 21, 4836, 576, 7861, 5281, 5279, 4832, 5745, 2]
// Exports: default

// Module 12163 (GatedContent)
import nativeDefault from "native" /* 576 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, description: { textAlign: "center" }, buttonGroup: { width: "100%", maxWidth: 400 } };
obj2 = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
let closure_5 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default function GatedContent(onAgree) {
  let agreement;
  let agreementButtonVariant;
  let description;
  let disagreement;
  let disagreementButtonVariant;
  let items3;
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
  const tmp = closure_5();
  const items = [modalType, channelId, guildId];
  const effect = modalType.useEffect(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  let tmp5 = null;
  if (null != agreement) {
    tmp5 = null;
    if (null != onAgree) {
      let obj = { variant: agreementButtonVariant, onPress: tmp4, text: agreement };
      tmp5 = channelId(onAgree(onDisagree[5]).Button, obj, "agree");
    }
  }
  const tmp10 = channelId(onAgree(onDisagree[5]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback }, "disagree");
  const obj2 = { spacing: 16, style: tmp.container, children: null };
  const Stack = onAgree(onDisagree[6]).Stack;
  const obj3 = { align: "center", children: items3 };
  const Stack2 = onAgree(onDisagree[6]).Stack;
  items3 = [, , ];
  const obj4 = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title };
  items3[0] = channelId(onAgree(onDisagree[7]).Text, obj4);
  items3[1] = subtitle;
  const obj5 = { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description };
  items3[2] = channelId(onAgree(onDisagree[7]).Text, obj5);
  const items4 = [guildId(Stack2, obj3), ];
  const obj6 = { style: tmp.buttonGroup, children: null };
  const tmp11 = guildId;
  const tmp9 = channelId;
  if ("primary" === disagreementButtonVariant) {
    let items6;
    if ("primary" !== agreementButtonVariant) {
      const items5 = [tmp10, tmp5];
      items6 = items5;
    }
    obj6.children = items6;
    items4[1] = tmp9(tmp12, obj6);
    obj2.children = items4;
    return tmp11(Stack, obj2);
  }
  items6 = [tmp5, tmp10];
};
