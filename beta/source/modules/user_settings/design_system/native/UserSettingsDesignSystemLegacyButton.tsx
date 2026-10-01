// Module ID: 15364
// Function ID: 15365
// Name: UserSettingsDesignSystemLegacyButton
// Dependencies: [19, 17, 21, 1177, 4832, 5281, 4836, 576, 5279, 8053, 2]
// Exports: default

// Module 15364 (UserSettingsDesignSystemLegacyButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Form from "Form" /* 8053 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
function ComparisonRow(entry) {
  let darkText;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let tmp10Result;
  entry = entry.entry;
  const tmp = closure_10();
  const hasItem = set.has(entry.color);
  const combined = "" + entry.color;
  let redesignVariant = null;
  if (entry.look !== native.ButtonLooks.LINK) {
    const tmp4Result = native;
    redesignVariant = tmp4Result.getRedesignVariant(entry.color);
  }
  items = [tmp.comparisonRow, ];
  const obj = { style: items, children: items2 };
  const tmp9 = hasItem && tmp.darkBg;
  items[1] = tmp9;
  let str = "text-muted";
  const Text = tmp4(4832).Text;
  if (hasItem) {
    str = "text-default";
  }
  const obj2 = { variant: "text-xs/medium", color: str, children: items1 };
  items1 = [combined, " \u2192 ", ];
  let str2 = redesignVariant;
  if (redesignVariant == null) {
    str2 = "unmapped";
  }
  items1[2] = str2;
  items2 = [React3(Text, obj2), ];
  const obj3 = { style: tmp.comparisonButtons, children: items4 };
  const obj4 = { style: tmp.comparisonSide, children: items3 };
  items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" }), ];
  const obj5 = {
    look: entry.look,
    color: entry.color,
    size: native.ButtonSizes.MEDIUM,
    shrink: true,
    text: combined,
    textStyle: darkText,
    onPress() {

    }
  };
  const Button = tmp4(1177).Button;
  darkText = null;
  if (hasItem) {
    darkText = null;
    if (entry.look === native.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  items3[1] = hasOwnProperty(Button, obj5);
  items4 = [React3(_false, obj4), ];
  if (null != redesignVariant) {
    const obj6 = { style: tmp.comparisonSide, children: items5 };
    items5 = [hasOwnProperty(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }), ];
    const obj7 = {
      variant: redesignVariant,
      size: "md",
      text: redesignVariant,
      onPress() {

        }
    };
    items5[1] = hasOwnProperty(components_Button_Button.Button, obj7);
    tmp10Result = tmp7(tmp8, obj6);
  } else {
    const obj8 = { style: tmp.comparisonSide, children: hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "no mapping" }) };
    tmp10Result = tmp10(tmp8, obj8);
  }
  items4[1] = tmp10Result;
  items2[1] = React3(_false, obj3);
  return React3(_false, obj);
}
function ComboRow(combo) {
  let color;
  let darkText;
  let items1;
  let items2;
  combo = combo.combo;
  const tmp = closure_10();
  ({ color, size } = combo);
  let str = "";
  if (combo.shrink) {
    str = " / shrink";
  }
  const combined = "" + color + " / " + size + str;
  const hasItem = set.has(combo.color);
  items = [tmp.comboRow, ];
  let darkBg = hasItem;
  const tmp5 = _false;
  if (hasItem) {
    darkBg = tmp.darkBg;
  }
  const obj = { style: items, children: items2 };
  items[1] = darkBg;
  let str2 = "text-muted";
  const Text = Text_Text.Text;
  if (hasItem) {
    str2 = "text-default";
  }
  const obj2 = { variant: "text-xs/medium", color: str2, children: items1 };
  items1 = [combined, " (", combo.count, ")"];
  items2 = [React3(Text, obj2), ];
  const obj3 = {
    look: combo.look,
    color: combo.color,
    size: combo.size,
    shrink: combo.shrink,
    text: combined,
    textStyle: darkText,
    onPress() {

    }
  };
  darkText = null;
  const Button = tmp6(1177).Button;
  const tmp8 = hasOwnProperty;
  if (hasItem) {
    darkText = null;
    if (combo.look === native.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  items2[1] = tmp8(Button, obj3);
  return React3(tmp5, obj);
}
({ ScrollView: c2, View: c3 } = react_native);
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let obj = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.LARGE, shrink: false, count: 1 };
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
let obj2 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: false, count: 116 };
items[1] = obj2;
let obj3 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: true, count: 12 };
items[2] = obj3;
let obj4 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.SMALL, shrink: false, count: 5 };
items[3] = obj4;
let obj5 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.SMALL, shrink: true, count: 2 };
items[4] = obj5;
let obj6 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: false, count: 4 };
items[5] = obj6;
let obj7 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 };
items[6] = obj7;
let obj8 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[7] = obj8;
items[8] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[9] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.SMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.SMALL, shrink: false, count: 1 });
items[10] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[11] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 10 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 10 });
items[12] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[13] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: false, count: 2 });
items[14] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: true, count: 1 });
items[15] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[16] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 });
items[17] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[18] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 });
items[19] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.SMALL, shrink: true, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.SMALL, shrink: true, count: 2 });
items[20] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.XSMALL, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.XSMALL, shrink: false, count: 2 });
items[21] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 });
items[22] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[23] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[24] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 });
items[25] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: true, count: 3 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: true, count: 3 });
items[26] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[27] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 });
items[28] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 });
items[29] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 });
items[30] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: false, count: 3 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: false, count: 3 });
items[31] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[32] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: false, count: 2 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: false, count: 2 });
items[33] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: true, count: 1 });
items[34] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[35] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[36] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 });
items[37] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 });
items[38] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 });
items[39] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 });
items[40] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 };
let items1 = [];
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 });
items1[0] = native.ButtonColors.WHITE;
let set = new Set(items1);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj42 = { comboRow: { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, darkText: { color: nativeDefault.unsafe_rawColors.GREEN_360 }, darkBg: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 }, comparisonRow: { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 }, comparisonButtons: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" }, comparisonSide: { flex: 1, gap: 2 }, container: { paddingBottom: nativeDefault.space.PX_48 }, header: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 } };
({ gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 });
({ color: nativeDefault.unsafe_rawColors.GREEN_360 });
({ backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 });
({ gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 });
({ flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" });
({ paddingBottom: nativeDefault.space.PX_48 });
({ paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 });
let closure_10 = createStyles(obj42);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx");

export default function UserSettingsDesignSystemLegacyButton() {
  let items1;
  let items2;
  function groupByLook(items) {
    const obj = {};
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let look = nextResult.look;
      let tmp3 = look;
      let tmp2 = nextResult;
      if (null == obj[look]) {
        obj[tmp3] = [];
      }
      let arr = obj[tmp3];
      let arr2 = arr.push(tmp2);
      continue;
    }
    return obj;
  }
  function getUniqueComparisons() {
    set = new Set();
    items = [];
    const iter = closure_1_6[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let _HermesInternal = HermesInternal;
      let combined = "" + nextResult.look + "/" + nextResult.color;
      let tmp5 = combined;
      if (!set.has(combined)) {
        let addResult = set.add(tmp5);
        let obj = { look: null, color: null };
        ({ look: obj2.look, color: obj2.color } = tmp3);
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  }
  const tmp = closure_10();
  let tmp2 = groupByLook(items);
  let tmp3 = getUniqueComparisons();
  let obj = {};
  let iter = tmp3[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    if (null == obj[nextResult.look]) {
      let tmp6 = nextResult;
      obj[tmp5.look] = [];
    }
    let arr = obj[tmp5.look];
    let arr2 = arr.push(tmp5);
    continue;
  }
  const obj2 = { style: tmp.container, children: items1 };
  const obj3 = { spacing: 4, style: tmp.header, children: items };
  const Stack = Stack_Stack.Stack;
  items = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", children: "Migration Mapping" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Legacy (uikit-native) \u2192 Mana side-by-side" })];
  items1 = [React3(Stack, obj3), , , ];
  const entries = Object.entries(obj);
  items1[1] = entries.map((item) => {
    let arr;
    let tmp;
    [tmp, arr] = item;
    let obj = {
      title: tmp,
      children: arr.map((entry, index) => {
        const obj = { entry };
        return closure_1_5(closure_1_8, obj, index);
      })
    };
    const FormSection = Form.FormSection;
    return closure_1_5(FormSection, obj, "cmp-" + tmp);
  });
  const obj4 = { spacing: 4, style: tmp.header, children: items2 };
  const Stack2 = Stack_Stack.Stack;
  items2 = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "41 combinations across 185 importers" })];
  items1[2] = React3(Stack2, obj4);
  const entries1 = Object.entries(tmp2);
  items1[3] = entries1.map((item) => {
    let arr;
    let tmp;
    [tmp, arr] = item;
    let obj = {
      title: "" + tmp + " (" + arr.reduce((acc, count) => acc + count.count, 0) + " usages)",
      children: arr.map((combo, index) => {
        const obj = { combo };
        return closure_1_5(closure_1_9, obj, index);
      })
    };
    const FormSection = Form.FormSection;
    return closure_1_5(FormSection, obj, tmp);
  });
  return React3(React2, obj2);
};
