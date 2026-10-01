// Module ID: 9068
// Function ID: 9069
// Name: ThrottledButton
// Dependencies: [19, 21, 5281, 2]
// Exports: default, useThrottledActionHandler

// Module 9068 (ThrottledButton)
import Fragment from "Fragment" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const f88063 = () => {
  let ref;
  return () => clearTimeout(ref.current);
};
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default function ThrottledButton(throttleMs) {
  let onPress;
  let onPressIn;
  let onPressOut;
  let num = throttleMs.throttleMs;
  ({ onPress, onPressIn, onPressOut } = throttleMs);
  if (num === undefined) {
    num = 500;
  }
  const merged = Object.assign(throttleMs, Object.assign({ onPress: 0, onPressIn: 0, onPressOut: 0, throttleMs: 0 }));
  num = undefined;
  if (num === undefined) {
    num = 500;
  }
  let closure_1 = react.useRef(null);
  const effect = react.useEffect(f88063, []);
  const Button = components_Button_Button.Button;
  const merged1 = Object.assign(merged);
  return <Button onPress={(arg0) => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null === ref.current;
    }
    if (tmp2) {
      tmp(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        ref.current = null;
      }, num);
    }
  }} onPressIn={(arg0) => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null === ref.current;
    }
    if (tmp2) {
      tmp(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        ref.current = null;
      }, num);
    }
  }} onPressOut={(arg0) => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null === ref.current;
    }
    if (tmp2) {
      tmp(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        ref.current = null;
      }, num);
    }
  }} />;
};
export const useThrottledActionHandler = function useThrottledActionHandler() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 500;
  }
  let closure_1 = react.useRef(null);
  const effect = react.useEffect(f88063, []);
  return (arg0) => {
    let ref;
    let closure_0 = arg0;
    return (arg0) => {
      let tmp2 = null != closure_0;
      const tmp = closure_0;
      if (tmp2) {
        tmp2 = null === ref.current;
      }
      if (tmp2) {
        tmp(arg0);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          ref.current = null;
        }, num);
      }
    };
  };
};
