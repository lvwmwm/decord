// Module ID: 9169
// Function ID: 71855
// Name: AVATAR_SIZE
// Dependencies: [31, 27, 9148, 33, 4130, 689, 1392, 9170, 1557, 3991, 4554, 5515, 9171, 4126, 1212, 2]
// Exports: default

// Module 9169 (AVATAR_SIZE)
import "result";
import { View } from "get ActivityIndicator";
import BANNER_RATIO_HEIGHT_16_9 from "BANNER_RATIO_HEIGHT_16_9";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let AVATAR_BORDER_WIDTH;
let AVATAR_SIZE;
let closure_6;
let closure_7;
const require = arg1;
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = BANNER_RATIO_HEIGHT_16_9);
const useBannerHeight = BANNER_RATIO_HEIGHT_16_9.useBannerHeight;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 0, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM };
_createForOfIteratorHelperLoose.avatar = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatarContainer = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.featureIcon = { position: "absolute", top: 56, right: -8 };
_createForOfIteratorHelperLoose.headerTitle = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.headerDescription = { lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
let closure_10 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
let closure_11 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
let obj1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
const result = require("BANNER_RATIO_HEIGHT_16_9").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(hasManualFormFields) {
  let guild;
  let scrollTop;
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  const tmp = _createForOfIteratorHelperLoose();
  if (null != guild.banner) {
    let obj = importDefault(top[6]);
    let guildBannerSource = obj.getGuildBannerSource(guild);
  } else {
    guildBannerSource = importDefault(top[7]);
  }
  const tmp7 = useBannerHeight();
  importDefault = tmp7;
  top = importDefault(top[8])().top;
  let obj1 = scrollTop(top[9]);
  class N {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  N.__closure = { scrollTop };
  N.__workletHash = 6997429707371;
  N.__initData = closure_9;
  const derivedValue = obj1.useDerivedValue(N);
  let obj2 = scrollTop(top[9]);
  class I {
    constructor() {
      obj = { width: "100%", height: closure_1 };
      obj2 = scrollTop(top[9]);
      items = [0];
      items[1] = closure_1 - top;
      obj.opacity = obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp");
      obj = {};
      obj4 = scrollTop(top[9]);
      items1 = [0];
      items1[1] = closure_1;
      items2 = [0];
      items2[1] = -closure_1;
      obj.translateY = obj4.interpolate(c3.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj;
      obj1 = {};
      obj6 = scrollTop(top[9]);
      items4 = [0];
      items4[1] = closure_1;
      obj1.scale = obj6.interpolate(c3.get(), items4, [1, 1.08], "clamp");
      items3[1] = obj1;
      obj.transform = items3;
      return obj;
    }
  }
  obj = { height: tmp7, interpolate: scrollTop(top[9]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  I.__closure = obj;
  I.__workletHash = 15738371977789;
  I.__initData = closure_10;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj4 = scrollTop(top[9]);
  const fn = function b() {
    let obj = {};
    obj = {};
    const items = [0, closure_1];
    const items1 = [0, -closure_1 / 1.20225424859375];
    obj.translateY = scrollTop(top[9]).interpolate(derivedValue.get(), items, items1, "clamp");
    const items2 = [obj, ];
    obj = {};
    const obj3 = scrollTop(top[9]);
    const items3 = [0, outer1_4];
    const items4 = [1, 1.20225424859375];
    obj.scale = scrollTop(top[9]).interpolate(derivedValue.get(), items3, items4, "clamp");
    items2[1] = obj;
    obj.transform = items2;
    return obj;
  };
  obj = { interpolate: scrollTop(top[9]).interpolate, scrollTopNegative: derivedValue, height: tmp7, ANIMATION_GOLDEN_RATIO: 1.20225424859375, AVATAR_SIZE };
  fn.__closure = obj;
  fn.__workletHash = 62412230968;
  fn.__initData = closure_11;
  obj1 = { style: tmp.header };
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj2 = { style: animatedStyle };
  let obj3 = { style: { width: "100%", height: tmp7 }, source: guildBannerSource };
  let items = [callback(importDefault(top[9]).Image, obj3), ];
  obj4 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
  items[1] = callback(importDefault(top[10]), obj4);
  obj2.children = items;
  let items1 = [callback2(importDefault(top[9]).View, obj2), ];
  const obj5 = { style: tmp.headerContent };
  const obj6 = { style: items2 };
  items2 = [tmp.avatarContainer, animatedStyle1];
  const obj7 = { style: tmp.avatar, guild, size: scrollTop(top[11]).GuildIconSizes.XLARGE, animate: true };
  let items3 = [callback(importDefault(top[11]), obj7), callback(importDefault(top[12]), { style: tmp.featureIcon, guild, disableColor: true })];
  obj6.children = items3;
  let items4 = [callback2(importDefault(top[9]).View, obj6), , ];
  const obj9 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = scrollTop(top[14]).intl;
  const format = intl.format;
  const t = scrollTop(top[14]).t;
  if (hasManualFormFields) {
    const obj10 = { guildName: guild.name };
    let formatResult = format(t.cgX47Z, obj10);
  } else {
    const obj11 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj11);
  }
  obj9.children = formatResult;
  items4[1] = callback(scrollTop(top[13]).Heading, obj9);
  const obj12 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default" };
  const intl2 = scrollTop(top[14]).intl;
  const string = intl2.string;
  const t2 = scrollTop(top[14]).t;
  if (hasManualFormFields) {
    let stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  obj12.children = stringResult;
  items4[2] = callback(scrollTop(top[13]).Text, obj12);
  obj5.children = items4;
  items1[1] = callback2(derivedValue, obj5);
  obj1.children = items1;
  return callback2(derivedValue, obj1);
};
