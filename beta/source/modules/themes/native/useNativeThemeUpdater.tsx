// Module ID: 17430
// Function ID: 17431
// Name: useNativeThemeUpdater
// Dependencies: [19, 1186, 558, 568, 17431, 17432, 2]

// Module 17430 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(4);
  _require = noop.useRef(ThemeStore.theme);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      closure_0(17431).updateVisualRefresh(true);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const layoutEffect = obj2.useLayoutEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      handleThemeUpdate(17432).updateTheme(ThemeStore.theme);
      handleThemeUpdate = function handleThemeUpdate() {
        const theme = ThemeStore.theme;
        if (theme !== handleThemeUpdate.current) {
          handleThemeUpdate.current = theme;
          handleThemeUpdate(17432).updateTheme(theme);
          const obj = handleThemeUpdate(17432);
        }
      };
      ThemeStore.addChangeListener(handleThemeUpdate);
      return () => {
        ThemeStore.removeChangeListener(handleThemeUpdate);
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const layoutEffect1 = obj2.useLayoutEffect(tmp5, tmp6);
}) : (() => {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(17431).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(17432).updateTheme(theme);
        const obj = handleThemeUpdate(17432);
      }
    }
    handleThemeUpdate(17432).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
});
