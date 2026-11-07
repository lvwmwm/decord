// Module ID: 17137
// Function ID: 17138
// Name: FamilyCenterPendingLinks
// Dependencies: [19, 17, 7792, 21, 5140, 575, 8440, 13593, 1113, 2664, 5751, 8441, 7043, 6799, 17138, 2118, 1187, 15384, 17139, 17136, 17140, 17131, 2]
// Exports: default

// Module 17137 (FamilyCenterPendingLinks)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef2664 from "module_2664" /* 2664 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7792 */;
import useUserLinks from "useUserLinks" /* 8440 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8441 */;
import useAgeSpecificText from "useAgeSpecificText" /* 13593 */;
import AssetRegistryDefault from "AssetRegistry" /* 15384 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 17131 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17136 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let size;
let tmp2;
const Text_Text = tmp2(5751);
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
  str(8440);
  if (undefined === str) {
    return null;
  } else {
    let tmp8Result;
    let tmp14;
    if (tmp4) {
      const PressableOpacity3 = tmp5(7043).PressableOpacity;
      const intl3 = tmp5(1113).intl;
      const formatToPlainString3 = intl3.formatToPlainString;
      let str1;
      const oUpA6X = tmp2(2664).oUpA6X;
      if (str != null) {
        str1 = str.toString();
      }
      let obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainString3(oUpA6X, obj3),
        onPress: function handleCancel() {
              const obj = ModalActionCreatorsDefault;
              const obj2 = { otherUser: str };
              obj.pushLazy(asyncRequire(17140, dependencyMap.paths), obj2);
            },
        style: tmp.actionButton,
        children: closure_5(Icon3, obj4)
      };
      obj3 = { name: str1 };
      obj4 = { size: str(1187).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault2 };
      Icon3 = tmp5(1187).Icon;
      tmp8Result = tmp18(PressableOpacity3, obj2);
      tmp14 = tmp18;
    } else {
      let tmp12Result = null;
      const tmp8 = closure_6;
      const tmp9 = closure_7;
      if (!tmp7) {
        const PressableOpacity = tmp5(7043).PressableOpacity;
        const intl = tmp5(1113).intl;
        const formatToPlainString = intl.formatToPlainString;
        let str2;
        const jc1Ip7 = tmp2(2664).jc1Ip7;
        if (str != null) {
          str2 = str.toString();
        }
        let obj = {
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainString(jc1Ip7, obj5),
          onPress: function handleAccept() {
                  const obj = ModalActionCreatorsDefault;
                  const obj2 = { otherUser: str };
                  obj.pushLazy(asyncRequire(17138, dependencyMap.paths), obj2);
                },
          style: items,
          children: closure_5(Icon, obj6)
        };
        items = [, ];
        obj5 = { name: str2 };
        ({ actionButton: arr[0], actionButtonFirst: arr[1] } = tmp);
        obj6 = { size: str(1187).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
        Icon = tmp5(1187).Icon;
        tmp12Result = tmp12(PressableOpacity, obj);
      }
      const items1 = [tmp12Result, ];
      tmp14 = closure_5;
      const PressableOpacity2 = tmp5(7043).PressableOpacity;
      const intl2 = tmp5(1113).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str3;
      const v4GtllP = tmp2(2664)["4GtllP"];
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
              obj.pushLazy(asyncRequire(17139, dependencyMap.paths), obj2);
            },
        style: tmp.actionButton,
        children: tmp14(Icon2, obj10)
      };
      obj9 = { name: str3 };
      obj10 = { size: str(1187).Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault2 };
      Icon2 = tmp5(1187).Icon;
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
  intl.formatToPlainString(_modDef2664.IkAgkG, obj2);
  const intl2 = intl4.intl;
  let tmp7 = null;
  if (0 !== usersForLinkStatus.length) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.header, variant: "body-sm/medium", color: "text-default", children: tmp6 };
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
