// Module ID: 11304
// Function ID: 11305
// Name: PinotChannelLabelAnchor
// Dependencies: [32, 19, 560, 2]
// Exports: usePinotChannelLabelAnchor, usePinotChannelLabelCenter

// Module 11304 (PinotChannelLabelAnchor)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let c1, labels;

let react = react_mod;
let closure_2 = module_560.create(() => ({ labels: {} }));
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabelAnchor.tsx");

export function usePinotChannelLabelAnchor(channelId) {
  let closure_1;
  let items1;
  let closure_0 = channelId;
  react = react.useRef(null);
  const items = [channelId];
  const onLayout = react.useCallback(() => {
    let ref;
    onLayout.setState((labels) => {
      labels = labels.labels;
      const current = ref.current;
      let num;
      const tmp = channelId;
      if (labels[channelId] != null) {
        num = tmp2.layoutVersion;
      }
      if (num == null) {
        num = 0;
      }
      const labels2 = {};
      const sum = num + 1;
      const merged = Object.assign(labels);
      let tmp5;
      if (null != current) {
        tmp5 = { view: current, layoutVersion: sum };
        const obj = { view: current, layoutVersion: sum };
      }
      labels2[tmp] = tmp5;
      return { labels: labels2 };
    });
  }, items);
  let obj = {
    ref: react.useCallback((current) => {
      closure_1.current = current;
      callback();
    }, items1),
    onLayout
  };
  items1 = [onLayout];
  return obj;
}
export function usePinotChannelLabelCenter(channelId, ref) {
  let closure_129_3;
  let tmp3;
  let tmp4;
  let tmp6;
  let closure_0 = channelId;
  let closure_1 = ref;
  let tmp = closure_2((arg0) => {
    let tmp = arg0.labels[closure_0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  });
  closure_2 = tmp;
  const tmp2 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2);
  [tmp3, tmp4] = tmp2;
  [tmp6, closure_129_3] = _slicedToArray(react.useState(null), 2);
  const items = [tmp, ref, tmp3];
  const tmp5 = _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    let tmp;
    let current = ref.current;
    if (null != closure_2) {
      if (null != current) {
        const view = tmp.view;
        view.measureInWindow((arg0, arg1, arg2) => {
          let label;
          current = arg0;
          let closure_1 = arg2;
          let tmp = closure_1;
          if (!tmp) {
            tmp = 0 === arg2;
          }
          if (!tmp) {
            current.measureInWindow((arg0) => {
              const tmp = c1;
              if (!tmp) {
                const obj = { label, center: closure_0 - arg0 + closure_1 / 2 };
                closure_3_3(obj);
              }
            });
          }
        });
        return () => {
          c1 = true;
        };
      }
    }
  }, items);
  let center = null;
  if (null != tmp) {
    let label;
    if (tmp6 != null) {
      label = tmp6.label;
    }
    center = null;
    if (label === tmp) {
      center = tmp6.center;
    }
  }
  let obj = { hasLabel: null != tmp, center, onContainerLayout: tmp4 };
  return obj;
}
