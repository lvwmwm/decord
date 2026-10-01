// Module ID: 12159
// Function ID: 12160
// Name: GuildDirectoryNicknameUpsellModal
// Dependencies: [5, 32, 19, 17, 2067, 12148, 21, 4836, 5994, 576, 504, 6402, 6541, 4735, 5896, 4832, 1115, 6023, 1177, 5281, 12149, 12158, 5936, 6421, 5910, 2]
// Exports: default

// Module 12159 (GuildDirectoryNicknameUpsellModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import reactDefault from "react" /* 5910 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import Constants from "Constants" /* 12148 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require, c4, c5, closure_2, dependencyMap;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp5;
let unpackModuleId;
const FreeFormInputGroupDefault = tmp5(6023);
function GuildDirectoryNicknameUpsell(arg0) {
  let Button;
  let _undefined;
  let c2;
  let firstFieldErrorMessage;
  let format;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let name;
  let obj2;
  let obj22;
  let prop;
  let require;
  ({ guildId: require, handleClose: importDefault } = arg0);
  dependencyMap = undefined;
  let ref;
  let obj = function _handleSubmit() {
    let nick;
    obj = _asyncToGenerator(async function(arg0, value) {
      let obj3;
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
          let closure_0;
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
              let closure_1 = tmp;
              closure_0 = tmp4;
              _undefined(null);
              const obj5 = { nick };
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: obj3.updateGuildSelfMember(_require, obj5), done: false };
              obj3 = closure_0(closure_2[12]);
              return obj6;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[13]).APIError(closure_0);
              closure_129_2(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_1();
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          closure_2 = tmp25;
          if (0 === c3) {
            c5 = 3;
            throw tmp25;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  const tmp3 = dependencyMap;
  obj = get_initialized;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  [obj2, c2] = ref(obj.useState(null), 2);
  const tmp6 = ref(obj.useState(null), 2);
  const tmp7 = ref(obj.useState(""), 2);
  const value = tmp7[0];
  const tmp9 = tmp7[1];
  ref = obj.useRef(null);
  let obj3 = { ref, contentContainerStyle: items1, children: items2 };
  items1 = [tmp.container, ];
  let obj4 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  items1[1] = obj4;
  let obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: GuildIcon.GuildIconSizes.XLARGE };
  const tmp14 = GuildIconDefault;
  items2 = [closure_10(tmp14, obj5), , , , ];
  let obj6 = { style: tmp.header, children: items3 };
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: format(prop, { guildName: name }) };
  const Text = Text_Text.Text;
  const intl = intl6.intl;
  format = intl.format;
  name = undefined;
  prop = intl6.t["d+6kzl"];
  const tmp12 = closure_7;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items3 = [tmp13(Text, obj7), ];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl6.t.b3L8yx) };
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items3[1] = closure_10(Text2, obj8);
  items2[1] = closure_11(closure_6, obj6);
  const obj10 = {
    label: intl3.string(intl6.t.ilDlmW),
    placeholder: intl4.string(intl6.t.RfWvWI),
    value,
    onChangeText: tmp9,
    style: null,
    textStyle: null,
    clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT,
    error: firstFieldErrorMessage,
    onFocus() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    },
    onBlur() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  const tmp5Result = FreeFormInputGroupDefault;
  intl3 = tmp2(1115).intl;
  intl4 = tmp2(1115).intl;
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  firstFieldErrorMessage = undefined;
  if (obj2 != null) {
    firstFieldErrorMessage = obj2.getFirstFieldErrorMessage("name");
  }
  items2[2] = closure_10(tmp5Result, obj10);
  const obj11 = { style: tmp.redesignGrowSpacing };
  items2[3] = closure_10(closure_6, obj11);
  const obj12 = { style: tmp.redesignButtonContainer, children: closure_10(Button, obj22) };
  obj22 = {
    size: "lg",
    text: intl5.string(intl6.t.Np4yXU),
    onPress: function handleSubmit() {
      return obj(...arguments);
    }
  };
  Button = tmp2(5281).Button;
  intl5 = tmp2(1115).intl;
  items2[4] = closure_10(closure_6, obj12);
  return closure_11(tmp12, obj3);
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const GuildPrompts = Constants.GuildPrompts;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIcon: { alignSelf: "center", marginTop: 16 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 }, input: { marginHorizontal: 16 }, redesignTextInput: obj3, redesignGrowSpacing: obj4, redesignButtonContainer: obj5 };
obj2 = { flex: 1, flexGrow: 2, marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg };
obj4 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const UPSELL_SCREEN_KEY = "UPSELL_SCREEN_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default function GuildDirectoryNicknameUpsellModal(arg0) {
  let closure_0;
  _require = arg0;
  let obj = {
    screens: reactDefault(() => {
      let closure_129_0;
      let closure_129_1;
      let obj3;
      ({ guildId: closure_129_0, onHide: closure_129_1 } = closure_0);
      function handleClose() {
        const obj = closure_2_1(closure_2_2[20]);
        obj.viewPrompt(constants.REAL_NAME_PROMPT, guildId);
        closure_1_1();
        const obj2 = closure_2_1(closure_2_2[21]);
        obj2.close();
      }
      let obj = {};
      let obj2 = {
        fullscreen: true,
        headerLeft: obj3.getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          const obj = { guildId, handleClose };
          return closure_2_10(closure_2_13, obj);
        }
      };
      obj[UPSELL_SCREEN_KEY] = obj2;
      obj3 = NavigatorHeader;
      return obj;
    }),
    initialRouteName: UPSELL_SCREEN_KEY
  };
  const Navigator = require("Navigator").Navigator;
  return closure_10(Navigator, obj);
};
