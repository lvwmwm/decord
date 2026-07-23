// Module ID: 14461
// Function ID: 110478
// Name: SampleCard
// Dependencies: [31, 27, 33, 4130, 1273, 5515, 4541, 5167, 4126, 11950, 1395, 13089, 11651, 9909, 11652, 7873, 2]
// Exports: default

// Module 14461 (SampleCard)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function SampleCard(arg0) {
  let children;
  let noScroll;
  let title;
  ({ title, noScroll, children } = arg0);
  const tmp2 = callback(require(4541) /* Stack */.Stack, { spacing: 16, children });
  let obj = { style: callback3().card };
  const items = [callback(require(4126) /* Text */.Text, { variant: "text-lg/bold", children: title }), ];
  let tmp4 = tmp2;
  if (!noScroll) {
    obj = { horizontal: true, children: tmp2 };
    tmp4 = callback(closure_4, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_6(require(5167) /* getCardBackgroundToken */.Card, obj);
}
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "column", gap: 12, padding: 16 }, card: { gap: 12 } });
let items = [require("Button").AvatarSizes.XSMALL, require("Button").AvatarSizes.REFRESH_MEDIUM_32, require("Button").AvatarSizes.NORMAL, require("Button").AvatarSizes.LARGE_48, require("Button").AvatarSizes.XLARGE];
let items1 = [require("makeSizeStyle").GuildIconSizes.XSMALL, require("makeSizeStyle").GuildIconSizes.SMALL_32, require("makeSizeStyle").GuildIconSizes.NORMAL, require("makeSizeStyle").GuildIconSizes.LARGE, require("makeSizeStyle").GuildIconSizes.XLARGE];
let closure_10 = ["Clyde", "Phibi", "Cap"];
let closure_11 = ["test", "cats", "Evil Marcus", "robot overlords", "not a bug", "O M G"];
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default function UserSettingsDesignSystemPile() {
  let obj = {};
  obj = { style: callback3().container };
  obj = {
    title: "Avatar Pile",
    children: items.map((children) => {
      let closure_0 = children;
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = { size: children, names: outer1_10, totalCount: outer1_0(outer1_2[10]).DEFAULT_AVATARS.length };
      const DEFAULT_AVATARS = outer1_0(outer1_2[10]).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source) => outer2_5(outer2_0(outer2_2[4]).Avatar, { source, size: closure_0 }, arg1));
      items[1] = outer1_5(outer1_0(outer1_2[9]).AvatarPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  };
  items = [callback(SampleCard, obj), , , , , ];
  items[1] = callback(SampleCard, {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      let closure_0 = children;
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = { size: children, names: outer1_10, totalCount: 9500 };
      const DEFAULT_AVATARS = outer1_0(outer1_2[10]).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source) => outer2_5(outer2_0(outer2_2[4]).Avatar, { source, size: closure_0 }, arg1));
      items[1] = outer1_5(outer1_0(outer1_2[9]).AvatarPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  });
  let obj1 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      let closure_0 = children;
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = { size: children, names: outer1_10, totalCount: 9500 };
      const DEFAULT_AVATARS = outer1_0(outer1_2[10]).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source) => outer2_5(outer2_0(outer2_2[4]).Avatar, { source, size: closure_0 }, arg1));
      items[1] = outer1_5(outer1_0(outer1_2[9]).AvatarPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  };
  items[2] = callback(SampleCard, {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      let closure_0 = children;
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = { size: children, names: outer1_10.slice(0, 2) };
      const DEFAULT_AVATARS = outer1_0(outer1_2[10]).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj.children = substr.map((source) => outer2_5(outer2_0(outer2_2[4]).Avatar, { source, size: closure_0 }, arg1));
      items[1] = outer1_5(outer1_0(outer1_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  });
  let obj2 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      let closure_0 = children;
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = { size: children, names: outer1_10.slice(0, 2) };
      const DEFAULT_AVATARS = outer1_0(outer1_2[10]).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj.children = substr.map((source) => outer2_5(outer2_0(outer2_2[4]).Avatar, { source, size: closure_0 }, arg1));
      items[1] = outer1_5(outer1_0(outer1_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  };
  items[3] = callback(SampleCard, {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = {};
      const items1 = [children, outer1_0(outer1_2[4]).AvatarSizes.NORMAL];
      obj.size = items1;
      obj.names = outer1_10.slice(0, 2);
      const obj1 = { source: outer1_0(outer1_2[10]).DEFAULT_AVATARS[0], size: children };
      const items2 = [outer1_5(outer1_0(outer1_2[4]).Avatar, obj1), ];
      const obj2 = { source: outer1_0(outer1_2[10]).DEFAULT_AVATARS[1], size: outer1_0(outer1_2[4]).AvatarSizes.NORMAL };
      items2[1] = outer1_5(outer1_0(outer1_2[4]).Avatar, obj2);
      obj.children = items2;
      items[1] = outer1_6(outer1_0(outer1_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  });
  const obj3 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = {};
      const items1 = [children, outer1_0(outer1_2[4]).AvatarSizes.NORMAL];
      obj.size = items1;
      obj.names = outer1_10.slice(0, 2);
      const obj1 = { source: outer1_0(outer1_2[10]).DEFAULT_AVATARS[0], size: children };
      const items2 = [outer1_5(outer1_0(outer1_2[4]).Avatar, obj1), ];
      const obj2 = { source: outer1_0(outer1_2[10]).DEFAULT_AVATARS[1], size: outer1_0(outer1_2[4]).AvatarSizes.NORMAL };
      items2[1] = outer1_5(outer1_0(outer1_2[4]).Avatar, obj2);
      obj.children = items2;
      items[1] = outer1_6(outer1_0(outer1_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, children);
    })
  };
  items[4] = callback(SampleCard, {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      let closure_0 = size;
      let obj = {};
      obj = { variant: "text-md/medium", color: "text-subtle", children: size.toLowerCase() };
      const items = [outer1_5(outer1_0(outer1_2[8]).Text, obj), ];
      obj = { size, names: outer1_11, totalCount: 128, children: outer1_11.map((value) => outer2_5(outer2_1(outer2_2[5]), { value, size: closure_0 }, arg1)) };
      items[1] = outer1_5(outer1_0(outer1_2[12]).GuildIconPile, obj);
      obj.children = items;
      return outer1_6(outer1_0(outer1_2[6]).Stack, obj, size);
    })
  });
  const obj5 = { title: "Weird Piles", noScroll: true };
  const obj6 = { variant: "text-md/medium", color: "text-subtle", children: ["These examples explore the edge cases of the underlying ", "<Pile>", " component and aren't recommended uses."] };
  items1 = [callback2(require(4126) /* Text */.Text, obj6), ];
  let items2 = [[1, 1], [0.5, 0.5], [null, 0.5], [0.5, null], [0, 0.5], [0.5, 0], [0, 0]];
  items1[1] = items2.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = {};
    obj = { variant: "text-md/medium", color: "text-subtle" };
    let str = "null";
    let str2 = "null";
    if (null != tmp) {
      str2 = tmp;
    }
    const items = ["depthX=", str2, ", depthY="];
    if (null != tmp2) {
      str = tmp2;
    }
    items[3] = str;
    obj.children = items;
    const items1 = [outer1_6(outer1_0(outer1_2[8]).Text, obj), , ];
    obj = { "aria-label": outer1_0(outer1_2[14]).getListSummaryLabel(outer1_10, outer1_0(outer1_2[10]).DEFAULT_AVATARS.length), shape: outer1_0(outer1_2[15]).CutoutShape.Circle, size: 48, gap: 2, depthX: tmp, depthY: tmp2 };
    const DEFAULT_AVATARS = outer1_0(outer1_2[10]).DEFAULT_AVATARS;
    obj.children = DEFAULT_AVATARS.map((source) => {
      const obj = { source, size: outer2_0(outer2_2[4]).AvatarSizes.LARGE_48 };
      return outer2_5(outer2_0(outer2_2[4]).Avatar, obj, arg1);
    });
    items1[1] = outer1_5(outer1_0(outer1_2[13]).Pile, obj);
    const obj1 = {};
    const obj4 = outer1_0(outer1_2[14]);
    const tmp3 = outer1_6;
    const tmp4 = outer1_6;
    obj1["aria-label"] = outer1_0(outer1_2[14]).getListSummaryLabel(outer1_11, outer1_11.length);
    obj1.shape = outer1_0(outer1_2[15]).CutoutShape.RoundedRect;
    obj1.size = 48;
    obj1.gap = 2;
    obj1.depthX = tmp;
    obj1.depthY = tmp2;
    obj1.children = outer1_11.map((value) => {
      const obj = { value, size: outer2_0(outer2_2[5]).GuildIconSizes.LARGE };
      return outer2_5(outer2_1(outer2_2[5]), obj, arg1);
    });
    items1[2] = outer1_5(outer1_0(outer1_2[13]).Pile, obj1);
    obj.children = items1;
    return tmp3(outer1_0(outer1_2[6]).Stack, obj, "" + tmp + "," + tmp2);
  });
  obj5.children = items1;
  items[5] = callback2(SampleCard, obj5);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(closure_4, obj);
};
