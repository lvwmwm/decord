// Module ID: 4505
// Function ID: 39682
// Name: ScreenFooter
// Dependencies: []
// Exports: FooterComponent

// Module 4505 (ScreenFooter)
class ScreenFooter {
  constructor(arg0) {
    tmp = importDefault(dependencyMap[2]);
    return jsx(tmp, Object.assign({}, global));
  }
}
importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;

export default ScreenFooter;
export const FooterComponent = function FooterComponent(children) {
  return <ScreenFooter collapsable={false}>{arg0.children}</ScreenFooter>;
};
