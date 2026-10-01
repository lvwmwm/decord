// Module ID: 10371
// Function ID: 10372
// Name: GroupDMAvatar
// Dependencies: [19, 17, 1372, 21, 1177, 4836, 8276, 504, 1370, 2]
// Exports: default

// Module 10371 (GroupDMAvatar)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1177 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ClipView from "ClipView" /* 8276 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
class FacepileGroupDMAvatar {
  constructor(arg0) {
    let accessibilityLabel;
    let accessible;
    let animate;
    let closure_0;
    let closure_1;
    let items2;
    let items3;
    let obj5;
    let obj8;
    let pileSizeOverride;
    let sources;
    let status;
    let style;
    let users;
    ({ size, animate, users, sources, pileSizeOverride } = arg0);
    _require = undefined;
    dependencyMap = undefined;
    ({ style, status, accessible, accessibilityLabel } = arg0);
    const tmp = closure_8();
    const tmp4 = require("native").AVATAR_SIZE_MAP[size];
    _require = tmp4;
    obj = react;
    let items = [tmp4];
    const memo = react.useMemo(() => {
      size = { width: height, height };
      return size;
    }, items);
    if (pileSizeOverride == null) {
      pileSizeOverride = obj[size];
    }
    const tmp7 = require("native").AVATAR_SIZE_MAP[pileSizeOverride];
    dependencyMap = tmp7;
    const items1 = [tmp4, tmp7];
    const obj2 = { style: items2, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
    items2 = [memo, style];
    const memo1 = obj.useMemo(() => {
      let items;
      const result = closure_1 / 2;
      const sum = result + 3;
      const result1 = 2 * sum;
      const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
      const diff = closure_0 - result - closure_1;
      const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
      const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
      obj = { nativeCutouts: items };
      const point = { shape: ClipView.CutoutShape.Circle, x: closure_1 - result1 - sum1, y: closure_1 - result1 - sum1, size: result1 };
      items = [point];
      return obj;
    }, items1);
    const obj3 = { style: tmp.firstFace, size: pileSizeOverride, guildId: "r", cutout: memo1, animate };
    const Avatar = tmp2(1177).Avatar;
    const tmp10 = View;
    const tmp9 = closure_6;
    if (null == users) {
      obj5 = { source: sources[0] };
      const obj4 = { source: sources[0] };
    } else {
      obj5 = { user: users[0] };
    }
    const merged = Object.assign(obj5);
    items3 = [closure_5(Avatar, obj3), ];
    const obj6 = { status, statusSizeOverride: require("native").StatusSizes.REFRESH_MEDIUM_10, autoStatusCutout: true, style: tmp.secondFace, size: pileSizeOverride, guildId: "Array", animate };
    const Avatar2 = tmp2(1177).Avatar;
    if (null == users) {
      obj8 = { source: sources[1] };
      const obj7 = { source: sources[1] };
    } else {
      obj8 = { user: users[1] };
    }
    const merged1 = Object.assign(obj8);
    items3[1] = closure_5(Avatar2, obj6);
    return tmp9(tmp10, obj2);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {};
obj[native.AvatarSizes.LARGE_48] = native.AvatarSizes.SMALL;
obj[native.AvatarSizes.XLARGE] = native.AvatarSizes.NORMAL;
obj[native.AvatarSizes.XXLARGE] = native.AvatarSizes.LARGE;
obj[native.AvatarSizes.PROFILE] = native.AvatarSizes.XXLARGE;
obj[native.AvatarSizes.REFRESH_MEDIUM_32] = native.AvatarSizes.XSMALL_20;
obj[native.AvatarSizes.XSMALL] = native.AvatarSizes.SIZE_16;
obj[native.AvatarSizes.SIZE_16] = native.AvatarSizes.XXSMALL_10;
obj[native.AvatarSizes.NORMAL] = native.AvatarSizes.XSMALL;
const metroImportAll = createStyles.createStyles({ firstFace: { position: "absolute", top: 0, left: 0 }, secondFace: { position: "absolute", bottom: 0, right: 0 } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  let accessibilityLabel;
  let accessible;
  let animate;
  let channel;
  let status;
  let style;
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  pileSizeOverride = pileSizeOverride.pileSizeOverride;
  const items = [UserStore];
  obj = channel(504);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    const recipients = channel.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const tmp = channel;
  if (null == channel.icon) {
    let tmp5;
    if (stateFromStoresArray.length > 1) {
      const obj2 = { status, style, size, animate, users: stateFromStoresArray, pileSizeOverride, accessible, accessibilityLabel };
      tmp5 = closure_5(FacepileGroupDMAvatar, obj2);
    }
    return tmp5;
  }
  tmp5 = closure_5(tmp(1177).Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
};
export { FacepileGroupDMAvatar };
