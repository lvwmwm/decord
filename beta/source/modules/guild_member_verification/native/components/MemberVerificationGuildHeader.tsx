// Module ID: 5894
// Function ID: 5895
// Name: MemberVerificationGuildHeader
// Dependencies: [19, 17, 5885, 21, 4836, 576, 1397, 5895, 1613, 4566, 5293, 5896, 5902, 4832, 1115, 2]
// Exports: default

// Module 5894 (MemberVerificationGuildHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import MemberVerificationFormConstants from "MemberVerificationFormConstants" /* 5885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let AVATAR_BORDER_WIDTH;
let AVATAR_SIZE;
let metroImportDefault;
let metroRequire;
let size;
let size1;
let View = react_native.View;
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = MemberVerificationFormConstants);
const useBannerHeight = MemberVerificationFormConstants.useBannerHeight;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 1.20225424859375;
let createStyles = createStyles_mod;
let obj = { header: { flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: "center", marginBottom: 12 }, headerContent: { alignItems: "center", marginTop: -48, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 }, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: size, avatarContainer: size1, featureIcon: { position: "absolute", top: 56, right: -8 }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center" } };
size = { borderRadius: nativeDefault.radii.lg, borderWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
size1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles(obj);
const __initData = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
const __initData2 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
const __initData3 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(hasManualFormFields) {
  let formatResult;
  let guild;
  let guildBannerSource;
  let height;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let scrollTop;
  let stringResult;
  let tmp3;
  let tmp5;
  ({ guild, scrollTop } = hasManualFormFields);
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  importDefault = undefined;
  let top;
  let derivedValue;
  const tmp = closure_9();
  if (null != guild.banner) {
    let obj = require("AvatarUtils");
    guildBannerSource = obj.getGuildBannerSource(guild);
    tmp3 = top;
    tmp5 = importDefault;
  } else {
    tmp3 = top;
    guildBannerSource = require("AssetRegistry");
    tmp5 = importDefault;
  }
  const tmp8 = useBannerHeight();
  importDefault = tmp8;
  top = tmp5(tmp3[8])().top;
  let obj2 = scrollTop(tmp3[9]);
  class N {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  N.__closure = { scrollTop };
  N.__workletHash = 6997429707371;
  N.__initData = __initData;
  derivedValue = obj2.useDerivedValue(N);
  let obj3 = scrollTop(tmp3[9]);
  class I {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj2;
      let obj4;
      let obj6;
      size = { width: "100%", height, opacity: obj2.interpolate(scrollTop.get(), items, [1, 0], "clamp"), transform: items3 };
      items = [0, height - top];
      obj2 = ReanimatedRexport;
      const obj = { translateY: obj4.interpolate(derivedValue.get(), items1, items2, "clamp") };
      items1 = [0, height];
      items2 = [0, -height];
      items3 = [obj, ];
      obj4 = ReanimatedRexport;
      const obj3 = { scale: obj6.interpolate(derivedValue.get(), items4, [1, 1.08], "clamp") };
      items4 = [0, height];
      items3[1] = obj3;
      obj6 = ReanimatedRexport;
      return size;
    }
  }
  let obj4 = { height: tmp8, interpolate: scrollTop(tmp3[9]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  I.__closure = obj4;
  I.__workletHash = 15738371977789;
  I.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(I);
  let obj5 = scrollTop(tmp3[9]);
  const fn = function b() {
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj3;
    let obj5;
    const obj = { transform: items2 };
    const obj2 = { translateY: obj3.interpolate(derivedValue.get(), items, items1, "clamp") };
    items = [0, height];
    items1 = [0, -height / c8];
    items2 = [obj2, ];
    obj3 = ReanimatedRexport;
    const obj4 = { scale: obj5.interpolate(derivedValue.get(), items3, items4, "clamp") };
    items3 = [0, AVATAR_SIZE];
    items4 = [1, c8];
    items2[1] = obj4;
    obj5 = ReanimatedRexport;
    return obj;
  };
  let obj6 = { interpolate: scrollTop(tmp3[9]).interpolate, scrollTopNegative: derivedValue, height: tmp8, ANIMATION_GOLDEN_RATIO, AVATAR_SIZE };
  fn.__closure = obj6;
  fn.__workletHash = 62412230968;
  fn.__initData = __initData3;
  const obj7 = { style: tmp.header, children: items1 };
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const obj8 = { style: animatedStyle, children: items };
  View = tmp5(tmp3[9]).View;
  items = [, ];
  const obj9 = { style: { width: "100%", height: tmp8 }, resizeMode: "cover", source: guildBannerSource };
  items[0] = closure_6(tmp5(tmp3[9]).Image, obj9);
  const obj10 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
  items[1] = closure_6(tmp5(tmp3[10]), obj10);
  items1 = [closure_7(View, obj8), ];
  const obj12 = { style: items2, children: items3 };
  items2 = [tmp.avatarContainer, animatedStyle1];
  const obj11 = { style: tmp.headerContent, children: items4 };
  const View2 = tmp5(tmp3[9]).View;
  const obj13 = { style: tmp.avatar, guild, size: scrollTop(tmp3[11]).GuildIconSizes.XLARGE, animate: true };
  const tmp5Result = tmp5(tmp3[11]);
  items3 = [closure_6(tmp5Result, obj13), ];
  const obj14 = { style: tmp.featureIcon, guild, disableColor: true };
  items3[1] = closure_6(tmp5(tmp3[12]), obj14);
  items4 = [closure_7(View2, obj12), , ];
  const obj15 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: formatResult };
  const Heading = scrollTop(tmp3[13]).Heading;
  const intl = scrollTop(tmp3[14]).intl;
  const format = intl.format;
  const t = scrollTop(tmp3[14]).t;
  if (hasManualFormFields) {
    const obj16 = { guildName: guild.name };
    formatResult = format(t.cgX47Z, obj16);
  } else {
    const obj17 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj17);
  }
  items4[1] = closure_6(Heading, obj15);
  const obj18 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: stringResult };
  const Text = tmp9(tmp3[13]).Text;
  const intl2 = tmp9(tmp3[14]).intl;
  const string = intl2.string;
  const t2 = tmp9(tmp3[14]).t;
  if (hasManualFormFields) {
    stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  items4[2] = closure_6(Text, obj18);
  items1[1] = closure_7(derivedValue, obj11);
  return closure_7(derivedValue, obj7);
};
