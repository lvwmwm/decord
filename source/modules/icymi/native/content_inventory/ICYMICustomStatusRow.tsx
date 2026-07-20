// Module ID: 15105
// Function ID: 114005
// Name: UploadPlaceholder
// Dependencies: []
// Exports: default

// Module 15105 (UploadPlaceholder)
function UploadPlaceholder() {
  let obj = { style: callback4(false).uploadContainer };
  obj = { source: importDefault(dependencyMap[10]), size: arg1(dependencyMap[9]).IconSizes.SMALL };
  const items = [callback2(arg1(dependencyMap[9]).Icon, obj), ];
  obj = { INTEGRATION_CREATE: 8, ConstraintReasonCode: 32 };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.string(arg1(dependencyMap[12]).t.3UB9ad);
  items[1] = callback2(arg1(dependencyMap[11]).Text, obj);
  obj.children = items;
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[5]));
const PX_8 = importDefault(dependencyMap[6]).space.PX_8;
const tmp2 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[7]).createStyles((backgroundColor) => {
  const background = { backgroundColor, overflow: "hidden" };
  return { background };
});
const obj = arg1(dependencyMap[7]);
let closure_13 = arg1(dependencyMap[8]).createICYMIStyles((gap) => {
  let obj = {};
  obj = { position: "absolute" };
  let num = 56;
  if (!arg1) {
    num = importDefault(dependencyMap[6]).space.PX_40;
  }
  obj.top = num;
  obj.bubbles = obj;
  obj = { alpha2: null, phoneCountryCode: null, phoneCountryCodes: null, localeForICU: null, currencyCode: null, borderRadius: importDefault(dependencyMap[6]).radii.round };
  obj.middleBubble = obj;
  obj.bottomBubble = { borderRadius: importDefault(dependencyMap[6]).radii.round };
  const obj2 = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", gap: importDefault(dependencyMap[6]).space.PX_8 };
  obj.title = obj2;
  obj.timestamp = {};
  obj.cardContainer = { position: "relative", marginLeft: gap.inset };
  const obj4 = { gap: gap.margin, padding: gap.margin, borderRadius: importDefault(dependencyMap[6]).radii.lg };
  let num3 = 17;
  if (arg1) {
    num3 = 0;
  }
  obj4.marginBottom = num3;
  obj4.overflow = "hidden";
  obj.card = obj4;
  const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.round };
  const obj3 = { position: "relative", marginLeft: gap.inset };
  obj.textOnly = { paddingVertical: gap.margin + importDefault(dependencyMap[6]).space.PX_12 };
  const obj6 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, gap: gap.margin };
  obj.emojiTextContainer = obj6;
  obj.emojiText = { flexShrink: 1 };
  obj.leftAlign = { justifyContent: "flex-start" };
  const obj7 = { TypeError: -426731672606500760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, replace: 1758338310826428200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, count: 6706030946666163000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000380712055958081, 1656666193: 3112985284373727700000000000000000000000000000000000000000000000000000000000000000, 1683123961: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004383619097214926, 1652020516: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011063388176271393 };
  ({ margin: obj10.marginHorizontal, margin: obj10.marginBottom } = gap);
  obj7.minHeight = importDefault(dependencyMap[6]).space.PX_48;
  obj7.borderColor = importDefault(dependencyMap[6]).colors.BORDER_STRONG;
  obj7.borderWidth = 1;
  obj7.borderRadius = importDefault(dependencyMap[6]).radii.lg;
  obj7.gap = importDefault(dependencyMap[6]).space.PX_4;
  obj7.flexDirection = "row";
  obj.uploadContainer = obj7;
  const obj8 = { "Bool(true)": true, "Bool(true)": "<string:2802319362>", "Bool(true)": "<string:2102460418>", "Bool(true)": "<string:1094783332>", state: "<string:1912602915>", borderRadius: importDefault(dependencyMap[6]).radii.md };
  obj.buttonIcon = obj8;
  return obj;
});
const obj2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default function GravityCustomStatusEntryRow(id) {
  let customStatusExtra;
  let renderForScreenshot;
  id = id.id;
  const arg1 = id;
  const userId = id.userId;
  const importDefault = userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const dependencyMap = renderForScreenshot;
  const variant = id.variant;
  const callback = variant;
  let View;
  let closure_6;
  let closure_7;
  const tmp = callback4(renderForScreenshot);
  const React = tmp;
  let obj = arg1(dependencyMap[13]);
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  if (null != gradientBottom) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (null == backgroundColor) {
    backgroundColor = importDefault(dependencyMap[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp3Result = closure_12(backgroundColor);
  View = tmp3Result;
  let obj1 = arg1(dependencyMap[14]);
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp3Result.background.backgroundColor, 0.6);
  closure_6 = hexWithOpacityResult;
  let obj2 = arg1(dependencyMap[15]);
  const items = [closure_6];
  obj = {};
  let str = customStatusExtra.emoji_id;
  str = undefined;
  const stateFromStores = obj2.useStateFromStores(items, () => hexWithOpacityResult.getUser(userId));
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
  let obj4 = arg1(dependencyMap[17]);
  const displayNameStylesFont = obj4.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[16])({ userId }) });
  let tmp14 = null != customStatusExtra.status;
  if (tmp14) {
    tmp14 = customStatusExtra.status.length > 0;
  }
  let obj5 = arg1(dependencyMap[18]);
  const gameMentionsAsPlainText = obj5.useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj.id) {
    obj = {};
    obj1 = {};
    let obj8 = arg1(dependencyMap[20]);
    let num7 = 40;
    if (obj8.isAndroid()) {
      num7 = 36;
    }
    obj1.lineHeight = num7;
    obj1.fontSize = 36;
    let obj9 = arg1(dependencyMap[20]);
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
    let tmp17Result = callback2(importDefault(dependencyMap[19]), obj);
    const tmp17 = callback2;
    const tmp20 = importDefault(dependencyMap[19]);
  } else {
    tmp17Result = null;
  }
  let obj10 = arg1(dependencyMap[15]);
  const items1 = [closure_6];
  const stateFromStores1 = obj10.useStateFromStores(items1, () => hexWithOpacityResult.getUser(userId));
  const tmp25 = callback(React.useState({ aze: false, azj: true }), 2);
  const size = tmp25[0];
  closure_7 = tmp25[1];
  const items2 = [variant];
  const hasStatus = React.useMemo(() => {
    if ("ownStatus" === variant.kind) {
      let obj = { hasStatus: variant.hasStatus };
    } else {
      obj = { hasStatus: true };
    }
    return obj;
  }, items2).hasStatus;
  let obj11 = arg1(dependencyMap[15]);
  const items3 = [closure_7];
  const items4 = [id];
  const items5 = [tmp3Result.background, hexWithOpacityResult, renderForScreenshot, tmp.buttonIcon, , , ];
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
      let obj12 = importDefault(dependencyMap[26]);
      tmp31 = obj12.age(id) < 30 * importDefault(dependencyMap[27]).Millis.MINUTE;
      const ageResult = obj12.age(id);
    }
    obj2 = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot };
    const obj3 = { style: tmp.title };
    obj4 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    let tmp40;
    if (null != displayNameStylesFont) {
      obj5 = { fontFamily: displayNameStylesFont };
      tmp40 = obj5;
    }
    obj4.style = tmp40;
    let obj17 = importDefault(dependencyMap[29]);
    obj4.children = obj17.getName(stateFromStores1);
    const items6 = [callback2(arg1(dependencyMap[11]).Text, obj4), ];
    const obj6 = { style: tmp.timestamp };
    let tmp45 = hasStatus;
    if (hasStatus) {
      const obj7 = {};
      let obj20 = arg1(dependencyMap[30]);
      obj7.children = obj20.getRelativeTimestamp(importDefault(dependencyMap[26]).extractTimestamp(id));
      tmp45 = callback2(arg1(dependencyMap[11]).Text, obj7);
      const obj22 = importDefault(dependencyMap[26]);
    }
    const items7 = [tmp45, , ];
    let tmp50 = null;
    if (tmp31) {
      tmp50 = callback2(importDefault(dependencyMap[31]), {});
    }
    items7[1] = tmp50;
    let tmp54 = null;
    if (tmp31) {
      obj8 = {};
      const intl = arg1(dependencyMap[12]).intl;
      obj8.children = intl.string(arg1(dependencyMap[12]).t.tWnHcL);
      tmp54 = callback2(arg1(dependencyMap[11]).Text, obj8);
    }
    items7[2] = tmp54;
    obj6.children = items7;
    items6[1] = callback3(View, obj6);
    obj3.children = items6;
    obj2.title = callback3(View, obj3);
    let tmp58 = null;
    if ("otherUserStatus" === variant.kind) {
      obj9 = {};
      const intl2 = arg1(dependencyMap[12]).intl;
      obj9.children = intl2.string(arg1(dependencyMap[12]).t.fxOLPR);
      tmp58 = callback2(arg1(dependencyMap[11]).Text, obj9);
    }
    obj2.subtitle = tmp58;
    obj2.highlight = stateFromStores2;
    obj10 = { cutouts: [], style: tmp.bubbles };
    obj11 = {};
    const items8 = [tmp.middleBubble, tmp3Result.background];
    obj11.style = items8;
    const tmp32 = callback3;
    const tmp35 = importDefault(dependencyMap[28]);
    const tmp36 = callback3;
    const tmp37 = View;
    const tmp38 = callback2;
    const tmp43 = callback3;
    const tmp44 = View;
    const items9 = [callback2(View, obj11), ];
    obj12 = {};
    const items10 = [tmp.bottomBubble, tmp3Result.background];
    obj12.style = items10;
    items9[1] = callback2(View, obj12);
    obj10.children = items9;
    const items11 = [callback3(importDefault(dependencyMap[32]), obj10), ];
    const obj13 = { style: tmp.cardContainer };
    const obj14 = {};
    const tmp65 = importDefault(dependencyMap[32]);
    const tmp70 = callback3;
    const tmp71 = View;
    const tmp72 = callback2;
    if (renderForScreenshot) {
      let items12 = [];
    } else {
      const obj15 = { shape: arg1(dependencyMap[32]).CutoutShape.RoundedRect, x: size.width - importDefault(dependencyMap[6]).space.PX_16 - 40 - 3, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: importDefault(dependencyMap[6]).radii.md + 3 };
      items12 = [obj15, ];
      const obj16 = { shape: arg1(dependencyMap[32]).CutoutShape.RoundedRect, x: size.width - importDefault(dependencyMap[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: importDefault(dependencyMap[6]).radii.md + 3 };
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
      tmp14 = callback2(arg1(dependencyMap[11]).Text, obj19);
    }
    items15[1] = tmp14;
    let tmp87 = !hasStatus;
    if (tmp87) {
      obj20 = { variant: "text-md/normal" };
      const intl3 = arg1(dependencyMap[12]).intl;
      obj20.children = intl3.string(arg1(dependencyMap[12]).t.6ojWO0);
      tmp87 = callback2(arg1(dependencyMap[11]).Text, obj20);
    }
    items15[2] = tmp87;
    obj18.children = items15;
    const items16 = [callback3(View, obj18), ];
    let tmp91 = !hasStatus;
    if (tmp91) {
      tmp91 = callback2(UploadPlaceholder, {});
    }
    items16[1] = tmp91;
    obj17.children = items16;
    obj14.children = callback3(arg1(dependencyMap[21]).PressableHighlight, obj17);
    const items17 = [tmp72(importDefault(dependencyMap[32]), obj14), tmp27];
    obj13.children = items17;
    items11[1] = tmp70(tmp71, obj13);
    obj2.children = items11;
    return tmp32(tmp35, obj2);
  }
  const tmp12 = importDefault(dependencyMap[16])({ userId });
  const tmp3 = closure_12;
};
