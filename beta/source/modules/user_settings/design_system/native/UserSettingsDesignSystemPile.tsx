// Module ID: 15401
// Function ID: 15402
// Name: UserSettingsDesignSystemPile
// Dependencies: [19, 17, 21, 4836, 1177, 5896, 5279, 5919, 4832, 12601, 1400, 13996, 12115, 10466, 12116, 8276, 2]
// Exports: default

// Module 15401 (UserSettingsDesignSystemPile)
import native from "native" /* 1177 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import Card_Card from "Card/Card" /* 5919 */;
import ClipView from "ClipView" /* 8276 */;
import ListUtils from "ListUtils" /* 12116 */;
import AvatarDuoPile2 from "AvatarDuoPile" /* 13996 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function SampleCard(arg0) {
  let children;
  let noScroll;
  let title;
  ({ title, noScroll, children } = arg0);
  const tmp = closure_7();
  const tmp3 = hasOwnProperty(Stack_Stack.Stack, { spacing: 16, children });
  const obj = { style: tmp.card, children: items };
  const Card = Card_Card.Card;
  items = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", children: title }), ];
  let tmp2Result = tmp3;
  const tmp2 = hasOwnProperty;
  const tmp4 = metroRequire;
  if (!noScroll) {
    const obj2 = { horizontal: true, children: tmp3 };
    tmp2Result = tmp2(React3, obj2);
  }
  items[1] = tmp2Result;
  return tmp4(Card, obj);
}
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } });
let items = [native.AvatarSizes.XSMALL, native.AvatarSizes.REFRESH_MEDIUM_32, native.AvatarSizes.NORMAL, native.AvatarSizes.LARGE_48, native.AvatarSizes.XLARGE];
let items1 = [GuildIcon.GuildIconSizes.XSMALL, GuildIcon.GuildIconSizes.SMALL_32, GuildIcon.GuildIconSizes.NORMAL, GuildIcon.GuildIconSizes.LARGE, GuildIcon.GuildIconSizes.XLARGE];
let closure_10 = ["Clyde", "Phibi", "Cap"];
let closure_11 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default function UserSettingsDesignSystemPile() {
  let names;
  let names2;
  let obj2;
  let obj = { children: metroRequire(_false, obj2) };
  obj2 = { style: closure_7().container, children: items };
  let obj3 = {
    title: "Avatar Pile",
    children: items.map((children) => {
      let DEFAULT_AVATARS;
      size = children;
      let obj = { children: items };
      const Stack = size(closure_2[6]).Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_5(size(closure_2[8]).Text, obj2);
      const obj3 = {
        size: children,
        names,
        totalCount: size(closure_2[10]).DEFAULT_AVATARS.length,
        children: DEFAULT_AVATARS.map((source, index) => {
          const obj = { source, size };
          return closure_2_5(native.Avatar, obj, index);
        })
      };
      const AvatarPile = size(closure_2[9]).AvatarPile;
      DEFAULT_AVATARS = size(closure_2[10]).DEFAULT_AVATARS;
      items[1] = closure_5(AvatarPile, obj3);
      return closure_6(Stack, obj, children);
    })
  };
  items = [hasOwnProperty(SampleCard, obj3), , , , , ];
  let obj4 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      let DEFAULT_AVATARS;
      size = children;
      let obj = { children: items };
      const Stack = size(closure_2[6]).Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_5(size(closure_2[8]).Text, obj2);
      const obj3 = {
        size: children,
        names,
        totalCount: 9500,
        children: DEFAULT_AVATARS.map((source, index) => {
          const obj = { source, size };
          return closure_2_5(native.Avatar, obj, index);
        })
      };
      const AvatarPile = size(closure_2[9]).AvatarPile;
      DEFAULT_AVATARS = size(closure_2[10]).DEFAULT_AVATARS;
      items[1] = closure_5(AvatarPile, obj3);
      return closure_6(Stack, obj, children);
    })
  };
  items[1] = hasOwnProperty(SampleCard, obj4);
  let obj5 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      let substr;
      size = children;
      let obj = { children: items };
      const Stack = size(closure_2[6]).Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_5(size(closure_2[8]).Text, obj2);
      const obj3 = {
        size: children,
        names: names.slice(0, 2),
        children: substr.map((source, index) => {
          const obj = { source, size };
          return closure_2_5(native.Avatar, obj, index);
        })
      };
      const AvatarDuoPile = size(closure_2[11]).AvatarDuoPile;
      const DEFAULT_AVATARS = size(closure_2[10]).DEFAULT_AVATARS;
      substr = DEFAULT_AVATARS.slice(0, 2);
      items[1] = closure_5(AvatarDuoPile, obj3);
      return closure_6(Stack, obj, children);
    })
  };
  items[2] = hasOwnProperty(SampleCard, obj5);
  const obj6 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let items2;
      const obj = { children: items };
      const Stack = Stack_Stack.Stack;
      items = [, ];
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children };
      items[0] = closure_1_5(Text_Text.Text, obj2);
      const obj3 = { size: items1, names: names.slice(0, 2), children: items2 };
      items1 = [children, ];
      const AvatarDuoPile = AvatarDuoPile2.AvatarDuoPile;
      items1[1] = native.AvatarSizes.NORMAL;
      const obj4 = { source: utils_AvatarUtils.DEFAULT_AVATARS[0], size: children };
      const Avatar = native.Avatar;
      items2 = [closure_1_5(Avatar, obj4), ];
      const obj5 = { source: utils_AvatarUtils.DEFAULT_AVATARS[1], size: native.AvatarSizes.NORMAL };
      const Avatar2 = native.Avatar;
      items2[1] = closure_1_5(Avatar2, obj5);
      items[1] = closure_1_6(AvatarDuoPile, obj3);
      return closure_1_6(Stack, obj, children);
    })
  };
  items[3] = hasOwnProperty(SampleCard, obj6);
  const obj7 = {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      let obj = { children: items };
      const Stack = size(closure_2[6]).Stack;
      const obj2 = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
      const Text = size(closure_2[8]).Text;
      items = [closure_5(Text, obj2), ];
      const obj3 = {
        size,
        names: names2,
        totalCount: 128,
        children: names2.map((value, index) => {
          const obj = { value, size };
          return closure_2_5(GuildIconDefault, obj, index);
        })
      };
      const GuildIconPile = size(closure_2[12]).GuildIconPile;
      items[1] = closure_5(GuildIconPile, obj3);
      return closure_6(Stack, obj, size);
    })
  };
  items[4] = hasOwnProperty(SampleCard, obj7);
  const obj8 = { title: "Weird Piles", noScroll: true, children: items1 };
  items1 = [metroRequire(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] }), ];
  let items2 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
  items1[1] = items2.map((item) => {
    let DEFAULT_AVATARS;
    let tmp;
    let tmp2;
    let tmp4Result;
    let tmp4Result2;
    [tmp, tmp2] = item;
    const Stack = Stack_Stack.Stack;
    let str = tmp;
    const Text = Text_Text.Text;
    if (tmp == null) {
      str = "null";
    }
    items = ["depthX=", str, ", depthY="];
    let str2 = tmp2;
    if (tmp2 == null) {
      str2 = "null";
    }
    let obj = { children: items1 };
    items[3] = str2;
    items1 = [closure_1_6(Text, { variant: "text-md/medium", color: "text-subtle", children: items }), , ];
    const obj2 = {
      "aria-label": tmp4Result.getListSummaryLabel(names, utils_AvatarUtils.DEFAULT_AVATARS.length),
      shape: ClipView.CutoutShape.Circle,
      size: 48,
      gap: 2,
      depthX: tmp,
      depthY: tmp2,
      children: DEFAULT_AVATARS.map((source, index) => {
        const obj = { source, size: closure_1_0(closure_1_2[4]).AvatarSizes.LARGE_48 };
        const Avatar = closure_1_0(closure_1_2[4]).Avatar;
        return closure_1_5(Avatar, obj, index);
      })
    };
    const Pile = tmp4(tmp5[13]).Pile;
    tmp4Result = ListUtils;
    DEFAULT_AVATARS = tmp4(tmp5[10]).DEFAULT_AVATARS;
    items1[1] = closure_1_5(Pile, obj2);
    const obj3 = {
      "aria-label": tmp4Result2.getListSummaryLabel(names2, names2.length),
      shape: ClipView.CutoutShape.RoundedRect,
      size: 48,
      gap: 2,
      depthX: tmp,
      depthY: tmp2,
      children: names2.map((value, index) => {
        const obj = { value, size: closure_1_0(closure_1_2[5]).GuildIconSizes.LARGE };
        const tmp = closure_1_1(closure_1_2[5]);
        return closure_1_5(tmp, obj, index);
      })
    };
    const Pile2 = tmp4(tmp5[13]).Pile;
    tmp4Result2 = ListUtils;
    items1[2] = closure_1_5(Pile2, obj3);
    return closure_1_6(Stack, obj, "" + tmp + "," + tmp2);
  });
  items[5] = metroRequire(SampleCard, obj8);
  return hasOwnProperty(React3, obj);
};
