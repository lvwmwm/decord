// Module ID: 14281
// Function ID: 14282
// Name: GuildActionSheet
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 1616, 8476, 1368, 14276, 14282, 14219, 14283, 14286, 7433, 6895, 7429, 2]

// Module 14281 (GuildActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import BottomSheetModal from "BottomSheetModal" /* 6895 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7429 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 7433 */;
import useBottomSheetRef from "useBottomSheetRef" /* 8476 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 14219 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 14276 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 14282 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 14283 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 14286 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4790);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, actions: { paddingHorizontal: 16, gap: 24 } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(34);
  ({ guild, expanded } = arg0);
  const tmp5 = closure_6();
  const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmpResult = useBottomSheetRef;
  let num = 0;
  if (tmpResult2.isAndroid()) {
    num = 16;
  }
  const sum = useSafeAreaInsetsDefault().bottom + num;
  if (cResult[0] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj3 = { guild };
    const tmp13 = React4(tmp6(14276), obj3);
    const obj4 = { guild };
    const tmp14 = React4(tmp6(14282), obj4);
    cResult[2] = guild;
    cResult[3] = tmp13;
    cResult[4] = tmp14;
    let tmp11 = tmp14;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  if (cResult[5] !== guild) {
    const obj5 = { guild };
    const tmp21 = React4(tmp(14219).GuildUnreadAction, obj5);
    const obj6 = { guild };
    const tmp22 = React4(tmp6(14283), obj6);
    const obj7 = { guild };
    const tmp23 = React4(tmp(14219).GuildActionSheetPrimaryActions, obj7);
    const obj8 = { guild };
    const tmp24 = React4(tmp(14219).GuildActionSheetSecondaryActions, obj8);
    const obj9 = { guild };
    const tmp25 = React4(tmp(14219).GuildDeveloperOptionAction, obj9);
    cResult[5] = guild;
    cResult[6] = tmp25;
    cResult[7] = tmp21;
    cResult[8] = tmp22;
    cResult[9] = tmp23;
    cResult[10] = tmp24;
    let tmp19 = tmp24;
    let tmp18 = tmp23;
    let tmp17 = tmp22;
    let tmp16 = tmp21;
    let tmp15 = tmp25;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
    tmp17 = cResult[8];
    tmp18 = cResult[9];
    tmp19 = cResult[10];
  }
  if (cResult[11] !== guild.id) {
    const obj10 = { guildId: guild.id };
    const tmp28 = React4(tmp6(14286), obj10);
    cResult[11] = guild.id;
    cResult[12] = tmp28;
    let tmp26 = tmp28;
  } else {
    tmp26 = cResult[12];
  }
  if (cResult[13] === tmp5.actions) {
    if (cResult[14] === tmp15) {
      if (cResult[15] === tmp26) {
        if (cResult[16] === tmp16) {
          if (cResult[17] === tmp17) {
            if (cResult[18] === tmp18) {
              if (cResult[19] === tmp19) {
                let tmp29 = cResult[20];
              }
              if (cResult[21] !== bottomSheetClose) {
                const obj11 = { variant: "floating", onPress: bottomSheetClose };
                const tmp33 = React4(tmp(7433).ActionSheetHeaderBar, obj11);
                cResult[21] = bottomSheetClose;
                cResult[22] = tmp33;
                let tmp31 = tmp33;
              } else {
                tmp31 = cResult[22];
              }
              if (cResult[23] === tmp5.container) {
                if (cResult[24] === tmp29) {
                  if (cResult[25] === tmp31) {
                    if (cResult[26] === tmp9) {
                      if (cResult[27] === tmp10) {
                        if (cResult[28] === tmp11) {
                          let tmp34 = cResult[29];
                        }
                        if (cResult[30] === bottomSheetRef) {
                          if (cResult[31] === tmp4) {
                            if (cResult[32] === tmp34) {
                              let tmp37 = cResult[33];
                            }
                            return tmp37;
                          }
                        }
                        const obj12 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: tmp4, children: tmp34 };
                        const tmp39 = React4(tmp(7429).BottomSheet, obj12);
                        cResult[30] = bottomSheetRef;
                        cResult[31] = tmp4;
                        cResult[32] = tmp34;
                        cResult[33] = tmp39;
                        tmp37 = tmp39;
                      }
                    }
                  }
                }
              }
              const obj13 = { scrollsToTop: false, style: tmp5.container, contentContainerStyle: tmp9, children: null };
              const items = [tmp10, tmp11, tmp29, tmp31];
              obj13.children = items;
              const tmp36 = hasOwnProperty(tmp(6895).BottomSheetScrollView, obj13);
              cResult[23] = tmp5.container;
              cResult[24] = tmp29;
              cResult[25] = tmp31;
              cResult[26] = tmp9;
              cResult[27] = tmp10;
              cResult[28] = tmp11;
              cResult[29] = tmp36;
              tmp34 = tmp36;
            }
          }
        }
      }
    }
  }
  const obj14 = { style: tmp5.actions, children: null };
  const items1 = [tmp16, tmp17, tmp18, tmp19, tmp15, tmp26];
  obj14.children = items1;
  const tmp30 = hasOwnProperty(View, obj14);
  cResult[13] = tmp5.actions;
  cResult[14] = tmp15;
  cResult[15] = tmp26;
  cResult[16] = tmp16;
  cResult[17] = tmp17;
  cResult[18] = tmp18;
  cResult[19] = tmp19;
  cResult[20] = tmp30;
  tmp29 = tmp30;
}) : ((arg0) => {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottomSheetRef1 = useBottomSheetRef.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: null };
  const obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, children: null };
  let num = 0;
  if (obj4.isAndroid()) {
    num = 16;
  }
  obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsDefault().bottom + num };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), React4(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj5 = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildUnreadAction, { guild }), React4(GuildActionSheetProgressDefault, { guild }), React4(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React4(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), React4(GuildActionSheetEmojiSectionDefault, { guildId: guild.id })];
  obj5.children = items1;
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React4(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  obj3.children = items;
  obj2.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj3);
  return React4(Sheet_BottomSheet.BottomSheet, obj2);
}));
