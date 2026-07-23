// Module ID: 15351
// Function ID: 117208
// Dependencies: [31, 27, 33, 4130, 689, 10261, 4126, 1273, 15352, 2]

// Module 15351
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
const memoResult = require("result").memo(function VoiceOrStageSummaryRow(layout) {
  let audienceCount;
  let importDefault;
  let max;
  let users;
  ({ users, max } = layout);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount } = layout);
  let layoutStyles;
  let closure_3;
  let callback;
  let obj = max(layoutStyles[5]);
  layoutStyles = obj.getLayoutStyles(layout.layout);
  const size = layoutStyles.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  let tmp2 = callback3(size);
  callback = tmp2;
  obj = { style: items };
  items = [tmp2.container, ];
  obj = { height: size + 4 };
  items[1] = obj;
  let items1 = [
    users.map((user) => {
      if (arg1 < max) {
        if (arg1 === max - 1) {
          if (closure_3 > 0) {
            let obj = {};
            const items = [_undefined.wrapper, ];
            let tmp16 = 0 !== arg1;
            if (tmp16) {
              obj = { marginLeft: -12 };
              tmp16 = obj;
            }
            items[1] = tmp16;
            obj.style = items;
            const obj1 = { style: _undefined.overflowCircle };
            const obj2 = { variant: "text-xs/medium" };
            const _HermesInternal = HermesInternal;
            obj2.children = "+" + closure_3 + 1;
            obj1.children = _undefined(max(layoutStyles[6]).Text, obj2);
            obj.children = _undefined(closure_3, obj1);
            let tmp2Result = _undefined(closure_3, obj, "overflow");
            const tmp13 = _undefined;
            const tmp14 = closure_3;
          }
          return tmp2Result;
        }
        obj = {};
        const items1 = [_undefined.wrapper, ];
        let tmp5 = 0 !== arg1;
        if (tmp5) {
          const obj3 = { marginLeft: -12 };
          tmp5 = obj3;
        }
        items1[1] = tmp5;
        obj.style = items1;
        const obj4 = { user, guildId: closure_1, size: layoutStyles.voiceOrStageSummaryRow.avatarSize };
        obj.children = _undefined(max(layoutStyles[7]).Avatar, obj4);
        tmp2Result = _undefined(closure_3, obj, arg1);
        const tmp2 = _undefined;
        const tmp3 = closure_3;
      }
    }),

  ];
  let tmp6Result = null != audienceCount && audienceCount > 0;
  if (tmp6Result) {
    let obj1 = {};
    const items2 = [tmp2.wrapper, ];
    let tmp8 = users.length > 0;
    if (tmp8) {
      let obj2 = { marginLeft: -12 };
      tmp8 = obj2;
    }
    items2[1] = tmp8;
    obj1.style = items2;
    let obj3 = {};
    const items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp2);
    obj3.style = items3;
    let obj4 = { size: max(layoutStyles[7]).Icon.Sizes.CUSTOM, style: { height: 14, width: 14 }, source: importDefault(layoutStyles[8]) };
    const items4 = [callback(max(layoutStyles[7]).Icon, obj4), ];
    const obj5 = { variant: "text-sm/bold" };
    const obj6 = { marginLeft: 4 };
    obj5.style = obj6;
    obj5.children = audienceCount;
    items4[1] = callback(max(layoutStyles[6]).Text, obj5);
    obj3.children = items4;
    obj1.children = callback2(closure_3, obj3);
    tmp6Result = callback(closure_3, obj1);
    const tmp6 = callback;
    const tmp7 = closure_3;
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return callback2(closure_3, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx");

export default memoResult;
