// Module ID: 3851
// Function ID: 32052
// Name: createThemedContext
// Dependencies: []
// Exports: UseThemeContext, createThemedContext

// Module 3851 (createThemedContext)
function createThemedContext(arg0) {
  const obj = {};
  const json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  obj["key"] = json;
  return obj;
}
function useThemeContext() {
  const context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    return context;
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ Fragment: closure_1, jsx: closure_2 } = arg1(dependencyMap[1]));
const themedContext = createThemedContext({ test: 6, clean: 48, release: "center", @types/jest: 1, @types/react: 0, jest: "hidden", react: "100%", react-native: "100%", react-native-builder-bob: null, react-native-worklets: "hidden" });
const context = importAllResult.createContext(themedContext);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx");

export { createThemedContext };
export { useThemeContext };
export const FALLBACK_THEME_CONTEXT_VALUE = themedContext;
export const ThemeContext = context;
export const UseThemeContext = function UseThemeContext(children) {
  return callback(closure_1, { children: children.children(useThemeContext()) });
};
