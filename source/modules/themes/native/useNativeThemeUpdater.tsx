// Module ID: 16792
// Function ID: 16793
// Name: useNativeThemeUpdater
// Dependencies: [19, 1301, 16793, 16794, 2]
// Exports: default

// Module 16792 (useNativeThemeUpdater)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleThemeChange" /* 1301 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  closure_0 = React.useRef(theme.theme);
  const layoutEffect = React.useLayoutEffect(() => {
    callback(table[2]).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = React.useLayoutEffect(() => {
    function handleThemeUpdate(arg0) {
      const theme = closure_1_3.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(closure_1_1[3]).updateTheme(theme);
        const obj = handleThemeUpdate(closure_1_1[3]);
      }
    }
    callback(closure_1_1[3]).updateTheme(closure_1_3.theme);
    closure_1_3.addChangeListener(handleThemeUpdate);
    return () => {
      closure_2_3.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
