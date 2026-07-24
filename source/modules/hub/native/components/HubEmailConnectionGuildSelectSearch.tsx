// Module ID: 11803
// Function ID: 91641
// Name: EmptyState
// Dependencies: [5, 57, 31, 27, 11780, 33, 4130, 689, 11804, 4126, 1212, 1456, 5045, 1557, 11793, 4029, 5087, 5771, 1273, 11798, 2]
// Exports: default

// Module 11803 (EmptyState)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function EmptyState() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.emptyWrapper };
  obj = { style: tmp.emptyStateImage, source: importDefault(11804) };
  const items = [callback2(closure_7, obj), ];
  obj = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["6HXiuE"]);
  items[1] = callback2(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback3(closure_6, obj);
}
({ View: closure_6, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.scrollContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.fauxHeader = { paddingHorizontal: 0 };
_createForOfIteratorHelperLoose.emptyWrapper = { flex: 1, alignItems: "center", justifyContent: "center", marginTop: 64, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.emptyStateImage = { marginBottom: 24 };
_createForOfIteratorHelperLoose.emptyStateTitle = { marginBottom: 4, textAlign: "center" };
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
_createForOfIteratorHelperLoose.error = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  let result;
  let closure_6;
  let closure_7;
  let guildsInfo;
  let importDefault;
  let obj2;
  let require;
  ({ guildsInfo, email: require, onClose: importDefault } = arg0);
  let anyErrorMessage;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = require(1456) /* useNavigation */;
  let closure_3 = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  callback = tmp2[0];
  [obj2, result] = callback(React.useState(null), 2);
  const tmp3 = callback(React.useState(null), 2);
  [closure_6, closure_7] = callback(React.useState(false), 2);
  const found = guildsInfo.filter((name) => {
    tmp = outer1_1(tmp[12]);
    const formatted = _slicedToArray.toLowerCase();
    return tmp(formatted, name.name.toLowerCase());
  });
  anyErrorMessage = undefined;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj = {};
  obj = { style: tmp.fauxHeader };
  obj1 = {};
  const tmp4 = callback(React.useState(false), 2);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.placeholder = intl.string(require(1212) /* getSystemLocale */.t.nL2wKD);
  obj1.onChange = tmp2[1];
  obj1.onClose = function onClose() {

  };
  obj.children = callback2(importDefault(5771), obj1);
  const items = [callback2(require(5087) /* HeaderBackImage */.FauxHeader, obj), ];
  obj2 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp = null;
      if (null != anyErrorMessage) {
        tmp = null;
        if ("" !== anyErrorMessage) {
          const obj = { style: tmp.error, children: anyErrorMessage };
          tmp = outer1_10(outer1_0(tmp[18]).LegacyText, obj);
        }
      }
      return tmp;
    },
    renderItem(item) {
      item = item.item;
      const obj = {};
      const id = item.id;
      // CreateGeneratorClosureLongIndex (0x67)
      obj.signup = arr(tmp);
      obj.guildInfo = item;
      obj.loading = closure_6;
      return outer1_10(outer1_0(tmp[19]).HubEmailConnectionGuildSelectRow, obj);
    },
    keyExtractor(id) {
      return id.id;
    },
    ListEmptyComponent() {
      return outer1_10(outer1_14, {});
    },
    ItemSeparatorComponent() {
      return outer1_10(outer1_6, { style: { height: 8 } });
    },
    style: tmp.scrollContainer,
    contentContainerStyle: obj3
  };
  const tmp7 = importDefault(5771);
  items[1] = callback2(anyErrorMessage, obj2);
  obj.children = items;
  return callback3(closure_12, obj);
};
