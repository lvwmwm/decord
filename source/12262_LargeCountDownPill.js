// Module ID: 12262
// Function ID: 94028
// Name: LargeCountDownPill
// Dependencies: []
// Exports: default

// Module 12262 (LargeCountDownPill)
const _module = require(dependencyMap[0]);
({ TouchableOpacity: closure_3, View: closure_4 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = _module1);
const _module2 = require(dependencyMap[2]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[3]).radii.round };
obj.largeCountdownPill = obj;
const obj1 = { "Bool(true)": 3, "Bool(true)": 2, "Bool(true)": "auto", "Bool(true)": 1, "Bool(true)": null, color: importDefault(dependencyMap[3]).colors.TEXT_STATUS_IDLE };
obj.largeCountdownPillText = obj1;
obj.iconStyle = { aze: "<string:16777479>", azj: "<string:36295491>" };
let closure_7 = _module2.createStyles(obj);
const _module3 = require(dependencyMap[8]);
const result = _module3.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  const tmp = callback3();
  const require = tmp;
  let obj = {
    onPress() {
      let obj = callback(closure_2[4]);
      obj = { key: "LARGE_COUNTDOWN_PILL_TOAST" };
      const intl = tmp(closure_2[5]).intl;
      obj.content = intl.string(tmp(closure_2[5]).t.Mv4E/M);
      obj.icon = function icon() {
        const obj = { style: lib.iconStyle, color: callback(closure_2[3]).colors.STATUS_WARNING };
        return callback2(lib(closure_2[6]).CircleInformationIcon, obj);
      };
      obj.iconColor = callback(closure_2[3]).colors.STATUS_WARNING;
      obj.open(obj);
    }
  };
  obj = { style: tmp.largeCountdownPill };
  obj = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() };
  const items = [callback(require(dependencyMap[7]).Text, obj), ];
  const obj1 = { style: tmp.iconStyle, color: importDefault(dependencyMap[3]).colors.TEXT_STATUS_IDLE };
  items[1] = callback(require(dependencyMap[6]).CircleInformationIcon, obj1);
  obj.children = items;
  obj.children = callback2(closure_4, obj);
  return callback(closure_3, obj);
};
