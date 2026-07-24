// Module ID: 11798
// Function ID: 91604
// Name: HubEmailConnectionGuildSelectRow
// Dependencies: [5, 57, 31, 27, 11780, 33, 4130, 689, 7636, 5513, 1387, 4126, 1212, 1557, 4543, 1273, 1456, 5788, 5786, 11793, 4029, 11788, 2]
// Exports: default

// Module 11798 (HubEmailConnectionGuildSelectRow)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
class HubEmailConnectionGuildSelectRow {
  constructor(arg0) {
    guildInfo = global.guildInfo;
    ({ signup, loading } = global);
    tmp = c11();
    obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name };
    obj = { style: tmp.guildIcon };
    tmp2 = require("makeSizeStyle");
    obj3 = require("fromGuildPropertiesWithAdditionalFields");
    obj1 = {};
    merged = Object.assign(guildInfo);
    obj1["features"] = [];
    obj.guild = obj3.fromGuildBasic(obj1);
    obj.leading = jsx(tmp2, obj);
    obj.trailing = jsx(require("Form").FormRow.Arrow, {});
    return jsx(require("Form").FormRow, obj);
  }
}
function HubEmailConnectionGuildSelectHeader() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.header };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.mOMeiR);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(closure_6, obj);
}
function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  let errors;
  let loading;
  ({ errors, loading } = onFooterButtonPressed);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: importDefault(1557)().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.footerContainer };
  const obj1 = { variant: "secondary", loading, disabled: loading, grow: true };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl.string(require(1212) /* getSystemLocale */.t.G3Zk7V);
  obj1.onPress = onFooterButtonPressed.onFooterButtonPressed;
  const items1 = [callback(require(4543) /* Button */.Button, obj1), ];
  let tmp7Result = null != errors;
  if (tmp7Result) {
    const obj2 = { style: tmp.error };
    let anyErrorMessage;
    if (null != errors) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    obj2.children = anyErrorMessage;
    tmp7Result = callback(require(1273) /* Button */.LegacyText, obj2);
    const tmp7 = callback;
  }
  items1[1] = tmp7Result;
  obj.children = items1;
  obj.children = closure_10(closure_6, obj);
  return callback(closure_6, obj);
}
({ View: closure_6, FlatList: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.rowContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildIcon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.separator = { height: 8 };
_createForOfIteratorHelperLoose.header = { padding: 16, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.title = { marginBottom: 8, textAlign: "center" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
_createForOfIteratorHelperLoose.footerSafeAreaContainer = obj2;
_createForOfIteratorHelperLoose.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" };
const obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
_createForOfIteratorHelperLoose.error = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
const result = require("result").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  onClose = onClose.onClose;
  const email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  let closure_3 = _createForOfIteratorHelperLoose();
  let obj = onClose(guildsInfo[16]);
  const navigation = obj.useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = {
          IconComponent: onClose(guildsInfo[18]).MagnifyingGlassIcon,
          onPress() {
            outer2_4.push(outer3_8.SELECT_SCHOOL_SEARCH, { email: outer2_1, onClose: outer2_0, guildsInfo: outer2_2 });
          }
        };
        const intl = onClose(guildsInfo[12]).intl;
        obj.accessibilityLabel = intl.string(onClose(guildsInfo[12]).t["5h0QOP"]);
        return outer2_9(onClose(guildsInfo[17]).HeaderActionButton, obj);
      }
    });
  }, items);
  const items1 = [email, navigation, onClose];
  const callback = React.useCallback(() => {
    navigation.push(outer1_8.SUBMIT_SCHOOL, { email, onClose });
  }, items1);
  const tmp4 = navigation(React.useState(null), 2);
  React = tmp4[1];
  const tmp5 = navigation(React.useState(false), 2);
  const first = tmp5[0];
  let closure_7 = tmp5[1];
  obj = {};
  obj = {
    data: guildsInfo,
    ListHeaderComponent() {
      return outer1_9(outer1_13, {});
    },
    renderItem(item) {
      item = item.item;
      const id = item.id;
      // CreateGeneratorClosureLongIndex (0x67)
      return outer1_9(outer1_12, { guildInfo: item, signup: lib(tmp), loading: first });
    },
    ItemSeparatorComponent() {
      return outer1_9(first, { style: lib.separator });
    },
    contentContainerStyle: obj1
  };
  const items2 = [callback(closure_7, obj), callback(HubEmailConnectionGuildSelectFooter, { errors: tmp4[0], loading: first, onFooterButtonPressed: callback })];
  obj.children = items2;
  return callback2(onClose(guildsInfo[21]).HubEmailConnectionScreen, obj);
};
export { HubEmailConnectionGuildSelectRow };
