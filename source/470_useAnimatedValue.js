// Module ID: 470
// Function ID: 6154
// Name: useAnimatedValue
// Dependencies: []
// Exports: default

// Module 470 (useAnimatedValue)
const useRef = require(dependencyMap[0]).useRef;

export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const Value = importDefault(dependencyMap[1]).Value;
    const prototype = Value.prototype;
    const value = new Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};
