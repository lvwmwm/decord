// Module ID: 14554
// Function ID: 109667
// Name: items
// Dependencies: []
// Exports: default

// Module 14554 (items)
let GUILD_TAG_BADGE_PALETTE_PRESETS;
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[3]);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS } = tmp3);
const tmp2 = arg1(dependencyMap[2]);
({ jsxs: closure_7, jsx: closure_8 } = arg1(dependencyMap[4]));
const entries = Object.entries(tmp3.GuildTagBadgeKind);
const found = entries.filter((arg0) => {
  let tmp;
  [tmp] = arg0;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  return { name, value };
});
const items = [{ label: "Untinted", primary: undefined, secondary: undefined }, ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary) => ({ label: "P" + arg1 + 1, primary: primary.primary, secondary: primary.secondary }))];
let closure_11 = [false, false, false];
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.contentContainer = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
const obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
obj.controlRow = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_8 };
const obj3 = { -9223372036854775808: null, 7741: null, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.grid = obj3;
const obj4 = { alignItems: null, position: null, width: null, zIndex: null, bottom: null, name: null, description: null, gap: importDefault(dependencyMap[6]).space.PX_4, padding: importDefault(dependencyMap[6]).space.PX_8 };
obj.tile = obj4;
obj.badgeBox = { "Bool(true)": "isArray", "Bool(true)": "warn", 266603034: "textAlign" };
let closure_12 = obj.createStyles(obj);
const obj2 = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

export default function DevToolsGuildTagBadgesScreen() {
  const tmp = callback4();
  const arg1 = tmp;
  const tmp2 = callback(React.useState(1), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp2[1];
  const tmp4 = callback(React.useState(1), 2);
  const React = tmp4[1];
  const tmp5 = items[first];
  const tmp6 = closure_11[tmp4[0]];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  obj = { spacing: 16 };
  const items = [null, closure_9.length, " badge kinds. Tint: ", tmp5.label, " \u00B7 Size: ", tmp6, "px. 2c = two-color badge."];
  const items1 = [callback2(arg1(dependencyMap[8]).Text, { variant: "text-md/normal", children: items }), , , ];
  obj = {
    1644319569: null,
    -2041488286: null,
    children: callback3(tmp6, {
      style: tmp.controlRow,
      children: items.map((label) => {
        let tmp = arg1;
        tmp = closure_8;
        const obj = { text: label.label, size: "sm" };
        let str = "secondary";
        if (arg1 === first) {
          str = "primary";
        }
        obj.variant = str;
        obj.onPress = function onPress() {
          return callback(arg1);
        };
        return tmp(tmp(first[9]).Button, obj, label.label);
      })
    })
  };
  items1[1] = callback3(tmp5, obj);
  const obj2 = {
    text: "Size: " + tmp6 + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return callback((arg0) => (arg0 + 1) % length.length);
    }
  };
  items1[2] = callback3(arg1(dependencyMap[9]).Button, obj2);
  const obj1 = {
    style: tmp.controlRow,
    children: items.map((label) => {
      let tmp = arg1;
      tmp = closure_8;
      const obj = { text: label.label, size: "sm" };
      let str = "secondary";
      if (arg1 === first) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return callback(arg1);
      };
      return tmp(tmp(first[9]).Button, obj, label.label);
    })
  };
  items1[3] = callback3(tmp6, {
    style: tmp.grid,
    children: closure_9.map((value) => {
      value = value.value;
      let obj = { style: tmp.tile };
      obj = { style: tmp.badgeBox, children: callback2(tmp(first[10]).GuildBadge, obj) };
      obj = { badge: value, primaryTintColor: tmp5.primary, secondaryTintColor: tmp5.secondary, width: tmp6, height: tmp6 };
      const items = [callback2(tmp6, obj), ];
      const obj1 = { style: { textAlign: "center" } };
      const items1 = [value.name, ];
      let str = "";
      if (2 === closure_6[value]) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      obj1.children = items1;
      items[1] = closure_7(closure_7(first[8]).Text, obj1);
      obj.children = items;
      return closure_7(tmp6, obj, value);
    })
  });
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[7]).Stack, obj);
  return callback3(tmp5, obj);
};
