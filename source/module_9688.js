// Module ID: 9688
// Function ID: 75384
// Dependencies: []

// Module 9688
const jsx = arg1(dependencyMap[1]).jsx;

export default importDefault(dependencyMap[0]).forwardRef((defaultIndex, ref) => {
  let obj = ref(dependencyMap[2]);
  const initProps = obj.useInitProps(defaultIndex);
  const commonVariables = ref(dependencyMap[3]).useCommonVariables(initProps);
  const obj2 = ref(dependencyMap[3]);
  const propsErrorBoundary = ref(dependencyMap[4]).usePropsErrorBoundary(Object.assign({}, initProps, { dataLength: initProps.dataLength }));
  obj = { value: { props: initProps, common: commonVariables } };
  obj = { ref };
  obj.children = jsx(ref(dependencyMap[6]).CarouselLayout, obj);
  return jsx(ref(dependencyMap[5]).GlobalStateProvider, obj);
});
