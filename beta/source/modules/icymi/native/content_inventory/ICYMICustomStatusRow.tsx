// Module ID: 16150
// Function ID: 16151
// Name: ICYMICustomStatusRow
// Dependencies: [32, 19, 17, 1372, 7783, 21, 576, 4836, 16091, 1177, 10815, 4832, 1115, 7297, 4683, 504, 5084, 9188, 10339, 10353, 1364, 5435, 4790, 9713, 11234, 8219, 11, 1091, 16147, 4678, 7055, 16151, 8276, 2]
// Exports: default

// Module 16150 (ICYMICustomStatusRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import TrashIcon from "TrashIcon" /* 4790 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import PencilIcon from "PencilIcon" /* 9713 */;
import AssetRegistryDefault from "AssetRegistry" /* 10815 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 11234 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
function UploadPlaceholder() {
  let intl;
  let items;
  const obj = { style: closure_13(false).uploadContainer, children: items };
  const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.SMALL };
  const Icon = native.Icon;
  items = [metroImportAll(Icon, obj2), ];
  const obj3 = { variant: "text-md/normal", color: "text-strong", children: intl.string(intl4.t["3UB9ad"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroImportAll(Text, obj3);
  return React4(View, obj);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { background: obj2 };
  return obj;
});
let closure_13 = createICYMIStyles.createICYMIStyles((gap, arg1) => {
  let num2;
  let obj3;
  let size1;
  let size2;
  let num = 56;
  if (!arg1) {
    num = nativeDefault.space.PX_40;
  }
  const obj = { bubbles: { position: "absolute", top: num }, middleBubble: size, bottomBubble: size1, title: { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, timestamp: { display: "flex", flexDirection: "row", alignItems: "center", gap: 6 }, cardContainer: { position: "relative", marginLeft: gap.inset }, card: obj3, textOnly: { paddingVertical: gap.margin + nativeDefault.space.PX_12 }, emojiTextContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: gap.margin }, emojiText: { flexShrink: 1 }, leftAlign: { justifyContent: "flex-start" }, uploadContainer: { marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_4, flexDirection: "row" }, buttonIcon: size2 };
  size = { marginLeft: 32, borderRadius: nativeDefault.radii.round, height: 12, width: 12, overflow: "hidden" };
  size1 = { marginLeft: 44, marginTop: -4, borderRadius: nativeDefault.radii.round, height: 32, width: 32, overflow: "hidden" };
  ({ display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  obj3 = { gap: gap.margin, alignItems: "center", justifyContent: "center", padding: gap.margin, borderRadius: nativeDefault.radii.lg, width: "100%", zIndex: 1, marginBottom: num2, overflow: "hidden" };
  num2 = 17;
  if (arg1) {
    num2 = 0;
  }
  ({ paddingVertical: gap.margin + nativeDefault.space.PX_12 });
  ({ marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_4, flexDirection: "row" });
  size2 = { alignItems: "center", justifyContent: "center", borderRadius: tmp3(576).radii.md, height: 28, width: 40 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default function GravityCustomStatusEntryRow(id) {
  let PressableHighlight;
  let _undefined;
  let c7;
  let closure_4;
  let customStatusExtra;
  let flag;
  let getRelativeTimestamp;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items6;
  let items7;
  let items8;
  let items9;
  let num4;
  let obj17;
  let obj5;
  let renderForScreenshot;
  let str2;
  let tmp14Result10;
  let tmp14Result9;
  let tmp20Result;
  let tmp25;
  let tmp31Result9;
  let underlayColor;
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const variant = id.variant;
  let closure_5;
  let c6;
  c7 = undefined;
  let tmp = closure_13(renderForScreenshot);
  react = tmp;
  const tmp2 = id;
  let obj = id(renderForScreenshot[13]);
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  const tmp5 = closure_12;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(tmp3[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp5Result = tmp5(backgroundColor);
  closure_5 = tmp5Result;
  const tmp2Result = tmp2(renderForScreenshot[14]);
  const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp5Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  let items = [c6];
  let str1;
  const tmp2Result9 = tmp2(renderForScreenshot[15]);
  const stateFromStores = tmp2Result9.useStateFromStores(items, () => UserStore.getUser(userId));
  const tmp10 = c6;
  if (customStatusExtra.emoji_id != null) {
    str1 = str.toString();
  }
  let emoji_id = null;
  if ("0" !== str1) {
    emoji_id = customStatusExtra.emoji_id;
  }
  let obj2 = { id: emoji_id, name: str2, animated: customStatusExtra.emoji_animated };
  str2 = customStatusExtra.emoji_name;
  if (str2 == null) {
    str2 = "";
  }
  const tmp15 = userId(renderForScreenshot[16])({ userId });
  const tmp2Result10 = tmp2(renderForScreenshot[17]);
  const displayNameStylesFont = tmp2Result10.useDisplayNameStylesFont({ displayNameStyles: tmp15 });
  let tmp31Result10 = null != customStatusExtra.status;
  if (tmp31Result10) {
    tmp31Result10 = customStatusExtra.status.length > 0;
  }
  const tmp2Result11 = tmp2(renderForScreenshot[18]);
  const gameMentionsAsPlainText = tmp2Result11.useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj2.id) {
    let num3 = 40;
    const tmp14Result = userId(renderForScreenshot[19]);
    const tmp20 = closure_8;
    const tmp2Result12 = tmp2(renderForScreenshot[20]);
    if (tmp2Result12.isAndroid()) {
      num3 = 36;
    }
    let obj3 = { lineHeight: num3, fontSize: 36, marginTop: num4 };
    num4 = 4;
    const tmp2Result13 = tmp2(renderForScreenshot[20]);
    if (tmp2Result13.isAndroid()) {
      num4 = 0;
    }
    let obj4 = { style: obj3, size: 40, animate: flag, emoji: obj2 };
    flag = obj2.animated;
    if (flag == null) {
      flag = false;
    }
    tmp20Result = tmp20(tmp14Result, obj4);
  } else {
    tmp20Result = null;
  }
  let items1 = [tmp10];
  const tmp2Result14 = tmp2(renderForScreenshot[15]);
  const stateFromStores1 = tmp2Result14.useStateFromStores(items1, () => UserStore.getUser(userId));
  [size, c7] = variant(react.useState({ width: 0, height: 0 }), 2);
  let items2 = [variant];
  const tmp23 = variant(react.useState({ width: 0, height: 0 }), 2);
  const hasStatus = react.useMemo(() => {
    let obj;
    if ("ownStatus" === variant.kind) {
      obj = { hasStatus: tmp.hasStatus };
      const obj2 = { hasStatus: tmp.hasStatus };
    } else {
      obj = { hasStatus: true };
    }
    return obj;
  }, items2).hasStatus;
  let items3 = [c7];
  let items4 = [id];
  let items5 = [tmp5Result.background, hexWithOpacityResult, renderForScreenshot, tmp.buttonIcon, , , ];
  ({ handlePressPrimary: arr6[4], handlePressSecondary: arr6[5], kind: arr6[6] } = variant);
  const tmp2Result15 = tmp2(renderForScreenshot[15]);
  const stateFromStores2 = tmp2Result15.useStateFromStores(items3, () => {
    const notificationItemResult = ICYMIStore.notificationItem();
    return null != notificationItemResult && notificationItemResult.id === id;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    let items12;
    let tmp27 = "otherUserStatus" === variant.kind;
    if (tmp27) {
      const tmp14Result7 = userId(renderForScreenshot[26]);
      const ageResult = tmp14Result7.age(id);
      tmp27 = ageResult < 30 * tmp14(tmp3[27]).Millis.MINUTE;
    }
    const element = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot, title: tmp28(tmp30, obj5), subtitle: tmp31Result9, highlight: stateFromStores2, children: items11 };
    obj5 = { style: tmp.title, children: items6 };
    let tmp32;
    const tmp14Result8 = userId(renderForScreenshot[28]);
    const Text = tmp2(tmp3[11]).Text;
    if (null != displayNameStylesFont) {
      let obj6 = { fontFamily: displayNameStylesFont };
      tmp32 = obj6;
    }
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp32, children: tmp14Result9.getName(stateFromStores1) };
    tmp14Result9 = userId(renderForScreenshot[29]);
    items6 = [tmp31(Text, obj7), ];
    let tmp31Result = hasStatus;
    const obj8 = { style: tmp.timestamp, children: items7 };
    if (tmp31Result) {
      const obj9 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted", children: getRelativeTimestamp(tmp14Result10.extractTimestamp(id)) };
      const Text2 = tmp2(tmp3[11]).Text;
      getRelativeTimestamp = tmp2(tmp3[30]).getRelativeTimestamp;
      tmp2(renderForScreenshot[30]);
      tmp14Result10 = userId(renderForScreenshot[26]);
      tmp31Result = tmp31(Text2, obj9);
    }
    items7 = [tmp31Result, , ];
    let tmp31Result7 = null;
    if (tmp27) {
      tmp31Result7 = tmp31(tmp14(tmp3[31]), {});
    }
    items7[1] = tmp31Result7;
    let tmp31Result8 = null;
    if (tmp27) {
      const obj10 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand", children: intl.string(tmp2(renderForScreenshot[12]).t.tWnHcL) };
      const Text3 = tmp2(tmp3[11]).Text;
      intl = tmp2(tmp3[12]).intl;
      tmp31Result8 = tmp31(Text3, obj10);
    }
    items7[2] = tmp31Result8;
    items6[1] = closure_9(closure_5, obj8);
    tmp31Result9 = null;
    if ("otherUserStatus" === variant.kind) {
      const obj11 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default", children: intl2.string(tmp2(renderForScreenshot[12]).t.fxOLPR) };
      const Text4 = tmp2(tmp3[11]).Text;
      intl2 = tmp2(tmp3[12]).intl;
      tmp31Result9 = tmp31(Text4, obj11);
    }
    const obj13 = { style: items8 };
    items8 = [tmp.middleBubble, tmp5Result.background];
    const obj12 = { cutouts: [], style: tmp.bubbles, children: items9 };
    items9 = [, ];
    const tmp14Result11 = userId(renderForScreenshot[32]);
    items9[0] = closure_8(closure_5, obj13);
    const obj14 = { style: items10 };
    items10 = [tmp.bottomBubble, tmp5Result.background];
    items9[1] = closure_8(closure_5, obj14);
    items11 = [tmp28(tmp14Result11, obj12), ];
    const obj15 = { style: tmp.cardContainer, children: items17 };
    const tmp14Result12 = userId(renderForScreenshot[32]);
    if (renderForScreenshot) {
      items12 = [];
    } else {
      const size1 = { shape: tmp2(tmp3[32]).CutoutShape.RoundedRect, x: size.width - tmp14(tmp3[6]).space.PX_16 - 40 - 3, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(tmp3[6]).radii.md + 3 };
      items12 = [size1, ];
      const size2 = { shape: tmp2(tmp3[32]).CutoutShape.RoundedRect, x: size.width - tmp14(tmp3[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(tmp3[6]).radii.md + 3 };
      items12[1] = size2;
    }
    const obj16 = { cutouts: items12, children: closure_9(PressableHighlight, obj17) };
    obj17 = {
      onLayout(nativeEvent) {
          size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
          _undefined(size);
        },
      onPress: variant.handlePressPrimary,
      underlayColor: hexWithOpacityResult,
      style: items13,
      children: items16
    };
    items13 = [tmp.card, tmp5Result.background, ];
    let textOnly = null;
    PressableHighlight = tmp2(tmp3[21]).PressableHighlight;
    if (null == tmp20Result) {
      textOnly = tmp.textOnly;
    }
    items13[2] = textOnly;
    const obj18 = { style: items14, children: items15 };
    items14 = [tmp.emojiTextContainer];
    items15 = [tmp20Result, , ];
    if (tmp31Result10) {
      const obj19 = { style: tmp.emojiText, variant: "text-md/normal", children: gameMentionsAsPlainText };
      tmp31Result10 = tmp31(tmp2(tmp3[11]).Text, obj19);
    }
    items15[1] = tmp31Result10;
    let tmp31Result11 = !hasStatus;
    if (tmp31Result11) {
      const obj20 = { variant: "text-md/normal", children: intl3.string(tmp2(renderForScreenshot[12]).t["6ojWO0"]) };
      const Text5 = tmp2(tmp3[11]).Text;
      intl3 = tmp2(tmp3[12]).intl;
      tmp31Result11 = tmp31(Text5, obj20);
    }
    items15[2] = tmp31Result11;
    items16 = [tmp28(tmp30, obj18), ];
    let tmp31Result12 = !hasStatus;
    if (tmp31Result12) {
      tmp31Result12 = tmp31(UploadPlaceholder, {});
    }
    items16[1] = tmp31Result12;
    items17 = [tmp31(tmp14Result12, obj16), tmp25];
    items11[1] = closure_9(closure_5, obj15);
    return closure_9(tmp14Result8, element);
  }
};
