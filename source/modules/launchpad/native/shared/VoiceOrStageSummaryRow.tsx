// Module ID: 15675
// Function ID: 120883
// Dependencies: [31, 27, 33, 4130, 689, 15659, 4126, 1273, 15352, 2]

// Module 15675
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles((height) => {
  let obj = { container: { flexDirection: "row", alignItems: "center", marginLeft: -2 } };
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(689).radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, width: height };
  obj.overflowCircle = obj;
  obj = { borderRadius: importDefault(689).radii.round, borderColor: importDefault(689).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderWidth: 2 };
  obj.wrapper = obj;
  const obj1 = { borderRadius: importDefault(689).radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj.badge = obj1;
  obj.audienceBadge = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const memoResult = require("result").memo(function VoiceOrStageSummaryRow(arg0) {
  let audienceCount;
  let importDefault;
  let max;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = arg0);
  let dependencyMap;
  let closure_3;
  let callback;
  const tmp = importDefault(15659)();
  dependencyMap = tmp;
  const size = tmp.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  let tmp2 = callback3(size);
  callback = tmp2;
  let obj = { style: items };
  items = [tmp2.container, ];
  obj = { height: size + 4 };
  items[1] = obj;
  let items1 = [
    users.map((user) => {
      if (arg1 < max) {
        if (arg1 === max - 1) {
          if (closure_3 > 0) {
            let obj = {};
            const items = [_undefined2.wrapper, ];
            let tmp16 = 0 !== arg1;
            if (tmp16) {
              obj = { marginLeft: -12 };
              tmp16 = obj;
            }
            items[1] = tmp16;
            obj.style = items;
            const obj1 = { style: _undefined2.overflowCircle };
            const obj2 = { variant: "text-xs/medium" };
            const _HermesInternal = HermesInternal;
            obj2.children = "+" + closure_3 + 1;
            obj1.children = _undefined2(max(_undefined[6]).Text, obj2);
            obj.children = _undefined2(closure_3, obj1);
            let tmp2Result = _undefined2(closure_3, obj, "overflow");
            const tmp13 = _undefined2;
            const tmp14 = closure_3;
          }
          return tmp2Result;
        }
        obj = {};
        const items1 = [_undefined2.wrapper, ];
        let tmp5 = 0 !== arg1;
        if (tmp5) {
          const obj3 = { marginLeft: -12 };
          tmp5 = obj3;
        }
        items1[1] = tmp5;
        obj.style = items1;
        const obj4 = { user, guildId: closure_1, size: _undefined.voiceOrStageSummaryRow.avatarSize };
        obj.children = _undefined2(max(_undefined[7]).Avatar, obj4);
        tmp2Result = _undefined2(closure_3, obj, arg1);
        const tmp2 = _undefined2;
        const tmp3 = closure_3;
      }
    }),

  ];
  let tmp6Result = null != audienceCount && audienceCount > 0;
  if (tmp6Result) {
    obj = {};
    const items2 = [tmp2.wrapper, ];
    let tmp8 = users.length > 0;
    if (tmp8) {
      let obj1 = { marginLeft: -12 };
      tmp8 = obj1;
    }
    items2[1] = tmp8;
    obj.style = items2;
    let obj2 = {};
    const items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp2);
    obj2.style = items3;
    let obj3 = { size: max(1273).Icon.Sizes.CUSTOM, style: { height: 14, width: 14 }, source: importDefault(15352) };
    const items4 = [callback(max(1273).Icon, obj3), ];
    let obj4 = { variant: "text-sm/bold" };
    const obj5 = { marginLeft: 4 };
    obj4.style = obj5;
    obj4.children = audienceCount;
    items4[1] = callback(max(4126).Text, obj4);
    obj2.children = items4;
    obj.children = callback2(closure_3, obj2);
    tmp6Result = callback(closure_3, obj);
    const tmp6 = callback;
    const tmp7 = closure_3;
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return callback2(closure_3, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx");

export default memoResult;
