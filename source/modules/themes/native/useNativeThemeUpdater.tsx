// Module ID: 15510
// Function ID: 118343
// Name: useNativeThemeUpdater
// Dependencies: []
// Exports: default

// Module 15510 (useNativeThemeUpdater)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  const tmp = importDefault(dependencyMap[2])("useNativeThemeUpdater");
  const arg1 = tmp;
  const importDefault = React.useRef(theme.theme);
  const items = [tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    tmp(closure_2[3]).updateVisualRefresh(tmp);
  }, items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    function handleThemeUpdate(arg0) {
      const theme = closure_4.theme;
      if (theme !== ref.current) {
        ref.current = theme;
        handleThemeUpdate(closure_2[4]).updateTheme(theme);
        const obj = handleThemeUpdate(closure_2[4]);
      }
    }
    handleThemeUpdate(closure_2[4]).updateTheme(closure_4.theme);
    closure_4.addChangeListener(handleThemeUpdate);
    return () => {
      closure_4.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
