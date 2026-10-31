// Module ID: 14340
// Function ID: 14341
// Name: HubEmailConnectionGuildSelectSearch
// Dependencies: [5, 32, 19, 17, 14314, 21, 5014, 575, 5717, 14341, 5624, 1113, 1497, 6899, 1625, 14327, 6446, 6998, 7557, 7294, 1187, 14336, 2]
// Exports: default

// Module 14340 (HubEmailConnectionGuildSelectSearch)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import useNavigation from "useNavigation" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import fuzzysearchDefault from "fuzzysearch" /* 6899 */;
import HubConstants from "HubConstants" /* 14314 */;
import AssetRegistryDefault from "AssetRegistry" /* 14341 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, closure_2, dependencyMap;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let tmp2;
let tmp9;
const NavigatorHeader = tmp2(6998);
const defaultMVCPConfig = tmp2(7294);
const SearchBarNavDefault = tmp9(7557);
function EmptyState() {
  let intl;
  let items;
  const tmp = closure_11();
  const obj = { style: tmp.emptyWrapper, children: items };
  const obj2 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [metroImportAll(tmp2, obj2), ];
  const obj3 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(intl2.t["6HXiuE"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = metroImportAll(Text, obj3);
  return React4(View, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollContainer: obj2, fauxHeader: { paddingHorizontal: 0 }, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", marginTop: 64, paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, error: obj3 };
obj2 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx");

export default function HubEmailConnectionGuildSelectSearch(arg0) {
  let c5;
  let c6;
  let c7;
  let closure_4;
  let error;
  let guildsInfo;
  let intl;
  let items;
  let loading;
  let obj2;
  let obj5;
  let obj7;
  let tmp5;
  let tmp9Result;
  ({ guildsInfo, email: require, onClose: importDefault } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  let tmp = closure_11();
  dependencyMap = tmp;
  let tmp2 = require;
  const tmp3 = dependencyMap;
  let obj = useNavigation;
  let closure_3 = obj.useNavigation();
  [_slicedToArray, tmp5] = react.useState("");
  [obj2, c5] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [c6, c7] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  const found = guildsInfo.filter((name) => {
    const str = name.name;
    const tmp = fuzzysearchDefault;
    const formatted = closure_4.toLowerCase();
    return tmp(formatted, str.toLowerCase());
  });
  let anyErrorMessage;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (obj2 != null) {
    anyErrorMessage = obj2.getAnyErrorMessage();
  }
  let obj3 = { children: items };
  let obj4 = { style: tmp.fauxHeader, children: anyErrorMessage(tmp9Result, obj5) };
  const FauxHeader = NavigatorHeader.FauxHeader;
  obj5 = {
    placeholder: intl.string(intl2.t.nL2wKD),
    onChange: tmp5,
    onClose() {
      closure_3.pop();
    }
  };
  tmp9Result = SearchBarNavDefault;
  intl = intl2.intl;
  items = [anyErrorMessage(FauxHeader, obj4), ];
  let obj6 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp2 = null;
      if (null != anyErrorMessage) {
        tmp2 = null;
        if ("" !== anyErrorMessage) {
          const obj = { style: error.error, children: anyErrorMessage };
          tmp2 = metroImportAll(native.LegacyText, obj);
        }
      }
      return tmp2;
    },
    renderItem(item) {
      item = item.item;
      let obj = {
        signup: closure_3(function*(arg0, value) {
          let obj3;
          let v3;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            let c3;
            try {
              let onClose;
              let email;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onClose = tmp;
                  email = tmp4;
                  c5(null);
                  constants(true);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: obj3.sendVerificationEmail(email, true, id), done: false };
                  obj3 = require("HubActionCreators");
                  return obj5;
                }
              } else if (1 === c4) {
                c3 = 0;
                constants(false);
                throw closure_2;
              } else {
                if (2 === c4) {
                  c3 = 1;
                  email = closure_2;
                  const self = this;
                  const self2 = this;
                  const aPIError = new id(error[16]).APIError(email);
                  c5(aPIError);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  constants(false);
                  c5 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  const obj = { email, onClose, guildId: closure_129_0 };
                  c3.push(constants.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                constants(false);
                c5 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp42) {
              closure_2 = tmp42;
              if (0 === c3) {
                c5 = 3;
                throw tmp42;
              } else if (1 === tmp44) {
                c4 = 1;
              } else {
                c4 = 2;
              }
            }
          }
        }),
        guildInfo: item,
        loading
      };
      const id = item.id;
      const HubEmailConnectionGuildSelectRow = require("HubEmailConnectionGuildSelect").HubEmailConnectionGuildSelectRow;
      return anyErrorMessage(HubEmailConnectionGuildSelectRow, obj);
    },
    keyExtractor(id) {
      return id.id;
    },
    ListEmptyComponent() {
      return anyErrorMessage(EmptyState, {});
    },
    ItemSeparatorComponent() {
      return anyErrorMessage(c6, { style: { height: 8 } });
    },
    style: tmp.scrollContainer,
    contentContainerStyle: obj7
  };
  obj7 = { paddingBottom: bottom + 16, paddingTop: 16 };
  items[1] = anyErrorMessage(defaultMVCPConfig.FlashList, obj6);
  return closure_9(closure_10, obj3);
};
