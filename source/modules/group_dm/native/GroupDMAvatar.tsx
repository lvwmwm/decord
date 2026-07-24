// Module ID: 9134
// Function ID: 71460
// Name: FacepileGroupDMAvatar
// Dependencies: [31, 27, 1849, 33, 1273, 4130, 7961, 566, 1327, 2]
// Exports: default

// Module 9134 (FacepileGroupDMAvatar)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
class FacepileGroupDMAvatar {
  constructor(arg0) {
    ({ size, animate, users, sources, pileSizeOverride } = global);
    c1 = undefined;
    ({ style, status, accessible, accessibilityLabel } = global);
    tmp = c8();
    tmp2 = require("Button").AVATAR_SIZE_MAP[size];
    closure_0 = tmp2;
    items = [];
    items[0] = tmp2;
    memo = result.useMemo(() => ({ width: closure_0, height: closure_0 }), items);
    if (null == pileSizeOverride) {
      tmp4 = jsxs;
      pileSizeOverride = jsxs[size];
    }
    tmp5 = require("Button").AVATAR_SIZE_MAP[pileSizeOverride];
    c1 = tmp5;
    items1 = [, ];
    items1[0] = tmp2;
    items1[1] = tmp5;
    obj = { style: items2, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    items2 = [, ];
    items2[0] = memo;
    items2[1] = style;
    memo1 = result.useMemo(() => {
      const result = _undefined / 2;
      const sum = result + 3;
      const result1 = 2 * sum;
      const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
      const diff = tmp2 - result - _undefined;
      const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
      const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
      let obj = {};
      obj = { shape: tmp2(_undefined[6]).CutoutShape.Circle, x: _undefined - result1 - sum1, y: _undefined - result1 - sum1, size: result1 };
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
    items3[0] = tmp9(require("Button").Avatar, obj);
    tmp11 = jsx;
    obj3 = { status };
    obj3.statusSizeOverride = require("Button").StatusSizes.REFRESH_MEDIUM_10;
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
    items3[1] = tmp11(require("Button").Avatar, obj3);
    obj.children = items3;
    return tmp7(tmp8, obj);
  }
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj[require("Button").AvatarSizes.LARGE_48] = require("Button").AvatarSizes.SMALL;
obj[require("Button").AvatarSizes.XLARGE] = require("Button").AvatarSizes.NORMAL;
obj[require("Button").AvatarSizes.XXLARGE] = require("Button").AvatarSizes.LARGE;
obj[require("Button").AvatarSizes.PROFILE] = require("Button").AvatarSizes.XXLARGE;
obj[require("Button").AvatarSizes.REFRESH_MEDIUM_32] = require("Button").AvatarSizes.XSMALL_20;
obj[require("Button").AvatarSizes.XSMALL] = require("Button").AvatarSizes.SIZE_16;
obj[require("Button").AvatarSizes.SIZE_16] = require("Button").AvatarSizes.XXSMALL_10;
obj[require("Button").AvatarSizes.NORMAL] = require("Button").AvatarSizes.XSMALL;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ firstFace: { position: "absolute", top: 0, left: 0 }, secondFace: { position: "absolute", bottom: 0, right: 0 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default function GroupDMAvatar(pileSizeOverride) {
  let accessibilityLabel;
  let accessible;
  let animate;
  let channel;
  let size;
  let status;
  let style;
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((arg0) => outer2_4.getUser(arg0));
    return mapped.filter(channel(outer1_1[8]).isNotNullish);
  });
  if (null == channel.icon) {
    if (0 !== channel.recipients.length) {
      if (0 !== stateFromStoresArray.length) {
        if (1 === stateFromStoresArray.length) {
          obj = { autoStatusCutout: true, status, style, size, user: stateFromStoresArray[0], guildId: undefined, animate, accessible, accessibilityLabel };
          let tmp3 = callback(channel(1273).Avatar, obj);
        } else {
          obj = { status, style, size, animate, users: stateFromStoresArray, pileSizeOverride: pileSizeOverride.pileSizeOverride, accessible, accessibilityLabel };
          tmp3 = callback(FacepileGroupDMAvatar, obj);
        }
      }
      return tmp3;
    }
  }
  tmp3 = callback(channel(1273).Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
};
export { FacepileGroupDMAvatar };
