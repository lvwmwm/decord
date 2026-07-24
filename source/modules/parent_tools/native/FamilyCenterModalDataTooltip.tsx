// Module ID: 13845
// Function ID: 106036
// Name: Row
// Dependencies: [31, 27, 6770, 33, 4629, 11092, 3832, 7500, 4631, 11094, 4094, 8812, 4130, 689, 4126, 11091, 1212, 2198, 7123, 6827, 7613, 7614, 11098, 4543, 4337, 5087, 11100, 2]
// Exports: default

// Module 13845 (Row)
import result from "result";
import { View } from "set";
import { TeenActionDisplayType } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function Row(arg0) {
  let IconComponent;
  let description;
  let header;
  ({ header, description, IconComponent } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.row };
  obj = { style: tmp.iconContainer, children: callback(IconComponent, obj) };
  obj = { style: tmp.icon };
  const items = [callback(View, obj), ];
  const obj1 = { style: tmp.content };
  const obj2 = { style: tmp.header, variant: "text-sm/bold", color: "mobile-text-heading-primary", children: header };
  const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: description };
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = callback4();
  let obj = _require(11091);
  const intl = _require(1212).intl;
  const intl2 = _require(1212).intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(2198).n6LOrh), intl2.string(importDefault(2198).JNLpDZ));
  _require = importDefault(7123)();
  let obj1 = _require(6827);
  const sortedActivityTypeConfigs = obj1.getSortedActivityTypeConfigs();
  obj = {};
  obj = {};
  obj1 = { style: tmp.container };
  const obj2 = { style: tmp.groupHeader, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: ageSpecificText };
  const items = [
    callback(_require(4126).Text, obj2),
    sortedActivityTypeConfigs.map((arg0) => {
      let obj;
      let tmp;
      [tmp, obj] = arg0;
      obj = { IconComponent: outer1_7[tmp], header: obj.tooltipHeader() };
      let tmp4;
      if (null != closure_0) {
        tmp4 = closure_0;
      }
      obj.description = obj.tooltipDescription(tmp4);
      return outer1_5(outer1_10, obj, tmp);
    })
  ];
  obj1.children = items;
  obj.children = callback2(View, obj1);
  const items1 = [callback(_require(7614).ModalContent, obj), ];
  const obj3 = {};
  const obj4 = { variant: "primary" };
  const intl3 = _require(1212).intl;
  obj4.text = intl3.string(_require(1212).t["NX+WJN"]);
  obj4.onPress = importDefault(4337).pop;
  obj3.children = callback(_require(4543).Button, obj4);
  items1[1] = callback(_require(11098).ModalFooter, obj3);
  obj.children = items1;
  return callback2(_require(7613).ModalScreen, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { [TeenActionDisplayType.USER_INTERACTION]: require("ChatIcon").ChatIcon, [TeenActionDisplayType.USER_CALLED]: require("PhoneIcon").PhoneIcon, [TeenActionDisplayType.USER_ADD]: require("FriendsIcon").FriendsIcon, [TeenActionDisplayType.GUILD_ADD]: require("ServerGridIcon").ServerGridIcon, [TeenActionDisplayType.GUILD_INTERACTION]: require("ThreadIcon").ThreadIcon, [TeenActionDisplayType.PURCHASES]: require("CreditCardIcon").CreditCardIcon, [TeenActionDisplayType.TOTAL_VOICE_MINUTES]: require("ClockIcon").ClockIcon, [TeenActionDisplayType.GIFTS]: require("GiftIcon").GiftIcon };
obj = {};
obj = { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.row = obj;
obj.content = { flexShrink: 1 };
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, flexShrink: 0, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.iconContainer = _createForOfIteratorHelperLoose;
obj.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.icon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj4 = {};
const obj5 = { display: "flex", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
obj4.container = obj5;
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
obj4.groupHeader = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj4);
const obj6 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  const memo = React.useMemo(() => (function getScreens() {
    let obj = {};
    obj = {
      headerShown: true,
      headerLeft: outer2_0(outer2_2[25]).getHeaderCloseButton(outer2_1(outer2_2[24]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return outer3_5(outer3_11, {});
      }
    };
    obj.DATA_TOOLTIP = obj;
    return obj;
  })(), []);
  let obj = { initialRouteName: "DATA_TOOLTIP", screens: memo };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return callback(require(11100) /* Modal */.Modal, obj);
};
