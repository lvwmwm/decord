// Module ID: 9162
// Function ID: 71814
// Name: AVATAR_SIZE
// Dependencies: []
// Exports: default

// Module 9162 (AVATAR_SIZE)
let AVATAR_BORDER_WIDTH;
let AVATAR_SIZE;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const tmp3 = arg1(dependencyMap[2]);
({ AVATAR_BORDER_WIDTH, AVATAR_SIZE } = tmp3);
const useBannerHeight = tmp3.useBannerHeight;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { header: {}, headerContent: { 2130673151: "isArray", -2097184513: "key", -2030074625: "Array", -2113961985: "construct", -2046852097: "Date" }, linearGradient: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false } };
obj = { borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 0, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE, width: AVATAR_SIZE, margin: 0, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SCRIM };
obj.avatar = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.avatarContainer = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.featureIcon = { convertShortcutToName: null, hasUnreadMessages: null, CreatorMonetizationRestrictions: null };
obj.headerTitle = {};
obj.headerDescription = {};
let closure_8 = obj.createStyles(obj);
let closure_9 = { code: "function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}" };
let closure_10 = { code: "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}" };
let closure_11 = { code: "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}" };
const obj1 = { borderRadius: 20, borderWidth: AVATAR_BORDER_WIDTH, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, height: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, width: AVATAR_SIZE + 2 * AVATAR_BORDER_WIDTH, marginBottom: 16, marginTop: -16, marginLeft: -4, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx");

export default function MemberVerificationGuildHeader(hasManualFormFields) {
  let guild;
  let scrollTop;
  ({ guild, scrollTop } = hasManualFormFields);
  const arg1 = scrollTop;
  hasManualFormFields = hasManualFormFields.hasManualFormFields;
  const tmp = callback3();
  if (null != guild.banner) {
    let obj = importDefault(dependencyMap[6]);
    let guildBannerSource = obj.getGuildBannerSource(guild);
  } else {
    guildBannerSource = importDefault(dependencyMap[7]);
  }
  const tmp7 = useBannerHeight();
  const importDefault = tmp7;
  const top = importDefault(dependencyMap[8])().top;
  const dependencyMap = top;
  let obj1 = arg1(dependencyMap[9]);
  class N {
    constructor() {
      return -1 * scrollTop.get();
    }
  }
  N.__closure = { scrollTop };
  N.__workletHash = 6997429707371;
  N.__initData = closure_9;
  const derivedValue = obj1.useDerivedValue(N);
  const View = derivedValue;
  let obj2 = arg1(dependencyMap[9]);
  class I {
    constructor() {
      obj = { width: "100%", height: closure_1 };
      obj2 = scrollTop(top[9]);
      items = [0.229];
      items[1] = closure_1 - top;
      obj.opacity = obj2.interpolate(scrollTop.get(), items, [true, true], "clamp");
      obj = {};
      obj4 = scrollTop(top[9]);
      items1 = [0.229];
      items1[1] = closure_1;
      items2 = [0.229];
      items2[1] = -closure_1;
      obj.translateY = obj4.interpolate(closure_3.get(), items1, items2, "clamp");
      items3 = [, ];
      items3[0] = obj;
      obj1 = {};
      obj6 = scrollTop(top[9]);
      items4 = [0.229];
      items4[1] = closure_1;
      obj1.scale = obj6.interpolate(closure_3.get(), items4, [1401310690170916000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1405342991284294500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000], "clamp");
      items3[1] = obj1;
      obj.transform = items3;
      return obj;
    }
  }
  obj = { height: tmp7, interpolate: arg1(dependencyMap[9]).interpolate, scrollTop, safeAreaTop: top, scrollTopNegative: derivedValue };
  I.__closure = obj;
  I.__workletHash = 15738371977789;
  I.__initData = closure_10;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj4 = arg1(dependencyMap[9]);
  const fn = function b() {
    let obj = {};
    obj = {};
    const items = [0.229, tmp7];
    const items1 = [0.229, -tmp7 / 1.20225424859375];
    obj.translateY = scrollTop(top[9]).interpolate(derivedValue.get(), items, items1, "clamp");
    const items2 = [obj, ];
    obj = {};
    const obj3 = scrollTop(top[9]);
    const items3 = [0.229, closure_4];
    const items4 = [false, 1.20225424859375];
    obj.scale = scrollTop(top[9]).interpolate(derivedValue.get(), items3, items4, "clamp");
    items2[1] = obj;
    obj.transform = items2;
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[9]).interpolate, scrollTopNegative: derivedValue, height: tmp7, ANIMATION_GOLDEN_RATIO: 1.20225424859375, AVATAR_SIZE };
  fn.__closure = obj;
  fn.__workletHash = 62412230968;
  fn.__initData = closure_11;
  obj1 = { style: tmp.header };
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj2 = { style: animatedStyle };
  const obj3 = { style: { width: "100%", height: tmp7 }, source: guildBannerSource };
  const items = [callback(importDefault(dependencyMap[9]).Image, obj3), ];
  obj4 = { start: { 0: "%FunctionPrototype%", 0: "paddingStart" }, end: {}, style: tmp.linearGradient, colors: [] };
  items[1] = callback(importDefault(dependencyMap[10]), obj4);
  obj2.children = items;
  const items1 = [callback2(importDefault(dependencyMap[9]).View, obj2), ];
  const obj5 = { style: tmp.headerContent };
  const obj6 = { style: items2 };
  const items2 = [tmp.avatarContainer, animatedStyle1];
  const obj7 = { style: tmp.avatar, guild, size: arg1(dependencyMap[11]).GuildIconSizes.XLARGE, animate: true };
  const items3 = [callback(importDefault(dependencyMap[11]), obj7), callback(importDefault(dependencyMap[12]), { style: tmp.featureIcon, guild, disableColor: true })];
  obj6.children = items3;
  const items4 = [callback2(importDefault(dependencyMap[9]).View, obj6), , ];
  const obj9 = { style: tmp.headerTitle };
  const intl = arg1(dependencyMap[14]).intl;
  const format = intl.format;
  const t = arg1(dependencyMap[14]).t;
  if (hasManualFormFields) {
    const obj10 = { guildName: guild.name };
    let formatResult = format(t.cgX47Z, obj10);
  } else {
    const obj11 = { guildName: guild.name };
    formatResult = format(t.VnxBOA, obj11);
  }
  obj9.children = formatResult;
  items4[1] = callback(arg1(dependencyMap[13]).Heading, obj9);
  const obj12 = { style: tmp.headerDescription };
  const intl2 = arg1(dependencyMap[14]).intl;
  const string = intl2.string;
  const t2 = arg1(dependencyMap[14]).t;
  if (hasManualFormFields) {
    let stringResult = string(t2.3smSPP);
  } else {
    stringResult = string(t2.7D3C5p);
  }
  obj12.children = stringResult;
  items4[2] = callback(arg1(dependencyMap[13]).Text, obj12);
  obj5.children = items4;
  items1[1] = callback2(View, obj5);
  obj1.children = items1;
  return callback2(View, obj1);
};
