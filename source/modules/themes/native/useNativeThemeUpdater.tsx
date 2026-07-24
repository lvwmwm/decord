// Module ID: 15685
// Function ID: 120920
// Name: useNativeThemeUpdater
// Dependencies: [31, 1278, 1324, 15686, 15687, 2]
// Exports: default

// Module 15685 (useNativeThemeUpdater)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let require = arg1;
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  const tmp = importDefault(1324)("useNativeThemeUpdater");
  const require = tmp;
  importDefault = React.useRef(theme.theme);
  const items = [tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    tmp(outer1_2[3]).updateVisualRefresh(tmp);
  }, items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = outer2_4.theme;
      if (theme !== outer1_1.current) {
        outer1_1.current = theme;
        handleThemeUpdate(outer2_2[4]).updateTheme(theme);
        const obj = handleThemeUpdate(outer2_2[4]);
      }
    }
    tmp(outer1_2[4]).updateTheme(outer1_4.theme);
    outer1_4.addChangeListener(handleThemeUpdate);
    return () => {
      outer2_4.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
