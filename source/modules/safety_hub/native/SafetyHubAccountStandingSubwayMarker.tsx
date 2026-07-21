// Module ID: 13536
// Function ID: 102687
// Name: SafetyHubAccountStandingSubwayMarker
// Dependencies: []
// Exports: default

// Module 13536 (SafetyHubAccountStandingSubwayMarker)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { marginTop: "useCallback", marginRight: "constructor", borderColor: "Array", borderStyle: "isArray", padding: importDefault(dependencyMap[4]).space.PX_4, borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.marker = obj;
const obj1 = { display: "x-success", alignItems: "%Math.pow%", justifyContent: "MiniaturesSpotIllustration", height: "toString", width: "isArray", borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.empty = obj1;
obj.label = { textAlign: "center" };
obj.firstOption = { videoQualityMeasurement: 55783168, GlobalStateProvider: -219463168 };
obj.lastOption = { videoQualityMeasurement: null, GlobalStateProvider: null };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default function SafetyHubAccountStandingSubwayMarker(arg0) {
  let index;
  let isSelected;
  let numOptions;
  let onLayout;
  let selectedIcon;
  let size;
  let status;
  ({ selectedIcon, style: closure_0, isSelected } = arg0);
  const importDefault = isSelected;
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = {};
  const merged = Object.assign(tmp.container);
  const merged1 = Object.assign(0 === index ? tmp.firstOption : {});
  const merged2 = Object.assign(index === numOptions - 1 ? tmp.lastOption : {});
  obj = { style: obj, onLayout };
  if (!isSelected) {
    obj = {};
    const obj1 = {};
    const merged3 = Object.assign(tmp.marker);
    obj1["width"] = size;
    obj1["height"] = size;
    let num = 0;
    if (tmp3) {
      num = -importDefault(dependencyMap[4]).space.PX_4;
    }
    obj1["marginLeft"] = num;
    let num3 = 0;
    if (index === numOptions - 1) {
      num3 = -importDefault(dependencyMap[4]).space.PX_4;
    }
    obj1["marginRight"] = num3;
    obj.style = obj1;
    const obj2 = { style: tmp.empty };
    obj.children = callback(View, obj2);
    selectedIcon = callback(View, obj);
    const tmp10 = callback;
    const tmp11 = View;
  }
  const items = [selectedIcon, ];
  const intl = arg1(dependencyMap[5]).intl;
  items[1] = intl.format(status, {
    hook(children) {
      if (isSelected) {
        let obj = {};
        obj = { color: lib.color };
        obj.style = obj;
        obj.variant = "text-xxs/bold";
        obj.children = children;
      } else {
        obj = { "Null": "dsnToString", "Null": "<string:1359155456>", style: tmp.label, children };
      }
      return closure_4(lib(closure_4[6]).Text, obj, arg1);
    }
  });
  obj.children = items;
  return closure_5(View, obj);
};
export const SUBWAY_MARKER_WIDTH = 56;
