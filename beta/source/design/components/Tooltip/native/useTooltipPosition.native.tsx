// Module ID: 9958
// Function ID: 9959
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 9958 (react)
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default function useTooltipPosition(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  const items = [arg3, arg0, arg2, arg1, num];
  return react.useMemo(() => {
    size = closure_0;
    if (null != closure_0) {
      const size2 = closure_1;
      if (null != closure_1) {
        let str3;
        let obj;
        let obj6;
        if ("top" === closure_3) {
          str3 = "start";
        } else {
          str3 = "end";
        }
        let str4 = "center";
        let str5 = "center";
        if (tmp9 || "right" === tmp8) {
          str5 = str3;
        }
        const diff = styles.x - size2.x;
        const width = styles.width;
        const width2 = size.width;
        const width3 = size2.width;
        if ("start" === str5) {
          obj = { position: diff - width2 - num, adjustment: 0 };
          const obj2 = { position: diff - width2 - num, adjustment: 0 };
        } else if ("end" === str5) {
          obj = { position: diff + width + num, adjustment: 0 };
          const obj3 = { position: diff + width + num, adjustment: 0 };
        } else {
          let num3;
          const diff1 = diff + width / 2 - width2 / 2;
          if (diff1 < 12) {
            num3 = 12 - diff1;
          } else {
            num3 = 0;
            if (diff1 + width2 > width3 - 12) {
              num3 = width3 - diff1 - width2 - 12;
            }
          }
          obj = { position: diff1 + num3, adjustment: num3 };
        }
        if (!(tmp9 || "right" === tmp8)) {
          str4 = str3;
        }
        const diff2 = tmp2.y - size2.y;
        const height = tmp2.height;
        const height2 = size.height;
        const height3 = size2.height;
        if ("start" === str4) {
          obj6 = { position: diff2 - height2 - num, adjustment: 0 };
          const obj4 = { position: diff2 - height2 - num, adjustment: 0 };
        } else if ("end" === str4) {
          obj6 = { position: diff2 + height + num, adjustment: 0 };
          const obj5 = { position: diff2 + height + num, adjustment: 0 };
        } else {
          let num6;
          const diff3 = diff2 + height / 2 - height2 / 2;
          if (diff3 < 12) {
            num6 = 12 - diff3;
          } else {
            num6 = 0;
            if (diff3 + height2 > height3 - 12) {
              num6 = height3 - diff3 - height2 - 12;
            }
          }
          obj6 = { position: diff3 + num6, adjustment: num6 };
        }
        return { tooltipX: obj.position, tooltipY: obj6.position, adjustmentX: obj.adjustment, adjustmentY: obj6.adjustment };
      }
    }
    return { tooltipX: 0, tooltipY: 0, adjustmentX: 0, adjustmentY: 0 };
  }, items);
};
