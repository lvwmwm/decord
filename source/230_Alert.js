// Module ID: 230
// Function ID: 3228
// Name: Alert
// Dependencies: [231]

// Module 230 (Alert)
const require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    require(231) /* Alert */.default.alert("Alert", "" + arg0);
  };
}
