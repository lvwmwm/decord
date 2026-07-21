// Module ID: 8903
// Function ID: 70258
// Name: SecureFramesCodeGrid
// Dependencies: []
// Exports: default

// Module 8903 (SecureFramesCodeGrid)
function SecureFramesCodeGrid(chunks) {
  chunks = chunks.chunks;
  const arg1 = chunks;
  const columns = chunks.columns;
  const dependencyMap = columns;
  const React = callback3();
  const items = [chunks, columns];
  const memo = React.useMemo(() => {
    const items = [];
    const rounded = Math.ceil(chunks.length / columns);
    for (let num = 0; num < rounded; num = num + 1) {
      let items1 = [];
      let tmp2 = columns;
      for (let num2 = 0; num2 < columns; num2 = num2 + 1) {
        let tmp3 = columns;
        let tmp4 = chunks;
        let arr = items1.push(chunks[num * closure_1 + num2]);
      }
      arr = items.push(items1);
    }
    return items;
  }, items);
  return callback(closure_7, {
    children: memo.map((arr) => {
      let obj = {};
      obj = {
        style: closure_2.row,
        children: arr.map((children) => {
          const obj = { "Null": "absolute", "Null": 0, "Null": "center", style: codeText.codeText, children };
          return callback2(callback(closure_1[6]).Text, obj, "" + children + "-" + arg1);
        })
      };
      const items = [callback(closure_4, obj), ];
      let tmp3 = arg1 < memo.length - 1;
      if (tmp3) {
        obj = { style: closure_2.divider };
        tmp3 = callback(closure_4, obj);
      }
      items[1] = tmp3;
      obj.children = items;
      return closure_6(closure_4, obj, "" + arr.join(" ") + "-" + arg1);
    })
  });
}
let closure_2 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { codeText: obj, row: {} };
obj = { fontFamily: arg1(dependencyMap[2]).Fonts.CODE_NORMAL };
const tmp3 = arg1(dependencyMap[3]);
obj.divider = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const obj2 = { "Bool(true)": 2417, "Bool(true)": 1335906816, "Bool(true)": 38863776, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024127092873514, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012304659412004518, "Bool(true)": 8589287440, "Bool(true)": 27497739583751.527, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001771166227257366, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderTopRightRadius: importDefault(dependencyMap[5]).radii.lg, borderTopLeftRadius: importDefault(dependencyMap[5]).radii.lg };
obj.codeHeader = obj2;
const obj3 = { <string:3773516041>: null, <string:1364287843>: null, <string:425876624>: null, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderBottomRightRadius: importDefault(dependencyMap[5]).radii.lg, borderBottomLeftRadius: importDefault(dependencyMap[5]).radii.lg };
obj.code = obj3;
obj.loading = { minHeight: 126 };
let closure_8 = obj.createStyles(obj);
const obj1 = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rtc/native/SecureFramesCode.tsx");

export default function SecureFramesCode(chunks) {
  let columns;
  let title;
  let trailing;
  chunks = chunks.chunks;
  ({ title, trailing, columns } = chunks);
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.codeHeader };
  const items = [callback(arg1(dependencyMap[6]).Text, { children: title }), trailing];
  obj.children = items;
  const items1 = [callback2(closure_4, obj), ];
  obj = { style: tmp.code };
  if (null != chunks) {
    const obj1 = { chunks, columns };
    let tmp8 = callback(SecureFramesCodeGrid, obj1);
  } else {
    const obj2 = { style: tmp.loading };
    tmp8 = callback(closure_3, obj2);
  }
  obj.children = tmp8;
  items1[1] = callback(closure_4, obj);
  obj.children = items1;
  return callback2(closure_7, obj);
};
