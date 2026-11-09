// Module ID: 485
// Function ID: 486
// Dependencies: [41, 42, 38, 486]

// Module 485
import _mod38 from "module_38" /* 38 */;
import _createClassDefault from "_createClass" /* 42 */;
import ShareModuleDefault from "ShareModule" /* 486 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class Share {
  constructor() {
    _classCallCheck(this, Share);
  }
}
const entry = {
  key: "share",
  value: function share(title) {
    let message;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let tmp4 = typeof title === "object";
    const tmp3 = _mod38;
    if (typeof title === "object") {
      tmp4 = null !== title;
    }
    tmp3(tmp4, "Content to share must be a valid object");
    const url = title.url;
    let tmp7 = typeof url === "string";
    const tmpResult = _mod38;
    if (typeof url !== "string") {
      tmp7 = typeof title.message === "string";
    }
    tmpResult(tmp7, "At least one of URL or message is required");
    let tmp10 = typeof obj === "object";
    const tmpResult4 = _mod38;
    if (typeof obj === "object") {
      tmp10 = null !== obj;
    }
    tmpResult4(tmp10, "Options must be a valid object");
    const tmpResult5 = _mod38;
    tmpResult5(ShareModuleDefault, "ShareModule should be registered on Android.");
    let tmp16 = null == title.title;
    const tmpResult6 = _mod38;
    if (!tmp16) {
      tmp16 = typeof title.title === "string";
    }
    tmpResult6(tmp16, "Invalid title: title should be a string.");
    const obj2 = { title: title.title, message };
    message = undefined;
    if (typeof title.message === "string") {
      message = title.message;
    }
    const tmp13Result = ShareModuleDefault;
    const shareResult = tmp13Result.share(obj2, obj.dialogTitle);
    return shareResult.then((result) => {
      const obj = { activityType: null };
      const merged = Object.assign(result);
      return obj;
    });
  }
};
const items = [entry];
const tmp2 = _createClassDefault(Share, null, items);
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;
