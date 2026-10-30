// Module ID: 19005
// Function ID: 19006
// Name: useNativeThemeUpdater
// Dependencies: [19, 1193, 19006, 19007, 2]
// Exports: default

// Module 19005 (useNativeThemeUpdater)
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  let closure_0 = react.useRef(ThemeStore.theme);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[2]);
    obj.updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = react.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        const obj = handleThemeUpdate(dependencyMap[3]);
        obj.updateTheme(theme);
      }
    }
    let obj = handleThemeUpdate(dependencyMap[3]);
    obj.updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
