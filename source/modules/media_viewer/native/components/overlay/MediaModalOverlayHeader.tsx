// Module ID: 12121
// Function ID: 93377
// Name: MediaModalOverlayHeader
// Dependencies: []
// Exports: MediaModalOverlayHeader

// Module 12121 (MediaModalOverlayHeader)
importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(true)": "<string:1900043246>", "Bool(true)": "View", "Bool(true)": "container", "Bool(true)": "typingUserIds", "Bool(true)": "dispatchFrameUrl", "Bool(true)": "<string:3252764928>", height: arg1(dependencyMap[4]).NAV_BAR_HEIGHT };
obj.navbarInner = obj;
obj.navbarLeft = {};
obj.navbarRight = { "Bool(false)": 1, "Bool(false)": 0, "Bool(false)": 10, "Bool(false)": 1 };
obj.navbarName = { flexDirection: false, gap: false, flexWrap: false, alignItems: false };
obj.navbarNameInner = {};
obj.navbarNameShrinkWrapper = { flexShrink: 1 };
obj.contextIcon = { -9223372036854775808: 0, 9223372036854775807: 1, 0: 3 };
let closure_7 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = function MediaModalOverlayHeader(arg0) {
  let animationDriver;
  let channelId;
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let onClose;
  let shareable;
  let source;
  ({ source, contextName, contextIcon } = arg0);
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  let obj1 = arg1(dependencyMap[6]);
  const mediaShareActions = obj1.useMediaShareActions({ source, disableDownload, shareable });
  obj = {};
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["bottom"] = undefined;
  const items = [obj, headerLayoutAnimation];
  obj.style = items;
  obj1 = { "Bool(false)": "Chat perks and 2 Boosts (Monthly Sub)", "Bool(false)": "Nitro Monthly", "Bool(false)": "premium_tier_0_monthly", "Bool(false)": 2.99 };
  const obj2 = { style: tmp.navbarInner, pointerEvents: "box-none" };
  const obj3 = { style: tmp.navbarLeft };
  const obj4 = {};
  const tmp4 = importDefault(dependencyMap[7])(channelId);
  const intl = arg1(dependencyMap[11]).intl;
  obj4.accessibilityLabel = intl.string(arg1(dependencyMap[11]).t.cpT0Cq);
  obj4.icon = callback(arg1(dependencyMap[12]).XSmallIcon, {});
  obj4.onPress = onClose;
  const items1 = [callback(importDefault(dependencyMap[10]), obj4), ];
  let tmp11Result = null != contextName;
  if (tmp11Result) {
    const obj5 = { style: tmp.navbarName };
    const obj6 = { style: tmp.navbarNameInner };
    let tmp14 = null != contextIcon;
    if (tmp14) {
      const obj7 = { source: contextIcon, color: importDefault(dependencyMap[14]).unsafe_rawColors.PRIMARY_345, size: arg1(dependencyMap[13]).Icon.Sizes.CUSTOM, style: tmp.contextIcon };
      tmp14 = callback(arg1(dependencyMap[13]).Icon, obj7);
    }
    const items2 = [tmp14, ];
    const obj8 = { style: tmp.navbarNameShrinkWrapper };
    const obj9 = { description: null, main: null, module: null, types: null, react-native: null, children: contextName };
    obj8.children = callback(arg1(dependencyMap[15]).Text, obj9);
    items2[1] = callback(closure_4, obj8);
    obj6.children = items2;
    obj5.children = closure_6(closure_4, obj6);
    tmp11Result = callback(tmp12, obj5);
    const tmp11 = callback;
    const tmp13 = closure_6;
  }
  items1[1] = tmp11Result;
  obj3.children = items1;
  const items3 = [closure_6(closure_4, obj3), ];
  let tmp24Result = !tmp4;
  if (tmp24Result) {
    const obj10 = { style: tmp.navbarRight };
    const obj11 = { source };
    const items4 = [callback(importDefault(dependencyMap[16]), obj11), ];
    let tmp29 = null;
    if (!disableMediaOverlayButton) {
      const obj12 = {
        items: mediaShareActions,
        children(ref) {
              let obj = Object.create(null);
              obj.ref = 0;
              const merged = Object.assign(ref, obj);
              obj = {};
              const intl = callback(closure_2[11]).intl;
              obj.accessibilityLabel = intl.string(callback(closure_2[11]).t.PdRCRg);
              const tmp3 = closure_5;
              const tmp4 = callback2(closure_2[10]);
              if (obj2.isAndroid()) {
                let tmp5Result = tmp5(tmp6(tmp7[19]).MoreVerticalIcon, {});
              } else {
                tmp5Result = tmp5(tmp6(tmp7[20]).MoreHorizontalIcon, {});
              }
              obj.icon = tmp5Result;
              obj.ref = ref.ref;
              const merged1 = Object.assign(merged);
              return tmp3(tmp4, obj);
            }
      };
      tmp29 = callback(arg1(dependencyMap[17]).ContextMenu, obj12);
    }
    items4[1] = tmp29;
    obj10.children = items4;
    tmp24Result = closure_6(closure_4, obj10);
    const tmp24 = closure_6;
    const tmp25 = closure_4;
  }
  items3[1] = tmp24Result;
  obj2.children = items3;
  obj1.children = closure_6(closure_4, obj2);
  obj.children = callback(arg1(dependencyMap[9]).SafeAreaPaddingView, obj1);
  return callback(importDefault(dependencyMap[8]).View, obj);
};
