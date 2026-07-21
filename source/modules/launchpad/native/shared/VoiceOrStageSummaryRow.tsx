// Module ID: 15547
// Function ID: 118628
// Dependencies: []

// Module 15547
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles((height) => {
  let obj = { container: { 1565611617: false, 1374314913: false, -413041735: false } };
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[4]).radii.round, height, width: height };
  obj.overflowCircle = obj;
  obj = { borderRadius: importDefault(dependencyMap[4]).radii.round, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderWidth: 2 };
  obj.wrapper = obj;
  const obj1 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, backgroundColor: false, borderRadius: importDefault(dependencyMap[4]).radii.round, height };
  obj.badge = obj1;
  obj.audienceBadge = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function VoiceOrStageSummaryRow(arg0) {
  let audienceCount;
  let max;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  const arg1 = max;
  ({ guildId: closure_1, audienceCount } = arg0);
  let dependencyMap;
  let closure_3;
  let tmp2;
  const tmp = importDefault(dependencyMap[5])();
  dependencyMap = tmp;
  const size = tmp.voiceOrStageSummaryRow.size;
  closure_3 = Math.max(users.length - max, 0);
  tmp2 = callback2(size);
  let obj = { style: items };
  const items = [tmp2.container, ];
  obj = { height: size + 4 };
  items[1] = obj;
  const items1 = [
    users.map((user) => {
      if (arg1 < max) {
        if (arg1 === max - 1) {
          if (closure_3 > 0) {
            let obj = {};
            const items = [tmp2.wrapper, ];
            let tmp16 = 0 !== arg1;
            if (tmp16) {
              obj = { marginLeft: -12 };
              tmp16 = obj;
            }
            items[1] = tmp16;
            obj.style = items;
            const obj1 = { style: tmp2.overflowCircle };
            const obj2 = { variant: "text-xs/medium" };
            const _HermesInternal = HermesInternal;
            obj2.children = "+" + closure_3 + 1;
            obj1.children = tmp2(max(tmp[6]).Text, obj2);
            obj.children = tmp2(closure_3, obj1);
            let tmp2Result = tmp2(closure_3, obj, "overflow");
            const tmp13 = tmp2;
            const tmp14 = closure_3;
          }
          return tmp2Result;
        }
        obj = {};
        const items1 = [tmp2.wrapper, ];
        let tmp5 = 0 !== arg1;
        if (tmp5) {
          const obj3 = { marginLeft: -12 };
          tmp5 = obj3;
        }
        items1[1] = tmp5;
        obj.style = items1;
        const obj4 = { user, guildId: closure_1, size: tmp.voiceOrStageSummaryRow.avatarSize };
        obj.children = tmp2(max(tmp[7]).Avatar, obj4);
        tmp2Result = tmp2(closure_3, obj, arg1);
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
      const obj1 = { marginLeft: -12 };
      tmp8 = obj1;
    }
    items2[1] = tmp8;
    obj.style = items2;
    const obj2 = {};
    const items3 = [, ];
    ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp2);
    obj2.style = items3;
    const obj3 = { size: arg1(dependencyMap[7]).Icon.Sizes.CUSTOM, style: { <string:1632221346>: "Array", <string:2722977214>: "isPrivate" }, source: importDefault(dependencyMap[8]) };
    const items4 = [tmp2(arg1(dependencyMap[7]).Icon, obj3), ];
    const obj4 = { variant: "text-sm/bold" };
    const obj5 = { marginLeft: 4 };
    obj4.style = obj5;
    obj4.children = audienceCount;
    items4[1] = tmp2(arg1(dependencyMap[6]).Text, obj4);
    obj2.children = items4;
    obj.children = callback(closure_3, obj2);
    tmp6Result = tmp2(closure_3, obj);
    const tmp6 = tmp2;
    const tmp7 = closure_3;
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return callback(closure_3, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx");

export default memoResult;
