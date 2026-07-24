// Module ID: 16164
// Function ID: 125287
// Name: DefaultAvatarButton
// Dependencies: [31, 27, 33, 16165, 16166, 16167, 16168, 16169, 16170, 16171, 16172, 1212, 4130, 689, 4126, 4660, 5085, 2]
// Exports: default

// Module 16164 (DefaultAvatarButton)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function DefaultAvatarButton(selected) {
  let accessibilityLabel;
  let onSelect;
  let source;
  selected = selected.selected;
  ({ source, onSelect, accessibilityLabel } = selected);
  const tmp = callback3();
  let obj = {};
  const items = [tmp.defaultAvatarContainer, ];
  let prop;
  if (selected) {
    prop = tmp.defaultAvatarSelected;
  }
  items[1] = prop;
  obj.style = items;
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityState = { selected };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t.vw2RsD);
  obj.onPress = onSelect;
  obj = { style: tmp.defaultAvatarButton, source: { uri: source } };
  obj.children = callback(importDefault(5085), obj);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let items = [require("set"), require("set"), require("set"), require("set"), require("set"), require("set"), require("set"), require("set")];
let obj = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["u/VENK"]);
  }
};
let items1 = [obj, , , , , , , ];
obj = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["pBx+d8"]);
  }
};
items1[1] = obj;
obj = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.vbERmz);
  }
};
items1[2] = obj;
items1[3] = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Ecxz3Z);
  }
};
const obj1 = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Ecxz3Z);
  }
};
items1[4] = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Jb8PYM);
  }
};
const obj2 = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Jb8PYM);
  }
};
items1[5] = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3h0yoI"]);
  }
};
const obj3 = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3h0yoI"]);
  }
};
items1[6] = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.frIpZ5);
  }
};
const obj4 = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.frIpZ5);
  }
};
items1[7] = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.zpfUeg);
  }
};
const obj6 = { container: { display: "flex", alignItems: "center", flex: 1 }, buttonsContainer: { display: "flex", flexDirection: "row", marginTop: 20, justifyContent: "space-between" } };
const obj7 = { height: 48, width: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
obj6.defaultAvatarButton = obj7;
obj6.defaultAvatarContainer = { marginHorizontal: 8, width: 56, height: 56, padding: 2, borderWidth: 2, borderRadius: 28, borderColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = { borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj6.defaultAvatarSelected = _createForOfIteratorHelperLoose;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj6);
const obj5 = {
  avatar: require("set"),
  label() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.zpfUeg);
  }
};
const result = require("jsxProd").fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  let importDefault;
  let require;
  ({ onAvatarSelect: require, selectedAvatar: importDefault } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, accessibilityRole: "list" };
  obj = { variant: "text-sm/medium", color: "text-default" };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.yP28YL);
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = {
    style: tmp.buttonsContainer,
    children: items1.map((arg0) => {
      let closure_0 = arg0;
      let obj = outer1_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return callback(callback);
        },
        selected: closure_1 === arg0
      };
      const intl = outer1_0(outer1_2[11]).intl;
      obj = { index: arg0 + 1 };
      obj.description = obj.label();
      obj.accessibilityLabel = intl.formatToPlainString(outer1_0(outer1_2[11]).t["1K8jaQ"], obj);
      return outer1_4(outer1_8, obj, arg0);
    })
  };
  items1 = [0, 1, 2, 3];
  items[1] = callback(View, obj);
  const items2 = [4, 5, 6, 7];
  items[2] = callback(View, {
    style: tmp.buttonsContainer,
    children: items2.map((arg0) => {
      let closure_0 = arg0;
      let obj = outer1_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return callback(callback);
        },
        selected: closure_1 === arg0
      };
      const intl = outer1_0(outer1_2[11]).intl;
      obj = { index: arg0 + 1 };
      obj.description = obj.label();
      obj.accessibilityLabel = intl.formatToPlainString(outer1_0(outer1_2[11]).t["1K8jaQ"], obj);
      return outer1_4(outer1_8, obj, arg0);
    })
  });
  obj.children = items;
  return callback2(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;
