// Module ID: 10798
// Function ID: 83850
// Name: NativeRouter
// Dependencies: []

// Module 10798 (NativeRouter)
class NativeRouter {
  constructor(arg0) {
    return jsx(arg1(dependencyMap[3]).MemoryRouter, Object.assign({}, global));
  }
}
importDefault(dependencyMap[0]);
const Alert = arg1(dependencyMap[1]).Alert;
const jsx = arg1(dependencyMap[2]).jsx;
NativeRouter.defaultProps = {
  getUserConfirmation(captureScreenshotError) {
    let obj = {
      text: "Cancel",
      onPress() {
        return arg1(false);
      }
    };
    const items = [obj, ];
    obj = {
      text: "OK",
      onPress() {
        return arg1(true);
      }
    };
    items[1] = obj;
    Alert.alert("Confirm", captureScreenshotError, items);
  }
};
NativeRouter.propTypes = { initialEntries: importDefault(dependencyMap[4]).array, initialIndex: importDefault(dependencyMap[4]).number, getUserConfirmation: importDefault(dependencyMap[4]).func, keyLength: importDefault(dependencyMap[4]).number, children: importDefault(dependencyMap[4]).node };

export default NativeRouter;
