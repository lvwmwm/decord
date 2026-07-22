// Module ID: 9089
// Function ID: 71207
// Name: FacepileGroupDMAvatar
// Dependencies: []
// Exports: default

// Module 9089 (FacepileGroupDMAvatar)
class FacepileGroupDMAvatar {
  constructor(arg0) {
    ({ size, animate, users, sources, pileSizeOverride } = global);
    closure_1 = undefined;
    ({ style, status, accessible, accessibilityLabel } = global);
    tmp = closure_8();
    tmp2 = arg1(closure_1[4]).AVATAR_SIZE_MAP[size];
    arg1 = tmp2;
    items = [];
    items[0] = tmp2;
    memo = importAll.useMemo(() => ({ width: tmp2, height: tmp2 }), items);
    if (null == pileSizeOverride) {
      tmp4 = jsxs;
      pileSizeOverride = jsxs[size];
    }
    tmp5 = arg1(closure_1[4]).AVATAR_SIZE_MAP[pileSizeOverride];
    closure_1 = tmp5;
    items1 = [, ];
    items1[0] = tmp2;
    items1[1] = tmp5;
    obj = { style: items2, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    items2 = [, ];
    items2[0] = memo;
    items2[1] = style;
    memo1 = importAll.useMemo(() => {
      const result = tmp5 / 2;
      const sum = result + 3;
      const result1 = 2 * sum;
      const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
      const diff = tmp2 - result - tmp5;
      const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
      const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
      let obj = {};
      obj = { shape: tmp2(tmp5[6]).CutoutShape.Circle, x: tmp5 - result1 - sum1, y: tmp5 - result1 - sum1, size: result1 };
      const items = [obj];
      obj.nativeCutouts = items;
      return obj;
    }, items1);
    tmp7 = jsxs;
    tmp8 = View;
    tmp9 = jsx;
    obj = { style: tmp.firstFace };
    obj.size = pileSizeOverride;
    obj.guildId = undefined;
    obj.cutout = memo1;
    obj.animate = animate;
    if (null == users) {
      obj1 = {};
      num2 = 0;
      obj1.source = sources[0];
      obj2 = obj1;
    } else {
      obj2 = {};
      num = 0;
      obj2.user = users[0];
    }
    merged = Object.assign(obj2);
    items3 = [, ];
    items3[0] = tmp9(arg1(closure_1[4]).Avatar, obj);
    tmp11 = jsx;
    obj3 = { status };
    obj3.statusSizeOverride = arg1(closure_1[4]).StatusSizes.REFRESH_MEDIUM_10;
    obj3.autoStatusCutout = true;
    obj3.style = tmp.secondFace;
    obj3.size = pileSizeOverride;
    obj3.guildId = undefined;
    obj3.animate = animate;
    if (null == users) {
      obj4 = {};
      num4 = 1;
      obj4.source = sources[1];
      obj5 = obj4;
    } else {
      obj5 = {};
      num3 = 1;
      obj5.user = users[1];
    }
    merged1 = Object.assign(obj5);
    items3[1] = tmp11(arg1(closure_1[4]).Avatar, obj3);
    obj.children = items3;
    return tmp7(tmp8, obj);
  }
}
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const obj = {};
obj[arg1(dependencyMap[4]).AvatarSizes.LARGE_48] = arg1(dependencyMap[4]).AvatarSizes.SMALL;
obj[arg1(dependencyMap[4]).AvatarSizes.XLARGE] = arg1(dependencyMap[4]).AvatarSizes.NORMAL;
obj[arg1(dependencyMap[4]).AvatarSizes.XXLARGE] = arg1(dependencyMap[4]).AvatarSizes.LARGE;
obj[arg1(dependencyMap[4]).AvatarSizes.PROFILE] = arg1(dependencyMap[4]).AvatarSizes.XXLARGE;
obj[arg1(dependencyMap[4]).AvatarSizes.REFRESH_MEDIUM_32] = arg1(dependencyMap[4]).AvatarSizes.XSMALL_20;
obj[arg1(dependencyMap[4]).AvatarSizes.XSMALL] = arg1(dependencyMap[4]).AvatarSizes.SIZE_16;
obj[arg1(dependencyMap[4]).AvatarSizes.SIZE_16] = arg1(dependencyMap[4]).AvatarSizes.XXSMALL_10;
obj[arg1(dependencyMap[4]).AvatarSizes.NORMAL] = arg1(dependencyMap[4]).AvatarSizes.XSMALL;
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ firstFace: {}, secondFace: {} });
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  let accessibilityLabel;
  let accessible;
  let animate;
  let channel;
  let size;
  let status;
  let style;
  ({ style, channel } = pileSizeOverride);
  const arg1 = channel;
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((arg0) => user.getUser(arg0));
    return mapped.filter(channel(closure_1[8]).isNotNullish);
  });
  if (null == channel.icon) {
    if (0 !== channel.recipients.length) {
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          obj = { autoStatusCutout: true, status, style, size, user: stateFromStoresArray[0], guildId: undefined, animate, accessible, accessibilityLabel };
          let tmp3 = callback(arg1(dependencyMap[4]).Avatar, obj);
        } else {
          obj = { status, style, size, animate, users: stateFromStoresArray, pileSizeOverride: pileSizeOverride.pileSizeOverride, accessible, accessibilityLabel };
          tmp3 = callback(FacepileGroupDMAvatar, obj);
        }
      }
      return tmp3;
    }
  }
  tmp3 = callback(arg1(dependencyMap[4]).Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
};
export { FacepileGroupDMAvatar };
