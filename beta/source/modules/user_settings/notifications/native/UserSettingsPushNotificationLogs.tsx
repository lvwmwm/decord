// Module ID: 15121
// Function ID: 15122
// Name: UserSettingsPushNotificationLogs
// Dependencies: [5, 32, 19, 17, 1074, 21, 4836, 576, 6040, 510, 9651, 1613, 6471, 5435, 1115, 7809, 9652, 12470, 8179, 4832, 2]
// Exports: default

// Module 15121 (UserSettingsPushNotificationLogs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import InputTypes from "InputTypes" /* 6040 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2, c3;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, list: obj3, searchWrap: obj4, shareButton: size, log: obj5, code: { fontFamily: Fonts.CODE_BOLD } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, height: InputTypes.InputHeights.MD, width: InputTypes.InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj5 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default function UserSettingsPushNotificationLogs() {
  let closure_2;
  let closure_4;
  let defaultValue;
  let first1;
  let intl;
  let items1;
  let items2;
  let obj5;
  let tmp3;
  let tmp7;
  [defaultValue, tmp3] = react.useState(() => {
    const Storage = first(closure_2[9]).Storage;
    let str = Storage.get("push-notification-logs-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  });
  [first1, dependencyMap] = react.useState([]);
  const tmp6 = _slicedToArray(react.useState([]), 2);
  [tmp7, _asyncToGenerator] = tmp6;
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v1;
        if (c3 === 2) {
          c3 = 3;
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
            let closure_0;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                closure_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: first1(closure_2_2[10])(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              c2(closure_0);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp12) {
            c3 = 3;
            throw tmp12;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !load();
  }, []);
  let items = [first1, defaultValue];
  const effect1 = react.useEffect(() => {
    let closure_0;
    let timeout;
    let tmp;
    if ("" !== timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(function() {
        try {
          const tmp = globalThis;
          const _RegExp = RegExp;
          let tmp2 = closure_0;
          const self = this;
          let str = "i";
          const self2 = this;
          const regExp = new RegExp(closure_0, "i");
          closure_1_3(first1.filter((type) => {
            const str = type.type;
            let tmp2 = null != str.match(regExp);
            if (!tmp2) {
              const str2 = type.title;
              tmp2 = null != str2.match(tmp);
            }
            if (!tmp2) {
              let match;
              if (type.content != null) {
                match = str3.match(tmp);
              }
              tmp2 = null != match;
            }
            return tmp2;
          }));
          const Storage = first(closure_2[9]).Storage;
          let str2 = "push-notification-logs-query";
          const result = Storage.set("push-notification-logs-query", closure_0);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      let tmp2 = closure_3;
      closure_3(first1);
      let Storage = first(closure_2[9]).Storage;
      let str = "push-notification-logs-query";
      let result = Storage.set("push-notification-logs-query", tmp);
    }
  }, items);
  const tmp10 = closure_9();
  _slicedToArray = tmp10;
  let obj = { style: tmp10.wrap, children: items2 };
  let obj2 = { style: tmp10.searchWrap, children: items1 };
  const bottom = first1(1613)().bottom;
  items1 = [closure_7(defaultValue(6471).SearchField, { size: "md", placeholder: "Filter (regex)", onChange: tmp3, defaultValue }), ];
  let obj3 = {
    style: tmp10.shareButton,
    accessibilityLabel: intl.string(defaultValue(1115).t.leICvh),
    onPress: _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: tmp4(c2[10])(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = value;
            const obj = { message: tmp4(c2[16])(tmp, false) };
            const showShareActionSheet = tmp(c2[15]).showShareActionSheet;
            const tmp9 = tmp(c2[15]);
            showShareActionSheet(obj, "push-notification-logs");
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    }),
    children: closure_7(defaultValue(12470).ShareIcon, {})
  };
  const PressableOpacity = defaultValue(5435).PressableOpacity;
  intl = defaultValue(1115).intl;
  items1[1] = closure_7(PressableOpacity, obj3);
  items2 = [closure_8(View, obj2), ];
  let obj4 = {
    contentContainerStyle: obj5,
    data: tmp7,
    renderItem(item) {
      let date;
      let items;
      let items1;
      let items2;
      item = item.item;
      let str = "";
      const index = item.index;
      if (item.silent) {
        str = "~silent~ ";
      }
      const obj = { style: closure_4.log, children: items };
      const obj2 = { style: closure_4.code, variant: "text-xs/normal", children: date.toISOString() };
      const Text = Text_Text.Text;
      date = new Date(item.receivedTimestamp);
      items = [metroImportDefault(Text, obj2), ];
      const obj3 = { style: closure_4.code, variant: "text-sm/normal", children: items2 };
      const Text2 = Text_Text.Text;
      const obj4 = { style: closure_4.code, variant: "text-sm/normal", color: "text-brand", children: items1 };
      items1 = [str, "[", item.type, "]", " "];
      items2 = [metroImportAll(Text_Text.Text, obj4), item.title, " - ", item.content];
      items[1] = metroImportAll(Text2, obj3);
      return metroImportAll(View, obj, index);
    }
  };
  obj5 = { paddingBottom: bottom + first1(576).space.PX_16 };
  const FlashList = defaultValue(8179).FlashList;
  const merged = Object.assign(tmp10.list);
  items2[1] = closure_7(FlashList, obj4);
  return closure_8(View, obj);
};
