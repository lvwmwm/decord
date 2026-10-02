// Module ID: 13519
// Function ID: 13520
// Name: GuildActionSheet
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 1619, 7619, 1370, 13514, 13520, 13457, 13521, 13524, 6576, 6038, 6572, 2]

// Module 13519 (GuildActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import BottomSheetModal from "BottomSheetModal" /* 6038 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6572 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6576 */;
import useBottomSheetRef from "useBottomSheetRef" /* 7619 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13457 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 13514 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 13520 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 13521 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 13524 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, actions: { paddingHorizontal: 16, gap: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  let items;
  let items1;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp26;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(34);
  ({ guild, expanded } = arg0);
  const tmp5 = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmpResult = useBottomSheetRef;
  const bottomSheetRef1 = tmpResult.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  let num = 0;
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    num = 16;
  }
  const sum = bottom + num;
  if (cResult[0] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj3 = { guild };
    const tmp13 = React3(GuildActionSheetHeaderDefault, obj3);
    const obj4 = { guild };
    const tmp14 = React3(GuildActionSheetTabItemsDefault, obj4);
    cResult[2] = guild;
    cResult[3] = tmp13;
    cResult[4] = tmp14;
    tmp11 = tmp14;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  if (cResult[5] !== guild) {
    const obj5 = { guild };
    const tmp21 = React3(GuildActionSheetActions.GuildUnreadAction, obj5);
    const obj6 = { guild };
    const tmp22 = React3(GuildActionSheetProgressDefault, obj6);
    const obj7 = { guild };
    const tmp23 = React3(GuildActionSheetActions.GuildActionSheetPrimaryActions, obj7);
    const obj8 = { guild };
    const tmp24 = React3(GuildActionSheetActions.GuildActionSheetSecondaryActions, obj8);
    const obj9 = { guild };
    const tmp25 = React3(GuildActionSheetActions.GuildDeveloperOptionAction, obj9);
    cResult[5] = guild;
    cResult[6] = tmp25;
    cResult[7] = tmp21;
    cResult[8] = tmp22;
    cResult[9] = tmp23;
    cResult[10] = tmp24;
    tmp19 = tmp24;
    tmp18 = tmp23;
    tmp17 = tmp22;
    tmp16 = tmp21;
    tmp15 = tmp25;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
    tmp17 = cResult[8];
    tmp18 = cResult[9];
    tmp19 = cResult[10];
  }
  if (cResult[11] !== guild.id) {
    const obj10 = { guildId: guild.id };
    const tmp28 = React3(GuildActionSheetEmojiSectionDefault, obj10);
    cResult[11] = guild.id;
    cResult[12] = tmp28;
    tmp26 = tmp28;
  } else {
    tmp26 = cResult[12];
  }
  if (cResult[13] === tmp5.actions) {
    if (cResult[14] === tmp15) {
      if (cResult[15] === tmp26) {
        if (cResult[16] === tmp16) {
          if (cResult[17] === tmp17) {
            if (cResult[18] === tmp18) {
              let tmp29;
              let tmp31;
              if (cResult[19] === tmp19) {
                tmp29 = cResult[20];
              }
              if (cResult[21] !== bottomSheetClose) {
                const obj11 = { variant: "floating", onPress: bottomSheetClose };
                const tmp33 = React3(ActionSheetHeaderBar.ActionSheetHeaderBar, obj11);
                cResult[21] = bottomSheetClose;
                cResult[22] = tmp33;
                tmp31 = tmp33;
              } else {
                tmp31 = cResult[22];
              }
              if (cResult[23] === tmp5.container) {
                if (cResult[24] === tmp29) {
                  if (cResult[25] === tmp31) {
                    if (cResult[26] === tmp9) {
                      if (cResult[27] === tmp10) {
                        let tmp34;
                        if (cResult[28] === tmp11) {
                          tmp34 = cResult[29];
                        }
                        if (cResult[30] === bottomSheetRef) {
                          if (cResult[31] === (undefined !== expanded && expanded)) {
                            let tmp37;
                            if (cResult[32] === tmp34) {
                              tmp37 = cResult[33];
                            }
                            return tmp37;
                          }
                        }
                        const obj12 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: undefined !== expanded && expanded, children: tmp34 };
                        const tmp39 = React3(Sheet_BottomSheet.BottomSheet, obj12);
                        cResult[30] = bottomSheetRef;
                        cResult[31] = undefined !== expanded && expanded;
                        cResult[32] = tmp34;
                        cResult[33] = tmp39;
                        tmp37 = tmp39;
                      }
                    }
                  }
                }
              }
              const obj13 = { scrollsToTop: false, style: tmp5.container, contentContainerStyle: tmp9, children: items };
              items = [tmp10, tmp11, tmp29, tmp31];
              const tmp36 = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj13);
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
  const obj14 = { style: tmp5.actions, children: items1 };
  items1 = [tmp16, tmp17, tmp18, tmp19, tmp15, tmp26];
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
  let BottomSheetScrollView;
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  let items;
  let items1;
  let num;
  let obj3;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useBottomSheetRef;
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: hasOwnProperty(BottomSheetScrollView, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: bottom + num }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num = 16;
  }
  items = [React3(GuildActionSheetHeaderDefault, { guild }), React3(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj5 = { style: tmp.actions, children: items1 };
  items1 = [React3(GuildActionSheetActions.GuildUnreadAction, { guild }), React3(GuildActionSheetProgressDefault, { guild }), React3(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React3(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React3(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), ];
  const obj6 = { guildId: guild.id };
  items1[5] = React3(GuildActionSheetEmojiSectionDefault, obj6);
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React3(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  return React3(BottomSheet, obj2);
}));
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;
