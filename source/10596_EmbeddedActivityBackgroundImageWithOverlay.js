// Module ID: 10596
// Function ID: 82693
// Name: EmbeddedActivityBackgroundImageWithOverlay
// Dependencies: []
// Exports: default

// Module 10596 (EmbeddedActivityBackgroundImageWithOverlay)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ ImageBackground: closure_4, View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BLACK };
obj.overlay = obj;
let closure_8 = obj.createStyles(obj);
let closure_9 = [240518194];
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  let application;
  let borderRadius;
  let dimensionsStyle;
  let resizeMode;
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  let importDefault;
  const tmp2 = callback(React.useState(false), 2);
  importDefault = tmp2[1];
  let obj = {};
  let id;
  const tmp = callback2();
  if (null != application) {
    id = application.id;
  }
  let str = "";
  if (null != id) {
    str = id;
  }
  obj.applicationId = str;
  obj.names = closure_9;
  obj.size = 1024;
  const url = importDefault(dependencyMap[6])(obj).url;
  let tmp10Result = null;
  if (!tmp2[0]) {
    tmp10Result = null;
    if (null != url) {
      tmp10Result = null;
      if ("" !== url) {
        obj = { resizeMode };
        obj = {};
        let tmp6;
        if (null != url) {
          tmp6 = url;
        }
        obj.uri = tmp6;
        obj.source = obj;
        if (null == dimensionsStyle) {
          dimensionsStyle = absoluteFillObject.absoluteFillObject;
        }
        obj.style = dimensionsStyle;
        const obj1 = { borderRadius };
        obj.imageStyle = obj1;
        obj.onError = function onError() {
          return callback(true);
        };
        const obj2 = {};
        const items = [tmp.overlay, ];
        const obj3 = { borderRadius };
        items[1] = obj3;
        obj2.style = items;
        obj.children = <closure_5 {...obj2} />;
        tmp10Result = <closure_4 {...obj} />;
        const tmp10 = jsx;
        const tmp11 = closure_4;
      }
    }
  }
  return tmp10Result;
};
