// Module ID: 15309
// Function ID: 116453
// Name: headerBackground
// Dependencies: []
// Exports: default

// Module 15309 (headerBackground)
function headerBackground(arg0) {
  return jsx(importDefault(dependencyMap[2]), { id: "Small", text: "sm", variant: "Placeholder" });
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = { headerBackground: undefined, contentStyle: undefined };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/client_themes/native/useThemedHeaderOptions.tsx");

export default function useThemedHeaderOptions() {
  const tmp = importDefault(dependencyMap[3])();
  const arg1 = tmp;
  const top = importDefault(dependencyMap[4])().top;
  const importDefault = top;
  const items = [top, tmp];
  return React.useMemo(() => {
    if (tmp) {
      let obj = tmp(closure_2[5]);
      if (obj.isIOS()) {
        let num3 = 0;
        if (top > 50) {
          num3 = 5;
        }
        let num5 = 44;
        if (obj3.isIpadOS()) {
          num5 = 46;
        }
        obj = { headerBackground: closure_6 };
        obj = { marginTop: -top + num3 + (56 - num5) };
        obj.contentStyle = obj;
        return obj;
      } else {
        const obj1 = { headerBackground: closure_6, contentStyle: contentStyle.contentStyle };
        return obj1;
      }
    } else {
      return contentStyle;
    }
  }, items);
};
