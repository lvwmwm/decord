// Module ID: 15981
// Function ID: 122678
// Name: DefaultAvatarButton
// Dependencies: []
// Exports: default

// Module 15981 (DefaultAvatarButton)
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
  const intl = arg1(dependencyMap[11]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[11]).t.vw2RsD);
  obj.onPress = onSelect;
  obj = { style: tmp.defaultAvatarButton, source: { uri: source } };
  obj.children = callback(importDefault(dependencyMap[16]), obj);
  return callback(arg1(dependencyMap[15]).PressableOpacity, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const items = [importDefault(dependencyMap[3]), importDefault(dependencyMap[4]), importDefault(dependencyMap[5]), importDefault(dependencyMap[6]), importDefault(dependencyMap[7]), importDefault(dependencyMap[8]), importDefault(dependencyMap[9]), importDefault(dependencyMap[10])];
let obj = {
  avatar: importDefault(dependencyMap[3]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.u/VENK);
  }
};
const items1 = [obj, , , , , , , ];
obj = {
  avatar: importDefault(dependencyMap[4]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.pBx+d8);
  }
};
items1[1] = obj;
obj = {
  avatar: importDefault(dependencyMap[5]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.vbERmz);
  }
};
items1[2] = obj;
const tmp3 = arg1(dependencyMap[2]);
items1[3] = {
  avatar: importDefault(dependencyMap[6]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.Ecxz3Z);
  }
};
const obj1 = {
  avatar: importDefault(dependencyMap[6]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.Ecxz3Z);
  }
};
items1[4] = {
  avatar: importDefault(dependencyMap[7]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.Jb8PYM);
  }
};
const obj2 = {
  avatar: importDefault(dependencyMap[7]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.Jb8PYM);
  }
};
items1[5] = {
  avatar: importDefault(dependencyMap[8]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.3h0yoI);
  }
};
const obj3 = {
  avatar: importDefault(dependencyMap[8]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.3h0yoI);
  }
};
items1[6] = {
  avatar: importDefault(dependencyMap[9]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.frIpZ5);
  }
};
const obj4 = {
  avatar: importDefault(dependencyMap[9]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.frIpZ5);
  }
};
items1[7] = {
  avatar: importDefault(dependencyMap[10]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.zpfUeg);
  }
};
let obj8 = arg1(dependencyMap[12]);
const obj6 = { container: {}, buttonsContainer: {} };
const obj5 = {
  avatar: importDefault(dependencyMap[10]),
  label() {
    const intl = arg1(dependencyMap[11]).intl;
    return intl.string(arg1(dependencyMap[11]).t.zpfUeg);
  }
};
obj6.defaultAvatarButton = { borderRadius: importDefault(dependencyMap[13]).radii.xl };
obj6.defaultAvatarContainer = { <string:145098154>: true, <string:19530754>: true, <string:46335125>: true, <string:703004930>: true, <string:1855193831>: true, <string:1513685732>: true, <string:71762360>: true, <string:51980173>: true, <string:138085081>: true, <string:688131044>: true };
obj8 = { borderColor: importDefault(dependencyMap[13]).colors.INTERACTIVE_TEXT_ACTIVE };
obj6.defaultAvatarSelected = obj8;
let closure_7 = obj8.createStyles(obj6);
const obj7 = { borderRadius: importDefault(dependencyMap[13]).radii.xl };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/avatar/native/components/PresetAvatarSelect.tsx");

export default function PresetAvatarSelect(arg0) {
  ({ onAvatarSelect: closure_0, selectedAvatar: closure_1 } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, accessibilityRole: "list" };
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.yP28YL);
  const items = [callback(arg1(dependencyMap[14]).Text, obj), , ];
  obj = {
    style: tmp.buttonsContainer,
    children: items1.map((arg0) => {
      let obj = closure_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return arg0(arg0);
        },
        selected: closure_1 === arg0
      };
      const intl = arg0(closure_2[11]).intl;
      obj = { index: arg0 + 1 };
      obj.description = obj.label();
      obj.accessibilityLabel = intl.formatToPlainString(arg0(closure_2[11]).t.1K8jaQ, obj);
      return callback(closure_8, obj, arg0);
    })
  };
  const items1 = ["ani muk", "dr\u017Eet jazyk za zuby", "jako ryba", "ml\u010Det"];
  items[1] = callback(View, obj);
  const items2 = ["<string:26340096>", "<string:77258240>", "<string:3735507200>", "<string:1369900113>"];
  items[2] = callback(View, {
    style: tmp.buttonsContainer,
    children: items2.map((arg0) => {
      let obj = closure_6[arg0];
      obj = {
        source: obj.avatar,
        onSelect() {
          return arg0(arg0);
        },
        selected: closure_1 === arg0
      };
      const intl = arg0(closure_2[11]).intl;
      obj = { index: arg0 + 1 };
      obj.description = obj.label();
      obj.accessibilityLabel = intl.formatToPlainString(arg0(closure_2[11]).t.1K8jaQ, obj);
      return callback(closure_8, obj, arg0);
    })
  });
  obj.children = items;
  return callback2(View, obj);
};
export const DEFAULT_AVATARS = items;
export const DEFAULT_AVATARS_WITH_LABELS = items1;
