// Module ID: 16740
// Function ID: 16741
// Name: FamilyCenterModalDataTooltip
// Dependencies: [19, 17, 7709, 21, 8635, 13313, 5710, 15434, 8637, 8007, 5735, 13315, 5009, 575, 5619, 13312, 1114, 2537, 8362, 8364, 7964, 7965, 13158, 5629, 6738, 6992, 11447, 2]
// Exports: default

// Module 16740 (FamilyCenterModalDataTooltip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Text_Text from "Text/Text" /* 5619 */;
import FriendsIcon from "FriendsIcon" /* 5710 */;
import ClockIcon from "ClockIcon" /* 5735 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import CreditCardIcon from "CreditCardIcon" /* 8007 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import ChatIcon from "ChatIcon" /* 8635 */;
import ThreadIcon from "ThreadIcon" /* 8637 */;
import Modal2 from "Modal" /* 11447 */;
import PhoneIcon from "PhoneIcon" /* 13313 */;
import GiftIcon from "GiftIcon" /* 13315 */;
import ServerGridIcon from "ServerGridIcon" /* 15434 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GIFTS;
let GUILD_ADD;
let GUILD_INTERACTION;
let PURCHASES;
let TOTAL_VOICE_MINUTES;
let USER_ADD;
let USER_CALLED;
let USER_INTERACTION;
let hasOwnProperty;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj7;
let size;
function Row(arg0) {
  let IconComponent;
  let description;
  let header;
  let items;
  let items1;
  let obj3;
  ({ header, description, IconComponent } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.row, children: items };
  const obj2 = { style: tmp.iconContainer, children: hasOwnProperty(IconComponent, obj3) };
  obj3 = { style: tmp.icon };
  items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.content, children: items1 };
  items1 = [, ];
  const obj5 = { style: tmp.header, variant: "text-sm/bold", color: "mobile-text-heading-primary", children: header };
  items1[0] = hasOwnProperty(Text_Text.Text, obj5);
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: description });
  items[1] = metroRequire(View, obj4);
  return metroRequire(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  let Button;
  let closure_0;
  let intl3;
  let items;
  let items1;
  let obj4;
  let obj7;
  const tmp = closure_10();
  const tmp2 = require("useAgeSpecificText");
  const useAgeSpecificText = tmp2.useAgeSpecificText;
  const intl = require("intl").intl;
  const stringResult = intl.string(_modDef2537.n6LOrh);
  const intl2 = require("intl").intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2537.JNLpDZ));
  _require = useIsInAdultAgeGroupDefault();
  obj = require("FamilyCenterUtils");
  const sortedActivityTypeConfigs = obj.getSortedActivityTypeConfigs();
  let obj2 = { children: items1 };
  const ModalScreen = require("ModalScreen").ModalScreen;
  const obj3 = { children: closure_6(View, obj4) };
  obj4 = { style: tmp.container, children: items };
  const ModalContent = require("ModalContent").ModalContent;
  items = [, ];
  const obj5 = { style: tmp.groupHeader, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: ageSpecificText };
  items[0] = closure_5(require("Text/Text").Text, obj5);
  items[1] = sortedActivityTypeConfigs.map((item) => {
    let tmp;
    let tooltipDescription;
    [tmp, obj] = item;
    const obj2 = { IconComponent: obj[tmp], header: obj.tooltipHeader(), description: tooltipDescription(closure_0) };
    tooltipDescription = obj.tooltipDescription;
    return hasOwnProperty(Row, obj2, tmp);
  });
  items1 = [closure_5(ModalContent, obj3), ];
  const obj6 = { children: closure_5(Button, obj7) };
  const ModalFooter = require("ModalFooter").ModalFooter;
  obj7 = { variant: "primary", text: intl3.string(require("intl").t["NX+WJN"]), onPress: ModalActionCreatorsDefault.pop };
  Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items1[1] = closure_5(ModalFooter, obj6);
  return closure_6(ModalScreen, obj2);
}
const View = react_native.View;
const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { [USER_INTERACTION]: ChatIcon.ChatIcon, [USER_CALLED]: PhoneIcon.PhoneIcon, [USER_ADD]: FriendsIcon.FriendsIcon, [GUILD_ADD]: ServerGridIcon.ServerGridIcon, [GUILD_INTERACTION]: ThreadIcon.ThreadIcon, [PURCHASES]: CreditCardIcon.CreditCardIcon, [TOTAL_VOICE_MINUTES]: ClockIcon.ClockIcon, [GIFTS]: GiftIcon.GiftIcon };
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } = TeenActionDisplayType);
let createStyles = createStyles_mod;
let obj2 = { row: obj3, content: { flexShrink: 1 }, iconContainer: size, header: obj4, icon: obj5 };
obj3 = { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, flexShrink: 0, marginRight: nativeDefault.space.PX_12 };
obj4 = { marginBottom: nativeDefault.space.PX_4 };
obj5 = { tintColor: nativeDefault.colors.TEXT_BRAND };
let closure_8 = createStyles(obj2);
createStyles = createStyles_mod;
let obj6 = { container: obj7, groupHeader: { marginBottom: nativeDefault.space.PX_24 } };
obj7 = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
const createStyles2 = createStyles.createStyles;
({ marginBottom: nativeDefault.space.PX_24 });
let closure_10 = createStyles2(obj6);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  let intl;
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    obj = { DATA_TOOLTIP: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_11, {});
      }
    };
    obj3 = require("NavigatorHeader");
    return obj;
  }, []);
  obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: intl.string(intl4.t["13/7kX"]) };
  const Modal = Modal2.Modal;
  intl = intl4.intl;
  return hasOwnProperty(Modal, obj);
};
