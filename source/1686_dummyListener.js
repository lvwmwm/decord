// Module ID: 1686
// Function ID: 18664
// Name: dummyListener
// Dependencies: []

// Module 1686 (dummyListener)
function dummyListener() {

}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export const PropsFilter = () => {
  class PropsFilter {
    constructor() {
      tmp = closure_2(this, PropsFilter);
      map = new Map();
      this._initialPropsMap = map;
      return;
    }
  }
  const arg1 = PropsFilter;
  const items = [
    {
      key: "filterNonAnimatedProps",
      value: function filterNonAnimatedProps(props) {
        const PropsFilter = props;
        const self = this;
        props = props.props;
        const obj = {};
        for (const key10008 in props) {
          let tmp2 = key10008;
          closure_4 = key10008;
          let tmpResult = tmp();
        }
        return obj;
      }
    }
  ];
  return callback(PropsFilter, items);
}();
