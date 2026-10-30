// Module ID: 12805
// Function ID: 12806
// Name: generateSourceMap
// Dependencies: [12806]

// Module 12805 (generateSourceMap)
let closure_1, dependencyMap, line;

let closure_2 = { Atrule: true, Selector: true, Declaration: true };

export default function generateSourceMap(node) {
  let sourceMapGenerator;
  sourceMapGenerator = new sourceMapGenerator(12806).SourceMapGenerator();
  dependencyMap = 1;
  const column = 0;
  let generated = { line: 1, column: 0 };
  const line2 = { line: 0, column: 0 };
  let c5 = false;
  generated = { line: 1, column: 0 };
  let closure_7 = { generated };
  node = node.node;
  node.node = function(loc) {
    let obj;
    if (loc.loc) {
      if (loc.loc.start) {
        if (column.hasOwnProperty(loc.type)) {
          line = loc.loc.start.line;
          const diff = loc.loc.start.column - 1;
          const tmp4 = line2.line === line && line2.column === diff;
          if (!tmp4) {
            line2.line = line;
            line2.column = diff;
            generated.line = line;
            generated.column = column;
            const tmp8 = c5;
            if (tmp8) {
              c5 = false;
              const tmp10 = generated.line === obj.line && generated.column === tmp9.column;
              if (!tmp10) {
                sourceMapGenerator.addMapping(closure_7);
              }
            }
            c5 = true;
            obj = { source: loc.loc.source, original: line2, generated };
            sourceMapGenerator.addMapping(obj);
          }
        }
      }
    }
    node.call(this, loc);
    const hasOwnPropertyResult = c5 && column.hasOwnProperty(loc.type);
    if (hasOwnPropertyResult) {
      obj.line = line;
      obj.column = column;
    }
  };
  const chunk = node.chunk;
  node.chunk = (str) => {
    let num;
    for (let num = 0; num < str.length; num = num + 1) {
      if (10 === str.charCodeAt(num)) {
        closure_1 = closure_1 + 1;
        closure_2 = 0;
      } else {
        closure_2 = closure_2 + 1;
      }
    }
    chunk(str);
  };
  const result = node.result;
  node.result = () => {
    const tmp = c5;
    if (tmp) {
      sourceMapGenerator.addMapping(closure_7);
    }
    const obj = { css: result(), map: sourceMapGenerator };
    return obj;
  };
  return node;
};
