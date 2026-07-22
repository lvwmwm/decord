// Module ID: 14939
// Function ID: 112450
// Name: ChannelItemEmbeddedActivities
// Dependencies: []
// Exports: default

// Module 14939 (ChannelItemEmbeddedActivities)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { overflow: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.overflowContainer = obj;
obj.container = {};
obj.modeMuted = { opacity: 0.3 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx");

export default function ChannelItemEmbeddedActivities(muted) {
  let embeddedApps;
  let size;
  ({ embeddedApps, size } = muted);
  if (size === undefined) {
    size = arg1(dependencyMap[5]).GameIconSizes.SIZE_24;
  }
  let modeMuted = muted.muted;
  const tmp3 = callback2();
  if (embeddedApps.length <= 0) {
    return null;
  } else if (1 === embeddedApps.length) {
    let obj = { game: embeddedApps[0].application, size };
    if (modeMuted) {
      modeMuted = tmp3.modeMuted;
    }
    obj.style = modeMuted;
    return callback(importDefault(dependencyMap[5]), obj);
  } else {
    const diff = embeddedApps.length - 1;
    const tmp16 = arg1(dependencyMap[5]).GameIconImageSize[size];
    obj = { style: tmp3.container };
    const obj1 = { game: embeddedApps[0].application, size };
    const obj2 = { marginRight: 4 };
    obj1.style = obj2;
    const items = [callback(importDefault(dependencyMap[5]), obj1), ];
    if (2 === embeddedApps.length) {
      obj = { game: embeddedApps[1].application, size };
      let tmp7 = callback(importDefault(dependencyMap[5]), obj);
    } else {
      const obj3 = {};
      const items1 = [tmp3.overflowContainer, ];
      const obj4 = { height: tmp16, minWidth: tmp16 };
      items1[1] = obj4;
      obj3.style = items1;
      const obj5 = { style: tmp3.overflow, variant: "text-xs/bold" };
      const _HermesInternal = HermesInternal;
      obj5.children = "+" + diff;
      obj3.children = callback(arg1(dependencyMap[6]).Text, obj5);
      tmp7 = callback(View, obj3);
    }
    items[1] = tmp7;
    obj.children = items;
    return closure_5(View, obj);
  }
};
