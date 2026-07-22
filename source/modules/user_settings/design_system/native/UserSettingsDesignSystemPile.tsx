// Module ID: 14347
// Function ID: 108325
// Name: SampleCard
// Dependencies: [0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14347 (SampleCard)
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function SampleCard(arg0) {
  let children;
  let noScroll;
  let title;
  ({ title, noScroll, children } = arg0);
  const tmp2 = callback(arg1(dependencyMap[6]).Stack, { spacing: 16, children });
  let obj = { style: callback3().card };
  const items = [callback(arg1(dependencyMap[8]).Text, { variant: "text-lg/bold", children: title }), ];
  let tmp4 = tmp2;
  if (!noScroll) {
    obj = { horizontal: true, children: tmp2 };
    tmp4 = callback(closure_4, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_6(arg1(dependencyMap[7]).Card, obj);
}
({ View: closure_3, ScrollView: closure_4 } = __exportStarResult1);
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
let closure_7 = __exportStarResult1.createStyles({ container: {}, card: { gap: 12 } });
const items = [arg1(dependencyMap[4]).AvatarSizes.XSMALL, arg1(dependencyMap[4]).AvatarSizes.REFRESH_MEDIUM_32, arg1(dependencyMap[4]).AvatarSizes.NORMAL, arg1(dependencyMap[4]).AvatarSizes.LARGE_48, arg1(dependencyMap[4]).AvatarSizes.XLARGE];
const items1 = [require("__exportStarResult1").GuildIconSizes.XSMALL, require("__exportStarResult1").GuildIconSizes.SMALL_32, require("__exportStarResult1").GuildIconSizes.NORMAL, require("__exportStarResult1").GuildIconSizes.LARGE, require("__exportStarResult1").GuildIconSizes.XLARGE];
let closure_10 = ["toString", "prototype", "default"];
let closure_11 = ["Array", "isArray", "application", "paddingHorizontal", "a", "isArray"];
const result = __exportStarResult1.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemPile.tsx");

export default function UserSettingsDesignSystemPile() {
  let obj = {};
  obj = { style: callback3().container };
  obj = {
    title: "Avatar Pile",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(children(closure_2[8]).Text, obj), ];
      obj = { size: children, names: closure_10, totalCount: children(closure_2[10]).DEFAULT_AVATARS.length };
      const DEFAULT_AVATARS = children(closure_2[10]).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source) => callback(source(closure_2[4]).Avatar, { source, size: source }, arg1));
      items[1] = callback2(children(closure_2[9]).AvatarPile, obj);
      obj.children = items;
      return callback3(children(closure_2[6]).Stack, obj, children);
    })
  };
  const items = [callback(SampleCard, obj), , , , , ];
  items[1] = callback(SampleCard, {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(children(closure_2[8]).Text, obj), ];
      obj = { size: children, names: closure_10, totalCount: 9500 };
      const DEFAULT_AVATARS = children(closure_2[10]).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source) => callback(source(closure_2[4]).Avatar, { source, size: source }, arg1));
      items[1] = callback2(children(closure_2[9]).AvatarPile, obj);
      obj.children = items;
      return callback3(children(closure_2[6]).Stack, obj, children);
    })
  });
  const obj1 = {
    title: "Avatar Pile (with overflow)",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(children(closure_2[8]).Text, obj), ];
      obj = { size: children, names: closure_10, totalCount: 9500 };
      const DEFAULT_AVATARS = children(closure_2[10]).DEFAULT_AVATARS;
      obj.children = DEFAULT_AVATARS.map((source) => callback(source(closure_2[4]).Avatar, { source, size: source }, arg1));
      items[1] = callback2(children(closure_2[9]).AvatarPile, obj);
      obj.children = items;
      return callback3(children(closure_2[6]).Stack, obj, children);
    })
  };
  items[2] = callback(SampleCard, {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(children(closure_2[8]).Text, obj), ];
      obj = { size: children, names: arr.slice(0, 2) };
      const DEFAULT_AVATARS = children(closure_2[10]).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj.children = substr.map((source) => callback(source(closure_2[4]).Avatar, { source, size: source }, arg1));
      items[1] = callback2(children(closure_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return callback3(children(closure_2[6]).Stack, obj, children);
    })
  });
  const obj2 = {
    title: "Avatar Duo Pile",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(children(closure_2[8]).Text, obj), ];
      obj = { size: children, names: arr.slice(0, 2) };
      const DEFAULT_AVATARS = children(closure_2[10]).DEFAULT_AVATARS;
      const substr = DEFAULT_AVATARS.slice(0, 2);
      obj.children = substr.map((source) => callback(source(closure_2[4]).Avatar, { source, size: source }, arg1));
      items[1] = callback2(children(closure_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return callback3(children(closure_2[6]).Stack, obj, children);
    })
  };
  items[3] = callback(SampleCard, {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(callback(closure_2[8]).Text, obj), ];
      obj = {};
      const items1 = [children, callback(closure_2[4]).AvatarSizes.NORMAL];
      obj.size = items1;
      obj.names = arr.slice(0, 2);
      const obj1 = { source: callback(closure_2[10]).DEFAULT_AVATARS[0], size: children };
      const items2 = [callback2(callback(closure_2[4]).Avatar, obj1), ];
      const obj2 = { source: callback(closure_2[10]).DEFAULT_AVATARS[1], size: callback(closure_2[4]).AvatarSizes.NORMAL };
      items2[1] = callback2(callback(closure_2[4]).Avatar, obj2);
      obj.children = items2;
      items[1] = callback3(callback(closure_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return callback3(callback(closure_2[6]).Stack, obj, children);
    })
  });
  const obj3 = {
    title: "Avatar Duo Pile (different sizes)",
    children: items.map((children) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children };
      const items = [callback2(callback(closure_2[8]).Text, obj), ];
      obj = {};
      const items1 = [children, callback(closure_2[4]).AvatarSizes.NORMAL];
      obj.size = items1;
      obj.names = arr.slice(0, 2);
      const obj1 = { source: callback(closure_2[10]).DEFAULT_AVATARS[0], size: children };
      const items2 = [callback2(callback(closure_2[4]).Avatar, obj1), ];
      const obj2 = { source: callback(closure_2[10]).DEFAULT_AVATARS[1], size: callback(closure_2[4]).AvatarSizes.NORMAL };
      items2[1] = callback2(callback(closure_2[4]).Avatar, obj2);
      obj.children = items2;
      items[1] = callback3(callback(closure_2[11]).AvatarDuoPile, obj);
      obj.children = items;
      return callback3(callback(closure_2[6]).Stack, obj, children);
    })
  };
  items[4] = callback(SampleCard, {
    title: "Guild Icon Pile (with overflow)",
    children: items1.map((size) => {
      let obj = {};
      obj = { cachedAt: 3, edpbxy: null, children: size.toLowerCase() };
      const items = [callback2(size(closure_2[8]).Text, obj), ];
      obj = { size, names: closure_11, totalCount: 128, children: closure_11.map((value) => callback2(callback(closure_2[5]), { value, size: value }, arg1)) };
      items[1] = callback2(size(closure_2[12]).GuildIconPile, obj);
      obj.children = items;
      return callback3(size(closure_2[6]).Stack, obj, size);
    })
  });
  const obj5 = { 0: false, 0: false };
  const obj6 = { cachedAt: 3, edpbxy: null, children: [null, null, null] };
  const items1 = [callback2(arg1(dependencyMap[8]).Text, obj6), ];
  const items2 = [[], [0, 6.571], [null, null], [true, true], [-447601326, 1659789871], ["borderRadius", "transform"], ["placeholder", "aria-label"]];
  items1[1] = items2.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    let obj = {};
    obj = { cachedAt: 3, edpbxy: null };
    let str = "null";
    let str2 = "null";
    if (null != tmp) {
      str2 = tmp;
    }
    const items = [false, str2, ", depthY="];
    if (null != tmp2) {
      str = tmp2;
    }
    items[3] = str;
    obj.children = items;
    const items1 = [closure_6(callback(closure_2[8]).Text, obj), , ];
    obj = { aria-label: callback(closure_2[14]).getListSummaryLabel(closure_10, callback(closure_2[10]).DEFAULT_AVATARS.length), shape: callback(closure_2[15]).CutoutShape.Circle, size: 48, gap: 2, depthX: tmp, depthY: tmp2 };
    const DEFAULT_AVATARS = callback(closure_2[10]).DEFAULT_AVATARS;
    obj.children = DEFAULT_AVATARS.map((source) => {
      const obj = { source, size: callback(closure_2[4]).AvatarSizes.LARGE_48 };
      return callback3(callback(closure_2[4]).Avatar, obj, arg1);
    });
    items1[1] = callback2(callback(closure_2[13]).Pile, obj);
    const obj1 = {};
    const obj4 = callback(closure_2[14]);
    const tmp3 = closure_6;
    const tmp4 = closure_6;
    obj1.aria-label = callback(closure_2[14]).getListSummaryLabel(closure_11, closure_11.length);
    obj1.shape = callback(closure_2[15]).CutoutShape.RoundedRect;
    obj1.size = 48;
    obj1.gap = 2;
    obj1.depthX = tmp;
    obj1.depthY = tmp2;
    obj1.children = closure_11.map((value) => {
      const obj = { value, size: callback(closure_2[5]).GuildIconSizes.LARGE };
      return callback3(callback2(closure_2[5]), obj, arg1);
    });
    items1[2] = callback2(callback(closure_2[13]).Pile, obj1);
    obj.children = items1;
    return tmp3(callback(closure_2[6]).Stack, obj, "" + tmp + "," + tmp2);
  });
  obj5.children = items1;
  items[5] = callback2(SampleCard, obj5);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(closure_4, obj);
};
