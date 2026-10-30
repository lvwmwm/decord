// Module ID: 16775
// Function ID: 16776
// Name: FamilyCenterPendingLinks
// Dependencies: [19, 17, 7709, 21, 5009, 575, 8361, 13312, 1114, 2537, 5619, 8362, 6974, 6738, 16776, 1995, 1188, 15077, 16777, 16774, 16778, 16769, 2]
// Exports: default

// Module 16775 (FamilyCenterPendingLinks)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import _modDef2537 from "module_2537" /* 2537 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import useUserLinks from "useUserLinks" /* 8361 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import useAgeSpecificText from "useAgeSpecificText" /* 13312 */;
import AssetRegistryDefault from "AssetRegistry" /* 15077 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 16769 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16774 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let size;
let tmp2;
const Text_Text = tmp2(5619);
function FamilyCenterPendingLinkRow(otherUser) {
  let Icon;
  let Icon2;
  let Icon3;
  let items;
  let obj10;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj9;
  const str = otherUser.otherUser;
  const tmp = closure_9();
  const tmp4 = useIsInAdultAgeGroupDefault();
  str(8361);
  if (undefined === str) {
    return null;
  } else {
    let tmp8Result;
    let tmp14;
    if (tmp4) {
      const PressableOpacity3 = tmp5(6974).PressableOpacity;
      const intl3 = tmp5(1114).intl;
      const formatToPlainString3 = intl3.formatToPlainString;
      let str1;
      const oUpA6X = tmp2(2537).oUpA6X;
      if (str != null) {
        str1 = str.toString();
      }
      let obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainString3(oUpA6X, obj3),
        onPress: function handleCancel() {
              const obj = ModalActionCreatorsDefault;
              const obj2 = { otherUser: str };
              obj.pushLazy(asyncRequire(16778, dependencyMap.paths), obj2);
            },
        style: tmp.actionButton,
        children: closure_5(Icon3, obj4)
      };
      obj3 = { name: str1 };
      obj4 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault2 };
      Icon3 = tmp5(1188).Icon;
      tmp8Result = tmp18(PressableOpacity3, obj2);
      tmp14 = tmp18;
    } else {
      let tmp12Result = null;
      const tmp8 = closure_6;
      const tmp9 = closure_7;
      if (!tmp7) {
        const PressableOpacity = tmp5(6974).PressableOpacity;
        const intl = tmp5(1114).intl;
        const formatToPlainString = intl.formatToPlainString;
        let str2;
        const jc1Ip7 = tmp2(2537).jc1Ip7;
        if (str != null) {
          str2 = str.toString();
        }
        let obj = {
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainString(jc1Ip7, obj5),
          onPress: function handleAccept() {
                  const obj = ModalActionCreatorsDefault;
                  const obj2 = { otherUser: str };
                  obj.pushLazy(asyncRequire(16776, dependencyMap.paths), obj2);
                },
          style: items,
          children: closure_5(Icon, obj6)
        };
        items = [, ];
        obj5 = { name: str2 };
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj6 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
        Icon = tmp5(1188).Icon;
        tmp12Result = tmp12(PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const PressableOpacity2 = tmp5(6974).PressableOpacity;
      const intl2 = tmp5(1114).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str3;
      const v4GtllP = tmp2(2537)["4GtllP"];
      if (str != null) {
        str3 = str.toString();
      }
      const obj7 = { children: items1 };
      const obj8 = {
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainString2(v4GtllP, obj9),
        onPress: function handleDecline() {
              const obj = ModalActionCreatorsDefault;
              const obj2 = { otherUser: str };
              obj.pushLazy(asyncRequire(16777, dependencyMap.paths), obj2);
            },
        style: tmp.actionButton,
        children: tmp14(Icon2, obj10)
      };
      obj9 = { name: str3 };
      obj10 = { size: str(1188).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault2 };
      Icon2 = tmp5(1188).Icon;
      items1[1] = tmp14(PressableOpacity2, obj8);
      tmp8Result = tmp8(tmp9, obj7);
    }
    const obj11 = { otherUser: str, actions: tmp8Result };
    return tmp14(FamilyCenterLinkRowDefault, obj11);
  }
}
const View = react_native.View;
const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 24 }, content: obj2, header: { marginBottom: 10 } };
obj2 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { actionButton: size, actionButtonFirst: obj4 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
createStyles = createStyles.createStyles;
obj4 = { marginRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterPendingLinks.tsx");

export default function FamilyCenterPendingLinks() {
  let items;
  const tmp = closure_8();
  let obj = useUserLinks;
  const usersForLinkStatus = obj.useUsersForLinkStatus(UserLinkStatus.PENDING);
  useAgeSpecificText;
  const intl = intl4.intl;
  const obj2 = { count: usersForLinkStatus.length };
  intl.formatToPlainString(_modDef2537.IkAgkG, obj2);
  const intl2 = intl4.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: tmp6 };
    items = [hasOwnProperty(Text_Text.Text, obj4), ];
    const obj5 = {
      style: tmp.content,
      children: usersForLinkStatus.map((otherUser) => {
          const obj = { otherUser };
          return closure_1_5(FamilyCenterPendingLinkRow, obj, "pending-" + otherUser.id);
        })
    };
    items[1] = hasOwnProperty(View, obj5);
    tmp7 = metroRequire(View, obj3);
  }
  return tmp7;
};
