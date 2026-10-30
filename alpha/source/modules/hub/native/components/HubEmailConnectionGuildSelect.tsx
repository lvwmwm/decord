// Module ID: 14298
// Function ID: 14299
// Name: HubEmailConnectionGuildSelect
// Dependencies: [5, 32, 19, 17, 14276, 21, 5009, 575, 8169, 6951, 4872, 5619, 1114, 1626, 5629, 1188, 1498, 7552, 7213, 14289, 6440, 14284, 7288, 2]
// Exports: default

// Module 14298 (HubEmailConnectionGuildSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4872 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import GuildIconDefault from "GuildIcon" /* 6951 */;
import _mod8169 from "module_8169" /* 8169 */;
import HubConstants from "HubConstants" /* 14276 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp6;
const native = tmp6(1188);
class HubEmailConnectionGuildSelectRow {
  constructor(guildInfo) {
    let fromGuildBasic;
    let loading;
    let obj2;
    let obj3;
    let signup;
    let tmp2;
    guildInfo = guildInfo.guildInfo;
    ({ signup, loading } = guildInfo);
    const tmp = closure_10();
    const obj = { onPress: signup, disabled: loading, DEPRECATED_style: tmp.rowContainer, label: guildInfo.name, leading: metroImportAll(tmp2, obj2), trailing: metroImportAll(_mod8169.FormRow.Arrow, {}) };
    const FormRow = _mod8169.FormRow;
    obj2 = { style: tmp.guildIcon, guild: fromGuildBasic(obj3) };
    obj3 = { features: [] };
    tmp2 = GuildIconDefault;
    fromGuildBasic = GuildRecordUtils.fromGuildBasic;
    GuildRecordUtils;
    const merged = Object.assign(guildInfo);
    return metroImportAll(FormRow, obj);
  }
}
function HubEmailConnectionGuildSelectHeader() {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_10();
  const obj = { style: tmp.header, children: metroImportAll(Text, obj2) };
  obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl2.t.mOMeiR) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportAll(View, obj);
}
function HubEmailConnectionGuildSelectFooter(onFooterButtonPressed) {
  let anyErrorMessage;
  let errors;
  let intl;
  let items;
  let items1;
  let loading;
  let obj3;
  let tmp5;
  ({ errors, loading } = onFooterButtonPressed);
  onFooterButtonPressed = onFooterButtonPressed.onFooterButtonPressed;
  const tmp = closure_10();
  const obj = { style: items, children: tmp5(View, obj3) };
  items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj3 = { style: tmp.footerContainer, children: items1 };
  const obj4 = { variant: "secondary", loading, disabled: loading, grow: true, text: intl.string(intl2.t.G3Zk7V), onPress: onFooterButtonPressed };
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  items1 = [metroImportAll(Button, obj4), ];
  let tmp3Result = null != errors;
  tmp5 = React4;
  if (tmp3Result) {
    const obj5 = { style: tmp.error, children: anyErrorMessage };
    anyErrorMessage = undefined;
    const LegacyText = native.LegacyText;
    if (errors != null) {
      anyErrorMessage = errors.getAnyErrorMessage();
    }
    tmp3Result = tmp3(LegacyText, obj5);
  }
  items1[1] = tmp3Result;
  return metroImportAll(View, obj);
}
let react = react_mod;
const View = react_native.View;
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { rowContainer: obj2, guildIcon: obj3, separator: { height: 8 }, header: { padding: 16, alignItems: "center", justifyContent: "center" }, title: { marginBottom: 8, textAlign: "center" }, footerSafeAreaContainer: obj4, footerContainer: { paddingHorizontal: 16, height: 110, justifyContent: "center", alignItems: "center" }, error: obj5 };
obj2 = { marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj5 = { color: nativeDefault.unsafe_rawColors.RED_400, alignSelf: "center", fontSize: 14, marginVertical: 8 };
const authStore = createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionGuildSelect.tsx");

export default function HubEmailConnectionGuildSelect(onClose) {
  let closure_5;
  let items2;
  let obj4;
  onClose = onClose.onClose;
  let email = onClose.email;
  const guildsInfo = onClose.guildsInfo;
  react = undefined;
  let closure_3 = closure_10();
  let obj = onClose(guildsInfo[16]);
  navigation = obj.useNavigation();
  const items = [email, guildsInfo, navigation, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let intl;
        let obj = {
          IconComponent: onClose(guildsInfo[18]).MagnifyingGlassIcon,
          onPress() {
            const obj = { email, onClose, guildsInfo };
            closure_1_4.push(constants.SELECT_SCHOOL_SEARCH, obj);
          },
          accessibilityLabel: intl.string(onClose(guildsInfo[12]).t["5h0QOP"])
        };
        const HeaderActionButton = onClose(guildsInfo[17]).HeaderActionButton;
        intl = onClose(guildsInfo[12]).intl;
        return closure_2_8(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  const items1 = [email, navigation, onClose];
  const callback = react.useCallback(() => {
    const obj = { email, onClose };
    navigation.push(HubEmailConnectionSteps.SUBMIT_SCHOOL, obj);
  }, items1);
  const bottom = email(guildsInfo[13])().bottom;
  const tmp4 = navigation(react.useState(null), 2);
  react = tmp4[1];
  const first = tmp4[0];
  const tmp6 = navigation(react.useState(false), 2);
  const first1 = tmp6[0];
  let closure_7 = tmp6[1];
  let obj2 = { children: items2 };
  const HubEmailConnectionScreen = onClose(guildsInfo[21]).HubEmailConnectionScreen;
  let obj3 = {
    data: guildsInfo,
    keyExtractor(id) {
      return id.id;
    },
    ListHeaderComponent() {
      return closure_1_8(HubEmailConnectionGuildSelectHeader, {});
    },
    renderItem(item) {
      item = item.item;
      let obj = {
        guildInfo: item,
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
              return { value: "HermesInternal", done: null };
            }
          } else {
            let c3;
            try {
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
                  email = tmp;
                  onClose = tmp4;
                  c5(null);
                  constants(true);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: obj3.sendVerificationEmail(email, true, id), done: false };
                  obj3 = email(guildsInfo[19]);
                  return obj5;
                }
              } else if (1 === c4) {
                c3 = 0;
                constants(false);
                throw closure_2;
              } else {
                if (2 === c4) {
                  c3 = 1;
                  onClose = closure_2;
                  const self = this;
                  const self2 = this;
                  const aPIError = new id(guildsInfo[20]).APIError(onClose);
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
                  c4.push(constants.VERIFY_PIN, obj);
                  c3 = 1;
                }
                c3 = 0;
                constants(false);
                c5 = 3;
                return { value: "HermesInternal", done: null };
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
        loading: first1
      };
      const id = item.id;
      return closure_1_8(HubEmailConnectionGuildSelectRow, obj);
    },
    ItemSeparatorComponent() {
      const obj = { style: closure_3.separator };
      return metroImportAll(View, obj);
    },
    contentContainerStyle: obj4
  };
  obj4 = { paddingBottom: 110 + bottom + 8 };
  items2 = [closure_8(onClose(guildsInfo[22]).FlashList, obj3), closure_8(HubEmailConnectionGuildSelectFooter, { errors: first, loading: first1, onFooterButtonPressed: callback })];
  return closure_9(HubEmailConnectionScreen, obj2);
};
export { HubEmailConnectionGuildSelectRow };
