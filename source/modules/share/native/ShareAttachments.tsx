// Module ID: 12789
// Function ID: 98000
// Name: ShareAttachments
// Dependencies: []
// Exports: default

// Module 12789 (ShareAttachments)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]).createAnimatedComponent(importDefault(dependencyMap[4]));
let obj = { duration: 300, easing: arg1(dependencyMap[5]).STANDARD_EASING };
let obj2 = arg1(dependencyMap[6]);
obj = {};
const importDefaultResult = importDefault(dependencyMap[3]);
obj.containerRevamp = { marginHorizontal: -importDefault(dependencyMap[7]).space.PX_16 };
obj2 = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.attachmentPreviewContentContainer = obj2;
const obj1 = { marginHorizontal: -importDefault(dependencyMap[7]).space.PX_16 };
obj.attachmentPreviewContentContainerRevamp = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
const obj4 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003785767221382976, "Null": 170069514919085240000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005562684648031156, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.attachmentPreview = obj4;
obj.leftGradient = { "Bool(true)": null, "Bool(true)": "hidden", "Bool(true)": 1, "Bool(true)": true, "Bool(true)": "/assets/images/native/icons", "Bool(true)": 18 };
obj.rightGradient = { SCROLLING_MOMENTUM: null, GuildRoomBackgrounds: "hidden", showChannelChangeConfirmationAlert: 1, GiftingTier3SmallBadge: true, nextToken: "/assets/images/native/icons", trackForumPostLinkCopied: 18 };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.gradient = { color: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = obj2.createStyles(obj);
let closure_10 = { code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}" };
let closure_11 = { code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}" };
let closure_12 = { code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}" };
const obj5 = { color: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  let attachments;
  let isRevamp;
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let arg1;
  let importDefault;
  let dependencyMap;
  let React;
  const tmp = callback2();
  arg1 = tmp;
  let obj = arg1(dependencyMap[3]);
  const sharedValue = obj.useSharedValue(0);
  importDefault = sharedValue;
  let obj1 = arg1(dependencyMap[3]);
  const sharedValue1 = obj1.useSharedValue(0);
  dependencyMap = sharedValue1;
  let obj2 = arg1(dependencyMap[3]);
  const sharedValue2 = obj2.useSharedValue(0);
  React = sharedValue2;
  let obj3 = arg1(dependencyMap[3]);
  const fn = function y() {
    const obj = {};
    let num = 1;
    if (sharedValue.get() <= 0) {
      num = 0;
    }
    obj.opacity = tmp(sharedValue1[8]).withTiming(num, closure_8);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 3302668154466;
  fn.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  class S {
    constructor() {
      obj = {};
      obj2 = closure_0(useSharedValue[8]);
      value = closure_1.get();
      sum = value + useSharedValue.get();
      num = 1;
      if (sum >= useSharedValue.get()) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, closure_8);
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[8]).withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG: obj };
  S.__closure = obj;
  S.__workletHash = 13996707009656;
  S.__initData = closure_11;
  const animatedStyle1 = arg1(dependencyMap[3]).useAnimatedStyle(S);
  const obj6 = arg1(dependencyMap[3]);
  const fn2 = function v(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.x);
    const result1 = sharedValue1.set(contentOffset.contentSize.width);
    const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
  };
  fn2.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
  fn2.__workletHash = 12660577105859;
  fn2.__initData = closure_12;
  const items = [sharedValue2];
  const obj8 = arg1(dependencyMap[3]);
  const items1 = [sharedValue1];
  const callback = React.useCallback((nativeEvent) => {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
  }, items);
  const items2 = [tmp.gradient.color];
  const callback1 = React.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items1);
  const memo = React.useMemo(() => tmp(sharedValue1[9]).hexWithOpacity(tmp.gradient.color, 0), items2);
  let tmp19Result = null;
  if (0 !== attachments.length) {
    obj1 = {};
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    obj1.style = containerRevamp;
    obj2 = { start: {}, end: {} };
    const items3 = [tmp.gradient.color, memo];
    obj2.colors = items3;
    const items4 = [tmp.leftGradient, animatedStyle];
    obj2.style = items4;
    obj2.pointerEvents = "box-none";
    const items5 = [callback(closure_7, obj2), , ];
    obj3 = { start: {}, end: {} };
    const items6 = [memo, tmp.gradient.color];
    obj3.colors = items6;
    const items7 = [tmp.rightGradient, animatedStyle1];
    obj3.style = items7;
    obj3.pointerEvents = "box-none";
    items5[1] = callback(closure_7, obj3);
    const obj4 = {};
    const items8 = [tmp.attachmentPreviewContentContainer, ];
    class S {
      constructor() {
        obj = {};
        obj2 = closure_0(useSharedValue[8]);
        value = closure_1.get();
        sum = value + useSharedValue.get();
        num = 1;
        if (sum >= useSharedValue.get()) {
          num = 0;
        }
        obj.opacity = obj2.withTiming(num, closure_8);
        return obj;
      }
    }
    if (isRevamp) {
      const attachmentPreviewContentContainerRevamp = tmp.attachmentPreviewContentContainerRevamp;
    }
    items8[1] = attachmentPreviewContentContainerRevamp;
    obj4.contentContainerStyle = items8;
    obj4.horizontal = true;
    obj4.onScroll = animatedScrollHandler;
    obj4.onLayout = callback;
    obj4.onContentSizeChange = callback1;
    obj4.scrollEventThrottle = 16;
    obj4.showsHorizontalScrollIndicator = false;
    obj4.accessibilityRole = "list";
    const intl = arg1(dependencyMap[10]).intl;
    obj4.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.RhtzFe);
    obj4.children = attachments.map((uri) => {
      let obj = { style: tmp.attachmentPreview };
      obj = { position: true, backgroundColor: true, borderWidth: true, uri: uri.uri };
      const tmp = sharedValue(sharedValue1[11]);
      obj.isImage = tmp(sharedValue1[12]).isImage(uri.uri, uri.mimeType);
      const obj3 = tmp(sharedValue1[12]);
      obj.isVideo = tmp(sharedValue1[12]).isVideo(uri.uri, uri.mimeType);
      obj.fileName = uri.name;
      obj.showPlayOnVideoPreview = true;
      obj.children = callback(tmp, obj);
      return callback(closure_4, obj, arg1);
    });
    items5[2] = callback(importDefault(dependencyMap[3]).ScrollView, obj4);
    obj1.children = items5;
    tmp19Result = closure_6(View, obj1);
    const tmp13 = callback;
    const tmp19 = closure_6;
    const tmp20 = View;
  }
  return tmp19Result;
};
