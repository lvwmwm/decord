// Module ID: 14544
// Function ID: 109613
// Name: items
// Dependencies: []
// Exports: default

// Module 14544 (items)
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
let closure_11 = [true, true, true];
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.contentContainer = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
const obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
obj.controlRow = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_8 };
const obj3 = { APP_DMS_ENTRY_POINT_COMMAND_BUTTON: null, desert: null, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.grid = obj3;
const obj4 = { ddd: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030752360877, ind: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031829936914, ty: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000950654114574347, nm: NaN, sr: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001086461841685, ks: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007951033197511102, ao: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000890029543407535, gap: importDefault(dependencyMap[6]).space.PX_4, padding: importDefault(dependencyMap[6]).space.PX_8 };
obj.tile = obj4;
obj.badgeBox = { 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007294813932448292, -9223372036854775808: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002295048861046612, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001786365104912034 };
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
    noCommandsTextContainer: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288,
    processAndReturnTallestItemInRow: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986,
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
