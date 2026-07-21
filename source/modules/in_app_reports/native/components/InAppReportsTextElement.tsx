// Module ID: 7613
// Function ID: 61013
// Name: TextElement
// Dependencies: []
// Exports: default

// Module 7613 (TextElement)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {}, header: { marginBottom: 8 }, body: { marginBottom: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextElement.tsx");

export default function TextElement(element) {
  let body;
  let header;
  const data = element.element.data;
  ({ header, body } = data);
  const tmp = callback2();
  let obj = importAll(dependencyMap[4]);
  let tmp2 = null;
  if (data.is_localized) {
    if (null != header) {
      obj = { style: tmp.container };
      let tmp6 = null != header;
      if (tmp6) {
        obj = { style: tmp.header, children: header };
        tmp6 = callback(arg1(dependencyMap[5]).Text, obj);
      }
      const items = [tmp6, ];
      let tmp10 = null != body;
      if (tmp10) {
        const obj1 = { style: tmp.body, variant: "text-md/medium", children: ref.current(body) };
        tmp10 = callback(arg1(dependencyMap[5]).Text, obj1);
      }
      items[1] = tmp10;
      obj.children = items;
      let tmp4Result = closure_6(View, obj);
      const tmp4 = closure_6;
      const tmp5 = View;
    } else {
      tmp4Result = null;
    }
    tmp2 = tmp4Result;
  }
  return tmp2;
};
