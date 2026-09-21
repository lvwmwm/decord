// Module ID: 15459
// Function ID: 15460
// Name: QuestDockBountyHeader
// Dependencies: [19, 17, 5663, 15351, 21, 580, 4758, 558, 568, 15358, 15352, 4497, 5187, 15348, 5802, 4754, 7320, 15450, 2]

// Module 15459 (QuestDockBountyHeader)
import nativeDefault from "native" /* 580 */;
import spring from "spring" /* 5187 */;
import FastImageDefault from "FastImage" /* 5802 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7320 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15450 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const QuestDockMode = fn(5663).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = fn(15351).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4758);
let obj = { wrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 }, productIcon: null, crossFadeWrapper: null, copy: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1, justifyContent: "center" };
obj.copy = { flexShrink: 1 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = activeQuestDockMode(568).c(22);
  let obj = activeQuestDockMode(568);
  const questDockBounty = activeQuestDockMode(15358).useQuestDockBounty();
  const tmp5 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  activeQuestDockMode = noop.useContext(tmp(15352).QuestDockGestureContext).activeQuestDockMode;
  const obj2 = activeQuestDockMode(15358);
  const fn = function n() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult = activeQuestDockMode(4497);
  fn.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj3 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const bountyCreative = activeQuestDockMode(15358).useBountyCreative(questDockBounty);
  const tmpResult3 = activeQuestDockMode(15358);
  const actionSheetPressHandler = activeQuestDockMode(15348).useActionSheetPressHandler(bountyCreative);
  if (cResult[0] === questDockBounty.productIcon) {
    if (cResult[1] === tmp5.productIcon) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === animatedStyle) {
      if (cResult[4] === tmp5.copy) {
        let tmp13 = cResult[5];
      }
      if (cResult[6] !== str) {
        const obj4 = { variant: "text-md/medium", color: "text-strong", lineClamp: 1, accessible: false, children: str };
        const tmp16 = closure_7(tmp(4754).Text, obj4);
        cResult[6] = str;
        cResult[7] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp13) {
        if (cResult[9] === tmp14) {
          let tmp17 = cResult[10];
        }
        if (cResult[11] === tmp5.crossFadeWrapper) {
          if (cResult[12] === tmp17) {
            let tmp21 = cResult[13];
          }
          if (cResult[14] === tmp5.wrapper) {
            if (cResult[15] === tmp9) {
              if (cResult[16] === tmp21) {
                if (cResult[17] === str) {
                  let tmp25 = cResult[18];
                }
                if (cResult[19] === actionSheetPressHandler) {
                  if (cResult[20] === tmp25) {
                    let tmp29 = cResult[21];
                  }
                  return tmp29;
                }
                const obj5 = { onSubmenuPress: actionSheetPressHandler, hideBlurWhenCollapsed: true, children: tmp25 };
                const tmp32 = closure_7(QuestDockBackgroundBlurHeaderDefault, obj5);
                cResult[19] = actionSheetPressHandler;
                cResult[20] = tmp25;
                cResult[21] = tmp32;
                tmp29 = tmp32;
              }
            }
          }
          const obj6 = { style: tmp5.wrapper, accessible: true, accessibilityRole: "text", accessibilityLabel: str, children: null };
          const items = [tmp9, tmp21];
          obj6.children = items;
          const tmp28 = closure_8(View, obj6);
          cResult[14] = tmp5.wrapper;
          cResult[15] = tmp9;
          cResult[16] = tmp21;
          cResult[17] = str;
          cResult[18] = tmp28;
          tmp25 = tmp28;
        }
        const obj7 = { style: tmp5.crossFadeWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: tmp17 };
        const tmp24 = closure_7(View, obj7);
        cResult[11] = tmp5.crossFadeWrapper;
        cResult[12] = tmp17;
        cResult[13] = tmp24;
        tmp21 = tmp24;
      }
      const obj8 = { style: tmp13, children: tmp14 };
      const tmp20 = closure_7(ReanimatedNativeViewDefault, obj8);
      cResult[8] = tmp13;
      cResult[9] = tmp14;
      cResult[10] = tmp20;
      tmp17 = tmp20;
    }
    const items1 = [tmp5.copy, animatedStyle];
    cResult[3] = animatedStyle;
    cResult[4] = tmp5.copy;
    cResult[5] = items1;
    tmp13 = items1;
  }
  let tmp10 = null != questDockBounty.productIcon;
  if (tmp10) {
    const obj9 = { style: tmp5.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj10 = { uri: questDockBounty.productIcon };
    obj9.source = obj10;
    tmp10 = closure_7(FastImageDefault, obj9);
  }
  cResult[0] = questDockBounty.productIcon;
  cResult[1] = tmp5.productIcon;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  const questDockBounty = activeQuestDockMode(15358).useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  activeQuestDockMode = noop.useContext(tmp(15352).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(15358);
  const fn = function n() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult = activeQuestDockMode(4497);
  fn.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 7823648730606;
  fn.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj2 = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const bountyCreative = activeQuestDockMode(15358).useBountyCreative(questDockBounty);
  const tmpResult3 = activeQuestDockMode(15358);
  const tmpResult4 = activeQuestDockMode(15348);
  const obj3 = { onSubmenuPress: activeQuestDockMode(15348).useActionSheetPressHandler(bountyCreative), hideBlurWhenCollapsed: true, children: null };
  const obj4 = { style: tmp4.wrapper, accessible: true, accessibilityRole: "text", accessibilityLabel: str, children: null };
  let tmp8Result = null != questDockBounty.productIcon;
  const actionSheetPressHandler = activeQuestDockMode(15348).useActionSheetPressHandler(bountyCreative);
  if (tmp8Result) {
    const obj5 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj6 = { uri: questDockBounty.productIcon };
    obj5.source = obj6;
    tmp8Result = tmp8(tmp9(5802), obj5);
  }
  const items = [tmp8Result, ];
  const obj7 = { style: tmp4.crossFadeWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const obj8 = { style: null, children: null };
  const items1 = [tmp4.copy, animatedStyle];
  obj8.style = items1;
  const tmp10 = QuestDockBackgroundBlurHeaderDefault;
  const tmp11 = closure_8;
  obj8.children = closure_7(activeQuestDockMode(4754).Text, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, accessible: false, children: str });
  obj7.children = closure_7(ReanimatedNativeViewDefault, obj8);
  items[1] = closure_7(View, obj7);
  obj4.children = items;
  obj3.children = tmp11(View, obj4);
  return closure_7(tmp10, obj3);
}));
