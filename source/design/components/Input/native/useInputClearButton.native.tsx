// Module ID: 5770
// Function ID: 49410
// Name: useInputClearButtonConfig
// Dependencies: []
// Exports: useInputClearButton

// Module 5770 (useInputClearButtonConfig)
function useInputClearButtonConfig(isClearable, state) {
  if (isClearable.isClearable) {
    if (state.hasValue) {
      let obj = {};
      obj = { size: "xs" };
      obj.content = jsx(state(dependencyMap[3]).CircleXIcon, obj);
      obj = { onPress: state.clear };
      const intl = state(dependencyMap[4]).intl;
      obj.accessibilityLabel = intl.string(state(dependencyMap[4]).t.VkKicb);
      obj.accessibilityRole = "button";
      obj.hitSlop = 4;
      obj.pressableProps = obj;
      return obj;
    }
  }
}
importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = function useInputClearButton(clearProps, clearState) {
  const tmp = useInputClearButtonConfig(clearProps, clearState);
  let tmp2 = null;
  if (null != tmp) {
    const obj = {};
    const merged = Object.assign(tmp.pressableProps);
    obj["children"] = tmp.content;
    tmp2 = <Pressable {...obj} />;
  }
  return tmp2;
};
export { useInputClearButtonConfig };
