// Module ID: 16375
// Function ID: 16376
// Name: FamilyCenterAcceptedLinks
// Dependencies: [19, 17, 8171, 21, 5012, 575, 8174, 8169, 12545, 1112, 2846, 5603, 16376, 16377, 6121, 6099, 16380, 2119, 1186, 16382, 2]
// Exports: default

// Module 16375 (FamilyCenterAcceptedLinks)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef2846 from "module_2846" /* 2846 */;
import Text_Text from "Text/Text" /* 5603 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import useUserLinks from "useUserLinks" /* 8169 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8174 */;
import useAgeSpecificText2 from "useAgeSpecificText" /* 12545 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 16376 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 16377 */;
import react from "react" /* 19 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
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
    let obj2 = { otherUser: str, status: constants.ACTIVE, actions: closure_7(PressableOpacity, obj) };
    const tmp7 = FamilyCenterLinkRowDefault;
    PressableOpacity = str(6121).PressableOpacity;
    const intl = str(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str1;
    const T7DUoU = _modDef2846.T7DUoU;
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
          obj.pushLazy(asyncRequire(16380, dependencyMap.paths), obj2);
        },
      style: tmp.actionButton,
      children: closure_7(Icon, obj4)
    };
    obj3 = { name: str1 };
    obj4 = { size: str(1186).Icon.Sizes.SMALL, disableColor: true, source: tmp5(16382) };
    Icon = tmp9(1186).Icon;
    tmp4Result = tmp4(tmp7, obj2);
  }
  return tmp4Result;
}
const View = react_native.View;
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty, UserLinkStatus: metroRequire } = FamilyCenterConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 24 }, content: obj2, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
obj2 = { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { actionButton: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
let closure_10 = createStyles.createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  let intl3;
  let items;
  let mapped;
  let obj7;
  let tmp2Result;
  const tmp = closure_9();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUsers = obj.useActiveLinkUsers();
  const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React3 : hasOwnProperty };
  const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
  useAgeSpecificText2;
  const intl = tmp5(1112).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2846["+tnO34"], obj2);
  const intl2 = tmp5(1112).intl;
  const obj3 = { style: tmp.container, children: items };
  const ageSpecificText = useAgeSpecificText(formatToPlainStringResult, intl2.formatToPlainString(tmp2(2846)["pu6/U0"], obj2));
  items = [, ];
  const obj4 = { style: tmp.header, variant: "body-sm/medium", color: "text-default", children: ageSpecificText };
  items[0] = metroImportDefault(Text_Text.Text, obj4);
  const obj5 = { style: tmp.content, children: mapped };
  const tmp9 = metroImportAll;
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: metroImportDefault(tmp2Result, obj7) };
    obj7 = { text: intl3.string(_modDef2846.C4ScLD) };
    tmp2Result = FamilyCenterEmptyDefault;
    intl3 = tmp5(1112).intl;
    mapped = tmp11(tmp10, obj6);
  } else {
    mapped = activeLinkUsers.map((otherUser) => {
      const obj = { otherUser };
      return closure_1_7(FamilyCenterAcceptedLinkRow, obj, "accepted-" + otherUser.id);
    });
  }
  items[1] = metroImportDefault(View, obj5);
  return tmp9(View, obj3);
};
