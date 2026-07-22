// Module ID: 16047
// Function ID: 123197
// Name: setSection
// Dependencies: []

// Module 16047 (setSection)
function setSection(section) {
  let obj = importDefault(dependencyMap[1]);
  obj = { type: "FRIENDS_SET_SECTION", section };
  obj.dispatch(obj);
}
const Routes = require(dependencyMap[0]).Routes;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("actions/FriendsActionCreators.tsx");

export default {
  transitionToSection(PENDING, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.explicit;
    if (flag === undefined) {
      flag = false;
    }
    if (obj2.getHistory().location.pathname !== Routes.FRIENDS) {
      require(dependencyMap[2]).transitionTo(Routes.FRIENDS);
      const obj3 = require(dependencyMap[2]);
    }
    setSection(PENDING);
    if (flag) {
      obj = { tab_opened: PENDING };
      importDefault(dependencyMap[3])(obj);
    }
  },
  setSection,
  setInitialSection(section) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "FRIENDS_SET_INITIAL_SECTION", section };
    obj.dispatch(obj);
  }
};
