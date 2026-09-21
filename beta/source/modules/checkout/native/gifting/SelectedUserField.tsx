// Module ID: 11159
// Function ID: 11160
// Name: SelectedUserField
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 1119, 4603, 7298, 1181, 4754, 6851, 6856, 2]

// Module 11159 (SelectedUserField)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import InputFieldContainer from "InputFieldContainer" /* 6856 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7298 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_16 }, content: { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" }, opener: null, openerWithClearButton: null, searchIcon: null, userPill: null, userPillText: null, clearButton: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.opener = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj2.openerWithClearButton = { paddingRight: 0 };
let obj4 = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj2.searchIcon = { marginRight: nativeDefault.space.PX_8 };
let obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.userPill = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj2.userPillText = { marginLeft: 6 };
let obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj2.clearButton = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ selectedUser, onPress, setSelectedUser } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === tmp4.opener) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== selectedUser) {
      if (null != selectedUser) {
        const intl3 = tmp(1119).intl;
        const stringResult = intl3.string(tmp(1119).t.xFn72s);
        const _HermesInternal2 = HermesInternal;
        let combined = "" + stringResult + ", " + UserUtilsDefault.getName(selectedUser);
      } else {
        const intl = tmp(1119).intl;
        const intl2 = tmp(1119).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp(1119).t.xFn72s) + ", " + intl2.string(tmp(1119).t.R0vK0N);
        const stringResult1 = intl.string(tmp(1119).t.xFn72s);
      }
      cResult[3] = selectedUser;
      cResult[4] = combined;
    } else {
      if (cResult[5] !== tmp4.searchIcon) {
        const obj3 = { style: tmp4.searchIcon, size: "xs", color: "interactive-text-default" };
        const tmp17 = hasOwnProperty(tmp(7298).MagnifyingGlassIcon, obj3);
        cResult[5] = tmp4.searchIcon;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === selectedUser) {
        if (cResult[8] === tmp4.userPill) {
          if (cResult[9] === tmp4.userPillText) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp15) {
                    if (cResult[15] === tmp18) {
                      let tmp26 = cResult[16];
                    }
                    if (cResult[17] === selectedUser) {
                      if (cResult[18] === setSelectedUser) {
                        if (cResult[19] === tmp4.clearButton) {
                          let tmp30 = cResult[20];
                        }
                        if (cResult[21] === tmp4.content) {
                          if (cResult[22] === tmp26) {
                            if (cResult[23] === tmp30) {
                              let tmp35 = cResult[24];
                            }
                            if (cResult[25] === tmp4.container) {
                              if (cResult[26] === tmp35) {
                                let tmp40 = cResult[27];
                              }
                              return tmp40;
                            }
                            const obj4 = { style: tmp4.container, children: tmp35 };
                            const tmp43 = hasOwnProperty(React4, obj4);
                            cResult[25] = tmp4.container;
                            cResult[26] = tmp35;
                            cResult[27] = tmp43;
                            tmp40 = tmp43;
                          }
                        }
                        const obj5 = { children: null };
                        const obj6 = { style: tmp4.content, children: null };
                        const items = [tmp26, tmp30];
                        obj6.children = items;
                        obj5.children = timestampProducer(React4, obj6);
                        const tmp39 = hasOwnProperty(tmp(6856).InputFieldContainer, obj5);
                        cResult[21] = tmp4.content;
                        cResult[22] = tmp26;
                        cResult[23] = tmp30;
                        cResult[24] = tmp39;
                        tmp35 = tmp39;
                      }
                    }
                    let tmp31 = null;
                    if (null != selectedUser) {
                      const obj7 = {
                        style: tmp4.clearButton,
                        onPress() {
                                              return setSelectedUser(undefined);
                                            },
                        accessibilityRole: "button",
                        accessibilityLabel: null,
                        children: null
                      };
                      const intl5 = tmp(1119).intl;
                      const obj9 = { text: UserUtilsDefault.getName(selectedUser) };
                      obj7.accessibilityLabel = intl5.formatToPlainString(tmp(1119).t["0Vb9FQ"], obj9);
                      obj7.children = hasOwnProperty(tmp(6851).CircleXIcon, { size: "xs" });
                      tmp31 = hasOwnProperty(React3, obj7);
                    }
                    cResult[17] = selectedUser;
                    cResult[18] = setSelectedUser;
                    cResult[19] = tmp4.clearButton;
                    cResult[20] = tmp31;
                    tmp30 = tmp31;
                  }
                }
              }
            }
            const obj10 = { style: tmp6, onPress, accessibilityRole: "button", accessibilityLabel: tmp7, children: null };
            const items1 = [tmp15, cResult[10]];
            obj10.children = items1;
            const tmp29 = timestampProducer(React3, obj10);
            cResult[11] = onPress;
            cResult[12] = tmp6;
            cResult[13] = tmp7;
            cResult[14] = tmp15;
            cResult[15] = cResult[10];
            cResult[16] = tmp29;
            tmp26 = tmp29;
          }
        }
      }
      if (null != selectedUser) {
        const obj11 = { style: tmp4.userPill, children: null };
        const obj13 = { user: selectedUser, guildId: "Array", size: tmp(1181).AvatarSizes.XSMALL_20 };
        const items2 = [hasOwnProperty(tmp(1181).Avatar, obj13), ];
        const obj14 = { variant: "text-md/medium", style: tmp4.userPillText, children: UserUtilsDefault.getName(selectedUser) };
        items2[1] = hasOwnProperty(tmp(4754).Text, obj14);
        obj11.children = items2;
        let tmp20 = timestampProducer(React4, obj11);
      } else {
        const obj15 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp4.userPillText, children: null };
        const intl4 = tmp(1119).intl;
        obj15.children = intl4.string(tmp(1119).t.R0vK0N);
        tmp20 = hasOwnProperty(tmp(4754).Text, obj15);
      }
      cResult[7] = selectedUser;
      cResult[8] = tmp4.userPill;
      cResult[9] = tmp4.userPillText;
      cResult[10] = tmp20;
    }
  }
  const items3 = [tmp4.opener, null != selectedUser && tmp4.openerWithClearButton];
  cResult[0] = tmp4.opener;
  cResult[1] = null != selectedUser && tmp4.openerWithClearButton;
  cResult[2] = items3;
  tmp6 = items3;
}) : ((onPress) => {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  const obj3 = { style: items, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = tmp4(1119).intl;
    const stringResult = intl3.string(tmp4(1119).t.xFn72s);
    const _HermesInternal2 = HermesInternal;
    let combined = "" + stringResult + ", " + UserUtilsDefault.getName(selectedUser);
  } else {
    const intl = tmp4(1119).intl;
    const intl2 = tmp4(1119).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp4(1119).t.xFn72s) + ", " + intl2.string(tmp4(1119).t.R0vK0N);
    const stringResult1 = intl.string(tmp4(1119).t.xFn72s);
  }
  obj3.accessibilityLabel = combined;
  const items1 = [hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" }), ];
  if (null != selectedUser) {
    const obj6 = { style: tmp.userPill, children: null };
    const obj7 = { user: selectedUser, guildId: "Array", size: tmp4(1181).AvatarSizes.XSMALL_20 };
    const items2 = [tmp2(tmp4(1181).Avatar, obj7), ];
    const obj8 = { variant: "text-md/medium", style: tmp.userPillText, children: UserUtilsDefault.getName(selectedUser) };
    items2[1] = tmp2(tmp4(4754).Text, obj8);
    obj6.children = items2;
    let tmp2Result1 = tmp6(tmp3, obj6);
  } else {
    const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: null };
    const intl4 = tmp4(1119).intl;
    obj9.children = intl4.string(tmp4(1119).t.R0vK0N);
    tmp2Result1 = tmp2(tmp4(4754).Text, obj9);
  }
  items1[1] = tmp2Result1;
  obj3.children = items1;
  const items3 = [timestampProducer(React3, obj3), ];
  let tmp2Result = null;
  if (null != selectedUser) {
    const obj11 = {
      style: tmp.clearButton,
      onPress() {
          return require(undefined);
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const intl5 = tmp4(1119).intl;
    const obj12 = { text: UserUtilsDefault.getName(selectedUser) };
    obj11.accessibilityLabel = intl5.formatToPlainString(tmp4(1119).t["0Vb9FQ"], obj12);
    obj11.children = tmp2(tmp4(6851).CircleXIcon, { size: "xs" });
    tmp2Result = tmp2(tmp7, obj11);
  }
  items3[1] = tmp2Result;
  obj2.children = items3;
  obj.children = hasOwnProperty(InputFieldContainer.InputFieldContainer, { children: timestampProducer(React4, obj2) });
  return hasOwnProperty(React4, obj);
});
