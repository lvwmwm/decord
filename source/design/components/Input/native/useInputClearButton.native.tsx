// Module ID: 5768
// Function ID: 49359
// Name: useInputClearButtonConfig
// Dependencies: []
// Exports: useInputClearButton

// Module 5768 (useInputClearButtonConfig)
function useInputClearButtonConfig(fieldLabel, state) {
  fieldLabel = fieldLabel.fieldLabel;
  if (fieldLabel.isClearable) {
    if (state.hasValue) {
      if (null != fieldLabel) {
        if ("" !== fieldLabel) {
          const intl2 = state(dependencyMap[3]).intl;
          let obj = { fieldName: fieldLabel };
          let formatToPlainStringResult = intl2.formatToPlainString(state(dependencyMap[3]).t.7/UFPj, obj);
        }
        obj = {};
        obj = { size: "xs" };
        obj.content = jsx(state(dependencyMap[4]).CircleXIcon, obj);
        const obj1 = { onPress: state.clear, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "button", hitSlop: 4 };
        obj.pressableProps = obj1;
        return obj;
      }
      const intl = state(dependencyMap[3]).intl;
      formatToPlainStringResult = intl.string(state(dependencyMap[3]).t.VkKicb);
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
