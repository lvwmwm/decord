// Module ID: 17205
// Function ID: 17206
// Name: PresetAvatarSelect
// Dependencies: [19, 17, 21, 17206, 17207, 17208, 17209, 17210, 17211, 17212, 17213, 1115, 4836, 576, 4832, 5435, 5899, 2]
// Exports: default

// Module 17205 (PresetAvatarSelect)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import FastImageDefault from "FastImage" /* 5899 */;
import defaultAvatar1Default from "defaultAvatar1" /* 17206 */;
import defaultAvatar2Default from "defaultAvatar2" /* 17207 */;
import defaultAvatar3Default from "defaultAvatar3" /* 17208 */;
import defaultAvatar4Default from "defaultAvatar4" /* 17209 */;
import defaultAvatar5Default from "defaultAvatar5" /* 17210 */;
import defaultAvatar6Default from "defaultAvatar6" /* 17211 */;
import defaultAvatar7Default from "defaultAvatar7" /* 17212 */;
import defaultAvatar8Default from "defaultAvatar8" /* 17213 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t.Jb8PYM);
}
const label2 = function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t["3h0yoI"]);
};
const label3 = function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t.frIpZ5);
};
const label4 = function label() {
  const intl = intl2.intl;
  return intl.string(intl2.t.zpfUeg);
};
function DefaultAvatarButton(selected) {
  let accessibilityLabel;
  let intl;
  let obj2;
  let onSelect;
  let source;
  selected = selected.selected;
  ({ source, onSelect, accessibilityLabel } = selected);
  const tmp = closure_7();
  const items = [tmp.defaultAvatarContainer, ];
  let prop;
  const PressableOpacity = Pressables.PressableOpacity;
  if (selected) {
    prop = tmp.defaultAvatarSelected;
  }
  items[1] = prop;
  const obj = { style: items, accessibilityRole: "button", accessibilityLabel, accessibilityState: { selected }, accessibilityHint: intl.string(intl2.t.vw2RsD), onPress: onSelect, children: React3(FastImageDefault, obj2) };
  intl = tmp3(1115).intl;
  obj2 = { style: tmp.defaultAvatarButton, source: { uri: source } };
  return React3(PressableOpacity, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let items = [defaultAvatar1Default, defaultAvatar2Default, defaultAvatar3Default, defaultAvatar4Default, defaultAvatar5Default, defaultAvatar6Default, defaultAvatar7Default, defaultAvatar8Default];
let obj = {
  avatar: defaultAvatar1Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["u/VENK"]);
  }
};
let items1 = [obj, , , , , , , ];
let obj2 = {
  avatar: defaultAvatar2Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["pBx+d8"]);
  }
};
items1[1] = obj2;
let obj3 = {
  avatar: defaultAvatar3Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.vbERmz);
  }
};
items1[2] = obj3;
let obj4 = {
  avatar: defaultAvatar4Default,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Ecxz3Z);
  }
};
items1[3] = obj4;
items1[4] = { avatar: defaultAvatar5Default, label };
({ avatar: defaultAvatar5Default, label });
items1[5] = { avatar: defaultAvatar6Default, label: label2 };
({ avatar: defaultAvatar6Default, label: label2 });
items1[6] = { avatar: defaultAvatar7Default, label: label3 };
({ avatar: defaultAvatar7Default, label: label3 });
items1[7] = { avatar: defaultAvatar8Default, label: label4 };
({ avatar: defaultAvatar8Default, label: label4 });
let createStyles = createStyles_mod;
const obj9 = { container: { display: "flex", alignItems: "center", flex: 1 }, buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" }, defaultAvatarButton: size, defaultAvatarContainer: { marginHorizontal: 8, width: 56, height: 56, padding: 2, borderWidth: 2, borderRadius: 28, borderColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }, defaultAvatarSelected: { borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE } };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
({ borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
let closure_7 = createStyles(obj9);
size = size_mod;
const result = size.fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  let intl;
  let items;
  let items2;
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = closure_7();
  let obj = { style: tmp.container, accessibilityRole: "list", children: items };
  let obj2 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl2.t.yP28YL) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [closure_4(Text, obj2), , ];
  const obj3 = {
    style: tmp.buttonsContainer,
    children: items1.map((item) => {
      let formatToPlainString;
      let obj2;
      let v1K8jaQ;
      require = item;
      const label = tmp.label;
      const obj = {
        source: items1[item].avatar,
        onSelect() {
          return require(item);
        },
        selected: closure_1 === item,
        accessibilityLabel: formatToPlainString(v1K8jaQ, obj2)
      };
      const intl = intl2.intl;
      formatToPlainString = intl.formatToPlainString;
      obj2 = { index: item + 1, description: label() };
      v1K8jaQ = intl2.t["1K8jaQ"];
      return closure_1_4(DefaultAvatarButton, obj, item);
    })
  };
  items1 = [0, 1, 2, 3];
  items[1] = closure_4(View, obj3);
  const obj4 = {
    style: tmp.buttonsContainer,
    children: items2.map((item) => {
      let formatToPlainString;
      let obj2;
      let v1K8jaQ;
      require = item;
      const label = tmp.label;
      const obj = {
        source: items1[item].avatar,
        onSelect() {
          return require(item);
        },
        selected: closure_1 === item,
        accessibilityLabel: formatToPlainString(v1K8jaQ, obj2)
      };
      const intl = intl2.intl;
      formatToPlainString = intl.formatToPlainString;
      obj2 = { index: item + 1, description: label() };
      v1K8jaQ = intl2.t["1K8jaQ"];
      return closure_1_4(DefaultAvatarButton, obj, item);
    })
  };
  items2 = [4, 5, 6, 7];
  items[2] = closure_4(View, obj4);
  return closure_5(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;
