// Module ID: 17057
// Function ID: 17058
// Name: FamilyCenterAcceptedLinks
// Dependencies: [19, 17, 7856, 21, 5141, 575, 8511, 8510, 13582, 1113, 2667, 5761, 17058, 17059, 7121, 6879, 17062, 2123, 1187, 17064, 2]
// Exports: default

// Module 17057 (FamilyCenterAcceptedLinks)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import _modDef2667 from "module_2667" /* 2667 */;
import Text_Text from "Text/Text" /* 5761 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import useUserLinks from "useUserLinks" /* 8510 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8511 */;
import useAgeSpecificText2 from "useAgeSpecificText" /* 13582 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 17058 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 17059 */;
import react from "react" /* 19 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7856 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
function FamilyCenterAcceptedLinkRow(otherUser) {
  let Icon;
  let PressableOpacity;
  let obj;
  let obj3;
  let obj4;
  const str = otherUser.otherUser;
  let tmp4Result = null;
  if (undefined !== str) {
    let obj2 = { otherUser: str, actions: closure_6(PressableOpacity, obj) };
    const tmp7 = FamilyCenterLinkRowDefault;
    PressableOpacity = str(7121).PressableOpacity;
    const intl = str(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str1;
    const T7DUoU = _modDef2667.T7DUoU;
    const tmp5 = importDefault;
    if (str != null) {
      str1 = str.toString();
    }
    obj = {
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainString(T7DUoU, obj3),
      onPress: function handleDisconnect() {
          const obj = ModalActionCreatorsDefault;
          const obj2 = { otherUser: str };
          obj.pushLazy(asyncRequire(17062, dependencyMap.paths), obj2);
        },
      style: tmp.actionButton,
      children: closure_6(Icon, obj4)
    };
    obj3 = { name: str1 };
    obj4 = { size: str(1187).Icon.Sizes.SMALL, disableColor: true, source: tmp5(17064) };
    Icon = tmp8(1187).Icon;
    tmp4Result = tmp4(tmp7, obj2);
  }
  return tmp4Result;
}
const View = react_native.View;
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } = FamilyCenterConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 24 }, content: obj2, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
obj2 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { actionButton: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
let closure_9 = createStyles.createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  let intl3;
  let items;
  let mapped;
  let obj7;
  let tmp2Result;
  const tmp = closure_8();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUsers = obj.useActiveLinkUsers();
  const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React3 : hasOwnProperty };
  const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
  useAgeSpecificText2;
  const intl = tmp5(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2667["+tnO34"], obj2);
  const intl2 = tmp5(1113).intl;
  const obj3 = { style: tmp.container, children: items };
  const ageSpecificText = useAgeSpecificText(formatToPlainStringResult, intl2.formatToPlainString(tmp2(2667)["pu6/U0"], obj2));
  items = [, ];
  const obj4 = { style: tmp.header, variant: "body-sm/medium", color: "text-default", children: ageSpecificText };
  items[0] = metroRequire(Text_Text.Text, obj4);
  const obj5 = { style: tmp.content, children: mapped };
  const tmp9 = metroImportDefault;
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: metroRequire(tmp2Result, obj7) };
    obj7 = { text: intl3.string(_modDef2667.C4ScLD) };
    tmp2Result = FamilyCenterEmptyDefault;
    intl3 = tmp5(1113).intl;
    mapped = tmp11(tmp10, obj6);
  } else {
    mapped = activeLinkUsers.map((otherUser) => {
      const obj = { otherUser };
      return closure_1_6(FamilyCenterAcceptedLinkRow, obj, "accepted-" + otherUser.id);
    });
  }
  items[1] = metroRequire(View, obj5);
  return tmp9(View, obj3);
};
