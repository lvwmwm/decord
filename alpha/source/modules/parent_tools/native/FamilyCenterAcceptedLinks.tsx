// Module ID: 16221
// Function ID: 16222
// Name: FamilyCenterAcceptedLinks
// Dependencies: [19, 17, 8336, 21, 4913, 575, 9137, 9136, 12470, 1112, 2824, 5504, 16222, 16223, 7030, 6429, 16226, 2119, 1186, 16228, 2]
// Exports: default

// Module 16221 (FamilyCenterAcceptedLinks)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef2824 from "module_2824" /* 2824 */;
import Text_Text from "Text/Text" /* 5504 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import useUserLinks from "useUserLinks" /* 9136 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 9137 */;
import useAgeSpecificText2 from "useAgeSpecificText" /* 12470 */;
import FamilyCenterEmptyDefault from "FamilyCenterEmpty" /* 16222 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 16223 */;
import react from "react" /* 19 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8336 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
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
    PressableOpacity = str(7030).PressableOpacity;
    const intl = str(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str1;
    const T7DUoU = _modDef2824.T7DUoU;
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
          obj.pushLazy(asyncRequire(16226, dependencyMap.paths), obj2);
        },
      style: tmp.actionButton,
      children: closure_7(Icon, obj4)
    };
    obj3 = { name: str1 };
    obj4 = { size: str(1186).Icon.Sizes.SMALL, disableColor: true, source: tmp5(16228) };
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
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2824["+tnO34"], obj2);
  const intl2 = tmp5(1112).intl;
  const obj3 = { style: tmp.container, children: items };
  const ageSpecificText = useAgeSpecificText(formatToPlainStringResult, intl2.formatToPlainString(tmp2(2824)["pu6/U0"], obj2));
  items = [, ];
  const obj4 = { style: tmp.header, variant: "body-sm/medium", color: "text-default", children: ageSpecificText };
  items[0] = metroImportDefault(Text_Text.Text, obj4);
  const obj5 = { style: tmp.content, children: mapped };
  const tmp9 = metroImportAll;
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: metroImportDefault(tmp2Result, obj7) };
    obj7 = { text: intl3.string(_modDef2824.C4ScLD) };
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
