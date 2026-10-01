// Module ID: 15382
// Function ID: 15383
// Name: UserSettingsDesignSystemContextMenu
// Dependencies: [19, 17, 21, 12289, 6515, 7408, 10823, 4796, 15383, 15384, 11059, 4836, 576, 12, 7358, 5281, 5919, 4832, 2]
// Exports: default

// Module 15382 (UserSettingsDesignSystemContextMenu)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import AssetRegistryDefault from "AssetRegistry" /* 4796 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Card_Card from "Card/Card" /* 5919 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6515 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 7408 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10823 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11059 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 12289 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 15383 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 15384 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
function DemoContextMenu(align) {
  let obj2;
  let text;
  let triggerOnLongPress;
  ({ label: require, triggerOnLongPress } = align);
  align = align.align;
  if (triggerOnLongPress === undefined) {
    triggerOnLongPress = false;
  }
  let num = align.count;
  if (num === undefined) {
    num = 3;
  }
  let num2 = align.sections;
  if (num2 === undefined) {
    num2 = 1;
  }
  let str = align.alignButton;
  if (str === undefined) {
    str = "flex-start";
  }
  items = [num, num2];
  let obj = { style: { alignSelf: str }, children: closure_5(require("ContextMenu").ContextMenu, obj2) };
  const memo = num2.useMemo(() => {
    let mapped;
    if (num2 > 1) {
      const _Array = Array;
      let obj = { length: tmp };
      let arr = Array.from(obj);
      mapped = arr.map(() => {
        let closure_0 = closure_1_1;
        let obj = require("module_12");
        let closure_1 = obj.shuffle(closure_2_8);
        const obj2 = require("module_12");
        let closure_2 = obj2.shuffle(items);
        const obj3 = { length: closure_1_1 };
        const arr = Array.from(obj3);
        return arr.map((item, index) => {
          let str;
          const obj = {
            label: length[index % length.length],
            IconComponent: "a",
            iconSource: length2[index % length2.length],
            variant: str,
            action() {

            }
          };
          str = "default";
          if (index === closure_0 - 1) {
            str = "destructive";
          }
          return obj;
        });
      });
    } else {
      let closure_0 = num;
      let obj2 = _mod12;
      let closure_1 = obj2.shuffle(closure_8);
      let obj3 = _mod12;
      let closure_2 = obj3.shuffle(items);
      const _Array2 = Array;
      const obj4 = { length: num };
      const arr2 = Array.from(obj4);
      mapped = arr2.map((item, index) => {
        let str;
        const obj = {
          label: length[index % length.length],
          IconComponent: "a",
          iconSource: length2[index % length2.length],
          variant: str,
          action() {

          }
        };
        str = "default";
        if (index === closure_0 - 1) {
          str = "destructive";
        }
        return obj;
      });
    }
    return mapped;
  }, items);
  obj2 = {
    triggerOnLongPress,
    items: memo,
    align,
    title: "Sample title",
    children(ref) {
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref, text: require, variant: "primary" };
      const Button = components_Button_Button.Button;
      const merged1 = Object.assign(merged);
      return hasOwnProperty(Button, obj);
    }
  };
  return closure_5(closure_3, obj);
}
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [AssetRegistryDefault6, AssetRegistryDefault2, AssetRegistryDefault3, AssetRegistryDefault4, AssetRegistryDefault, AssetRegistryDefault7, AssetRegistryDefault8, AssetRegistryDefault5];
let closure_8 = ["Launch Probe!", "Activate Laser", "Teleport Widget", "Engage Hyperdrive", "Deploy Robots", "Initiate Time Warp", "Beam Up Snacks", "Hack Database", "Trigger Cosmic Boom", "Unleash Space Vortex", "Activate Cloaking Device"];
let obj = { container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 }, divider: obj2 };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 12 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemContextMenu.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj2;
  const tmp = closure_9();
  const obj = { children: metroRequire(_false, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  const obj3 = { style: tmp.card, children: items };
  const Card = Card_Card.Card;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Basic Example" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You press the button to open the menu and then select an action, or tap and pan down in a single gesture." }), hasOwnProperty(DemoContextMenu, { label: "Open Menu" })];
  items1 = [metroRequire(Card, obj3), , , , , ];
  const obj4 = { style: tmp.card, children: items2 };
  const Card2 = Card_Card.Card;
  items2 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Long Press" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can also have the menu open on long press instead." }), hasOwnProperty(DemoContextMenu, { triggerOnLongPress: true, label: "Long Press to Open" })];
  items1[1] = metroRequire(Card2, obj4);
  const obj5 = { style: tmp.card, children: items3 };
  const Card3 = Card_Card.Card;
  items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Sections" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "You can pass an array of arrays of items to create sections in the menu." }), hasOwnProperty(DemoContextMenu, { label: "Open Sectioned Menu", sections: 3, count: 2 })];
  items1[2] = metroRequire(Card3, obj5);
  const obj6 = { style: tmp.card, children: items4 };
  const Card4 = Card_Card.Card;
  items4 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Automatic Alignment" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The menu will automatically align itself so that it doesn't overflow offscreen horizontally." }), hasOwnProperty(DemoContextMenu, { alignButton: "flex-end", label: "Open Right-Aligned Menu" }), , , ];
  const obj7 = { style: tmp.divider };
  items4[3] = hasOwnProperty(_false, obj7);
  items4[4] = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "It will also position itself vertically, so that it doesn't overflow offscreen vertically." });
  items4[5] = hasOwnProperty(DemoContextMenu, { count: 8, label: "Open Tall Menu" });
  items1[3] = metroRequire(Card4, obj6);
  const obj8 = { style: tmp.card, children: items5 };
  const Card5 = Card_Card.Card;
  items5 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Intentional Alignment" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus can take an align prop to intentionally align the menu, instead of using the automatic menu positioning." }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "The align prop can be set to above, below, left, or right of the menu trigger. How the menu positions relative to the start or end of the trigger is then automatically determined based on the available space." }), , , , , , , , ];
  const obj9 = { style: tmp.divider };
  items5[3] = hasOwnProperty(_false, obj9);
  items5[4] = hasOwnProperty(DemoContextMenu, { count: 3, align: "right", label: "Open Right" });
  const obj10 = { style: tmp.divider };
  items5[5] = hasOwnProperty(_false, obj10);
  items5[6] = hasOwnProperty(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "left", label: "Open Left" });
  const obj11 = { style: tmp.divider };
  items5[7] = hasOwnProperty(_false, obj11);
  items5[8] = hasOwnProperty(DemoContextMenu, { count: 3, align: "below", label: "Always Open Below" });
  const obj12 = { style: tmp.divider };
  items5[9] = hasOwnProperty(_false, obj12);
  items5[10] = hasOwnProperty(DemoContextMenu, { count: 3, alignButton: "flex-end", align: "above", label: "Always Open Above" });
  items1[4] = metroRequire(Card5, obj8);
  const obj13 = { style: tmp.card, children: items6 };
  const Card6 = Card_Card.Card;
  items6 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: "Overflow Scrolling" }), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "Menus should not typically have enough items to require scrolling, but with font scaling and smaller devices its possible. In this case, the menu will allow the user to scroll." }), hasOwnProperty(DemoContextMenu, { count: 30, label: "Open Really Tall Menu" })];
  items1[5] = metroRequire(Card6, obj13);
  return hasOwnProperty(React3, obj);
};
