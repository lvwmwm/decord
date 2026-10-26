// Module ID: 19302
// Function ID: 19303
// Name: GuildRoleSubscriptionBenefitModalHeader
// Dependencies: [32, 19, 17, 21, 4971, 587, 558, 576, 16583, 5234, 1128, 9041, 6924, 7221, 2]

// Module 19302 (GuildRoleSubscriptionBenefitModalHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5234 */;
import NavigatorHeader from "NavigatorHeader" /* 6924 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7221 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9041 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16583 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { headerContainer: obj2, headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 }, headerButtonStart: { alignItems: "flex-start" }, headerButtonEnd: { alignItems: "flex-end" }, titleContainer: { flex: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", paddingBottom: 8, paddingHorizontal: 16 };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionBenefitModalHeader(listingId) {
  let canSave;
  let intl;
  let items;
  let onClose;
  let onSave;
  let title;
  const obj = react2;
  const cResult = obj.c(29);
  ({ title, canSave, onSave, onClose } = listingId);
  listingId = listingId.listingId;
  const tmp4 = closure_8();
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useName(listingId), 1)[0];
  if (cResult[0] === tmp4.headerButtonContainer) {
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4.headerButtonStart) {
      tmp7 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(intl3.t["ETE/oC"]) };
      const Text = tmp(5234).Text;
      intl = tmp(1128).intl;
      const tmp11 = metroRequire(Text, obj3);
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === onClose) {
      let tmp12;
      if (cResult[5] === tmp7) {
        tmp12 = cResult[6];
      }
      if (cResult[7] === first) {
        let tmp16;
        if (cResult[8] === title) {
          tmp16 = cResult[9];
        }
        if (cResult[10] === tmp4.titleContainer) {
          let tmp19;
          if (cResult[11] === tmp16) {
            tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.headerButtonContainer) {
            let tmp23;
            let tmp25;
            let tmp27;
            if (cResult[14] === tmp4.headerButtonEnd) {
              tmp23 = cResult[15];
            }
            let str2 = "text-muted";
            if (canSave) {
              str2 = "interactive-text-active";
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1128).intl;
              const stringResult = intl2.string(intl3.t["R3BPH+"]);
              cResult[16] = stringResult;
              tmp25 = stringResult;
            } else {
              tmp25 = cResult[16];
            }
            if (cResult[17] !== str2) {
              const obj4 = { variant: "text-md/medium", color: str2, children: tmp25 };
              const tmp29 = metroRequire(Text_Text.Text, obj4);
              cResult[17] = str2;
              cResult[18] = tmp29;
              tmp27 = tmp29;
            } else {
              tmp27 = cResult[18];
            }
            if (cResult[19] === onSave) {
              if (cResult[20] === tmp27) {
                if (cResult[21] === tmp23) {
                  let tmp30;
                  if (cResult[22] === !canSave) {
                    tmp30 = cResult[23];
                  }
                  if (cResult[24] === tmp4.headerContainer) {
                    if (cResult[25] === tmp30) {
                      if (cResult[26] === tmp12) {
                        let tmp34;
                        if (cResult[27] === tmp19) {
                          tmp34 = cResult[28];
                        }
                        return tmp34;
                      }
                    }
                  }
                  const obj5 = { top: true, style: tmp6, children: items };
                  items = [tmp12, tmp19, tmp30];
                  const tmp36 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, obj5);
                  cResult[24] = tmp4.headerContainer;
                  cResult[25] = tmp30;
                  cResult[26] = tmp12;
                  cResult[27] = tmp19;
                  cResult[28] = tmp36;
                  tmp34 = tmp36;
                }
              }
            }
            const obj6 = { style: tmp23, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: tmp27 };
            const tmp33 = metroRequire(TouchableHitBoxDefault, obj6);
            cResult[19] = onSave;
            cResult[20] = tmp27;
            cResult[21] = tmp23;
            cResult[22] = !canSave;
            cResult[23] = tmp33;
            tmp30 = tmp33;
          }
          const items1 = [, ];
          ({ headerButtonContainer: arr2[0], headerButtonEnd: arr2[1] } = tmp4);
          cResult[13] = tmp4.headerButtonContainer;
          cResult[14] = tmp4.headerButtonEnd;
          cResult[15] = items1;
          tmp23 = items1;
        }
        const obj7 = { style: tmp4.titleContainer, children: tmp16 };
        const tmp22 = metroRequire(View, obj7);
        cResult[10] = tmp4.titleContainer;
        cResult[11] = tmp16;
        cResult[12] = tmp22;
        tmp19 = tmp22;
      }
      const obj8 = { title, subtitle: first };
      const tmp18 = metroRequire(NavigatorHeader.NavigatorHeader, obj8);
      cResult[7] = first;
      cResult[8] = title;
      cResult[9] = tmp18;
      tmp16 = tmp18;
    }
    const obj9 = { style: tmp7, accessibilityRole: "button", onPress: onClose, children: tmp9 };
    const tmp15 = metroRequire(TouchableHitBoxDefault, obj9);
    cResult[4] = onClose;
    cResult[5] = tmp7;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  }
  const items2 = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp4);
  ({ headerButtonContainer: tmp3[0], headerButtonStart: tmp3[1] } = tmp4);
  cResult[2] = items2;
  tmp7 = items2;
}) : (function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let listingId;
  let obj4;
  let obj7;
  let onClose;
  let onSave;
  let title;
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useName(listingId), 1)[0];
  const obj2 = { top: true, style: tmp.headerContainer, children: items1 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj3 = { style: items, accessibilityRole: "button", onPress: onClose, children: metroRequire(Text, obj4) };
  items = [, ];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj4 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(intl3.t["ETE/oC"]) };
  const tmp7 = TouchableHitBoxDefault;
  Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [metroRequire(tmp7, obj3), , ];
  const obj5 = { style: tmp.titleContainer, children: metroRequire(NavigatorHeader.NavigatorHeader, { title, subtitle: first }) };
  items1[1] = metroRequire(View, obj5);
  const obj6 = { style: items2, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: metroRequire(Text2, obj7) };
  items2 = [, ];
  ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp);
  let str = "text-muted";
  const tmp8 = TouchableHitBoxDefault;
  Text2 = Text_Text.Text;
  const tmp4 = metroImportDefault;
  if (canSave) {
    str = "interactive-text-active";
  }
  obj7 = { variant: "text-md/medium", color: str, children: intl2.string(intl3.t["R3BPH+"]) };
  intl2 = tmp5(1128).intl;
  items1[2] = metroRequire(tmp8, obj6);
  return tmp4(SafeAreaPaddingView, obj2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx");

export default tmp4;
