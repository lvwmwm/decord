// Module ID: 15793
// Function ID: 15794
// Name: GuildThemeNuxActionSheet
// Dependencies: [5, 32, 19, 17, 4655, 4722, 2042, 21, 3, 4836, 576, 15794, 4763, 504, 4800, 1115, 6571, 15795, 4832, 5997, 6000, 1177, 5281, 2]
// Exports: default

// Module 15793 (GuildThemeNuxActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildThemeRuntimeStore from "GuildThemeRuntimeStore" /* 4722 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, _undefined, c5, closure_2, dependencyMap;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const GuildThemeNuxActionSheet_str = "GuildThemeNuxActionSheet";
let tmp3 = new LoggerDefault("GuildThemeNuxActionSheet");
let closure_13 = tmp3;
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, description: obj4, options: obj5, warning: obj6, footer: obj7 };
obj2 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj7 = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxActionSheet.tsx");

export default function GuildThemeNuxActionSheet(guildId) {
  let Button;
  let HelpMessage;
  let HelpMessage2;
  let TableRadioGroup;
  let _undefined2;
  let c2;
  let c3;
  let c4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items7;
  let items8;
  let obj11;
  let obj13;
  let obj15;
  let obj7;
  let ref;
  let str;
  let stringResult;
  let tmp5;
  let tmp7;
  let tmp9;
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let stateFromStores;
  let callback1;
  const tmp = closure_14();
  let tmp2 = guildId;
  const tmp3 = dependencyMap;
  const tmp4 = _slicedToArray(react.useState(guildId(15794).getInitialGuildThemeNuxSelection), 2);
  [tmp5, c2] = tmp4;
  [tmp7, c3] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [tmp9, c4] = _slicedToArray(react.useState(false), 2);
  const tmp8 = _slicedToArray(react.useState(false), 2);
  react = react.useRef(false);
  const tmp10 = tmp5 === guildId(4763).GuildThemeSourcePreference.PERSONAL;
  let closure_6 = tmp10;
  let obj = guildId(504);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getGuildId());
  let obj2 = guildId(504);
  const items1 = [callback1];
  const items2 = [guildId];
  const items3 = [guildId, stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const guildThemeSnapshot = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
    let tmp2 = null;
    if (null != guildThemeSnapshot) {
      tmp2 = null;
      if (guildThemeSnapshot.enabled) {
        let themeSettings = guildThemeSnapshot.themeSettings;
        if (themeSettings == null) {
          themeSettings = null;
        }
        tmp2 = themeSettings;
      }
    }
    return tmp2;
  }, items2);
  const effect = react.useEffect(() => {
    if (stateFromStores !== guildId) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(GuildThemeNuxActionSheet_str);
    }
  }, items3);
  const items4 = [markAsDismissed];
  const callback = react.useCallback((arg0) => {
    _undefined2(null);
    c2(arg0);
  }, []);
  callback1 = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items4);
  const items5 = [guildId, tmp10, markAsDismissed, stateFromStores];
  const items6 = [callback1];
  const callback2 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let obj4;
    let v0;
    let v1;
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
      try {
        c5 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            guildId = tmp4;
            if (stateFromStores === guildId) {
              _undefined(true);
              v0(null);
              v0 = 1;
              _undefined = 2;
              c5 = 1;
              const obj5 = { value: obj4.saveGuildThemeNuxPreference(tmp44, closure_6), done: false };
              obj4 = guildId(closure_2[11]);
              return obj5;
            }
          }
        } else if (1 === _undefined) {
          v0 = 0;
          guildId = closure_2;
          logger.error("Failed to save guild theme NUX preference", guildId);
          const intl = guildId(closure_2[15]).intl;
          closure_129_3(intl.string(guildId(closure_2[15]).t.fEptJP));
          closure_129_4(false);
          c5 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          v0 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          v0 = 0;
          closure_129_5.current = true;
          closure_129_1(constants.TAKE_ACTION);
          const obj = tmp(closure_2[14]);
          obj.hideActionSheet(GuildThemeNuxActionSheet_str);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp36) {
        closure_2 = tmp36;
        if (0 === v0) {
          c5 = 3;
          throw tmp36;
        } else {
          _undefined = 1;
        }
      }
    }
  }), items5);
  const callback3 = react.useCallback(() => {
    callback1(ContentDismissActionType.USER_DISMISS);
  }, items6);
  let intl = guildId(1115).intl;
  const string = intl.string;
  const t = guildId(1115).t;
  if (tmp10) {
    stringResult = string(t.cvoikF);
  } else {
    stringResult = string(t["cY+Oob"]);
  }
  let obj3 = { startExpanded: true, dismissAccessibilityLabel: intl2.string(tmp2(1115).t.cpT0Cq), onDismiss: callback3, contentStyles: tmp.container, children: items7 };
  BottomSheet = tmp2(6571).BottomSheet;
  intl2 = tmp2(1115).intl;
  items7 = [closure_10(markAsDismissed(15795), { themeSettings: stateFromStores1, isPersonal: tmp10 }), , , , , , ];
  let obj4 = { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl3.string(tmp2(1115).t.Q9zFy9) };
  const Text = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items7[1] = closure_10(Text, obj4);
  let obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: intl4.string(tmp2(1115).t.XLpBLj) };
  const Text2 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items7[2] = closure_10(Text2, obj5);
  let obj6 = { style: tmp.options, children: closure_11(TableRadioGroup, obj7) };
  obj7 = { hasIcons: false, value: tmp5, onChange: callback, children: items8 };
  TableRadioGroup = tmp2(5997).TableRadioGroup;
  const obj8 = { label: intl5.string(tmp2(1115).t.aN3RNQ), value: tmp2(4763).GuildThemeSourcePreference.GUILD };
  const TableRadioRow = tmp2(6000).TableRadioRow;
  intl5 = tmp2(1115).intl;
  items8 = [closure_10(TableRadioRow, obj8), ];
  const obj9 = { label: intl6.string(tmp2(1115).t.js8y7t), value: tmp2(4763).GuildThemeSourcePreference.PERSONAL };
  const TableRadioRow2 = tmp2(6000).TableRadioRow;
  intl6 = tmp2(1115).intl;
  items8[1] = closure_10(TableRadioRow2, obj9);
  items7[3] = closure_10(closure_6, obj6);
  let tmp20Result = null;
  const tmp19 = closure_11;
  if (tmp10) {
    const obj10 = { style: tmp.warning, children: closure_10(HelpMessage, obj11) };
    obj11 = { messageType: tmp2(1177).HelpMessageTypes.WARNING, borderRadius: markAsDismissed(576).radii.md, children: intl7.string(tmp2(1115).t.tTHQAy) };
    HelpMessage = tmp2(1177).HelpMessage;
    intl7 = tmp2(1115).intl;
    tmp20Result = tmp20(tmp22, obj10);
  }
  items7[4] = tmp20Result;
  let tmp20Result2 = null;
  if (null != tmp7) {
    const obj12 = { style: tmp.warning, children: closure_10(HelpMessage2, obj13) };
    obj13 = { messageType: tmp2(1177).HelpMessageTypes.ERROR, borderRadius: markAsDismissed(576).radii.md, children: tmp7 };
    HelpMessage2 = tmp2(1177).HelpMessage;
    tmp20Result2 = tmp20(tmp22, obj12);
  }
  items7[5] = tmp20Result2;
  const obj14 = { style: tmp.footer, children: closure_10(Button, obj15) };
  obj15 = { text: stringResult, variant: str, loading: tmp9, disabled: tmp9, onPress: callback2 };
  str = "primary";
  Button = tmp2(5281).Button;
  if (tmp10) {
    str = "secondary";
  }
  items7[6] = closure_10(closure_6, obj14);
  return tmp19(BottomSheet, obj3);
};
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";
