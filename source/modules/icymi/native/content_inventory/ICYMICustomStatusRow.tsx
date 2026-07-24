// Module ID: 15285
// Function ID: 116597
// Name: UploadPlaceholder
// Dependencies: [57, 31, 27, 1849, 8350, 33, 689, 4130, 15226, 1273, 9886, 4126, 1212, 8868, 3974, 566, 4361, 8561, 9106, 9125, 477, 4660, 4089, 9142, 9983, 7437, 21, 664, 15282, 3969, 6883, 15286, 7961, 2]
// Exports: default

// Module 15285 (UploadPlaceholder)
import _slicedToArray from "_slicedToArray";
import SeparatorDot from "SeparatorDot";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import createICYMIStyles from "createICYMIStyles";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function UploadPlaceholder() {
  let obj = { style: callback3(false).uploadContainer };
  obj = { source: importDefault(9886), size: require(1273) /* Button */.IconSizes.SMALL };
  const items = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { variant: "text-md/normal", color: "text-strong" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["3UB9ad"]);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let closure_12 = _createForOfIteratorHelperLoose.createStyles((backgroundColor) => {
  const background = { backgroundColor, overflow: "hidden" };
  return { background };
});
let closure_13 = createICYMIStyles.createICYMIStyles((inset) => {
  let obj = {};
  obj = { position: "absolute" };
  let num = 56;
  if (!arg1) {
    num = importDefault(689).space.PX_40;
  }
  obj.top = num;
  obj.bubbles = obj;
  obj = { marginLeft: 32, borderRadius: importDefault(689).radii.round, height: 12, width: 12, overflow: "hidden" };
  obj.middleBubble = obj;
  const obj1 = { marginLeft: 44, marginTop: -4, borderRadius: importDefault(689).radii.round, height: 32, width: 32, overflow: "hidden" };
  obj.bottomBubble = obj1;
  const obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_8 };
  obj.title = obj2;
  obj.timestamp = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6 };
  obj.cardContainer = { position: "relative", marginLeft: inset.inset };
  const obj4 = { gap: null, alignItems: "center", justifyContent: "center", padding: null, borderRadius: null, width: "100%", zIndex: 1 };
  ({ margin: obj7.gap, margin: obj7.padding } = inset);
  obj4.borderRadius = importDefault(689).radii.lg;
  let num3 = 17;
  if (arg1) {
    num3 = 0;
  }
  obj4.marginBottom = num3;
  obj4.overflow = "hidden";
  obj.card = obj4;
  obj.textOnly = { paddingVertical: inset.margin + importDefault(689).space.PX_12 };
  const obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: inset.margin };
  obj.emojiTextContainer = obj6;
  obj.emojiText = { flexShrink: 1 };
  obj.leftAlign = { justifyContent: "flex-start" };
  const obj7 = { marginHorizontal: null, marginBottom: null, alignItems: "center", justifyContent: "center", minHeight: null, width: "100%", borderStyle: "dashed" };
  ({ margin: obj10.marginHorizontal, margin: obj10.marginBottom } = inset);
  obj7.minHeight = importDefault(689).space.PX_48;
  obj7.borderColor = importDefault(689).colors.BORDER_STRONG;
  obj7.borderWidth = 1;
  obj7.borderRadius = importDefault(689).radii.lg;
  obj7.gap = importDefault(689).space.PX_4;
  obj7.flexDirection = "row";
  obj.uploadContainer = obj7;
  const obj8 = { alignItems: "center", justifyContent: "center", borderRadius: importDefault(689).radii.md, height: 28, width: 40 };
  obj.buttonIcon = obj8;
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default function GravityCustomStatusEntryRow(id) {
  let customStatusExtra;
  let renderForScreenshot;
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const variant = id.variant;
  let c5;
  let c6;
  let closure_7;
  const tmp = callback3(renderForScreenshot);
  const React = tmp;
  let obj = id(renderForScreenshot[13]);
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  if (null != gradientBottom) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (null == backgroundColor) {
    backgroundColor = userId(renderForScreenshot[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp3Result = closure_12(backgroundColor);
  c5 = tmp3Result;
  let obj1 = id(renderForScreenshot[14]);
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp3Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  let obj2 = id(renderForScreenshot[15]);
  let items = [c6];
  obj = {};
  let str = customStatusExtra.emoji_id;
  str = undefined;
  const stateFromStores = obj2.useStateFromStores(items, () => _undefined2.getUser(userId));
  if (null != str) {
    str = str.toString();
  }
  let emoji_id = null;
  if ("0" !== str) {
    emoji_id = customStatusExtra.emoji_id;
  }
  obj.id = emoji_id;
  const emoji_name = customStatusExtra.emoji_name;
  let str2 = "";
  if (null != emoji_name) {
    str2 = emoji_name;
  }
  obj.name = str2;
  obj.animated = customStatusExtra.emoji_animated;
  let obj4 = id(renderForScreenshot[17]);
  const displayNameStylesFont = obj4.useDisplayNameStylesFont({ displayNameStyles: userId(renderForScreenshot[16])({ userId }) });
  let tmp14 = null != customStatusExtra.status;
  if (tmp14) {
    tmp14 = customStatusExtra.status.length > 0;
  }
  let obj5 = id(renderForScreenshot[18]);
  const gameMentionsAsPlainText = obj5.useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj.id) {
    obj = {};
    obj1 = {};
    let obj8 = id(renderForScreenshot[20]);
    let num7 = 40;
    if (obj8.isAndroid()) {
      num7 = 36;
    }
    obj1.lineHeight = num7;
    obj1.fontSize = 36;
    let obj9 = id(renderForScreenshot[20]);
    let num9 = 4;
    if (obj9.isAndroid()) {
      num9 = 0;
    }
    obj1.marginTop = num9;
    obj.style = obj1;
    obj.size = 40;
    const animated = obj.animated;
    obj.animate = null != animated && animated;
    obj.emoji = obj;
    let tmp17Result = callback(userId(renderForScreenshot[19]), obj);
    const tmp17 = callback;
    const tmp20 = userId(renderForScreenshot[19]);
  } else {
    tmp17Result = null;
  }
  let obj10 = id(renderForScreenshot[15]);
  let items1 = [c6];
  const stateFromStores1 = obj10.useStateFromStores(items1, () => _undefined2.getUser(userId));
  const tmp25 = variant(React.useState({ width: 0, height: 0 }), 2);
  const size = tmp25[0];
  closure_7 = tmp25[1];
  let items2 = [variant];
  const hasStatus = React.useMemo(() => {
    if ("ownStatus" === variant.kind) {
      let obj = { hasStatus: variant.hasStatus };
    } else {
      obj = { hasStatus: true };
    }
    return obj;
  }, items2).hasStatus;
  let obj11 = id(renderForScreenshot[15]);
  let items3 = [closure_7];
  let items4 = [id];
  let items5 = [tmp3Result.background, hexWithOpacityResult, renderForScreenshot, tmp.buttonIcon, , , ];
  ({ handlePressPrimary: arr6[4], handlePressSecondary: arr6[5], kind: arr6[6] } = variant);
  const stateFromStores2 = obj11.useStateFromStores(items3, () => {
    const notificationItemResult = lib.notificationItem();
    let tmp2 = null != notificationItemResult;
    if (tmp2) {
      tmp2 = notificationItemResult.id === id;
    }
    return tmp2;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp31 = "otherUserStatus" === variant.kind;
    if (tmp31) {
      let obj12 = userId(renderForScreenshot[26]);
      tmp31 = obj12.age(id) < 30 * userId(renderForScreenshot[27]).Millis.MINUTE;
      const ageResult = obj12.age(id);
    }
    obj2 = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot };
    let obj3 = { style: tmp.title };
    obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    let tmp40;
    if (null != displayNameStylesFont) {
      obj5 = { fontFamily: displayNameStylesFont };
      tmp40 = obj5;
    }
    obj4.style = tmp40;
    let obj17 = userId(renderForScreenshot[29]);
    obj4.children = obj17.getName(stateFromStores1);
    const items6 = [callback(id(renderForScreenshot[11]).Text, obj4), ];
    let obj6 = { style: tmp.timestamp };
    let tmp45 = hasStatus;
    if (hasStatus) {
      let obj7 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted" };
      let obj20 = id(renderForScreenshot[30]);
      obj7.children = obj20.getRelativeTimestamp(userId(renderForScreenshot[26]).extractTimestamp(id));
      tmp45 = callback(id(renderForScreenshot[11]).Text, obj7);
      const obj22 = userId(renderForScreenshot[26]);
    }
    const items7 = [tmp45, , ];
    let tmp50 = null;
    if (tmp31) {
      tmp50 = callback(userId(renderForScreenshot[31]), {});
    }
    items7[1] = tmp50;
    let tmp54 = null;
    if (tmp31) {
      obj8 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand" };
      const intl = id(renderForScreenshot[12]).intl;
      obj8.children = intl.string(id(renderForScreenshot[12]).t.tWnHcL);
      tmp54 = callback(id(renderForScreenshot[11]).Text, obj8);
    }
    items7[2] = tmp54;
    obj6.children = items7;
    items6[1] = callback2(c5, obj6);
    obj3.children = items6;
    obj2.title = callback2(c5, obj3);
    let tmp58 = null;
    if ("otherUserStatus" === variant.kind) {
      obj9 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default" };
      const intl2 = id(renderForScreenshot[12]).intl;
      obj9.children = intl2.string(id(renderForScreenshot[12]).t.fxOLPR);
      tmp58 = callback(id(renderForScreenshot[11]).Text, obj9);
    }
    obj2.subtitle = tmp58;
    obj2.highlight = stateFromStores2;
    obj10 = { cutouts: [], style: tmp.bubbles };
    obj11 = {};
    const items8 = [tmp.middleBubble, tmp3Result.background];
    obj11.style = items8;
    const tmp32 = callback2;
    const tmp35 = userId(renderForScreenshot[28]);
    const tmp36 = callback2;
    const tmp37 = c5;
    const tmp38 = callback;
    const tmp43 = callback2;
    const tmp44 = c5;
    const items9 = [callback(c5, obj11), ];
    obj12 = {};
    const items10 = [tmp.bottomBubble, tmp3Result.background];
    obj12.style = items10;
    items9[1] = callback(c5, obj12);
    obj10.children = items9;
    const items11 = [callback2(userId(renderForScreenshot[32]), obj10), ];
    const obj13 = { style: tmp.cardContainer };
    const obj14 = {};
    const tmp65 = userId(renderForScreenshot[32]);
    const tmp70 = callback2;
    const tmp71 = c5;
    const tmp72 = callback;
    if (renderForScreenshot) {
      let items12 = [];
    } else {
      const obj15 = { shape: id(renderForScreenshot[32]).CutoutShape.RoundedRect, x: size.width - userId(renderForScreenshot[6]).space.PX_16 - 40 - 3, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: userId(renderForScreenshot[6]).radii.md + 3 };
      items12 = [obj15, ];
      const obj16 = { shape: id(renderForScreenshot[32]).CutoutShape.RoundedRect, x: size.width - userId(renderForScreenshot[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: userId(renderForScreenshot[6]).radii.md + 3 };
      items12[1] = obj16;
    }
    obj14.cutouts = items12;
    obj17 = {
      onLayout(nativeEvent) {
          lib({ width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height });
        },
      onPress: variant.handlePressPrimary,
      underlayColor: hexWithOpacityResult
    };
    const items13 = [tmp.card, tmp3Result.background, ];
    let textOnly = null;
    if (null == tmp17Result) {
      textOnly = tmp.textOnly;
    }
    items13[2] = textOnly;
    obj17.style = items13;
    const obj18 = {};
    const items14 = [tmp.emojiTextContainer];
    obj18.style = items14;
    const items15 = [tmp17Result, , ];
    if (tmp14) {
      const obj19 = { style: tmp.emojiText, variant: "text-md/normal", children: gameMentionsAsPlainText };
      tmp14 = callback(id(renderForScreenshot[11]).Text, obj19);
    }
    items15[1] = tmp14;
    let tmp87 = !hasStatus;
    if (tmp87) {
      obj20 = { variant: "text-md/normal" };
      const intl3 = id(renderForScreenshot[12]).intl;
      obj20.children = intl3.string(id(renderForScreenshot[12]).t["6ojWO0"]);
      tmp87 = callback(id(renderForScreenshot[11]).Text, obj20);
    }
    items15[2] = tmp87;
    obj18.children = items15;
    const items16 = [callback2(c5, obj18), ];
    let tmp91 = !hasStatus;
    if (tmp91) {
      tmp91 = callback(UploadPlaceholder, {});
    }
    items16[1] = tmp91;
    obj17.children = items16;
    obj14.children = callback2(id(renderForScreenshot[21]).PressableHighlight, obj17);
    const items17 = [tmp72(userId(renderForScreenshot[32]), obj14), tmp27];
    obj13.children = items17;
    items11[1] = tmp70(tmp71, obj13);
    obj2.children = items11;
    return tmp32(tmp35, obj2);
  }
  const tmp12 = userId(renderForScreenshot[16])({ userId });
  const tmp3 = closure_12;
};
