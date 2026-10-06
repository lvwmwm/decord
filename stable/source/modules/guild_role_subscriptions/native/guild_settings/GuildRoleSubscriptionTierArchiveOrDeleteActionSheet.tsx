// Module ID: 17566
// Function ID: 17567
// Name: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 1619, 38, 17567, 4833, 1189, 5282, 4801, 1127, 6038, 6572, 2]

// Module 17566 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import native from "native" /* 1189 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import components_Button_Button from "components/Button/Button" /* 5282 */;
import BottomSheetModal from "BottomSheetModal" /* 6038 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6572 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 17567 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, groupListingId;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, cancel: { alignSelf: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
let closure_7 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((groupListingId) => {
  let archiving;
  let buttonText;
  let deleting;
  let descriptionText;
  let editStateId;
  let guildId;
  let handleArchiveOrDelete;
  let headerText;
  let intl;
  let items;
  let tmp11;
  let tmp14;
  let tmp17;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(26);
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp4 = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _modDef38(null != groupListingId, "group listing id cannot be null");
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId));
  useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
  if (cResult[0] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[0] = bottom;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== headerText) {
    const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText };
    const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = headerText;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = hasOwnProperty(native.Spacer, { size: 12 });
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== descriptionText) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: descriptionText };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[5] = descriptionText;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = hasOwnProperty(native.Spacer, { size: 24 });
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (!deleting) {
    deleting = archiving;
  }
  if (cResult[8] === buttonText) {
    if (cResult[9] === handleArchiveOrDelete) {
      let tmp20;
      let tmp22;
      let tmp25;
      let tmp26;
      if (cResult[10] === deleting) {
        tmp20 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp24 = hasOwnProperty(native.Spacer, { size: 24 });
        cResult[12] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
        cResult[13] = D;
        tmp25 = D;
      } else {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
        const obj5 = { variant: "text-sm/semibold", color: "interactive-text-active", children: intl.string(intl2.t["ETE/oC"]) };
        const Text = tmp(4833).Text;
        intl = tmp(1127).intl;
        const tmp27 = hasOwnProperty(Text, obj5);
        cResult[14] = tmp27;
        tmp26 = tmp27;
      } else {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
      }
      if (cResult[15] !== tmp4.cancel) {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
        const obj6 = { onPress: tmp25, style: tmp4.cancel, activeOpacity: 0.5, children: tmp26 };
        cResult[15] = tmp4.cancel;
        cResult[16] = hasOwnProperty(_false, obj6);
        const tmp30 = hasOwnProperty(_false, obj6);
      } else {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
      }
      if (cResult[17] === tmp7) {
        class D {
          constructor() {
            obj = closure_1_1(closure_1_2[13]);
            return obj.hideActionSheet();
          }
        }
      }
      const obj7 = { contentContainerStyle: tmp7, children: items };
      items = [tmp8, tmp11, tmp14, tmp17, tmp20, tmp22, tmp28];
      cResult[17] = tmp7;
      cResult[18] = tmp28;
      cResult[19] = tmp8;
      cResult[20] = tmp14;
      cResult[21] = tmp20;
      cResult[22] = metroRequire(BottomSheetModal.BottomSheetScrollView, obj7);
      const tmp33 = metroRequire(BottomSheetModal.BottomSheetScrollView, obj7);
    }
  }
  const tmp21 = hasOwnProperty(components_Button_Button.Button, { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: deleting });
  cResult[8] = buttonText;
  cResult[9] = handleArchiveOrDelete;
  cResult[10] = deleting;
  cResult[11] = tmp21;
  tmp20 = tmp21;
}) : ((groupListingId) => {
  let BottomSheetScrollView;
  let Text;
  let archiving;
  let buttonText;
  let descriptionText;
  let editStateId;
  let guildId;
  let handleArchiveOrDelete;
  let headerText;
  let intl;
  let items;
  let obj2;
  let obj6;
  let tmp8;
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _modDef38(null != groupListingId, "group listing id cannot be null");
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  let obj = { style: tmp.container, children: tmp8(BottomSheetScrollView, obj2) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  items = [hasOwnProperty(Text_Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), hasOwnProperty(native.Spacer, { size: 12 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), hasOwnProperty(native.Spacer, { size: 24 }), , , ];
  const obj3 = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: deleting };
  const Button = components_Button_Button.Button;
  const tmp7 = React3;
  tmp8 = metroRequire;
  if (!deleting) {
    deleting = archiving;
  }
  const obj4 = { backdropOpacity: 0.8, children: hasOwnProperty(tmp7, obj) };
  items[4] = hasOwnProperty(Button, obj3);
  items[5] = hasOwnProperty(native.Spacer, { size: 24 });
  const obj5 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    },
    style: tmp.cancel,
    activeOpacity: 0.5,
    children: hasOwnProperty(Text, obj6)
  };
  obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: intl.string(intl2.t["ETE/oC"]) };
  Text = tmp6(4833).Text;
  intl = tmp6(1127).intl;
  items[6] = hasOwnProperty(_false, obj5);
  return hasOwnProperty(BottomSheet, obj4);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default tmp5;
