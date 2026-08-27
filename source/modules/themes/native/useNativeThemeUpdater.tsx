// Module ID: 16449
// Function ID: 16450
// Name: useNativeThemeUpdater
// Dependencies: [19, 1302, 1367, 16450, 16451, 2]
// Exports: default

// Module 16449 (useNativeThemeUpdater)
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleThemeChange" /* 1302 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  const tmp = useIsMobileVisualRefreshExperimentEnabledDefault("useNativeThemeUpdater");
  closure_0 = tmp;
  importDefault = React.useRef(theme.theme);
  const items = [tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    callback(closure_1_2[3]).updateVisualRefresh(callback);
  }, items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    function handleThemeUpdate(arg0) {
      const theme = closure_1_4.theme;
      if (theme !== ref.current) {
        ref.current = theme;
        handleThemeUpdate(closure_1_2[4]).updateTheme(theme);
        const obj = handleThemeUpdate(closure_1_2[4]);
      }
    }
    callback(closure_1_2[4]).updateTheme(closure_1_4.theme);
    closure_1_4.addChangeListener(handleThemeUpdate);
    return () => {
      closure_2_4.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
