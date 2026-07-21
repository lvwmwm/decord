// Module ID: 8516
// Function ID: 67899
// Name: getBotLabel
// Dependencies: []

// Module 8516 (getBotLabel)
function getBotLabel(BOT) {
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    if (BotTagTypes.OFFICIAL !== BOT) {
      if (BotTagTypes.SERVER === BOT) {
        const intl2 = arg1(dependencyMap[6]).intl;
        let stringResult = intl2.string(arg1(dependencyMap[6]).t.PuJGuM);
      } else {
        const BOT2 = BotTagTypes.BOT;
        const intl = arg1(dependencyMap[6]).intl;
        stringResult = intl.string(arg1(dependencyMap[6]).t.9RNkeF);
      }
    }
    return stringResult;
  }
  const intl3 = arg1(dependencyMap[6]).intl;
  stringResult = intl3.string(arg1(dependencyMap[6]).t.lKQ7Wt);
}
class BotTag {
  constructor(arg0) {
    flag = global.invertColor;
    if (flag === undefined) {
      flag = false;
    }
    BOT = global.type;
    if (BOT === undefined) {
      tmp = BotTagTypes;
      BOT = BotTagTypes.BOT;
    }
    verified = global.verified;
    tmp2 = closure_7();
    tmp4 = BOT === BotTagTypes.OFFICIAL;
    tmp3 = getBotLabel(BOT);
    if (!tmp4) {
      tmp5 = BotTagTypes;
      tmp4 = BOT === BotTagTypes.SYSTEM_DM;
    }
    if (!verified) {
      verified = tmp4;
    }
    tmp6 = null;
    if (verified) {
      tmp7 = jsx;
      tmp8 = arg1;
      tmp9 = dependencyMap;
      num = 7;
      obj = {};
      str = "xs";
      obj.size = "xs";
      tmp10 = importDefault;
      num2 = 5;
      obj.color = importDefault(dependencyMap[5]).colors.WHITE;
      tmp6 = jsx(arg1(dependencyMap[7]).CheckmarkSmallBoldIcon, obj);
    }
    prop = null;
    tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
    tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
    if (null != tmp6) {
      prop = tmp2.verifiedTagLeftPadding;
    }
    if (tmp4) {
      tmp22 = arg1;
      tmp23 = dependencyMap;
      num6 = 6;
      intl4 = arg1(dependencyMap[6]).intl;
      stringResult = intl4.string(arg1(dependencyMap[6]).t.7s687k);
    } else if (verified) {
      tmp20 = arg1;
      tmp21 = dependencyMap;
      num5 = 6;
      intl3 = arg1(dependencyMap[6]).intl;
      stringResult = intl3.string(arg1(dependencyMap[6]).t.g76OcH);
    } else {
      tmp14 = BotTagTypes;
      if (BOT === BotTagTypes.SERVER) {
        tmp18 = arg1;
        tmp19 = dependencyMap;
        num4 = 6;
        intl2 = arg1(dependencyMap[6]).intl;
        stringResult = intl2.string(arg1(dependencyMap[6]).t.39trQT);
      } else {
        tmp15 = arg1;
        tmp16 = dependencyMap;
        num3 = 6;
        intl = arg1(dependencyMap[6]).intl;
        stringResult = intl.string(arg1(dependencyMap[6]).t.qwJHjo);
      }
    }
    obj = { style: items };
    items = [, , , ];
    items[0] = tmp2.tag;
    items[1] = tmp11;
    items[2] = global.style;
    items[3] = prop;
    obj.accessibilityLabel = stringResult;
    items1 = [, ];
    items1[0] = tmp6;
    obj1 = { -985534194: false, 1392510081: false, -1314149359: false };
    items2 = [];
    items2[0] = tmp12;
    obj1.style = items2;
    obj1.children = tmp3;
    items1[1] = jsx(arg1(dependencyMap[8]).Text, obj1);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const BotTagTypes = arg1(dependencyMap[2]).BotTagTypes;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.tag = obj;
obj.verifiedTagLeftPadding = { paddingLeft: 1 };
const tmp3 = arg1(dependencyMap[3]);
obj.tagNormal = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.tagInverted = { backgroundColor: importDefault(dependencyMap[5]).colors.WHITE };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.WHITE };
obj.tagTextNormal = { color: importDefault(dependencyMap[5]).colors.WHITE };
const obj3 = { color: importDefault(dependencyMap[5]).colors.WHITE };
obj.tagTextInverted = { color: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
let closure_7 = obj.createStyles(obj);
BotTag.Types = BotTagTypes;
const obj4 = { color: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };
