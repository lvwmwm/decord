// Module ID: 12507
// Function ID: 12508
// Name: HubEmailConnectionGuildSelectSearch
// Dependencies: [5, 32, 19, 17, 12480, 21, 5092, 587, 558, 576, 6156, 12508, 1126, 5088, 1503, 6094, 1631, 12494, 5635, 6200, 7087, 1200, 12503, 2]
// Exports: default

// Module 12507 (HubEmailConnectionGuildSelectSearch)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import useNavigation from "useNavigation" /* 1503 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5088 */;
import fuzzysearchDefault from "fuzzysearch" /* 6094 */;
import FastImageDefault from "FastImage" /* 6156 */;
import HubConstants from "HubConstants" /* 12480 */;
import AssetRegistryDefault from "AssetRegistry" /* 12508 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, closure_2, dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp2;
let tmp9;
let unpackModuleId;
const NavigatorHeader = tmp2(6200);
const SearchBarNavDefault = tmp9(7087);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, FlatList: metroImportDefault } = react_native);
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollContainer: obj2, fauxHeader: { paddingHorizontal: 0 }, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", marginTop: 64, paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, error: obj3 };
obj2 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginBottom: 8 };
let closure_12 = createStyles(obj);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState() {
  let items;
  let tmp10;
  let tmp12;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_12();
  const emptyWrapper = tmp4.emptyWrapper;
  if (cResult[0] !== tmp4.emptyStateImage) {
    const obj2 = { style: tmp4.emptyStateImage, source: AssetRegistryDefault };
    const tmp8 = FastImageDefault;
    const tmp9 = React4(tmp8, obj2);
    cResult[0] = tmp4.emptyStateImage;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  const emptyStateTitle = tmp4.emptyStateTitle;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["6HXiuE"]);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.emptyStateTitle) {
    const obj3 = { style: emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp14 = React4(Text_Text.Text, obj3);
    cResult[3] = tmp4.emptyStateTitle;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp4.emptyWrapper) {
    if (cResult[6] === tmp5) {
      let tmp15;
      if (cResult[7] === tmp12) {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  const obj4 = { style: emptyWrapper, children: items };
  items = [tmp5, tmp12];
  const tmp16 = authStore(metroRequire, obj4);
  cResult[5] = tmp4.emptyWrapper;
  cResult[6] = tmp5;
  cResult[7] = tmp12;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : (function EmptyState() {
  let intl;
  let items;
  const tmp = closure_12();
  const obj = { style: tmp.emptyWrapper, children: items };
  const obj2 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [React4(tmp2, obj2), ];
  const obj3 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl.string(intl2.t["6HXiuE"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React4(Text, obj3);
  return authStore(metroRequire, obj);
});
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
  let tmp = closure_12();
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
  let obj4 = { style: tmp.fauxHeader, children: closure_9(tmp9Result, obj5) };
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
  items = [closure_9(FauxHeader, obj4), ];
  let obj6 = {
    keyboardShouldPersistTaps: "always",
    data: found,
    ListHeaderComponent() {
      let tmp2 = null;
      if (null != anyErrorMessage) {
        tmp2 = null;
        if ("" !== anyErrorMessage) {
          const obj = { style: error.error, children: anyErrorMessage };
          tmp2 = React4(native.LegacyText, obj);
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
              return { value: "IconComponent", done: "+51" };
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
                  closure_1_7(true);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: obj3.sendVerificationEmail(email, true, id), done: false };
                  obj3 = require("HubActionCreators");
                  return obj5;
                }
              } else if (1 === c4) {
                c3 = 0;
                closure_1_7(false);
                throw closure_2;
              } else {
                if (2 === c4) {
                  c3 = 1;
                  email = closure_2;
                  const self = this;
                  const self2 = this;
                  const aPIError = new id(error[18]).APIError(email);
                  c5(aPIError);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_1_7(false);
                  c5 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  const obj = { email, onClose, guildId: closure_129_0 };
                  c3.push(constants.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                closure_1_7(false);
                c5 = 3;
                return { value: "IconComponent", done: "+51" };
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
      return closure_1_9(HubEmailConnectionGuildSelectRow, obj);
    },
    keyExtractor(id) {
      return id.id;
    },
    ListEmptyComponent() {
      return closure_1_9(closure_1_13, {});
    },
    ItemSeparatorComponent() {
      return closure_1_9(c6, { style: { height: 8 } });
    },
    style: tmp.scrollContainer,
    contentContainerStyle: obj7
  };
  obj7 = { paddingBottom: bottom + 16, paddingTop: 16 };
  items[1] = closure_9(c7, obj6);
  return closure_10(closure_11, obj3);
};
