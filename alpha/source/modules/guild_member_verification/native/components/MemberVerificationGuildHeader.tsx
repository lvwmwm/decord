// Module ID: 7097
// Function ID: 7098
// Name: MemberVerificationGuildHeader
// Dependencies: [19, 17, 7084, 21, 5141, 575, 1627, 1652, 5851, 1411, 5723, 7098, 7102, 5761, 1113, 2]
// Exports: MemberVerificationGuildBanner, default

// Module 7097 (MemberVerificationGuildHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import FastImageDefault from "FastImage" /* 5851 */;
import GuildIcon from "GuildIcon" /* 7098 */;
import GuildBadgeDefault from "GuildBadge" /* 7102 */;
import react from "react" /* 19 */;
import MemberVerificationFormConstants from "MemberVerificationFormConstants" /* 7084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
const GuildIconDefault = GuildIcon;
let obj1;

let AVATAR_BORDER_WIDTH;
let AVATAR_SIZE;
let SHEET_RADIUS;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let View = react_native.View;
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = MemberVerificationFormConstants);
({ useBannerHeight: hasOwnProperty, SHEET_RADIUS } = MemberVerificationFormConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: { alignItems: "center", marginBottom: 12 }, headerContent: obj2, linearGradient: { position: "absolute", height: 140, top: 0, right: 0, left: 0 }, avatar: size, avatarContainer: size1, featureIcon: { position: "absolute", top: 56, right: -8 }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center" } };
obj2 = { alignItems: "center", marginTop: -48 + SHEET_RADIUS, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 16 };
size = { borderRadius: nativeDefault.radii.lg, borderWidth: 0, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
size1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function MemberVerificationGuildHeaderTsx1(){let[scrollTop]=this.__closure;return scrollTop.get()*-1;})" };
let closure_10 = { code: "(function MemberVerificationGuildHeaderTsx2(){let[height,interpolate,scrollTop,safeAreaTop,scrollTopNegative]=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};})" };
let closure_11 = { code: "(function MemberVerificationGuildHeaderTsx3(){let[scrollTop]=this.__closure;return scrollTop.get()*-1;})" };
let closure_12 = { code: "(function MemberVerificationGuildHeaderTsx4(){let[interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE]=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(scrollTop) {
  let formatResult;
  let guild;
  let hasManualFormFields;
  let items4;
  let items5;
  let items6;
  let obj3;
  let stringResult;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp9;
  ({ guild, hasManualFormFields } = scrollTop);
  scrollTop = scrollTop.scrollTop;
  const tmp = closure_8();
  const tmp2 = hasOwnProperty();
  let obj = _mod1652;
  let items = [closure_11, scrollTop];
  let c0;
  [tmp5, tmp6] = items;
  class MemberVerificationGuildHeaderTsx3 {
    constructor() {
      return -1 * closure_0.get();
    }
  }
  let items1 = [tmp6];
  MemberVerificationGuildHeaderTsx3.__closure = items1;
  MemberVerificationGuildHeaderTsx3.__workletHash = 12898463786096;
  MemberVerificationGuildHeaderTsx3.__initData = tmp5;
  const derivedValue = obj.useDerivedValue(MemberVerificationGuildHeaderTsx3);
  let items2 = [closure_12, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = _mod1652.interpolate;
  items2[2] = derivedValue;
  items2[3] = tmp2;
  items2[4] = 1.20225424859375;
  items2[5] = AVATAR_SIZE;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class MemberVerificationGuildHeaderTsx4 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      items = [0];
      items[1] = closure_2;
      items1 = [0];
      items1[1] = -closure_2 / closure_3;
      obj1.translateY = closure_0(closure_1.get(), items, items1, "clamp");
      items2 = [, ];
      items2[0] = obj1;
      obj4 = { scale: null };
      items3 = [0];
      items3[1] = closure_4;
      items4 = [1];
      items4[1] = closure_3;
      obj4.scale = closure_0(closure_1.get(), items3, items4, "clamp");
      items2[1] = obj4;
      obj.transform = items2;
      return obj;
    }
  }
  let items3 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  MemberVerificationGuildHeaderTsx4.__closure = items3;
  MemberVerificationGuildHeaderTsx4.__workletHash = 3125659462790;
  MemberVerificationGuildHeaderTsx4.__initData = tmp9;
  let obj2 = { style: tmp.header, children: tmp18(View, obj3) };
  obj3 = { style: tmp.headerContent, children: items6 };
  const animatedStyle = useAnimatedStyle(MemberVerificationGuildHeaderTsx4);
  const obj4 = { style: items4, children: items5 };
  items4 = [tmp.avatarContainer, animatedStyle];
  View = _modDef1652.View;
  const obj5 = { style: tmp.avatar, guild, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
  const tmp19 = GuildIconDefault;
  items5 = [metroRequire(tmp19, obj5), ];
  const obj6 = { style: tmp.featureIcon, guild, disableColor: true };
  items5[1] = metroRequire(GuildBadgeDefault, obj6);
  items6 = [metroImportDefault(View, obj4), , ];
  const obj7 = { style: tmp.headerTitle, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: formatResult };
  const Heading = tmp3(5761).Heading;
  const intl = tmp3(1113).intl;
  const format = intl.format;
  const t = tmp3(1113).t;
  tmp18 = metroImportDefault;
  if (hasManualFormFields) {
    const obj8 = { guildName: guild.name };
    formatResult = format(t.cgX47Z, obj8);
  } else {
    const obj9 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj9);
  }
  items6[1] = metroRequire(Heading, obj7);
  const obj10 = { style: tmp.headerDescription, variant: "body-sm/medium", color: "text-default", children: stringResult };
  const Text = tmp3(5761).Text;
  const intl2 = tmp3(1113).intl;
  const string = intl2.string;
  const t2 = tmp3(1113).t;
  if (hasManualFormFields) {
    stringResult = string(t2["3smSPP"]);
  } else {
    stringResult = string(t2["7D3C5p"]);
  }
  items6[2] = metroRequire(Text, obj10);
  return metroRequire(View, obj2);
};
export function MemberVerificationGuildBanner(arg0) {
  let guild;
  let obj3;
  let scrollTop;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp3Result2;
  let tmp6;
  let tmp7;
  ({ guild, scrollTop } = arg0);
  const tmp = closure_8();
  const tmp2 = hasOwnProperty();
  const top = useSafeAreaInsetsDefault().top;
  let obj = _mod1652;
  let items = [closure_9, scrollTop];
  let c0;
  [tmp6, tmp7] = items;
  class MemberVerificationGuildHeaderTsx1 {
    constructor() {
      return -1 * closure_0.get();
    }
  }
  let items1 = [tmp7];
  MemberVerificationGuildHeaderTsx1.__closure = items1;
  MemberVerificationGuildHeaderTsx1.__workletHash = 246931836658;
  MemberVerificationGuildHeaderTsx1.__initData = tmp6;
  const derivedValue = obj.useDerivedValue(MemberVerificationGuildHeaderTsx1);
  _mod1652;
  let items2 = [closure_10, tmp2, _mod1652.interpolate, scrollTop, top, derivedValue];
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class MemberVerificationGuildHeaderTsx2 {
    constructor() {
      size = { width: "100%", height: closure_0, opacity: null, transform: null };
      items = [0];
      items[1] = closure_0 - closure_3;
      size.opacity = closure_1(closure_2.get(), items, [1, 0], "clamp");
      obj1 = { translateY: null };
      items1 = [0];
      items1[1] = closure_0;
      items2 = [0];
      items2[1] = -closure_0;
      obj1.translateY = closure_1(closure_4.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj1;
      obj4 = { scale: null };
      items4 = [0];
      items4[1] = closure_0;
      obj4.scale = closure_1(closure_4.get(), items4, [1, 1.08], "clamp");
      items3[1] = obj4;
      size.transform = items3;
      return size;
    }
  }
  let items3 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  MemberVerificationGuildHeaderTsx2.__closure = items3;
  MemberVerificationGuildHeaderTsx2.__workletHash = 15981102036772;
  MemberVerificationGuildHeaderTsx2.__initData = tmp10;
  if (null == guild.banner) {
    let obj2 = { style: obj3 };
    obj3 = { height: tmp2 };
    tmp19 = metroRequire(View, obj2);
  } else {
    const obj4 = { style: tmp16, children: null };
    View = tmp3(1652).View;
    const obj5 = { style: size, resizeMode: "cover", source: tmp3Result2.getGuildBannerSource(guild) };
    size = { width: "100%", height: tmp2 };
    const tmp3Result = FastImageDefault;
    tmp3Result2 = AvatarUtilsDefault;
    let items4 = [metroRequire(tmp3Result, obj5), ];
    const obj6 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.linearGradient, colors: ["rgba(0,0,0,0.7)", "transparent"] };
    items4[1] = metroRequire(LinearGradientDefault, obj6);
    class MemberVerificationGuildHeaderTsx1 {
      constructor() {
        return -1 * closure_0.get();
      }
    }
    tmp19 = metroImportDefault(View, obj4);
  }
  return tmp19;
}
